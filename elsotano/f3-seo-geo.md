# F3 — SEO / GEO + presencia digital: El Sótano

- **Sitio:** https://elsotano.com/ — Librerías El Sótano (Librería del Sótano Coyoacán, S.A. de C.V.)
- **Fecha de investigación:** 13 nov 2026
- **Frente:** F3 (SEO/GEO + presencia digital) — Fase 2, WO-E-LARPING
- **Método:** `browser.search` (búsqueda web) y `browser.open` (lectura de texto de páginas). Sin navegador en vivo, sin interrogar motores de IA, sin publicar ni contactar, sin extraer datos personales en masa.
- **Leyenda:** **OBSERVADO** = visto directamente en una página o resultado devuelto por la herramienta · **INFERIDO** = conclusión razonada a partir de lo observado, marcada como tal · **NO VERIFICADO** = no se pudo comprobar con los medios de este frente; va a la sección final.

## 1. Visibilidad en buscadores

### 1.1 Búsqueda de marca — OBSERVADO
- La home `https://www.elsotano.com/` aparece como primer resultado para "El Sótano librería México elsotano.com", con fichas de sucursales (Coyoacán — Av. Miguel Ángel de Quevedo 209; Roma — Av. Insurgentes Centro 222-Loc A; otra en Ignacio Allende 38, Coyoacán), teléfono y horarios.
- Título de la home (texto extraído): **"Librerías el Sótano compra tu libro favorito en línea"**. Teléfono visible en home y fichas: **800 276 8266**.
- **INFERIDO:** la marca está bien resuelta en búsqueda navegacional (el usuario que ya conoce el nombre la encuentra). No se afirma ninguna posición numérica (#1, #2…) más allá del orden observado en esa única consulta, que varía por usuario, fecha y ubicación.

### 1.2 `site:elsotano.com` — OBSERVADO
- La consulta `site:elsotano.com` devolvió casi exclusivamente **fichas de producto** (URL del tipo `/libro-<titulo>-<id>`), no home, ni categorías, ni contenido editorial.
- Muestra de 11 fichas devueltas, con último rastreo de **1 a 12 días** antes del 13 nov 2026 (p. ej. *Los 5 niveles de liderazgo* rastreado hace 1 día; *Trilogía Africanus* hace 9 días). **INFERIDO:** el catálogo de producto se rastrea con frecuencia; es el grueso del índice visible.
- En esa muestra, **7 de 11 fichas marcaban `OutOfStock`** en el dato estructurado extraído (*Los 5 niveles de liderazgo* $382.50; *The Unwedding* $539.10; *The Twilight Saga* $2,879.00; *The Wild Robot on the Island* $415.00; *Agenda penal federal 2025* $460.00; *Muse of Nightmares* $229.50; *A Good Life* $355.50). Las otras 4 no mostraban disponibilidad en el extracto. **Esto es una muestra sesgada por el orden del buscador, NO una tasa de rotura de stock del catálogo**; no se extrapola.
- Ejemplos de fichas con precio MXN y stock en el extracto:
  - https://www.elsotano.com/libro-los-5-niveles-de-liderazgo-10639401 — $382.50 MXN, OutOfStock
  - https://elsotano.com/libro-trilogia-africanus-edicion-pack-con-el-hijo-del-consul-las-legiones-malditas-la-traicion-de-roma-10651487 — $899.00 MXN
  - https://www.elsotano.com/libro-the-twilight-saga-pd-deluxe-hardcover-collection-10713851 — $2,879.00 MXN, OutOfStock
  - https://www.elsotano.com/libro-share-it-student-book-5-sb-with-sharebook-and-navio-app-10607923 — $865.00 MXN, InStock
- **NO VERIFICADO:** número total de URLs indexadas, tráfico, volúmenes de búsqueda y posiciones para ninguna keyword. No se inventan.

### 1.3 Búsquedas genéricas ("comprar libros en línea México") — OBSERVADO
- En la consulta "comprar libros en línea México librería", El Sótano **no apareció entre las homepages de tienda en los primeros resultados**: dominaron Buscalibre, Cafebrería El Péndulo y El Bazar del Libro. El Sótano solo apareció **citado dentro de un listicle de terceros**, "Las mejores tiendas en línea para los amantes de la lectura en México" (rastrearpedido.com.mx, actualizado 2026-05-09), en tercer lugar tras Amazon México y Gandhi, descrito como "librería mexicana popular por su extensa variedad de títulos y atractivos descuentos".
  - Fuente: https://rastrearpedido.com.mx/blog/mejores-tiendas-linea-lectura-mexico/
- **INFERIDO:** en intención genérica transaccional ("comprar libros en línea"), la visibilidad orgánica propia es débil frente a marketplaces/agregadores y frente a Gandhi; la marca depende de que el usuario ya la conozca o de ser mencionada por terceros. No se afirma una posición: una sola consulta no es un ranking.
- Contraste con Gandhi (solo como referencia observada en la misma tanda): su página de mayoreo declara "más de 5,000,000 de libros, ebooks y audiolibros" y "más de 40 librerías en todo el país" (https://www.gandhi.com.mx/mayoreo). El Sótano, según entrevista de 2021 a su director general Rodrigo López, tenía entonces **"más de 15 sucursales"** (https://es.everand.com/podcast/590494235/T05E12-Trascendi-con-Rodrigo-Lopez-Rodrigo-Lopez-se-desempena-como-Director-General-de-Libreria-El-Sotano-una-de-las-cadenas-de-librerias-mas-im). **NO VERIFICADO:** el número actual de sucursales en 2026 ni el tamaño actual del catálogo de El Sótano; la cifra "15+" es de 2021.

## 2. robots.txt — OBSERVADO (lectura directa, 13 nov 2026, 20:01 UTC)

URL: https://elsotano.com/robots.txt

- Declara un solo sitemap: `Sitemap: https://www.elsotano.com/sitemap.xml`
- **Googlebot / Googlebot-Image / AdsBot-Google** y **`User-agent: *`** tienen prohibido (`Disallow`):
  - `/buscar`, `/busqueda`, `/cesta/`, `/favoritos/`, `/tagus/`, `/cdn-cgi/`
  - **y, lo relevante para SEO: `/editorial/`, `/autor/`, `/libros-de/`, `/ebooks-de/`, `/categoria/`, `/noticias/`**
- **bingbot:** bloqueos similares (`/buscar/`, `/cesta/`, `/editorial/`, `/autor/`, `/busqueda/`, `/libros-de/`, `/cdn-cgi/`, `/ebooks-de/`, `/categoria/`, `/noticias/`).
- **Bloqueo total (`Disallow: /`)** solo para dos crawlers concretos: **`Amazonbot`** y **`AwarioRssBot` / `AwarioSmartBot`**.
- **No aparece ninguna regla nominal para GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, CCBot, Google-Extended, Meta-ExternalAgent ni otros crawlers de IA.** Esos agentes caen bajo `User-agent: *`: pueden rastrear el sitio excepto las rutas listadas arriba.

**INFERIDO (consecuencia directa):**
- El bloqueo de `/noticias/`, `/categoria/`, `/autor/` y `/editorial/` para `*` —y por tanto también para crawlers de IA no nombrados— **impide indexar (y citar) justo las páginas que darían autoridad temática**: notas/recomendaciones, páginas de autor y de editorial, y categorías. El SEO del sitio queda concentrado en fichas de producto y home.
- El bloqueo de `Amazonbot` es una decisión defensiva frente a un competidor/agregador, no frente a buscadores; el de Awario, frente a monitoreo de marca. La ausencia de bloqueo a crawlers de IA es, deliberada o no, una puerta abierta a GEO: el contenido permitidosí es rastreable por motores de IA.

## 3. Sitemap — OBSERVADO (parcial)

- `https://www.elsotano.com/sitemap.xml` es un **índice con 7 sub-sitemaps**: `https://www.elsotano.com/seo/sitemap1.xml` … `sitemap7.xml` (leídos en una sola línea concatenada por la herramienta; no se pudo separar con certeza el contenido de cada uno).
- **NO VERIFICADO:** el conteo de URLs de cada sub-sitemap ni el total del catálogo. La lectura directa de `sitemap1.xml` devolvió **429 (límite de peticiones del servicio de lectura)** y, por regla del encargo, **no se reintentó**. Queda anotado en "Sin verificar".

## 4. Datos estructurados (JSON-LD observable) — OBSERVADO

- En ficha de producto, el texto extraído expone un bloque **"Product Offer / JSON-LD Product.offers"** con: nombre, descripción en formato fijo `Libro: <título>, ISBN: <…>, Autor: <…>, Editorial: <…>`, precio en MXN y disponibilidad (`InStock` / `OutOfStock`).
  - Ejemplo verificado en lectura directa de https://www.elsotano.com/libro-los-5-niveles-de-liderazgo-10639401: *Los 5 Niveles De Liderazgo*, ISBN 9781455504305, John C. Maxwell, Center Street, $382.50 MXN, OutOfStock. La ficha añade tabla con tema/subtema (Superación Personal y Autoayuda / Autoayuda), 384 páginas, año 2011, medidas 20.30 × 13.30 cm, y la sinopsis en inglés de la editorial.
- **INFERIDO:** el marcado `Product` + `offers` con precio y disponibilidad es lo que permite a Google mostrar precio/stock en resultados y lo que un motor de IA puede leer de forma fiable para responder "¿cuánto cuesta y hay stock?". Es el activo estructurado más sólido del sitio.
- **NO VERIFICADO:** si existen tipos JSON-LD `Book` (con ISBN como identificador), `Organization`, `BreadcrumbList`, `LocalBusiness` o `FAQPage` en el `<head>`: la extracción de texto de `browser.open` muestra el bloque `Product.offers` pero no garantiza haber expuesto todo el `<head>`. No se afirma su ausencia ni su presencia. Tampoco se verificó marcado en home ni en páginas de sucursal.

## 5. Contenido editorial propio — OBSERVADO (ausencia notable)

- **`site:elsotano.com noticias` devolvió 0 resultados.** Coherente con el `Disallow: /noticias/` de robots.txt: aunque existiera la sección, no se indexa.
- La home sí muestra contenido de contexto, pero **no indexable como artículo**: biografías de autora en la home (p. ej. texto sobre Sarah J. Maas y sus sagas *Una corte de rosas y espinas* / *Ciudad Medialuna*), una sección "Recomendaciones", banners de campaña con fecha (13 nov 2026: preventa "mensajes en tazas de café"; 9 nov 2026: aniversario, Isabel Allende, *El príncipe de la noche*, *Más que rivales*), y un bloque de proceso de compra en 4 pasos (encuentra tu libro → carrito → pago → envío nacional/internacional o recolección en sucursal).
- **No se encontró blog, guía de compra, comparativa ni lista curada indexada** ("mejores libros para…", "qué leer si te gustó…", guías por edad/tema) en ninguna de las consultas realizadas. **INFERIDO:** El Sótano no compite por búsquedas informativas; su contenido es catálogo + promo, no editorial. Esa es la mayor brecha frente a un dropshipping que quiera captar demanda por contenido.
- Contrapeso — **OBSERVADO:** terceros usan elsotano.com como **fuente de precio** en contenido editorial ajeno: Food and Travel México cita precios "en elsotano.com" en varias guías (p. ej. libros de cocina infantil, $195–$444 MXN) y El Universal interactivo usa fotos de www.elsotano.com en su especial de la Luna. Es citación indirecta (el sitio es referencia de precio), no enlace editorial propio.

## 6. Autoridad externa y presencia local — OBSERVADO

- **Fuentes institucionales (.gob.mx / académicas):** fichas del Sistema de Información Cultural de la Secretaría de Cultura para Casa Matriz (Miguel Ángel de Quevedo 209, Coyoacán), Puebla (Calle 43 Oriente 13) e Insurgentes Sur 214; y la Enciclopedia de la Literatura en México (ELEM/FLM), que documenta la fundación en **1952** por los hermanos Manuel y Gerardo López Gallo en el sótano de Juárez 64, la pérdida del local en el terremoto de 1985 y la reapertura en Coyoacán y Alameda.
  - http://www.elem.mx/institucion/datos/1366
  - http://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=693
  - https://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=1976
- **Prensa / listados:** citada junto a Gandhi, Porrúa y El Péndulo como una de las cadenas conocidas de CDMX ("Todos conocemos las Librerías Gandhi, El Sótano, Porrúa…", ultimafuente.com, 2024-07-03). Sin nota de prensa propia reciente encontrada en esta tanda.
- **Reseñas por sucursal (datos de ficha de lugar devueltos por el buscador; NO verificados en Google Maps en vivo):** Coyoacán (Quevedo 209) 4.0★ con solo 2 reseñas; Querétaro (Av. Corregidora Nte. 350) 4.3★ con 64 reseñas; Zapopan (Av. Guadalupe 1294) 4.5★ con 64 reseñas. Comentarios visibles: sección de manga/cómic y novela gráfica en Querétaro, "quizás mi librería favorita". **Las cifras son por sucursal y con muestras pequeñas; no existe un agregado "El Sótano" verificable aquí.**
- **Reputación como empleador (no de cliente):** Indeed recoge ~50 evaluaciones de exempleados, con tono mayoritariamente crítico sobre ambiente y gestión (últimas: ene 2026, dic 2025, ago 2025). Se cita solo como señal de reputación externa, no como valoración del servicio al cliente.
  - https://mx.indeed.com/cmp/Librer%C3%ADas-El-S%C3%B3tano-2/reviews
- **Cupones/afiliación:** Picodi (https://www.picodi.com/mx/el-sotano) lista cupones de El Sótano —30% en títulos seleccionados, promo de Buen Fin 2026 con vencimiento 17/11/26— y lo describe como "la librería con la más grande oferta editorial y mejor selección infantil en México" y con "el mayor catálogo de México". **Esa afirmación de "mayor catálogo" es del sitio de cupones, NO VERIFICADA** de forma independiente; se registra como claim de tercero, no como hecho.
- **Redes sociales:** la búsqueda específica de cuentas oficiales en Facebook/Instagram no devolvió resultados utilizables (una consulta `site:facebook.com OR site:instagram.com` devolvió 0 resultados). **NO VERIFICADO:** handles oficiales, número de seguidores y actividad. La home extraída no expuso enlaces sociales en el texto leído.

## 7. Pauta observable — OBSERVADO (negativo)

- **No se encontró ninguna URL de elsotano.com con parámetros UTM** (`utm_source` / `utm_medium` / `utm_campaign`) en las búsquedas realizadas, ni anuncios identificables en los resultados. En la misma tanda, un competidor (Buscalibre) sí mostraba URLs con UTM de Facebook y Google y `gclid` en sus resultados de home, lo que confirma que el método sí detecta ese tipo de rastro cuando existe.
- **INFERIDO:** o bien El Sótano no pauta (o no pauta con UTM rastreable en buscador), o bien su pauta no deja huella indexada. No se puede afirmar que no invierta en ads.
- **NO VERIFICADO:** Biblioteca de Anuncios de Meta / Google Ads Transparency — no consultable con los medios de este frente (requiere navegador en vivo). Tampoco se verificó pauta en TikTok ni en buscadores.
- Promo estacional visible sin pauta: banners de Buen Fin en home y cupón del 30% en Picodi con vencimiento 17/11/2026 (el Buen Fin 2026 es del 13 al 17 nov).

## 8. Citabilidad GEO (evaluación del contenido, sin interrogar motores de IA)

**A favor (OBSERVADO):**
- Fichas de producto con identificadores duros y estables: ISBN, autor, editorial, páginas, año, medidas, tema/subtema — exactamente los campos que un motor de IA necesita para responder con precisión sobre un libro concreto.
- Precio en MXN y disponibilidad en JSON-LD `Product.offers` legible por máquina.
- Historia institucional verificable en fuentes oficiales (.gob.mx, ELEM) y red física real con direcciones, teléfonos y horarios por sucursal: un motor de IA puede afirmar "existe desde 1952, tiene sucursal en…" con fuentes.
- Terceros ya lo usan como fuente de precio (Food and Travel, El Universal), señal de que su catálogo es referencia citable.

**En contra (OBSERVADO / INFERIDO):**
- Sin contenido editorial indexable: `/noticias/` bloqueado en robots y 0 resultados `site:`; sin guías, comparativas ni FAQs que respondan preguntas ("qué libro regalar…", "mejor libro de…"). Un motor de IA no tiene de dónde citar a El Sótano salvo la ficha de producto.
- Las páginas que darían contexto temático (`/autor/`, `/editorial/`, `/categoria/`) también están bloqueadas para `*`, incluidos los crawlers de IA no nombrados. **INFERIDO:** aunque no bloqueen a GPTBot/ClaudeBot por nombre, el bloqueo genérico les cierra esas rutas igualmente.
- Descripciones de producto tomadas de la editorial (a menudo en inglés, como en el ejemplo verificado) y sin valor añadido local: nada que distinga la ficha de El Sótano de la de cualquier otro vendedor del mismo ISBN.
- Muestra de fichas con alta proporción de `OutOfStock` (7/11, muestra sesgada — ver §1.2): si un motor de IA cita precio/stock, corre riesgo de citar un libro sin stock.
- Sin `Book`/`Organization`/`FAQ` verificado en el marcado observable y sin handles sociales verificables: menos señales de entidad para los motores de IA.

**Lectura neta (INFERIDO):** El Sótano es citable como **tienda que vende el libro X a $Y con/sin stock** y como **institución librera histórica con sucursales**, pero no como **autoridad que recomienda o explica**. Para GEO, su techo hoy es la ficha; su suelo, que esa ficha sea precisa y tenga stock.

## 9. Lecciones aprovechables para el dropshipping (F3)

1. **El marcado `Product` + `offers` (precio MXN + stock) es el mínimo no negociable:** es lo que hace citable a una tienda sin contenido editorial. Replicarlo desde el día 1, con ISBN cuando aplique.
2. **No bloquear las rutas temáticas:** el error de El Sótano es `Disallow` a `/categoria/`, `/autor/`, `/editorial/` y `/noticias/`. Un dropshipping nuevo debe hacer lo contrario: categorías, guías y comparativas indexables son su única vía de captar búsqueda genérica sin ads.
3. **La búsqueda genérica la ganan agregadores y listicles de terceros** (Buscalibre, rastrearpedido.com.mx): sin contenido propio, la única aparición es que otros te mencionen. Planear relaciones con listicles/cupones (Picodi aparece como canal real) desde el inicio.
4. **La historia y la presencia física son citables aunque no vendan:** 1952 + SIC/ELEM + sucursales dan a El Sótano autoridad que un dropshipping sin historia no tiene; compensarlo con datos verificables (origen, curaduría, criterios) y con fichas locales si hay punto de entrega.
5. **No bloquear crawlers de IA por nombre y no cerrarles el contenido útil:** El Sótano no los bloquea nominalmente (acierto), pero les cierra las rutas temáticas con `*` (error). La postura a copiar es: permitir explícitamente a los crawlers de IA y darles contenido con respuesta (guías, FAQs, comparativas).

## Sin verificar

- **Conteos de sitemap:** URLs por sub-sitemap (`sitemap1.xml`–`sitemap7.xml`) y total del catálogo indexable. Motivo: la lectura de `https://www.elsotano.com/seo/sitemap1.xml` devolvió **429** del servicio de lectura; por regla, no se reintentó. La lectura de `https://www.elsotano.com/noticias/` devolvió el mismo **429**; no se pudo comprobar si la sección existe ni qué contiene.
- **Posiciones, tráfico y volúmenes** de ninguna keyword (marca o genérica). No hay acceso a Search Console, Similarweb ni herramienta de rank tracking en este frente.
- **Número actual de sucursales y tamaño actual del catálogo** (la cifra "más de 15 sucursales" es de una entrevista de 2021).
- **JSON-LD completo del `<head>`** (tipos `Book`, `Organization`, `BreadcrumbList`, `LocalBusiness`, `FAQPage`): la extracción de texto solo expuso `Product.offers`; no se afirma presencia ni ausencia.
- **Pauta pagada:** Biblioteca de Anuncios de Meta y Google Ads Transparency no consultadas (requieren navegador en vivo).
- **Redes sociales oficiales:** handles, seguidores y actividad no encontrados por búsqueda; no verificados.
- **Reseñas agregadas y rating en Google Maps en vivo:** las cifras por sucursal citadas (§6) provienen de fichas de lugar devueltas por el buscador, no de una lectura en vivo de Google Maps.
- **Claim "mayor catálogo de México"** (Picodi): afirmación de un sitio de cupones, sin verificación independiente.
- **Velocidad, Core Web Vitals, HTTPS/canónicos/hreflang y versión móvil:** fuera del alcance de los medios de este frente.

## Resumen ejecutivo

- El Sótano resuelve bien la búsqueda de marca, pero en búsquedas genéricas ("comprar libros en línea México") es invisible como tienda: solo aparece citado por un listicle de terceros, mientras Buscalibre y Péndulo ocupan los resultados.
- Su SEO es casi todo catálogo: `site:` devuelve fichas de producto rastreadas hace 1–12 días, con precio MXN y stock en JSON-LD `Product.offers`; en la muestra, 7 de 11 fichas estaban sin stock (muestra sesgada, no tasa del catálogo).
- El hallazgo central es su `robots.txt`: bloquea para Google y para `*` las rutas `/noticias/`, `/categoria/`, `/autor/` y `/editorial/`, y bloquea totalmente a `Amazonbot` y a los bots de Awario, pero no nombra a ningún crawler de IA, que queda sujeto al `*`.
- No hay contenido editorial indexable (0 resultados en `site:elsotano.com noticias`); la home solo ofrece biografías, recomendaciones y banners de Buen Fin, sin blog ni guías.
- Su autoridad externa es institucional e histórica (fundada en 1952, fichas en SIC Cultura y ELEM, 15+ sucursales en 2021) y local por sucursal (4.0–4.5★ en las fichas consultadas), pero no hay handles sociales ni pauta con UTM verificables.
- Para GEO es citable como tienda (ISBN, precio, stock) y como institución histórica, no como autoridad que recomienda: su techo es la ficha de producto.
- Lección para el dropshipping: copiar el marcado `Product`+stock, hacer exactamente lo contrario en robots (categorías, guías y comparativas indexables y abiertas a crawlers de IA) y buscar aparición en listicles y cupones, que es hoy la única vía genérica de El Sótano.

## Fuentes (URLs verificadas en esta investigación, 13 nov 2026)

- https://elsotano.com/robots.txt
- https://elsotano.com/
- https://www.elsotano.com/sitemap.xml
- https://www.elsotano.com/libro-los-5-niveles-de-liderazgo-10639401
- https://www.elsotano.com/libro-trilogia-africanus-edicion-pack-con-el-hijo-del-consul-las-legiones-malditas-la-traicion-de-roma-10651487
- https://www.elsotano.com/libro-the-twilight-saga-pd-deluxe-hardcover-collection-10713851
- https://www.elsotano.com/libro-share-it-student-book-5-sb-with-sharebook-and-navio-app-10607923
- https://www.elsotano.com/aviso-de-privacidad
- https://rastrearpedido.com.mx/blog/mejores-tiendas-linea-lectura-mexico/
- https://www.gandhi.com.mx/mayoreo
- http://www.elem.mx/institucion/datos/1366
- http://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=693
- https://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=1976
- https://sic.gob.mx/ficha.php?table=libreria&table_id=2400
- https://es.everand.com/podcast/590494235/T05E12-Trascendi-con-Rodrigo-Lopez-Rodrigo-Lopez-se-desempena-como-Director-General-de-Libreria-El-Sotano-una-de-las-cadenas-de-librerias-mas-im
- https://www.picodi.com/mx/el-sotano
- https://mx.indeed.com/cmp/Librer%C3%ADas-El-S%C3%B3tano-2/reviews
- http://ultimafuente.com/las-librerias-mas-cool-de-la-ciudad-de-mexico-y-donde-encontrarlas/
- https://foodandtravel.mx/sabores/mundo-gourmet/medicina-natural-libros-series-y-cursos/
- https://interactivo.eluniversal.com.mx/2019/hombre-luna/peliculas-libros.html
