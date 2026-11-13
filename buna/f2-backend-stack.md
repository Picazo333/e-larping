# F2 — Back end + stack · Buna (buna.mx)

- **Sitio:** BUNA — café de especialidad, Ciudad de México — https://buna.mx/
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F2 (back end + stack), Fase 2 de la WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de páginas con `browser.open` (`robots.txt`, `products.json`, `agents.md`, `.well-known/ucp`, ficha de producto `/products/micha-y-micha` y `/checkout`) y `browser.search` para contexto. Sin inicio de sesión, sin compra, sin añadir productos al carrito, sin contacto con la tienda. **Sin navegador en vivo y sin descarga de HTML crudo ni lectura de cabeceras HTTP:** el método de este frente se limitó a `browser.search` y `browser.open`, por lo que tema, scripts y cabeceras solo pudieron establecerse cuando el extractor de texto los expuso (ver §7).
- **Convención usada en todo el informe:** **OBSERVADO** = visto directamente en una fuente pública citada · **INFERIDO** = conclusión razonada a partir de evidencia observada, con confianza alta/media/baja · **HIPÓTESIS** = derivada, marcada como tal · **NO VERIFICADO** = sin evidencia pública suficiente; no se afirma.

## Veredicto sobre las pistas previas

**Pista 1 a re-verificar:** «tienda en buna.mx; URLs /products/ con variant IDs numéricos (pinta Shopify, a confirmar)».

- **Shopify: CONFIRMADO (OBSERVADO).** No es una inferencia: `robots.txt` abre con «# Shopify storefront», `agents.md` declara «This store is built on Shopify», `products.json` responde en el formato clásico de Shopify y las imágenes se sirven desde `cdn.shopify.com/s/files/1/1407/6980/`. Ver §2.

**Pista 2 a re-verificar:** «opciones de suscripción en fichas (compra única vs suscripción)».

- **Programa de suscripción: CONFIRMADO como oferta comercial (OBSERVADO), con matiz.** La home —leída a través de la respuesta de `/checkout` con carrito vacío— describe el programa recurrente: «Recibe productos ricos de manera recurrente en la puerta de tu casa», 15 % de descuento en todas las compras, envío gratis en el primer pedido, pedidos automáticos cada 2, 4 ó 6 semanas, pausa o cancelación cuando se quiera. **Lo que no se pudo observar** es el widget de compra única vs. suscripción dentro de una ficha de producto: la lectura de texto de `/products/micha-y-micha` no muestra ningún selector de suscripción ni mención a ella. La app o el mecanismo que opera las suscripciones queda como **NO VERIFICADO**. Ver §2.5 y §4.

## 1. Tabla de componentes

| Componente | Evidencia | Confianza | Estado |
|---|---|---|---|
| Plataforma de e-commerce: Shopify | `robots.txt` L0 «# Shopify storefront»; `agents.md` L119 «This store is built on Shopify»; `products.json` responde; imágenes en `cdn.shopify.com/s/files/1/1407/6980/` | Alta | OBSERVADO |
| ID de tienda Shopify | `14076980` — en `robots.txt` L116 (`Disallow: /14076980`), en las rutas de imagen `s/files/1/1407/6980/`, en el perfil UCP (`gatewayMerchantId: "14076980"`, `shop_id: "14076980"`) | Alta | OBSERVADO |
| Subdominio myshopify | `buna-mayoreo.myshopify.com` — endpoints UCP/MCP del perfil y rutas de imágenes de la app de metafields | Alta | OBSERVADO |
| Hosting / origen | Sin cabeceras HTTP observadas con este método | — | NO VERIFICADO |
| Borde CDN / proxy: Cloudflare | Sin cabeceras HTTP observadas con este método | — | NO VERIFICADO |
| CDN de assets | `cdn.shopify.com` (imágenes de producto y assets: `cdn.shopify.com/s/files/1/1407/6980/files/…`); assets del tema en `buna.mx/cdn/shop/files/…` | Alta | OBSERVADO |
| Proveedor concreto detrás de `cdn.shopify.com` (Fastly vs Cloudflare) | No observable desde el exterior en esta investigación | — | NO VERIFICADO |
| Tema Shopify (nombre y versión) | Sin HTML crudo disponible; la lectura de texto no expone nombre ni versión del tema | — | NO VERIFICADO |
| API pública de catálogo (Storefront JSON) | `https://buna.mx/products.json?limit=5` devuelve JSON válido con productos, variantes, SKUs y precios | Alta | OBSERVADO |
| Endpoint `.js` de producto | La lectura de `https://buna.mx/products/micha-y-micha.js` devolvió 429 y, por regla de la tarea, no se reintentó | — | NO VERIFICADO |
| Checkout | `GET /checkout` con carrito vacío devolvió el contenido de la home (comportamiento típico de carrito vacío); la redirección a `/checkouts/cn/<token>/…` no se observó | — | OBSERVADO (comportamiento) / NO VERIFICADO (URL de checkout) |
| Pasarela de pago: Shopify Payments | Perfil UCP: Google Pay con `tokenization_specification.gateway: "shopify"`, `gatewayMerchantId: "14076980"`; handler `dev.shopify.card`; handler `dev.shopify.shop_pay` | Alta | INFERIDO |
| Pago con tarjeta (Visa / Mastercard / Amex / Discover / JCB / Diners) | Handler UCP `dev.shopify.card` con `enabled_card_brands: ["visa","master","american_express","discover","jcb","diners_club"]` | Alta | OBSERVADO (en el perfil UCP) |
| Google Pay | Handler UCP `com.google.pay`: `merchant_name: "BUNA"`, `merchant_id: "16708973830884969730"`, redes VISA / MASTERCARD / AMEX / DISCOVER / JCB | Alta | OBSERVADO (en el perfil UCP) |
| Shop Pay | Handler UCP `dev.shopify.shop_pay` con `shop_id: "14076980"`; `agents.md` lo describe como checkout acelerado con direcciones y pagos guardados | Alta | OBSERVADO (en el perfil UCP) |
| PayPal | Sin handler en el perfil UCP | — | NO VERIFICADO |
| Mercado Pago / Conekta / Stripe directo / OXXO / SPEI / Kueski / Aplazo | Ausentes del perfil UCP de `payment_handlers`; sin evidencia en las fuentes leídas | — | NO VERIFICADO |
| MSI («meses sin intereses») | Sin mención observada en las fuentes leídas | — | NO VERIFICADO |
| Comercio agéntico: UCP + MCP (nativo de Shopify) | `https://buna.mx/.well-known/ucp` (versión `2026-08-25`): servicios `dev.ucp.shopping` y `dev.ucp.common` por MCP en `https://buna-mayoreo.myshopify.com/api/ucp/mcp`; capacidades cart, checkout, order, catalog, discount, fulfillment, buyer_consent, identity_linking (Shop account, `accounts.shop.app`), permalink `https://buna.mx/buy` | Alta | OBSERVADO |
| Analítica de Shopify (Trekkie / Monorail / Web Pixels) | `robots.txt` bloquea las rutas estándar `/cdn/wpm/*.js` (L118) y `/.well-known/shopify/monorail` (L127) | Media (las rutas existen; no se observaron IDs ni eventos) | INFERIDO |
| Google Analytics 4 / Google Ads / GTM | Sin HTML crudo disponible; ningún ID observado en las lecturas de texto | — | NO VERIFICADO |
| Meta Pixel + Conversions API | Sin HTML crudo disponible; ningún ID observado en las lecturas de texto | — | NO VERIFICADO |
| Email / marketing (Klaviyo u otro ESP) | Sin HTML crudo disponible; ningún marcador observado en las lecturas de texto | — | NO VERIFICADO |
| Metafields: HulkApps Metafields Manager | Imágenes servidas desde `metafields-manager-by-hulkapps.s3-accelerate.amazonaws.com/uploads/buna-mayoreo.myshopify.com/…` en la ficha de producto | Alta | OBSERVADO |
| Vídeo en home: Widgetic | Vídeo de la home servido desde `files.widgetic.com/file/widgetic-uploads/app/60d239eaecb2a18d578b4567/…mp4` | Alta | OBSERVADO |
| Programa de suscripción (compra recurrente) | Copy de la home: 15 % de descuento, envío gratis en el primer pedido, pedidos cada 2, 4 ó 6 semanas, pausa/cancelación libre | Alta (la oferta existe) | OBSERVADO (oferta) / NO VERIFICADO (app o mecanismo detrás) |
| Widget de suscripción en ficha de producto | La lectura de texto de `/products/micha-y-micha` no muestra selector de suscripción | — | NO VERIFICADO |
| Multi-idioma / multi-mercado | `sitemap.xml` no pudo leerse (429, no reintentado); sin otra evidencia | — | NO VERIFICADO |
| Productos internos «CEDIS» en el catálogo público | `products.json`: «Cofia», «Guantes de limpieza», «Trapos de microfibra», «Café Natural Cafetal» — tag `CEDIS`, precio `0.00`, `available: false`, sin imágenes | Alta | OBSERVADO |
| Plan de Shopify (Basic / Shopify / Advanced / Plus) | No observable desde el exterior | — | NO VERIFICADO |
| Logística / paquetería, ERP, inventario, almacén | No observable desde el exterior | — | NO VERIFICADO |

## 2. OBSERVADO — lo que se ve directamente

### 2.1. Plataforma: Shopify, sin ambigüedad

- `https://buna.mx/robots.txt` (leído 13 nov 2026, 19:20 UTC) abre con `# Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable.` y remite a `https://www.shopify.com/legal/terms`, contacto `bots@shopify.com`. Enlaza las instrucciones de agentes (`https://buna.mx/agents.md`), el descubrimiento UCP (`https://buna.mx/.well-known/ucp`) y el endpoint MCP (`https://buna.mx/api/ucp/mcp`). Bloquea rutas típicas de Shopify: `/admin`, `/cart/`, `/checkout`, `/checkouts/`, `/orders`, `/services`, `/sf_*`, `/.well-known/shopify/monorail`, `/cdn/wpm/*.js`, `/cart.js`, `/recommendations/products`. Contiene la línea `Disallow: /14076980` (el ID de tienda).
- `https://buna.mx/agents.md` (leído 13 nov 2026, 19:20 UTC) declara en su sección «Platform»: «This store is built on [Shopify](https://www.shopify.com), the commerce platform powering millions of stores worldwide. Shopify stores support UCP natively, enabling seamless agent-driven commerce.» Describe la Shop skill (`shop.com/SKILL.md`, `shop.app/SKILL.md`), la integración UCP/MCP (`GET https://buna.mx/.well-known/ucp`, endpoint `https://buna.mx/api/ucp/mcp`) y WebMCP en storefront y checkout, con reglas de autorización del comprador, identificación de tráfico agente (Web Bot Auth) y respeto a `429` con `Retry-After`.
- El catálogo responde en el endpoint JSON clásico de Shopify:
  - `https://buna.mx/products.json?limit=5` → `{"products":[{…}]}` con productos reales: «Micha y Micha» (`id 8497755717702`, vendor `BUNA`, tags `["Café","Destacados"]`, variantes con IDs `46099295567942…`, precios `"365.00"` y `"1450.00"`, SKUs `CAF-MIC-01-02-02-CU`, `CAF-MIC-01-02-01-CU`, opciones Tamaño 340 gr / 2 kg y Presentación Molido medio / En grano), e imágenes en `https://cdn.shopify.com/s/files/1/1407/6980/files/…` (el `1407/6980` es el ID de tienda 14076980 segmentado).
  - Las fichas usan URLs `/products/{handle}` con variant IDs numéricos (p. ej. la ficha de «Micha y Micha» lista las variantes `46099295567942`, `46099295600710`, `46099295666246`, `46099295699014`).
- La ficha `/products/micha-y-micha` (leída 13 nov 2026, 19:23 UTC) muestra precio `$ 365.00` MXN, «Impuestos incluidos», metadata Open Graph (`og:price:amount 365.00`, `og:price:currency MXN`) y una insignia «20% de descuento» (asset `buna.mx/cdn/shop/files/20-off.png`).

### 2.2. Pagos — lo que declara el perfil UCP

`https://buna.mx/.well-known/ucp` (leído 13 nov 2026, 19:20 UTC; versión `2026-08-25`, con versiones soportadas `2026-04-08` y `2026-01-23` servidas desde `buna-mayoreo.myshopify.com/.well-known/ucp/…`) lista estos `payment_handlers` (OBSERVADO, texto íntegro del perfil):

- `com.google.pay` — `merchant_name: "BUNA"`, `merchant_id: "16708973830884969730"`, `merchant_origin: "buna.mx"`, redes `VISA`, `MASTERCARD`, `AMEX`, `DISCOVER`, `JCB`, `tokenization_specification: {"type":"PAYMENT_GATEWAY","parameters":{"gateway":"shopify","gatewayMerchantId":"14076980"}}`.
- `dev.shopify.card` — `enabled_card_brands: ["visa","master","american_express","discover","jcb","diners_club"]`.
- `dev.shopify.shop_pay` — `shop_id: "14076980"`.

El mismo perfil expone los servicios `dev.ucp.shopping` y `dev.ucp.common` por MCP en `https://buna-mayoreo.myshopify.com/api/ucp/mcp`, y las capacidades `dev.ucp.shopping.checkout`, `fulfillment` (solo `method_combinations: [["shipping"]]`), `discount`, `cart`, `buyer_consent`, `order`, `dev.shopify.shopping.declared_fields`, `dev.ucp.common.ask`, `catalog.search`, `catalog.lookup`, `dev.shopify.catalog`, `location.search`, `location.lookup`, `identity_linking` (Shop account, `accounts.shop.app`) y `permalink` con endpoint `https://buna.mx/buy`.

**Matiz de endpoints:** `robots.txt` y `agents.md` anuncian el endpoint MCP en el dominio propio (`https://buna.mx/api/ucp/mcp`), mientras que el perfil UCP lo anuncia en el subdominio myshopify (`https://buna-mayoreo.myshopify.com/api/ucp/mcp`). Ambos están OBSERVADOS; cuál resuelve en la práctica queda como NO VERIFICADO.

### 2.3. Terceros visibles sin HTML crudo

- **HulkApps Metafields Manager:** en la ficha de «Micha y Micha», varias imágenes de producto y de fondo se sirven desde `metafields-manager-by-hulkapps.s3-accelerate.amazonaws.com/uploads/buna-mayoreo.myshopify.com/…` (p. ej. `1785969631-1775298455-Buna_1600x1600_Datura_1.png`, `1706048494-background.jpg`). Es el patrón de almacenamiento de la app Metafields Manager de HulkApps.
- **Widgetic:** la home incluye un vídeo servido desde `files.widgetic.com/file/widgetic-uploads/app/60d239eaecb2a18d578b4567/krr6aog7-kim2s1.mp4`.
- **Shopify analítica (rutas estándar):** `robots.txt` bloquea `/cdn/wpm/*.js` y `/.well-known/shopify/monorail`, las rutas del sistema de Web Pixels / Monorail de Shopify. No se observó ningún ID de píxel ni evento.
- **Sin otros terceros observables:** la lectura de texto no expuso scripts de Klaviyo, Google, Meta, reseñas ni chat. Eso no prueba su ausencia (ver §7).

### 2.4. Señales de catálogo y operación interna

- `products.json` muestra, junto a los productos de venta, artículos internos con tag `CEDIS`, precio `0.00`, `available: false` y sin imágenes: «Cofia» (`id 8564686618694`), «Guantes de limpieza» (`id 8499012960326`), «Trapos de microfibra» (`id 8499008667718`, opciones de color Rojo/Azul/Verde/Amarillo/Blanco/Naranja) y «Café Natural Cafetal» (`id 8438201974854`, SKU `CAFE-0001-0001`). Son productos operativos del CEDIS publicados en el catálogo público.
- Los productos leídos muestran `updated_at: "2026-11-13T13:20:47-06:00"`, es decir, el catálogo fue tocado hoy, 13 nov 2026 (coherente con ajustes de Buen Fin).
- Los SKUs siguen un patrón estructurado: `CAF-MIC-01-02-02-CU` (categoría–producto–tamaño–presentación–canal).
- La ficha de «Micha y Micha» lista 15 productos relacionados con precios en MXN (Ikaria 250 g $600.00, Dalia $335.00, Maui Ome $395.00, Alebrije $335.00, Guarumbo $310.00, Datura $360.00, Los Pajaritos $395.00, selección del tostador 3×340 g $975.00, mieles $270.00, Kit Rico $990.00, chocolates $70.00–$95.00, Kit Agárica $1,700.00). Precios OBSERVADOS en la ficha, no un catálogo completo.

### 2.5. Suscripción — lo observado y lo que no

- La home (leída vía `/checkout`, 13 nov 2026, 19:23 UTC) dedica una sección al programa recurrente: «Recibe productos ricos de manera recurrente en la puerta de tu casa.» Beneficios listados: «Obtén un 15 % de descuento en todas tus compras», «Envío gratis en tu primer pedido», «Programa tus pedidos automáticos y recíbelos cada 2, 4 ó 6 semanas», «Pausa o cancela cuando quieras y tan amigos como siempre», además de comunidad y eventos en La Tostadora. CTA: «Haz tu primer pedido».
- La ficha de «Micha y Micha» no muestra en su texto extraído ningún selector de compra única vs. suscripción, ni precio de suscripción, ni mención a la recurrencia. El mecanismo (Shopify Subscriptions nativo, Recharge, Seal Subscriptions, Appstle u otro) es NO VERIFICADO.

## 3. INFERIDO — con su evidencia y confianza

1. **Shopify Payments es el procesador (confianza: alta).** La tokenización de Google Pay declara `gateway: "shopify"` con el `gatewayMerchantId` igual al ID de tienda (14076980), y los handlers de tarjeta y Shop Pay son los nativos de Shopify. No se observó ningún otro gateway en el perfil UCP. Queda como inferencia —no como hecho observado— porque la confirmación definitiva exigiría ver el checkout con un pedido real, cosa que no se hizo.
2. **La tienda detrás de buna.mx es la tienda «mayoreo» (confianza: media).** El subdominio myshopify es `buna-mayoreo.myshopify.com` y las rutas de la app de metafields lo confirman como nombre de la tienda. «Mayoreo» es venta al por mayor, y la prensa sobre Buna describe su negocio central como venta de café a restaurantes y programas de mayoreo (p. ej. Kalsada, 2017: «Our core business is to sell coffee to restaurants and set up wholesale programs»). Es plausible que el mismo storefront atienda retail y mayoreo, o que el retail corra sobre esta tienda con nombre de mayoreo. Que exista una tienda retail separada es NO VERIFICADO.
3. **El `merchant_id` de Google Pay es un identificador compartido de Shopify (confianza: media).** El valor `16708973830884969730` es idéntico al observado en el perfil UCP de F4T3 (f4t3.co) en la misma investigación, pese a ser tiendas distintas con distinto `gatewayMerchantId`. Eso apunta a un merchant ID compartido del gateway de Shopify, no a un ID propio de Buna.
4. **HulkApps Metafields Manager está en uso activo (confianza: alta).** Las imágenes de metafields (fondos de producto y variantes de arte por café) se sirven desde su bucket S3 con rutas por tienda (`uploads/buna-mayoreo.myshopify.com/…`), lo que indica que los metafields de producto se gestionan o se sirvieron a través de esa app.
5. **Widgetic sirve el vídeo de la home (confianza: alta).** El archivo `.mp4` de la sección principal se sirve desde `files.widgetic.com`, el dominio de subida de la app Widgetic.
6. **La analítica nativa de Shopify está presente (confianza: media).** `robots.txt` bloquea las rutas estándar de Web Pixels y Monorail; es la configuración por defecto de Shopify, no una prueba de píxeles concretos. Ningún ID de GA4, GTM o Meta Pixel fue observado.
7. **El programa de suscripción ofrece 15 % permanente (confianza: alta como hecho comercial).** El copy de la home lo afirma literalmente; el proveedor técnico que lo opera no se puede inferir desde fuera.

## 4. NO VERIFICADO — lo que no se pudo establecer

- **Tema Shopify** (nombre, versión, grado de personalización): sin HTML crudo no se pudo observar. La home usa assets en `buna.mx/cdn/shop/files/…`, pero eso no identifica el tema.
- **Cabeceras HTTP** (Cloudflare, origen, `powered-by`, locale, CSP): no se observaron con este método. No se puede afirmar ni negar borde Cloudflare ni origen GCP.
- **Scripts propios y de terceros en general** (GA4, GTM, Meta Pixel, Klaviyo, reseñas, chat, apps de descuentos): sin HTML crudo ni pestaña de red, solo se observaron los dos terceros que el extractor de texto expuso (HulkApps y Widgetic). Su ausencia en este informe no es evidencia de ausencia en la tienda.
- **Endpoint `.js` de producto** (`/products/micha-y-micha.js`): lectura devuelta con 429; no se reintentó por regla de la tarea. No se pudo confirmar la estructura de variantes, `inventory_management` ni `selling_plan_allocations` en JSON.
- **`sitemap.xml`** (locales, sitemap agentic): lectura devuelta con 429; no se reintentó. Multi-idioma / multi-mercado sin evidencia.
- **Home directa** (`https://buna.mx/`): lectura devuelta con 429; no se reintentó. La home se leyó solo indirectamente a través de la respuesta de `/checkout` con carrito vacío.
- **Interior del checkout, medios de pago en pantalla y post-compra:** no se recorrieron (no se inició ninguna compra). El `GET /checkout` con carrito vacío devolvió contenido de home; no se observó la redirección a `/checkouts/cn/<token>/…`.
- **App o mecanismo de suscripciones** (Shopify Subscriptions nativo, Recharge, Seal, Appstle u otro) y widget de suscripción en ficha: sin evidencia.
- **PayPal, Mercado Pago, Conekta, Stripe directo, OXXO, SPEI, Kueski, Aplazo, MSI:** sin evidencia en el perfil UCP ni en las fuentes leídas.
- **Plan de Shopify** (Basic / Shopify / Advanced / Plus), apps instaladas en el admin, configuración de pagos/envíos y logística (paquetería, almacén, ERP, inventario): no observables desde el exterior.
- **Uptime, rendimiento, volumen de tráfico y métricas de negocio:** no se midieron ni se afirman.
- **Versión de Shopify:** es SaaS y no expone versión pública; no aplica.

## 5. Flujo técnico observable de una compra (solo hasta donde llega la evidencia pública)

1. **Descubrimiento:** PDP en `/products/{handle}` con variant IDs numéricos; catálogo en `/products.json`; descubrimiento agéntico vía UCP/MCP (`/.well-known/ucp`, `/api/ucp/mcp`) y permalink `https://buna.mx/buy`.
2. **Carrito:** `/cart` y `/cart.js` existen como rutas de la plataforma (bloqueadas a crawlers en `robots.txt`); su comportamiento no se observó (no se añadió ningún producto).
3. **Checkout:** `GET /checkout` con carrito vacío devolvió el contenido de la home; el checkout tokenizado de Shopify (`/checkouts/cn/<token>/…`) no se observó en esta lectura. La página de checkout expone herramientas UCP/WebMCP según `agents.md`.
4. **Pago:** según el perfil UCP, handlers disponibles: tarjeta (Visa / Mastercard / Amex / Discover / JCB / Diners), Google Pay y Shop Pay; procesador inferido: Shopify Payments (`gateway: "shopify"`). No se observó ningún otro medio de pago.
5. **Suscripción:** programa recurrente con 15 % de descuento y cadencia de 2, 4 ó 6 semanas, anunciado en la home; el flujo de alta y el proveedor no se observaron.
6. **Post-compra (confirmación, envío, seguimiento):** NO VERIFICADO.

## 6. Fuentes consultadas

- https://buna.mx/robots.txt (13 nov 2026, 19:20 UTC)
- https://buna.mx/products.json?limit=5 (13 nov 2026, 19:20 UTC)
- https://buna.mx/agents.md (13 nov 2026, 19:20 UTC)
- https://buna.mx/.well-known/ucp (13 nov 2026, 19:20 UTC)
- https://buna.mx/products/micha-y-micha (ficha de producto, 13 nov 2026, 19:23 UTC)
- https://buna.mx/checkout (carrito vacío → contenido de home, 13 nov 2026, 19:23 UTC)
- Búsqueda web de contexto: «buna.mx café Shopify tienda en línea» y «"buna.mx" Shopify theme» (13 nov 2026; solo contexto sobre el negocio mayorista de Buna —Kalsada, Ratio Coffee, Local.mx—; ninguna afirmación técnica del informe depende de esos resultados)
- Lecturas con 429 no reintentadas por regla de la tarea: https://buna.mx/ (home), https://buna.mx/sitemap.xml, https://buna.mx/products/micha-y-micha.js (13 nov 2026, 19:20 UTC)

## 7. Límites de lo verificado

- **Sin navegador en vivo y sin HTML crudo ni cabeceras:** el método autorizado para este frente fue solo `browser.search` y `browser.open`. El extractor de texto no muestra scripts, píxeles ni cabeceras, por lo que tema, analítica, ESP y la mayoría de apps de terceros quedan fuera de alcance en esta pasada. Un script cargado dinámicamente tras interacción del usuario puede no estar en esta lista.
- **Límite de peticiones (429) del servicio de lectura:** tres lecturas —home, `sitemap.xml` y el `.js` de producto— devolvieron 429 y no se reintentaron, por regla expresa de la tarea. La home se conoce solo por la vía indirecta de `/checkout` con carrito vacío.
- **Sin compra ni carrito con productos:** el interior del checkout, los medios de pago efectivamente ofrecidos en pantalla y el post-compra no se observaron.
- **Sin acceso al admin ni a DNS:** plan, apps instaladas, configuración de pagos/envíos y la cuestión de si existe una zona Cloudflare propia del comerciante quedan fuera de alcance.
- **Instantánea temporal:** todo lo anterior corresponde al 13 nov 2026 (primer día de Buen Fin; insignia «20% de descuento» visible en ficha y catálogo actualizado ese mismo día a las 13:20 hora local). Los IDs de píxeles, el tema y los assets pueden cambiar sin aviso.
