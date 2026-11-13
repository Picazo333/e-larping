# F2 — Back end + stack · Charly (charly.com)

- **Sitio:** Charly — calzado y ropa deportiva mexicana — https://www.charly.com/
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F2 (back end + stack), Fase 2 de la WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de páginas con `browser.open` (home, `robots.txt`) y descarga pública de la home, de una ficha de producto y de `/checkout/` para exponer cabeceras HTTP y el HTML crudo (scripts y dominios de terceros que el extractor de texto no muestra), más consultas de solo lectura al endpoint público `/graphql` (una devolvió `storeConfig`; dos consultas de catálogo expiraron sin respuesta, ver §4). Sin inicio de sesión, sin compra, sin añadir productos al carrito, sin contacto con la tienda.
- **Convención usada en todo el informe:** **OBSERVADO** = visto directamente en una fuente pública citada · **INFERIDO** = conclusión razonada a partir de evidencia observada, con confianza alta/media/baja · **HIPÓTESIS** = derivada de la evidencia, marcada como tal, sin confirmación · **NO VERIFICADO** = sin evidencia pública suficiente; no se afirma.

## Veredicto sobre la pista previa

**Pista a re-verificar:** «es una marca grande: es probable que NO sea Shopify; no asumas plataforma, verifícala».

- **Shopify: DESCARTADO (OBSERVADO por ausencia + evidencia positiva de otra plataforma).** No hay ningún marcador de Shopify en ninguna fuente consultada: ni `myshopify.com`, ni `powered-by: Shopify`, ni `products.json`, ni `cdn.shopify.com`, ni mención de «shopify» en el HTML de la home, en la ficha de producto ni en el bundle principal del front-end (`client.js`, 1,5 MB revisado). El `robots.txt` no es el de Shopify.
- **Magento / Adobe Commerce: CONFIRMADO (OBSERVADO).** El `robots.txt` abre con `#Magento theme robots.txt` y bloquea rutas clásicas de Magento (`/index.php/`, `/checkout/`, `/app/`, `/lib/`, `/*.php$`, `/catalog/`, `/customer/`, `/sendfriend/`, `/review/`, `/*SID=`). El endpoint `/graphql` responde como Magento (GET sin consulta → `500` JSON con cabecera `X-Magento-Cache-Id` y cookie `PHPSESSID`; POST con `storeConfig` → `200` con `store_name: "Charly México"`). El front-end es la PWA de Magento: rutas `/venia-static/`, banner de versión `pwa-studio: 13.3.0, @magento/venia-ui: ~10.3.0`.
- **Qué edición de Magento: INFERIDO Adobe Commerce (de pago) en la nube, confianza alta (ver §3.1).** No es observable directamente desde fuera; la inferencia se apoya en el stack completo (Platform.sh + Fastly + New Relic + Live Search + Product Recommendations + Adobe Launch), que es el de Adobe Commerce Cloud.

## 1. Tabla de componentes

| Componente | Evidencia | Confianza | Estado |
|---|---|---|---|
| Plataforma de e-commerce: Magento (Adobe Commerce) | `robots.txt` L9 «#Magento theme robots.txt»; `/graphql` con `X-Magento-Cache-Id` y `PHPSESSID`; POST `storeConfig` → `store_name: "Charly México"`; sin ningún marcador de Shopify en ninguna fuente | Alta | OBSERVADO |
| Edición: Adobe Commerce (de pago) en la nube, no Magento Open Source | Cabeceras Platform.sh + Fastly + New Relic (incluidos en Commerce Cloud); CSP con Live Search (`*.magento-datasolutions.com`) y Product Recommendations (`magento-recs-sdk.adobe.net`), servicios exclusivos de la edición de pago | Alta (como conjunto); la edición exacta no es observable directamente | INFERIDO |
| Versión del core Magento / Adobe Commerce | No expuesta en ninguna fuente pública consultada | — | NO VERIFICADO |
| Front-end: PWA Studio (Venia) 13.3.0, personalizado | Banner del bundle: `pwa-studio: 13.3.0, @magento/venia-ui: ~10.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.2.1, @magento/pagebuilder: ~8.2.1, @apollo/client: ~3.5.0`; rutas `/venia-static/`; `manifest.json` PWA «Charly» | Alta | OBSERVADO |
| Tema clásico de Magento (Luma) | Cero menciones de `requirejs`, `mage/`, `static/version`, `customer-data` en la home; el front es 100 % PWA | Alta (ausencia en el HTML inicial) | OBSERVADO (ausencia) |
| Hosting / origen: Platform.sh | Cabeceras `x-platform-server: i-e537556aeb1f2c8b` (×2), `x-debug-info: eyJyZXRyaWVzIjowfQ==` (`{"retries":0}`), `traceresponse` | Alta (como indicador de origen) | OBSERVADO (cabecera) / INFERIDO (que sea Adobe Commerce Cloud) |
| Borde CDN: Fastly | `X-Served-By: cache-sjc1000094-SJC` (home) y `cache-ewr-kewr1740042-EWR` (`/graphql`), `X-Cache: MISS`, `X-Timer: S…VS0,VE…` | Alta (tráfico por Fastly) | OBSERVADO |
| Cloudflare | Ningún marcador (`CF-RAY`, `Server: cloudflare`) en las dos muestras de cabeceras | Alta (ausencia en las muestras) | OBSERVADO (ausencia) |
| CDN de assets | Los bundles JS se sirven desde el propio dominio (`/client.…js`, `/RootCmp_….js`); imágenes con `data-media-backend="https://www.charly.com/media/"`; `*.cloudfront.net` y `*.cloudflare.com` autorizados en la CSP (img-src) sin uso observado en el HTML inicial | Media | OBSERVADO (parcial) |
| API pública de catálogo (GraphQL) | `POST /graphql` con `{ storeConfig { store_name } }` → `200 {"data":{"storeConfig":{"store_name":"Charly México"}}}` (7 s); endpoint relativo `/graphql` en el bundle (Apollo Client 3.5.0); la PWA carga todo el catálogo por GraphQL | Alta (el endpoint existe y responde) | OBSERVADO (endpoint + storeConfig) |
| Consulta `products` por GraphQL | Dos intentos POST (30 s y 60 s) expiraron sin bytes; la consulta `storeConfig` sola sí respondió en 7 s | — | NO VERIFICADO (endpoint lento o consulta pesada; no es un 404) |
| Checkout | `GET /checkout/` → `200` con el mismo shell PWA (sin redirección a dominio externo); `INLINED_PAGE_TYPE` vacío; el interior se renderiza en cliente | Alta (la ruta responde en el mismo dominio) | OBSERVADO (la ruta; el interior no se recorrió) |
| Pago con tarjeta (Braintree Hosted Fields) | Bundle: `code: "braintree"` con `payment_method_nonce`, `HostedFieldsConfig` en los tipos GraphQL; CSP: `*.braintreegateway.com` (script, frame, connect) | Alta (el método existe en el front) | OBSERVADO (código) / INFERIDO (tarjetas vía Braintree) |
| PayPal Express | Bundle: `code: "paypal_express"` con `payer_id`; retorno `/paypal/express/returnaction/`; CSP: `*.paypal.com`, `*.paypalobjects.com` | Alta | OBSERVADO |
| PayPal Smart Payment Buttons | Bundle: `code: "paypalspb"`; `SmartButtonsConfig` en los tipos GraphQL | Alta | OBSERVADO |
| Apple Pay / Google Pay | Tipos GraphQL `ApplePayConfig`, `GooglePayConfig` en el bundle (configuración de pagos de Braintree) | Media (tipos presentes; no se vio el botón en pantalla) | OBSERVADO (tipos) / NO VERIFICADO (ofrecimiento en checkout real) |
| PayPal Fastlane (checkout acelerado) | Tipo GraphQL `FastlaneConfig` en el bundle | Media-baja | OBSERVADO (tipo) / NO VERIFICADO (activo en checkout) |
| Mercado Pago / Conekta / Openpay / Stripe directo / Kueski / Aplazo / OXXO / SPEI | Cero menciones en el HTML de la home, en la ficha y en el bundle `client.js`; las 43 menciones de «clip» son CSS (`clip-path`, `clip: rect(…)`) | Alta (ausencia en el front) | NO VERIFICADO (como integración; no hay evidencia de ellos) |
| Marcas de tarjeta aceptadas / MSI / adquirente | Sin lista de marcas en el bundle (`visa`, `mastercard`, `amex`: 0 menciones); el MSI es copy comercial, sin evidencia técnica observada | — | NO VERIFICADO |
| Comercio agéntico: UCP / MCP | `/.well-known/ucp` y `/agents.md`: la lectura expiró (timeout) y no se reintentó; cero menciones de `well-known`, `agents.md`, `ucp`, `mcp` o `agentic` en home, ficha y bundle | — | NO VERIFICADO (el timeout no prueba ausencia ni existencia) |
| Búsqueda: Adobe Live Search | CSP autoriza `*.magento-datasolutions.com`, `*.magento-ds.com`, `search-admin-ui.magento-ds.com`, `plp-widgets-ui.magento.ds.com`, `js.magento-datasolutions.com` | Media-alta | OBSERVADO (dominios en CSP) / INFERIDO (Live Search activo) |
| Recomendaciones de producto (Adobe Sensei) | Componente `product_recommendations` en el bundle; CSP: `magento-recs-sdk.adobe.net` | Media-alta | OBSERVADO (componente + dominio) / INFERIDO (servicio activo) |
| Email / marketing: Klaviyo | `<script src="https://static.klaviyo.com/onsite/js/TVBK5w/klaviyo.js">` (home y ficha) | Alta | OBSERVADO |
| Analítica: Adobe Launch (Tags/DTM) | `<script src="https://assets.adobedtm.com/1735299bb499/c9275710b8ae/launch-85cf71e759d2-staging.min.js">` — primero en el `<head>`; CSP: `*.adobedtm.com`, `*.adobe.com`, `*.adobe.io` | Alta (el script existe) | OBSERVADO |
| Analítica: Adobe Experience Cloud / Audience Manager | CSP: `amcglobal.sc.omtrdc.net`, `dpm.demdex.net`, `fast.amc.demdex.net`, `commerce.adobe.net`, `api.magento.com`, `telemetry.adobe.io` | Media (dominios observados; la herramienta exacta no) | OBSERVADO (dominios) |
| Google Analytics 4 / Google Ads / GTM | Sin IDs en el HTML inicial; CSP autoriza `*.googletagmanager.com`, `*.google-analytics.com`, `*.doubleclick.net`, `*.analytics.google.com` (las etiquetas se cargan vía Adobe Launch) | Media-baja | OBSERVADO (CSP) / NO VERIFICADO (IDs de GA4/Ads/GTM) |
| Meta Pixel / Conversions API | Sin ID de píxel en el HTML inicial; CSP autoriza `facebook.com`, `*.facebook.com`, `connect.facebook.net` y `demo-1.conversionsapigateway.com` | Media-baja | OBSERVADO (CSP) / NO VERIFICADO (ID de píxel) |
| TikTok / Pinterest / Spotify / YouTube / Vimeo | CSP autoriza `tiktok.com`, `*.tiktok.com`, `analytics-ipv6.tiktokw.us`, `pinimg.com`, `ct.pinterest.com`, `*.pinterest.com`, `byspotify.com`, `*.byspotify.com`, `spotify.com`, `*.vimeocdn.com`, `vimeo.com`, `*.youtube.com` | Media (solo dominios CSP; sin píxeles observados en el HTML) | OBSERVADO (CSP) |
| APM / RUM: New Relic | Agente de navegador NREUM en el HTML (`applicationID: 1044320521`, `accountID: 4347296`, beacon `bam.nr-data.net`); CSP: `*.newrelic.com`, `*.nr-data.net` | Alta | OBSERVADO |
| Errores: Sentry | CSP autoriza `*.sentry-cdn.com` y `*.sentry.io` (sin script de Sentry en el HTML inicial; se cargaría vía Launch) | Media | OBSERVADO (CSP) |
| Seguridad anti-fraude / device fingerprint: ThreatMetrix | CSP: `https://h64.online-metrix.net` (script-src) | Media (dominio observado; el uso concreto no) | OBSERVADO (dominio) / INFERIDO (fingerprinting anti-fraude, típico con Braintree/PayPal) |
| Seguridad: Sansec (detección de Magecart) | CSP: `report_uri https://5fe7c116-36c5-41f5-b861-bc20b8976b0b.sansec.watch/` y `Report-To` al mismo endpoint | Alta | OBSERVADO |
| reCAPTCHA | CSP autoriza `https://www.google.com/recaptcha/` y `https://www.gstatic.com/recaptcha/` | Media | OBSERVADO (CSP) |
| Mapas / localizador de tiendas: Google Maps | `<script src="https://maps.googleapis.com/maps/api/js?libraries=places&region=MX&language=es">` (la clave va en la URL; no se reproduce en este informe) | Alta | OBSERVADO |
| Fuentes: Adobe Fonts (Typekit) | `use.typekit.net` en el HTML (fonts) y en la CSP | Media | OBSERVADO (dominio) |
| Reseñas | «(Sin reseñas)», «Añadir reseña» en la ficha (según índice de búsqueda); sin proveedor de reseñas observable en el HTML inicial | — | NO VERIFICADO (proveedor) |
| Multi-idioma / multi-mercado | `lang="es-MX"`; `store_name: "Charly México"`; sin otros locales observados | — | NO VERIFICADO |
| Logística / paquetería, ERP, inventario, almacén | No observable desde el exterior | — | NO VERIFICADO |
| Plan / versión del core Magento | No expuesto públicamente | — | NO VERIFICADO |

## 2. OBSERVADO — lo que se ve directamente

### 2.1. Plataforma: Magento (Adobe Commerce), sin ambigüedad

- `https://www.charly.com/robots.txt` (leído 13 nov 2026, 19:20 UTC) abre con `#Magento theme robots.txt` y declara:
  - `User-agent: Googlebot` / `Googlebot-image` con `Disallow:` vacío (rastreo total permitido a Google).
  - `User-agent: *` con `Disallow: /index.php/`, `/checkout/`, `/app/`, `/lib/`, `/*.php$`, `/pkginfo/`, `/report/`, `/var/`, `/catalog/`, `/customer/`, `/sendfriend/`, `/review/`, `/*SID=`.
  - `Sitemap: https://www.charly.com/media/sitemap/sitemap.xml` (el sitemap vive en `/media/sitemap/`, ruta típica de Magento).
- `GET https://www.charly.com/graphql` (13 nov 2026, 19:21 UTC) → `500 Internal Server Error`, `Content-Type: application/json`, cabecera `X-Magento-Cache-Id: 7b2faf6b…` y cookies de sesión PHP/Magento. Un GET sin consulta a GraphQL no es una operación válida en Magento; el 500 es el comportamiento esperado y confirma que el endpoint existe.
- `POST https://www.charly.com/graphql` con `{ storeConfig { store_name } }` → `200` en ~7 s: `{"data":{"storeConfig":{"store_name":"Charly México"}}}`.
- El HTML de la home **no** contiene la cadena «Magento» (0 menciones) ni marcadores del tema clásico (`requirejs`, `mage/`, `static/version`, `customer-data`: 0). La plataforma se evidencia por `robots.txt`, `/graphql` y el front-end PWA, no por el HTML.
- Cero evidencia de Shopify en todas las fuentes revisadas (ver veredicto).

### 2.2. Cabeceras HTTP de la home (13 nov 2026, 19:21:08 GMT)

```
HTTP/1.1 200 OK
Strict-Transport-Security: max-age=31557600
Vary: Accept-Encoding,Cookie
content-type: text/html;charset=UTF-8
x-platform-server: i-e537556aeb1f2c8b
x-platform-server: i-e537556aeb1f2c8b
traceresponse: 00-18e7b11254a09b8b7f96114c10289133-28ed4b909bc5c406-01
cache-control: s-maxage=60
x-frame-options: SAMEORIGIN
x-debug-info: eyJyZXRyaWVzIjowfQ==
x-content-type-options: nosniff
pragma: no-cache
x-xss-protection: 1; mode=block
accept-ranges: bytes
expires: Thu, 19 Nov 1981 08:52:00 GMT
X-Served-By: cache-sjc1000094-SJC, cache-sjc1000094-SJC, cache-sjc1000094-SJC
X-Cache: MISS, MISS
X-Cache-Hits: 0, 0
X-Timer: S1794597669.668964,VS0,VE287
Content-Length: 15845
```

- `x-platform-server: i-e537556aeb1f2c8b` es la cabecera del router de **Platform.sh** (el identificador `i-…` es el de la instancia/contenedor). `x-debug-info` decodifica a `{"retries":0}`. `expires: Thu, 19 Nov 1981` es la cabecera anti-caché clásica de PHP/sesión.
- `X-Served-By: cache-sjc1000094-SJC` + `X-Timer: …VS0,VE287` son cabeceras de **Fastly** (POP de San José, California, en esa petición). La petición a `/graphql` se sirvió desde otro POP (`cache-ewr-kewr1740042-EWR`, Newark); el POP varía por petición.
- `content-security-policy` (truncada aquí; texto íntegro en §2.5) y `report-to` a Sansec. No hay `CF-RAY` ni `Server: cloudflare`.

### 2.3. Tema y front-end propio: PWA Studio / Venia 13.3.0

- `<html lang="es-MX" data-image-optimizing-origin="backend" data-media-backend="https://www.charly.com/media/">`.
- Banner de versión al inicio del bundle principal (`client.f57cef437db327dfaad0.js`, 1,5 MB):
  `/*! @version pwa-studio: 13.3.0, @magento/venia-ui: ~10.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~13.2.1, @magento/pagebuilder: ~8.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */`
- Archivos estáticos de Venia en el HTML: `/venia-static/favicon.ico`, `/venia-static/icons/icon_square2_57.png`, `/venia-static/icons/charly-apple-touch-icon.png`, `/venia-static/veniaClosed.png` (imagen del mensaje «JavaScript is disabled»).
- PWA: `/manifest.json` → `200 application/json`: `{ "name": "Charly", "short_name": "Charly", "start_url": "/", "theme_color": "#E75F00", "display": "standalone", "background_color": "#FFFFFF", "description": "Charly", … }` (iconos 144/192/512 + maskable 512). El `<meta name="theme-color">` del HTML es `#ff6334` (distinto del `#E75F00` del manifest; ambos observados). `/service-worker.js` → `404`.
- Bundles con code-splitting por ruta (hash en el nombre): `/runtime.5d7a217d9dca3f7921e0.js`, `/vendors.3eff5d9607106ebef1a7.js`, `/client.f57cef437db327dfaad0.js`, home: `/RootCmp_CMS_PAGE__default.4f04f03d0e182c2bb119.js` + `/vendors~RootCmp_CMS_PAGE__default.5f70455cd5df0e6473c1.js`; ficha: `/RootCmp_PRODUCT__default.f577c11ae72556cb6ffe.js` + `/vendors~RootCmp_PRODUCT__default.493199190c05ee104031.js`.
- `INLINED_PAGE_TYPE` (dato que el servidor incrusta para el router de la PWA): home → `{"identifier":"home","redirect_code":0,"relative_url":"home","type":"CMS_PAGE"}`; ficha → `{"__typename":"ConfigurableProduct","id":"995167","redirect_code":0,"relative_url":"1087605001-tenis-charly-quest-2-0-sport-running-trail-color-negro-para-hombre",…}` (el ID interno de Magento de ese producto es `995167`); checkout → `INLINED_PAGE_TYPE` vacío (ruta solo-cliente).
- La home y la ficha son shells casi vacíos (97 KB y 92 KB): el contenido (productos, precios, promos) se carga en cliente vía GraphQL. El texto de la home (vía lector de páginas, rastreo 15:00 UTC) muestra categorías HOMBRE / MUJER / FÚTBOL / KIDS y productos con precio en MXN (p. ej. Chamarra Charly Winter $1,099.00 MXN).

### 2.4. Pagos — lo que declara el bundle del front-end

En `client.js` (tipos y mutaciones GraphQL de la PWA):

- `braintree`: `payment_method: { code: "braintree", braintree: { payment_method_nonce: $paymentNonce, is_active_payment_token_enabler: false } }` + CSS de hosted fields (`.braintree-sheet__content--form`, `.braintree-form__hosted-field`).
- `paypal_express`: `payment_method: { code: "paypal_express", paypal_express: { payer_id: … } }`; retorno a `/paypal/express/returnaction/?SignIn=true…`.
- `paypalspb`: `payment_method: { code: "paypalspb", paypalspb: { … } }` (Smart Payment Buttons).
- Tipos de configuración de pago en el esquema Apollo del bundle: `PaymentConfigItem: ["PaymentCommonConfig","HostedFieldsConfig","SmartButtonsConfig","ApplePayConfig","GooglePayConfig","FastlaneConfig"]` — los 6 son los de la integración Braintree/PayPal para Magento.
- CSP (misma en home y checkout): `script-src`/`frame-src`/`connect-src` autorizan `*.braintreegateway.com`, `*.paypal.com`, `*.paypalobjects.com` y `https://h64.online-metrix.net` (ThreatMetrix).
- Sin menciones de `mercadopago`, `conekta`, `openpay`, `stripe`, `kueski`, `aplazo`, `oxxo`, `spei`, `checkmo`, `banktransfer` ni `cashondelivery` en el bundle. Las menciones de «clip» son CSS, no Clip (pagos).

### 2.5. Terceros visibles (HTML inicial + CSP)

La CSP de la home es la fuente más completa de terceros (los píxeles de marketing no van directos en el HTML: se sirven vía Adobe Launch):

- **Adobe Launch (Tags):** `https://assets.adobedtm.com/1735299bb499/c9275710b8ae/launch-85cf71e759d2-staging.min.js` — primer script del `<head>`. Nótese el `-staging` del nombre de archivo: la librería cargada en producción se llama «staging» (OBSERVADO el nombre; si es el entorno staging o solo el nombre del build, NO VERIFICADO).
- **Adobe Commerce / Experience Cloud:** `*.adobe.com`, `*.adobe.io`, `*.adobedtm.com`, `commerce.adobe.net`, `api.magento.com`, `telemetry.adobe.io`, `amcglobal.sc.omtrdc.net`, `dpm.demdex.net`, `fast.amc.demdex.net` (Demdex = Audience Manager), `magento-recs-sdk.adobe.net`, `*.magento-datasolutions.com`, `*.magento-ds.com`, `search-admin-ui.magento-ds.com`, `plp-widgets-ui.magento.ds.com`, `js.magento-datasolutions.com`.
- **Klaviyo:** `https://static.klaviyo.com/onsite/js/TVBK5w/klaviyo.js` (en home y ficha) + `*.klaviyo.com` en la CSP.
- **New Relic:** agente de navegador NREUM (`agentID 1120275751`, `accountID 4347296`, `applicationID 1044320521`, beacon `bam.nr-data.net`, `transactionName` cifrado) + `*.newrelic.com`, `*.nr-data.net` en la CSP. (La `licenseKey` del agente no se reproduce en este informe.)
- **Sentry:** `*.sentry-cdn.com`, `*.sentry.io` en la CSP (sin script directo en el HTML inicial).
- **Sansec:** `report_uri https://5fe7c116-36c5-41f5-b861-bc20b8976b0b.sansec.watch/` (CSP `report-uri` y cabecera `Report-To`).
- **Google:** `*.googletagmanager.com`, `*.google-analytics.com`, `*.doubleclick.net`, `*.analytics.google.com` (CSP; sin IDs de GA4/Ads/GTM en el HTML inicial), reCAPTCHA (`google.com/recaptcha`, `gstatic.com/recaptcha`), Google Maps JS API (`libraries=places&region=MX&language=es`; la clave de API va en la URL y no se reproduce).
- **Meta:** `facebook.com`, `*.facebook.com`, `connect.facebook.net`, `*.facebook.net` + `demo-1.conversionsapigateway.com` (CSP `connect-src`).
- **TikTok / Pinterest / Spotify / vídeo:** `tiktok.com`, `*.tiktok.com`, `analytics-ipv6.tiktokw.us`, `pinimg.com`, `ct.pinterest.com`, `*.pinterest.com`, `byspotify.com`, `*.byspotify.com`, `spotify.com`, `*.vimeocdn.com`, `vimeo.com`, `*.youtube.com`, `*.youtu.be`, `*.youtube-nocookie.com`.
- **Fuentes:** `use.typekit.net` (Adobe Fonts) en el HTML y la CSP; `fonts.googleapis.com`, `fonts.gstatic.com`, `cdnfonts.com`.
- **Sin atribuir (en la CSP, proveedor NO VERIFICADO):** `global-cache.online`, `infird.com`, `*.snplow.net`, `freeipapi.com`, `*.aws`, `flagcdn.com`, `com.mxmedia`, `bzr.openai.com`, `bzrcdn.openai.com/pixel-config`.
- **Dominio relacionado en la CSP (`img-src`):** `wolfcharly.com`, `mcstaging.wolfcharly.com` (staging de Wolf Charly; relación entre marcas NO VERIFICADA).

### 2.6. Señales de catálogo y locales

- URLs de producto con el patrón `/{ITEM #}-{slug}` (sin `/products/` ni `.html`): `https://www.charly.com/1087605001-tenis-charly-quest-2-0-sport-running-trail-color-negro-para-hombre` (ITEM # `1087605001`; según el índice de búsqueda: Tenis Charly Quest 2.0 Sport Running Trail, $1,049.00 MXN, precio Buen Fin $734.30 MXN, `InStock`). Otra: `https://www.charly.com/1038231001-tenis-charly-luno-dia-de-muertos-moda-skurban-color-blanco-negro-para-hombre` (ITEM # `1038231001`, $1,099.00 MXN).
- **JSON-LD Product: matiz importante.** En el HTML crudo inicial de la ficha **no hay** ningún bloque `application/ld+json` (0 menciones de `@type`/`offers`). El índice de búsqueda sí extrae de esa misma ficha `Product.offers` con precio 1,049 MXN e `InStock`. Es decir: el JSON-LD existe en la página renderizada, pero se inyecta en cliente (la PWA lo añade al montar el componente de producto), no viene en el HTML del servidor. La premisa «fichas con JSON-LD Product» queda confirmada vía índice de búsqueda y matizada en su mecanismo.
- Sitemap declarado en `robots.txt`: `https://www.charly.com/media/sitemap/sitemap.xml` (contenido NO VERIFICADO: la lectura devolvió 429, ver §7).
- Idioma único observado: `es-MX`. Sin evidencia de otros locales o tiendas en las fuentes consultadas.

## 3. INFERIDO — con su evidencia y confianza

1. **Es Adobe Commerce (edición de pago) sobre Adobe Commerce Cloud (confianza: alta).** La combinación Platform.sh (`x-platform-server`) + Fastly (`X-Served-By`) + New Relic APM/RUM es exactamente la infraestructura que Adobe vende como Commerce Cloud, y Live Search + Product Recommendations (dominios `magento-datasolutions` y `magento-recs-sdk` en la CSP, componente `product_recommendations` en el bundle) son servicios exclusivos de la edición de pago, no disponibles en Magento Open Source. La documentación pública de Adobe confirma que Commerce en la nube se aprovisiona sobre esa pila (PHP/MySQL/Redis/RabbitMQ + Fastly + New Relic). Queda como inferencia —no hecho observado— porque ningún encabezado ni archivo declara la edición ni la versión del core.
2. **El tráfico pasa por Fastly como CDN/WAF y el origen está en Platform.sh (confianza: alta para el borde; alta para el origen).** `X-Served-By`/`X-Timer` prueban Fastly; `x-platform-server` prueba Platform.sh. A diferencia de F4T3, aquí no hay ambigüedad Orange-to-Orange: Platform.sh es el origen, no un proxy del comerciante.
3. **Braintree es el procesador de tarjetas y PayPal el medio alternativo (confianza: alta para la presencia; media para el adquirente final).** Los códigos `braintree`, `paypal_express` y `paypalspb` son los de la integración oficial Braintree para Magento; `HostedFieldsConfig` es el cobro de tarjeta con campos alojados (la tarjeta nunca toca el servidor de Charly). Quién liquida en México (adquirente detrás de Braintree) no se observa; tampoco las marcas de tarjeta ni los MSI.
4. **Klaviyo es su herramienta de email marketing (confianza: alta).** El script onsite con `company_id=TVBK5w` es el marcador estándar de Klaviyo; no se observó ningún otro ESP.
5. **Google Analytics/Ads/GTM, Meta Pixel (+ CAPI) y TikTok/Pinterest se sirven vía Adobe Launch, no con scripts directos (confianza: media-alta).** Ningún ID de GA4, Ads, GTM ni píxel de Meta aparece en el HTML inicial, pero todos sus dominios están autorizados en la CSP y Adobe Launch es el primer script del `<head>` — el patrón estándar es gestionar todas las etiquetas desde Launch. El subdominio `demo-1.conversionsapigateway.com` sugiere además un gateway de Conversions API de Meta (confianza: media).
6. **Adobe Live Search y Product Recommendations están activos (confianza: media-alta).** Los dominios de Live Search y el SDK de recomendaciones están en la CSP y el componente `product_recommendations` existe en el bundle de la PWA; la confirmación visual (resultados de búsqueda con facetas de Live Search) no se hizo.
7. **La librería de Adobe Launch cargada se llama «staging» (confianza: alta en el nombre; HIPÓTESIS en el significado).** HIPÓTESIS: o bien el entorno de producción carga por error/descuido la librería de staging de Launch, o bien el nombre es solo el del build. No se puede distinguir desde fuera; queda marcado para que el frente de analítica lo contraste.
8. **ThreatMetrix (`online-metrix.net`) hace fingerprinting de dispositivo anti-fraude en el checkout (confianza: media).** Es el servicio de LexisNexis que Braintree/PayPal usan para evaluar riesgo; su dominio está autorizado en `script-src` y `connect-src`, pero no se observó la llamada en el HTML inicial.
9. **El storefront es Venia con personalización propia de Charly (confianza: alta).** El manifest, los iconos (`charly-apple-touch-icon.png`), el `theme_color #E75F00` y el `data-media-backend` propio conviven con los nombres de archivo estándar de Venia (`venia-static`, `RootCmp_*`); es Venia tematizado, no un front a medida desde cero.

## 4. NO VERIFICADO — lo que no se pudo establecer

- **Comercio agéntico (UCP / MCP / `agents.md`).** Las lecturas directas de `https://www.charly.com/agents.md` y `https://www.charly.com/.well-known/ucp` **expiraron (timeout) el 13 nov 2026 ~19:20 UTC y no se reintentaron**; el resultado es desconocido, no un 404. Tampoco hay ninguna mención de UCP/MCP/`agents.md` en la home, la ficha ni el bundle. No se puede afirmar ni que exista ni que no exista.
- **Contenido del sitemap** (`/media/sitemap/sitemap.xml`): la lectura devolvió **429** y no se reintentó. Solo se conoce su URL (declarada en `robots.txt`).
- **Consulta `products` por GraphQL:** dos POST expiraron (30 s y 60 s, 0 bytes). El endpoint existe (responde `storeConfig`), pero la consulta de catálogo no devolvió datos en esta investigación.
- **Versión del core Magento / Adobe Commerce** y edición exacta (Commerce vs Commerce Cloud Pro): no expuesta públicamente.
- **Pasarela exacta, adquirente en México, marcas de tarjeta aceptadas y esquema de MSI:** Braintree/PayPal son observados como códigos; el resto no.
- **Apple Pay / Google Pay / PayPal Fastlane en el checkout real:** los tipos de configuración existen en el bundle; no se vio el checkout con un pedido.
- **IDs de GA4 / Google Ads / GTM / Meta Pixel / TikTok / CAPI:** no están en el HTML inicial (viven en Adobe Launch, cuyo contenido no se descargó).
- **Proveedor de reseñas:** la ficha muestra «(Sin reseñas)» / «Añadir reseña» (según índice); el proveedor no es observable.
- **Logística:** paquetería, almacén, ERP, OMS o inventario. Los precios y la disponibilidad citados son datos del índice de búsqueda y de la home, no evidencia de back end.
- **Interior del checkout, post-compra y cuenta de cliente:** no se recorrieron (no se inició ninguna compra). `GET /checkout/` devolvió `200` con el shell PWA, sin token en la URL.
- **Subdominios y multi-tienda:** salvo `wolfcharly.com` / `mcstaging.wolfcharly.com` en la CSP, no se enumeraron subdominios; no hay evidencia de otras tiendas o locales.
- **Uptime, rendimiento, volumen de tráfico y métricas de negocio:** no medidos.
- **Proveedor de `bzr.openai.com`, `global-cache.online`, `infird.com`, `snplow.net`, `freeipapi.com`:** dominios en la CSP sin atribución posible desde las fuentes consultadas.

## 5. Flujo técnico observable de una compra (solo hasta donde llega la evidencia pública)

1. **Descubrimiento:** PDP en `/{ITEM #}-{slug}` (p. ej. `/1087605001-tenis-charly-quest-2-0-sport-running-trail-color-negro-para-hombre`); el servidor devuelve solo el shell PWA y el `INLINED_PAGE_TYPE` (`ConfigurableProduct`, id interno `995167`); el contenido se carga en cliente vía GraphQL (`/graphql`, Apollo Client). El JSON-LD `Product` se inyecta en cliente (no está en el HTML inicial). Existe descubrimiento por GraphQL público (`storeConfig` verificado; `products` sin respuesta en esta investigación).
2. **Carrito:** ruta PWA en el mismo dominio; la PWA gestiona el carrito por GraphQL (mutaciones de carrito en el bundle; `payment_method_nonce` de Braintree en el flujo de pago). El endpoint de carrito no se ejercitó.
3. **Checkout:** `/checkout/` responde `200` con el shell PWA en el mismo dominio (checkout de la PWA, no redirección externa). Métodos presentes en el código: tarjeta vía Braintree Hosted Fields, PayPal Express, PayPal Smart Buttons; Apple Pay / Google Pay / Fastlane como configuración.
4. **Pago:** procesador inferido Braintree (tarjetas) + PayPal; anti-fraude con ThreatMetrix (inferido). No se observó ningún otro medio de pago.
5. **Post-compra (confirmación, envío, seguimiento):** NO VERIFICADO. Solo se observó que el front es una PWA instalable (`manifest.json`, `display: standalone`) y que existe localizador de tiendas (Google Maps Places).

## 6. Fuentes consultadas

- https://www.charly.com/ (home — texto vía lector de páginas, rastreo 15:00 UTC; HTML crudo + cabeceras, descarga 13 nov 2026 19:21 UTC)
- https://www.charly.com/robots.txt (lectura 13 nov 2026, 19:20 UTC)
- https://www.charly.com/1087605001-tenis-charly-quest-2-0-sport-running-trail-color-negro-para-hombre (ficha de producto — HTML crudo, 13 nov 2026)
- https://www.charly.com/checkout/ (HTML crudo + cabeceras, 13 nov 2026)
- https://www.charly.com/manifest.json (13 nov 2026)
- https://www.charly.com/graphql (GET → 500; POST `storeConfig` → 200, 13 nov 2026; dos POST `products` expirados sin respuesta)
- https://www.charly.com/client.f57cef437db327dfaad0.js (bundle principal de la PWA, 1,5 MB, 13 nov 2026)
- https://www.charly.com/service-worker.js (→ 404, 13 nov 2026)
- https://www.charly.com/agents.md y https://www.charly.com/.well-known/ucp (lecturas expiradas por timeout, ~19:20 UTC, no reintentadas)
- https://www.charly.com/media/sitemap/sitemap.xml (lectura devolvió 429, no reintentada)
- Búsqueda web de contexto: «charly.com tenis Charly producto precio MXN» (para las URLs de ficha y el JSON-LD del índice) y «Charly charly.com Magento Adobe Commerce tienda en línea PWA» (solo documentación genérica de Adobe; ninguna afirmación del informe depende de esos resultados)

## 7. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo inspeccionar la pestaña de red ni el DOM renderizado; los scripts y terceros se dedujeron del HTML crudo, de las cabeceras y de la CSP. Un script cargado dinámicamente tras interacción del usuario (p. ej. al abrir el carrito o el checkout, o vía Adobe Launch) puede no estar en esta lista.
- **Sin compra ni carrito con productos:** el interior del checkout, los medios de pago efectivamente ofrecidos en pantalla y el post-compra no se observaron.
- **Sin acceso al admin ni a DNS concluyente:** edición y versión del core Magento, apps instaladas, configuración de pagos/envíos y subdominios quedan fuera de alcance.
- **Tres lecturas fallidas y NO reintentadas (por regla):** `agents.md` y `.well-known/ucp` expiraron por timeout; el sitemap devolvió 429. Su estado real es desconocido, no «ausente».
- **Dos consultas GraphQL de catálogo expiraron** (30 s y 60 s, 0 bytes) mientras `storeConfig` respondía en 7 s; el catálogo por GraphQL se infiere del funcionamiento de la PWA, no se demostró con una consulta `products` en esta investigación.
- **Instantánea temporal:** todo lo anterior corresponde al 13 nov 2026 (primer día del Buen Fin; precios de la ficha citados desde el índice de búsqueda). Los hashes de los bundles, la versión de PWA Studio y los terceros pueden cambiar sin aviso.
- **Claves no reproducidas:** la clave de la API de Google Maps (en la URL del script) y la `licenseKey` del agente de New Relic se observaron en el HTML pero no se copian en este informe.
