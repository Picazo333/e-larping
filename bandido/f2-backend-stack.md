# F2 — Back end + stack · Bandido Studio

- **Sitio:** https://bandidostudio.com/ (diseño / objetos / iluminación, México)
- **Fecha de investigación:** 13 nov 2026 (páginas leídas con marca de rastreo 13 nov 2026, 20:01 UTC / 14:01 CST)
- **Frente:** F2 (Back end + stack) — Fase 2, WO-E-LARPING
- **Método:** `browser.open` (lectura de texto; sin navegador en vivo, sin HTML/fuente cruda, sin cabeceras HTTP) y `browser.search`. Nada se publicó ni se contactó. No se extrajeron datos personales.
- **Leyenda:** **OBSERVADO** = visto directamente en una página leída · **INFERIDO** = deducción razonable a partir de evidencia observada, marcada como tal · **NO VERIFICADO** = no se pudo comprobar con los medios disponibles.

## 1. Plataforma — veredicto: WordPress + WooCommerce

**OBSERVADO — WordPress, con marcadores duros:**

- Todas las imágenes de la home cuelgan de `/wp-content/uploads/` (p. ej. `https://bandidostudio.com/wp-content/uploads/2026/09/ARUNA-lampara-colgante-2-vidrio-acero-productos-Bandido-1.webp`).
- `https://bandidostudio.com/robots.txt` contiene reglas típicas de WordPress/WooCommerce:
  - `Disallow: /wp-admin/` y `Allow: /wp-admin/admin-ajax.php`
  - `Disallow: /wp-content/uploads/wc-logs/`, `/woocommerce_transient_files/`, `/woocommerce_uploads/`
  - `Disallow: /*?add-to-cart=` (regla de WooCommerce)
  - Bloque `# START WPFORMS BLOCK` (`Disallow: /wp-content/uploads/wpforms/`)
  - Bloque `# START YOAST BLOCK` con `Sitemap: https://bandidostudio.com/sitemap_index.xml`
- `https://bandidostudio.com/wp-json/` responde con el índice público de la REST API de WordPress: `"name":"Bandido"`, `"description":"Tienda online de lámparas"`, `"url":"https://bandidostudio.com"`, `"gmt_offset":"-6"`, `page_on_front: 5564`, `show_on_front: "page"`.
- El índice de `wp-json/` expone namespaces de WooCommerce: `wc/v3`, `wc/v2`, `wc/v1`, `wc/store/v1`, `wc/store`, `wc-admin`, `wc-analytics`, `wc/pos/v1/catalog`, `wc/telemetry`, `wccom-site/v3`.

**OBSERVADO — WooCommerce activo como catálogo (no como tienda con checkout visible):**

- El índice de sitemaps (`https://bandidostudio.com/sitemap.xml`, leído 13 nov 2026) lista sitemaps propios de WooCommerce, todos con fecha reciente:
  - `product-sitemap.xml` — última modificación **2026-11-13T19:46:01+00:00** (el mismo día de la investigación: catálogo mantenido activamente)
  - `product_cat-sitemap.xml` — 2026-11-13T19:46:01+00:00
  - `product_tag-sitemap.xml` — 2026-11-13T19:43:47+00:00
  - `category-sitemap.xml` — 2026-11-06T19:30:21+00:00
  - Atributos de producto WooCommerce bilingües: `pa_delivery-time-sitemap.xml` y `pa_tiempo-de-entrega-sitemap.xml` (ambos 2026-11-13T19:46:01+00:00) — los productos llevan atributo de tiempo de entrega en inglés y español.
  - `post-sitemap.xml` (2026-11-06), `page-sitemap.xml` (2026-11-05).
- **INFERIDO:** el catálogo de productos existe y se actualiza (la fecha del sitemap de productos es de hoy), pero la venta no se cierra en la web por la vía estándar (ver §4).

**Descartado:** no es Shopify, Webflow ni plataforma SaaS cerrada — no hay ningún marcador de esas plataformas y sí marcadores WordPress/WooCommerce inequívocos. **INFERIDO:** tampoco es un desarrollo a medida: la pila es WordPress + plugins (ver §2 y §6).

## 2. Front-end / tema y constructor

**OBSERVADO (vía namespaces del índice `wp-json/`):**

- **Elementor + Elementor Pro:** namespaces `elementor/v1`, `elementor-pro/v1`, `elementor-ai/v1` (Elementor AI también presente). **INFERIDO:** el sitio se construye con Elementor Pro; el tema probablemente sea Hello Elementor o similar, pero el tema concreto **NO VERIFICADO** (el índice REST no lo declara y no hubo acceso a la fuente HTML).
- **Slider Revolution:** namespace `sliderrevolution` (sliders / slides / modal).
- **Essential Blocks:** namespace `essential-blocks/v1` (incluye endpoint de productos).
- **WPML (multilingüe):** namespaces `wpml/v1`, `wpml/st/v1`, `wpml/tm/v1`, `wpml/ate/v1`; idiomas declarados `en` y `es`. Coherente con los atributos de producto bilingües del §1.
- **Yoast SEO:** namespace `yoast/v1` + bloque en `robots.txt` + `sitemap_index.xml` generado por Yoast.

**NO VERIFICADO:** tema exacto, versión de WordPress / WooCommerce / PHP, framework CSS, ni rendimiento (no hubo acceso a cabeceras ni a la fuente HTML; la lectura de texto no expone `<head>`, scripts ni estilos).

## 3. Catálogo y productos

**OBSERVADO:**

- La home presenta la colección nueva **ARUNA 2026** (vidrio termoformado, acero cepillado) y acabados nuevos de FLUX, CORE y FASE; secciones de colecciones de luminarias y mobiliario, proyectos y eventos (Design House 2026, Materia en Tránsito, décimo aniversario).
- Sección **DESCARGABLES / CATÁLOGO DE PRODUCTOS** con mockup y portada del catálogo (imágenes `Mockup-catalogo-png-2.png` y `Portada-catalogo.webp`, subidas en oct 2026).
- **Download Manager Pro:** namespaces `wpdm`, `wpdmdropbox/v1` y sitemap propio `wpdmpro-sitemap.xml` (2026-10-27T22:58:04+00:00) y `wpdmtag-sitemap.xml`. **INFERIDO:** el catálogo en PDF se distribuye como descarga gestionada con Download Manager Pro (coherente con la sección "Descargables" de la home).
- **Barn2 Document Library Lite:** namespace `barn2-setup-wizard/v1/document-library-lite`. **INFERIDO:** posible uso de tablas/biblioteca de documentos para el catálogo; uso concreto **NO VERIFICADO**.

**NO VERIFICADO:** número de productos, precios (en el texto de la home no aparece ningún precio), stock, ni URLs individuales de producto — el `product-sitemap.xml` no pudo leerse (429, ver §9).

## 4. Checkout y métodos de pago — hallazgo central: sin checkout observable

**OBSERVADO:**

- `https://bandidostudio.com/checkout/` devuelve **404** (error del servicio de lectura: HTTP 404, 13 nov 2026). La ruta estándar de checkout de WooCommerce **no existe** en este sitio.
- En el texto completo de la home (208 líneas leídas) **no aparece** ningún botón "añadir al carrito", "comprar", precio, ni enlace a carrito/checkout.
- El modelo de venta visible es de **asesoría/cotización**:
  - "Atención personalizada — Contamos con asesoría especializada para proyectos y convenios para arquitectos y diseñadores de interiores."
  - "Registra tus datos y un asesor se comunicará contigo para brindarte mayor información." (formulario de contacto al pie)
  - Dirección física y teléfono en el pie: Aristóteles 127, Polanco, CDMX 11550; +52 555 0872 443; horario lun–vie 10:00–17:00.
- El catálogo se ofrece como **descargable (PDF)** en lugar de tienda con compra directa.

**INFERIDO (no confirmado):** WooCommerce está instalado y con productos cargados, pero opera en modo catálogo / cotización — o bien la página de checkout tiene otro slug, o bien el checkout está desactivado. El 404 de `/checkout/` por sí solo no prueba que no exista ninguna forma de pago en línea; prueba que la ruta estándar no existe y que la home no ofrece compra directa. La venta parece cerrarse por asesor (teléfono / formulario / showroom), no por checkout web.

**OBSERVADO — pasarela instalada (sin confirmar activa):**

- Namespaces `paypal/v1` y `wc/v3/wc_paypal` en el índice `wp-json/`: el plugin/gateway de **PayPal para WooCommerce está instalado**. Si está activo o configurado, **NO VERIFICADO** (no hay checkout observable donde comprobarlo).

**NO VERIFICADO:** Stripe, Mercado Pago, Conekta, Openpay, transferencia bancaria o pago en showroom. En el índice `wp-json/` no aparece ningún namespace de Stripe, Mercado Pago, Conekta ni Openpay — eso sugiere que no están instalados como plugins con API REST, pero **la ausencia de un namespace no prueba la ausencia del gateway** (no todos los gateways registran namespaces), así que se deja como no verificado, no como descartado.

## 5. Hosting / CDN

**NO VERIFICADO.** La lectura de texto (`browser.open`) no expone cabeceras HTTP (servidor, `x-powered-by`, CDN, IP), y la búsqueda web realizada (`"bandidostudio.com technology stack WordPress WooCommerce hosting"`, 13 nov 2026) devolvió solo resultados genéricos sobre WordPress/WooCommerce, sin ninguna ficha específica del dominio. No se afirma proveedor de hosting, ni CDN (Cloudflare u otro), ni ubicación del servidor. Queda pendiente una comprobación de cabeceras/DNS por otra vía.

## 6. Terceros — analítica, píxeles, chat, email, formularios, seguridad

Todo lo de esta sección es **OBSERVADO como namespace/plugin instalado** en el índice público de `wp-json/` (13 nov 2026). Que el plugin esté instalado **no prueba** que su píxel/script se dispare en el front-end: eso **NO VERIFICADO** (sin acceso a la fuente HTML).

| Tercero / función | Evidencia observada | Estado |
|---|---|---|
| Google Analytics / Search Console | `google-site-kit/v1` (Google Site Kit) | Plugin instalado; medición real no verificada |
| Meta / Facebook para WooCommerce | `wc-facebook/v1`, `fb_api` | Plugin instalado; píxel/catálogo no verificado |
| Pinterest | `pinterest/v1` | Plugin instalado; actividad no verificada |
| Google Listings & Ads | `wc/gla` | Plugin instalado; feed de Merchant Center no verificado |
| Email transaccional | `wp-mail-smtp/v1` (WP Mail SMTP) | Plugin instalado; proveedor SMTP no identificado |
| Formularios | `wpforms/v1` + bloque WPFORMS en `robots.txt` | WPForms instalado; es el formulario de "atención personalizada" (inferido) |
| Seguridad | `wordfence/v1` (Wordfence) | Plugin instalado |
| SEO / enlaces internos | `yoast/v1`, `link-whisper` (Link Whisper) | Plugins instalados |
| Backups / rendimiento | `jetpack/v4` (Jetpack) | Plugin instalado; alcance real no verificado |
| Auditoría interna | `simple-history/v1` (Simple History), `advanced-db-cleaner/v1` | Plugins instalados |
| POS | `wc/pos/v1/catalog` | Endpoint de punto de venta; uso en showroom no verificado |
| Multilingüe | WPML (`wpml/*`) | Instalado, idiomas en/es |

**OBSERVADO — chat:** ningún widget de chat (WhatsApp, Messenger, Intercom u otro) aparece en el texto de la home. **NO VERIFICADO** si existe un chat que la lectura de texto no exponga.

**Namespaces sin identificar:** `wcar/api` y `bitwpfzc` aparecen en el índice pero no se pudo determinar a qué plugin corresponden con la evidencia disponible — se registran como **NO VERIFICADO**, no se adivina su función.

**Nota de exposición:** el índice de `wp-json/` es público y sin autenticación; expone el inventario de plugins (lo que permitió este informe). Es el comportamiento por defecto de WordPress, no una vulnerabilidad demostrada, pero es un dato útil: el stack es enumerable desde fuera.

## 7. Comercio agentic — /agents.md, UCP, MCP, robots de IA

**OBSERVADO (ausencia):**

- `https://bandidostudio.com/agents.md` → **404**.
- `https://bandidostudio.com/.well-known/ucp` → **404**.
- No hay ningún endpoint MCP ni manifiesto agentic visible en el índice de `wp-json/` (los namespaces listados son todos de plugins convencionales; ninguno corresponde a UCP/MCP/A2A).
- `robots.txt` no contiene ninguna regla dirigida a crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.): solo `User-agent: *` con reglas de WooCommerce/WPForms/Yoast. Es decir: **no bloquea ni autoriza expresamente a los crawlers de IA** — quedan bajo la regla genérica `*`, que no los excluye.
- El sitemap de productos se actualizó hoy (13 nov 2026), así que el contenido de producto es rastreable por buscadores convencionales; la compra agentic, en cambio, no tiene ninguna vía habilitada.

**INFERIDO:** Bandido Studio no tiene ninguna preparación de comercio agentic. Un agente no puede comprar aquí: no hay `agents.md`, ni UCP, ni checkout estándar al que apuntar. La única vía de compra es humana (asesor / teléfono / showroom).

## 8. Lectura para el proyecto e-larping (qué robar / qué evitar)

- **Robar:** WordPress + WooCommerce en modo catálogo con PDF descargable gestionado (Download Manager Pro) es un patrón barato y válido para ticket alto / producto a medida: el catálogo es contenido, la venta es conversación. El atributo bilingüe de tiempo de entrega (`pa_delivery-time` / `pa_tiempo-de-entrega`) es un detalle fino para dropshipping: el plazo de entrega como dato estructurado del producto.
- **Robar:** WPML desde el día uno si el catálogo va a ser bilingüe; Google Site Kit + Meta for WooCommerce como medición mínima sin desarrollo.
- **Evitar:** instalar WooCommerce completo para no vender en línea — el stack de checkout, PayPal, POS y GLA cargado sin checkout visible es peso muerto y superficie de mantenimiento. Si el modelo es cotización, un WordPress sin WooCommerce (o WooCommerce en modo catálogo explícito) es más limpio.
- **Evitar:** exponer el inventario de plugins vía `wp-json/` público sin necesidad — en nuestro clon, limitar o desactivar la REST API pública que no usemos.
- **Oportunidad:** el hueco agentic es total en este nicho (diseño/objetos): un competidor con `agents.md` + checkout real + UCP sería el único comprable por agentes en la categoría.

## 9. Sin verificar

- **Producto y precios:** número de productos, precios, stock y URLs individuales de producto. El `product-sitemap.xml` (actualizado 13 nov 2026, 19:46 UTC) y el `page-sitemap.xml` **no pudieron leerse**: el servicio de lectura devolvió **429 (rate limit) tras 3 intentos** y, por regla de la WO, **no se reintentó**. Tampoco se leyó el `wpdmpro-sitemap.xml` (URL del catálogo PDF).
- **Checkout:** si existe una página de checkout con otro slug, si WooCommerce está en modo catálogo explícito, o si el checkout fue desactivado. Solo se comprobó que `/checkout/` da 404.
- **Pasarelas activas:** si PayPal está configurado y activo; si existen Stripe, Mercado Pago, Conekta, Openpay, transferencia o pago en showroom. Solo se observó el namespace de PayPal instalado.
- **Hosting / CDN:** proveedor, servidor, CDN, IP, TLS. Sin acceso a cabeceras HTTP ni DNS. La búsqueda web no arrojó datos específicos del dominio.
- **Tema y versiones:** tema exacto, versiones de WordPress, WooCommerce, PHP y plugins.
- **Terceros en ejecución:** si los píxeles/scripts de Google Analytics, Meta, Pinterest o Google Listings & Ads realmente se disparan en el front-end; si existe chat en vivo; proveedor SMTP de WP Mail SMTP; qué son los namespaces `wcar/api` y `bitwpfzc`.
- **Comercio agentic:** no se comprobó `/.well-known/agent.json`, `llms.txt` ni otras rutas agentic no estándar (solo `agents.md` y `/.well-known/ucp`, ambas 404). La ausencia de esas dos rutas no descarta otras convenciones no comprobadas.

## Resumen ejecutivo

- Bandido Studio corre sobre **WordPress + WooCommerce** (marcadores duros: `/wp-content/uploads/`, `robots.txt` con reglas `wc-logs`/`add-to-cart`, índice `wp-json/` con namespaces `wc/*`), con **Elementor Pro**, Slider Revolution, WPML (en/es) y Yoast SEO.
- WooCommerce existe pero **no hay checkout observable**: `/checkout/` da 404, la home no muestra precios ni carrito, y la venta es por **asesoría/cotización** (formulario, teléfono, showroom Polanco) con **catálogo en PDF** descargable (Download Manager Pro).
- PayPal aparece instalado (namespaces `paypal/v1`, `wc/v3/wc_paypal`); ninguna otra pasarela pudo confirmarse y ninguna está activa a la vista.
- Terceros instalados: Google Site Kit, Meta for WooCommerce, Pinterest, Google Listings & Ads, WPForms, Wordfence, Jetpack y WP Mail SMTP (instalación observada; ejecución en el front no verificada).
- **Cero comercio agentic**: sin `agents.md`, sin `/.well-known/ucp`, sin MCP, y `robots.txt` sin reglas para crawlers de IA.
- Hosting/CDN, tema exacto, versiones y precios quedaron **sin verificar**; los sitemaps de productos y páginas no se leyeron por un **429 sin reintento**.
