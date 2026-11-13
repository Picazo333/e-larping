# Pipeline de generación de tiendas — Fase 3, WO-E-LARPING

Generador de tiendas desde cero, listo para despliegue en Cloudflare
(Workers + D1 + Static Assets). Sin servicios de pago, sin secretos ni
credenciales en el código, sin datos personales.

## Decisión de arquitectura (fija)

- **Runtime de la tienda generada:** Cloudflare Workers + D1 (SQLite) +
  assets estáticos. La tienda no depende de Shopify ni de ningún SaaS:
  la capa agentic se replica en casa, modelada en la plantilla Shopify
  observada en la Fase 1/2 (F4T3, TANE, Buna, Ahal, Ki'Xocolatl).
- **Generador:** `generate.js`, script Node **sin dependencias** (solo
  stdlib). Corre offline: `node generate.js`.
- **Lecciones de la síntesis (§10) aplicadas:** precio visible con tachado;
  promo según el producto (tachado, escalera por volumen, promo por
  producto); pickup publicado; mensajería, umbral de envío gratis y
  política de devoluciones publicadas y cumplidas; robots abierto a
  crawlers de IA + JSON-LD Product con precio+stock; fricción resuelta
  (reembolso 3–5 días, devolución gratuita, disponibilidad verificada
  antes del cobro).

## Qué genera

```
generate.js --config <tienda.json> --out <dir>
```

| Archivo generado | Qué es |
|---|---|
| `src/worker.js` | Worker: catálogo, carrito, pedidos, webhooks, correo, MCP/UCP |
| `migrations/0001_init.sql` | Esquema D1: productos, variantes, movimientos de inventario, pedidos, items, carritos, webhook_deliveries, email_outbox |
| `migrations/0002_seed.sql` | Semilla del catálogo de la configuración (+ movimientos `seed`) |
| `wrangler.toml` | Despliegue (con `database_id` por rellenar; ver abajo) |
| `package.json` | Scripts `dev`, `db:local`, `db:remote`, `deploy`, `test` |
| `public/` | Sitio estático: home, fichas con JSON-LD, carrito, checkout, políticas, 404, `style.css`, `app.js`, `agents.md`, `robots.txt`, `sitemap.xml`, `.well-known/ucp`, SVG de producto |
| `store.config.json` | Copia de la configuración que generó la tienda |
| `README.md` | README propio de la tienda (real vs. stub, despliegue) |

## Cómo se usa (comando a comando)

```bash
cd pipeline

# 1) Copiar y editar la configuración de ejemplo (es el contrato de uso)
cp store-config.example.json mi-tienda.json
#    Editar: store (nombre, slug, dominio canónico), shipping (umbral de
#    envío gratis, pickup), returns, products (precio, compare_at_price,
#    volume_tiers, promo, variantes con SKU y stock).

# 2) Generar la tienda
node generate.js --config mi-tienda.json --out mi-tienda

# 3) Verificar en local (sin wrangler, sin red)
node test/harness.mjs mi-tienda
node test/serve-static.mjs mi-tienda 8787
#    y en otra terminal:
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8787/
curl -s http://localhost:8787/products.json  # (lo sirve el Worker en prod)

# 4) Desplegar (requiere cuenta de Cloudflare; no se ha hecho aquí)
npx wrangler login
npx wrangler d1 create <slug>-db        # copiar el database_id a wrangler.toml
npx wrangler d1 migrations apply <slug>-db --local
npx wrangler d1 migrations apply <slug>-db --remote
npx wrangler deploy
```

Regenerar sobrescribe los archivos generados: **edita el JSON, no los
archivos generados a mano**.

## El contrato de la configuración (`store-config.example.json`)

- `store`: `name`, `slug` (minúsculas con guiones), `domain` (canónico),
  `currency` (MXN), `hero_headline`, `manifiesto`, `tagline`,
  `low_stock_threshold` (defecto 3), `owner_email` (opcional; si está
  vacío no se encola el aviso de stock bajo).
- `shipping`: `free_threshold_cents`, `flat_cents`, `carriers`,
  `pickup` (`name`, `address`, `hours`) — obligatorio.
- `returns`: `days`, `refund_days` (p. ej. `"3–5 días"`), `free`, `note`.
- `products[]`: `handle`, `title`, `description`, `price_cents`,
  `compare_at_price_cents` (opcional; debe ser mayor que el precio),
  `volume_tiers[]` (`min_qty`, `discount_percent`),
  `promo` (`type`: `percent`|`fixed`, `value`, `label`, `starts`/`ends`
  opcionales), `variants[]` (`sku` único, `title`, `stock`).
- `webhooks.url` (opcional), `email.from`, `payment.adapter` (`"stub"`).

El generador valida todo esto y se niega a generar si algo no cuadra
(handles/SKU duplicados, tachado menor que el precio, stock negativo…).

## Qué es real y qué es stub

**Real:** catálogo en D1; precios por volumen y promos calculados en el
servidor (el precio del cliente nunca manda); carrito valorado en
servidor; pedido con **verificación de disponibilidad ANTES del cobro**
(409 `out_of_stock` con detalle, sin descontar nada); stock descontado
al crear el pedido, en un solo batch de D1, con ledger de movimientos;
umbral de stock bajo con webhook `inventory.low`; webhooks `order.created`,
`payment.authorized`, `payment.*`, `inventory.low` registrados en D1;
auto-respuesta de correo en cola (`email_outbox`, status `queued`);
capa agentic (`agents.md`, `/.well-known/ucp` UCP 2026-08-25, MCP
JSON-RPC con `catalog.search`, `catalog.lookup`, `cart.create`,
`order.lookup`); JSON-LD Product con precio+stock en cada ficha;
robots abierto a crawlers de IA; sitemap; `/products.json` y
`/products/{handle}.js` en forma Shopify.

**Stub (marcado en el código con su punto exacto de conexión):**
- **Pago** — `authorizePayment()` en `src/worker.js` autoriza de mentira
  y nunca cobra. Para cobrar de verdad: sustituir esa función por la
  pasarela (Stripe, Mercado Pago, Conekta…), con su clave guardada como
  secreto (`wrangler secret put PAYMENT_API_KEY`), nunca en el código.
  El orden del flujo no cambia: disponibilidad → autorizar → descontar.
- **Correo** — `sendEmail()` no envía a ningún proveedor: registra en
  `email_outbox`. Punto marcado `PROVEEDOR DE CORREO:`; clave con
  `wrangler secret put EMAIL_API_KEY`.
- **Webhooks salientes** — sin `webhooks.url` quedan registrados con
  status `no_endpoint` (no se pierden). Sin reintentos automáticos en v1.
- **Webhook de pago entrante** — `POST /api/webhooks/payment` valida
  forma, no firma: al conectar la pasarela, verificar su HMAC ahí antes
  de actualizar nada (punto marcado en el código).

## Verificación realizada (13 nov 2026, este entorno)

- `node generate.js --config store-config.example.json --out ejemplo`:
  genera la tienda completa (28 archivos, 5 productos, 8 variantes).
- `node test/harness.mjs ejemplo`: **30 PASS, 0 FAIL**. El harness carga
  el Worker con un stub de D1 sobre SQLite real (`node:sqlite`) y
  ejercita: salud/catálogo, `products.json` y `.js`, carrito con escalera
  −20% (3 packs: 39,920 c/u) y −30% (6 packs) + envío gratis por umbral,
  promo −15% del hoodie (89,900 → 76,415), pedido pickup 201 con stock
  2 → 1 y movimiento `order`, webhooks `order.created` /
  `payment.authorized` / `inventory.low`, correo de confirmación en cola,
  pedido sin stock → 409 sin descontar, webhook de pago entrante,
  UCP 2026-08-25 sin `payment_handlers` (v1 sin pasarela real; el campo
  se omite, no se declara vacío — síntesis §10.2), `agents.md`,
  `robots.txt` (GPTBot/ClaudeBot permitidos), sitemap, MCP
  `tools/list` + `catalog.search`, JSON-LD con tachado visible, y que no
  hay fuentes externas ni sombras (radio 0).
- Servidor estático plano (`test/serve-static.mjs`): **14/14 rutas en
  200** (`/`, 2 fichas, políticas, carrito, checkout, CSS/JS, agents.md,
  robots, sitemap, UCP, SVG, 404) y la 404 sirve su página propia.
- Sin secretos: grep de `api_key|password|secret|token|bearer` solo
  encuentra menciones documentadas en comentarios (el nombre de la
  variable de entorno y `wrangler secret put`); ningún valor.
- **Bug encontrado y corregido por la verificación:** el Worker
  consultaba `low_stock_threshold` en `variants` (vive en `products`);
  el pedido se creaba pero devolvía 500. Corregido en la plantilla,
  regenerado, y el harness pasó a 30/30.

## Qué quedó SIN verificar

- **Despliegue real en Cloudflare** (`wrangler dev` / `wrangler deploy`,
  D1 remoto): no se logró en este entorno. `npx wrangler --version`
  agota el tiempo (20 s) sin responder — sin red útil para descargar
  wrangler y sin cuenta/sesión de Cloudflare. El `database_id` de
  `wrangler.toml` es un placeholder (`REEMPLAZAR-CON-EL-ID-REAL-DE-D1`).
  No se gastó nada ni se publicó nada.
- **D1 real** (solo SQLite local vía el stub): el batch atómico del
  pedido se verifica en SQLite, no contra la D1 de Cloudflare.
- **Envío real de correos y entrega real de webhooks**: por diseño son
  cola/registro hasta conectar proveedor y URL.
- **Cobro real**: por diseño es stub hasta conectar pasarela.

## Límites conocidos

- El carrito del cliente vive en `localStorage`; el servidor lo revalora
  siempre, pero no hay carritos abandonados ni recuperación.
- Un solo punto de pickup y una sola tarifa plana de envío (el umbral
  de envío gratis es el incentivo de cesta; no hay tarifas por CP).
- Sin reintentos de webhooks ni panel de administración: el estado se
  consulta leyendo las tablas D1 (`webhook_deliveries`, `email_outbox`,
  `inventory_movements`).
- Las imágenes de producto son SVG placeholder generados (iniciales del
  producto sobre negro); la fotografía real la pone la tienda.
- Sin fuentes externas a propósito (offline): la tipografía display usa
  la pila del sistema (`Arial Narrow` / Impact), no Thunder.
