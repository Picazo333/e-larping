# TANE — F2 · Back end + stack

**Frente:** F2 (back end + stack) · **Fase:** 2 de la WO-E-LARPING
**Sitio:** TANE — https://tane.mx/ — joyería mexicana de lujo
**Fecha de la investigación:** viernes 13 de noviembre de 2026 (primer día del Buen Fin 2026, 13–17 nov)
**Hora de las lecturas:** 13:49–13:51 CST (19:49–19:51 GMT), 13 nov 2026
**Método:** solo fuentes públicas. Lectura de páginas, `robots.txt`, `sitemap.xml` y sitemaps hijos, endpoints públicos de Shopify (`/products.json`, `/collections.json`, `/meta.json`, `/search/suggest.json`), cabeceras HTTP con `curl -I`, descarga pública del HTML crudo de la home para ver scripts y dominios de terceros, `/agents.md` y `/.well-known/ucp`. Sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto con la tienda. No se ejecutó ninguna llamada al endpoint MCP (`/api/ucp/mcp`): solo se leyó su anuncio en el perfil UCP.
**Alcance:** este frente cubre únicamente back end + stack. Precios, catálogo, UX, SEO y contenido los cubren otros frentes.

> **Convención de etiquetas (usada en todo el documento):** **OBSERVADO** = visto directamente en una fuente pública citada, con URL y fecha · **INFERIDO** = conclusión razonada desde evidencia citada, con confianza estimada · **HIPÓTESIS** = derivación marcada como tal, sin evidencia directa · **NO VERIFICADO** = no se pudo comprobar con los medios de este frente.

---

## 0. Veredicto en una línea

**OBSERVADO —** TANE México corre sobre **Shopify** (tienda `tane-mx.myshopify.com`, shop ID `28486959213`), con el dominio público `tane.mx` redirigiendo al subdominio de mercado `mx.tane.com`, tema **Pipeline 7.1.3** personalizado bajo el nombre `Tane-2.0/main`, CDN de Shopify + Cloudflare por delante, checkout nativo de Shopify, PayPal visible como método, MSI de hasta 18 meses en el Buen Fin, y **comercio agentic completo y activo**: `/agents.md` y `/.well-known/ucp` (UCP versión `2026-08-25`) responden 200 con perfil íntegro. Es, de los sitios investigados hasta ahora en esta fase, el stack más "de manual Shopify Plus/enterprise" — pero el plan concreto de Shopify es **NO VERIFICADO** (no es observable desde fuera).

---

## 1. Plataforma

### 1.1 Shopify, verificado por cinco marcadores independientes

**OBSERVADO —** La plataforma es Shopify. Evidencia positiva, toda del 13 nov 2026:

1. **Cabecera `powered-by: Shopify`** en la respuesta de `https://tane.mx/` (301) y de `https://mx.tane.com/` (200). Fuente: cabeceras HTTP leídas con `curl -I -L`, 13 nov 2026, 19:49 GMT.
2. **`Shopify.shop = "tane-mx.myshopify.com"`** en el HTML de la home. Fuente: `https://mx.tane.com/`, HTML crudo descargado 13 nov 2026 (1,809,080 caracteres).
3. **`Shopify.theme = {"name":"Tane-2.0/main","id":162850865451,"schema_name":"Pipeline","schema_version":"7.1.3","theme_store_id":null,"role":"main"}`** en el mismo HTML. Fuente: `https://mx.tane.com/`, 13 nov 2026.
4. **`robots.txt` abre con `# Shopify storefront.`** y remite a `/agents.md` y `/.well-known/ucp`. Fuente: `https://mx.tane.com/robots.txt`, 13 nov 2026.
5. **Endpoints públicos de Shopify responden con datos reales:** `/products.json?limit=5` (200, productos con `vendor: "TANE México 1942"`, precios en MXN, imágenes en `cdn.shopify.com`), `/collections.json?limit=5` (200), `/meta.json` (200, ver §5), `/search/suggest.json?q=aretes` (200). Fuente: lecturas directas, 13 nov 2026.

**OBSERVADO —** Dominio canónico de Shopify: `tane-mx.myshopify.com`. Shop ID: `28486959213` (coincide en `meta.json`, en el meta `in-context-paypal-metadata` y en el diálogo de billeteras digitales `/28486959213/digital_wallets/dialog`). Fuente: `https://mx.tane.com/meta.json` y HTML de la home, 13 nov 2026.

**OBSERVADO —** Ausencia de marcadores de otras plataformas: en el HTML de la home y en las cabeceras no aparece ningún marcador de Magento (`/static/`, `mage/`), WooCommerce (`wp-content`, `woocommerce`), PrestaShop, Tiendanube ni headless genérico (no hay `__NEXT_DATA__`, ni `/_next/`, ni `Remix`, ni `Hydrogen`/`Oxygen` en el HTML). Fuente: búsqueda en el HTML crudo de `https://mx.tane.com/`, 13 nov 2026. **INFERIDO (confianza alta) —** no es headless: el render es el de un tema Liquid clásico de Shopify (ver §4).

**NO VERIFICADO —** Versión/plan de Shopify (Basic / Shopify / Advanced / Plus). Shopify no expone el plan en cabeceras ni en HTML público. La cabecera `shopify-complexity-score: 534` (home MX) es un puntaje interno de Shopify, no un identificador de plan. **HIPÓTESIS —** por el volumen (387 productos publicados, 188 colecciones), el multi-mercado MX/US, el checkout con `default_configuration_id` y la madurez de integraciones (Salesforce, Klaviyo, UCP), el plan es probablemente Shopify Plus o Advanced; pero es solo hipótesis: ningún dato público lo confirma.

**NO VERIFICADO —** Versión de Shopify en el sentido de "release" del core: Shopify es SaaS y no publica número de versión del core; lo único versionado y observable es el tema (Pipeline 7.1.3) y la versión UCP (2026-08-25).

### 1.2 Multi-mercado: MX y US son dos tiendas/temas distintos

**OBSERVADO —** `https://tane.mx/` responde **301** a `https://mx.tane.com/` con cabecera `x-redirect-reason: primary_domain_redirection`. Fuente: `curl -I -L https://tane.mx/`, 13 nov 2026, 19:49 GMT.

**OBSERVADO —** Existe una tienda espejo para EE. UU. en `https://us.tane.com/` (200, también Shopify, `powered-by: Shopify`, también con enlace UCP). Su tema es distinto: `/cdn/shop/t/31/assets/theme.css` frente a `/cdn/shop/t/70/assets/theme.css` en MX, y su `etag` de caché referencia otro shop/page (`page_cache:46059815075` frente a `page_cache:28486959213` en MX). Fuente: cabeceras de `https://us.tane.com/`, 13 nov 2026, 19:51 GMT.

**OBSERVADO —** El HTML de MX incluye lógica de geolocalización en el cliente: obtiene la IP del visitante (vía `api.ipify.org`) y, si el código de país no es `MX`, redirige a `us.tane.com` (parte de esa lógica aparece comentada en el código el día de la lectura; la redirección activa no se probó desde una IP no mexicana). Fuente: HTML crudo de `https://mx.tane.com/`, 13 nov 2026.

**INFERIDO (confianza media-alta) —** MX y US operan como dos storefronts/temas separados sobre el mismo negocio (probablemente dos tiendas Shopify o dos mercados con temas distintos), no como un solo tema con selector de mercado. Evidencia: IDs de tema distintos (`t/70` vs `t/31`) y shop IDs de caché distintos en el `etag`.

**OBSERVADO —** En `meta.json` de MX: `ships_to_countries: ["MX"]`, `currency: "MXN"`, `country: "MX"`, `domain: "mx.tane.com"`, ciudad/provincia "Ciudad de México". Fuente: `https://mx.tane.com/meta.json`, 13 nov 2026.

---

## 2. Hosting, origen y CDN

**OBSERVADO —** Por delante hay **Cloudflare**: cabecera `Server: cloudflare`, `CF-RAY` (p. ej. `a5a04d1abf8fdfbd-MIA`), `cf-cache-status: DYNAMIC`, `alt-svc: h3=":443"` (HTTP/3). Fuente: cabeceras de `https://mx.tane.com/` y `https://us.tane.com/`, 13 nov 2026.

**OBSERVADO —** El origen es **Google Cloud, infraestructura de Shopify**: cabecera `x-dc: gcp-us-east1,gcp-us-east1,gcp-us-east1` en la home MX (y `gcp-us-west1` en la respuesta 301 inicial de `tane.mx`), y `server-timing` con `servedBy: pmx7`, `edge: MIA`, `asn: 13335` (ASN de Cloudflare). Fuente: mismas cabeceras, 13 nov 2026. **INFERIDO (confianza alta) —** Shopify hospeda el origen en GCP (coherente con la arquitectura pública de Shopify) y Cloudflare actúa como CDN/WAF por delante; no hay servidor propio observable.

**OBSERVADO —** Los assets estáticos se sirven desde el CDN de Shopify: `cdn.shopify.com` (imágenes de producto en `/s/files/1/0284/8695/9213/...`, donde `0284/8695/9213` corresponde al shop ID `28486959213`) y el dominio propio `mx.tane.com/cdn/shop/t/70/assets/...` para CSS/JS del tema. La home precarga `theme.css` y la hoja de billeteras aceleradas (`shopifycloud/portable-wallets/.../accelerated-checkout-backwards-compat.css`). Fuente: HTML y cabeceras `link: <https://cdn.shopify.com>; rel="preconnect"`, 13 nov 2026.

**OBSERVADO —** Seguridad de transporte: `strict-transport-security: max-age=7889238`, `x-frame-options: DENY`, `content-security-policy: block-all-mixed-content; frame-ancestors 'none'; upgrade-insecure-requests;`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection: 1; mode=block`, `X-Download-Options: noopen`. Fuente: cabeceras de `https://mx.tane.com/`, 13 nov 2026.

**OBSERVADO —** La home MX es contenido dinámico no cacheable en edge: `Cache-Control: private, max-age=0, must-revalidate`, `cf-cache-status: DYNAMIC`. Fuente: cabeceras, 13 nov 2026.

**NO VERIFICADO —** DNS autoritativo y registrador (no se consultó WHOIS/DNS autoritativo en este frente; la resolución vista desde esta máquina pasa por un resolver intermediario y no es evidencia fiable del origen). **NO VERIFICADO —** Tiempos de carga / Core Web Vitals (no se midieron; el `server-timing` de la home MX marcó `processing;dur=540` ms en esa lectura puntual, pero una sola muestra no es una métrica de rendimiento).

---

## 3. Front-end / tema

**OBSERVADO —** Tema: **Pipeline, versión 7.1.3** (`schema_name: "Pipeline"`, `schema_version: "7.1.3"`), personalizado con nombre interno `Tane-2.0/main`, ID `162850865451`, rol `main`, `theme_store_id: null` (tema no comprado en la tienda de temas en su forma actual, o subido/customizado). Fuente: `Shopify.theme` en el HTML de `https://mx.tane.com/`, 13 nov 2026.

**OBSERVADO —** Assets del tema MX (ruta `/cdn/shop/t/70/assets/`): `theme.css` (v=`122846536316183777121794418269`), `theme.dev.js`, `vendor.js`, `custom.js`. Fuente: HTML y cabecera `link` de preload, 13 nov 2026.

**OBSERVADO —** Librería de sliders **Swiper 8.4.7** incrustada en el HTML (comentario de cabecera `Swiper 8.4.7 … https://swiperjs.com … Released on: January 30, 2023`, licencia MIT). Fuente: HTML de la home, 13 nov 2026.

**OBSERVADO —** Tipografías propias del tema: variables CSS `--TYPE-STACK-...: 'CanelaText'` (Canela Text como tipografía editorial del tema). Fuente: `<style>` en el HTML de la home, 13 nov 2026.

**OBSERVADO —** Clases del `<body>` de la home revelan las apps activas a nivel de tema: `s-bundles s-zendesk s-wishlist-plus s-socialwidget s-pre-order s-customify s-revie s-stackable-discounts template-index`. Fuente: HTML de la home, 13 nov 2026. (Detalle de cada app en §7; `s-revie` aparece truncada en el código y se trata como indicio, no como nombre confirmado.)

**OBSERVADO —** La home incluye `captcha-bootstrap` (protección anti-bots de Shopify en formularios) y el script de WebMCP `webmcp-cfeae510.js` (ver §8). Fuente: HTML de la home, 13 nov 2026.

**INFERIDO (confianza alta) —** Front-end en Liquid + JavaScript clásico de tema (no headless, no React/Vue en el storefront): no hay marcadores de framework JS moderno en el HTML; los scripts propios son `theme.dev.js`/`vendor.js`/`custom.js` del tema Pipeline.

---

## 4. API pública de catálogo

**OBSERVADO —** Shopify expone su API pública clásica (sin autenticación) y responde con datos reales:

| Endpoint (MX) | Resultado 13 nov 2026 | Contenido observado |
|---|---|---|
| `/products.json?limit=5` | 200 | Productos con `id`, `handle`, `title`, `vendor: "TANE México 1942"`, `product_type`, `tags` (p. ej. `coleccion:Alma`, `filtro-Metal:Vermeil_Oro_rosa`, `product_preorder`, `Top_27`), `variants` con `sku`, `price` en MXN, `available`, imágenes en `cdn.shopify.com`. Primer producto: "ARETES ALMA VERMEIL ROSA", $6,500.00 MXN, SKU `01020700014`. |
| `/collections.json?limit=5` | 200 | Colecciones con `id`, `handle`, `products_count` (p. ej. "8 Doble Enlazado", "Buen Fin 2023"). |
| `/meta.json` | 200 | `id: 28486959213`, `name: "TANE México 1942"`, `currency: "MXN"`, `domain: "mx.tane.com"`, `myshopify_domain: "tane-mx.myshopify.com"`, `published_products_count: 387`, `published_collections_count: 188`, `ships_to_countries: ["MX"]`, `money_format: "$ {{amount_no_decimals}}"`, `shopify_pay_enabled_card_brands: []`, `offers_shop_pay_installments: false`. |
| `/search/suggest.json?q=aretes` | 200 | Búsqueda predictiva de Shopify: devuelve productos con `handle`, `id`, `available`, `image`, `body`. |
| `/sitemap.xml` | 200 | Índice con 6 sitemaps hijos, incluido `sitemap_agentic_discovery.xml` (ver §8). |
| `/sitemap_products_1.xml` | 200 | **388 URLs** de producto. |
| `/sitemap_pages_1.xml` | 200 | **134 URLs** de página. |
| `/sitemap_collections_1.xml` | 200 | **188 URLs** de colección (coincide con `published_collections_count: 188`). |
| `/sitemap_blogs_1.xml` | 200 | **4 URLs** de blog. |
| `/sitemap_articles_1.xml` | 200 | **1 URL** de artículo. |

**OBSERVADO —** Discrepancia menor, consignada sin resolver: el sitemap lista 388 URLs de producto y `meta.json` declara 387 productos publicados. Fuente: ambas lecturas, 13 nov 2026. **INFERIDO (confianza media) —** la diferencia de 1 probablemente es un producto en el sitemap aún no publicado o un desfase de caché entre ambos endpoints; no se investigó producto por producto (fuera del alcance de este frente).

**OBSERVADO —** El `robots.txt` de Shopify desautoriza expresamente a los crawlers las superficies AJAX (`/cart.js`, `/recommendations/products`, `/services`, `/sf_*`, `/.well-known/shopify/monorail`) y el checkout (`/checkout`, `/checkouts/`, `/orders`, `/admin`, `/cart/`), y remite a los agentes a usar UCP/MCP en su lugar ("AJAX surfaces: agents should use UCP/MCP instead"). Por eso en este frente **no se leyó `/cart.js`** ni se tocó el checkout con carrito. Fuente: `https://mx.tane.com/robots.txt`, 13 nov 2026.

**NO VERIFICADO —** Storefront API GraphQL (`/api/2026-01/graphql.json` o similar): requiere token de storefront; en el HTML aparece un bloque `shopify-features` con un token de acceso, pero **no se reproduce ni se usó** en este frente (ver §9) y no se comprobó si ese token permite consultas GraphQL públicas. **NO VERIFICADO —** Admin API / webhooks / integraciones de back-office (ERP, inventario, facturación): nada de eso es observable desde fuera.

---

## 5. Checkout y métodos de pago

**OBSERVADO —** Checkout nativo de Shopify, sin carrito no hay checkout directo: `GET https://mx.tane.com/checkout` (sin carrito) responde **302** a una URL de checkout de Shopify (`https://mx.tane.com/checkouts/cn/.../es-mx`, con token de sesión que no se reproduce aquí). Fuente: cabeceras, 13 nov 2026, 19:51 GMT. El checkout en sí no se recorrió (no se añadió nada al carrito, por regla de la WO).

**OBSERVADO —** En la home se precarga `/checkouts/internal/preloads.js?locale=es-MX&default_configuration_id=6890094955` y existe el meta de billeteras digitales `/28486959213/digital_wallets/dialog`. Fuente: HTML de la home, 13 nov 2026.

**OBSERVADO — PayPal está activo.** Evidencia doble: (a) meta `in-context-paypal-metadata` con `data-shop-id="28486959213"`, `data-venmo-supported="false"`, `data-environment="production"`, `data-locale="es_ES"`, `data-paypal-v4="true"`, `data-currency="MXN"`; (b) imagen de icono PayPal en el pie (`cdn/shop/files/Icono_PayPal-11.png`) y `window.ShopifyPaypalV4VisibilityTracking = true`. Fuente: HTML de la home, 13 nov 2026.

**OBSERVADO —** En el HTML aparecen las marcas `visa` y `mastercard` en el CSS/JS de métodos de pago del tema, y el código de billeteras portátiles de Shopify está activo (`Shopify.PaymentButton`, `isStorefrontPortableWallets: true`, `portable-wallets/latest/...`). Fuente: HTML de la home, 13 nov 2026. **INFERIDO (confianza media) —** hay botones de pago acelerado (Shop Pay / Apple Pay / Google Pay) disponibles vía el sistema de billeteras de Shopify, pero **NO VERIFICADO** cuáles aparecen en el checkout real: en el HTML de la home no se encontró el texto literal "Shop Pay" ni "Apple Pay" como método visible, y `meta.json` declara `shopify_pay_enabled_card_brands: []` y `offers_shop_pay_installments: false`.

**OBSERVADO — MSI (meses sin intereses), el dato de pago más visible del Buen Fin:**

- En la home, el carrito trae barra de progreso MSI: `data-cart-message-msi="true"`, `data-limit-msi="10000"`, texto "Agrega $ 10,000 más para obtener meses sin intereses" / "¡Felicidades! Su pedido está calificado para meses sin intereses". Fuente: HTML de la home, 13 nov 2026.
- En el pie de la home: "Hasta 18 MSI en compras a partir de $15,000 MXN*". Fuente: HTML de la home, 13 nov 2026.
- Página de términos `https://mx.tane.com/pages/terminos-y-condiciones-promociones` (200, 13 nov 2026): "hasta 18 MSI en su carrito de compra, en el proceso de checkout. Promoción válida con mínimo de compra de $15,000 MXN en una sola orden en mx.tane.com con tarjetas bancarias emitidas en México. … CAT 0.0% para mensualidades sin intereses. Informativo. Válido del 09 al 19 de noviembre de 2026."

**OBSERVADO —** Discrepancia consignada sin resolver: la barra del carrito usa un umbral de $10,000 MXN (`data-limit-msi="10000"`) y los términos de la promoción Buen Fin exigen $15,000 MXN. Fuente: ambas lecturas, 13 nov 2026. **INFERIDO (confianza media) —** el umbral de $10,000 es probablemente el umbral genérico del tema para MSI y el de $15,000 es el de la promoción vigente 09–19 nov 2026; cuál aplica efectivamente en el checkout es **NO VERIFICADO** (no se llegó al checkout con carrito).

**OBSERVADO —** Envío gratis desde $10,000 MXN: la misma barra del carrito dice "Agrega $ 10,000 más para envío gratis" / "¡Felicidades! Su pedido está calificado para envío gratis". Fuente: HTML de la home, 13 nov 2026. (El detalle de paqueterías y costos lo cubre otro frente; aquí solo se registra el umbral visible en el código.)

**OBSERVADO —** No se encontró en el HTML de la home ni en los términos de promociones mención de pago en tienda / recoger en tienda como método de pago; sí existe la página `/pages/encuentra-una-tienda` (enlazada en el pie) y el checkout UCP declara `method_combinations: [["shipping"]]` (solo envío, ver §8). Fuente: HTML de la home y perfil UCP, 13 nov 2026. **INFERIDO (confianza media) —** la venta en línea de MX es solo con envío; el "pago en tienda" no aparece como opción del e-commerce.

**NO VERIFICADO —** Pasarela de tarjetas detrás del checkout (Shopify Payments, Stripe, Conekta, Openpay, Mercado Pago u otra): el checkout de Shopify no expone la pasarela en el HTML público y no se llegó al checkout. La única mención de "Stripe" en la home es 1 ocurrencia en código genérico, sin evidencia de que sea la pasarela activa. **NO VERIFICADO —** Bancos participantes en MSI (los términos solo dicen "tarjetas bancarias emitidas en México", sin listar bancos). **NO VERIFICADO —** OXXO, SPEI, Mercado Pago, Klarna/Afterpay o pago contra entrega: ninguna mención en el HTML de la home ni en los términos leídos; ausencia consignada, no afirmada como inexistencia en el checkout.

---

## 6. Terceros observados en el código

Tabla con lo que el HTML crudo de la home (`https://mx.tane.com/`, 13 nov 2026) carga o referencia. "Carga" = script/recurso externo presente en la página; no implica que la integración esté contratada o activa en el back-office.

| Tercero / app | Evidencia observada (13 nov 2026) | Función inferida | Etiqueta |
|---|---|---|---|
| **Shopify (nativo)** — Analytics / Trekkie / Monorail / Web Pixels Manager | `window.__TREKKIE_SHIM_QUEUE`, `monorail-edge.shopifysvc.com` (preconnect + dns-prefetch), Web Pixels Manager, `shopify-perf-kit-3.15.1.min.js` | Analítica nativa de Shopify, píxeles, rendimiento | OBSERVADO |
| **Google Tag Manager + GA4 + Google Ads** | Config con `google_tag_ids: ["G-6C21WSGGL7", "GT-P82TMML"]`, `target_country: "MX"`, eventos `begin_checkout` / `search` asociados a `AW-16540423302` (Google Ads) y `www.googletagmanager.com` (noscript en el body) | Analítica y remarketing / ads | OBSERVADO (IDs de medición públicos en el código; no se reproduce aquí ningún identificador de conversión individual) |
| **Klaviyo** (email/SMS) | Bloque de app `shopify://apps/klaviyo-email-marketing-sms/…`, scripts `static.klaviyo.com/onsite/js/XusFWj/klaviyo.js?company_id=XusFWj` y `a.klaviyo.com/media/js/onsite/onsite.js` | Email marketing, onsite, SMS | OBSERVADO |
| **Salesforce — Embedded Messaging / Service Cloud** | Script `tane.my.site.com/ESWMessagingTaneChannelEn1771369465673/assets/js/bootstrap.min.js`, `scrt2URL: https://tane.my.salesforce-scrt.com`, canal `MessagingTaneChannelEnhancement` | Chat de atención al cliente en el sitio | OBSERVADO |
| **Zendesk** | Bloque `<!-- Start of tane Zendesk Widget script -->` con `static.zdassets.com/ekr/snippet.js`, **comentado en el HTML** (`<!-- … -->`), y clases `s-zendesk` en el body y CSS asociado | Soporte/chat — probablemente reemplazado por Salesforce | OBSERVADO (presente pero comentado) / INFERIDO (confianza media: en desuso) |
| **Bundler — Bundles App (Nice Team)** | Bloque `shopify://apps/bundler-bundles-app/…`, loader v2.0, `cdn-bundler.nice-team.net/app/js/bundler.js`, `bundler.nice-team.net/app/shop/status/…` | Bundles / compra conjunta / ofertas por paquete | OBSERVADO |
| **HulkApps — Form Builder** | Bloque `shopify://apps/hulk-contact-form-builder/…`, `cdn.shopify.com/extensions/01a1cf0d-…/form-builder-by-hulkapps-85/…` | Formularios (contacto / registro) | OBSERVADO |
| **Social Widget** | `cdn.shopify.com/extensions/01a11ebe-…/social-widget-93/assets/social-widget.min.js` y `social-widget-base.min.js`, clase `s-socialwidget` | Widget social (Instagram/feed) | OBSERVADO |
| **Smart SEO** | Bloque `shopify://apps/smart-seo/…`, meta `smart-seo-integrated: true` | SEO técnico / datos estructurados | OBSERVADO |
| **Common Ninja** | `cdn.commoninja.com/sdk/latest/commonninja.js?shop=tane-mx.myshopify.com` (en la lista de scripts diferidos del tema) | Widgets (tipo de widget no identificable en la home) | OBSERVADO (carga) / NO VERIFICADO (qué widget muestra) |
| **Cookie consent (VersionBear)** | `versionbear.com/script?app=cookie_consent&shop=tane-mx.myshopify.com` (en la lista de scripts diferidos) | Banner de consentimiento de cookies | OBSERVADO |
| **Wishlist Plus** | Clase `s-wishlist-plus` en el body (159 menciones de "wishlist" en el HTML) | Lista de deseos | INFERIDO (confianza media-alta; nombre de app no confirmado en un bloque explícito) |
| **Pre-order** | Clase `s-pre-order`, tag `product_preorder` en `/products.json` | Preventa de productos | OBSERVADO (tag) / INFERIDO (app concreta no identificada) |
| **Customify / personalización** | Clase `s-customify` (13 menciones) | Personalización de producto (grabado; los términos mencionan grabado de piezas, 7 días hábiles, sin costo) | INFERIDO (confianza media) |
| **Stackable Discounts** | Clase `s-stackable-discounts` | Descuentos acumulables | INFERIDO (confianza media) |
| **Geolocalización por IP (código propio del tema)** | `api.ipify.org`, `api.ipstack.com`, `ipwhois.io`, `ipapi.co` referenciados en un script del tema para detectar país y redirigir a `us.tane.com` | Redirección MX/US por país | OBSERVADO (referencias en el código) |
| **Redes sociales** | Enlaces a `facebook.com/tane.mx`, `instagram.com/tane.mx`, `twitter.com/tanemx1942`, `youtube.com/channel/UCeIJ456rmJ8_rEgjZYVHDgg`, `linkedin.com`, `wa.me` | Enlaces salientes (no píxeles confirmados) | OBSERVADO |

**OBSERVADO —** Píxel de Facebook/Meta: **no se encontró** `facebook.com/tr` ni `fbevents.js` en el HTML de la home (búsqueda directa, 13 nov 2026). Eso no prueba que no exista Meta Pixel vía GTM o vía Web Pixels Manager (el píxel puede cargarse desde el contenedor de GTM sin dejar rastro en el HTML estático). Etiqueta: **NO VERIFICADO** (ausencia en el HTML, no ausencia en el stack).

**OBSERVADO —** Reseñas: **no se encontró** Judge.me, Stamped, Yotpo ni Loox en el HTML (0 menciones). La clase truncada `s-revie` y el flag `ReviewsProductDesignMode = false` sugieren alguna función de reseñas del tema o de una app no identificada. Etiqueta: **NO VERIFICADO** qué sistema de reseñas usa.

**OBSERVADO —** En el HTML aparece una clave de API de un servicio de geolocalización por IP incrustada en el JavaScript del tema. **No se reproduce en este informe** (por regla de la WO: no se reproducen claves ni secretos que aparezcan en el código). Se consigna solo como hallazgo de higiene: una credencial de un servicio externo está visible en código público del storefront. Etiqueta: **OBSERVADO (valor omitido deliberadamente)**. Lo mismo aplica al token de acceso del bloque `shopify-features` y a la clave del snippet de Zendesk comentado: existen en el código, no se reproducen ni se usaron.

---

## 7. Comercio agentic (UCP / agents.md / WebMCP)

**OBSERVADO —** TANE tiene comercio agentic **completo y activo**, nativo de Shopify. No es un 404 ni un archivo vacío:

| Recurso | Resultado 13 nov 2026 |
|---|---|
| `https://tane.mx/agents.md` | 200 (redirige a MX; mismo contenido que en `mx.tane.com`) |
| `https://mx.tane.com/agents.md` | 200, 5,761 bytes |
| `https://tane.mx/.well-known/ucp` | 200, JSON UCP íntegro |
| `https://mx.tane.com/.well-known/ucp` | 200, 4,586 bytes, JSON UCP íntegro |
| `https://mx.tane.com/sitemap_agentic_discovery.xml` | 200, lista únicamente `https://mx.tane.com/agents.md` (changefreq weekly) |
| Cabecera `link: </.well-known/ucp>; rel="ucp"; version="2026-08-25"` | Presente en la home MX, en la 301 de `tane.mx` y en `us.tane.com` |

**OBSERVADO —** Contenido de `/agents.md` ("Agent Instructions — TANE México 1942"): recomienda la **Shop skill** (`https://shop.com/SKILL.md`) para descubrimiento personalizado, carrito/checkout acelerado con Shop Pay y seguimiento de pedidos; documenta la integración **UCP directa (MCP)** en 3 pasos (descubrir perfil → `tools/list` en el endpoint → comprar con herramientas) y la integración por navegador (**WebMCP**: herramientas UCP en el storefront y en el checkout); exige autorización del comprador, identificación de tráfico de agente (Web Bot Auth), no usar atajos con scripts sobre formularios, y respetar `429` con backoff y `Retry-After`. Incluye enlaces a las políticas (privacidad, términos, reembolso, envío) y declara: "This store is built on Shopify". Fuente: `https://mx.tane.com/agents.md`, 13 nov 2026.

**OBSERVADO —** Perfil UCP (`/.well-known/ucp`): `ucp.version: "2026-08-25"`, `supported_versions` con `2026-04-08` y `2026-01-23` (URLs en `tane-mx.myshopify.com`), servicios `dev.ucp.shopping` y `dev.ucp.common` por transporte **MCP** en el endpoint `https://tane-mx.myshopify.com/api/ucp/mcp` y transporte **embedded**. Capacidades declaradas: `checkout`, `cart`, `order`, `discount`, `fulfillment` (con `method_combinations: [["shipping"]]` — solo envío), `buyer_consent`, `catalog.search`, `catalog.lookup`, `dev.shopify.catalog`, `dev.shopify.shopping.declared_fields`, `common.ask`, `common.identity_linking` (proveedor `app.shop.accounts`, OAuth2 en `https://accounts.shop.app`), y `shopping.permalink` con endpoint `https://mx.tane.com/buy`. **Dato notable: `payment_handlers: {}` — vacío.** Fuente: `https://mx.tane.com/.well-known/ucp`, 13 nov 2026.

**OBSERVADO —** `robots.txt` refuerza lo agentic: "Agent instructions: https://mx.tane.com/agents.md", "UCP discovery: https://mx.tane.com/.well-known/ucp", "UCP/MCP endpoint: https://mx.tane.com/api/ucp/mcp", y recomienda instalar la Shop skill (`https://shop.com/SKILL.md`) para personalizar con el historial de Shop, acelerar checkout con Shop Pay y rastrear pedidos. Fuente: `https://mx.tane.com/robots.txt`, 13 nov 2026.

**INFERIDO (confianza alta) —** El perfil UCP es el estándar que Shopify genera automáticamente para sus tiendas (mismo texto/estructura que el de otras tiendas Shopify con UCP activo), no una implementación agentic a medida de TANE. Evidencia: las URLs, versiones y textos coinciden con la plantilla de Shopify (`shopify.dev/docs/agents`), y el endpoint apunta al dominio `myshopify.com`.

**NO VERIFICADO —** Que el endpoint MCP (`/api/ucp/mcp`) responda a `tools/list` o ejecute compras: no se llamó (fuera del alcance de este frente; requeriría sesión MCP y no es lectura pública pasiva). **NO VERIFICADO —** Si existe un `llms.txt` o `/.well-known/` adicional: no se buscó más allá de UCP por alcance.

---

## 8. Tabla de componentes (resumen)

| Componente | Valor observado | Etiqueta |
|---|---|---|
| Plataforma | Shopify (`tane-mx.myshopify.com`, shop ID `28486959213`) | OBSERVADO |
| Plan de Shopify | No observable desde fuera | NO VERIFICADO |
| Dominio público | `tane.mx` → 301 → `mx.tane.com` (primary_domain_redirection) | OBSERVADO |
| Mercado US | `us.tane.com`, tema distinto (`t/31` vs `t/70`) | OBSERVADO |
| Hosting / origen | Shopify sobre GCP (`x-dc: gcp-us-east1`); Cloudflare por delante (`Server: cloudflare`, `CF-RAY`) | OBSERVADO / INFERIDO |
| CDN de assets | `cdn.shopify.com` + `mx.tane.com/cdn/shop/` | OBSERVADO |
| Tema | Pipeline 7.1.3, `Tane-2.0/main`, ID `162850865451`, rol `main` | OBSERVADO |
| Front-end | Liquid + JS clásico; Swiper 8.4.7; tipografía Canela Text | OBSERVADO |
| Idioma / moneda MX | `es-MX`, `MXN`, `content-language: es-MX` | OBSERVADO |
| Catálogo público | `/products.json`, `/collections.json`, `/meta.json`, `/search/suggest.json` (todos 200) | OBSERVADO |
| Catálogo (tamaño) | 387 productos publicados (`meta.json`); 388 URLs en sitemap; 188 colecciones | OBSERVADO |
| Checkout | Nativo Shopify; `GET /checkout` sin carrito → 302 a `/checkouts/cn/…/es-mx` | OBSERVADO |
| Pago observado | PayPal (v4, producción, MXN, Venmo no soportado); Visa/Mastercard en código del tema; billeteras portátiles de Shopify activas | OBSERVADO |
| MSI | Hasta 18 MSI; umbral $10,000 en barra del carrito vs $15,000 en términos Buen Fin (09–19 nov 2026, CAT 0.0%, tarjetas emitidas en México) | OBSERVADO (discrepancia consignada) |
| Envío gratis | Desde $10,000 MXN (barra del carrito) | OBSERVADO |
| Pago en tienda | Sin mención en home ni términos; UCP fulfillment solo `shipping` | OBSERVADO (ausencia en lo leído) |
| Email / SMS | Klaviyo (`company_id XusFWj`) | OBSERVADO |
| Chat/soporte | Salesforce Embedded Messaging (activo); Zendesk (script comentado) | OBSERVADO |
| Bundles | Bundler (Nice Team) v2.0 | OBSERVADO |
| Formularios | HulkApps Form Builder | OBSERVADO |
| Social | Social Widget (extensión Shopify) | OBSERVADO |
| SEO | Smart SEO (`smart-seo-integrated: true`) | OBSERVADO |
| Analítica | Shopify Trekkie/Monorail/Web Pixels; GA4 `G-…` + GTM `GT-…`; Google Ads `AW-…` | OBSERVADO |
| Consentimiento cookies | VersionBear cookie_consent | OBSERVADO |
| Widgets varios | Common Ninja (widget no identificado) | OBSERVADO (carga) |
| Geolocalización | Script propio con ipify/ipstack/ipwhois/ipapi; redirección MX→US | OBSERVADO |
| Agentic | `/agents.md` 200 + `/.well-known/ucp` UCP 2026-08-25 + MCP `…/api/ucp/mcp` + WebMCP en páginas + Shop skill | OBSERVADO |
| UCP `payment_handlers` | `{}` (vacío) | OBSERVADO |
| Seguridad transporte | HSTS, CSP, X-Frame-Options DENY, nosniff | OBSERVADO |

---

## 9. Lista de inferidos

1. **No es headless** (confianza alta): tema Liquid clásico; sin marcadores de Hydrogen/Next.js/Remix en el HTML.
2. **MX y US son storefronts/temas separados** (confianza media-alta): IDs de tema y de caché distintos.
3. **Shopify hospeda el origen en GCP con Cloudflare por delante** (confianza alta): `x-dc: gcp-*` + `Server: cloudflare`.
4. **Zendesk en desuso, reemplazado por Salesforce** (confianza media): snippet Zendesk comentado en el HTML; Salesforce Embedded Messaging activo.
5. **Botones de pago acelerado disponibles vía billeteras de Shopify** (confianza media): `PaymentButton`/`portable-wallets` activos; sin confirmación de qué billeteras se muestran en el checkout.
6. **Umbral MSI $10,000 genérico vs $15,000 promo Buen Fin** (confianza media): ambos valores observados; el aplicable en checkout no se comprobó.
7. **Wishlist Plus, pre-order, Customify y Stackable Discounts como apps activas** (confianza media-alta para wishlist/pre-order; media para las otras dos): inferido de clases del body y tags de producto, sin bloque de app explícito en cada caso.
8. **El perfil UCP es la plantilla estándar de Shopify** (confianza alta): estructura y textos coinciden con la documentación de Shopify para agentes.
9. **Venta en línea MX solo con envío** (confianza media): sin mención de pago/recogida en tienda y UCP fulfillment solo `shipping`.
10. **La diferencia de 1 entre sitemap (388) y `meta.json` (387)** es desfase de caché o producto no publicado (confianza media; no se verificó producto por producto).

## 10. Lista de no verificados

1. Plan de Shopify (Basic/Shopify/Advanced/Plus) y si hay Shopify Plus.
2. Pasarela de tarjetas detrás del checkout (Shopify Payments / Stripe / Conekta / Openpay / Mercado Pago / otra).
3. Bancos participantes en MSI; qué tarjetas aplican a 3/6/9/12/18 meses.
4. Si Shop Pay, Apple Pay y Google Pay aparecen efectivamente en el checkout (en home no hay texto literal "Shop Pay"/"Apple Pay").
5. OXXO, SPEI, Mercado Pago, BNPL (Klarna/Afterpay) o pago contra entrega en el checkout.
6. Qué método de pago aplica en el checkout real para MSI ($10,000 vs $15,000) y si el umbral de envío gratis es el mismo en checkout.
7. Meta Pixel: ausente en el HTML de la home, pero no descartado vía GTM/Web Pixels Manager.
8. Sistema de reseñas: qué app o función usa (Judge.me/Stamped/Yotpo/Loox descartados por ausencia en el HTML; `s-revie` sin identificar).
9. Qué widget muestra Common Ninja.
10. Storefront API GraphQL pública: token presente en el HTML pero no usado ni comprobado en este frente.
11. Que el endpoint MCP responda a `tools/list` o ejecute compras (no se llamó).
12. Back-office: ERP, inventario, facturación/CFDI, paqueterías contratadas, webhooks.
13. DNS autoritativo/registrador y rendimiento (Core Web Vitals, tiempos de carga).
14. Versión del core de Shopify (SaaS; no publicable).
15. Si el checkout de US (`us.tane.com`) tiene los mismos métodos de pago que MX (no se investigó US más allá de cabeceras).

## 11. Hipótesis (marcadas, para otros frentes o verificación futura)

- **HIPÓTESIS —** Por volumen, multi-mercado y madurez de integraciones, el plan es probablemente Shopify Plus o Advanced. No hay evidencia pública; no usar como hecho.
- **HIPÓTESIS —** La pasarela de tarjetas es probablemente Shopify Payments (estándar en tiendas Shopify MX con PayPal activo) o Stripe como procesador detrás; sin evidencia en el código público.
- **HIPÓTESIS —** El script de geolocalización con cuatro proveedores (ipify/ipstack/ipwhois/ipapi) es código heredado del tema ("ATOMS") con proveedores de respaldo, no una integración activa con los cuatro a la vez.

---

## 12. Fuentes

Todas consultadas el 13 nov 2026, 13:49–13:51 CST (19:49–19:51 GMT), por lectura pública directa (curl / descarga de HTML crudo):

1. `https://tane.mx/` — cabeceras (301 a `mx.tane.com`, `powered-by: Shopify`, `link: </.well-known/ucp>`).
2. `https://mx.tane.com/` — cabeceras (200, Cloudflare, `x-dc: gcp-us-east1`, `content-language: es-MX`) y HTML crudo (1,809,080 caracteres; `Shopify.theme`, scripts, apps, pagos, MSI, terceros).
3. `https://mx.tane.com/robots.txt` — `# Shopify storefront`, agentes, UCP, disallows.
4. `https://mx.tane.com/sitemap.xml` — índice (6 sitemaps, incluido `sitemap_agentic_discovery.xml`).
5. `https://mx.tane.com/sitemap_products_1.xml?from=4744631779437&to=15278733558123` — 388 URLs.
6. `https://mx.tane.com/sitemap_pages_1.xml?from=51473645677&to=717630112107` — 134 URLs.
7. `https://mx.tane.com/sitemap_collections_1.xml?from=180365688941&to=656157311339` — 188 URLs.
8. `https://mx.tane.com/sitemap_blogs_1.xml` — 4 URLs; `https://mx.tane.com/sitemap_articles_1.xml` — 1 URL.
9. `https://mx.tane.com/sitemap_agentic_discovery.xml` — solo `/agents.md`.
10. `https://mx.tane.com/agents.md` (y `https://tane.mx/agents.md`) — 200, 5,761 bytes.
11. `https://mx.tane.com/.well-known/ucp` (y `https://tane.mx/.well-known/ucp`) — 200, JSON UCP 2026-08-25.
12. `https://mx.tane.com/products.json?limit=5` — 200.
13. `https://mx.tane.com/collections.json?limit=5` — 200.
14. `https://mx.tane.com/meta.json` — 200 (387 productos, 188 colecciones, `ships_to: MX`).
15. `https://mx.tane.com/search/suggest.json?q=aretes` — 200.
16. `https://mx.tane.com/pages/terminos-y-condiciones-promociones` — 200 (MSI hasta 18, mínimo $15,000, 09–19 nov 2026, CAT 0.0%).
17. `https://mx.tane.com/checkout` — cabeceras (302 a `/checkouts/cn/…/es-mx`, sin carrito).
18. `https://us.tane.com/` — cabeceras (200, tema `t/31`, UCP activo).
19. `https://mx.tane.com/policies/shipping-policy` — lectura parcial de texto (menciones de PayPal y MSI; detalle de envíos fuera de este frente).

Contexto secundario (no usado como evidencia del stack): nota de prensa 2020 sobre la e-boutique de TANE (Gourmet de México) y perfil de la marca (The Point, 2022) — solo confirman que la tienda en línea existe desde 2019/2020; la plataforma actual se verificó en vivo, no por estas notas.

## 13. Límites de esta investigación

- **Sin 429 ni expiraciones:** ninguna lectura de este frente devolvió 429 ni expiró; no hubo reintentos por límite de tasa. La única lectura fallida fue un intento de `/search/suggest.json` con la URL sin codificar (error de sintaxis de curl, no del servidor); se repitió con la URL codificada y respondió 200.
- **No se tocó el checkout con carrito** (por regla de la WO y por `robots.txt`, que desautoriza `/checkout`, `/cart.js` y superficies AJAX): todo lo de pago en checkout es lo visible en home/términos/UCP, no lo comprobado en el flujo de pago.
- **No se llamó al endpoint MCP** (`/api/ucp/mcp`): solo se leyó su anuncio en el perfil UCP.
- **El HTML es una foto fija** de la home del 13 nov 2026 a las ~13:50 CST; temas, apps y promociones (Buen Fin) cambian; los umbrales de MSI y envío gratis son los de esa fecha.
- **Claves y tokens visibles en el código no se reproducen** en este informe (clave de un servicio de geolocalización por IP, token del bloque `shopify-features`, clave del snippet Zendesk comentado, token de sesión del redirect de checkout). Se consigna su existencia como hallazgo de higiene, sin valores.
- **No se extrajeron datos personales** de ningún tipo; los únicos identificadores citados son públicos y técnicos (shop ID, IDs de tema y de medición de analítica, nombres de apps).
- **DNS/WHOIS no verificado** en este frente (ver §10.13).
