# F2 — Back end + stack · AHAL (ahal.mx)

- **Sitio:** AHAL Bio Cosmética — cosmética natural / bio cosmética mexicana (Monterrey) — https://www.ahal.mx/
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F2 (back end + stack), Fase 2 de la WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de páginas con `browser.open` (home, `robots.txt`, `products.json`, `agents.md`, `.well-known/ucp`, página `/pages/kueski`) y descarga pública con `curl` de la home y de las landings de PageFly para exponer cabeceras HTTP y el HTML crudo (scripts y dominios de terceros que el extractor de texto no muestra), más `sitemap.xml` y sus sub-sitemaps. Sin inicio de sesión, sin compra, sin añadir productos al carrito, sin contacto con la tienda.
- **Convención usada en todo el informe:** **OBSERVADO** = visto directamente en una fuente pública citada · **INFERIDO** = conclusión razonada a partir de evidencia observada, con confianza alta/media/baja · **HIPÓTESIS** = derivada, marcada como tal · **NO VERIFICADO** = sin evidencia pública suficiente; no se afirma.

## Veredicto sobre la pista previa

**Pista a re-verificar:** «en la landing del Kit Raíces se ve un error `Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product` — el prefijo `pf-` sugiere PageFly».

- **PageFly: CONFIRMADO (OBSERVADO).** La landing `/pages/kitraices-landing` carga `https://cdn.pagefly.io/pagefly/4.15.12/core/helper.js`, referencia los dominios `analytics.pagefly.io`, `apps.pagefly.io` y `cdn.pagefly.io`, expone `window.__pageflyProducts` / `pageflyCollections`, y el error Liquid se reproduce en la descarga cruda de la página (ver §2.5). PageFly no es solo la landing del Kit Raíces: también aparece en `/pages/tonicmist-landing` (sección `pf-c0b3641c`) y `/pages/maskscrub-landing` (sección `pf-0e732f27`).
- **Shopify: CONFIRMADO (OBSERVADO).** La propia tienda lo declara en `robots.txt` («# Shopify storefront») y en `agents.md` («This store is built on [Shopify](https://www.shopify.com)»), y la cabecera HTTP trae `powered-by: Shopify`.
- **«Sobre Cloudflare»: CONFIRMADO solo a nivel de borde, MATIZADO.** Las cabeceras observadas muestran borde Cloudflare (`Server: cloudflare`, `CF-RAY`, `Nel: cf-nel`, `Report-To: a.nel.cloudflare.com`). Lo que **no** se puede distinguir con estas cabeceras es si es (a) la infraestructura propia de Shopify —que corre sobre Cloudflare y Google Cloud— o (b) una zona Cloudflare propia del comerciante puesta como proxy delante de Shopify. Esa segunda lectura queda como **NO VERIFICADO**. Ver §3.

## 1. Tabla de componentes

| Componente | Evidencia | Confianza | Estado |
|---|---|---|---|
| Plataforma de e-commerce: Shopify | `robots.txt` L0 «# Shopify storefront»; `agents.md` L121 «This store is built on Shopify»; cabecera `powered-by: Shopify`; `shopId: 6793053`; subdominio `ahal-bio.myshopify.com` | Alta | OBSERVADO |
| ID de tienda Shopify | `6793053` — repetido en `etag` (`page_cache:6793053`), en el HTML (`shopId: 6793053`), en `robots.txt` (`Disallow: /6793053`), en `products.json` (`cdn.shopify.com/s/files/1/0679/3053/`) y en el perfil UCP (`gatewayMerchantId`, `shop_id`) | Alta | OBSERVADO |
| Subdominio myshopify | `ahal-bio.myshopify.com` — en `.well-known/ucp` (endpoints UCP/MCP) y en el HTML de la home (p. ej. scripts de terceros con `?shop=ahal-bio.myshopify.com`) | Alta | OBSERVADO |
| Hosting / origen | Cabecera `x-dc: gcp-us-central1` (origen en Google Cloud, US Central); `server-timing` con `pageType: index`, `theme: 175000158528` | Alta (como indicador de origen) | INFERIDO |
| Borde CDN / proxy: Cloudflare | Cabeceras `Server: cloudflare`, `CF-RAY: a5a022b7af377c37-DEN` (home, 13 nov 2026 19:20 UTC), `cf-cache-status: DYNAMIC`, `Nel: {"report_to":"cf-nel",…}`, `Report-To: …a.nel.cloudflare.com…` | Alta (tráfico por borde Cloudflare) | OBSERVADO (borde) / INFERIDO (que sea infraestructura de Shopify) |
| Cloudflare propio del comerciante (proxy delante de Shopify) | Ninguna cabecera observada distingue una zona Cloudflare del comerciante de la infraestructura Cloudflare de Shopify; no se resolvió el DNS de forma concluyente desde este entorno | — | NO VERIFICADO |
| CDN de assets | `cdn.shopify.com` (preconnect en cabecera `link:`), `www.ahal.mx/cdn/shop/files/…`, `www.ahal.mx/cdn/shop/t/47/assets/…`, `cdn.shopify.com/shopifycloud/…`, `fonts.shopifycdn.com` | Alta | OBSERVADO |
| Proveedor concreto detrás de `cdn.shopify.com` (Fastly vs Cloudflare) | No observable desde el exterior en esta investigación | — | NO VERIFICADO |
| Tema: Shopify «MyShopiguru V1» v14.9.9 | HTML: `Shopify.theme = {"name":"Myshopiguru V1 Custom","id":175000158528,"schema_name":"MyShopiguru V1","schema_version":"14.9.9","theme_store_id":null,"role":"main"}`; assets en `/cdn/shop/t/47/` (`lumin.css`, `lumin-fancy-text.css`, `jquery.js`, `lazysizes.min.js`, `compiled_assets/scripts.js`) | Alta | OBSERVADO |
| Tema vendido en la Theme Store de Shopify | `theme_store_id: null` — indica tema personalizado o comprado fuera de la Theme Store; el proveedor concreto («MyShopiguru») no se identificó en fuentes públicas consultadas | — | NO VERIFICADO (proveedor) |
| Constructor de landings: PageFly v4.15.12 | `cdn.pagefly.io/pagefly/4.15.12/core/helper.js` en las landings; secciones `pf-1134a0a4` (Kit Raíces), `pf-c0b3641c` (Tonic Mist), `pf-0e732f27` (Mask & Scrub); `window.__pageflyProducts` | Alta | OBSERVADO |
| Error Liquid en la landing del Kit Raíces | `Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product` — reproducido en la descarga cruda de `/pages/kitraices-landing` el 13 nov 2026; la sección de «COMPRA RÁPIDA» no tiene producto asignado | Alta | OBSERVADO |
| Segundo error Liquid en las landings (layout del tema) | `Liquid error (layout/theme line 156): comparison of Integer with String failed` — presente en las tres landings revisadas (Kit Raíces, Tonic Mist, Mask & Scrub) | Alta | OBSERVADO |
| API pública de catálogo (Storefront JSON) | `https://www.ahal.mx/products.json?limit=250` devuelve 70 productos; `https://www.ahal.mx/products/skin-care-mini-exfoliante.js` devuelve el producto con variantes, precio en centavos e inventario | Alta | OBSERVADO |
| Checkout | `GET /checkout` → `302` a `https://www.ahal.mx/checkouts/cn/<token>/es-mx` (mismo dominio, locale `es-MX`); `robots.txt` bloquea `/checkout`, `/checkouts/`, `/cart/` | Alta | OBSERVADO (la redirección; el interior del checkout no se recorrió) |
| Pasarela de pago: Shopify Payments | Perfil UCP: Google Pay con `tokenization_specification.gateway: "shopify"`, `gatewayMerchantId: "6793053"`; handler `dev.shopify.card` (visa, master, american_express); handler `dev.shopify.shop_pay` | Alta | INFERIDO |
| Pago con tarjeta (Visa / Mastercard / Amex) | Handler UCP `dev.shopify.card` con `enabled_card_brands: ["visa","master","american_express"]` | Alta | OBSERVADO (en el perfil UCP) |
| Google Pay | Handler UCP `com.google.pay`: `merchant_name: "AHAL Bio Cosmética"`, `merchant_id: "16708973830884969730"`, redes VISA / MASTERCARD / AMEX | Alta | OBSERVADO (en el perfil UCP) |
| Shop Pay | Handler UCP `dev.shopify.shop_pay` con `shop_id: "6793053"`; `agents.md` lo describe como checkout acelerado con direcciones y pagos guardados | Alta | OBSERVADO (en el perfil UCP) |
| PayPal | Meta tag en la home: `<meta id="in-context-paypal-metadata" data-shop-id="6793053" data-venmo-supported="false" data-environment="production" data-locale="es_ES" data-paypal-v4="true" data-currency="MXN">` + icono de pago PayPal en el pie; `window.ShopifyPaypalV4VisibilityTracking = true` | Alta (configurado en el storefront) | OBSERVADO (storefront) / NO VERIFICADO (en el checkout; PayPal NO aparece en los `payment_handlers` del perfil UCP) |
| Kueski Pay | Existe la página `/pages/kueski`, pero su contenido visible son solo banners de promoción (3x2, envío gratis > $2,000, regalo > $1,800); cero menciones de Kueski en el HTML de la home y de la landing del Kit Raíces | — | NO VERIFICADO (como medio de pago activo) |
| Mercado Pago / Conekta / Stripe directo / OXXO / SPEI / Aplazo | Cero menciones en el HTML de la home y de la landing del Kit Raíces; ausentes del perfil UCP de `payment_handlers` | — | NO VERIFICADO |
| MSI («meses sin intereses») | Sin evidencia técnica observada; no se revisó el copy comercial de la ficha de producto en este frente | — | NO VERIFICADO |
| Comercio agéntico: UCP + MCP (nativo de Shopify) | `https://www.ahal.mx/.well-known/ucp` (versión `2026-08-25`): servicios `dev.ucp.shopping` y `dev.ucp.common` por MCP en `https://ahal-bio.myshopify.com/api/ucp/mcp`; capacidades cart, checkout, order, catalog, discount, fulfillment, buyer_consent, identity_linking (Shop account, `accounts.shop.app`); `link: </.well-known/ucp>; rel="ucp"` en cabecera | Alta | OBSERVADO |
| Analítica de Shopify (Trekkie / Monorail / Web Pixels) | `monorail-edge.shopifysvc.com`, `trekkie` (25 menciones en el HTML), `/cdn/wpm/*.js` bloqueado en `robots.txt`, `shopify-complexity-score: 223` en la home | Alta | OBSERVADO |
| Google Analytics 4 | Configuración de web-pixels del HTML: `google_tag_ids: ["G-HWXEC6EJS3"]`, `target_country: "MX"`, eventos `page_view`, `view_item`, `add_to_cart`, `begin_checkout`, `purchase`, etc. | Media-alta (ID observado; vía app Google & YouTube de Shopify inferida) | OBSERVADO (ID) / INFERIDO (vía de instalación) |
| Google Ads / GTM | Ningún ID `AW-` ni `GT-` en la configuración de píxeles del HTML (solo el GA4 `G-HWXEC6EJS3`) | — | NO VERIFICADO |
| Meta Pixel + Conversions API | Configuración de web-pixels: `{"pixel_id":"216698075432591","pixel_type":"facebook_pixel"}` con `facebookCapiEnabled: "true"` | Media-alta (ID observado; vía app de Meta inferida) | OBSERVADO (ID) / INFERIDO (vía) |
| TikTok Pixel | Web pixel con `{"pixelCode":"CR2C3JRC77U99EQB03V0"}` — formato alfanumérico de 20 caracteres que empieza por `C`, consistente con el formato de código de píxel de TikTok | Media (formato consistente; la atribución a TikTok es inferida) | INFERIDO (media) |
| Web pixel sin proveedor identificado | Web pixel con `{"accountID":"AF-101307", "server": "S1"}`; el prefijo `AF-` no se pudo atribuir a ningún proveedor con las búsquedas realizadas | — | NO VERIFICADO (proveedor) |
| Email / marketing: Klaviyo | `<script src="https://static.klaviyo.com/onsite/js/MmWFvA/klaviyo.js?company_id=MmWFvA">`, extensión `klaviyo-email-marketing-82` (app.css preconnect + app.js), y web pixel Klaviyo con `accountID: "MmWFvA"` (eventos add-to-cart y backfill anónimo activados) | Alta | OBSERVADO |
| Reseñas: Loox | `https://loox.io/widget/4JV5-rlTx/loox.1458000499773.js?shop=ahal-bio.myshopify.com` + bloque de app `loox_reviews_loox_agg_section` en la home; existe la página `/pages/resenas-sobre-ahal` | Alta | OBSERVADO |
| Chat / asistente: Wizybot | Extensión `wizybot-183` (`cdn.shopify.com/extensions/01a1cc51-2d16-7f60-a769-a58ca4e3c772/wizybot-183/assets/bundle.js`) y dominio `api.wizybot.com` en el HTML | Media-alta (el asset es observado; que sea el chatbot activo en el sitio, inferido) | OBSERVADO (asset) / INFERIDO (función de chat) |
| Temporizador de cuenta atrás: Essential Apps | Extensión `countdown-timer-30-104` (`cdn.shopify.com/extensions/01a177a5-f2ab-766f-ba13-4295f8d9dc65/countdown-timer-30-104/assets/countdown_timer_essential_apps.min.js`) | Media (nombre de la extensión observado; función de cuenta atrás inferida por el nombre) | OBSERVADO (asset) / INFERIDO (función) |
| Script de `cdn.506.io` | `<script src="https://cdn.506.io/eg/script.js?shop=ahal-bio.myshopify.com&v=12">` en la home; el dominio aparece en políticas de cookies de otras tiendas Shopify como CDN con cookie `__cf_bm` de Cloudflare, pero su función concreta en AHAL no se determinó | — | OBSERVADO (script) / NO VERIFICADO (proveedor y función) |
| Multi-idioma / multi-mercado | `content-language: es-MX`; el `sitemap.xml` NO lista sitemaps por locale (solo productos, páginas, colecciones, blogs, artículos y `sitemap_agentic_discovery.xml`) | Media (un solo mercado observable) | OBSERVADO (sitemap) / NO VERIFICADO (ventas fuera de México) |
| Inventario gestionado por Shopify | `.js` de un producto: `inventory_management: "shopify"`, `inventory_quantity: -557`, `inventory_policy: "continue"` (se permite vender sin stock en esa variante) | Alta (para ese producto) | OBSERVADO |
| Plan de Shopify (Basic / Shopify / Advanced / Plus) | No observable desde el exterior | — | NO VERIFICADO |
| Logística / paquetería, ERP, inventario, almacén | No observable desde el exterior | — | NO VERIFICADO |

## 2. OBSERVADO — lo que se ve directamente

### 2.1. Plataforma: Shopify, sin ambigüedad

- `https://www.ahal.mx/robots.txt` abre con `# Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable.` y remite a `https://www.shopify.com/legal/terms`, contacto `bots@shopify.com`, y bloquea rutas típicas de Shopify: `/admin`, `/cart/`, `/checkout`, `/checkouts/`, `/orders`, `/services`, `/sf_*`, `/.well-known/shopify/monorail`, `/cdn/wpm/*.js`, `/cart.js`. Bloquea además la ruta del ID de tienda (`Disallow: /6793053`). Enlaza `agents.md` y el descubrimiento UCP (`/.well-known/ucp`, `/api/ucp/mcp`).
- `https://www.ahal.mx/agents.md` (título: «Agent Instructions — AHAL Bio Cosmética») declara: «This store is built on [Shopify](https://www.shopify.com), the commerce platform powering millions of stores worldwide. Shopify stores support UCP natively…». Recomienda el Shop skill (`https://shop.com/SKILL.md`) y documenta la integración UCP directa (MCP) y por WebMCP en el navegador.
- Cabecera HTTP de la home (13 nov 2026, 19:20 UTC): `powered-by: Shopify`, `etag: W/"page_cache:6793053:IndexController:…"`, `link: <https://cdn.shopify.com>; rel="preconnect"`, `server-timing: … theme;desc="175000158528", pageType;desc="index" …`.
- El catálogo responde en los endpoints JSON clásicos de Shopify:
  - `https://www.ahal.mx/products.json?limit=250` → 70 productos; primer producto `id 9590613115200`, «SKIN CARE MINI EXFOLIANTE», `vendor: "LABORATORIO BIOCOSMETICA SA DE CV"`, `price: "220.00"`, SKU `781159735004`; imágenes en `cdn.shopify.com/s/files/1/0679/3053/files/…`. Vendedores del catálogo: `AHAL Bio Cosmética` y `LABORATORIO BIOCOSMETICA SA DE CV`. Tipos: kits, sueros faciales/corprales, tónicos, exfoliantes, maquillaje (Color Sticks, Lipsticks, Bronzer, Correctores, Polvo Traslúcido), Gua Sha, jabones, desmaquillante y un tipo `free_product`.
  - `https://www.ahal.mx/products/skin-care-mini-exfoliante.js` → producto `id 9590613115200`, variante `49684582433088`, `price: 22000` (centavos), `inventory_quantity: -557`, `inventory_management: "shopify"`, `inventory_policy: "continue"`, `taxable: true`, `barcode: "781159735004"`.
- URLs de producto con el patrón Shopify `/products/{handle}` y de páginas `/pages/{handle}`.

### 2.2. Cabeceras HTTP de la home (13 nov 2026, 19:20 UTC)

```
HTTP/1.1 200 OK
Date: Fri, 13 Nov 2026 19:20:46 GMT
Content-Type: text/html; charset=utf-8
CF-RAY: a5a022b7af377c37-DEN
x-request-id: 21dfec7f-e058-4b8b-8096-dd9100b2ea7a-1794597646
cf-cache-status: DYNAMIC
link: <https://cdn.shopify.com>; rel="preconnect", <https://cdn.jsdelivr.net>; rel="preconnect",
  <https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js>; as="script"; rel="preload",
  <//www.ahal.mx/cdn/shop/t/47/assets/jquery.js?v=…>; as="script"; rel="preload",
  <//www.ahal.mx/cdn/shop/t/47/assets/base.css?v=…>; as="style"; rel="preload",
  <//www.ahal.mx/cdn/shop/t/47/assets/lumin.css?v=…>; as="style"; rel="preload",
  <//www.ahal.mx/cdn/shop/t/47/assets/lumin-fancy-text.css?v=…>; as="style"; rel="preload",
  <https://cdn.shopify.com/extensions/01a1d0dd-ddad-763c-930a-f15627579d9f/klaviyo-email-marketing-82/assets/app.css>; as="style"; rel="preload",
  </.well-known/ucp>; rel="ucp"; version="2026-08-25"
etag: W/"page_cache:6793053:IndexController:c16569b9073a94537d3d4de531e1218e:…"
Nel: {"report_to":"cf-nel","success_fraction":0.01,"max_age":604800}
shopify-complexity-score: 223
content-security-policy: block-all-mixed-content; frame-ancestors *; upgrade-insecure-requests;
strict-transport-security: max-age=7889238
content-language: es-MX
Cache-Control: private, max-age=0, must-revalidate
powered-by: Shopify
server-timing: processing;dur=229;desc="gc:6", db;dur=31, render;dur=137, edge;desc="DEN", country;desc="US", theme;desc="175000158528", pageType;desc="index", servedBy;desc="hxsx", …
x-dc: gcp-us-central1,gcp-us-central1,gcp-us-central1
Server: cloudflare
Report-To: {"group":"cf-nel",…,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=…"}]}
X-Content-Type-Options: nosniff
```

El `CF-RAY …-DEN` sitúa el borde en Denver en esa petición; `x-dc: gcp-us-central1` sitúa el origen en Google Cloud US Central. Ambos valores son de una sola petición y pueden variar entre peticiones. El `GET /checkout` respondió `302` a `/checkouts/cn/<token>/es-mx` (el token no se reproduce en este informe por ser un identificador de sesión transitorio) con `shopify-complexity-score: 183`.

### 2.3. Tema y front-end propio

- Tema Shopify **MyShopiguru V1 v14.9.9**, instancia `175000158528`, directorio de assets `/cdn/shop/t/47/`; nombre interno: `Myshopiguru V1 Custom`; `theme_store_id: null` (tema personalizado o comprado fuera de la Theme Store; el proveedor «MyShopiguru» no se identificó).
- JavaScript/CSS del tema (todos en `/cdn/shop/t/47/assets/`): `jquery.js`, `lazysizes.min.js` (+ `ls.bgset.min.js`, `ls.rias.min.js`), `global.js`, `product-form.js`, `cart-notification.js`, `predictive-search.js`, `quick-add.js`, `popup.js`, `megamenu-hover.js`, `animations.js`, `localization-form.js`, `constants.js`, `pubsub.js`, `details-disclosure.js`, `details-modal.js`, `search-form.js` y `compiled_assets/scripts.js`. CSS: `base.css`, `lumin.css`, `lumin-fancy-text.css`, `lazyloading-classes.css`, `component-localization-form.css`. Es el patrón de un tema vintage de Shopify (jQuery + lazysizes + `api.jquery`), no de un tema Online Store 2.0 moderno.
- Scripts de plataforma cargados: `cdn.shopify.com/shopifycloud/storefront/assets/storefront/origin_trials-…js`, `…/load_feature-…js`, `cdn.shopify.com/shopifycloud/shop-js/modules/v2/loader.init-shop-cart-sync.es.esm.js`, `cdn.shopify.com/storefront/standard-actions.js`, `cdn.shopify.com/storefront/web-components/account.js`, `/checkouts/internal/preloads.js?locale=es-MX&default_configuration_id=110166336`.
- Lazy loading con `lozad` servido desde `cdn.jsdelivr.net` (`<link rel="preconnect" href="https://cdn.jsdelivr.net">` y preload de `lozad.min.js`).
- Enlace en el menú a un podcast en Spotify (`open.spotify.com/show/1u1BrHZh6ORp6NYNyxi90O`) y enlaces a Facebook, Instagram y TikTok.

### 2.4. Pagos — lo que declara el perfil UCP

`https://www.ahal.mx/.well-known/ucp` (versión `2026-08-25`) lista estos `payment_handlers` (OBSERVADO, texto íntegro del perfil):

- `com.google.pay` — `merchant_name: "AHAL Bio Cosmética"`, `merchant_id: "16708973830884969730"`, redes `VISA`, `MASTERCARD`, `AMEX`, `tokenization_specification: {"type":"PAYMENT_GATEWAY","parameters":{"gateway":"shopify","gatewayMerchantId":"6793053"}}`.
- `dev.shopify.card` — `enabled_card_brands: ["visa","master","american_express"]`.
- `dev.shopify.shop_pay` — `shop_id: "6793053"`.

El mismo perfil expone el endpoint MCP `https://ahal-bio.myshopify.com/api/ucp/mcp` y capacidades de carrito, checkout, pedido, catálogo, descuento, fulfillment, consentimiento del comprador e identidad (cuenta Shop, `accounts.shop.app`), más permalink `https://www.ahal.mx/buy`. Las versiones anteriores del perfil (`2026-04-08`, `2026-01-23`) se sirven desde `ahal-bio.myshopify.com`.

**Nota:** el `merchant_id` de Google Pay (`16708973830884969730`) es idéntico al observado en F4T3; es el identificador de comerciante que Shopify comparte en su integración de Google Pay, no un identificador propio de AHAL. PayPal **no** aparece en los `payment_handlers` del perfil UCP, aunque sí está configurado en el storefront (ver §2.5 y tabla).

### 2.5. PageFly y los errores Liquid — verificación de la pista previa

- **Kit Raíces** (`https://www.ahal.mx/pages/kitraices-landing`, descarga cruda 13 nov 2026): 98 ocurrencias de `pf-`; sección `sections/pf-1134a0a4` (12 ocurrencias); scripts `https://cdn.pagefly.io/pagefly/4.15.12/core/helper.js`, dominios `analytics.pagefly.io` y `apps.pagefly.io`; variables `window.__pageflyProducts` y `pageflyCollections`. El error se reproduce tal cual:
  - `Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product` — la sección «COMPRA RÁPIDA» de la landing intenta renderizar un formulario de producto sin producto asignado; la compra rápida de la landing está rota en el momento de la observación.
  - Además: `Liquid error (layout/theme line 156): comparison of Integer with String failed` — error del layout del tema, presente también en las otras landings.
- **Tonic Mist** (`/pages/tonicmist-landing`): 88 ocurrencias de `pf-`; sección `pf-c0b3641c` (10 ocurrencias); mismo error de `layout/theme line 156`. No se reprodujo el error de `product form` en esta landing.
- **Mask & Scrub** (`/pages/maskscrub-landing`): 26 ocurrencias de `pf-`; sección `pf-0e732f27` (13 ocurrencias); `window.__pageflyProducts` presente; mismo error de `layout/theme line 156`.
- El sitemap de páginas lista 79 páginas, entre ellas al menos 13 landings de producto/campaña (`kitraices-landing`, `tonicmist-landing`, `maskscrub-landing`, `opuntia-landing`, `sleepingmask-landing`, `basicos00/01/02/03/04-landing`, `biphasic-cleanser-landing`, `colorstick-landing`, `liquid-foundation-landing-page`), además de `quiz-skincare`, `shade-finder`, `store-locator`, `campana-maquillaje`, `campana-facial` y `kueski`. Solo se verificó PageFly en las tres landings descargadas; que las demás landings usen PageFly es **HIPÓTESIS** (plausible por el patrón, sin verificar una por una).

### 2.6. Terceros visibles en la home

- **Klaviyo:** `static.klaviyo.com/onsite/js/MmWFvA/klaviyo.js?company_id=MmWFvA`, extensión `klaviyo-email-marketing-82` y web pixel Klaviyo (`accountID: "MmWFvA"`, con eventos de add-to-cart y backfill anónimo activados).
- **Google / Meta / TikTok (vía Web Pixels):** en la configuración de píxeles del HTML aparecen `google_tag_ids: ["G-HWXEC6EJS3"]` con `target_country: "MX"` y eventos `page_view`, `view_item`, `view_item_list`, `add_to_cart`, `remove_from_cart`, `view_cart`, `begin_checkout`, `add_shipping_info`, `add_payment_info`, `search` y `purchase`; `{"pixel_id":"216698075432591","pixel_type":"facebook_pixel"}` con `facebookCapiEnabled: "true"`; `{"pixelCode":"CR2C3JRC77U99EQB03V0"}`; y `{"accountID":"AF-101307", "server": "S1"}` sin proveedor identificado.
- **Shopify analítica:** `monorail-edge.shopifysvc.com`, `trekkie`, `Shopify.analytics`.
- **Reseñas (Loox):** `loox.io/widget/4JV5-rlTx/loox.1458000499773.js?shop=ahal-bio.myshopify.com` y bloque de app `loox_reviews_loox_agg_section` en la home.
- **Chat (Wizybot):** extensión `wizybot-183` y dominio `api.wizybot.com`.
- **Cuenta atrás (Essential Apps):** extensión `countdown-timer-30-104`.
- **Script sin identificar:** `cdn.506.io/eg/script.js?shop=ahal-bio.myshopify.com&v=12`.
- **PayPal (storefront):** meta tag `in-context-paypal-metadata` (`data-paypal-v4="true"`, `data-currency="MXN"`, `data-venmo-supported="false"`, `data-locale="es_ES"`) e icono de pago PayPal en el pie de página.
- **Fuentes:** `fonts.shopifycdn.com`.
- **Redes y contenido:** enlaces a Facebook, Instagram y TikTok; podcast en Spotify.

### 2.7. Señales de catálogo y locales

- `sitemap.xml` incluye: `sitemap_products_1.xml` (71 URLs), `sitemap_pages_1.xml` (79 URLs), `sitemap_collections_1.xml` (55 URLs), `sitemap_blogs_1.xml`, `sitemap_articles_1.xml` y `sitemap_agentic_discovery.xml` (que solo lista `agents.md`). No hay sitemaps por locale: un solo mercado (`es-MX`) observable.
- Discrepancia menor sin explicar: el sitemap de productos lista 71 URLs y `products.json?limit=250` devuelve 70 productos. **HIPÓTESIS:** un producto del sitemap puede estar oculto o sin publicar en el JSON; no se investigó cuál.
- El producto «SKIN CARE MINI EXFOLIANTE» ($220.00) muestra `inventory_quantity: -557` con política `continue`: esa variante se vende aunque el stock registrado sea negativo.

## 3. INFERIDO — con su evidencia y confianza

1. **Shopify Payments es el procesador (confianza: alta).** La tokenización de Google Pay declara `gateway: "shopify"` con el `gatewayMerchantId` igual al ID de tienda, y los handlers de tarjeta y Shop Pay son los nativos de Shopify. No se observó ningún otro gateway en el perfil UCP ni en el HTML. Queda como inferencia —no como hecho observado— porque la confirmación definitiva exigiría ver el checkout con un pedido real, cosa que no se hizo.
2. **El tráfico pasa por el borde de Cloudflare y el origen está en Google Cloud (confianza: alta para el borde; media para atribuirlo a Shopify).** `Server: cloudflare` + `CF-RAY` + `Nel cf-nel` prueban el borde; `x-dc: gcp-us-central1` apunta a origen GCP. Shopify documenta públicamente que su plataforma corre sobre Cloudflare y GCP, lo que hace plausible que todo sea infraestructura de Shopify. **No se puede afirmar que AHAL tenga su propia cuenta/zona Cloudflare como proxy:** eso requeriría DNS concluyente, y la consulta DNS desde este entorno no fue concluyente.
3. **Klaviyo es su herramienta de email marketing (confianza: alta).** El script onsite con `company_id=MmWFvA` es el marcador estándar de Klaviyo, reforzado por la extensión `klaviyo-email-marketing-82` y el web pixel con el mismo `accountID`; no se observó ningún otro ESP (Mailchimp, etc.).
4. **Google Analytics 4 y Meta Pixel + CAPI corren vía el sistema de Web Pixels de Shopify (confianza: media-alta).** Los IDs están incrustados en la configuración de píxeles junto a `trekkie` y `wpm`, no como scripts directos de `googletagmanager.com` o `connect.facebook.net` en el HTML. La vía exacta (app oficial de Google & YouTube / app de Meta) no se distingue desde fuera.
5. **El píxel con código `CR2C3JRC77U99EQB03V0` es probablemente el de TikTok (confianza: media).** El formato (20 caracteres alfanuméricos empezando por `C`) coincide con el formato documentado del código de píxel de TikTok; no hay en el HTML ningún dominio de TikTok (`analytics.tiktok.com` o similar) que lo confirme directamente.
6. **Loox es su herramienta de reseñas (confianza: alta).** El widget `loox.io/widget/4JV5-rlTx/` con parámetro `shop=ahal-bio.myshopify.com` y el bloque de app `loox_reviews` son los marcadores estándar de Loox; no se observó Judge.me, Yotpo ni otra app de reseñas.
7. **Wizybot es el chat/asistente del sitio (confianza: media-alta).** La extensión `wizybot-183` y el dominio `api.wizybot.com` corresponden a Wizybot (chatbot con IA para Shopify); no se observó ningún otro widget de chat (Intercom, Tidio, Chatwoot, etc.).
8. **Las landings de campaña se construyen con PageFly sobre el tema MyShopiguru (confianza: alta).** Tres landings verificadas usan secciones `pf-*` y el helper de PageFly v4.15.12; el resto de landings del sitemap siguen el mismo patrón de URL, pero no se descargaron una por una.
9. **El tema MyShopiguru es un tema personalizado o de terceros, no de la Theme Store (confianza: alta).** `theme_store_id: null` junto con un `schema_name` que no corresponde a ningún tema conocido de la Theme Store; el proveedor concreto no se identificó.
10. **PayPal está configurado como medio de pago en el storefront (confianza: media-alta).** El meta tag `in-context-paypal-metadata` con `data-paypal-v4="true"` y el icono de pago son los marcadores de la integración in-context de PayPal de Shopify. La confianza no es alta porque PayPal no aparece en los `payment_handlers` del perfil UCP y el checkout no se recorrió.

## 4. NO VERIFICADO — lo que no se pudo establecer

- **Cloudflare propio del comerciante** como proxy delante de Shopify (ver §3.2).
- **Plan de Shopify** (Basic / Shopify / Advanced / Plus), ni apps instaladas en el admin, salvo las deducibles desde el front-end.
- **Pasarela exacta y adquirente de MSI:** Shopify Payments es inferido (alta), no observado en un checkout real; quién ofrecería meses sin intereses no se sabe.
- **PayPal en el checkout:** configurado en el storefront (meta tag + icono), pero ausente del perfil UCP; no se confirmó que aparezca como opción de pago al pagar.
- **Kueski Pay, Mercado Pago, Conekta, Stripe directo, OXXO, SPEI, Aplazo:** sin evidencia técnica; la página `/pages/kueski` existe pero solo muestra banners promocionales (3x2, envío gratis, regalo), sin contenido de pago.
- **Google Ads / GTM:** ningún ID `AW-` ni `GT-` observado en la configuración de píxeles.
- **Proveedor del web pixel `AF-101307` (server `S1`):** observado el ID, sin atribuir.
- **Proveedor y función del script `cdn.506.io/eg/script.js`:** observado el script, sin identificar.
- **Proveedor del tema «MyShopiguru V1»:** nombre y versión observados; quién lo vende o mantiene, sin identificar.
- **Logística:** paquetería, almacén, ERP o sistema de inventario. El dato de inventario negativo (`-557`, política `continue`) corresponde a un solo producto observado.
- **Ventas activas fuera de México:** no hay sitemaps por locale ni otro mercado observable.
- **Interior del checkout, post-compra y cuenta de cliente:** no se recorrieron (no se inició ninguna compra). El `GET /checkout` vacío devolvió un `302` a una URL tokenizada de checkout; ese token no se reproduce en este informe por ser un identificador de sesión transitorio.
- **Uptime, rendimiento, volumen de tráfico y métricas de negocio:** no se midieron ni se afirman.
- **Versión de Shopify:** es SaaS y no expone versión pública; no aplica.
- **Qué producto falta entre las 71 URLs del sitemap de productos y los 70 de `products.json`:** discrepancia observada, sin resolver.

## 5. Flujo técnico observable de una compra (solo hasta donde llega la evidencia pública)

1. **Descubrimiento:** PDP en `/products/{handle}`; el `.js` del producto expone variantes, precios en centavos y disponibilidad en JSON público. También existe descubrimiento agéntico vía UCP/MCP (`/.well-known/ucp`, `/api/ucp/mcp`) y catálogo en `/products.json`. Las landings de campaña (PageFly) enlazan productos; la del Kit Raíces tiene rota su «COMPRA RÁPIDA» por el error Liquid observado.
2. **Carrito:** enlace `/cart` y scripts del tema (`cart-notification.js`, `product-form.js`, `quick-add.js`) más el sincronizador de Shopify (`loader.init-shop-cart-sync…js`) y el endpoint AJAX `/cart.js` (bloqueado a crawlers en `robots.txt`, pero referenciado por la plataforma). La sincronización con Shop (`Shopify.SignInWithShop`, `initShopCartSync`) está presente en el HTML.
3. **Checkout:** `/checkout` responde `302` a `/checkouts/cn/<token>/es-mx` en el mismo dominio (checkout alojado por Shopify, locale `es-MX`). La página de checkout expone herramientas UCP/WebMCP según `agents.md`.
4. **Pago:** según el perfil UCP, handlers disponibles: tarjeta (Visa / Mastercard / Amex), Google Pay y Shop Pay; procesador inferido: Shopify Payments (`gateway: "shopify"`). PayPal está configurado en el storefront pero no aparece en el perfil UCP. No se observó ningún otro medio de pago.
5. **Post-compra (confirmación, envío, seguimiento):** NO VERIFICADO. Solo se observó que existe la página `/pages/politica-de-envios-ahal` y que el catálogo incluye un tipo de producto `free_product` (regalo por compra, sin verificar su mecánica).

## 6. Fuentes consultadas

- https://www.ahal.mx/ (home — texto e HTML crudo, 13 nov 2026, 19:20 UTC)
- https://www.ahal.mx/robots.txt
- https://www.ahal.mx/agents.md
- https://www.ahal.mx/.well-known/ucp (perfil UCP/MCP, versión 2026-08-25)
- https://www.ahal.mx/products.json?limit=250 (70 productos)
- https://www.ahal.mx/products/skin-care-mini-exfoliante.js (JSON del producto)
- https://www.ahal.mx/sitemap.xml y sub-sitemaps (`sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`, `sitemap_agentic_discovery.xml`)
- https://www.ahal.mx/pages/kitraices-landing (HTML crudo, 13 nov 2026)
- https://www.ahal.mx/pages/tonicmist-landing (HTML crudo, 13 nov 2026)
- https://www.ahal.mx/pages/maskscrub-landing (HTML crudo, 13 nov 2026)
- https://www.ahal.mx/pages/kueski (texto, 13 nov 2026)
- Cabeceras HTTP (HEAD) de https://www.ahal.mx/ y https://www.ahal.mx/checkout (13 nov 2026, 19:20–19:21 UTC)
- Búsquedas web de contexto: «ahal.mx Kit Raíces landing» (localizó la URL de la landing), «"cdn.506.io" Shopify app script», «"AF-101307" Shopify web pixel», «TikTok pixel code format», «MyShopiguru Shopify theme V1» (ninguna afirmación del informe depende de esos resultados salvo la atribución de formato del píxel de TikTok, marcada como inferencia de confianza media)

## 7. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo inspeccionar la pestaña de red ni el DOM renderizado; los scripts y terceros se dedujeron del HTML crudo y de las cabeceras. Un script cargado dinámicamente tras interacción del usuario (p. ej. al abrir el carrito o el checkout) puede no estar en esta lista.
- **Sin compra ni carrito con productos:** el interior del checkout, los medios de pago efectivamente ofrecidos en pantalla y el post-compra no se observaron.
- **Sin acceso al admin ni a DNS concluyente:** plan, apps instaladas, configuración de pagos/envíos y la cuestión de si existe una zona Cloudflare propia del comerciante quedan fuera de alcance.
- **Una lectura de `https://www.ahal.mx/sitemap.xml` con el lector de páginas devolvió un error 429 (límite de peticiones del servicio de lectura) durante la investigación;** conforme a la regla del encargo, no se reintentó por ese medio: el sitemap y sus sub-sitemaps se obtuvieron por descarga pública directa (`curl`), sin reintentar la lectura fallida.
- **Instantánea temporal:** todo lo anterior corresponde al 13 nov 2026 (primer día del Buen Fin; la landing del Kit Raíces muestra el error Liquid en vivo en esa fecha). Los IDs de píxeles, la versión del tema, la versión de PageFly y los assets pueden cambiar sin aviso.
