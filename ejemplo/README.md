# NEGRA — Tienda ejemplo

Tienda generada por `pipeline/generate.js` (WO-E-LARPING, Fase 3) a partir de `store.config.json`.

## Qué es real y qué es stub
- **Real:** catálogo en D1, precios por volumen, promo por producto, tachado (`compare_at_price`), carrito valorado en servidor, pedido con verificación de disponibilidad ANTES del cobro, descuento de stock al crear el pedido, ledger de movimientos de inventario, umbral de stock bajo, webhooks `order.created` / `inventory.low` / `payment.*` registrados en D1, auto-respuesta de correo en cola (`email_outbox`), capa agentic (`agents.md` + `/.well-known/ucp` + `/api/ucp/mcp`), JSON-LD Product con precio+stock, robots abierto a crawlers de IA, sitemap.
- **Stub:** el pago (`authorizePayment()` en `src/worker.js` autoriza de mentira, nunca cobra). El correo no se envía a ningún proveedor: queda en `email_outbox` con status `queued`. Los webhooks solo se entregan si configuras `webhooks.url`; si no, quedan registrados con status `no_endpoint`.

## Desplegar (ver `wrangler.toml`)
```bash
npx wrangler login
npx wrangler d1 create negra-ejemplo-db   # copiar el database_id a wrangler.toml
npx wrangler d1 migrations apply negra-ejemplo-db --local
npx wrangler d1 migrations apply negra-ejemplo-db --remote
npx wrangler deploy
```

## Probar en local (sin wrangler)
```bash
node ../test/harness.mjs   # Worker + D1 stub (SQLite) — catálogo, carrito, pedido, webhooks, correo
node ../test/serve-static.mjs  # sirve public/ y comprueba las páginas con curl
```

## Conectar lo real (cuando Miguel lo apruebe)
- Pasarela: sustituir `authorizePayment()` en `src/worker.js` (punto marcado `PASARELA REAL:`) y guardar su clave con `wrangler secret put PAYMENT_API_KEY`.
- Correo: sustituir el INSERT de `sendEmail()` (punto marcado `PROVEEDOR DE CORREO:`) y guardar su clave con `wrangler secret put EMAIL_API_KEY`.
- Webhooks: poner la URL receptora en `webhooks.url` de la configuración y regenerar.
- Webhook de pago entrante: verificar la firma HMAC en `POST /api/webhooks/payment` antes de actualizar nada.

## Regenerar
```bash
node ../generate.js --config ../store-config.example.json --out .
```
Edita el JSON, no los archivos generados a mano: la próxima generación los sobrescribe.
