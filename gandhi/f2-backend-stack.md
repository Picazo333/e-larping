# F2 — Back end + stack · Librerías Gandhi (gandhi.com.mx)

- **Frente:** F2 (Back end + stack) — Fase 2, WO-E-LARPING
- **Sitio:** Librerías Gandhi — https://gandhi.com.mx/ (https://www.gandhi.com.mx/)
- **Fecha de investigación:** 13 nov 2026
- **Método:** `browser.open` (lectura de texto de páginas y endpoints públicos) y `browser.search` (búsqueda web). Sin navegador en vivo, sin inicio de sesión, sin añadir nada al carrito, sin contacto con la empresa. No se extrajeron datos personales.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto directamente en una fuente leída), **INFERIDO** (conclusión razonable desde evidencia observada, marcada como tal) u **NO VERIFICADO** (no se pudo comprobar con los medios de este frente).

---

## 1. Plataforma — VTEX (confirmado por tres vías independientes)

### OBSERVADO

**1.1. `robots.txt` es un `robots.txt` de VTEX, casi literal.**
Leído el 13 nov 2026 en https://gandhi.com.mx/robots.txt (copia cacheada del 6 may 2026 según el lector). Contiene rutas y parámetros exclusivos de VTEX:

- `Allow: /_v/public/graphql/v1?workspace=`, `/_v/segment/graphql/v1?workspace=`, `/_v/private/graphql/v1?workspace=`
- `Allow: /api/vtexid/pub/authentication/providers?scope=`
- `Allow: /_v/segment/routing/vtex.store@2.x/*device=*`
- `Allow: /api/catalog_system/pub/products/search?fq=`, `/api/sessions?items=*`
- `Allow: /arquivos/ids/*width=*` (imágenes VTEX)
- `Disallow: /checkout/`, `/checkout/*`, `/checkout/cart/add`, `/Sistema/`, `/espiar/`, `/busca/`, `/quick-view/`, `/lista-de-deseos`, `/wishlist`
- `Disallow: /*.aspx` (resto de una plataforma anterior — ver §1.3)
- `Sitemap: https://www.gandhi.com.mx/sitemap.xml`

**1.2. La API pública de catálogo de VTEX responde en vivo y devuelve JSON de producto.**
Leído el 13 nov 2026, 20:01 UTC:

- URL probada: `https://gandhi.com.mx/api/catalog_system/pub/products/search?fq=C:1&_from=0&_to=2`
- Devuelve un array JSON con `productId`, `productName`, `brandId`, `linkText`, `categories`, `items[].sellers[]`, `sellers[].sellerName: "Gandhi"`, `sellerId: "1"`, `addToCartLink: "https://www.gandhi.com.mx/checkout/cart/add?sku=8126561&qty=1&seller=1&sc=1&price=35010…"`, `commertialOffer`, `PaymentOptions`, `PriceToken` (JWT firmado por `session/data-signer`, `accountName: "gandhi"`, `salesChannel: "1"`).
- Ejemplo leído: "La conquista perfecta" (productId `8566744`, SKU `8126561`, EAN/ISBN `9786073878746`), precio $350.10, lista $389.00, `AvailableQuantity: 99999`, `IsAvailable: true`.
- Las imágenes de producto viven en `https://gandhi.vteximg.com.br/arquivos/ids/18741312/Imagen.jpg?v=…` — dominio de imágenes de VTEX (`vteximg.com.br`), con `accountName` Gandhi.

**1.3. Las URLs de producto contienen el enrutador de VTEX Store Framework.**
En resultados de búsqueda del 13 nov 2026, las URLs canónicas de producto incluyen el segmento `/_v/segment/routing/vtex.store@2.x/product/<id>/<slug>/p`, por ejemplo el Snitch Dorado de Harry Potter y "Jujutsu Kaisen, Vol. 26". Ese prefijo es el enrutador de VTEX IO / Store Framework, no una ruta de Shopify, Magento ni WooCommerce.

**1.4. VTEX publica a Gandhi como caso de éxito y describe el stack.**
https://www.vtex.com/es-mx/casos-de-clientes/librerias-gandhi-mantiene-su-liderazgo-digital-con-estrategias-omnichannel-para-miles-de-clientes/ (leído vía búsqueda, 13 nov 2026):

- Productos en uso: **Omnichannel, VTEX Sales App**; **VTEX OMS (Order Management System)**.
- La nota dice que Gandhi migró "de una arquitectura monolítica a una estrategia omnicanal unificada" y que VTEX OMS + Sales App unifican stock, habilitan el "pasillo infinito" en sucursal y permiten fusionar compras web/tienda/teléfono en un solo carrito y pago.
- Contexto que da el propio caso (cifras del vendor, no verificadas por este frente): más de 50 tiendas físicas, 35,000–40,000 SKUs por tienda, más de 4.5 millones de ebooks; Efrén Tapia, Chief Digital Officer; Gandhi lanzó su primer ecommerce en 1996.
- La misma nota afirma: 70% de los pedidos se recogen en tienda y 30% se envían a domicilio; 8 de cada 10 compradores que regresan adquieren un producto adicional. Son cifras declaradas por VTEX/Gandhi en ese caso, **no verificadas de forma independiente**.

### INFERIDO

- **La tienda corre sobre VTEX (SaaS, arquitectura VTEX IO / Store Framework v2.x).** La convergencia de robots.txt, API de catálogo en vivo y caso oficial no deja una lectura alternativa razonable.
- **Hay un pasado pre-VTEX (probablemente .NET/ASPX).** El `Disallow: /*.aspx` del robots.txt y el `Disallow: /Sistema/404` son restos de una plataforma anterior; la plataforma actual no es esa. La fecha o el proveedor de la migración no se observó.
- **Es una instalación enterprise/omnichannel, no una tienda VTEX estándar pequeña:** OMS + Sales App + catálogo de decenas de miles de SKUs + red física son el perfil de VTEX para retail grande en LATAM.

### NO VERIFICADO / Descartado con evidencia

- **Shopify: sin ningún marcador.** No se observó `/products.json`, tema Liquid, `cdn.shopify.com`, `myshopify.com` ni checkout de Shopify. OJO: el endpoint `/products.json` se intentó leer y la lectura falló por límite de tasa (429, ver §7); por tanto la ausencia de Shopify se apoya en la evidencia positiva de VTEX (que es excluyente: un sitio no corre a la vez en VTEX y Shopify como plataforma principal), no en un 404 de `/products.json`.
- **Magento / Adobe Commerce y WooCommerce / WordPress: sin ningún marcador** en robots.txt, URLs, API ni caso oficial. No se observó `wp-`, `rest_route`, `static/version`, `customer/section/load` ni ninguna ruta típica de esas plataformas.
- **Versión exacta de VTEX / plan contratado / coste:** no observable desde fuera; no se inventa.
- **Tema/nombre del storefront VTEX:** no se observó en el texto extraído (ver §3).

---

## 2. Hosting / CDN / infraestructura

### OBSERVADO

- El dominio canónico es `gandhi.com.mx` / `www.gandhi.com.mx`, con HTTPS.
- Las imágenes de producto se sirven desde `gandhi.vteximg.com.br` (infraestructura de imágenes de VTEX).
- Las APIs (`/api/catalog_system/…`, `/api/vtexid/…`, `/_v/…`) responden bajo el propio dominio `gandhi.com.mx`, lo que es el comportamiento estándar de VTEX (el storefront y las APIs van detrás del dominio del merchant).
- La home, leída el 13 nov 2026 (copia de las 18:20 UTC), muestra: "Envío gratis siempre a todo México", secciones LOS MÁS LEÍDOS, NOVEDADES, LIBROS DE ARTE, EBOOK Y AUDIOLIBROS, HARRY POTTER, EDICIONES GANDHI, JUEGOS Y JUGUETES, RINCÓN DE OPORTUNIDADES y "Destacados de Buen Fin".

### INFERIDO

- **Hosting: VTEX Cloud (SaaS).** En VTEX el merchant no opera sus propios servidores web para el storefront: la plataforma, el checkout, el OMS y el CDN de imágenes son servicio de VTEX. Es inferencia directa del §1, no una lectura de cabeceras.
- **CDN de imágenes: VTEX (`vteximg.com.br`).** Observado en las URLs de imagen; el CDN del HTML/JS no se pudo determinar (ver abajo).

### NO VERIFICADO

- **Proveedor de CDN para el HTML/JS, cabeceras HTTP (`server`, `x-vtex-*`, `cf-ray`, etc.), IPs, DNS y registros WHOIS:** el lector de texto no expone cabeceras ni DNS, y no se hizo ninguna consulta de red directa. No se afirma Cloudflare, Akamai, AWS ni ningún otro.
- **Uptime, TTFB, rendimiento, WAF o protección anti-bots:** no medibles con este método. (El 403 devuelto por `/agents.md` y `/.well-known/ucp` sugiere que *algo* filtra esas rutas, pero no se puede atribuir a un WAF concreto — ver §6.)
- **Back-office / ERP / WMS propios de Gandhi:** fuera del alcance observable. El caso VTEX menciona OMS y Sales App; el caso Onebeat (ver §5) menciona gestión de inventario con IA, pero el ERP contable/logístico interno no se observó.

---

## 3. Front-end / tema

### OBSERVADO

- Estructura de la home (texto extraído): navegación "Librerías, Eventos, Tinta, Radio Gandhi, Ayuda, Tarjetas de regalo"; secciones editoriales por categoría; promoción Buen Fin.
- Las páginas de producto incluyen precio, precio con descuento, FAQ, "Additional Details" y un bloque de comentarios con el texto "Por favor, inicia sesión para escribir un comentario" y "Cargando comentarios…" (visto en snippets de búsqueda de producto del 13 nov 2026).
- Las URLs de producto usan el patrón `/_v/segment/routing/vtex.store@2.x/product/<id>/<slug>/p` y las de catálogo `/<slug>/p`; el parámetro `?__pickRuntime=*device=*` aparece permitido en robots.txt (típico de VTEX IO para elegir runtime por dispositivo).

### INFERIDO

- **Front-end: VTEX Store Framework (VTEX IO), versión 2.x del store** — inferido del segmento `vtex.store@2.x` en las URLs y del `__pickRuntime` en robots.txt. Store Framework es React + GraphQL por diseño de VTEX; esa afirmación sobre React es conocimiento general de la plataforma, no algo observado en el fuente de Gandhi.
- **Diseño a medida sobre Store Framework** (no un tema genérico de galería): la home es editorial, con secciones propias (Tinta, Radio Gandhi, Ediciones Gandhi) y marca fuerte. Es una lectura de la estructura observada, no una inspección del código del tema.

### NO VERIFICADO

- **Nombre del tema, lista de apps VTEX instaladas, versión de React, bundler, CSS, fuentes o JS de terceros:** la extracción de texto del lector elimina el HTML/fuente, por lo que no se pudo inspeccionar `<script>`, `<link>` ni el `__RUNTIME__` de VTEX. No se afirma ninguna librería front-end concreta.
- **PWA / app móvil / rendimiento Core Web Vitals:** no verificado.
- **Accesibilidad y responsive reales:** no comprobables por lectura de texto.

---

## 4. Métodos de pago (checkout real NO recorrido)

No se añadió nada al carrito ni se inició sesión, por orden del encargo. Todo lo de pago sale de la API pública de catálogo (que expone los medios configurados por SKU) y de fuentes secundarias citadas como tales.

### OBSERVADO (API de catálogo VTEX, 13 nov 2026, producto "La conquista perfecta")

Medios de pago configurados para ese SKU, con su grupo VTEX:

| Medio (nombre en la API) | Grupo VTEX | ID |
|---|---|---|
| American Express | creditCardPaymentGroup | 1 |
| Visa | creditCardPaymentGroup | 2 |
| Mastercard | creditCardPaymentGroup | 4 |
| PayPal | payPalPaymentGroup | 12 |
| Vale (tarjeta de regalo / gift card) | giftCardPaymentGroup | 16 |
| Aplazo Payment | aplazoPaymentGroup | 174 |
| Pago en efectivo | custom201PaymentGroupPaymentGroup (custom) | 201 |

- En ese ejemplo todos los medios se ofrecían en **1 sola exhibición ("à vista"), sin intereses** (`NumberOfInstallments: 1`, `InterestRate: 0.0`, `Value: 350.1`). Es decir, en esa muestra **no se observaron meses sin intereses en el JSON**.
- El `addToCartLink` confirma que el checkout es el de VTEX (`/checkout/cart/add?sku=…&seller=1&sc=1`).
- El robots.txt bloquea `/checkout/`, `/checkout/*` y `/checkout/cart/add` a crawlers, coherente con checkout VTEX.

### INFERIDO

- **Checkout: VTEX Checkout (nativo)**, con autenticación VTEX ID (`/api/vtexid/pub/authentication/providers` permitido en robots.txt).
- **Aplazo = compra ahora, paga en quincenas sin tarjeta de crédito** (es el producto estándar de Aplazo; la mecánica de 5 quincenas se describe en la ayuda de Tiendanube, fuente secundaria, no en Gandhi).
- **"Pago en efectivo" (medio custom 201)** es probablemente pago en tienda / contraentrega / depósito en efectivo; el nombre exacto en el checkout y sus condiciones no se observaron.

### NO VERIFICADO

- **Meses sin intereses (MSI):** no aparecen en la muestra de la API. Existe un documento promocional de terceros (Contentstack, `gcp-na-assets.contentstack.com`, "Meses sin intereses con Paypal", vigencia 11 sep–1 oct 2026) que habla de hasta 12 MSI con PayPal en Gandhi (compra mínima $500 MXN), y una nota que menciona hasta 18 MSI con PayPal; son **promociones fechadas y de fuente externa, no el checkout actual**. No se afirma que hoy haya MSI ni a cuántos meses.
- **SPEI / transferencia, OXXO, Mercado Pago, Kueski, tarjetas de débito, Apple Pay / Google Pay, CoDi:** no aparecen en la muestra de la API leída. No se afirma ni se niega su existencia: la lista de medios puede variar por SKU, canal de venta (sc=1) o fecha, y solo se leyó un producto.
- **Pasarela / adquirente detrás de las tarjetas (qué procesador cobra Amex/Visa/MC):** no observable en la API de catálogo.
- **Flujo real de checkout (pasos, login obligatorio, envío/recoger en tienda, facturación CFDI):** no recorrido, por diseño del encargo. La opción "recoger en tienda" es coherente con el caso VTEX (70% pickup), pero no se verificó en el checkout.
- **Tarjetas de regalo Gandhi ("Tarjetas de regalo" en la navegación) y el "Vale":** se observan como concepto en navegación y en la API, pero sus términos no se leyeron.

---

## 5. Terceros (analítica, píxeles, chat, email, reseñas) — solo lo visible

### OBSERVADO

- **Tráfico de Meta Ads:** las URLs de producto indexadas traen parámetros UTM de campañas de Facebook (`utm_source=Facebook_Mobile_Feed&utm_medium=paidsocial&utm_campaign=lvly_fb_genero_perf_vtas…`, `utm_campaign=lvly_fb_winback_perf_vtas…`). Esto prueba que Gandhi pauta en Meta (o pautaba cuando se rastrearon esas URLs), no que tenga instalado el píxel de Meta — aunque en VTEX el píxel es la vía estándar para ese tráfico.
- **Reseñas/comentarios en producto:** los snippets muestran "Cargando comentarios…" y "Por favor, inicia sesión para escribir un comentario" en páginas de producto. Hay, por tanto, un sistema de comentarios/reseñas en la ficha.
- **Retail Media:** el caso VTEX lista "Retail Media for Advertisers" entre los productos en uso.
- **Inventario con IA (back-office, no front-end):** caso Onebeat (https://onebeat.co/es/case-studies/gandhi/, y nota en periodismoyambiente.com.mx, ago 2025): Gandhi implantó Onebeat (Adaptive Inventory / Buffer Dinámico, machine learning) para gestionar +100,000 SKUs en ~50 tiendas y canal online; la nota declara −32%/−36% de excedentes y disponibilidad de SKU del 62% al 86% en seis meses. Son cifras del vendor; se citan, no se verifican.
- **Ebooks:** el caso VTEX menciona +4.5 millones de ebooks y el subdominio histórico `digital.gandhi.com.mx` aparece en sus condiciones de uso; la tienda de ebooks/audiolibros es una sección visible de la home.

### INFERIDO (débil — se marca como tal)

- El sistema de comentarios es probablemente el nativo de VTEX o una app de reseñas sobre VTEX; no hay evidencia para nombrar proveedor (Yotpo, Trustpilot, etc.).
- Es *esperable* (no observado) que un VTEX enterprise de este tamaño tenga Google Analytics/GTM, píxel de Meta y herramienta de email — pero este frente no pudo ver ni un solo script, así que **no se lista ninguno como hecho**.

### NO VERIFICADO

- **Google Analytics / GA4, Google Tag Manager, Meta Pixel, TikTok Pixel, chat en vivo (proveedor y nombre), email marketing (Klaviyo, Mailchimp, VTEX Message Center u otro), reseñas (proveedor), buscador interno (VTEX Intelligent Search u otro), recomendaciones, CRM/CDP:** ninguno observable con lectura de texto, porque el lector extrae texto y descarta scripts, cabeceras y red. Quedan todos sin verificar; no se inventa ninguno.
- **Redes sociales y su integración en la tienda:** no revisadas en este frente (corresponden a otro frente del informe).

---

## 6. Comercio agentic (agents.md, UCP, MCP, robots e IA)

### OBSERVADO

- **`/agents.md` → HTTP 403 (acceso denegado).** Intentado el 13 nov 2026 en https://gandhi.com.mx/agents.md. El lector devolvió 403. Un 403 no es un 404: el recurso (o la ruta) está bloqueado por el servidor/WAF, pero **no prueba ni que exista un `agents.md` ni que no exista**.
- **`/.well-known/ucp` → HTTP 403 (acceso denegado).** Intentado el 13 nov 2026 en https://gandhi.com.mx/.well-known/ucp. Misma lectura: 403, sin contenido. No prueba ni existencia ni ausencia de un endpoint UCP (Universal Commerce Protocol).
- **`robots.txt` no menciona ningún crawler de IA** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) ni en `Allow` ni en `Disallow`: solo hay reglas genéricas `User-agent: *`. Tampoco declara `llms.txt`.
- **Búsqueda web de `"gandhi.com.mx" "llms.txt" OR "agents.md" OR UCP` (13 nov 2026): sin ningún resultado pertinente** — los resultados fueron sobre AGENTS.md de Android Studio y apps de Shopify, no sobre Gandhi.
- **El `robots.txt` sí deja rastreables endpoints de máquina:** `Allow: /_v/public/graphql/v1?workspace=`, `/_v/segment/graphql/v1?workspace=`, `/_v/private/graphql/v1?workspace=`, `/api/catalog_system/pub/products/search?fq=`, `/api/sessions?items=*`. Es decir, el catálogo y el GraphQL público de VTEX están explícitamente permitidos a crawlers.

### INFERIDO

- **No hay evidencia pública de preparación agentic dedicada** (sin `agents.md` legible, sin `llms.txt` hallado, sin UCP/MCP anunciado). La tienda es, en la práctica, *legible por máquinas* por la vía VTEX (catálogo JSON público + GraphQL permitido en robots), pero eso es una propiedad de la plataforma, no un programa agentic de Gandhi.
- El 403 en ambas rutas podría ser una regla genérica del WAF/CDN de VTEX que bloquea rutas no enrutadas, o un bloqueo del propio lector; no se puede distinguir con este método y no se especula más.

### NO VERIFICADO

- **`llms.txt` / `llms-full.txt`:** no se intentó leer directamente antes del límite de tasa (ver §7); queda sin verificar. (La búsqueda no halló ninguna referencia a él.)
- **MCP (Model Context Protocol), UCP real, checkout agentic, feed para agentes, `/.well-known/` en general:** sin verificar.
- **Política hacia crawlers de IA (bloqueo o permiso):** no declarada en robots.txt; sin verificar.
- **Presencia en ChatGPT / Perplexity / Google AI shopping:** no comprobada.

---

## 7. Incidencias de lectura (límite de tasa) — qué quedó sin leer y por qué

Durante la investigación el servicio de lectura devolvió **HTTP 429 (límite de peticiones por ventana de tiempo)** tras las primeras lecturas correctas. Conforme a la regla del encargo, **no se reintentó nada que devolviera 429**.

- **Leído correctamente:** home (13 nov, 18:20 UTC), `robots.txt` (copia del 6 may 2026), API de catálogo VTEX (13 nov, 20:01 UTC).
- **Devuelto con 403 (no es 429; se anota una sola vez, sin reintento):** `/agents.md` y `/.well-known/ucp` — ver §6.
- **Sin leer por 429 (quedan en "Sin verificar"):** `https://gandhi.com.mx/products.json` (prueba negativa de Shopify), `https://gandhi.com.mx/sitemap.xml` (declarado en robots.txt), `https://gandhi.com.mx/llms.txt`, y cualquier página de ayuda/pagos del propio sitio. No se afirma sobre su contenido.
- Las búsquedas web (`browser.search`) siguieron funcionando tras el 429 de lectura y son la fuente del caso VTEX, Onebeat y los snippets de producto.

---

## 8. Sin verificar (resumen)

1. Cabeceras HTTP, DNS, IPs, proveedor de CDN del HTML/JS, WAF concreto y rendimiento.
2. Nombre del tema VTEX, apps VTEX instaladas, versión de React/GraphQL y cualquier librería front-end.
3. Analítica (GA4/GTM), píxeles (Meta/TikTok), chat en vivo, email/CRM, proveedor de reseñas y buscador interno.
4. Checkout real paso a paso; MSI vigentes; SPEI/OXXO/Mercado Pago/Kueski/débito/wallets; adquirente de tarjetas; condiciones del "Pago en efectivo" y de las tarjetas de regalo.
5. `llms.txt`, MCP, UCP real, checkout agentic y política frente a crawlers de IA.
6. Contenido de `sitemap.xml` y de `/products.json` (prueba negativa de Shopify) — bloqueados por 429, no reintentados.
7. Cifras del caso VTEX (50+ tiendas, 35–40k SKUs, 4.5M ebooks, 70/30 pickup/envío) y del caso Onebeat (−32/−36% excedentes, disponibilidad 62%→86%): declaradas por los vendors, no verificadas de forma independiente.
8. Existencia o no de `agents.md` y de `/.well-known/ucp`: solo se sabe que responden 403; el 403 no resuelve la pregunta.

---

## 9. Resumen ejecutivo

- **Plataforma: VTEX, confirmado.** Robots.txt con rutas `/_v/`, `/api/vtexid`, `/api/catalog_system` y `vtex.store@2.x`; API pública de catálogo VTEX respondiendo JSON en vivo con `accountName: "gandhi"` e imágenes en `gandhi.vteximg.com.br`; y caso oficial VTEX (OMS + Sales App, omnicanal). Shopify, Magento y WooCommerce no tienen ningún marcador.
- **Front-end: VTEX Store Framework 2.x (IO)**, inferido del enrutador `vtex.store@2.x` y `__pickRuntime`; tema a medida de marca editorial. Nombre del tema y librerías, sin verificar (el lector de texto no expone el fuente).
- **Hosting: VTEX Cloud (SaaS)** por inferencia directa; imágenes en el CDN de VTEX. CDN del HTML, cabeceras, DNS y rendimiento, sin verificar.
- **Pagos (sin recorrer el checkout):** tarjetas Amex/Visa/Mastercard, PayPal, Vale (gift card), Aplazo y "Pago en efectivo" — observados en la API de catálogo; checkout VTEX nativo con VTEX ID. MSI no aparecieron en la muestra; SPEI, OXXO, Mercado Pago y wallets quedan sin verificar.
- **Terceros:** solo se observan UTM de Meta Ads (pauta en Meta), comentarios en ficha de producto y Retail Media; Onebeat con IA gestiona el inventario en back-office según su caso. Analítica, píxeles, chat, email y proveedor de reseñas: sin verificar, no se inventan.
- **Agentic: sin evidencia de programa dedicado.** `/agents.md` y `/.well-known/ucp` devuelven 403 (no prueban existencia ni ausencia); robots.txt no menciona crawlers de IA ni `llms.txt`. El catálogo JSON y el GraphQL público de VTEX están, eso sí, explícitamente permitidos a crawlers.
- **Limitación del frente:** el servicio de lectura devolvió 429 a mitad del trabajo; por regla no se reintentó, así que `sitemap.xml`, `/products.json`, `llms.txt` y las páginas de ayuda/pagos quedan sin leer y listadas en §8.

---

## Fuentes (13 nov 2026)

- https://gandhi.com.mx/ — home (lectura de texto, copia 18:20 UTC)
- https://gandhi.com.mx/robots.txt — copia cacheada 6 may 2026
- https://gandhi.com.mx/api/catalog_system/pub/products/search?fq=C:1&_from=0&_to=2 — JSON en vivo, 20:01 UTC
- https://www.vtex.com/es-mx/casos-de-clientes/librerias-gandhi-mantiene-su-liderazgo-digital-con-estrategias-omnichannel-para-miles-de-clientes/
- https://onebeat.co/es/case-studies/gandhi/ y https://www.periodismoyambiente.com.mx/2025/08/02/librerias-gandhi-maximiza-la-eficiencia-operativa-con-machine-learning-y-algoritmos-de-ultima-generacion/
- https://gandhi.com.mx/agents.md y https://gandhi.com.mx/.well-known/ucp — ambos HTTP 403
- Búsquedas web del 13 nov 2026: "gandhi.com.mx VTEX", "Librerías Gandhi VTEX caso éxito", "gandhi.com.mx métodos de pago Aplazo PayPal", "gandhi.com.mx llms.txt agents.md UCP" (esta última sin resultados pertinentes).
