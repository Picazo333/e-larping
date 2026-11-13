#!/usr/bin/env node
/**
 * Harness de verificación del Worker generado — sin wrangler, sin red.
 * Carga src/worker.js con un stub de D1 implementado sobre node:sqlite
 * (SQLite real), aplica las migraciones + semilla, y ejercita:
 * catálogo, carrito, pedido (éxito, sin stock, y descuento de stock),
 * webhook de pago entrante, auto-respuesta de correo, capa agentic.
 * Uso: node test/harness.mjs [ruta-a-la-tienda]   (defecto: ../ejemplo)
 * Salida: PASS/FAIL por comprobación; exit 1 si algo falla.
 */
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STORE = path.resolve(process.argv[2] || path.join(__dirname, "..", "ejemplo"));

/* --- Stub D1 sobre SQLite real --- */
class Stmt {
  constructor(db, sql) { this.db = db; this.sql = sql; this.params = []; }
  bind(...p) { this.params = p; return this; }
  _run() { return this.db.prepare(this.sql); }
  async all() { const rows = this._run().all(...this.params); return { results: rows, success: true }; }
  async first() { return this._run().get(...this.params) ?? null; }
  async run() {
    const info = this._run().run(...this.params);
    return { success: true, meta: { changes: info.changes, last_row_id: Number(info.lastInsertRowid) } };
  }
}
class D1Stub {
  constructor(db) { this.db = db; }
  prepare(sql) { return new Stmt(this.db, sql); }
  async batch(stmts) {
    // D1 batch: atómico. Aquí, transacción SQLite real.
    const out = [];
    this.db.exec("BEGIN");
    try { for (const s of stmts) out.push(await s.run()); this.db.exec("COMMIT"); }
    catch (e) { this.db.exec("ROLLBACK"); throw e; }
    return out;
  }
  async exec(sql) { this.db.exec(sql); }
}

let pass = 0, fail = 0;
function check(nombre, cond, detalle = "") {
  if (cond) { pass++; console.log(`PASS  ${nombre}`); }
  else { fail++; console.log(`FAIL  ${nombre} ${detalle}`); }
}
const req = (p, opts = {}) => new Request(`https://tienda.local${p}`, opts);
const call = async (worker, env, p, opts) => {
  const r = await worker.fetch(req(p, opts), env, { waitUntil: (pr) => pr });
  const txt = await r.text();
  let body; try { body = JSON.parse(txt); } catch { body = txt; }
  return { status: r.status, body, txt };
};

(async () => {
  const db = new DatabaseSync(":memory:");
  const env = { DB: new D1Stub(db), ASSETS: null };
  const mig1 = fs.readFileSync(path.join(STORE, "migrations/0001_init.sql"), "utf8");
  const mig2 = fs.readFileSync(path.join(STORE, "migrations/0002_seed.sql"), "utf8");
  db.exec(mig1); db.exec(mig2);

  const worker = (await import(pathToFileURL(path.join(STORE, "src/worker.js")).href)).default;

  // 1. Salud + catálogo
  let r = await call(worker, env, "/api/health");
  check("health 200 con 5 productos", r.status === 200 && r.body.products === 5, JSON.stringify(r.body));
  r = await call(worker, env, "/api/products");
  check("catálogo lista 5 productos", r.status === 200 && r.body.products.length === 5, JSON.stringify(r.body).slice(0, 200));
  const pack = r.body.products.find((p) => p.handle === "pack-3-playeras");
  check("pack trae escalera por volumen 10/20/30", pack.volume_tiers.length === 3 && pack.volume_tiers[2].discount_percent === 30);
  const tee = r.body.products.find((p) => p.handle === "playera-negra-clasica");
  check("playera trae compare_at_price 129900 (tachado)", tee.compare_at_price_cents === 129900);
  r = await call(worker, env, "/products.json");
  check("products.json (forma Shopify) 200", r.status === 200 && r.body.products.length === 5);
  r = await call(worker, env, "/products/hoodie-grunge.js");
  check("producto .js 200", r.status === 200 && r.body.handle === "hoodie-grunge");

  // 2. Carrito: escalera por volumen + promo + envío gratis por umbral
  const vPack = pack.variants[0].id, vTee = tee.variants[0].id;
  r = await call(worker, env, "/api/cart", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items: [{ variant_id: vPack, qty: 3 }] }) });
  // Pack: 49900 base, 3 uds -> -20% = 39920 c/u -> 119760; umbral 200000 no alcanzado -> envío 9900
  check("carrito 3 packs: unit 39920 (-20%) y subtotal 119760", r.status === 201 && r.body.lines[0].unit_cents === 39920 && r.body.subtotal_cents === 119760, JSON.stringify(r.body));
  check("carrito muestra lo que falta para envío gratis", r.body.missing_for_free_shipping_cents === 200000 - 119760);
  r = await call(worker, env, "/api/cart", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items: [{ variant_id: vPack, qty: 6 }] }) });
  check("carrito 6 packs: -30% y envío gratis (209580>=200000)", r.body.lines[0].unit_cents === 34930 && r.body.shipping_cents === 0, JSON.stringify(r.body));
  const hoodie = (await call(worker, env, "/api/products/hoodie-grunge")).body.product;
  r = await call(worker, env, "/api/cart", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items: [{ variant_id: hoodie.variants[0].id, qty: 1 }] }) });
  check("hoodie con promo -15%: 89900 -> 76415", r.body.lines[0].unit_cents === 76415 && r.body.lines[0].promo_applied === true, JSON.stringify(r.body));

  // 3. Pedido OK (pickup): descuenta stock, registra webhook + correo
  const gorra = (await call(worker, env, "/api/products/gorra-bordada")).body.product;
  const stockAntes = gorra.variants[0].stock; // 2
  r = await call(worker, env, "/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items: [{ variant_id: gorra.variants[0].id, qty: 1 }], customer: { name: "Prueba", email: "prueba@ejemplo.local" }, fulfillment: { type: "pickup" }, payment_method: "stub" }) });
  check("pedido pickup 201, total 34900 (sin envío)", r.status === 201 && r.body.total_cents === 34900, JSON.stringify(r.body));
  const orderId = r.body.order_id;
  const despues = (await call(worker, env, "/api/products/gorra-bordada")).body.product;
  check("stock descontado al crear el pedido (2 -> 1)", despues.variants[0].stock === stockAntes - 1);
  const movs = db.prepare("SELECT COUNT(*) AS n FROM inventory_movements WHERE reason='order'").get();
  check("movimiento de inventario 'order' registrado", movs.n === 1, JSON.stringify(movs));
  const wh = db.prepare("SELECT event, status FROM webhook_deliveries ORDER BY created_at").all();
  check("webhooks order.created + payment.authorized + inventory.low registrados", wh.some((w) => w.event === "order.created") && wh.some((w) => w.event === "inventory.low"), JSON.stringify(wh));
  const mails = db.prepare("SELECT kind, recipient, status FROM email_outbox").all();
  check("auto-respuesta de confirmación en cola (queued, sin proveedor)", mails.some((m) => m.kind === "order_confirmation" && m.recipient === "prueba@ejemplo.local" && m.status === "queued"), JSON.stringify(mails));
  r = await call(worker, env, `/api/orders/${orderId}`);
  check("GET pedido devuelve pedido + items", r.status === 200 && r.body.items.length === 1);

  // 4. Sin stock: 409 ANTES del cobro, sin descontar nada
  r = await call(worker, env, "/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items: [{ variant_id: gorra.variants[0].id, qty: 5 }], customer: { name: "Prueba", email: "prueba@ejemplo.local" }, fulfillment: { type: "pickup" } }) });
  check("pedido sin stock -> 409 out_of_stock con detalle", r.status === 409 && r.body.error === "out_of_stock" && r.body.items[0].stock === 1, JSON.stringify(r.body));
  const stockTras409 = (await call(worker, env, "/api/products/gorra-bordada")).body.product.variants[0].stock;
  check("el 409 no descuenta stock (sigue en 1)", stockTras409 === 1);

  // 5. Webhook de pago entrante (stub)
  r = await call(worker, env, "/api/webhooks/payment", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ order_id: orderId, status: "paid" }) });
  check("webhook payment entrante 200", r.status === 200 && r.body.ok === true);
  const ord = db.prepare("SELECT payment_status FROM orders WHERE id=?").get(orderId);
  check("payment_status actualizado a paid", ord.payment_status === "paid");

  // 6. Capa agentic
  r = await call(worker, env, "/.well-known/ucp");
  check("UCP 200, versión 2026-08-25, sin payment_handlers (v1 sin pasarela)", r.status === 200 && r.body.ucp.version === "2026-08-25" && !("payment_handlers" in r.body));
  r = await call(worker, env, "/agents.md");
  check("agents.md 200", r.status === 200 && r.txt.includes("Agent Instructions"));
  r = await call(worker, env, "/robots.txt");
  check("robots.txt permite GPTBot/ClaudeBot y enlaza agents.md", r.status === 200 && r.txt.includes("GPTBot") && r.txt.includes("/agents.md"));
  r = await call(worker, env, "/sitemap.xml");
  check("sitemap.xml incluye fichas de producto", r.status === 200 && r.txt.includes("/products/pack-3-playeras.html"));
  r = await call(worker, env, "/api/ucp/mcp", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list" }) });
  check("MCP tools/list con 4 herramientas", r.status === 200 && r.body.result.tools.length === 4, JSON.stringify(r.body).slice(0, 200));
  r = await call(worker, env, "/api/ucp/mcp", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "catalog.search", arguments: { query: "hoodie" } } }) });
  check("MCP catalog.search encuentra el hoodie", r.status === 200 && r.body.result.content[0].text.includes("hoodie-grunge"));

  // 7. Fichas estáticas generadas (las sirve Static Assets; aquí se leen del disco)
  const ficha = fs.readFileSync(path.join(STORE, "public/products/playera-negra-clasica.html"), "utf8");
  check("ficha estática con JSON-LD Product + precio + stock", ficha.includes('"@type":"Product"') && ficha.includes("InStock") && ficha.includes("129900") === false /* el tachado va en HTML, no en JSON-LD */);
  check("ficha estática muestra tachado visible", ficha.includes("tachado") && ficha.includes("$1,299.00"));
  const sinExternos = !/fonts\.googleapis|cdn\.|https?:\/\/(?!ejemplo\.local|schema\.org)/.test(ficha);
  check("ficha estática sin fuentes externas (solo dominio propio y schema.org)", sinExternos);
  const idx = fs.readFileSync(path.join(STORE, "public/index.html"), "utf8");
  check("index sin fuentes externas ni sombras (style.css)", !/fonts\.googleapis/.test(idx) && fs.readFileSync(path.join(STORE, "public/style.css"), "utf8").includes("border-radius: 0"));

  console.log(`\n${pass} PASS, ${fail} FAIL`);
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error("HARNESS ERROR:", e); process.exit(1); });
