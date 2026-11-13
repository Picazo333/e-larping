# F3 — SEO / GEO + presencia digital: Buna

- **Sitio:** https://buna.mx
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F3 (SEO/GEO + presencia digital), Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas — `browser.search` (varias consultas, ver §7) y `browser.open` para leer páginas públicas. Sin navegador en vivo, sin cuentas, sin herramientas de pago (Search Console, Ahrefs, Semrush, etc.).

## Convención de evidencia (se aplica en todo el informe)

- **OBSERVADO** — visto directamente en una URL pública en esta fecha; se cita la URL.
- **INFERIDO** — conclusión razonada a partir de evidencia observada; se indica la evidencia y la confianza (alta / media / baja).
- **HIPÓTESIS** — derivada, marcada como tal; no es un hecho.
- **NO VERIFICADO** — no se pudo comprobar con las herramientas disponibles; no se afirma como hecho.

> No se inventa ninguna métrica de tráfico, posición exacta en Google, volumen de búsqueda ni gasto en anuncios. Cuando el dato no existe en las fuentes consultadas, se declara como no verificado.

---

## 1. Resumen ejecutivo

**OBSERVADO:** Buna opera en https://buna.mx bajo el claim **"BUNA: Café Rico que Conserva Ecosistemas"**, una tienda **Shopify** (el `robots.txt` se declara "Shopify storefront" y las imágenes viven en `buna.mx/cdn/shop/files/`) que vende café, chocolate y miel mexicanos con trazabilidad de origen (región, altura, variedades, productores nombrados en cada ficha) y un modelo de **suscripción** como eje comercial: 15% de descuento en todas las compras por suscripción, envío gratis en el primer pedido, entregas cada 2, 4 ó 6 semanas, pausa o cancelación libre. El catálogo observado es corto y curado: **18 productos** en la colección `/collections/productos-ricos` (cafés Dalia, Alebrije, Datura, Guarumbo, Los Pajaritos, Maui Ome; mieles; kits con Agárica). La tienda tiene además **tres cafeterías físicas en CDMX** (Roma Norte, Condesa y La Tostadora en Doctores) que funcionan como canal de adquisición y de comunidad (talleres, pláticas, eventos).

**OBSERVADO:** Su visibilidad fuera de su propio dominio es **notablemente más editorial que la de F4T3, pero envejecida**: crónicas de fondo en Local.mx (abr 2020) y Smartfood (mar 2021, que la describe como empresa B), ficha de socio en Mercados por un Futuro Sostenible (abr 2021, 256 productoras y productores), y menciones recientes en listados de cafeterías de especialidad (The Happening, nov 2025; Franquiciasdecafe.com.mx; Brewworld; MexBest, oct 2026, donde figura entre las nominadas a Mejor Cafetería). En cambio, **para la consulta transaccional genérica** ("comprar café de especialidad en línea México") **Buna no aparece** en los resultados devueltos: dominan Lulú Café, Café Ge, Aroma de Altura, Jaguar Coffee, Olah Café, Tueste Café y Cafecito Mexicano.

**OBSERVADO:** Hay evidencia directa y estructurada de **pauta pagada en Meta**: las URLs de producto que devuelve el buscador traen parámetros UTM de Meta Ads (`utm_source=meta_Instagram_Feed`, `utm_medium=paid_social`, campañas `[EPY_META_ACQ_RT_MAX_ATC_AON]` y `[EPY_META_ACQ_INT_MAX_ATC_AON]`, audiencia `new_customer`, segmento "Engagers Fb e Instagram 180 días" y una campaña en inglés dirigida a "Extranjeros en México"). Es el indicio de adquisición pagada más detallado de los frentes investigados hasta ahora.

**INFERIDO (confianza media-alta):** la estrategia digital de Buna es **suscripción + pauta Meta + cafeterías físicas + autoridad de misión**, no SEO de contenido fresco. La evidencia: el blog existe pero sus artículos devueltos por el buscador datan de marzo–abril de 2022; la home no muestra campaña de Buen Fin el 13 nov 2026 pese a ser el primer día; y la adquisición visible es paid con segmentación sofisticada (retargeting de engagers, lookalikes, extranjeros en México) más el tráfico que generan las tres cafeterías y la prensa de sostenibilidad.

**NO VERIFICADO:** posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda, citas en respuestas de ChatGPT / Google AI Overviews / Perplexity, número de seguidores en Instagram/TikTok, gasto publicitario, y el contenido de los sitemaps secundarios (los intentos de lectura devolvieron error 429 y no se reintentaron).

---

## 2. SEO

### 2.1. Lo que devuelve el buscador para la marca

Consultas ejecutadas el 13 nov 2026 (ver §7 para la lista completa):

| Consulta | Resultado para Buna — OBSERVADO |
|---|---|
| `Buna café especialidad México buna.mx` | La home no aparece como tal entre los 10 primeros; dominan **fichas de producto** (`/products/cafe-maui-ome-1`, `cafe-guarumbo`, `cafe-dalia`, `cafe-datura`, `cafe-alebrije-1`) y terceros (Franquiciasdecafe con Buna 42, pos.do, Brewworld). |
| `site:buna.mx` | Devuelve **7 resultados**: 2 artículos del blog `/blogs/info` (biomasa y ciclo del café, ambos publicados 2022-04-28) y 5 fichas de producto (Los Pajaritos, Datura, Dalia, Miel Apis Inmunis, Guarumbo). Dos de las fichas traen UTM de Meta Ads (ver §2.4). La home no aparece en esa consulta. |
| `"Buna" café Oaxaca "Café Rico que Conserva Ecosistemas"` | Dominan las fichas de producto; además aparecen Local.mx (2020), Smartfood (2021) y la ficha de La Tostadora. Se confirma la colaboración con Agárica ("Buna y Agárica trabajan juntos para promover la salud en los ecosistemas mexicanos") repetida en las fichas. |
| `mejor café especialidad México Buna` | **Buna sí aparece**: Franquiciasdecafe (Buna 42 en el #8 de su top 10), The Happening (nov 2025, "Buna (Roma/Condesa y Tostaduría)") y Local.mx (2020). La home aparece como resultado 3, pero como ficha de lugar (dirección Orizaba 42), no como resultado editorial. |
| `Buna café opiniones reseñas comprar Buna 42` | **Buna 42: 4.5★ y 1,567 reseñas en Google** según pos.do (fuente secundaria; no verificado directamente en Google). El resto de resultados son homónimos (Buna Ethiopian Restaurant de Los Ángeles, Bunna Café de Guatemala). No hay agregadores de opiniones de la tienda en línea. |
| `comprar café de especialidad en línea México tienda` | **Buna no aparece** en los resultados devueltos. Dominan Lulú Café, Café Ge, Aroma de Altura, Jaguar Coffee, Olah Café, Tueste Café y Cafecito Mexicano — todos con páginas transaccionales ("comprar café", "encuentra tu café ideal") optimizadas para esa intención. |
| `"Buna" café "Ámsterdam 285" Condesa cafetería` | MexBest (1 oct 2026): Buna entre las 5 nominadas a **Mejor Cafetería** de los Premios MexBest 2026; direcciones Ámsterdam 285 (Condesa) y Orizaba 42 (Roma Norte); Instagram **@bunamx**. Brewworld: "one of three Mexico City cafes of BUNA, a certified B Corporation". |

**Advertencia metodológica (importante):** estos son los resultados que devolvió la herramienta `browser.search` en esta sesión, no una medición controlada de posiciones en Google o Bing (sin ubicación, historial ni Search Console no se puede afirmar una posición #N). Lo que sí se puede afirmar es el patrón observado: **para consultas de marca exacta, el buscador devuelve antes fichas de producto que la home; para la consulta transaccional genérica ("comprar café de especialidad en línea"), Buna no aparece en los resultados consultados, mientras competidores directos sí**. Eso es consistente con un SEO de producto fuerte y un SEO de intención transaccional genérica débil.

**INFERIDO (confianza media):** el principal problema de descubribilidad por marca es la **ambigüedad del nombre**: "buna" es la palabra amárica para café, y el buscador mezcla a Buna (CDMX) con el restaurante etíope Buna de Los Ángeles y Bunna Café de Guatemala. A diferencia de F4T3, el nombre no es difícil de deletrear, pero sí es genérico en el mundo del café.

### 2.2. Título y descripción observados en el sitio

**OBSERVADO** (lectura directa de https://buna.mx/ el 13 nov 2026, 19:20 UTC):

- Título de la página: **"BUNA | Café Rico que Conserva Ecosistemas"** (marca + descriptor de categoría + misión; a diferencia de F4T3, el título sí contiene palabras de categoría).
- Contenido visible de la home: "Productos ricos, del campo a tu mesa"; tres categorías (café rico, chocolate rico, miel rica); pregunta de misión ("¿Qué si a través de un hábito tan cotidiano como tomar café pudiéramos promover la conservación de nuestros ecosistemas?"); enlace "Somos BUNA"; sección de suscripción ("Recibe productos ricos de manera recurrente en la puerta de tu casa": **15% de descuento en todas tus compras, envío gratis en tu primer pedido, pedidos cada 2, 4 ó 6 semanas, pausa o cancela cuando quieras**); invitación a la comunidad y a eventos en La Tostadora ("talleres, pláticas y mucho más"); botón "Haz tu primer pedido".
- **No se observó ningún banner, mención ni colección de Buen Fin en la home** el 13 nov 2026, primer día del Buen Fin 2026. (Ver §2.4: las fichas de producto sí muestran "20% de descuento", sin que la página indique su motivo.)

**OBSERVADO — títulos de producto (vía resultados de búsqueda, 13 nov 2026):** patrón consistente y bueno para SEO: **"Café Dalia | BUNA: Café Rico que Conserva Ecosistemas"**, "Café Guarumbo | BUNA: Café Rico que Conserva Ecosistemas", etc. Cada ficha incluye notas de cata ("Dulce + Cuerpo intenso — Chocolate | Piloncillo | Nueces"), precio, variantes (compra única / suscripción; 340 g / 2 kg; molido medio / fino / en grano) y datos de origen estructurados (región, altura, variedades, proceso, productores, especie).

**INFERIDO (confianza alta):** el SEO on-page de producto es el punto fuerte del sitio: títulos con marca + categoría, URLs limpias `/products/{handle}`, y contenido de ficha rico en entidades citables (Huautla de Jiménez, Oaxaca; 1400–1500 m.s.n.m.; Bourbon, Mondo Novo y Typica; Unión Regional de Cafeticultores de la Mazateca Alta). Es contenido que un motor de respuestas puede citar para preguntas de origen y perfil de sabor.

**NO VERIFICADO:** la meta description exacta que Google muestra para la home (la herramienta de lectura no devolvió el `<head>` / metaetiquetas). Tampoco se pudo verificar si existen datos estructurados (JSON-LD) más allá de lo que Shopify genera por defecto, aunque los resultados de búsqueda muestran bloques de "Product Offer" (precio, disponibilidad, variantes), lo que sugiere marcado de producto presente.

### 2.3. Páginas indexadas: sitemap y robots

**OBSERVADO** — https://buna.mx/sitemap.xml (leído 13 nov 2026, 19:20 UTC). Es un sitemap índice de Shopify con:

- `sitemap_agentic_discovery.xml`
- `sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`
- **`sitemap_articles_1.xml`** (sitemap específico de artículos de blog; F4T3 no lo tenía listado por separado)

A diferencia de F4T3, **no se observan versiones localizadas** (`en-us`, `es-us`, etc.): el sitemap índice lista una sola versión de cada sección. **INFERIDO (confianza media):** tienda de un solo idioma/mercado (México), coherente con una marca local con cafeterías físicas en CDMX.

**OBSERVADO — intento de lectura de los sitemaps secundarios:** los tres intentos de abrir `sitemap_pages_1.xml`, `sitemap_blogs_1.xml` y `sitemap_collections_1.xml` devolvieron **error 429 del servicio de lectura** (límite de tasa) y **no se reintentaron**, conforme a la regla de no repetir llamadas bloqueadas. Por tanto, el contenido de esos sitemaps (número de páginas, colecciones, productos y fechas de última modificación) queda **NO VERIFICADO**. Lo que se sabe de páginas y colecciones proviene de los resultados de búsqueda (ver abajo), no del sitemap.

**OBSERVADO (vía búsqueda, no vía sitemap):**

- **Colección `/collections/productos-ricos`: "Encontramos 18 productos disponibles"** (resultado de búsqueda, 13 nov 2026). Catálogo corto y curado, frente a las 58 colecciones de F4T3.
- **Páginas de marca observadas:** `/pages/esto-es-buna` ("Qué hacemos… Nuestro enfoque es la conservación"), `/pages/programa-de-conservacion` (3 pilares: sistemas agroforestales, adquisición de materias primas, indicadores de conservación), `/pages/indicadores-de-conservacion` (indicadores biológicos, sociales y económicos). Son páginas de misión con contenido sustantivo, no solo operativas.
- **Blog `/blogs/info`:** al menos 3 artículos devueltos por el buscador: "Buna, la iniciativa" (publicado 2022-03-10), "¿Cómo es el ciclo del café de Buna?" (2022-04-28) y "¿Qué es la biomasa y cuál es su importancia?" (2022-04-28). Ver §5.

**OBSERVADO** — https://buna.mx/robots.txt (leído 13 nov 2026, 19:20 UTC): robots estándar de Shopify, permisivo (`User-agent: * / Allow: /`), con bloqueos solo de rutas privadas/transaccionales (`/admin`, `/cart/`, `/checkout`, `/orders`, `/account`, `/services`, `/sf_*`) y de trampas de rastreo (filtros/ordenación de colecciones, `?preview_theme_id=`, etc.). Declara `Sitemap: https://buna.mx/sitemap.xml` y —relevante para GEO— enlaza `/agents.md`, `/.well-known/ucp` y `/api/ucp/mcp`, con instrucciones explícitas para agentes personales (instalar la Shop skill, usar UCP/MCP, no hacer scraping de checkout). El texto es el mismo boilerplate de Shopify observado en F4T3.

**INFERIDO (confianza alta):** la higiene técnica SEO es buena (sitemap completo, robots sin bloqueos accidentales, URLs limpias, títulos de producto con marca + categoría). El punto débil no es técnico: es la **falta de frescura de contenido** (blog de 2022) y la **ausencia en la intención transaccional genérica** ("comprar café en línea"), donde competidores con páginas dedicadas a esa intención sí aparecen.

**NO VERIFICADO:** número total de productos indexados, número de colecciones y de páginas, fechas de última modificación de cada sección (sitemaps secundarios no legibles por el 429), posiciones por palabra clave, ni Core Web Vitals / velocidad.

### 2.4. Publicidad pagada observable

**OBSERVADO:** dos URLs de producto que devuelve el buscador traen parámetros UTM completos de Meta Ads:

1. **Café Dalia** — https://buna.mx/products/cafe-dalia?utm_content=Engagers+Fb+e+Instagram+180+d%C3%ADas_CRDyn_AON_LAL&utm_source=meta_Instagram_Feed&variant=39419744026694&utm_medium=paid_social&utm_campaign=%5BEPY_META_ACQ_RT_MAX_ATC_AON%5D+-+Copia&audience_type=new_customer&utm_id=120209206308700259&utm_term=120209206308500259&campaign_id=120209206308700259&ad_id=120209206381140259

   Lectura de los parámetros: fuente Meta / Instagram Feed, medio `paid_social`, campaña de adquisición (`ACQ`) con retargeting (`RT`) y optimización a agregar al carrito (`MAX_ATC`), audiencia de **engagers de Facebook e Instagram de 180 días + lookalike (LAL)**, objetivo `new_customer`.

2. **Miel Apis Inmunis** — https://buna.mx/products/miel-apis-inmunis?variant=40300092325958&utm_content=Extranjeros+en+M%C3%A9xico_Collection_+AllProd&utm_source=meta_Others&utm_medium=paid_social&utm_campaign=%5BEPY_META_ACQ_INT_MAX_ATC_AON%5D+English&campaign_id=120209444393460259&ad_id=120210219227650259&audience_type=new_customer

   Lectura: campaña de adquisición por **intereses (`INT`)**, en **inglés**, dirigida a **"Extranjeros en México"**, también optimizada a agregar al carrito y a `new_customer`.

**OBSERVADO:** las fichas de producto muestran **"20% de descuento"** (Dalia, Datura, Guarumbo, Los Pajaritos, Maui Ome, Miel Apis Inmunis) en los resultados de búsqueda del 13 nov 2026. **NO VERIFICADO** si ese 20% es la promoción de Buen Fin, un descuento de suscripción, o una promoción permanente: la home leída el mismo día no menciona el Buen Fin ni el motivo del descuento, y las fichas no lo explican en el texto devuelto.

**INFERIDO (confianza alta):** Buna invierte en **Meta Ads con estructura profesional y segmentación múltiple**: (a) retargeting de engagers de 180 días + lookalike, (b) prospecting por intereses, (c) prospecting en inglés a extranjeros residentes en México. Las campañas se nombran con una convención interna (`EPY_META_ACQ_RT/INT_MAX_ATC_AON`), lo que sugiere gestión continua y con nomenclatura propia, no un boost ocasional. El objetivo declarado en los parámetros es adquisición de clientes nuevos optimizando a agregar al carrito.

**NO VERIFICADO:** gasto en anuncios, campañas activas, ni anuncios en la Biblioteca de Anuncios de Meta (no se consultó en esta sesión); tampoco Google Ads ni TikTok Ads. No se afirma que el 20% observado sea Buen Fin.

---

## 3. GEO — presencia en respuestas de IA

### 3.1. Lo que se pudo comprobar

**NO VERIFICADO (limitación declarada):** en esta sesión no se pudo interrogar directamente a ChatGPT, Google AI Overviews, Perplexity, Copilot ni a ningún otro motor de respuestas de IA con preguntas como "¿qué café de especialidad mexicano recomiendas comprar en línea?" o "¿qué es Buna?". Por tanto **no se afirma que Buna aparezca o no aparezca en respuestas generativas**. Cualquier informe que afirme su presencia/ausencia en GEO sin haber hecho esas consultas estaría inventando.

Lo que sí se observó, y es relevante para GEO, es la **infraestructura de citabilidad** del sitio:

**OBSERVADO:**

1. **`/agents.md`** (https://buna.mx/agents.md, leído 13 nov 2026): documento canónico "Agent Instructions — BUNA" que explica a agentes de IA cómo descubrir productos, usar la Shop skill, integrar UCP/MCP (`GET https://buna.mx/.well-known/ucp`, `https://buna.mx/api/ucp/mcp`) y operar WebMCP en checkout. Declara políticas (privacidad, términos, reembolso, envío) y que la tienda está construida en Shopify.
2. **`robots.txt`** enlaza `/agents.md`, `/.well-known/ucp` y `/api/ucp/mcp` en sus primeras líneas, antes que cualquier regla de rastreo — el sitio **se anuncia deliberadamente a los crawlers de agentes**.
3. **`sitemap_agentic_discovery.xml`** listado en el sitemap índice (su contenido **no se pudo leer**: el intento de lectura de los sitemaps secundarios devolvió error 429; se declara como no verificado, no como ausente).
4. **Página `/pages/esto-es-buna`** (resultado de búsqueda, 13 nov 2026): texto de misión citable y con entidad clara — "Recorremos los ecosistemas de nuestro país para aprender de su biodiversidad y suelos. Colaboramos con agricultores mexicanos para implementar prácticas agrícolas naturales… Nuestro enfoque es la conservación."
5. **Páginas `/pages/programa-de-conservacion` e `/pages/indicadores-de-conservacion`:** contenido factual y estructurado (3 pilares; indicadores biológicos, sociales y económicos con criterios explícitos como salud del suelo, biodiversidad, rentabilidad de la finca). Es material citable para preguntas sobre el modelo de la empresa.
6. **Señales de entidad en terceros:** Smartfood (2021) la describe como empresa B de triple impacto; Mercados por un Futuro Sostenible (2021) documenta que trabaja con **256 productoras y productores** de Chiapas, Hidalgo, Estado de México, Oaxaca, Veracruz y Puebla, con acuerdos a 10 años y precio base; MexBest (oct 2026) la incluye entre las nominadas a Mejor Cafetería; The Happening (nov 2025) la recomienda entre las barras de especialidad de CDMX.

**INFERIDO (confianza media):** el `/agents.md` de Buna es **casi con seguridad la plantilla estándar de Shopify**, no un documento propio: su texto, estructura y enlaces son los mismos observados en F4T3 (misma redacción sobre Shop skill, UCP, WebMCP y Web Bot Auth). Eso significa que Buna **no ha hecho un trabajo GEO propio** más allá de lo que Shopify le da por defecto; la ventaja agentic es heredada de la plataforma, no una decisión de la marca. Lo que sí es propio —y distintivo frente a F4T3— es el **contenido de misión y de origen**: fichas con productores nombrados, páginas de conservación con indicadores medibles y cobertura editorial de sostenibilidad. Ese es el material que un motor de respuestas podría citar para recomendarla.

**INFERIDO (confianza media):** si un usuario pregunta hoy a un motor de IA por "mejor café de especialidad mexicano para comprar en línea", es **probable que Buna aparezca menos que sus competidores** (Lulú, Café Ge, Olah), porque los resultados de búsqueda para esa intención no la incluyen y esos competidores sí tienen páginas optimizadas para ella. En cambio, para preguntas de **cafeterías de especialidad en CDMX** o de **café con impacto / empresa B**, es **probable que sí aparezca**, porque los listados que esos motores citarían (The Happening, MexBest, Brewworld, Franquiciasdecafe) la incluyen. Ambas son inferencias, no observaciones: no se ejecutó ninguna pregunta en ningún motor.

### 3.2. Qué le falta para ser citable (inferido, para la Fase 2)

- Contenido fresco que responda preguntas de compra ("cómo elegir café de especialidad", "qué café comprar para V60 / espresso", "café descafeinado sin químicos") — hoy el blog es de 2022 (ver §5).
- Una página transaccional para la intención "comprar café de especialidad en línea" — hoy esa consulta la ganan competidores con páginas dedicadas.
- Un `/agents.md` propio (hoy es la plantilla de Shopify) con datos de la marca: fundación (2012, según Mercados por un Futuro Sostenible), sedes, rango de precios, suscripción.
- Menciones recientes de fondo (la cobertura editorial de misión es de 2020–2021; lo reciente son listados, no reportajes).

---

## 4. Presencia digital

### 4.1. Canales observados

| Canal | OBSERVADO | URL / evidencia |
|---|---|---|
| Tienda propia (Shopify) | Activa, catálogo curado de 18 productos, suscripción como eje, 20% de descuento visible en fichas el 13 nov 2026 | https://buna.mx/ |
| Suscripción | Eje comercial de la home: 15% dto., envío gratis en 1er pedido, entregas cada 2/4/6 semanas, pausa/cancelación libre | https://buna.mx/ (home, 13 nov 2026) |
| Cafeterías físicas (3 en CDMX) | Buna 42 (Orizaba 42, Roma Norte), Condesa (Ámsterdam 285) y La Tostadora (Doctores); talleres, pláticas y eventos en La Tostadora | MexBest 2026; Brewworld; home de buna.mx |
| Instagram | Handle **@bunamx** (citado por MexBest). **No se pudo verificar** el perfil, número de seguidores ni frecuencia de publicación con las herramientas de esta sesión | MexBest: https://mex-best.mx/bebidas/2026/10/01/cafeterias-que-puedes-visitar-para-celebrar-el-dia-internacional-del-cafe/ |
| Prensa / editorial de misión | Local.mx, "Crónicas de Café" (23 abr 2020); Smartfood (30 mar 2021, empresa B); Mercados por un Futuro Sostenible (14 abr 2021, 256 productores) | Ver §7 |
| Listados de especialidad (recientes) | The Happening (28 nov 2025); Franquiciasdecafe (Buna 42 #8, top 10 competencia de Starbucks); Brewworld; MexBest (1 oct 2026, nominada Mejor Cafetería) | Ver §7 |
| Reseñas de cafetería | Buna 42: **4.5★, 1,567 reseñas en Google** según pos.do (fuente secundaria) | https://pos.do/es/ciudad-de-mexico/restaurante/buna-42-ciudad-de-mexico?v=1 |
| Colaboración Agárica | "Buna y Agárica trabajan juntos para promover la salud en los ecosistemas mexicanos" — repetido en fichas; productos conjuntos (Kit Agárica / Buna, café Los Pajaritos con melena de león, Miel Apis Inmunis con chaga, cola de pavo y reishi) | Fichas de producto en buna.mx |
| Distribución B2B | Local.mx (2020): sus cafés se distribuyen a restaurantes como Delirio (Mónica Patiño), Eno, Pujol y la churrería El Moro | https://www.local.mx/restaurantes/cafe/cronicas-de-cafe-buna-un-cafe/?amp=1 |
| Facebook / Meta Ads | Evidencia UTM (ver §2.4) de anuncios pagados de adquisición y retargeting | URLs de producto con UTM de Meta |
| TikTok / YouTube | **No se encontró** presencia ni mención en las búsquedas realizadas | NO VERIFICADO (ausencia en resultados ≠ inexistencia) |
| Marketplace (Mercado Libre, Amazon, etc.) | **No se encontró** presencia en marketplaces en las búsquedas realizadas | NO VERIFICADO (ausencia en resultados ≠ inexistencia) |
| Empleos | Bolsa en lapieza.io ("Empleos en BUNA CAFE RICO") con el texto de misión | https://buna-cafe-rico.lapieza.io/ |

### 4.2. Estructura de la estrategia digital (INFERIDO, confianza media)

A partir de lo observado, la estrategia se lee así:

1. **La suscripción es el centro; la tienda, las cafeterías y los ads la alimentan.** La home no vende una compra única: vende recurrencia (15% dto., envío gratis en el primer pedido, entregas programadas). Las fichas ofrecen compra única y suscripción en paralelo, con la suscripción más barata (Dalia: $350 compra única / $335 suscripción, 340 g).
2. **El motor de adquisición es paid Meta con segmentación sofisticada + tráfico físico.** Retargeting de engagers de 180 días + lookalike, prospecting por intereses y prospecting en inglés a extranjeros en México, todo optimizado a agregar al carrito y a cliente nuevo. Las tres cafeterías convierten el tráfico de barrio (Roma/Condesa/Doctores) en clientes de suscripción y en comunidad (talleres y pláticas en La Tostadora).
3. **La misión es el lenguaje comercial dominante, no el precio.** El claim es conservación de ecosistemas; las fichas nombran región, altura, variedades y productores; las páginas de programa de conservación publican indicadores. El descuento existe (20% en fichas, 15% por suscripción) pero no protagoniza la home: el 13 nov 2026, primer día de Buen Fin, la home no menciona la temporada. Contraste directo con F4T3, cuya home era casi toda promoción.
4. **La autoridad externa es de sostenibilidad, no de moda ni de precio.** Las menciones fuertes son de 2020–2021 (Local.mx, Smartfood, Mercados por un Futuro Sostenible) y hablan de agroecología, comercio justo y empresa B; lo reciente (2025–2026) son listados de cafeterías, no reportajes de fondo. La autoridad existe pero no se ha renovado.
5. **Consistencia de marca: alta.** El binomio BUNA / "Café Rico que Conserva Ecosistemas" se mantiene en dominio, títulos de producto, prensa y listados; la colaboración con Agárica y el relato de origen (productores de Oaxaca, Chiapas, Veracruz, Tabasco, Guerrero, Puebla) se repiten de forma coherente en fichas, páginas y terceros.

**Discrepancia observada (sin resolver):** la dirección de La Tostadora aparece como **C. Dr. Lucio 181** en un resultado de búsqueda y como **Doctor Erazo 172, Doctores** en el directorio de Mercados por un Futuro Sostenible. **NO VERIFICADO** cuál es la actual; se consigna la discrepancia en lugar de elegir una.

### 4.3. Reputación / conversación social

**OBSERVADO:** Buna 42 tiene **4.5★ y 1,567 reseñas en Google** según pos.do (13 nov 2026). La misma fuente resume la conversación: clientes elogian el café con leche, el croissant de almendras y la cafechata; algunos mencionan espacio limitado y servicio lento. Es un resumen de un agregador, no una lectura directa de las reseñas.

**NO VERIFICADO:** valoración media y volumen de reseñas de la tienda en línea (no se encontró agregador de opiniones del e-commerce), quejas en Profeco/Trustpilot/Google, o sentimiento general en redes. No se encontró ningún reclamo público destacado en las búsquedas realizadas, pero eso no prueba que no existan.

---

## 5. Contenido: blog, guías y secciones

**OBSERVADO:**

- Existe un blog Shopify: https://buna.mx/blogs/info — con al menos 3 artículos devueltos por el buscador:
  - "Buna, la iniciativa" — publicado **2022-03-10** (texto de misión: "Hace ya más de una década que descubrimos que nuestra idea de tener un negocio de café había comenzado a quedarse corta…").
  - "¿Cómo es el ciclo del café de Buna?" — publicado **2022-04-28** (recorrido campo → cosecha → procesamiento → control de calidad → tueste; menciona las variedades Alebrije, Dalia, Datura, Los Pajaritos y Maui Ome; productores de Tabasco, Chiapas, Oaxaca, Guerrero y Veracruz).
  - "¿Qué es la biomasa y cuál es su importancia?" — publicado **2022-04-28** (explica la biomasa y su papel en los proyectos agroforestales de Buna).
- **No se encontró ningún artículo posterior a abril de 2022** en las búsquedas realizadas. El contenido es de misión y de proceso, no de compra: no hay guías de métodos (V60, Chemex, espresso), ni comparativas, ni contenido de "cómo elegir".
- El contenido más cercano a editorial actual son las **páginas de misión** (`/pages/esto-es-buna`, `/pages/programa-de-conservacion`, `/pages/indicadores-de-conservacion`), que sí tienen contenido sustantivo y estructurado, pero no son contenido de captación por búsqueda: son páginas de marca, no artículos que respondan preguntas.
- **Frecuencia de contenido: cero observable desde abril de 2022** (más de 4 años sin artículos nuevos en los resultados devueltos).

**INFERIDO (confianza media-alta):** Buna hizo content marketing de misión en 2022 y lo abandonó. El blog existe como archivo, no como canal vivo. Esto explica el patrón del §2: buen SEO de producto + autoridad de misión antigua, pero sin páginas que puedan rankear para consultas informativas actuales ("cómo preparar café de especialidad en casa", "mejor café para prensa francesa") ni para la intención transaccional genérica. La salvedad: los artículos de 2022 siguen indexados y devueltos por el buscador, así que el archivo sigue trabajando, aunque sin renovarse.

**NO VERIFICADO:** si existen artículos de blog posteriores a abril de 2022 no devueltos por el buscador (el `sitemap_articles_1.xml` no se pudo leer por el 429), o contenido en Instagram/TikTok/YouTube con frecuencia regular (los perfiles no se pudieron verificar en esta sesión).

---

## 6. Lista final: observado / inferido / no verificado / hipótesis

### OBSERVADO (con fuente y fecha)

1. Tienda Shopify en https://buna.mx, título de home "BUNA | Café Rico que Conserva Ecosistemas", activa el 13 nov 2026. [Lectura directa, 13 nov 2026 19:20 UTC]
2. Home sin mención al Buen Fin el 13 nov 2026; eje comercial = suscripción (15% dto., envío gratis en 1er pedido, entregas cada 2/4/6 semanas, pausa/cancelación libre) + comunidad y eventos en La Tostadora. [https://buna.mx/, 13 nov 2026]
3. `robots.txt` permisivo, estándar Shopify, con enlaces a `/agents.md`, `/.well-known/ucp`, `/api/ucp/mcp` y sitemap declarado. [https://buna.mx/robots.txt, 13 nov 2026]
4. `/agents.md` con instrucciones para agentes de IA, integración UCP/MCP y Shop skill; texto idéntico en estructura al de F4T3 (plantilla Shopify). [https://buna.mx/agents.md, 13 nov 2026]
5. Sitemap índice con `sitemap_agentic_discovery.xml`, productos, páginas, colecciones, blogs y `sitemap_articles_1.xml`; sin versiones localizadas. [https://buna.mx/sitemap.xml, 13 nov 2026]
6. Colección `/collections/productos-ricos`: 18 productos disponibles. [Búsqueda, 13 nov 2026]
7. Fichas de producto con título "Café X | BUNA: Café Rico que Conserva Ecosistemas", notas de cata, precio, variantes (compra única / suscripción; 340 g / 2 kg; molido medio / fino / en grano) y datos de origen (región, altura, variedades, productores). Precios observados: Dalia $350 ($335 suscripción), Alebrije $350, Datura $365 (descafeinado), Guarumbo $310, Los Pajaritos $395, Maui Ome $395, Miel Apis Inmunis $270. [Búsquedas, 13 nov 2026]
8. "20% de descuento" visible en las fichas de producto el 13 nov 2026, sin motivo declarado en la página. [Búsquedas, 13 nov 2026]
9. Dos URLs de producto con UTM completos de Meta Ads: Dalia (Instagram Feed, `paid_social`, campaña `[EPY_META_ACQ_RT_MAX_ATC_AON]`, engagers 180 días + LAL, `new_customer`) y Miel Apis Inmunis (campaña `[EPY_META_ACQ_INT_MAX_ATC_AON]` en inglés, "Extranjeros en México", `new_customer`). [Búsquedas `site:buna.mx` y `Buna café especialidad México buna.mx`, 13 nov 2026]
10. Blog `/blogs/info` con 3 artículos devueltos, todos de 2022: "Buna, la iniciativa" (2022-03-10), "¿Cómo es el ciclo del café de Buna?" y "¿Qué es la biomasa…?" (ambos 2022-04-28). [Búsquedas, 13 nov 2026]
11. Páginas de misión: `/pages/esto-es-buna`, `/pages/programa-de-conservacion` (3 pilares), `/pages/indicadores-de-conservacion` (indicadores biológicos, sociales y económicos). [Búsquedas, 13 nov 2026]
12. Tres cafeterías en CDMX: Buna 42 (Orizaba 42, Roma Norte), Condesa (Ámsterdam 285) y La Tostadora (Doctores). [MexBest, Brewworld, home; 13 nov 2026]
13. Buna 42: 4.5★, 1,567 reseñas en Google, según pos.do (fuente secundaria). [Búsqueda, 13 nov 2026]
14. Local.mx, "Crónicas de Café" (23 abr 2020): historia de Buna, productores de Tabasco, Chiapas, Oaxaca y Veracruz, distribución B2B a Delirio, Eno, Pujol y El Moro, precios 2020 de $285–315 por 340 g. [https://www.local.mx/restaurantes/cafe/cronicas-de-cafe-buna-un-cafe/?amp=1]
15. Smartfood (30 mar 2021): Buna como empresa B de triple impacto, equipo de sustentabilidad, colaboración con Oaxaca, Chiapas, Puebla e Hidalgo. [https://smartfood.com.mx/blogs/news/buna-cafe-rico-para-conservar-ecosistemas-mexicanos]
16. Mercados por un Futuro Sostenible (14 abr 2021): Buna trabaja con 256 productoras y productores de Chiapas, Hidalgo, Estado de México, Oaxaca, Veracruz y Puebla; acuerdos a 10 años y precio base. [https://marketsforasustainablefuture.org/blog/buna-cafe-rico-por-los-bosques-y-sus-comunidades/]
17. The Happening (28 nov 2025): "Buna (Roma/Condesa y Tostaduría)" entre los spots de café de especialidad en CDMX. [https://thehappening.com/que-es-el-cafe-de-especialidad-y-como-hacerlo-en-casa/]
18. MexBest (1 oct 2026): Buna entre las 5 nominadas a Mejor Cafetería, Premios MexBest 2026; Instagram @bunamx; direcciones Ámsterdam 285 y Orizaba 42. [https://mex-best.mx/bebidas/2026/10/01/cafeterias-que-puedes-visitar-para-celebrar-el-dia-internacional-del-cafe/]
19. En la consulta transaccional genérica ("comprar café de especialidad en línea México tienda"), Buna no aparece en los resultados devueltos; aparecen Lulú Café, Café Ge, Aroma de Altura, Jaguar Coffee, Olah Café, Tueste Café y Cafecito Mexicano. [Búsqueda, 13 nov 2026]
20. Colaboración con Agárica: "Buna y Agárica trabajan juntos para promover la salud en los ecosistemas mexicanos", repetida en las fichas; productos conjuntos (Kit Agárica / Buna, Los Pajaritos con melena de león, Miel Apis Inmunis con chaga, cola de pavo y reishi). [Fichas de producto, 13 nov 2026]

### INFERIDO (con evidencia y confianza)

1. **Estrategia = suscripción + paid Meta + cafeterías físicas + autoridad de misión; SEO de contenido fresco ausente.** Evidencia: home centrada en suscripción, UTM de Meta con segmentación múltiple, 3 cafeterías con eventos, blog sin artículos posteriores a abr 2022, home sin Buen Fin. Confianza: **media-alta**.
2. **SEO técnico bueno; SEO de producto fuerte; SEO de intención transaccional genérica débil.** Evidencia: sitemap/robots correctos, títulos de producto con marca + categoría y fichas ricas en entidades vs. ausencia en "comprar café de especialidad en línea". Confianza: **alta**.
3. **La pauta Meta es profesional y continua, no un boost ocasional.** Evidencia: nomenclatura de campaña propia (`EPY_META_ACQ_RT/INT_MAX_ATC_AON`), tres segmentaciones distintas (retargeting engagers 180 días + LAL, intereses, extranjeros en México en inglés), optimización a agregar al carrito. Confianza: **alta** (los parámetros UTM lo muestran directamente).
4. **El `/agents.md` es la plantilla estándar de Shopify, no trabajo GEO propio.** Evidencia: texto y estructura idénticos a los de F4T3. Confianza: **media-alta**.
5. **Probable presencia en respuestas de IA sobre cafeterías de especialidad en CDMX o café con impacto**, por los listados que la incluyen (The Happening, MexBest, Brewworld) y su contenido de misión; **probable ausencia en "mejor café para comprar en línea"**, donde no aparece en búsqueda. Confianza: **baja-media** (inferencia sin haber interrogado a ningún motor).
6. **El nombre "Buna" compite con homónimos** (restaurante etíope de Los Ángeles, Bunna Café de Guatemala; "buna" = café en amárico) y eso diluye la descubribilidad por marca. Evidencia: resultados de "Buna café opiniones" dominados por homónimos. Confianza: **media**.
7. **La autoridad editorial existe pero no se ha renovado desde 2021**: la cobertura de fondo es de 2020–2021; lo de 2025–2026 son listados. Confianza: **media-alta**.

### HIPÓTESIS (derivadas, marcadas)

1. **HIPÓTESIS:** el "20% de descuento" visible en las fichas el 13 nov 2026 podría ser la promoción de Buen Fin, pero la home no lo menciona y las fichas no declaran el motivo; no se puede afirmar. Requiere verificar la home o una ficha en los días posteriores al 17 nov para ver si el descuento desaparece.
2. **HIPÓTESIS:** el canal físico (3 cafeterías) es la principal fuente de suscriptores nuevos y de contenido social, y la pauta Meta existe para escalar más allá del barrio; el e-commerce solo no sostendría la adquisición. Requiere datos de tráfico o de la cuenta de anuncios para confirmarse.

### NO VERIFICADO

1. Posiciones exactas en Google/Bing para ninguna consulta; tráfico orgánico y pagado; volúmenes de búsqueda de "buna", "café Buna" o "café de especialidad México".
2. Meta description de la home, datos estructurados (JSON-LD) y Core Web Vitals.
3. Contenido de los sitemaps secundarios (`sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`, `sitemap_articles_1.xml`, `sitemap_agentic_discovery.xml`): los intentos de lectura devolvieron error 429 y no se reintentaron. Tampoco el número total de productos, colecciones ni páginas indexadas, ni si existen artículos de blog posteriores a abril de 2022.
4. Presencia o ausencia real en respuestas de ChatGPT, Google AI Overviews, Perplexity, Copilot o Meta AI.
5. Seguidores, frecuencia de publicación y alcance en Instagram (@bunamx), TikTok, YouTube y Facebook; gasto y campañas activas en Meta/Google/TikTok Ads (incluida la Biblioteca de Anuncios de Meta).
6. Si el 20% de descuento observado en fichas es Buen Fin, promoción de suscripción o promoción permanente.
7. Dirección actual de La Tostadora (Dr. Lucio 181 vs. Doctor Erazo 172, según la fuente).
8. Volumen y valoración de reseñas de la tienda en línea; presencia en marketplaces (Mercado Libre, Amazon, etc.).
9. Contenido completo de las páginas de políticas, envíos y cambios/devoluciones (no leídas en esta sesión).

---

## 7. Fuentes consultadas y consultas de búsqueda

### Páginas leídas directamente (browser.open, 13 nov 2026)

- https://buna.mx/ (home) — 19:20 UTC
- https://buna.mx/robots.txt — 19:20 UTC
- https://buna.mx/sitemap.xml — 19:20 UTC
- https://buna.mx/agents.md — 19:20 UTC

### Intentos de lectura fallidos (error 429, no reintentados)

- https://buna.mx/sitemap_pages_1.xml?from=2507669528&to=87935975494
- https://buna.mx/sitemap_blogs_1.xml
- https://buna.mx/sitemap_collections_1.xml?from=269211971&to=306558795846

### Consultas de búsqueda ejecutadas (browser.search, 13 nov 2026)

1. `Buna café especialidad México buna.mx`
2. `site:buna.mx`
3. `"Buna" café Oaxaca "Café Rico que Conserva Ecosistemas"`
4. `mejor café especialidad México Buna`
5. `Buna café opiniones reseñas comprar Buna 42`
6. `buna.mx blogs info café Buna artículos`
7. `Buna café Buen Fin descuento suscripción`
8. `Buna café Instagram buna.mx seguidores`
9. `Buna empresa B Agárica café conservación ecosistemas`
10. `comprar café de especialidad en línea México tienda`
11. `"Buna" café "Ámsterdam 285" Condesa cafetería`

### Fuentes de terceros citadas

- Local.mx — "Crónicas de Café presenta: Buna, un café que hace bien (y llega en kit a domicilio)" (23 abr 2020): https://www.local.mx/restaurantes/cafe/cronicas-de-cafe-buna-un-cafe/?amp=1
- Smartfood — "BUNA: Café rico para conservar ecosistemas mexicanos" (30 mar 2021): https://smartfood.com.mx/blogs/news/buna-cafe-rico-para-conservar-ecosistemas-mexicanos
- Mercados por un Futuro Sostenible — "BUNA: Café rico por los bosques y sus comunidades" (14 abr 2021): https://marketsforasustainablefuture.org/blog/buna-cafe-rico-por-los-bosques-y-sus-comunidades/
- Mercados por un Futuro Sostenible — Directorio, ficha de Buna: https://marketsforasustainablefuture.org/directory/buna/
- The Happening — "Café de especialidad: spots favoritos y cómo replicarlo en casa" (28 nov 2025): https://thehappening.com/que-es-el-cafe-de-especialidad-y-como-hacerlo-en-casa/
- MexBest — "5 cafeterías para celebrar el Día Internacional del Café" (1 oct 2026): https://mex-best.mx/bebidas/2026/10/01/cafeterias-que-puedes-visitar-para-celebrar-el-dia-internacional-del-cafe/
- Brewworld — "Cafeterías de Especialidad en México": https://brewwworld.com/es/cafes/mexico
- Franquiciasdecafe.com.mx — "10 cafeterías que son competencia de Starbucks en México": https://www.franquiciasdecafe.com.mx/cafeterias-competencia-starbucks/
- pos.do — "Buna 42 Ciudad De México ★4.5 | Opiniones y Carta": https://pos.do/es/ciudad-de-mexico/restaurante/buna-42-ciudad-de-mexico?v=1
- LaPieza — "Empleos en BUNA CAFE RICO": https://buna-cafe-rico.lapieza.io/
- Competidores citados en la consulta transaccional genérica: Lulú Café (https://lulucafe.mx/pages/comprar-cafe), Café Ge (https://cafege.mx/blogs/nuestroblog/organic-certified-mexican-coffee-online), Aroma de Altura (https://www.aromadealtura.com.mx/), Jaguar Coffee (https://www.jaguarcoffee.com.mx/pages/encuentra-tu-cafe-ideal), Olah Café (https://olahcafe.mx/blog/posts/olah-cafe-de-especialidad-de-oaxaca-d58be0d480be/), Tueste Café (https://tuestecafe.mx/products/bundle-especialidad-2-kg), Cafecito Mexicano (https://cafecitomexicano.com/)

---

## 8. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo ver la home renderizada (pop-ups, menús, footer completo), ni los perfiles de Instagram/TikTok/YouTube/Facebook, ni la Biblioteca de Anuncios de Meta.
- **Sin herramientas SEO de pago:** no hay datos de Search Console, Ahrefs, Semrush, SimilarWeb ni de ningún rank tracker. Las "posiciones" reportadas son el orden devuelto por `browser.search` en esta sesión, no posiciones medidas en Google/Bing.
- **Sin acceso a motores de respuesta de IA:** la sección GEO describe infraestructura de citabilidad observada, no presencia real en respuestas generativas.
- **Lectura parcial del sitio:** se leyeron home, sitemap índice, robots y agents.md; las fichas de producto, las páginas de misión y el blog se conocen solo por los fragmentos devueltos en resultados de búsqueda. No se abrieron fichas de producto, colecciones, ni páginas de políticas.
- **Tres intentos de lectura fallaron por límite de tasa (429)** — los sitemaps secundarios — y no se reintentaron, conforme a la regla de no repetir llamadas bloqueadas. Su contenido queda como no verificado, no como ausente.
- **Ventana temporal:** todo lo observado corresponde al 13 nov 2026, primer día del Buen Fin (13–17 nov); la home no mostraba campaña de Buen Fin ese día, pero las fichas mostraban un 20% de descuento de motivo no declarado.
