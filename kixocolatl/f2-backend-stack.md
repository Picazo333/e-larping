# F2 — Back end + Stack · Ki'Xocolatl (kixocolatl.mx)

- **Fecha de la investigación:** viernes 13 de noviembre de 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Sitio:** https://kixocolatl.mx/ (redirige a https://www.kixocolatl.mx/)
- **Frente:** F2 — back end + stack (WO-E-LARPING, Fase 2)
- **Método:** solo fuentes públicas. Lectura de páginas HTML, `robots.txt`, `sitemap.xml`, `/agents.md`, `/.well-known/ucp`, endpoints JSON públicos (`/products.json`, `/collections.json`), cabeceras HTTP y DNS. Sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto. No se consultó `/cart.js` (el `robots.txt` del sitio indica a los agentes usar UCP/MCP en lugar de las superficies AJAX).
- **Etiquetas usadas en todo el documento:** **OBSERVADO** (visto directamente, con URL y fecha) · **INFERIDO** (con evidencia y confianza) · **HIPÓTESIS** (derivada, marcada como tal) · **NO VERIFICADO** (no se pudo comprobar con fuentes públicas).

---

## 1. Plataforma

### OBSERVADO — Es Shopify (tienda alojada en Shopify)

Evidencia múltiple y convergente, toda recogida el 13 nov 2026:

- Cabecera HTTP de la home: `powered-by: Shopify` y `x-request-id` con formato Shopify; `server-timing` con `pageType: index`, `theme: 115417022633`, `servedBy`, `db;dur=…` (cabeceras propias de Shopify).
- El HTML de la home declara `Shopify.shop = "kixocolatl.myshopify.com"` y `Shopify.theme = {"name":"Copy of KiXocolatl Clickster Shop","id":115417022633,"schema_name":"Goodwin","schema_version":"2.1","theme_store_id":null,"role":"main"}`.
- El `robots.txt` empieza con `# Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable.` y bloquea rutas típicas de Shopify (`/admin`, `/checkout`, `/checkouts/`, `/cart/`, `/services`, `/sf_*`).
- El dominio canónico de la tienda es `kixocolatl.myshopify.com` (visible en `Shopify.shop` y en los endpoints del perfil UCP).
- La URL de checkout observada es del formato Shopify: `/checkouts/cn/<token>/es-mx` (ver §5).
- El `sitemap.xml` es el índice generado por Shopify (`sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`), con actualización en tiempo real según su propio comentario.

### INFERIDO (confianza alta) — Plan de Shopify con checkout estándar de Shopify

La presencia de checkout acelerado (Shop Pay / billeteras portátiles, ver §5), del perfil UCP nativo y de `shopify-complexity-score` en cabeceras es coherente con una tienda Shopify activa en plan comercial estándar o superior. El plan exacto no es observable desde fuera.

### NO VERIFICADO

- Versión de Shopify: Shopify es SaaS y no expone número de versión pública. **NO VERIFICADO** por diseño de la plataforma.
- Plan contratado (Basic / Shopify / Advanced / Plus): **NO VERIFICADO** — no hay marcador público.
- Marcadores de Magento, WooCommerce o plataforma propia: **ausentes** (no hay `wp-content`, `wp-json`, `static/version`, ni `X-Magento-*` en cabeceras ni HTML). La ausencia se registra, pero la identificación positiva de Shopify la hace innecesaria.

---

## 2. Hosting, origen y CDN

### OBSERVADO

- **CDN y proxy frontal: Cloudflare.** Cabeceras: `Server: cloudflare`, `CF-RAY: a5a04d1adfd497b2-EWR` (301 inicial) y `CF-RAY: a5a04d382e766b73-DFW` (home 200), `cf-cache-status: DYNAMIC`, `alt-svc: h3=":443"`. El 301 de `kixocolatl.mx` → `www.kixocolatl.mx` trae `x-redirect-reason: canonical_host_redirection`.
- **Origen Shopify sobre Google Cloud.** Cabecera `x-dc: gcp-us-east1,gcp-us-east1,gcp-us-east1` (redirect) y `x-dc: gcp-us-central1,gcp-us-central1,gcp-us-central1` (home); `server-timing` con `edge: EWR` / `edge: DFW` y `asn: 13335` (ASN 13335 = Cloudflare).
- **DNS (13 nov 2026):** `www.kixocolatl.mx` resuelve a `198.18.118.119` y `198.18.118.120` (dos registros A). El apex `kixocolatl.mx` responde con el mismo 301 canónico.
- **TLS:** `strict-transport-security: max-age=7889238` presente; todo el tráfico observado es HTTPS. El emisor del certificado no pudo leerse en esta sesión (la conexión TLS directa desde el entorno de trabajo fue interceptada por el proxy local y devolvió error de versión SSL), por lo que el emisor queda como **NO VERIFICADO**; la terminación TLS en Cloudflare/Shopify es **INFERIDA** (confianza alta) por las cabeceras `Server: cloudflare` y `CF-RAY`.
- **Activos servidos desde el CDN de Shopify:** `cdn.shopify.com` (8 referencias en la home) y `extensions.shopifycdn.com`; los assets del tema viven en `/cdn/shop/t/3/assets/…`.
- **Idioma/moneda de la tienda:** `content-language: es-MX`; `"currency":"MXN"` en el HTML.

### INFERIDO (confianza alta)

- Arquitectura típica Shopify + Cloudflare: Shopify aloja la tienda y sirve el contenido a través de su capa de Cloudflare; no hay servidor propio observable. No hay evidencia de hosting propio, VPS ni otro origen.

---

## 3. Front end / tema

### OBSERVADO

- **Tema:** copia personalizada del tema **Goodwin** (schema `Goodwin`, versión de esquema `2.1`), nombre interno `"Copy of KiXocolatl Clickster Shop"`, id de tema `115417022633`, rol `main`, `theme_store_id: null` (tema subido/personalizado, no comprado directamente en la Theme Store en esta instalación).
- **Assets del tema** (en `/cdn/shop/t/3/assets/`): `style.css`, `style-theme-light.scss.css`, `styles-vendor.min.css`, `animate.min.css`, `icomoon.css`, `custom.css`, `vendor-head.min.js`, `vendor.min.js`, `app.js`, `cart.min.js`, `slider.js`, `helper.js`, `lodash.core.min.js`, `jquery.currencies.min.js`, `shop_events_listener-819172a8.js`, `ecom.js`.
- **Constructor de páginas: EComposer.** Script cargado desde `https://cdn.shopify.com/extensions/01a1d2f3-2088-7cea-9e22-102c88986e67/ecomposer-162/assets/ecom.js` y dominio `cdn.ecomposer.app` referenciado 5 veces en la home. **INFERIDO** (confianza alta): secciones/landing pages construidas o extendidas con la app EComposer Page Builder.
- **jQuery + lodash** presentes en el front (librerías del tema Goodwin, no necesariamente elegidas por la tienda).
- **Selector de moneda** en el front (`jquery.currencies.min.js`): **HIPÓTESIS** — pudo existir multi-moneda; hoy la tienda opera en MXN y no se observó selector activo en la home. No se verificó.

### NO VERIFICADO

- Si el tema Goodwin es la base original o una copia muy modificada: el nombre interno dice "Copy of…", pero el grado de personalización no es medible desde fuera. **NO VERIFICADO**.
- Rendimiento (Core Web Vitals, peso real en navegador): no medido en esta fase. **NO VERIFICADO**.

---

## 4. API pública de catálogo

### OBSERVADO

- **`/products.json?limit=5` → HTTP 200**, JSON válido de Shopify: 5 productos devueltos con `title`, `handle`, `vendor` (KiXocolatl), `variants` con `price` en MXN y `tags` (p. ej. `OSO NAVIDEÑO`, $242.00 MXN, tag `Navidad 2026`).
- **`/products.json?limit=250` → HTTP 200: 109 productos** devueltos en una sola respuesta.
- **`/collections.json?limit=250` → HTTP 200: 32 colecciones** (p. ej. `Barra de Chocolate`, `Cacao`, `Cajas de Regalo`, `Chocolate sin Azúcar`, `14 DE FEBRERO / SAN VALENTÍN`).
- **`/collections/all/products.json?limit=3` → HTTP 200** (5,112 bytes).
- **`/search.json?q=chocolate` → HTTP 200 pero devuelve HTML** (la página de búsqueda renderizada, no JSON): el endpoint `.json` de búsqueda no expone JSON en esta tienda.
- **Sitemap de productos:** `sitemap_products_1.xml?from=4553257320522&to=10349376340137` listado en el índice.
- **Monorail (analítica de Shopify):** `monorail-edge.shopifysvc.com` y `monorail/unstable/produce_batch` presentes en el HTML: telemetría propia de Shopify activa.

### INFERIDO (confianza alta)

- La API pública de catálogo de Shopify (`.json`) está habilitada y sin autenticación, como es habitual en Shopify. Es el mismo mecanismo que usaría un agente o un scraper para leer el catálogo sin credenciales.
- El catálogo real es de al menos 109 productos (el límite pedido fue 250 y devolvió 109; si hubiera más de 250 no se verían, pero 109 < 250, por lo que el total visible por esta vía es 109 salvo productos ocultos/no publicados).

### NO VERIFICADO

- Storefront GraphQL API (`/api/2026-XX/graphql.json`): no se probó con token (requeriría token público del tema, y no forma parte del alcance de lectura pasiva). **NO VERIFICADO** si está habilitada para terceros.
- Existencia de productos ocultos, borradores o variantes no listadas en `products.json`. **NO VERIFICADO**.

---

## 5. Checkout y métodos de pago

### OBSERVADO

- **Checkout de Shopify.** `HEAD https://www.kixocolatl.mx/checkout` → **HTTP 302** a `https://www.kixocolatl.mx/checkouts/cn/hWNJ6wxQWmiRQ5MBeqUxyOpu/es-mx?…` (sin carrito previo; Shopify crea/redirige a un checkout vacío). El dominio de checkout es el propio dominio de la tienda (checkout en dominio propio, no en `checkout.shopify.com`).
- **PayPal activo.** En el HTML de la home: `PaypalV4VisibilityTracking = true;`, `paypal-v4="true" data-currency="MXN"`, `paypal-metadata` con `data-shop-id="28577202250"` y `data-venmo-supported=…`. El texto de términos visible en el HTML menciona: `Visa, MasterCard y American Express; (ii) Paypal.`
- **Checkout acelerado / billeteras portátiles:** CSS de `cdn/shopifycloud/portable-wallets/latest/accelerated-checkout-backwards-compat.css` precargado en la home y `Shopify.PaymentButton` inicializado (botón de pago dinámico). **INFERIDO** (confianza alta): Shop Pay y/o Apple Pay / Google Pay disponibles como pago acelerado, que es el comportamiento estándar de Shopify Payments con billeteras. El listado exacto de billeteras no es observable sin llegar al checkout con un carrito (fuera de alcance).
- **No se observó** en el HTML: Conekta, OpenPay, Mercado Pago, Stripe directo, OXXO ni SPEI como métodos de pago (búsqueda textual en la home del 13 nov 2026, sin coincidencias).

### INFERIDO (confianza media)

- El procesador de tarjetas es probablemente **Shopify Payments** (el estándar cuando PayPal aparece integrado como método adicional y no hay pasarela mexicana visible en el front). No hay marcador en el HTML que lo confirme o lo niegue.

### NO VERIFICADO

- Listado completo y exacto de métodos de pago del checkout (tarjetas, meses sin intereses, OXXO, SPEI, Mercado Pago, etc.): solo se puede ver dentro del checkout con un carrito, lo cual está fuera del alcance de esta fase. **NO VERIFICADO**.
- Si acepta meses sin intereses o pagos en efectivo: **NO VERIFICADO**.
- La página `/policies/terms-of-service` y `/policies/shipping-policy` devolvieron **HTTP 404** con el HTML de la página de error de Shopify (las políticas usan otras rutas o no están publicadas en esas URLs). **NO VERIFICADO** por esa vía.

---

## 6. Terceros observados en el front

Dominios de terceros referenciados en el HTML de la home (13 nov 2026). Se listan solo los observados; la función exacta de cada uno se etiqueta por separado.

| Tercero / dominio | Evidencia | Uso |
|---|---|---|
| **Google Tag Manager** `googletagmanager.com` — contenedor **GTM-KRGRHJ4** | `gtm.js?id=` y `ns.html?id=GTM-KRGRHJ4` en la home | **OBSERVADO.** Gestión de etiquetas; lo que GTM dispara por dentro (GA4, etc.) no es visible desde el HTML. |
| **Meta / Facebook Pixel + CAPI** | `facebook.com`, `facebookCapiEnabled: true` en el HTML; enlace a `facebook.com/Kixocolatl` | **OBSERVADO** píxel de Facebook con **Conversions API habilitada** (`facebookCapiEnabled: true`). El ID del píxel no se extrajo (no era necesario para el stack). |
| **Shopify Monorail** `monorail-edge.shopifysvc.com` | `monorail/unstable/produce_batch` en el HTML | **OBSERVADO.** Telemetría/analítica propia de Shopify. |
| **EComposer** `cdn.ecomposer.app` | 5 referencias; script `ecom.js` en `extensions.shopifycdn.com` | **OBSERVADO.** App de construcción de páginas (Shopify app). |
| **HulkApps — Volume Discount + Product Options** `volumediscount.hulkapps.com`, `productoption.hulkapps.com`, `ha-volume-discount.nyc3.digitaloceanspaces.com` | Dominios referenciados en la home | **OBSERVADO** (presencia de dominios). **INFERIDO** (confianza media): descuentos por volumen y opciones de producto activos en el front. La configuración concreta (reglas de descuento, qué productos) es **NO VERIFICADA**. |
| **Cacao-Trace** `cacaotrace.com` | Enlace `cacaotrace.com/es/inicio` en la home | **OBSERVADO.** Enlace saliente a programa de sostenibilidad/cacao (contenido, no script). |
| **WhatsApp** `wa.me/9993696239` (también `wa.me/19993696239`) | Enlace `wa.me` en la home | **OBSERVADO.** Canal de contacto/ventas por WhatsApp (número visible en el HTML público). |
| **Instagram / Facebook** `instagram.com`, `facebook.com` | Enlaces sociales en la home | **OBSERVADO.** Solo enlaces salientes a perfiles. |
| **cdnjs (Cloudflare CDN)** `cdnjs.cloudflare.com` | 2 referencias | **OBSERVADO.** Librería servida desde CDN público (típicamente del tema). |
| **w3.org / schema.org** | 5 + 2 referencias | **OBSERVADO.** Marcado estructurado/schema del tema (no es un tercero comercial). |

### NO VERIFICADO (terceros)

- **Email marketing (Klaviyo, Mailchimp u otro):** ninguna referencia en la home del 13 nov 2026. Ausencia registrada, no confirmada: el email puede operar sin marcador visible en la home. **NO VERIFICADO**.
- **App de reseñas (Judge.me, Yotpo, Stamped, Loox):** ninguna referencia en la home. **NO VERIFICADO** (ausencia en la home, no en todo el sitio).
- **Chat en vivo (Shopify Inbox, Zendesk, etc.):** ningún widget de chat observado en la home. **NO VERIFICADO** (el canal de chat observado es WhatsApp vía `wa.me`).
- **TikTok Pixel, Pinterest, Hotjar, Microsoft Clarity:** sin referencias en la home. **NO VERIFICADO**.
- **Contenido de GTM (qué etiquetas dispara GTM-KRGRHJ4):** el contenedor GTM no se descargó ni se inspeccionó por dentro; requeriría ejecutar el JS. **NO VERIFICADO**.

---

## 7. Comercio agentic (UCP / agents.md)

### OBSERVADO — La tienda es agentic-ready, con UCP nativo de Shopify

- **`/agents.md` → HTTP 200 (5,449 bytes).** Documento `# Agent Instructions — KiXocolatl`: indica que los agentes pueden navegar y comprar en nombre del usuario, recomienda la Shop skill (`https://shop.com/SKILL.md`), describe la integración UCP y remite a la documentación de Shopify (Storefront WebMCP, Checkout WebMCP). Exige autorización del comprador, Web Bot Auth para tráfico de agentes, respeto a `429`/`Retry-After`, y prohíbe atajos con scripts sobre el checkout. El propio documento declara que la tienda está construida en Shopify y que "Shopify stores support UCP natively".
- **`/.well-known/ucp` → HTTP 200 (4,604 bytes), JSON válido.** Perfil UCP **versión `2026-08-25`**, con versiones soportadas `2026-04-08` y `2026-01-23`. Servicios:
  - `dev.ucp.shopping` (transporte **MCP**, endpoint `https://kixocolatl.myshopify.com/api/ucp/mcp`) y transporte **embedded**.
  - `dev.ucp.common` (MCP, mismo endpoint).
  - Capacidades declaradas: `checkout`, `fulfillment` (solo `shipping`, `multi_destination: []`), `discount`, `cart`, `buyer_consent`, `order`, `catalog.search`, `catalog.lookup`, `dev.shopify.catalog`, `dev.shopify.shopping.declared_fields`, `dev.ucp.common.ask`, `dev.ucp.common.identity_linking` (OAuth2 vía `accounts.shop.app` — Shop), `dev.ucp.shopping.permalink` (endpoint `https://www.kixocolatl.mx/buy`).
  - **`payment_handlers: {}`** (vacío en el perfil leído).
- **Cabecera `Link` en todas las respuestas:** `</.well-known/ucp>; rel="ucp"; version="2026-08-25"` — descubrimiento UCP anunciado por cabecera, no solo por archivo.
- **`robots.txt` referencia el descubrimiento agentic** explícitamente: `# Agent instructions: …/agents.md`, `# UCP discovery: …/.well-known/ucp`, `# UCP/MCP endpoint: …/api/ucp/mcp`. También recomienda instalar la Shop skill (`https://shop.com/SKILL.md`) para personalizar con el historial de Shop y acelerar el checkout con Shop Pay.
- **`sitemap_agentic_discovery.xml` → HTTP 200 (214 bytes):** un solo URL, `https://www.kixocolatl.mx/agents.md`, `changefreq: weekly`. Es el sitemap de descubrimiento agentic listado en el índice principal.
- El endpoint MCP (`https://kixocolatl.myshopify.com/api/ucp/mcp`) **no se invocó**: comprobar su funcionamiento requeriría una sesión MCP, fuera del alcance de lectura pasiva de esta fase.

### INFERIDO (confianza alta)

- La capacidad agentic es **nativa de Shopify**, no una integración a medida de Ki'Xocolatl: el `agents.md`, el perfil UCP y el `robots.txt` con ese contenido son los que Shopify genera por defecto para sus tiendas en 2026. La tienda no parece haber personalizado el documento (no hay mención a políticas propias de la marca dentro de él, más allá del nombre).

### NO VERIFICADO

- Que el endpoint MCP responda y ejecute búsquedas de catálogo, carrito y checkout: **NO VERIFICADO** (no invocado).
- `payment_handlers` vacío: no se interpreta como "no acepta pagos por UCP"; el perfil declara la capacidad `checkout` y el pago se resolvería por los handlers del checkout de Shopify. **NO VERIFICADO** cómo se resuelve el pago vía UCP en la práctica.
- Ninguna lectura de esta sección devolvió 429 ni expiró, por lo que no hubo resultados "desconocidos" por rate limit en el frente agentic.

---

## 8. Tabla de componentes

| Componente | Tecnología / proveedor | Estado | Evidencia |
|---|---|---|---|
| Plataforma e-commerce | **Shopify** (SaaS, tienda `kixocolatl.myshopify.com`) | Confirmado | Cabeceras `powered-by: Shopify`, `Shopify.shop`, `robots.txt`, sitemap |
| Hosting / origen | Shopify sobre Google Cloud (`x-dc: gcp-us-central1 / gcp-us-east1`) | Confirmado | Cabeceras `x-dc`, `server-timing` |
| CDN / proxy frontal | **Cloudflare** (Shopify) | Confirmado | `Server: cloudflare`, `CF-RAY`, `cf-cache-status: DYNAMIC` |
| DNS | A `198.18.118.119`, `198.18.118.120` | Confirmado | `dig` 13 nov 2026 |
| TLS | HTTPS + HSTS (`max-age=7889238`) | Confirmado (emisor no verificado) | Cabeceras; cert no leído en esta sesión |
| Tema | **Goodwin** v2.1 (copia personalizada, id 115417022633) | Confirmado | `Shopify.theme` en HTML |
| Constructor de páginas | **EComposer** | Confirmado | Script `ecom.js`, `cdn.ecomposer.app` |
| API de catálogo pública | Shopify `.json` (`/products.json`, `/collections.json`) — 109 productos, 32 colecciones | Confirmado | HTTP 200, JSON válido |
| Búsqueda | `/search.json` devuelve HTML, no JSON | Confirmado | HTTP 200 con HTML |
| Checkout | Shopify (dominio propio, `/checkouts/cn/…/es-mx`) | Confirmado | 302 observado |
| Pago acelerado | Shop Pay / billeteras portátiles (PaymentButton + portable-wallets) | Inferido (alta) | CSS y JS observados |
| PayPal | PayPal v4 integrado | Confirmado | `paypal-v4="true"`, `PaypalV4VisibilityTracking` |
| Tarjetas | Visa, MasterCard, American Express (mencionadas en términos del HTML) | Confirmado (mención) | Texto en home HTML |
| Analítica | GTM `GTM-KRGRHJ4` + Meta Pixel/CAPI + Monorail | Confirmado (presencia) | HTML y cabeceras |
| Descuentos / opciones | HulkApps Volume Discount + Product Options | Confirmado (dominios) | Dominios en HTML |
| Contacto / chat | WhatsApp (`wa.me/9993696239`) | Confirmado | Enlace en home |
| Sostenibilidad | Enlace Cacao-Trace | Confirmado | Enlace en home |
| Agentic — agents.md | Presente (plantilla Shopify) | Confirmado | HTTP 200, 5,449 bytes |
| Agentic — UCP | Perfil `2026-08-25`, MCP en `kixocolatl.myshopify.com/api/ucp/mcp` | Confirmado (perfil) | HTTP 200, JSON válido |
| Agentic — sitemap | `sitemap_agentic_discovery.xml` → solo `agents.md` | Confirmado | HTTP 200, 214 bytes |
| Email marketing | Sin marcador en la home | No verificado | Ausencia en home, no en todo el sitio |
| App de reseñas | Sin marcador en la home | No verificado | Ausencia en home, no en todo el sitio |
| Chat en vivo (widget) | Sin widget observado | No verificado | Solo WhatsApp observado |
| Plan de Shopify / versión | SaaS sin versión pública | No verificado | Por diseño de la plataforma |

---

## 9. Lista de inferidos y no verificados

### Inferidos (con confianza)

1. **Checkout estándar de Shopify con Shop Pay / billeteras aceleradas** — confianza alta (PaymentButton + CSS de portable-wallets observados).
2. **EComposer usado para construir secciones del front** — confianza alta (script y dominio presentes).
3. **HulkApps activo para descuentos por volumen y opciones de producto** — confianza media (dominios presentes; la configuración concreta no se vio).
4. **Procesador de tarjetas probablemente Shopify Payments** — confianza media (sin pasarela mexicana visible en el front; sin marcador confirmatorio).
5. **Capacidad agentic nativa de Shopify, no integración a medida** — confianza alta (contenido idéntico a la plantilla que Shopify genera para sus tiendas).
6. **Terminación TLS en Cloudflare/Shopify** — confianza alta (cabeceras), emisor del certificado no leído.
7. **Catálogo total visible de 109 productos** — confianza alta (`products.json?limit=250` devolvió 109), salvo productos no publicados.

### No verificados

- Versión y plan de Shopify; listado exacto de métodos de pago del checkout (meses sin intereses, OXXO, SPEI, Mercado Pago); contenido interno del contenedor GTM-KRGRHJ4; email marketing; app de reseñas; chat en vivo por widget; emisor del certificado TLS; funcionamiento real del endpoint MCP (`/api/ucp/mcp` no invocado); Storefront GraphQL para terceros; cómo se resuelve el pago vía UCP con `payment_handlers: {}`; políticas de envío/términos (las rutas `/policies/…` probadas dieron 404).
- **Ninguna lectura devolvió 429 ni expiró** en esta fase: no hubo resultados "desconocidos" por rate limit. (La única lectura fallida por el entorno fue el certificado TLS directo, por intercepción del proxy local, no por el sitio.)

---

## 10. Fuentes

Todas consultadas el 13 de noviembre de 2026, entre 19:49 y 19:56 UTC (13:49–13:56 CST), mediante lectura pública HTTP(S) sin autenticación:

- `https://kixocolatl.mx/` → 301 a `https://www.kixocolatl.mx/` (cabeceras y HTML, 288,177 bytes)
- `https://www.kixocolatl.mx/robots.txt` → HTTP 200 (3,703 bytes)
- `https://www.kixocolatl.mx/sitemap.xml` → HTTP 200 (884 bytes)
- `https://www.kixocolatl.mx/sitemap_agentic_discovery.xml` → HTTP 200 (214 bytes)
- `https://www.kixocolatl.mx/agents.md` → HTTP 200 (5,449 bytes)
- `https://www.kixocolatl.mx/.well-known/ucp` → HTTP 200 (4,604 bytes, JSON)
- `https://www.kixocolatl.mx/products.json?limit=5` → HTTP 200 (5,671 bytes)
- `https://www.kixocolatl.mx/products.json?limit=250` → HTTP 200 (109 productos)
- `https://www.kixocolatl.mx/collections.json?limit=250` → HTTP 200 (32 colecciones)
- `https://www.kixocolatl.mx/collections/all/products.json?limit=3` → HTTP 200 (5,112 bytes)
- `https://www.kixocolatl.mx/search.json?q=chocolate` → HTTP 200 (HTML, no JSON)
- `https://www.kixocolatl.mx/checkout` → HTTP 302 a `/checkouts/cn/…/es-mx` (solo cabeceras, sin carrito)
- `https://www.kixocolatl.mx/policies/terms-of-service` y `/policies/shipping-policy` → HTTP 404 (página de error de Shopify)
- DNS: `dig www.kixocolatl.mx` (A 198.18.118.119 / 198.18.118.120)

---

## 11. Límites de esta investigación

- Solo se leyó lo público y sin autenticación; no se inició sesión, no se creó carrito, no se compró ni se contactó a la tienda. El checkout real (métodos de pago completos, envíos, meses sin intereses) no es observable sin un carrito.
- La home es la única página cuyo HTML se analizó a fondo; los terceros listados son los visibles en la home. Otras páginas (producto, colección, checkout) pueden cargar terceros adicionales.
- No se descargó ni ejecutó el contenido del contenedor GTM ni el JS de las apps: su comportamiento interno queda fuera.
- No se reprodujo ninguna clave de API ni secreto: no apareció ninguno en el código leído. El único identificador técnico citado es el `shop-id` público de Shopify (`28577202250`) visible en el HTML, usado solo como evidencia de la integración PayPal.
- Los conteos (109 productos, 32 colecciones) corresponden a lo que la API pública devolvió el 13 nov 2026; el catálogo cambia con el tiempo y durante el Buen Fin puede haber altas/bajas.
- La información de precios y promociones del Buen Fin no forma parte de este frente (F2 = back end + stack); corresponde a otros frentes del informe.
