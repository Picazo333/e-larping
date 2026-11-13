# F2 — Back end + stack · El Sótano (elsotano.com)

- **Frente:** F2 (Back end + stack) — Fase 2, WO-E-LARPING
- **Sitio:** El Sótano — https://elsotano.com/ (https://www.elsotano.com/)
- **Fecha de investigación:** 13 nov 2026
- **Método:** lectura de texto por `browser.open` y búsqueda web por `browser.search` (sin navegador en vivo, sin añadir al carrito, sin iniciar sesión, sin contacto). Cabeceras HTTP observadas con `curl -I` (13 nov 2026, 20:01 UTC).
- **Leyenda:** **OBSERVADO** = visto directamente en una fuente leída · **INFERIDO** = deducción razonable con evidencia citada, no confirmada · **NO VERIFICADO** = no se pudo comprobar con los medios de este frente.

---

## 1. Plataforma / CMS

**Conclusión: NO es Shopify, y no hay marcadores de ninguna plataforma SaaS conocida. Lo observable apunta a un desarrollo propio sobre PHP.**

| Marcador | Resultado | Estado |
|---|---|---|
| `https://elsotano.com/products.json` (endpoint canónico de Shopify) | HTTP 404 | OBSERVADO |
| `https://elsotano.com/agents.md` | HTTP 404 | OBSERVADO |
| `https://elsotano.com/.well-known/ucp` | HTTP 404 | OBSERVADO |
| `Server: cloudflare` + `CF-RAY` (ver §2) | Sin cabecera `X-ShopId`, `Set-Cookie` de Shopify ni dominio `*.myshopify.com` | OBSERVADO |
| Cookie de sesión `PHPSESSID` | Sesión PHP nativa | OBSERVADO |
| `Expires: Thu, 19 Nov 1981 08:52:00 GMT` + `Cache-Control: no-store, no-cache, must-revalidate` + `Pragma: no-cache` | Valores por defecto clásicos de `session_start()` de PHP | OBSERVADO |
| Rutas en español a medida: `/cesta/`, `/buscar`, `/favoritos/`, `/tagus/`, `/libros-de/`, `/ebooks-de/`, `/categoria/`, `/editorial/`, `/autor/`, `/noticias/` (ver `robots.txt`, §4) | Estructura de URLs propia, no la de Shopify (`/products/`, `/collections/`), Magento (`/catalog/product/view/`) ni WooCommerce (`/producto/`, `/tienda/`) | OBSERVADO |
| Sitemap en `/seo/sitemap1.xml` … `/seo/sitemap7.xml` | Ruta de sitemap a medida (Shopify usa `/sitemap.xml` con sub-sitemaps `/sitemap_products_1.xml`, etc.) | OBSERVADO |
| Activos en `/assets/images/banner/<AAAAMMDDHHMMSS>_<nombre>.webp` y portadas en `/sotano_covers/<7 dígitos>/<ISBN-13>.jpg` | Almacenamiento de imágenes propio, con portadas claveadas por ISBN | OBSERVADO |
| Historial | Tienda virtual en operación desde agosto de 2002 (fuente secundaria, AnyFlip) — antigüedad coherente con un desarrollo propio longevo, no con una migración reciente a SaaS | INFERIDO |

**Descartes:**
- **Shopify: descartado** — `/products.json` devuelve 404 y no hay ningún marcador Shopify en cabeceras ni rutas.
- **WooCommerce / WordPress: sin evidencia** — no se observó ningún marcador (`/wp-content/`, `/wp-json/`, etc.). El endpoint `/wp-json/` **no llegó a probarse** (ver §8 y "Sin verificar").
- **Magento / Adobe Commerce: sin evidencia** — no se observó ningún marcador (`/static/`, cookies `form_key`, `/customer/section/load`, etc.). Tampoco se probaron sus endpoints canónicos (ver "Sin verificar").
- **PrestaShop, VTEX, Tiendanube, BigCommerce: sin evidencia** — ningún marcador observado.

**INFERIDO:** back end PHP a medida (o framework PHP sin marcadores visibles en lo leído), con catálogo propio claveado por ISBN, front de banners con timestamp en el nombre de archivo y sitemaps generados por el propio sistema (`/seo/`). El lenguaje del lado del servidor es PHP (cookie `PHPSESSID`); el framework concreto, la base de datos y el hosting de origen **no son observables** desde fuera y quedan en "Sin verificar".

## 2. Hosting / CDN / red

| Elemento | Resultado | Estado |
|---|---|---|
| CDN / proxy | Cloudflare: `Server: cloudflare`, `CF-RAY: a5a05e398881a0c6-LAX` (y `a5a05e4bdb2be486-SEA` en `www`), `cf-cache-status: DYNAMIC` en la home, `cf-cache-status: HIT` en `robots.txt`, `Nel: {"report_to":"cf-nel",…}`, `Report-To` a `a.nel.cloudflare.com`, `Speculation-Rules: "/cdn-cgi/speculation"` | OBSERVADO |
| `robots.txt` | `Disallow: /cdn-cgi/` — ruta interna de Cloudflare, confirmación adicional del proxy | OBSERVADO |
| `Content-Type: text/html; charset=utf-8` en la home | Sin marcador de servidor de origen (`nginx`/`Apache` ocultos tras Cloudflare) | OBSERVADO |
| IP / hosting de origen | Oculta tras Cloudflare; no se resolvió ni se expone en lo leído | NO VERIFICADO |
| HTTP/2-3, TLS, certificado | No observables con los medios de este frente (el lector no expone versión TLS ni emisor del certificado) | NO VERIFICADO |
| Rendimiento (TTFB, peso de página) | No medido; el lector no devuelve tiempos | NO VERIFICADO |

**INFERIDO:** arquitectura clásica de tienda mediana con desarrollo propio: origen (probablemente VPS/dedicado con PHP) + Cloudflare como CDN/WAF/DNS. Es el patrón opuesto al de F4T3 (Shopify sobre Cloudflare): aquí Cloudflare protege un origen propio, no una tienda SaaS.

## 3. Front-end / tema

- **OBSERVADO:** la home renderiza banners promocionales en WebP con nombre de archivo fechado (`20261113093227_hh mensajes en tazas de cafe preventa.webp`, `20261109155120_aniversario libros_hh.webp`, etc. — banners del 9 y 13 nov 2026, o sea, contenido fresco y activo), portadas de libros servidas como JPG por ISBN, e iconos de proceso de compra (`/assets/images/icons/1.png` … `4.png`).
- **OBSERVADO:** el texto visible de la home describe el flujo en 4 pasos: "Encuentra tu libro favorito" → "Agrégalo a tu carrito" → "Realiza el pago" → "Recibe tus productos", con "envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales" y teléfono **800 276 8266**.
- **NO VERIFICADO:** framework JS (React/Vue/vanilla), librerías, tema/plantilla y scripts de terceros. El lector de texto devuelve el contenido renderizado sin el `<head>`, sin etiquetas `<script>` ni HTML fuente, por lo que **ninguna tecnología de front-end es afirmable** desde este frente. No hay evidencia de SPA ni de PWA.
- **INFERIDO (débil):** sitio multi-página clásico (MPA) con render en servidor, coherente con sesión PHP, `Cache-Control: no-store` en la home y URLs propias. No es una conclusión, es la hipótesis más simple compatible con lo observado.

## 4. Catálogo, URLs y SEO técnico

**OBSERVADO** (`https://elsotano.com/robots.txt`, leído completo el 13 nov 2026; `Last-Modified: Fri, 21 Aug 2026 23:26:02 GMT`):

- `Sitemap: https://www.elsotano.com/sitemap.xml`
- El índice de sitemap lista **7 sub-sitemaps**: `https://www.elsotano.com/seo/sitemap1.xml` … `sitemap7.xml` (el contenido de los 7 **no pudo leerse**: el intento devolvió 429 del servicio de lectura y no se reintentó, ver §8).
- Rutas bloqueadas a Googlebot y a `*`: `/buscar`, `/busqueda`, `/cesta/`, `/favoritos/`, `/tagus/`, `/editorial/`, `/autor/`, `/libros-de/`, `/ebooks-de/`, `/categoria/`, `/noticias/`, `/cdn-cgi/`. Bingbot tiene su propio bloque con el mismo patrón.
- **Bloqueos totales (`Disallow: /`) a dos bots concretos: `Amazonbot` y `AwarioRssBot` / `AwarioSmartBot`.** Bloquear a Amazonbot — el crawler de Amazon, su mayor competidor y a la vez su mayor cliente según su director (ver fuentes) — es una decisión deliberada de no regalar catálogo al competidor.
- **Sin reglas para crawlers de IA** (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Google-Extended`): no aparecen en el `robots.txt`. Por defecto (`User-agent: *`) los crawlers de IA **no están bloqueados** en el contenido público; solo les aplican las rutas funcionales bloqueadas a todos (`/buscar`, `/cesta/`, etc.).

**OBSERVADO** (estructura de catálogo): portadas en `/sotano_covers/<prefijo>/<ISBN-13>.jpg` (ej. `/sotano_covers/9791387/9791387920357.jpg`), lo que indica catálogo claveado por ISBN — esperable en una librería y una ventaja operativa frente a un catálogo genérico de Shopify.

**INFERIDO:** la sección de ebooks vive bajo `/tagus/` — Tagus es la plataforma de ebooks de Casa del Libro (España); que El Sótano tenga una ruta propia `/tagus/` sugiere integración con ese ecosistema de lectura digital. **No verificado**: no se leyó ninguna página de ebook ni su lector.

## 5. Carrito y checkout

- **OBSERVADO:** existe carrito ("cesta"): la home dice "Agrégalo a tu carrito" y `robots.txt` bloquea `/cesta/`; existe lista de deseos (`/favoritos/`).
- **OBSERVADO:** el aviso de privacidad (leído vía búsqueda, `https://www.elsotano.com/aviso-de-privacidad`) menciona registro al portal para comprar en línea, alertas de disponibilidad, "Canasta de deseos" y número de Cliente Frecuente.
- **NO VERIFICADO:** el checkout real no es observable sin añadir al carrito ni iniciar sesión, y este frente no hace ninguna de las dos cosas. No se pudo comprobar: si el checkout es en el mismo dominio o redirige a una pasarela, si pide registro obligatorio, si calcula envío antes del pago, ni qué campos pide.
- **NO VERIFICADO:** si existe checkout como invitado, cupones en checkout, o facturación electrónica integrada (existe `/facturacion` según una fuente secundaria, Box Factura — ver §7 — pero no se leyó la página).

## 6. Métodos de pago

**Ningún método de pago es observable directamente en el sitio con los medios de este frente** (la home solo dice "Utiliza cualquiera de nuestras opciones para efectuar el pago", sin enumerarlas). Lo que hay es:

| Método | Fuente | Estado |
|---|---|---|
| Tarjeta de crédito y/o débito (16 dígitos, vencimiento, CVV; titular) | Picodi (`picodi.com/mx/el-sotano`, agregador de cupones, fuente **secundaria**) | NO VERIFICADO en el sitio |
| Mercado Pago | Picodi (secundaria) | NO VERIFICADO en el sitio |
| Depósito bancario / transferencia bancaria | Picodi (secundaria) | NO VERIFICADO en el sitio |
| Pago en +3,000 tiendas de conveniencia | Picodi (secundaria) | NO VERIFICADO en el sitio |
| "Datos bancarios para pago (con fines exclusivos para el cobro)" y "convenios para el cobro de productos" con instituciones | Aviso de privacidad de elsotano.com (leído vía búsqueda) | OBSERVADO (confirma cobro con terceros, sin nombrar la pasarela) |
| Meses sin intereses (MSI) | — | NO VERIFICADO (ninguna fuente lo afirma para El Sótano) |
| PayPal | — | NO VERIFICADO (no aparece en ninguna fuente consultada para este sitio) |
| Pasarela concreta (Conekta / OpenPay / Stripe / Mercado Pago como procesador de tarjetas) | — | NO VERIFICADO |

**INFERIDO:** la combinación tarjeta + Mercado Pago + transferencia + tiendas de conveniencia es el mix estándar de una tienda mexicana con desarrollo propio de esta antigüedad, y Picodi la describe con detalle plausible (incluye el requisito de ser titular de la tarjeta y que los pagos "solo son válidos dentro de la República Mexicana"). Pero **Picodi es un agregador y su página puede estar desactualizada**: sin lectura de la página de ayuda/pagos del propio sitio, esto no pasa de hipótesis bien fundada.

## 7. Logística / fulfillment (solo lo tocante al back end)

- **OBSERVADO (home):** "envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales".
- **Secundario (Picodi, NO VERIFICADO en el sitio):** paqueterías Estafeta, FedEx y Borzo; recoger en sucursal sin costo (disponible en Coyoacán e Infantil y Juvenil); envío gratis en compras superiores a **$450 MXN**.
- **OBSERVADO (fuente secundaria Box Factura):** existe `elsotano.com/facturacion` para facturar con el ticket (facturación electrónica para el cliente final, relevante para un back end que emite CFDI).
- **Empresa (OBSERVADO, aviso de privacidad):** LIBRERÍA DEL SÓTANO COYOACÁN S.A. DE C.V., Av. Miguel Ángel de Quevedo 209, Col. Romero de Terreros, CP 04310, CDMX. Contacto: 800 276 8266; `atencionaclientes@elsotano.com` (vía Picodi).
- **Contexto:** 14 sucursales según fuente secundaria (AnyFlip); el encargo de la WO indica 15+. La diferencia no se resolvió (ver "Sin verificar").

## 8. Terceros (analítica, píxeles, chat, email, reseñas)

- **OBSERVADO:** Cloudflare (NEL/reportes, ver §2). Es el único tercero confirmable con los medios de este frente.
- **NO VERIFICADO:** Google Analytics / GA4, Meta Pixel, TikTok Pixel, chat en vivo (Intercom/Zendesk/etc.), proveedor de email marketing (Klaviyo/Mailchimp/etc.), plataforma de reseñas, tag manager y cualquier script de terceros. **El lector de texto no expone el HTML fuente ni las peticiones de red**, por lo que la ausencia en lo leído **no prueba** ausencia en el sitio. Ninguna de estas tecnologías puede afirmarse ni descartarse.
- **NO VERIFICADO:** red de afiliados, retargeting, o integración con marketplaces (sí consta por fuentes secundarias que vende como tercero en Liverpool — "Vendido por: Librerías El sótano" — pero eso es marketplace saliente, no stack propio).

**Incidente de lectura (13 nov 2026):** el intento de leer `https://www.elsotano.com/seo/sitemap1.xml` devolvió **429 del servicio de lectura** (límite de peticiones del servicio, no del sitio). Conforme a las reglas de la WO, **no se reintentó**. Quedaron sin leer los 7 sub-sitemaps. Tampoco se probaron después los endpoints `/graphql`, `/wp-json/wp/v2/`, `/llms.txt` ni las páginas de ayuda/pagos del propio sitio, por el mismo límite.

## 9. Comercio agentic (agentes de IA, UCP, MCP)

| Señal | Resultado | Estado |
|---|---|---|
| `https://elsotano.com/agents.md` | HTTP 404 | OBSERVADO |
| `https://elsotano.com/.well-known/ucp` | HTTP 404 | OBSERVADO |
| `robots.txt` — reglas para `GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Google-Extended` | No existen; los crawlers de IA no están bloqueados explícitamente | OBSERVADO |
| `robots.txt` — bloqueo total a `Amazonbot` | `Disallow: /` | OBSERVADO |
| MCP / endpoints de compra para agentes | Ninguno observado | NO VERIFICADO |
| `/llms.txt` | No probado (límite 429, ver §8) | NO VERIFICADO |

**Lectura F2:** El Sótano está en **cero agentic**: sin `agents.md`, sin UCP, sin MCP visible y sin reglas de crawlers de IA. Paradójicamente, eso lo hace **más accesible que un sitio que bloquea bots**: un agente puede leer su catálogo público hoy (precios, stock, ISBN) sin barrera explícita, pero **no puede comprar** — no hay endpoint de checkout agentic y el checkout humano no es observable sin sesión. El bloqueo a Amazonbot muestra que sí piensan en quién se lleva su catálogo; simplemente aún no han pensado en los agentes de IA.

## 10. Seguridad y privacidad observables

- **OBSERVADO:** aviso de privacidad y aviso legal publicados (`/aviso-de-privacidad`, `/aviso-legal`), con razón social, domicilio y finalidades (envío de costos, promociones, solicitud y envío de pedidos, información de pago, datos bancarios para cobro).
- **OBSERVADO:** cabecera `X-XSS-Protection: 1; mode=block` y `Cache-Control: no-store` en la home (vía Cloudflare/PHP).
- **NO VERIFICADO:** certificado TLS (emisor, vigencia), HSTS, CSP, PCI-DSS, sellos de confianza, política de cookies visible, ni 3-D Secure. El lector no expone esa información.

## 11. Implicaciones para el dropshipping con IA + UGC (lectura del frente F2)

1. **El contraejemplo del SaaS:** El Sótano demuestra que una cadena mediana mexicana puede operar 20+ años con desarrollo propio en PHP + Cloudflare, sin Shopify. Costo: todo lo que en Shopify es un plugin (pagos, MSI, email, reseñas) aquí es desarrollo o integración a medida — y por eso mismo su stack es opaco desde fuera.
2. **El ISBN como clave primaria:** su catálogo está claveado por ISBN (`/sotano_covers/<ISBN>.jpg`). Para un dropshipping de libros o de catálogo con identificador estándar, copiar este patrón (SKU = identificador universal del producto) simplifica sincronización de stock y precios con proveedores.
3. **El hueco agentic es una ventana:** sin `agents.md` ni UCP, El Sótano no vende a agentes; pero tampoco los bloquea. Un nuevo entrante que nazca con `agents.md` + UCP desde el día uno compite en un canal donde el incumbente mediano aún no existe.
4. **Pagos a la mexicana como requisito, no como extra:** si el mix de Picodi es correcto (tarjeta + Mercado Pago + transferencia + tiendas de conveniencia), el estándar mínimo para competir en MX incluye pagar sin tarjeta. Un dropshipping nuevo no puede lanzar solo con Stripe.
5. **Cloudflare como piso común:** tanto F4T3 (Shopify) como El Sótano (propio) usan Cloudflare. Para el nuevo proyecto, Cloudflare delante — sea cual sea el origen — es la decisión de infraestructura con mejor relación costo/protección observada en la muestra.

---

## Sin verificar

- Contenido de los 7 sub-sitemaps (`/seo/sitemap1.xml` … `sitemap7.xml`): lectura bloqueada por 429 del servicio de lectura, sin reintento.
- Endpoint `/wp-json/wp/v2/` (descarte de WordPress/WooCommerce) y `/graphql` (descarte de headless/Magento): no probados por el mismo límite.
- `/llms.txt`: no probado.
- Métodos de pago reales en el sitio (página de ayuda/pagos propia y checkout): no observables sin añadir al carrito ni iniciar sesión; la lista de Picodi es secundaria y puede estar desactualizada. MSI, PayPal y pasarela concreta sin confirmar.
- Analítica, píxeles, chat, email marketing, reseñas y tag manager: no observables porque el lector no expone el HTML fuente.
- Hosting de origen, IP, framework PHP concreto, base de datos, TLS/certificado, HSTS/CSP, PCI-DSS.
- Número exacto de sucursales (14 según AnyFlip vs. 15+ según el encargo).
- Existencia y contenido real de `/facturacion` y de la sección `/tagus/` (ebooks).
- Si el checkout exige registro o permite invitado; si hay facturación integrada en el checkout.

---

## Resumen ejecutivo

- El Sótano **no corre sobre Shopify** (`/products.json` da 404) ni muestra marcadores de ninguna plataforma SaaS: es un **desarrollo propio sobre PHP** (cookie `PHPSESSID`, rutas a medida en español, sitemaps en `/seo/`, portadas claveadas por ISBN).
- Su infraestructura es **origen PHP oculto tras Cloudflare** (`Server: cloudflare`, `CF-RAY`, `cf-cache-status`, `/cdn-cgi/`), el mismo piso de CDN que F4T3 pero protegiendo un origen propio en lugar de una tienda SaaS.
- El catálogo es público y rastreable (7 sub-sitemaps, URLs por ISBN), y su `robots.txt` **bloquea totalmente a Amazonbot** pero **no menciona crawlers de IA**: los agentes pueden leer el catálogo, pero no hay forma de comprar por agente.
- En **comercio agentic está en cero**: `/agents.md` y `/.well-known/ucp` devuelven 404, sin MCP visible.
- Los **métodos de pago no pudieron confirmarse en el propio sitio** (checkout no observable sin sesión): la única lista disponible es secundaria (Picodi: tarjeta, Mercado Pago, transferencia y tiendas de conveniencia) y queda como hipótesis, con MSI y pasarela sin verificar.
- Lección para el proyecto: un entrante nuevo puede diferenciarse donde El Sótano no existe — **checkout agentic desde el día uno, pagos sin tarjeta incluidos, y catálogo claveado por identificador estándar** — sin necesidad de replicar su desarrollo propio de 20 años.

---

## Fuentes (consultadas 13 nov 2026)

- https://elsotano.com/ (home, leída 13 nov 2026 20:01 UTC)
- https://elsotano.com/robots.txt (leído completo; `Last-Modified: Fri, 21 Aug 2026`)
- https://www.elsotano.com/sitemap.xml (índice: 7 sub-sitemaps `/seo/sitemap1-7.xml`)
- https://elsotano.com/products.json (404), https://elsotano.com/agents.md (404), https://elsotano.com/.well-known/ucp (404)
- https://www.elsotano.com/seo/sitemap1.xml (intento de lectura: 429 del servicio de lectura, sin reintento)
- https://www.elsotano.com/aviso-de-privacidad y https://www.elsotano.com/aviso-legal (vía búsqueda web)
- https://www.picodi.com/mx/el-sotano (formas de pago, entrega y envío — fuente secundaria)
- https://www.boxfactura.com/blog?p=75 (facturación en `elsotano.com/facturacion` — fuente secundaria)
- https://anyflip.com/nselg/kfxr/basic (historia: tienda virtual desde ago 2002, 14 sucursales — fuente secundaria)
- Cabeceras HTTP vía `curl -I` (13 nov 2026 20:01 UTC): `Server: cloudflare`, `CF-RAY`, `Set-Cookie: PHPSESSID`, `Expires: Thu, 19 Nov 1981 08:52:00 GMT`
