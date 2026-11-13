# F3 — SEO / GEO + presencia digital: Librerías Gandhi (gandhi.com.mx)

- **Frente:** F3 (SEO/GEO + presencia digital) — Fase 2, WO-E-LARPING
- **Sitio:** Librerías Gandhi — https://www.gandhi.com.mx/
- **Fecha de investigación:** 13 nov 2026
- **Método:** `browser.search` (búsqueda web) y `browser.open` (lectura de texto de páginas). Sin navegador en vivo, sin Search Console, sin herramientas de tráfico/rankings, sin interrogar motores de IA.
- **Convención:** cada afirmación lleva etiqueta **[OBSERVADO]** (visto en una fuente consultada hoy), **[INFERIDO]** (deducción razonable a partir de lo observado, sin prueba directa) o **[NO VERIFICADO]** (no pudo comprobarse con los medios de este frente). No se afirman posiciones, tráfico ni volúmenes que no se hayan visto.

---

## 1. Visibilidad en buscadores

### 1.1 Búsqueda de marca
**[OBSERVADO]** La búsqueda de marca («Librerías Gandhi México libros comprar online») devuelve la home en primer lugar, con título `Librerías Gandhi | Librería online en México` y descripción propia que afirma: «más de 5,000,000 de libros, ebooks y audiolibros», «MÁS DE 40 LIBRERÍAS EN TODO EL PAÍS», «Envíos a todo el país y el extranjero», «Entregas nacionales de 4 a 6 días», venta de tarjetas de regalo y venta al mayoreo (mínimo $10,000, entrega 4–6 días hábiles tras cotización y pago).
- Home: https://www.gandhi.com.mx/
- Mayoreo: https://www.gandhi.com.mx/mayoreo

### 1.2 `site:gandhi.com.mx` — indexación de producto
**[OBSERVADO]** La consulta `site:gandhi.com.mx libros` devuelve fichas de producto indexadas y rastreadas recientemente (últimos rastreos del índice: 1–6 días antes del 13 nov 2026). Ejemplos devueltos, todos con precio en MXN y estado de disponibilidad:
- Estuche Jorge Luis Borges esencial — $809.10 — https://www.gandhi.com.mx/estuche-jorge-luis-borges-esencial--contiene--poesia-completa-cuentos-completos-inquisiciones--9788466382557/p
- Historia de la guerra cristera en México (1926–1929) — $503, «no está disponible actualmente» — https://www.gandhi.com.mx/historia-de-la-guerra-cristera-en-mexico--1926-–-1929--9788418414800/p
- Narcocracia (Anabel Hernández) — $332.10 — https://www.gandhi.com.mx/narcocracia-9786073867191/p
- Dawn Of Rebellion Collection — $89, instock — https://www.gandhi.com.mx/dawn-of-rebellion-collection/p
- Desde el centro de America — $199, instock — https://www.gandhi.com.mx/desde-el-centro-de-america-9786073836012/p

**[INFERIDO]** El catálogo de producto está bien indexado y con rastreo fresco (días, no semanas). El patrón de URL es `/<slug>-<ISBN>/p` (a veces con `?idsku=`), es decir, URL canónica por ISBN, buen diseño para SEO de «long tail» por título/autor/ISBN.
**[NO VERIFICADO]** Número total de URLs indexadas; no se dispone de Search Console ni de un conteo `site:` fiable (los conteos de `site:` no son exactos y no se reportan aquí como cifra).

### 1.3 Búsquedas genéricas («comprar libros en línea México»)
**[OBSERVADO]** En la búsqueda genérica «comprar libros en línea México» (13 nov 2026), el primer bloque de resultados lo dominan Buscalibre, Cafebrería El Péndulo y El Bazar del Libro; Gandhi aparece como mención dentro de un artículo comparativo de terceros, no con su home ni con una ficha de producto en los primeros 7 resultados devueltos:
- «Las mejores tiendas en línea para los amantes de la lectura en México» — https://rastrearpedido.com.mx/blog/mejores-tiendas-linea-lectura-mexico/ — describe a Gandhi como «un referente en el panorama literario mexicano», con «selección curada», ebooks para lector Kobo y «recomendaciones personalizadas», y como punto débil «el envío puede ser costoso si no se llega al mínimo requerido para ser gratuito» (nota: esto contradice el «Envío gratis siempre a todo México» actual de la home — ver §6).
- En ese mismo artículo se listan como competidores directos: Amazon México, El Sótano, Mercado Libre, Librerías Porrúa, Apple Books / Google Play Books.

**[INFERIDO]** Gandhi gana la búsqueda de marca con claridad, pero en la genérica transaccional compite contra marketplaces y agregadores (Buscalibre, Amazon, Mercado Libre) que ocupan la parte visible; su ventaja no es el ranking genérico sino la marca + el catálogo por ISBN. Esto es una lectura del conjunto de resultados devuelto, **no** una medición de posición (no se afirma «posición N»).
**[NO VERIFICADO]** Posición exacta para ninguna keyword; volumen de búsqueda; CTR; tráfico orgánico (no se usan SimilarWeb/Ahrefs/Semrush en este frente).

---

## 2. robots.txt

**[OBSERVADO]** Leído vía `browser.open` el 13 nov 2026. Ojo: la copia servida por el lector indica «Page crawled 191 days ago (2026-05-06)», por lo que **el contenido puede no ser la versión vigente hoy**; se reporta lo que esa copia contiene:
- URL: https://www.gandhi.com.mx/robots.txt
- `User-agent: *` con `Disallow:` a: `/img/`, `/account/`, `/login/`, `/checkout/` (y variantes `/checkout/*`, `/checkout#/*`), `/busca/`, `/buscapagina/`, `/buscavazia`, `/quick-view/`, `/espiar/`, `/secure/`, `/admin/`, `/files/`, `/Sistema/`, `/wishlist`, `/lista-de-deseos`, `/te-ayudamos`, `/*/d$`, `/*.aspx`.
- `Allow:` explícitos para recursos: `/*.css`, `/*.jpeg`, `/*.js`, `/*.png`, `/*.webp`, `/*.jpg`, `/*.svg`, `/*.woff`; y para parámetros: `/*?idsku*`, `/*?skuId=`, `/*?page=`, `/*utm_`.
- `Allow:` a endpoints JSON/API de la plataforma (GraphQL de VTEX, catálogo, sesiones) — ver §5.
- Declaración de sitemap: `Sitemap: https://www.gandhi.com.mx/sitemap.xml`

**[OBSERVADO]** En esa copia **no aparece ninguna regla dirigida a crawlers de IA** (no se mencionan GPTBot, ClaudeBot, CCBot, PerplexityBot, Google-Extended, Applebot-Extended ni similares). La única regla es `User-agent: *`.
**[INFERIDO]** Al no haber bloqueo específico, los crawlers de IA no están bloqueados por robots.txt en esa copia (rigen las reglas genéricas de `*`, que permiten el rastreo salvo las rutas disueltas). Es una inferencia a partir de la ausencia en el archivo, no una prueba de que un crawler de IA concreto haya rastreado el sitio.
**[NO VERIFICADO]** Que la copia del 6 may 2026 siga vigente el 13 nov 2026; habría que releer el archivo en vivo para confirmarlo.

---

## 3. Sitemap

**[OBSERVADO]** Índice leído vía `browser.open` el 13 nov 2026 (copia rastreada «less than a minute ago», 2026-11-13 20:01 UTC):
- URL: https://www.gandhi.com.mx/sitemap.xml
- Es un **sitemap index** con, como mínimo, estos grupos visibles antes de truncarse la lectura:
  - `brand-0.xml` … `brand-43.xml` — **44 archivos de marca/editorial**, todos con `lastmod 2026-11-13`.
  - `category-0.xml` — **1 archivo de categorías**.
  - `custom-apps-routes-1.xml` y `custom-user-routes-1.xml` — rutas personalizadas.
  - `product-0.xml` … al menos `product-1182.xml` visible en la lectura (la salida del lector se truncó en ese punto; el índice continúa más allá). **No se afirma un total**: lo observado es «≥1.183 archivos de producto listados hasta el punto de truncamiento», todos con `lastmod 2026-11-13`.
- La fecha `lastmod` uniforme (2026-11-13) en todo el índice indica generación diaria del sitemap.

**[INFERIDO]** Estructura típica de VTEX (ver §5): sitemaps fragmentados por tipo (producto/marca/categoría), regenerados a diario. Escala de catálogo muy grande (cientos de miles de URLs de producto como orden de magnitud plausible por el número de archivos, **sin afirmar cifra de URLs**: cada archivo puede contener hasta 50.000 URLs por estándar, pero el conteo real por archivo no se leyó).
**[NO VERIFICADO]** Número total de URLs del sitemap (no se descargaron ni contaron los archivos hijos); contenido de `category-0.xml`, `custom-*.xml` y de ningún `product-N.xml` individual; no se observó un sitemap específico de contenido editorial/blog.

---

## 4. Datos estructurados (JSON-LD observable)

**[OBSERVADO — vía índice de búsqueda, no vía código fuente]** Los resultados de búsqueda de fichas de producto muestran campos estructurados consistentes con marcado `Product` + `Offer` + `FAQPage`:
- `Product`: nombre («Narcocracia - Librerías Gandhi | Librería online en México»), `Price: 332.1 MXN`, `Availability: instock`.
- `Frequently Asked Questions` con pares Q/A en la ficha (ej. Narcocracia: «¿Quién es el autor…? / Anabel Hernández…»; Borges: «¿Qué libros incluye exactamente este estuche…?»).
- Campos de ficha visibles en el índice: autor, editorial, tapa (blanda/dura), nº de páginas, idioma, fecha de publicación, ISBN (ej. Historia de la guerra cristera: ISBN 9788418414800, 304 páginas, 14 oct 2024; Vida de Hernán Cortés: ISBN 9786073842525).

**[INFERIDO]** El marcado de producto está presente y es consumido por el buscador (rich results de precio/disponibilidad y FAQ). La plantilla VTEX genera este marcado por defecto; la presencia de FAQ por producto es un activo GEO (ver §8).
**[NO VERIFICADO]** El JSON-LD literal: el intento de abrir directamente una ficha de producto (`/narcocracia-9786073867191/p`) devolvió **429 del servicio de lectura** y, por regla, **no se reintentó** (ver § «Sin verificar»). Tampoco se verificaron marcados `Organization`, `Book`, `BreadcrumbList`, `WebSite/SearchAction` ni `Review/AggregateRating` (no se observó ninguna reseña con estrellas en los resultados).

---

## 5. Plataforma y arquitectura técnica observable

**[INFERIDO — con evidencia fuerte]** El sitio corre sobre **VTEX** (plataforma e-commerce):
- Evidencia en robots.txt: rutas `/_v/public/graphql/v1`, `/_v/segment/routing/vtex.store@2.x/`, `/api/catalog_system/pub/products/search`, `/_v/segment/routing/`, `/arquivos/ids/*width=*` (CDN de imágenes VTEX).
- Evidencia en URLs indexadas: `/_v/segment/routing/vtex.store@2.x/product/538371/...` (URL de producto con parámetros VTEX).
- Evidencia en sitemap: partición `product-/brand-/category-/custom-*-routes` propia de VTEX.
- Consecuencia SEO: URLs limpias por ISBN, sitemap automático diario, marcado de producto de plantilla, pero también dependencia de la plantilla (contenido editorial limitado, ver §6).

**[OBSERVADO]** Home (leída 13 nov 2026, rastreo 18:20 UTC): título `Librerías Gandhi | Librería online en México`; claim «Envío gratis siempre a todo México»; navegación superior: Librerías, Eventos, Tinta, Radio Gandhi, Ayuda, Tarjetas de regalo. Secciones de home: LOS MÁS LEÍDOS, NOVEDADES, LIBROS DE ARTE, EBOOK Y AUDIOLIBROS, HARRY POTTER, EDICIONES GANDHI, JUEGOS Y JUGUETES, RINCÓN DE OPORTUNIDADES, «Destacados de Buen Fin».
**[NO VERIFICADO]** Velocidad/Core Web Vitals, versión móvil, hreflang, canonicals, ni paginación de categorías (no medidos en este frente).

---

## 6. Contenido editorial propio

### 6.1 Páginas temáticas `/t/` (el contenido editorial indexable)
**[OBSERVADO]** Las páginas de tema (`/t/<tema>`) combinan un texto editorial introductorio (2 párrafos) con el grid de productos. Ejemplo leído completo:
- https://www.gandhi.com.mx/t/vinos-y-catas — «Sumérgete en el fascinante mundo de los vinos y catas… Nuestra selección de libros y guías sobre vinos y catas está diseñada para todos aquellos que desean profundizar… desde los principiantes hasta los conocedores. A través de nuestras recomendaciones, te invitamos a explorar… las diferentes regiones vinícolas, aprender sobre las técnicas de cata y descubrir maridajes…» + 14 libros listados (El A, E, I, O, U del vino; Revolución del vino; Guía Catadores del Vino Mexicano 2024, de Rodolfo Gerschman, editorial Gandhi, etc.).
**[INFERIDO]** Es el formato SEO principal de Gandhi: *landing* temática con intro redactada + catálogo. Es contenido útil pero corto y genérico (plantilla de 2 párrafos por tema), no una guía en profundidad.

### 6.2 Tinta, Radio Gandhi, podcast, revista — contenido fuera del dominio principal
**[OBSERVADO]**
- **Tinta**: club de suscripción mensual («recibe cada mes en tu casa una selección de libros elegidos para ti por Gandhi», en `gandhi.com.mx/tinta`, citado en la descripción del podcast). Es producto/servicio, no blog.
- **Radio Gandhi**: enlace en la navegación principal de la home y de las fichas de producto.
- **Podcast «Desde el Librero»** (podcast de Librerías Gandhi, en Spotify): temporada 2, capítulo 53 (20 oct 2026, con Elvira Sastre); capítulo 9 dedicado al «55 aniversario de Librerías Gandhi: Leamos futbol» (con Alberto Lati, presentador Jorge F. Hernández); secciones fijas «Terapia literaria», «Maura te recomienda un libro», «el librero de Valentina» y «Recomendaciones Gandhi, con Francisco Goñi». Descripciones remiten a `gandhi.com.mx/tinta`, `mascultura.mx` y `revistaleemas.mx` (revista digital gratuita).
  - https://creators.spotify.com/pod/profile/desde-el-librero-gandhi/episodes/Captulo-53-Dile-Adis-al-Fro-con-Elvira-Sastre-e3a7pan
- **Revista Lee Más** (`revistaleemas.mx`) y **Más Cultura** (`mascultura.mx`): propiedades editoriales satélite citadas por el propio Gandhi, fuera de `gandhi.com.mx`.

**[OBSERVADO — ausencia]** En las búsquedas realizadas («Gandhi librería blog recomendaciones libros», `site:gandhi.com.mx`) **no apareció ningún blog ni artículo de guía/recomendación alojado en `gandhi.com.mx`** (no hay URLs tipo `/blog/...` en los resultados). El contenido de recomendación vive en podcast, revista externa y páginas `/t/`.
**[NO VERIFICADO]** Si existe un blog con otra ruta (p. ej. subdominio) no detectado por estas búsquedas; existencia de un club de lectura propio con nombre y página (no se encontró ninguno); frecuencia de publicación de las páginas `/t/`.

### 6.3 Eventos y sello propio
**[OBSERVADO]** «Eventos» está en la navegación principal; «EDICIONES GANDHI» es sección de home y sello editorial propio (ej. Guía Catadores del Vino Mexicano 2024, editorial Gandhi). Fuentes secundarias citan presentaciones de libros y eventos culturales en tienda.
**[NO VERIFICADO]** Calendario de eventos indexable en el sitio (no se abrió la página de Eventos).

---

## 7. Autoridad externa (prensa, historia, terceros)

**[OBSERVADO]**
- **Historia documentada:** fundada en junio de 1971 por Mauricio Achar; primer local de ~150 m² en Miguel Ángel de Quevedo 128, CDMX, con cafetería y galería; concepto de librería abierta (romper el mostrador). Fuentes: entrevista a Mauricio Achar en *La Jornada Semanal* (1 sep 1996) — https://wikileaks.jornada.com.mx/1996/09/01/sem-achar.html ; *El Economista* (27 abr 2009) — https://www.eleconomista.com.mx/el-empresario/Reinventese-y-perdure-en-el-mercado-20090427-0064.html ; *Expansión* — https://expansion.mx/expansion/2011/09/14/libreras-gandhi-por-un-cambio-de-pgina . El Economista (2009) añade: tienda en internet desde 1996 y «primera página en ofrecer libros electrónicos en México» (alianza Publidisa, 10.000 títulos entonces).
- **55 aniversario en 2026** (1971→2026), celebrado en el podcast «Desde el Librero» T2 cap. 9.
- **Escala (fuentes secundarias, cifras con fecha):** un documento tipo e-book institucional (AnyFlip, sin fecha clara) afirma 37 sucursales, 270 puntos de venta en Walmart y 11 en Palacio de Hierro, y programa de cliente frecuente «Página 1» con «más de 200.000 socios» — https://anyflip.com/nselg/kfxr/basic ; *Valor de Cambio* (c. 2017, «hace 46 años») repite 37 establecimientos + 270 Walmart + 11 Palacio de Hierro, «1.200.000 visitas mensuales» a la web y «cinco millones de libros anuales» — https://valordecambio.com/asi-es-como-gandhi-quiere-convertirse-en-el-netflix-de-los-libros/ . **Estas cifras son viejas (2017 o anteriores) y se citan como contexto histórico, no como dato actual.**
- **Presencia física actual según la propia home:** «MÁS DE 40 LIBRERÍAS EN TODO EL PAÍS» (sin número exacto).
- **Terceros que la citan como referencia:** artículo comparativo Rastrear Pedido (actualizado 9 may 2026) la llama «referente en el panorama literario mexicano»; Dundle la describe como «la mayor cadena de librerías de México», fundada en 1971 — https://dundle.com/us/es/gandhi/ ; prensa local (Imagen de Veracruz, 2023) cubre aperturas de sucursal con top 10 de más vendidos — https://imagendeveracruz.mx/veracruz/Top-10-de-los-libros-mas-vendidos-en-libreria-Gandhi-20230901-0041.html .
- **Distribución editorial:** la UAA destaca que sus libros se venden en Gandhi por sus «estrictos criterios de selección» — https://www.uaa.mx/portal/?p=9698 .

**[NO VERIFICADO]** Premios de e-commerce/SEO/marketing ganados por Gandhi (no se encontró ninguno en las búsquedas); número actual exacto de sucursales; reseñas agregadas (Trustpilot/Google) y su puntuación; backlinks (no se midió perfil de enlaces).

---

## 8. Pauta observable (UTM / anuncios)

**[OBSERVADO]** Existe al menos una URL de Gandhi indexada con parámetros de campaña de pago en Facebook:
- https://www.gandhi.com.mx/_v/segment/routing/vtex.store@2.x/product/538371/my-little-dinosaur-library--10-books-set--9781951086046/p?utm_source=Facebook_Mobile_Feed&utm_medium=paidsocial&utm_campaign=lvly_fb_catalogo_perf_vtas&utm_content=lvly_fb_catalogo_perf_vtas_compradores&utm_term=120249925872970576&utm_id=120249925869350576&media_type=image
  - Lectura: campaña de catálogo en Facebook (`paidsocial`, `lvly_fb_catalogo_perf_vtas`, segmento «compradores»), con `media_type=image`. Es una URL de producto con UTM indexada por el buscador (fuga de parámetro de pago al índice).
- El robots.txt permite explícitamente `/*utm_`, coherente con aterrizajes de pago.
- En la home hay módulo «Destacados de Buen Fin» (13 nov 2026, en plena temporada de Buen Fin).

**[NO VERIFICADO]** Biblioteca de Anuncios de Meta (no consultable con los medios de este frente — requiere navegador en vivo); pauta en Google Ads (no observable sin herramientas de ads); inversión, vigencia ni creatividades de la campaña citada (solo se vio la URL con UTM, no el anuncio).

---

## 9. Citabilidad GEO (evaluación del contenido, sin interrogar motores de IA)

*Per la WO: no se interrogó ningún motor de IA; esto es una evaluación del material disponible.*

### A favor
1. **Catálogo estructurado por ISBN** — cada ficha trae autor, editorial, formato, páginas, idioma, fecha de publicación, ISBN y sinopsis; es el tipo de dato factual que un motor de IA puede citar con precisión («¿dónde comprar X en México?», «¿cuánto cuesta…?»).
2. **FAQ por producto** — preguntas y respuestas redactadas en la ficha (autor, contenido del estuche, tema del libro) que responden a consultas en lenguaje natural.
3. **Páginas temáticas `/t/` con intro definitoria** — responden a «libros sobre [tema]» con una definición + lista curada; formato citable para consultas de descubrimiento.
4. **Autoridad de marca y entidad clara** — 55 años de historia, fundador y fecha fundacional documentados en prensa nacional, presencia física en todo el país, sello editorial propio; una entidad fácil de identificar y atribuir.
5. **Señales de frescura** — sitemap regenerado a diario (lastmod 2026-11-13), fichas rastreadas hace 1–6 días, podcast activo en 2026 (T2 cap. 53, oct 2026).
6. **Precio y disponibilidad visibles y estructurados** — «Precio Gandhi» (precio exclusivo online) + stock; útil para respuestas transaccionales.

### En contra
1. **Sin reglas para crawlers de IA ni `llms.txt` verificado** — no hay una política explícita de acceso para GPTBot/ClaudeBot/etc. (ver §2 y § «Sin verificar»); tampoco un archivo de contexto para IA.
2. **Contenido editorial fino y disperso** — no hay guías long-form («qué libro leer si te gustó X», comparativas, listas argumentadas) en el dominio principal; la recomendación vive en podcast (audio, poco citable por texto), en `revistaleemas.mx` y `mascultura.mx` (dominios separados que diluyen la atribución a `gandhi.com.mx`) y en intros de 2 párrafos por tema.
3. **FAQ de producto con pinta de plantilla** **[INFERIDO]** — las preguntas/respuestas se repiten con la misma estructura en fichas muy distintas; si son auto-generadas, aportan menos señal de autoría/experiencia (E-E-A-T) que una reseña o recomendación firmada.
4. **Sin reseñas de usuarios visibles en el índice** — las fichas piden «inicia sesión para escribir un comentario», pero no se observó contenido de reseñas ni `AggregateRating` en los resultados; falta prueba social textual citable.
5. **Fuga de URLs con UTM al índice** (§8) — diluye canonicidad y puede generar duplicados de la misma ficha con parámetros distintos (aunque robots permite `?idsku`/`?skuId`/`?page`/`utm_`, lo que sugiere que lo gestionan de forma deliberada).
6. **Contradicción aparente de envío** — la home dice «Envío gratis siempre a todo México» mientras un comparador actualizado en may 2026 advierte de coste de envío bajo un mínimo; **[NO VERIFICADO]** cuál es la política vigente exacta (la home es la fuente primaria y es la que se cita como vigente).

### Veredicto GEO
**[INFERIDO]** Gandhi es altamente citable para consultas **transaccionales y factuales** (precio, disponibilidad, ficha bibliográfica, «dónde comprar [libro] en México») y débil para consultas **de recomendación y descubrimiento** («qué libro me recomiendas sobre…», «mejores libros de…»), donde su contenido es fino, está en audio o vive fuera de su dominio. Para un dropshipper que quiera replicar el modelo, la lección es: el catálogo estructurado por ISBN + FAQ por producto es el activo GEO barato; la recomendación editorial con firma es el hueco que Gandhi deja abierto.

---

## 10. Lecciones reutilizables para el dropshipping (lectura F3)

1. **URL por ISBN + sitemap diario fragmentado** = indexación masiva de long tail sin esfuerzo editorial por ficha.
2. **Página temática `/t/` con 2 párrafos + grid** = la unidad mínima viable de SEO de categoría; replicable por tema/nicho en un catálogo dropshipping.
3. **FAQ por producto** = activo GEO de bajo coste; mejor si la respuesta es específica del libro (no plantilla genérica).
4. **Marca + tienda física como E-E-A-T**: sin 55 años de historia, un dropshipper nuevo debe compensar con autoría firmada, reseñas reales y guías propias.
5. **No fragmentar el contenido editorial en dominios satélite** si se quiere que la citabilidad recaiga en la tienda.

---

## Sin verificar

1. **JSON-LD literal de una ficha de producto** — el `browser.open` a https://www.gandhi.com.mx/narcocracia-9786073867191/p devolvió **429 (límite de peticiones del servicio de lectura)**; por regla no se reintentó. El marcado `Product`/`FAQPage` solo está confirmado vía los campos que muestra el índice de búsqueda (§4), no por inspección del código fuente. Tampoco se verificaron `Organization`, `Book`, `BreadcrumbList`, `WebSite` ni `AggregateRating`.
2. **`llms.txt`** — el `browser.open` a https://www.gandhi.com.mx/llms.txt también devolvió **429**; no se reintentó. No se sabe si existe.
3. **Vigencia del robots.txt** — la copia leída es del 6 may 2026 (191 días antes); la versión vigente el 13 nov 2026 no se pudo releer por el mismo 429 posterior.
4. **Página de Eventos y página de Tinta** (`gandhi.com.mx/tinta`) — no se abrieron; su contenido se cita solo a través de la home y del podcast.
5. **Posiciones, tráfico, volúmenes y backlinks** — no medidos (sin Search Console ni herramientas SEO de terceros en este frente).
6. **Biblioteca de Anuncios de Meta y Google Ads** — no consultadas (requieren navegador en vivo); solo se documentó la URL con UTM de Facebook (§8).
7. **Número actual de sucursales y política de envío vigente** — la home dice «más de 40 librerías» y «envío gratis siempre»; las cifras de 37 sucursales / 270 Walmart / 11 Palacio de Hierro son de fuentes de 2017 o anteriores y no se confirman como actuales.
8. **Premios, reseñas agregadas y existencia de un blog en otra ruta/subdominio** — buscados sin resultado; no se afirma que no existan, solo que no se encontraron con estas búsquedas.
9. **Página de categoría genérica de libros y paginación** — no se inspeccionaron directamente.

---

## Resumen ejecutivo

- Gandhi domina la búsqueda de marca y tiene su catálogo por ISBN bien indexado y con rastreo fresco (1–6 días), pero en la genérica transaccional («comprar libros en línea México») la parte visible la ocupan Buscalibre, Péndulo y marketplaces.
- Su robots.txt (copia del 6 may 2026) no bloquea crawlers de IA — no los menciona — y su sitemap index, regenerado a diario, fragmenta el catálogo en 44 archivos de marca, 1 de categorías y más de 1.180 archivos de producto observados.
- Corre sobre VTEX, con URL canónica por ISBN, precio/disponibilidad estructurados y FAQ por producto: un activo GEO fuerte para consultas factuales y transaccionales.
- Su contenido editorial es fino: intros de 2 párrafos en páginas temáticas `/t/` y la recomendación real vive en podcast («Desde el Librero», activo en 2026), revista Lee Más y mascultura.mx, fuera del dominio principal.
- Hay pauta de catálogo en Facebook documentada por una URL con UTM indexada (`lvly_fb_catalogo_perf_vtas`, segmento compradores); la Biblioteca de Anuncios no se pudo consultar.
- Veredicto GEO: muy citable para «dónde comprar / cuánto cuesta [libro]», débil para «qué libro me recomiendas», donde deja abierto el hueco de guías firmadas que un dropshipper nuevo puede ocupar.
- Sin verificar por 429 del servicio de lectura: el JSON-LD literal de producto, `llms.txt` y la vigencia del robots.txt; tampoco se midieron posiciones, tráfico ni backlinks.
