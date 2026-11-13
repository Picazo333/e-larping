# F2 — Back end + stack · F4T3 (f4t3.co)

- **Sitio:** FATE™ / F4T3 — tienda mexicana de moda/streetwear — https://www.f4t3.co/
- **Fecha de la investigación:** 13 nov 2026
- **Frente:** F1.2 (back end + stack), Fase 1 de la WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de páginas con `browser.open` (home, ficha de producto, `robots.txt`, `sitemap.xml`, `products.json`, `*.js`, `agents.md`, `.well-known/ucp`) y descarga pública de la home para exponer cabeceras HTTP y el HTML crudo (scripts y dominios de terceros que el extractor de texto no muestra). Sin inicio de sesión, sin compra, sin añadir productos al carrito, sin contacto con la tienda.
- **Convención usada en todo el informe:** **OBSERVADO** = visto directamente en una fuente pública citada · **INFERIDO** = conclusión razonada a partir de evidencia observada, con confianza alta/media/baja · **NO VERIFICADO** = sin evidencia pública suficiente; no se afirma.

## Veredicto sobre la pista previa

**Pista a re-verificar:** «el constructor del espacio observó la tienda como Shopify sobre Cloudflare».

- **Shopify: CONFIRMADO (OBSERVADO).** No es una inferencia: la propia tienda lo declara en `robots.txt` («# Shopify storefront») y en `agents.md` («This store is built on Shopify»), y la cabecera HTTP trae `powered-by: Shopify`.
- **«Sobre Cloudflare»: CONFIRMADO solo a nivel de borde, MATIZADO.** Las cabeceras observadas muestran borde Cloudflare (`Server: cloudflare`, `CF-RAY`, `Nel: cf-nel`, `Report-To: a.nel.cloudflare.com`). Lo que **no** se puede distinguir con estas cabeceras es si es (a) la infraestructura propia de Shopify —que corre sobre Cloudflare y Google Cloud— o (b) una zona Cloudflare propia del comerciante puesta como proxy delante de Shopify (Orange-to-Orange). Esa segunda lectura queda como **NO VERIFICADO**. Ver §3.

## 1. Tabla de componentes

| Componente | Evidencia | Confianza | Estado |
|---|---|---|---|
| Plataforma de e-commerce: Shopify | `robots.txt` L0 «# Shopify storefront»; `agents.md` L121 «This store is built on Shopify»; cabecera `powered-by: Shopify`; `shopId: 65410957555`; subdominio `f4t3-clo.myshopify.com` | Alta | OBSERVADO |
| ID de tienda Shopify | `65410957555` — repetido en `etag` (`page_cache:65410957555`), en el HTML (`shopId: 65410957555`), en `robots.txt` (`Disallow: /65410957555`), en `products.json` (`cdn.shopify.com/s/files/1/0654/1095/7555/`) y en el perfil UCP (`shop_id`, `gatewayMerchantId`) | Alta | OBSERVADO |
| Subdominio myshopify | `f4t3-clo.myshopify.com` — en `.well-known/ucp` (endpoints UCP/MCP) y en el HTML de la home | Alta | OBSERVADO |
| Hosting / origen | Cabecera `x-dc: gcp-us-west1` (origen en Google Cloud, US Oeste); `server-timing` con `pageType: index`, `theme: 190563057907` | Alta (como indicador de origen) | INFERIDO |
| Borde CDN / proxy: Cloudflare | Cabeceras `Server: cloudflare`, `CF-RAY: a5a010763cd5cf49-SJC` (home, 13 nov 2026 19:08 UTC), `cf-cache-status: DYNAMIC`, `Nel: {"report_to":"cf-nel",…}`, `Report-To: …a.nel.cloudflare.com…` | Alta (tráfico por borde Cloudflare) | OBSERVADO (borde) / INFERIDO (que sea infraestructura de Shopify) |
| Cloudflare propio del comerciante (proxy O2O delante de Shopify) | Ninguna cabecera observada distingue una zona Cloudflare del comerciante de la infraestructura Cloudflare de Shopify; no se pudo resolver el DNS de forma concluyente desde este entorno | — | NO VERIFICADO |
| CDN de assets | `cdn.shopify.com` (preconnect en cabecera `link:`), `www.f4t3.co/cdn/shop/files/…`, `www.f4t3.co/cdn/shop/t/68/assets/…`, `cdn.shopify.com/shopifycloud/…` | Alta | OBSERVADO |
| Proveedor concreto detrás de `cdn.shopify.com` (Fastly vs Cloudflare) | No observable desde el exterior en esta investigación | — | NO VERIFICADO |
| Tema: Shopify «Fabric» v3.4.0, muy personalizado | HTML: `theme-name="Fabric"`, `theme-version="3.4.0"`, `theme-instance-id="190563057907"`, `theme = {"name":"FATE BUEN FIN · PASSWORD 13" …}`; assets en `/cdn/shop/t/68/assets/` con nombres propios `fate-*` (ver §2) | Alta | OBSERVADO |
| API pública de catálogo (Storefront JSON) | `https://www.f4t3.co/products.json?limit=1` devuelve JSON válido; `https://www.f4t3.co/products/not-all-angels-luxury-tee-black.js` devuelve el producto con variantes, precios en centavos y `inventory_management: null` | Alta | OBSERVADO |
| Checkout | `GET /checkout` → `302` a `https://www.f4t3.co/checkouts/cn/<token>/es-mx` (mismo dominio, locale `es-MX`); `robots.txt` bloquea `/checkout`, `/checkouts/`, `/cart/` | Alta | OBSERVADO (la redirección; el interior del checkout no se recorrió) |
| Pasarela de pago: Shopify Payments | Perfil UCP: Google Pay con `tokenization_specification.gateway: "shopify"`, `gatewayMerchantId: "65410957555"`; handler `dev.shopify.card` (visa, american_express, master); handler `dev.shopify.shop_pay` | Alta | INFERIDO |
| Pago con tarjeta (Visa / Amex / Mastercard) | Handler UCP `dev.shopify.card` con `enabled_card_brands: ["visa","american_express","master"]` | Alta | OBSERVADO (en el perfil UCP) |
| Google Pay | Handler UCP `com.google.pay`: `merchant_name: "FATE"`, `merchant_id: "16708973830884969730"`, redes VISA / AMEX / MASTERCARD | Alta | OBSERVADO (en el perfil UCP) |
| Shop Pay | Handler UCP `dev.shopify.shop_pay` con `shop_id: "65410957555"`; `agents.md` lo describe como checkout acelerado con direcciones y pagos guardados | Alta | OBSERVADO (en el perfil UCP) |
| PayPal | Sin handler en el perfil UCP; una sola mención de la cadena «paypal» en el JS minificado de la home, sin contexto recuperable | — | NO VERIFICADO |
| Mercado Pago / Conekta / Stripe directo / OXXO / SPEI / Kueski / Aplazo | Cero menciones en el HTML de la home y ausentes del perfil UCP de `payment_handlers` | — | NO VERIFICADO |
| MSI («hasta 12 meses sin intereses») | Es copy comercial visible en la home; no hay evidencia técnica observada del adquirente o del esquema que lo ofrece | — | NO VERIFICADO (como dato técnico; el copy sí es observado) |
| Comercio agéntico: UCP + MCP (nativo de Shopify) | `https://www.f4t3.co/.well-known/ucp` (versión `2026-08-25`): servicios `dev.ucp.shopping` y `dev.ucp.common` por MCP en `https://f4t3-clo.myshopify.com/api/ucp/mcp`; capacidades cart, checkout, order, catalog, discount, fulfillment, buyer_consent, identity_linking (Shop account, `accounts.shop.app`); `link: </.well-known/ucp>; rel="ucp"` en cabecera | Alta | OBSERVADO |
| Analítica de Shopify (Trekkie / Monorail / Web Pixels) | `monorail-edge.shopifysvc.com`, `trekkie` (38 menciones en el HTML), `/cdn/wpm/*.js` bloqueado en `robots.txt`, `shopify.loadfeatures`, `Shopify.analytics` | Alta | OBSERVADO |
| Google Analytics 4 / Google Ads / GTM | IDs en la configuración de web-pixels del HTML: `G-QVJCE4GPQW` (GA4), `AW-18386659777` (Google Ads), `GT-PLTRXNMW` (GTM), `target_country: "MX"`, eventos `begin_checkout` | Media-alta (los IDs son observados; la vía —app Google & YouTube de Shopify / Web Pixels— es inferida) | OBSERVADO (IDs) / INFERIDO (vía de instalación) |
| Meta Pixel + Conversions API | Configuración de web-pixels en el HTML: `pixel_id: "351414497090367"`, `pixel_type: "facebook_pixel"`, `facebookCapiEnabled: "true"` | Media-alta (ID observado; vía Shopify/Meta app inferida) | OBSERVADO (ID) / INFERIDO (vía) |
| Email / marketing: Klaviyo | `<script src="https://static.klaviyo.com/onsite/js/XD8hjH/klaviyo.js?company_id=XD8hjH">` (11 menciones de «klaviyo» en la home) y `a.klaviyo.com` | Alta | OBSERVADO |
| Reseñas: extensión propia de Shopify | `https://cdn.shopify.com/extensions/01a1369b-c3c2-78a6-a5e6-6315bf6f9e57/fate-reviews-collect-only-2026-10-13/assets/fate-survey-attribution.js` + `fate-community-reviews-compact.js` en el tema | Media (el asset es observado; que sea una app de terceros concreta, no) | OBSERVADO (asset) / NO VERIFICADO (proveedor de reseñas: Judge.me, Loox u otro) |
| Centro de ayuda + rastreo + chat: app propia en Railway + Chatwoot | `https://soporte.f4t3.co/embed.js?v=20260930-guide` cargado en la home; enlaces en el pie a `soporte.f4t3.co` («Centro de ayuda», «Rastrear mi pedido»); cabeceras de `soporte.f4t3.co`: `Server: railway-hikari`, `x-railway-edge: lax1`, y CSP que autoriza `https://app.chatwoot.com` (script, frame y connect) | Alta (hosting Railway); media-alta (chat = Chatwoot) | OBSERVADO (cabeceras y CSP) / INFERIDO (Chatwoot como chat) |
| Feeds de Instagram / YouTube | Dominios en el HTML: `instagram-feed-production-7d1b.up.railway.app` y `youtube-feed-production.up.railway.app`; embeds `i.ytimg.com`, `www.youtube-nocookie.com`, `www.youtube.com` | Media (feeds servidos por apps propias en Railway) | OBSERVADO (dominios) / INFERIDO (apps propias) |
| Fuentes: Adobe Fonts (Typekit) | `use.typekit.net` (4 menciones en el HTML) | Media | OBSERVADO (dominio) |
| Multi-idioma / multi-mercado | `content-language: es-MX`; `sitemap.xml` lista sitemaps por locale: `en-us`, `es-us`, `en-can`, `es-can` | Media (los locales existen en el sitemap; que haya venta activa en US/CA, no) | OBSERVADO (sitemap) / NO VERIFICADO (ventas activas por mercado) |
| «Seguro de envío plus» ($199) | `products.json`: producto `seguro-de-envio-premium`, `product_type: "Servicio"`, `tags: ["catalog-hidden"]`, `vendor: "FATE"` | Alta (el producto existe) | OBSERVADO (producto) / NO VERIFICADO (aseguradora o app detrás) |
| Plan de Shopify (Basic / Shopify / Advanced / Plus) | No observable desde el exterior | — | NO VERIFICADO |
| Logística / paquetería, ERP, inventario, almacén | No observable desde el exterior (el `.js` de un producto muestra `inventory_management: null` solo para ese producto) | — | NO VERIFICADO |

## 2. OBSERVADO — lo que se ve directamente

### 2.1. Plataforma: Shopify, sin ambigüedad

- `https://www.f4t3.co/robots.txt` abre con `# Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable.` y remite a `https://www.shopify.com/legal/terms`, contacto `bots@shopify.com`, y bloquea rutas típicas de Shopify: `/admin`, `/cart/`, `/checkout`, `/checkouts/`, `/orders`, `/services`, `/sf_*`, `/.well-known/shopify/monorail`, `/cdn/wpm/*.js`, `/cart.js`.
- `https://www.f4t3.co/agents.md` (enlazado desde `robots.txt`) declara: «This store is built on [Shopify](https://www.shopify.com)… Shopify stores support UCP natively».
- Cabecera HTTP de la home (13 nov 2026, 19:08 UTC): `powered-by: Shopify`, `etag: W/"page_cache:65410957555:IndexController:…"`, `link: <https://cdn.shopify.com>; rel="preconnect"`, `server-timing: … theme;desc="190563057907", pageType;desc="index" …`.
- El catálogo responde en los endpoints JSON clásicos de Shopify:
  - `https://www.f4t3.co/products.json?limit=1` → `{"products":[{"id":15484851093747,"title":"Seguro de envío plus",…,"vendor":"FATE","product_type":"Servicio",…,"images":[{"src":"https://cdn.shopify.com/s/files/1/0654/1095/7555/files/…"}]}]}`.
  - `https://www.f4t3.co/products/not-all-angels-luxury-tee-black.js` → producto `id 9449550151923`, variantes con IDs `48777174712563…`, `price: 129900` (centavos), `weight: 200`, `inventory_management: null`, `taxable: false`, opciones Color / Talla (XS–XXL).
- URLs de producto con el patrón Shopify `/products/{handle}?variant={id}` (p. ej. `not-all-angels-luxury-tee-black?variant=48777174712563`).
- Imágenes servidas desde `www.f4t3.co/cdn/shop/files/…` y `cdn.shopify.com/s/files/1/0654/1095/7555/files/…` (el `0654/1095/7555` es el ID de tienda 65410957555 segmentado).

### 2.2. Cabeceras HTTP de la home (13 nov 2026, 19:08 UTC)

```
HTTP/1.1 200 OK
Date: Fri, 13 Nov 2026 19:08:18 GMT
Content-Type: text/html; charset=utf-8
CF-RAY: a5a010763cd5cf49-SJC
x-request-id: d0a751fe-6ccf-4ae5-9b62-531c1c019645-1794596898
cf-cache-status: DYNAMIC
content-language: es-MX
powered-by: Shopify
Server: cloudflare
x-dc: gcp-us-west1,gcp-us-west1,gcp-us-west1
Nel: {"report_to":"cf-nel","success_fraction":0.01,"max_age":604800}
Report-To: {"group":"cf-nel",…,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=…"}]}
strict-transport-security: max-age=7889238
x-frame-options: DENY
content-security-policy: block-all-mixed-content; frame-ancestors 'none'; upgrade-insecure-requests;
```

El `CF-RAY …-SJC` sitúa el borde en San José (California) en esa petición; `x-dc: gcp-us-west1` sitúa el origen en Google Cloud US Oeste. Ambos valores son de una sola petición y pueden variar entre peticiones.

### 2.3. Tema y front-end propio

- Tema Shopify **Fabric v3.4.0**, instancia `190563057907`, directorio de assets `/cdn/shop/t/68/`; nombre interno del tema: `FATE BUEN FIN · PASSWORD 13`.
- JavaScript/CSS propios del tema (prefijo `fate-`, todos en `/cdn/shop/t/68/assets/`): `cart-coordinator.js`, `cart-recs-controller.js`, `component-cart-items.js`, `fate-cart-sync.js`, `fate-pack-builder-model.js`, `fate-mystery-gift.js`, `fate-quick-sizes.js`, `volume-pricing-info.js`, `fate-social-counter.js`, `fate-immersive-header.js`, `fate-brand-navigation.js`, `fate-checkout-upsell.css`, `fate-brand-typography.css`, `fate-four-promo.css`, entre otros. Esto indica un tema muy intervenido, con lógica de packs (6×1), regalo misterioso, precios por volumen y sincronización de carrito en el propio front-end.
- Scripts de plataforma cargados: `cdn.shopify.com/shopifycloud/storefront/assets/storefront/origin_trials-…js`, `…/load_feature-…js`, `cdn.shopify.com/shopifycloud/shop-js/modules/v2/loader.init-shop-cart-sync.es.esm.js`, `cdn.shopify.com/storefront/standard-actions.js`, `cdn.shopify.com/storefront/web-components/account.js`, `/checkouts/internal/preloads.js?locale=es-MX&default_configuration_id=3547169011`.

### 2.4. Pagos — lo que declara el perfil UCP

`https://www.f4t3.co/.well-known/ucp` (versión `2026-08-25`) lista estos `payment_handlers` (OBSERVADO, texto íntegro del perfil):

- `com.google.pay` — `merchant_name: "FATE"`, `merchant_id: "16708973830884969730"`, redes `VISA`, `AMEX`, `MASTERCARD`, `tokenization_specification: {"type":"PAYMENT_GATEWAY","parameters":{"gateway":"shopify","gatewayMerchantId":"65410957555"}}`.
- `dev.shopify.card` — `enabled_card_brands: ["visa","american_express","master"]`.
- `dev.shopify.shop_pay` — `shop_id: "65410957555"`.

El mismo perfil expone el endpoint MCP `https://f4t3-clo.myshopify.com/api/ucp/mcp` y capacidades de carrito, checkout, pedido, catálogo, descuento, fulfillment, consentimiento del comprador e identidad (cuenta Shop, `accounts.shop.app`), más permalink `https://www.f4t3.co/buy`.

### 2.5. Terceros visibles en la home

- **Klaviyo:** `static.klaviyo.com/onsite/js/XD8hjH/klaviyo.js?company_id=XD8hjH` y `a.klaviyo.com`.
- **Google / Meta (vía Web Pixels):** en la configuración de píxeles del HTML aparecen `google_tag_ids: ["G-QVJCE4GPQW","AW-18386659777","GT-PLTRXNMW"]` con `target_country: "MX"` y eventos `begin_checkout`, y `{"pixel_id":"351414497090367","pixel_type":"facebook_pixel"}` con `facebookCapiEnabled: "true"`.
- **Shopify analítica:** `monorail-edge.shopifysvc.com`, `trekkie`, `Shopify.analytics`.
- **Soporte:** `soporte.f4t3.co/embed.js?v=20260930-guide`; pie de página con «Centro de ayuda» y «Rastrear mi pedido» en `soporte.f4t3.co`. Cabeceras de ese subdominio: `Server: railway-hikari`, `x-railway-edge: lax1`, y una CSP que autoriza `https://app.chatwoot.com` en `script-src`, `frame-src` y `connect-src`.
- **Feeds sociales:** `instagram-feed-production-7d1b.up.railway.app`, `youtube-feed-production.up.railway.app`, además de embeds de YouTube (`i.ytimg.com`, `www.youtube-nocookie.com`) y enlace a Instagram (`www.instagram.com`, `@f4t3.co`).
- **Fuentes:** `use.typekit.net` (Adobe Fonts).
- **Reseñas:** sección «RESEÑAS DE CLIENTES» en home y ficha; asset de extensión `fate-reviews-collect-only-2026-10-13` (ver tabla).

### 2.6. Señales de catálogo y locales

- `sitemap.xml` incluye sitemaps por locale: `en-us`, `es-us`, `en-can`, `es-can`, además del sitemap raíz y `sitemap_agentic_discovery.xml`.
- El producto «Seguro de envío plus» ($199.00, `product_type: "Servicio"`, tag `catalog-hidden`) existe como producto real del catálogo, no como texto suelto.

## 3. INFERIDO — con su evidencia y confianza

1. **Shopify Payments es el procesador (confianza: alta).** La tokenización de Google Pay declara `gateway: "shopify"` con el `gatewayMerchantId` igual al ID de tienda, y los handlers de tarjeta y Shop Pay son los nativos de Shopify. No se observó ningún otro gateway en el perfil UCP ni en el HTML. Queda como inferencia —no como hecho observado— porque la confirmación definitiva exigiría ver el checkout con un pedido real, cosa que no se hizo.
2. **El tráfico pasa por el borde de Cloudflare y el origen está en Google Cloud (confianza: alta para el borde; media para atribuirlo a Shopify).** `Server: cloudflare` + `CF-RAY` + `Nel cf-nel` prueban el borde; `x-dc: gcp-us-west1` apunta a origen GCP. Shopify documenta públicamente que su plataforma corre sobre Cloudflare y GCP, lo que hace plausible que todo sea infraestructura de Shopify. **No se puede afirmar que F4T3 tenga su propia cuenta/zona Cloudflare como proxy:** eso requeriría DNS concluyente (CNAME a `shops.myshopify.com` con proxy, o cabeceras propias), y la consulta DNS desde este entorno no fue concluyente. La pista previa queda por tanto confirmada en lo de «Shopify sobre Cloudflare» como descripción del borde, y sin confirmar como arquitectura propia del comerciante.
3. **Klaviyo es su herramienta de email marketing (confianza: alta).** El script onsite con `company_id=XD8hjH` es el marcador estándar de Klaviyo; no se observó ningún otro ESP (Mailchimp, etc.).
4. **Google Analytics 4 + Google Ads + GTM y Meta Pixel + CAPI corren vía el sistema de Web Pixels de Shopify (confianza: media-alta).** Los IDs están incrustados en la configuración de píxeles junto a `trekkie` y `wpm`, no como scripts directos de `googletagmanager.com` o `connect.facebook.net` en el HTML. La vía exacta (app oficial de Google & YouTube / app de Meta) no se distingue desde fuera.
5. **El centro de ayuda es una aplicación propia alojada en Railway, con chat de Chatwoot (confianza: alta para Railway; media-alta para Chatwoot).** `Server: railway-hikari` y `x-railway-edge` son cabeceras de Railway; la CSP autoriza explícitamente `app.chatwoot.com` como origen de scripts, frames y conexiones, que es el patrón de incrustar el widget de Chatwoot.
6. **Los feeds de Instagram y YouTube los sirven pequeñas apps propias en Railway (confianza: media).** Los subdominios `*-production.up.railway.app` son el patrón de despliegue de Railway; no hay dominio de un proveedor conocido de feeds sociales (p. ej. Elfsight, EmbedSocial) en el HTML.
7. **La lógica promocional (6×1, precios por volumen, regalo misterioso, pack builder) vive en el front-end del tema + descuentos nativos de Shopify (confianza: media).** Los scripts `fate-pack-builder-model.js`, `volume-pricing-info.js` y `fate-mystery-gift.js` son propios del tema, y el perfil UCP expone la capacidad `dev.ucp.shopping.discount`. No se observó ninguna app de descuentos de terceros.
8. **El tema Fabric está fuertemente personalizado para FATE (confianza: alta).** La cantidad y los nombres de assets `fate-*` (tipografía, navegación, header inmersivo, carrito, promos) van mucho más allá de un tema instalado sin tocar.

## 4. NO VERIFICADO — lo que no se pudo establecer

- **Cloudflare propio del comerciante** como proxy delante de Shopify (ver §3.2).
- **Plan de Shopify** (Basic / Shopify / Advanced / Plus), ni apps instaladas en el admin, salvo las deducibles desde el front-end.
- **Pasarela exacta y adquirente de MSI:** Shopify Payments es inferido (alta), no observado en un checkout real; quién ofrece los «12 meses sin intereses» no se sabe.
- **PayPal, Mercado Pago, Conekta, Stripe directo, OXXO, SPEI, Kueski, Aplazo:** sin evidencia; la mención de «stripe» (143 ocurrencias) está dentro de los bundles JS de Shopify, no es evidencia de integración directa con Stripe.
- **Proveedor de reseñas** (Judge.me, Loox, Yotpo u otro): solo se observó una extensión propia llamada `fate-reviews-collect-only`.
- **Logística:** paquetería, almacén, ERP o sistema de inventario. Los datos de envío visibles ($179 estándar, $299 premium, gratis > $1,999, 4–10 días hábiles, 48 h de confirmación de pago) son copy comercial de la ficha de producto, no evidencia de back end.
- **Aseguradora o app detrás del «Seguro de envío plus»** ($199, producto de servicio oculto del catálogo).
- **Ventas activas en US/CA:** los locales existen en el sitemap, pero no hay evidencia de que se venda activamente en esos mercados.
- **Interior del checkout, post-compra y cuenta de cliente:** no se recorrieron (no se inició ninguna compra). El `GET /checkout` vacío devolvió un `302` a una URL tokenizada de checkout; ese token no se reproduce en este informe por ser un identificador de sesión transitorio.
- **Uptime, rendimiento, volumen de tráfico y métricas de negocio:** la cifra «168,783 personas usan FATE™» es copy del sitio, no una métrica verificada por esta investigación.
- **Versión de Shopify:** es SaaS y no expone versión pública; no aplica.

## 5. Flujo técnico observable de una compra (solo hasta donde llega la evidencia pública)

1. **Descubrimiento:** PDP en `/products/{handle}?variant={id}`; el `.js` del producto expone variantes, precios en centavos y disponibilidad en JSON público. También existe descubrimiento agéntico vía UCP/MCP (`/.well-known/ucp`, `/api/ucp/mcp`) y catálogo en `/products.json`.
2. **Carrito:** enlace `/cart` y scripts propios (`cart-coordinator.js`, `fate-cart-sync.js`, `component-cart-items.js`) más el sincronizador de Shopify (`loader.init-shop-cart-sync…js`) y el endpoint AJAX `/cart.js` (bloqueado a crawlers en `robots.txt`, pero referenciado por la plataforma). La sincronización con Shop (`Shopify.SignInWithShop`, `initShopCartSync`) está presente en el HTML.
3. **Checkout:** `/checkout` responde `302` a `/checkouts/cn/<token>/es-mx` en el mismo dominio (checkout alojado por Shopify, locale `es-MX`). La página de checkout expone herramientas UCP/WebMCP según `agents.md`.
4. **Pago:** según el perfil UCP, handlers disponibles: tarjeta (Visa / Amex / Mastercard), Google Pay y Shop Pay; procesador inferido: Shopify Payments (`gateway: "shopify"`). No se observó ningún otro medio de pago.
5. **Post-compra (confirmación, envío, seguimiento):** NO VERIFICADO. Solo se observó que existe «Rastrear mi pedido» en `soporte.f4t3.co` y un producto «Seguro de envío plus» en el catálogo.

## 6. Fuentes consultadas

- https://www.f4t3.co/ (home — texto e HTML crudo, 13 nov 2026)
- https://www.f4t3.co/products/not-all-angels-luxury-tee-black?variant=48777174712563 (ficha de producto)
- https://www.f4t3.co/products/not-all-angels-luxury-tee-black.js (JSON del producto)
- https://www.f4t3.co/products.json?limit=1 (JSON del catálogo)
- https://www.f4t3.co/robots.txt
- https://www.f4t3.co/sitemap.xml
- https://www.f4t3.co/agents.md
- https://www.f4t3.co/.well-known/ucp (perfil UCP/MCP)
- Cabeceras HTTP (HEAD) de https://www.f4t3.co/, https://www.f4t3.co/checkout y https://soporte.f4t3.co/ (13 nov 2026, 19:08 UTC)
- Búsqueda web de contexto: «"f4t3.co" Shopify Cloudflare» (solo para contrastar la relación Shopify–Cloudflare; ninguna afirmación del informe depende de esos resultados)

## 7. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo inspeccionar la pestaña de red ni el DOM renderizado; los scripts y terceros se dedujeron del HTML crudo y de las cabeceras. Un script cargado dinámicamente tras interacción del usuario (p. ej. al abrir el carrito o el checkout) puede no estar en esta lista.
- **Sin compra ni carrito con productos:** el interior del checkout, los medios de pago efectivamente ofrecidos en pantalla y el post-compra no se observaron.
- **Sin acceso al admin ni a DNS concluyente:** plan, apps instaladas, configuración de pagos/envíos y la cuestión de si existe una zona Cloudflare propia del comerciante quedan fuera de alcance.
- **Un intento de lectura de `https://soporte.f4t3.co/` con el lector de páginas devolvió un error 429 (límite de peticiones) al final de la investigación;** la caracterización de ese subdominio se apoya en sus cabeceras HTTP y su CSP, no en el texto de la página.
- **Instantánea temporal:** todo lo anterior corresponde al 13 nov 2026 (campaña de Buen Fin activa; el tema se llama internamente «FATE BUEN FIN · PASSWORD 13»). Los IDs de píxeles, la versión del tema y los assets pueden cambiar sin aviso.
