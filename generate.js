#!/usr/bin/env node
/**
 * Generador de tiendas — Fase 3, WO-E-LARPING.
 * Node sin dependencias (solo stdlib). Corre offline:
 *   node generate.js --config store-config.example.json --out ejemplo
 *
 * Recibe un JSON de configuración de tienda y emite un directorio de
 * tienda completo, listo para desplegar en Cloudflare (Workers + D1 +
 * Static Assets). Sin secretos, sin gasto, sin publicar nada.
 *
 * Lecciones aplicadas (síntesis Fase 2, §10):
 *  2. precio visible con tachado (compare_at_price) en cada ficha + JSON-LD.
 *  3. la promo sigue al producto: tachado, escalera por volumen, promo por
 *     producto — todo en la configuración, no en código.
 *  5. pickup como ventaja: punto de entrega publicado en la tienda.
 *  6. mensajería, umbral de envío gratis y política de devoluciones
 *     publicadas en el propio sitio (y cumplidas por el Worker).
 *  8. robots abierto a crawlers de IA, sitemap, fichas indexables,
 *     marcado Product con precio+stock; capa agentic (agents.md + UCP)
 *     modelada en la plantilla Shopify observada en F4T3/TANE.
 *  9. fricción resuelta: reembolso en 3–5 días, devolución gratuita,
 *     disponibilidad verificada antes del cobro.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const TPL = path.join(ROOT, "templates");

function arg(name, def) {
  const i = process.argv.indexOf(name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
function leer(file) { return fs.readFileSync(file, "utf8"); }
function escribir(file, contenido) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contenido);
}
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const escSql = (s) => String(s ?? "").replace(/'/g, "''");
const mxn = (cents) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(cents / 100);
const slugOk = (s) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);

/* ------------------------------------------------------------------ */
/* Validación de la configuración                                      */
/* ------------------------------------------------------------------ */
function validar(cfg) {
  const errores = [];
  if (!cfg.store?.name) errores.push("store.name es obligatorio.");
  if (!cfg.store?.slug || !slugOk(cfg.store.slug)) errores.push("store.slug es obligatorio y debe ser minúsculas con guiones.");
  if (!cfg.store?.domain) errores.push("store.domain es obligatorio (dominio canónico de la tienda).");
  if (!cfg.shipping?.pickup?.name) errores.push("shipping.pickup.name es obligatorio (punto de entrega).");
  if (typeof cfg.shipping?.free_threshold_cents !== "number") errores.push("shipping.free_threshold_cents (centavos) es obligatorio.");
  if (!cfg.returns?.refund_days) errores.push("returns.refund_days es obligatorio (p. ej. '3–5 días').");
  if (!Array.isArray(cfg.products) || !cfg.products.length) errores.push("products debe tener al menos un producto.");
  const handles = new Set(), skus = new Set();
  for (const p of cfg.products || []) {
    if (!p.handle || !slugOk(p.handle)) errores.push(`Producto sin handle válido: ${JSON.stringify(p.title)}`);
    if (handles.has(p.handle)) errores.push(`Handle duplicado: ${p.handle}`);
    handles.add(p.handle);
    if (typeof p.price_cents !== "number" || p.price_cents <= 0) errores.push(`Precio inválido en ${p.handle}.`);
    if (p.compare_at_price_cents && p.compare_at_price_cents <= p.price_cents)
      errores.push(`compare_at_price debe ser mayor que price en ${p.handle} (el tachado solo existe si hay descuento real).`);
    if (!Array.isArray(p.variants) || !p.variants.length) errores.push(`Producto sin variantes: ${p.handle}`);
    for (const v of p.variants || []) {
      if (!v.sku) errores.push(`Variante sin SKU en ${p.handle}.`);
      if (skus.has(v.sku)) errores.push(`SKU duplicado: ${v.sku}`);
      skus.add(v.sku);
      if (typeof v.stock !== "number" || v.stock < 0) errores.push(`Stock inválido en SKU ${v.sku}.`);
    }
    for (const t of p.volume_tiers || []) {
      if (typeof t.min_qty !== "number" || typeof t.discount_percent !== "number" || t.discount_percent <= 0 || t.discount_percent >= 100)
        errores.push(`Escalera de volumen inválida en ${p.handle}.`);
    }
    if (p.promo && !["percent", "fixed"].includes(p.promo.type)) errores.push(`promo.type inválido en ${p.handle} (percent|fixed).`);
  }
  if (errores.length) {
    console.error("Configuración inválida:\n- " + errores.join("\n- "));
    process.exit(1);
  }
}

/* ------------------------------------------------------------------ */
/* Textos generados: agents.md, perfil UCP, robots, sitemap            */
/* ------------------------------------------------------------------ */
function buildAgentsMd(cfg) {
  const s = cfg.store, sh = cfg.shipping, r = cfg.returns;
  return `# Agent Instructions — ${s.name}\n\nThis store is built on Cloudflare Workers + D1 (generated by the e-larping store generator, Fase 3). It supports UCP natively.\n\n## Discovery\n- UCP profile: \`/.well-known/ucp\` (UCP version 2026-08-25)\n- MCP endpoint: \`/api/ucp/mcp\` (JSON-RPC 2.0: initialize, tools/list, tools/call)\n- Catalog: \`/api/products\`, \`/products.json\`, \`/products/{handle}.js\`\n- Buy permalink: \`/buy\` (redirects to the cart)\n\n## Tools (MCP)\n- \`catalog.search\` — search products by text.\n- \`catalog.lookup\` — one product by handle, with price and stock.\n- \`cart.create\` — priced cart (volume tiers and per-product promos applied).\n- \`order.lookup\` — one order by id.\n\n## Rules for agents\n- Prices shown are final in ${s.currency || "MXN"}; \`compare_at_price\` is the struck-through list price, never the charged price.\n- Availability is verified BEFORE any charge. If stock is insufficient the order is refused with 409 and nothing is charged.\n- Payment is handled by the store checkout, not by the agent. The UCP profile declares no payment handlers in v1 (no real payment adapter yet); the agent builds the cart and hands off to checkout.\n- Fulfillment: shipping (${sh.carriers.join(", ")}; free over ${mxn(sh.free_threshold_cents)}) or pickup at ${sh.pickup.name}, ${sh.pickup.address} (${sh.pickup.hours}).\n- Returns: free within ${r.days} days; refund in ${r.refund_days}.\n- Respect 429 with backoff and Retry-After. Do not script form submissions.\n\n## Policies\n- Returns & shipping: \`/politicas.html\`\n- Sitemap: \`/sitemap.xml\`\n`;
}

function buildUcp(cfg) {
  const s = cfg.store, base = `https://${s.domain}`;
  return {
    ucp: { version: "2026-08-25", supported_versions: ["2026-08-25", "2026-04-08", "2026-01-23"] },
    store: { name: s.name, domain: s.domain },
    services: {
      "dev.ucp.shopping": {
        transport: { mcp: { endpoint: `${base}/api/ucp/mcp` }, embedded: { endpoint: `${base}/api/ucp/mcp` } },
        capabilities: ["checkout", "cart", "order", "catalog.search", "catalog.lookup", "discount", "fulfillment", "buyer_consent"],
        fulfillment: { method_combinations: [["shipping"], ["pickup"]] },
      },
      "dev.ucp.common": { transport: { mcp: { endpoint: `${base}/api/ucp/mcp` } }, capabilities: ["common.ask"] },
    },
    // Sin payment_handlers en v1 (síntesis §10.2): no hay pasarela real
    // todavía — el cobro lo hace el checkout de la tienda, no el agente.
    // Se omite el campo en vez de declararlo vacío: un objeto vacío es
    // la plantilla sin rellenar, no una decisión. Al conectar una
    // pasarela, declarar aquí sus handlers reales.
    shopping: { permalink: { endpoint: `${base}/buy` } },
  };
}

function buildRobots(cfg) {
  const base = `https://${cfg.store.domain}`;
  return `# ${cfg.store.name} — robots.txt generado por el pipeline e-larping (Fase 3).\n# Abierto a crawlers de IA: el contenido que cita vive en este dominio.\nUser-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /checkout\nDisallow: /carrito.html\n\n# Crawlers de IA (permitidos explícitamente)\nUser-agent: GPTBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: CCBot\nAllow: /\n\n# Agent instructions\n# Agent instructions: ${base}/agents.md\n# UCP discovery: ${base}/.well-known/ucp\n# UCP/MCP endpoint: ${base}/api/ucp/mcp\n\nSitemap: ${base}/sitemap.xml\n`;
}

function buildSitemap(cfg) {
  const base = `https://${cfg.store.domain}`;
  const urls = ["", "politicas.html", "carrito.html"]
    .map((p) => `  <url><loc>${base}/${p}</loc><changefreq>weekly</changefreq></url>`)
    .concat(cfg.products.map((p) => `  <url><loc>${base}/products/${p.handle}.html</loc><changefreq>weekly</changefreq></url>`))
    .concat([`  <url><loc>${base}/agents.md</loc><changefreq>weekly</changefreq></url>`]);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

/* ------------------------------------------------------------------ */
/* seed.sql (migración 0002)                                           */
/* ------------------------------------------------------------------ */
function buildSeed(cfg) {
  const out = ["-- Semilla generada por pipeline/generate.js a partir de la configuración.",
    "-- El stock del producto es la suma del stock de sus variantes.",
    "-- Los movimientos 'seed' dejan el ledger de inventario en cero inicial explícito."];
  let id = 1;
  for (const p of cfg.products) {
    const stock = p.variants.reduce((a, v) => a + v.stock, 0);
    const promo = p.promo || {};
    const tiers = JSON.stringify(p.volume_tiers || []);
    out.push(`INSERT INTO products (id, handle, title, description, vendor, product_type, tags, price_cents, compare_at_price_cents, image, stock, low_stock_threshold, promo_type, promo_value, promo_label, promo_starts_at, promo_ends_at, volume_tiers_json, sort_order, active) VALUES (${id}, '${escSql(p.handle)}', '${escSql(p.title)}', '${escSql(p.description)}', '${escSql(p.vendor || cfg.store.name)}', '${escSql(p.product_type || "")}', '${escSql((p.tags || []).join(","))}', ${p.price_cents}, ${p.compare_at_price_cents || "NULL"}, ${p.image ? `'${escSql(p.image)}'` : "NULL"}, ${stock}, ${cfg.store.low_stock_threshold ?? 3}, ${promo.type ? `'${escSql(promo.type)}'` : "NULL"}, ${promo.value ?? "NULL"}, ${promo.label ? `'${escSql(promo.label)}'` : "NULL"}, ${promo.starts ? `'${escSql(promo.starts)}'` : "NULL"}, ${promo.ends ? `'${escSql(promo.ends)}'` : "NULL"}, '${escSql(tiers)}', ${id}, 1);`);
    let vid = id * 100 + 1;
    for (const v of p.variants) {
      out.push(`INSERT INTO variants (id, product_id, sku, title, price_cents_override, stock) VALUES (${vid}, ${id}, '${escSql(v.sku)}', '${escSql(v.title)}', ${v.price_cents ?? "NULL"}, ${v.stock});`);
      out.push(`INSERT INTO inventory_movements (variant_id, delta, reason, order_id, created_at) VALUES (${vid}, ${v.stock}, 'seed', NULL, '${new Date().toISOString()}');`);
      vid++;
    }
    id++;
  }
  return out.join("\n") + "\n";
}

/* ------------------------------------------------------------------ */
/* Páginas estáticas (identidad Serotoninn: #FFF9F7, negro, display    */
/* fuerte, radio 0, sin sombras, sin fuentes externas)                 */
/* ------------------------------------------------------------------ */
function chrome(cfg, titulo, cuerpo) {
  const s = cfg.store;
  return `<!doctype html>
<html lang="es-MX">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)} — ${esc(s.name)}</title>
<meta name="description" content="${esc(s.tagline || "")}">
<link rel="stylesheet" href="/style.css"></head>
<body>
<header class="top"><a class="brand display" href="/" style="text-decoration:none">${esc(s.name)}</a>
<nav><a href="/">Tienda</a><a href="/politicas.html">Envíos y devoluciones</a><a href="/carrito.html" data-contador-carrito>Carrito</a></nav></header>
<main>${cuerpo}</main>
<footer><div><div class="display">${esc(s.name)}</div><p class="nota">${esc(s.tagline || "")}</p></div>
<div><p class="nota">Pickup: ${esc(cfg.shipping.pickup.name)} — ${esc(cfg.shipping.pickup.address)} (${esc(cfg.shipping.pickup.hours)}).<br>Envío gratis a partir de ${mxn(cfg.shipping.free_threshold_cents)} · Devolución gratuita ${cfg.returns.days} días · Reembolso en ${cfg.returns.refund_days}.</p></div></footer>
<script src="/app.js"></script>
</body></html>
`;
}

function tarjetaProducto(cfg, p, i) {
  const tachado = p.compare_at_price_cents ? `<span class="tachado">${mxn(p.compare_at_price_cents)}</span>` : "";
  const etiqueta = p.promo?.label ? `<span class="etiqueta">${esc(p.promo.label)}</span>` : (p.volume_tiers?.length ? `<span class="etiqueta">Precio por volumen</span>` : "");
  const inicial = esc(p.title.split(" ").map((w) => w[0]).slice(0, 2).join(""));
  return `<article class="card"><a href="/products/${p.handle}.html" style="text-decoration:none"><div class="foto">${inicial}</div></a>
<div class="cuerpo"><h3><a href="/products/${p.handle}.html" style="text-decoration:none">${esc(p.title)}</a></h3>
<p class="nota">${esc(p.description)}</p>${etiqueta}
<p class="precio">${tachado}${mxn(p.price_cents)}</p>
<p class="nota">${p.variants.reduce((a, v) => a + v.stock, 0) > 0 ? "En stock" : "Agotado"}</p>
<button class="boton" data-agregar="${p.variants[0].id}" ${p.variants.reduce((a, v) => a + v.stock, 0) === 0 ? "disabled" : ""}>Agregar al carrito</button></div></article>`;
}

function paginaProducto(cfg, p) {
  const s = cfg.store;
  const precioUnit = p.price_cents;
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Product", name: p.title,
    description: p.description, image: p.image ? `https://${s.domain}${p.image}` : undefined,
    brand: { "@type": "Brand", name: p.vendor || s.name },
    offers: {
      "@type": "AggregateOffer", priceCurrency: s.currency || "MXN",
      lowPrice: (precioUnit / 100).toFixed(2),
      highPrice: (precioUnit / 100).toFixed(2),
      offerCount: p.variants.length,
      offers: p.variants.map((v) => ({
        "@type": "Offer", sku: v.sku, price: (precioUnit / 100).toFixed(2),
        priceCurrency: s.currency || "MXN",
        availability: v.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
      })),
    },
  };
  const tachado = p.compare_at_price_cents ? `<span class="tachado">${mxn(p.compare_at_price_cents)}</span>` : "";
  const tiers = (p.volume_tiers || []).map((t) => `<tr><td>${t.min_qty} o más</td><td>−${t.discount_percent}% por pieza</td></tr>`).join("");
  const cuerpo = `
<section class="hero"><h1 class="display">${esc(p.title)}</h1></section>
<p class="precio" style="font-size:28px">${tachado}${mxn(precioUnit)}</p>
${p.promo?.label ? `<p><span class="etiqueta">${esc(p.promo.label)}</span></p>` : ""}
<p style="max-width:640px;margin:16px 0">${esc(p.description)}</p>
${tiers ? `<h2 class="display" style="font-size:24px;margin-top:32px">Precio por volumen</h2><table><tr><th>Cantidad</th><th>Descuento</th></tr>${tiers}</table>` : ""}
<label for="variante">Variante</label>
<select id="variante">${p.variants.map((v, i) => `<option value="${v.id}">${esc(v.title)} — ${v.stock > 0 ? v.stock + " en stock" : "agotado"}</option>`).join("")}</select>
<label for="cantidad">Cantidad</label>
<input id="cantidad" type="number" min="1" value="1">
<p style="margin:16px 0"><button class="boton" id="agregar">Agregar al carrito</button> <a class="boton secundario" href="/carrito.html">Ver carrito</a></p>
<p class="nota">Envío gratis a partir de ${mxn(cfg.shipping.free_threshold_cents)} · Pickup en ${esc(cfg.shipping.pickup.name)} · Devolución gratuita ${cfg.returns.days} días, reembolso en ${cfg.returns.refund_days}. La disponibilidad se verifica antes del cobro.</p>
<script>
document.getElementById("agregar").addEventListener("click", () => {
  const v = document.getElementById("variante").value;
  const q = Math.max(1, parseInt(document.getElementById("cantidad").value || "1", 10));
  for (let i = 0; i < q; i++) agregar(v, 1);
  document.getElementById("agregar").textContent = "Agregado ✓";
});
</script>
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  return chrome(cfg, p.title, cuerpo);
}

function paginaIndex(cfg) {
  const s = cfg.store;
  const cuerpo = `
<section class="hero"><h1 class="display">${esc(s.hero_headline || s.name)}</h1><p>${esc(s.tagline || "")}</p>
<p style="margin-top:16px"><a class="boton" href="#productos">Ver productos</a></p></section>
<section><h2 class="manifiesto display">${esc(s.manifiesto || "")}</h2></section>
<section id="productos"><div class="grid">${cfg.products.map((p, i) => tarjetaProducto(cfg, p, i)).join("\n")}</div></section>
<section class="aviso"><h2 class="display" style="font-size:24px">Envío y devoluciones, sin letra chica</h2>
<p class="nota" style="margin-top:8px">Envío gratis a partir de ${mxn(cfg.shipping.free_threshold_cents)} (${cfg.shipping.carriers.join(", ")}). Pickup gratis en ${esc(cfg.shipping.pickup.name)} — ${esc(cfg.shipping.pickup.address)} (${esc(cfg.shipping.pickup.hours)}). Devolución gratuita dentro de ${cfg.returns.days} días; reembolso en ${cfg.returns.refund_days}. Verificamos disponibilidad antes de cobrar: si no hay stock, no se cobra.</p></section>`;
  return chrome(cfg, s.name, cuerpo);
}

function paginaPoliticas(cfg) {
  const r = cfg.returns, sh = cfg.shipping;
  const cuerpo = `
<section class="hero"><h1 class="display">Envíos y devoluciones</h1></section>
<h2 class="display" style="font-size:24px">Envío</h2>
<p class="nota" style="margin:8px 0 16px">Mensajerías: ${sh.carriers.join(", ")}. Envío gratis a partir de ${mxn(sh.free_threshold_cents)}; por debajo, tarifa plana de ${mxn(sh.flat_cents)}. Pickup gratuito en ${esc(sh.pickup.name)} — ${esc(sh.pickup.address)} (${esc(sh.pickup.hours)}).</p>
<h2 class="display" style="font-size:24px">Pickup</h2>
<p class="nota" style="margin:8px 0 16px">Elige "Recoger en tienda" en el checkout. Te avisamos por correo cuando tu pedido esté listo. Lleva tu número de pedido.</p>
<h2 class="display" style="font-size:24px">Devoluciones</h2>
<p class="nota" style="margin:8px 0 16px">${esc(r.note || "")} Devolución gratuita dentro de ${r.days} días desde la entrega. Reembolso en ${r.refund_days} al mismo medio de pago. Para devolver, escribe a ${esc(cfg.email?.from || "la tienda")} con tu número de pedido.</p>
<h2 class="display" style="font-size:24px">Disponibilidad</h2>
<p class="nota">Verificamos el stock antes de cobrar. Si un artículo no tiene stock suficiente, el pedido se rechaza y no se realiza ningún cobro.</p>`;
  return chrome(cfg, "Envíos y devoluciones", cuerpo);
}

function paginaCarrito(cfg) {
  const cuerpo = `
<section class="hero"><h1 class="display">Tu carrito</h1></section>
<div id="barra" class="barra-envio"></div>
<div id="carrito"><p>Cargando…</p></div>
<p style="margin:16px 0"><a class="boton" href="/checkout.html">Ir al checkout</a> <a class="boton secundario" href="/">Seguir comprando</a></p>
<script>
(async () => {
  const el = document.getElementById("carrito"), barra = document.getElementById("barra");
  const items = leerCarrito();
  if (!items.length) { el.innerHTML = "<p>Tu carrito está vacío.</p>"; barra.innerHTML = ""; return; }
  try {
    const c = await valorar();
    const pct = Math.min(100, Math.round(c.subtotal_cents / c.free_shipping_threshold_cents * 100));
    barra.innerHTML = c.missing_for_free_shipping_cents > 0
      ? "<strong>Te faltan " + fmt(c.missing_for_free_shipping_cents) + " para envío gratis.</strong><div class='progreso'><i style='width:" + pct + "%'></i></div>"
      : "<strong>¡Tienes envío gratis!</strong><div class='progreso'><i style='width:100%'></i></div>";
    el.innerHTML = "<table><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Total</th><th></th></tr>" +
      c.lines.map((l) => "<tr><td>" + l.product_title + " — " + l.variant_title + (l.promo_applied ? " <span class='etiqueta'>promo</span>" : "") + "</td><td>" + l.qty + "</td><td>" + fmt(l.unit_cents) + "</td><td>" + fmt(l.line_total_cents) + "</td><td><button data-quitar='" + l.variant_id + "'>Quitar</button></td></tr>").join("") +
      "</table><p>Subtotal: <strong>" + fmt(c.subtotal_cents) + "</strong></p><p>Envío: <strong>" + fmt(c.shipping_cents) + "</strong></p><p>Total: <strong>" + fmt(c.total_cents) + "</strong></p>";
  } catch (e) { el.innerHTML = "<p>No se pudo cargar el carrito: " + e.message + "</p>"; }
})();
</script>`;
  return chrome(cfg, "Carrito", cuerpo);
}

function paginaCheckout(cfg) {
  const cuerpo = `
<section class="hero"><h1 class="display">Checkout</h1></section>
<div id="resumen"><p>Cargando resumen…</p></div>
<form id="pedido">
<label for="nombre">Nombre</label><input id="nombre" required>
<label for="correo">Correo</label><input id="correo" type="email" required>
<label for="entrega">Entrega</label>
<select id="entrega"><option value="shipping">Envío a domicilio</option><option value="pickup">Pickup — ${esc(cfg.shipping.pickup.name)}</option></select>
<div id="direccion-bloque"><label for="direccion">Dirección de envío</label><input id="direccion" placeholder="Calle, número, colonia, CP, ciudad"></div>
<p class="nota" style="margin:12px 0">Pago: adaptador stub en esta versión — no se realiza ningún cobro real. Al conectar la pasarela, aquí va su formulario.</p>
<button class="boton" type="submit">Confirmar pedido</button>
</form>
<div id="resultado"></div>
<script>
document.getElementById("entrega").addEventListener("change", (e) => {
  document.getElementById("direccion-bloque").style.display = e.target.value === "pickup" ? "none" : "block";
});
(async () => {
  const items = leerCarrito();
  const el = document.getElementById("resumen");
  if (!items.length) { el.innerHTML = "<p>Tu carrito está vacío.</p>"; return; }
  const c = await valorar();
  el.innerHTML = "<p>Subtotal " + fmt(c.subtotal_cents) + " · Envío " + fmt(c.shipping_cents) + " · <strong>Total " + fmt(c.total_cents) + "</strong></p>";
})();
document.getElementById("pedido").addEventListener("submit", async (e) => {
  e.preventDefault();
  const entrega = document.getElementById("entrega").value;
  const body = { items: leerCarrito(), customer: { name: document.getElementById("nombre").value, email: document.getElementById("correo").value }, fulfillment: { type: entrega, address: entrega === "shipping" ? document.getElementById("direccion").value : undefined }, payment_method: "stub" };
  const r = await fetch("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const d = await r.json();
  const res = document.getElementById("resultado");
  if (!r.ok) { res.innerHTML = "<div class='aviso'><strong>No se pudo crear el pedido:</strong> " + (d.message || d.error) + "</div>"; return; }
  localStorage.removeItem("carrito_v1"); actualizarContador();
  res.innerHTML = "<div class='aviso'><strong>Pedido confirmado: " + d.order_number + "</strong><br>Total: " + fmt(d.total_cents) + "<br>Te llegará la confirmación por correo.</div>";
});
</script>`;
  return chrome(cfg, "Checkout", cuerpo);
}

function pagina404(cfg) {
  return chrome(cfg, "404", `<section class="hero"><h1 class="display">404 — Nada por aquí</h1><p>La página no existe. La tienda sí: <a href="/">volver a la tienda</a>.</p></section>`);
}

function svgPlaceholder(p) {
  const inicial = esc(p.title.split(" ").map((w) => w[0]).slice(0, 2).join(""));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="#000000"/><text x="400" y="520" font-family="Arial, sans-serif" font-size="180" font-weight="800" fill="#FFF9F7" text-anchor="middle">${inicial}</text><text x="400" y="960" font-family="Arial, sans-serif" font-size="28" fill="#FFF9F7" text-anchor="middle">${esc(p.title.toUpperCase())}</text></svg>\n`;
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */
function main() {
  const configPath = path.resolve(arg("--config", path.join(ROOT, "store-config.example.json")));
  const outDir = path.resolve(arg("--out", path.join(ROOT, "ejemplo")));
  const cfg = JSON.parse(leer(configPath));
  validar(cfg);

  const agentsMd = buildAgentsMd(cfg);
  const ucp = buildUcp(cfg);
  const robots = buildRobots(cfg);
  const sitemap = buildSitemap(cfg);

  // La configuración que el Worker lleva incrustada (sin secretos: validar).
  const workerConfig = {
    store: cfg.store, shipping: cfg.shipping, returns: cfg.returns,
    payment: cfg.payment || { adapter: "stub" },
    webhooks: cfg.webhooks || {}, email: cfg.email || {},
    ucp_profile: ucp, agents_md: agentsMd, robots_txt: robots, sitemap_xml: sitemap,
  };
  const workerSrc = leer(path.join(TPL, "worker.js"))
    .replace("/*__CONFIG_JSON__*/ null", JSON.stringify(workerConfig));

  // --- Worker + D1 ---
  escribir(path.join(outDir, "src/worker.js"), workerSrc);
  escribir(path.join(outDir, "migrations/0001_init.sql"), leer(path.join(TPL, "migrations/0001_init.sql")));
  escribir(path.join(outDir, "migrations/0002_seed.sql"), buildSeed(cfg));

  // --- Despliegue ---
  const wrangler = `# wrangler.toml — ${cfg.store.name}
# Despliegue: Cloudflare Workers + D1 + Static Assets.
# 1) npx wrangler login
# 2) npx wrangler d1 create ${cfg.store.slug}-db   -> copia el database_id aquí abajo
# 3) npx wrangler d1 migrations apply ${cfg.store.slug}-db --local
#    npx wrangler d1 migrations apply ${cfg.store.slug}-db --remote
# 4) npx wrangler deploy
# Sin secretos en este archivo. Las claves de pasarela/correo van con:
#    wrangler secret put EMAIL_API_KEY   /   wrangler secret put PAYMENT_API_KEY
name = "${cfg.store.slug}"
main = "src/worker.js"
compatibility_date = "2026-11-13"

[assets]
directory = "./public"
binding = "ASSETS"

[[d1_databases]]
binding = "DB"
database_name = "${cfg.store.slug}-db"
database_id = "REEMPLAZAR-CON-EL-ID-REAL-DE-D1"

[vars]
STORE_SLUG = "${cfg.store.slug}"
`;
  escribir(path.join(outDir, "wrangler.toml"), wrangler);
  escribir(path.join(outDir, "package.json"), JSON.stringify({
    name: cfg.store.slug, version: "1.0.0", private: true,
    description: `${cfg.store.name} — tienda generada por el pipeline e-larping (Fase 3). Workers + D1 + Static Assets.`,
    scripts: {
      dev: "wrangler dev",
      "db:local": `wrangler d1 migrations apply ${cfg.store.slug}-db --local`,
      "db:remote": `wrangler d1 migrations apply ${cfg.store.slug}-db --remote`,
      deploy: "wrangler deploy",
      test: "node ../test/harness.mjs",
    },
  }, null, 2) + "\n");

  // --- Sitio estático ---
  const pub = path.join(outDir, "public");
  escribir(path.join(pub, "index.html"), paginaIndex(cfg));
  escribir(path.join(pub, "politicas.html"), paginaPoliticas(cfg));
  escribir(path.join(pub, "carrito.html"), paginaCarrito(cfg));
  escribir(path.join(pub, "checkout.html"), paginaCheckout(cfg));
  escribir(path.join(pub, "404.html"), pagina404(cfg));
  escribir(path.join(pub, "style.css"), leer(path.join(TPL, "style.css")));
  escribir(path.join(pub, "app.js"), leer(path.join(TPL, "app.js")));
  escribir(path.join(pub, "agents.md"), agentsMd);
  escribir(path.join(pub, "robots.txt"), robots);
  escribir(path.join(pub, "sitemap.xml"), sitemap);
  escribir(path.join(pub, ".well-known/ucp"), JSON.stringify(ucp, null, 2) + "\n");
  for (const p of cfg.products) {
    escribir(path.join(pub, `products/${p.handle}.html`), paginaProducto(cfg, p));
    if (p.image && p.image.startsWith("/images/")) escribir(path.join(pub, p.image.replace(/^\//, "")), svgPlaceholder(p));
  }

  // --- Trazabilidad + README de la tienda ---
  escribir(path.join(outDir, "store.config.json"), JSON.stringify(cfg, null, 2) + "\n");
  escribir(path.join(outDir, "README.md"), `# ${cfg.store.name}\n\nTienda generada por \`pipeline/generate.js\` (WO-E-LARPING, Fase 3) a partir de \`store.config.json\`.\n\n## Qué es real y qué es stub\n- **Real:** catálogo en D1, precios por volumen, promo por producto, tachado (\`compare_at_price\`), carrito valorado en servidor, pedido con verificación de disponibilidad ANTES del cobro, descuento de stock al crear el pedido, ledger de movimientos de inventario, umbral de stock bajo, webhooks \`order.created\` / \`inventory.low\` / \`payment.*\` registrados en D1, auto-respuesta de correo en cola (\`email_outbox\`), capa agentic (\`agents.md\` + \`/.well-known/ucp\` + \`/api/ucp/mcp\`), JSON-LD Product con precio+stock, robots abierto a crawlers de IA, sitemap.\n- **Stub:** el pago (\`authorizePayment()\` en \`src/worker.js\` autoriza de mentira, nunca cobra). El correo no se envía a ningún proveedor: queda en \`email_outbox\` con status \`queued\`. Los webhooks solo se entregan si configuras \`webhooks.url\`; si no, quedan registrados con status \`no_endpoint\`.\n\n## Desplegar (ver \`wrangler.toml\`)\n\`\`\`bash\nnpx wrangler login\nnpx wrangler d1 create ${cfg.store.slug}-db   # copiar el database_id a wrangler.toml\nnpx wrangler d1 migrations apply ${cfg.store.slug}-db --local\nnpx wrangler d1 migrations apply ${cfg.store.slug}-db --remote\nnpx wrangler deploy\n\`\`\`\n\n## Probar en local (sin wrangler)\n\`\`\`bash\nnode ../test/harness.mjs   # Worker + D1 stub (SQLite) — catálogo, carrito, pedido, webhooks, correo\nnode ../test/serve-static.mjs  # sirve public/ y comprueba las páginas con curl\n\`\`\`\n\n## Conectar lo real (cuando Miguel lo apruebe)\n- Pasarela: sustituir \`authorizePayment()\` en \`src/worker.js\` (punto marcado \`PASARELA REAL:\`) y guardar su clave con \`wrangler secret put PAYMENT_API_KEY\`.\n- Correo: sustituir el INSERT de \`sendEmail()\` (punto marcado \`PROVEEDOR DE CORREO:\`) y guardar su clave con \`wrangler secret put EMAIL_API_KEY\`.\n- Webhooks: poner la URL receptora en \`webhooks.url\` de la configuración y regenerar.\n- Webhook de pago entrante: verificar la firma HMAC en \`POST /api/webhooks/payment\` antes de actualizar nada.\n\n## Regenerar\n\`\`\`bash\nnode ../generate.js --config ../store-config.example.json --out .\n\`\`\`\nEdita el JSON, no los archivos generados a mano: la próxima generación los sobrescribe.\n`);

  // --- Resumen ---
  const files = [];
  (function walk(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else files.push(path.relative(outDir, p)); } })(outDir);
  console.log(`Tienda generada: ${cfg.store.name} (${cfg.store.slug})`);
  console.log(`Destino: ${outDir}`);
  console.log(`Productos: ${cfg.products.length} · Variantes: ${cfg.products.reduce((a, p) => a + p.variants.length, 0)}`);
  console.log(`Archivos: ${files.length}`);
  for (const f of files.sort()) console.log("  " + f);
}

main();
