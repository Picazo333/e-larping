# F2 — Back end + stack · Cyberpuerta.mx

- **Proyecto:** e-larping — WO-E-LARPING, Fase 2 (reverse engineering de e-commerce mexicanos)
- **Sitio:** Cyberpuerta — https://cyberpuerta.mx/ — e-commerce mexicano de tecnología / hardware y cómputo
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F2 — back end + stack
- **Método:** solo fuentes públicas. Lectura de la página principal y de `robots.txt` mediante el lector de páginas; búsquedas web públicas de corroboración. Sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto con la tienda.
- **Etiquetas usadas en todo el documento:** **OBSERVADO** (visto, con URL y fecha) · **INFERIDO** (con evidencia y confianza) · **HIPÓTESIS** (derivada, marcada como tal) · **NO VERIFICADO** (no se pudo comprobar con las fuentes consultadas).

## Resumen ejecutivo

- **OBSERVADO — Plataforma: OXID eShop (OXID eSales, Alemania).** El `robots.txt` de cyberpuerta.mx está lleno de marcadores propios e inequívocos de OXID eShop. No es Shopify, Magento ni WooCommerce (ver §1 y §8).
- **NO VERIFICADO — Versión y edición de OXID.** No se pudo leer el HTML crudo ni ninguna cabecera, así que no hay número de versión ni edición (Community / Professional / Enterprise) observable.
- **NO VERIFICADO — Hosting, servidor de origen y CDN.** No se obtuvieron cabeceras HTTP, DNS ni IP. Solo se observó el subdominio propio `cdn.cyberpuerta.mx` sirviendo archivos.
- **OBSERVADO — PayPal como método de pago, con meses sin intereses.** Página propia del sitio «Compra seguro con PayPal». El resto de los métodos de pago (Mercado Pago, tarjeta directa, SPEI, OXXO) quedó **NO VERIFICADO** para Cyberpuerta en esta investigación.
- **DESCONOCIDO — Comercio agentic (`/agents.md` y `/.well-known/ucp`).** Las lecturas fallaron sin código HTTP (ver §7 y Límites). Por regla de la WO, eso es desconocido, no ausencia.
- **NO VERIFICADO — Terceros (analítica, píxeles, chat, email, reseñas).** Sin HTML crudo no se pudo listar ningún script de terceros.

## 1. Plataforma

### 1.1 Veredicto

**OBSERVADO — Cyberpuerta corre sobre OXID eShop.** La evidencia es el propio `robots.txt` del sitio, leído el 13 nov 2026:

- **OBSERVADO —** `https://cyberpuerta.mx/robots.txt` (leído 13 nov 2026) contiene el enrutado clásico de OXID por parámetro `cl` (controller) y `fnc` (función):
  - `index.php?cl=newsletter`, `index.php?cl=basket`, `index.php?cl=account`, `index.php?cl=account_noticelist`, `index.php?cl=account_wishlist`, `index.php?cl=register`, `index.php?cl=forgotpwd`, `index.php?cl=moredetails`, `index.php?cl=review`, `index.php?cl=search`
  - `/*&fnc=tobasket`, `/*&fnc=tocomparelist`, `/*&addcompare=`
  - Sesiones OXID: `/*/sid/`, `/*?sid=`, `/*&sid=`, `/*?cur=`
- **OBSERVADO —** El mismo `robots.txt` bloquea las rutas internas típicas de una instalación OXID: `/admin/`, `/core/`, `/tmp/`, `/views/`, `/setup/`, `/log/`, `/out/productdescription/`, `/EXCEPTION_LOG.txt` (el log de excepciones propio de OXID). También aparecen directorios heredados de instalaciones/migraciones antiguas (`/_base/`, `/_clone/`, `/_clone2/`, `/_performance/`, `/modulesOLD/`, `/OLD/`, `/tmpml/`, `/_stash*`).
- **OBSERVADO —** Quedan restos de la instalación original en alemán, señal de una tienda OXID instalada con el idioma por defecto y luego traducida: `/warenkorb/` (carrito), `/mein-konto/` (mi cuenta), `/mein-merkzettel/`, `/mein-wunschzettel/`, `/konto-eroeffnen/`, `/passwort-vergessen/`, `/agb/` (términos), con sus equivalentes en inglés (`/en/cart/`, `/en/my-account/`, `/en/terms/`) y en español (`/carrito-de-compras/`). La convivencia de las tres rutas es típica de una tienda OXID antigua, multidioma, con URLs históricas sin limpiar.
- **OBSERVADO —** El sitemap declarado en `robots.txt` es `https://www.cyberpuerta.mx/export/google/sitemap-mx.xml`, ruta del módulo de exportación a Google propio del ecosistema OXID.
- **OBSERVADO —** La página principal (leída 13 nov 2026, https://cyberpuerta.mx/) se describe a sí misma como «el principal retailer de tecnología y hardware en México, una empresa mexicana fundada en 2008», con cuenta, lista de deseos y recomendaciones. Ese texto no aporta marcadores de plataforma; la identificación descansa en el `robots.txt`.

### 1.2 Qué NO es (ausencia de marcadores)

- **INFERIDO (confianza media) — No es Shopify.** En el `robots.txt` y en el texto visible de la home no aparece ningún marcador Shopify (`/products/`, `cart.js`, `myshopify`, `cdn.shopify.com`, `checkout.shopify`). **Pero** esta ausencia es débil: no se leyó el HTML crudo, donde vivirían esos marcadores. No se afirma como hecho cerrado.
- **INFERIDO (confianza media) — No es Magento / Adobe Commerce ni WooCommerce / WordPress.** No aparece ningún marcador de Magento (`/static/`, `/media/catalog/`, `mage/`) ni de WordPress/WooCommerce (`/wp-content/`, `/wp-json/`, `/tienda/` con estructura WP) en las fuentes leídas. Misma salvedad: sin HTML crudo, la ausencia no es concluyente.
- **OBSERVADO (corroboración externa) —** StoreLeads clasifica a `Cyberpuerta.mx` como tienda de «Custom Cart» (carrito propio / no SaaS) en su reporte de la categoría Laptops & Notebooks, actualizado el 30 oct 2026, con ranking 13,168. Fuente: https://storeleads.app/reports/custom/category/Computers/Computer+Hardware/Laptops+%26+Notebooks (consultado 13 nov 2026). Es una clasificación de un tercero, no una inspección del código, pero es coherente con OXID autoalojado y contradice una plataforma SaaS tipo Shopify.
- **NO VERIFICADO — Versión de OXID.** Ninguna fuente leída muestra número de versión (OXID 6.x / 7.x, por ejemplo). El HTML crudo y las cabeceras, donde a veces asoma, no se pudieron leer.
- **NO VERIFICADO — Edición (Community / Professional / Enterprise).** Nada en las fuentes públicas consultadas la revela.
- **NO VERIFICADO — Lenguaje / base de datos del back end.** OXID eShop es, por documentación pública del fabricante, una plataforma PHP con arquitectura modular (fuente: comparativa de IONOS México sobre OXID eShop, https://www.ionos.mx/digitalguide/online-marketing/vender-en-internet/encuentra-el-mejor-software-para-tu-tienda-online/). Que Cyberpuerta use esa base es **INFERIDO** de la plataforma identificada, no observado directamente en su servidor.

## 2. Hosting, origen y CDN

- **NO VERIFICADO — Proveedor de hosting.** No se obtuvieron cabeceras HTTP, registros DNS ni dirección IP (ver Límites: el lector de páginas devolvió 429 y no se reintentó).
- **NO VERIFICADO — Servidor web (Apache / Nginx) y ubicación del origen.** Sin cabeceras no hay nada que afirmar.
- **NO VERIFICADO — CDN contratado (Cloudflare, Akamai, etc.).** Ninguna fuente leída nombra un proveedor de CDN.
- **OBSERVADO — Existe el subdominio propio `cdn.cyberpuerta.mx` y sirve archivos.** Un resultado de búsqueda muestra un PDF alojado en `https://cdn.cyberpuerta.mx/storage/articles/multimedia/5c4/75a/b28/5c475ab2840e4.pdf` (consultado 13 nov 2026). Eso prueba que el subdominio existe y entrega contenido estático; no prueba qué tecnología hay detrás (puede ser un origen propio, un bucket o un CDN con CNAME propio).
- **INFERIDO (confianza baja) — Infraestructura autoalojada / a medida, no SaaS.** Se apoya en dos cosas: la plataforma OXID autoalojada (§1) y la clasificación «Custom Cart» de StoreLeads. No es evidencia directa de su hosting.
- **HIPÓTESIS —** Por el volumen (catálogo de decenas de miles de productos y tráfico estimado por terceros en millones de visitas mensuales — ver §9) es probable que operen con varios servidores o un balanceador, pero es una hipótesis sin ninguna evidencia directa en esta investigación.

## 3. Front-end y tema

- **NO VERIFICADO — Framework JS / tema OXID.** No se descargó el HTML crudo: no se vieron scripts, hojas de estilo, ni el nombre del tema (los temas habituales de OXID son Flow y Wave, pero no hay evidencia de cuál usa Cyberpuerta, ni de si es uno de ellos o uno personalizado).
- **OBSERVADO — Estructura de URLs de producto tipo OXID con `.html` final.** Ejemplo visto en un resultado de búsqueda (foro EEVblog, consultado 13 nov 2026): `https://www.cyberpuerta.mx/Energia/Proteccion-Contra-Descargas/Reguladores-de-Voltaje/Regulador-Koblenz-ER-2550-134J-2000W-Entrada-90-145V-Salida-120V-6-Contactos.html` — ruta jerárquica por categoría + slug de producto + `.html`, coherente con el SEO-URL de OXID.
- **OBSERVADO —** La home ofrece registro de cuenta, seguimiento de pedidos, recomendaciones y lista de deseos (texto leído 13 nov 2026). Son funciones estándar de OXID, no un diferenciador de tema.
- **NO VERIFICADO —** Rendimiento, responsive, PWA, ni librerías front-end (jQuery, Bootstrap, etc.).

## 4. API pública de catálogo

- **OBSERVADO — El `robots.txt` bloquea `/api/` y endpoints web de cuenta:** `Disallow: /api/`, `Disallow: /web/account/login`, `Disallow: /web/account/logout` (leído 13 nov 2026). Que esas rutas existan como para bloquearlas indica que hay una superficie `/api/` y una capa `/web/` en el sitio.
- **INFERIDO (confianza baja) — Es probable que `/api/` sea la API GraphQL del storefront de OXID (disponible en OXID 6.5+/7) o una API propia, y que `/web/` sea su capa de servicios web.** Es una inferencia por el patrón de rutas y por la plataforma identificada; no se observó ninguna respuesta, esquema ni documentación de esa API.
- **NO VERIFICADO —** No se encontró documentación pública de API de catálogo de Cyberpuerta, ni un endpoint de productos consultable sin autenticación, ni feeds públicos de catálogo distintos del sitemap de Google declarado en `robots.txt`. No se intentó llamar a `/api/` (la propia tienda lo desautoriza en `robots.txt` y no forma parte del alcance de lectura pública de esta investigación).
- **NO VERIFICADO —** Integración con marketplaces (Mercado Libre, Amazon) desde el back end, ERP o PIM. Nada en las fuentes consultadas lo muestra.

## 5. Checkout y métodos de pago

Alcance: no se añadió nada al carrito ni se llegó al checkout. Lo que sigue es solo lo visible en páginas informativas y en el `robots.txt`.

- **OBSERVADO — PayPal es método de pago, con meses sin intereses.** Página propia del sitio «Compra seguro con PayPal» (http://www.cyberpuerta.mx/Compra-seguro-con-PayPal/, índice de búsqueda rastreado hace menos de 1 hora el 13 nov 2026): «Compra en la tienda con PayPal a meses sin intereses», «cuando hagas checkout en nuestra tienda, podrás elegir modo de pago PayPal y hacer login directamente en la compra». **Nota de método:** la página se confirmó vía el índice del buscador; la lectura directa de esa URL devolvió 429 y, por regla, no se reintentó (ver Límites).
- **INFERIDO (confianza baja) — Aceptación de American Express.** American Express México lista a Cyberpuerta (`https://www.cyberpuerta.mx`) entre los comercios participantes de Shop Small Online (PDF de americanexpress.com, consultado 13 nov 2026). Es un indicio de que aceptan Amex, no una confirmación en el checkout.
- **NO VERIFICADO — Mercado Pago.** No se encontró ninguna página de cyberpuerta.mx que lo mencione como método de pago en las búsquedas realizadas. Es el procesador más habitual en México y sería el candidato obvio, pero afirmarlo para Cyberpuerta sin evidencia sería inventar: queda **NO VERIFICADO**.
- **NO VERIFICADO —** Pago directo con tarjeta (Visa / Mastercard) en el propio checkout, SPEI / transferencia, pago en efectivo en OXXO, Kueski Pay / Aplazo / otro BNPL, y meses sin intereses por banco. Ninguno aparece en una fuente de Cyberpuerta consultada en esta investigación.
- **NO VERIFICADO —** Pasos del checkout, compra como invitado, costos de envío en checkout, ni proveedor de la pasarela (si PayPal es el único procesador o hay otro detrás de la tarjeta).
- **OBSERVADO —** El `robots.txt` bloquea las rutas de carrito y cuenta (`/carrito-de-compras/`, `/en/cart/`, `index.php?cl=basket`, `index.php?cl=account`), lo que confirma que el flujo de compra vive dentro del propio OXID y no en un checkout externo tipo Shopify (coherente con §1).

## 6. Terceros (analítica, email, reseñas, chat, píxeles)

- **NO VERIFICADO — Analítica (Google Analytics / GA4, etc.).** Sin HTML crudo no se observó ningún script de analítica.
- **NO VERIFICADO — Píxeles publicitarios (Meta, Google Ads, TikTok).** Idem.
- **NO VERIFICADO — Chat en vivo / soporte (Intercom, Zendesk, WhatsApp Business, etc.).** Idem.
- **NO VERIFICADO — Email marketing / newsletter (Klaviyo, Mailchimp, etc.).** Solo se observó la ruta: el `robots.txt` bloquea `index.php?cl=newsletter` y `/newsletter/`, es decir, existe la función de newsletter propia de OXID. El proveedor, si lo hay, es **NO VERIFICADO**.
- **NO VERIFICADO — Sistema de reseñas en el sitio.** El `robots.txt` bloquea `index.php?cl=review` y una URL de opiniones de producto (`/Opiniones-sobre-Procesador-AMD-Ryzen-3-1200-.../`), así que existe el módulo de reseñas de OXID. Si usan un proveedor externo (Trustpilot, Yotpo, etc.) es **NO VERIFICADO**.
- **OBSERVADO (contexto, no integración) —** Existe un perfil de Cyberpuerta en Trustpilot (https://uk.trustpilot.com/review/cyberpuerta.mx, consultado 13 nov 2026) con calificación «Poor» 1.9 y la nota de que la empresa «no ha invitado» a sus clientes a opinar. Eso describe el perfil en Trustpilot, no prueba ninguna integración de Trustpilot en cyberpuerta.mx. Su descripción comercial ahí («30.000+ productos», «200.000+ clientes», «11 años en el mercado») es autopromoción del perfil, no un dato verificado de esta investigación.
- **NO VERIFICADO —** Tag manager, CRM, ERP, logística/paquetería integrada, antifraude. Nada observado.

## 7. Comercio agentic

- **DESCONOCIDO — `/agents.md`.** La lectura de `https://cyberpuerta.mx/agents.md` falló el 13 nov 2026 sin devolver código HTTP («source fetch failed»). Por regla de la WO, el resultado es **DESCONOCIDO, no ausencia**: no se puede afirmar que el archivo no exista.
- **DESCONOCIDO — `/.well-known/ucp`.** La lectura de `https://cyberpuerta.mx/.well-known/ucp` falló exactamente igual el 13 nov 2026, sin código HTTP. **DESCONOCIDO, no ausencia.**
- **OBSERVADO — El `robots.txt` sí regula a los crawlers de IA, con las mismas reglas que al resto.** Grupo específico (leído 13 nov 2026): `GPTBot`, `ClaudeBot` y `PerplexityBot` con los mismos `Disallow` que el grupo comodín, y `Google-Extended` con `Allow: /`. Además, Baiduspider y Yandex tienen `Disallow: /` total. Esto muestra que el equipo de Cyberpuerta ya pensó en crawlers de IA a nivel de `robots.txt`, pero no es evidencia de un archivo `agents.md` ni de soporte UCP.
- **NO VERIFICADO —** `llms.txt`, MCP, feeds de producto para agentes, ni checkout agentic. No se buscaron por separado más allá de los dos endpoints de la WO.

## 8. Tabla de componentes

| Componente | Estado | Etiqueta | Evidencia / nota |
|---|---|---|---|
| Plataforma e-commerce | OXID eShop (OXID eSales) | OBSERVADO | `robots.txt` 13 nov 2026: `cl=`, `fnc=tobasket`, `/core/`, `/views/`, `/EXCEPTION_LOG.txt`, rutas en alemán |
| Versión de OXID | No observable | NO VERIFICADO | Sin HTML crudo ni cabeceras |
| Edición (Community/Pro/Enterprise) | No observable | NO VERIFICADO | Nada en fuentes públicas consultadas |
| Lenguaje back end | PHP (por la plataforma) | INFERIDO (baja) | Documentación pública de OXID; no observado en su servidor |
| Hosting / proveedor | Desconocido | NO VERIFICADO | Sin cabeceras, DNS ni IP (429, sin reintento) |
| Servidor web / origen | Desconocido | NO VERIFICADO | Idem |
| CDN | Subdominio propio `cdn.cyberpuerta.mx` existe | OBSERVADO (parcial) | PDF servido desde ese subdominio; proveedor NO VERIFICADO |
| Front-end / tema | Desconocido | NO VERIFICADO | Sin HTML crudo |
| URLs de producto | Jerárquicas + `.html` | OBSERVADO | URL de ejemplo vista en búsqueda 13 nov 2026 |
| API de catálogo pública | Ruta `/api/` bloqueada en robots; función desconocida | NO VERIFICADO | `Disallow: /api/`, `/web/account/login` en `robots.txt` |
| Sitemap | Declarado: `/export/google/sitemap-mx.xml` | OBSERVADO (declarado) | En `robots.txt`; su contenido NO se pudo leer (fallo de lectura, DESCONOCIDO) |
| Checkout | Dentro del propio OXID | INFERIDO (media) | Rutas de carrito/cuenta en `robots.txt`; sin recorrido de checkout |
| Pago — PayPal (+ MSI) | Sí | OBSERVADO | Página propia «Compra seguro con PayPal», índice rastreado 13 nov 2026 |
| Pago — American Express | Indicio | INFERIDO (baja) | Lista Shop Small de Amex México |
| Pago — Mercado Pago | No encontrado para Cyberpuerta | NO VERIFICADO | Ninguna página del sitio lo menciona en búsquedas |
| Pago — tarjeta directa / SPEI / OXXO / BNPL | No observado | NO VERIFICADO | — |
| Analítica / píxeles | No observado | NO VERIFICADO | Sin HTML crudo |
| Chat en vivo | No observado | NO VERIFICADO | Sin HTML crudo |
| Email / newsletter | Ruta propia OXID existe; proveedor desconocido | NO VERIFICADO (proveedor) | `cl=newsletter` en `robots.txt` |
| Reseñas | Módulo propio OXID existe; proveedor externo desconocido | NO VERIFICADO (proveedor) | `cl=review` en `robots.txt`; perfil Trustpilot existe sin integración probada |
| Crawlers de IA en robots.txt | GPTBot / ClaudeBot / PerplexityBot restringidos; Google-Extended permitido | OBSERVADO | `robots.txt` 13 nov 2026 |
| `/agents.md` | Lectura fallida | DESCONOCIDO | Fallo sin código HTTP; no es ausencia |
| `/.well-known/ucp` | Lectura fallida | DESCONOCIDO | Fallo sin código HTTP; no es ausencia |

## 9. Inferidos y no verificados (lista de cierre)

**INFERIDO**
1. No es Shopify, Magento ni WooCommerce (confianza media; la ausencia de marcadores es débil sin HTML crudo).
2. Infraestructura autoalojada / a medida, no SaaS (confianza baja; OXID + clasificación «Custom Cart» de StoreLeads).
3. El checkout vive dentro del propio OXID (confianza media; rutas de carrito/cuenta en `robots.txt`).
4. `/api/` es probablemente la API GraphQL del storefront de OXID o una API propia (confianza baja).
5. Aceptación de American Express (confianza baja; lista Shop Small de Amex).
6. Back end en PHP (confianza baja; es la base documentada de OXID, no observada en su servidor).

**HIPÓTESIS**
1. Por volumen de catálogo y tráfico, probablemente operan con varios servidores o balanceador. Sin evidencia directa.

**NO VERIFICADO**
1. Versión y edición de OXID; tema y framework front-end; librerías JS.
2. Hosting, servidor web, ubicación del origen, proveedor de CDN.
3. Documentación o endpoint público de API de catálogo; integraciones ERP / PIM / marketplaces.
4. Mercado Pago, tarjeta directa, SPEI, OXXO y BNPL como métodos de pago; pasos del checkout; compra como invitado.
5. Analítica, píxeles, tag manager, chat, email marketing, proveedor de reseñas, CRM, antifraude, logística integrada.

**DESCONOCIDO (no ausencia)**
1. `/agents.md` — lectura fallida sin código HTTP el 13 nov 2026.
2. `/.well-known/ucp` — lectura fallida sin código HTTP el 13 nov 2026.
3. Contenido del sitemap `https://www.cyberpuerta.mx/export/google/sitemap-mx.xml` y de `https://cyberpuerta.mx/sitemap.xml` — lecturas fallidas el 13 nov 2026.

## 10. Fuentes

1. https://cyberpuerta.mx/ — página principal, leída 13 nov 2026 (texto visible; descripción de la empresa, fundada en 2008).
2. https://cyberpuerta.mx/robots.txt — leído 13 nov 2026 (fuente principal de la identificación de OXID; 444 líneas).
3. http://www.cyberpuerta.mx/Compra-seguro-con-PayPal/ — confirmado vía índice de búsqueda, rastreado hace menos de 1 hora el 13 nov 2026 (lectura directa: 429, sin reintento).
4. https://storeleads.app/reports/custom/category/Computers/Computer+Hardware/Laptops+%26+Notebooks — clasificación «Custom Cart», actualizado 30 oct 2026, consultado 13 nov 2026.
5. https://www.americanexpress.com/content/dam/amex/mx/merchant/amex-offers/Shop-Small-Online-Participants-MX.pdf — lista de comercios Shop Small Online con cyberpuerta.mx, consultado 13 nov 2026.
6. https://www.ionos.mx/digitalguide/online-marketing/vender-en-internet/encuentra-el-mejor-software-para-tu-tienda-online/ — descripción pública de OXID eShop (PHP, modular, ediciones Community/Professional/Enterprise), consultado 13 nov 2026.
7. https://uk.trustpilot.com/review/cyberpuerta.mx — perfil en Trustpilot, consultado 13 nov 2026 (solo contexto; sin integración probada en el sitio).
8. https://cdn.cyberpuerta.mx/storage/articles/multimedia/5c4/75a/b28/5c475ab2840e4.pdf — archivo servido desde el subdominio CDN propio, visto en búsqueda 13 nov 2026.
9. Semrush (vía búsqueda, 13 nov 2026) — estimación de terceros: cyberpuerta.mx con ~2.61 M de visitas en sep 2026. Es una estimación de un tercero, no un dato verificado; se cita solo como contexto de escala.

## 11. Límites de esta investigación

- **Límite principal: el lector de páginas se saturó (429).** Tras leer la home y el `robots.txt`, las lecturas directas de `/sitemap.xml`, `/agents.md`, `/.well-known/ucp`, la página de PayPal y el sitemap declarado en `robots.txt` fallaron: las tres primeras sin código HTTP y las dos últimas con 429 del servicio de lectura («maximum number of requests allowed»). Por regla de la WO no se reintentó ninguna: sus resultados quedan como **DESCONOCIDO**, no como ausencia. Esto dejó sin verificar el HTML crudo (scripts y terceros), las cabeceras HTTP (hosting, servidor, CDN) y el contenido del sitemap.
- **Sin HTML crudo**, la identificación de la plataforma descansa casi por completo en el `robots.txt`. Es evidencia fuerte y específica de OXID (los parámetros `cl=`/`fnc=` y las rutas internas no son genéricos), pero la versión, el tema y los terceros quedan fuera de alcance hasta que se pueda leer el código fuente público de una página.
- **Sin recorrido de compra** (por alcance: no añadir al carrito), el checkout y los métodos de pago distintos de PayPal no se pudieron confirmar en el flujo real.
- **No se extrajeron datos personales ni se reprodujo ninguna clave o secreto.** No apareció ninguno en las fuentes leídas.
- **Las cifras de tráfico y catálogo citadas en §9 y §6 son estimaciones o autopromoción de terceros**, no mediciones de esta investigación.
- **Recomendación para completar el frente:** en una segunda pasada (fuera del Buen Fin, para no toparse con el límite de lecturas), descargar el HTML crudo de la home y de una ficha de producto, leer las cabeceras de `https://cyberpuerta.mx/` y `https://cdn.cyberpuerta.mx/`, y reintentar `/agents.md`, `/.well-known/ucp` y el sitemap declarado. Con eso se cerrarían versión aproximada, tema, terceros, hosting/CDN y el estado agentic.
