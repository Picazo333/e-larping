# F1.1 — Front end · El Sótano (Librerías El Sótano)

- **Sitio:** https://elsotano.com/ (marca visible: Librerías El Sótano — «compra tu libro favorito en línea»)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov: precios y promos pueden estar distorsionados por Buen Fin; se anota cuando aplica)
- **Frente:** F1.1 (front end) — Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras) y búsquedas web de apoyo con `browser.search`. Las páginas se rastrearon el 13 nov 2026 ~20:01–20:07 UTC (14:01–14:07 CST), salvo los datos marcados como snippet de búsqueda.
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza) o **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.

---

## 1. Plataforma (inferencia de front)

- **INFERIDO (confianza media-alta): sitio a medida, NO Shopify.** Evidencia: estructura de URLs propia — fichas `/libro-<slug>-<id>` (p. ej. `https://www.elsotano.com/libro-derecho-procesal-mercantil-pd-10619835`) y catálogo por tema `/libros_tema-<slug>-<id>` (p. ej. `https://www.elsotano.com/libros_tema-derecho-395`); assets servidos desde rutas propias `/assets/images/banner/`, `/assets/images/cover/`, `/assets/images/icons/` y portadas desde `/sotano_covers/<ISBN>/<ISBN>.jpg`; sin rastro de `/collections/`, `/products/`, `/cart` ni `cdn/shop/` en ninguna página leída. Una búsqueda externa muestra además la URL legada `http://www.elsotano.com/index.php`, coherente con un desarrollo propio con historia.
- **INFERIDO (confianza baja):** existe una segunda variante de URL de ficha, `/libro/<slug>_<id>` (vista solo en un resultado de búsqueda: `https://www.elsotano.com/libro/civilizaciones-modernas-minilibro-con-32-tarjetas_10568575`). No se leyó directamente; podría ser una ruta antigua o una variante del mismo router. NO VERIFICADO cuál es la canónica.
- **NO VERIFICADO:** stack de back end, hosting/CDN, versión, apps o plugins (eso corresponde al frente back end).

## 2. Home — secciones en orden

URL: https://www.elsotano.com/ — OBSERVADO 13 nov 2026 (extracción de solo 44 líneas; es una extracción parcial, no la página completa — la home es muy visual y gran parte de su contenido son imágenes sin texto extraíble).

Orden observado en la extracción de texto (de arriba a abajo):

1. **Carrusel de banners (5 imágenes, solo se ven los archivos, no el texto del banner):** los nombres de archivo fechan los banners entre el 9 y el 13 nov 2026 y sugieren sus temas — `20261113093227_hh mensajes en tazas de cafe preventa.webp` (subido hoy 13 nov 09:32), `20261109155120_aniversario libros_hh.webp`, `20261109155826_hh_isabel allende.webp`, `20261109160038_hh_el principe de la noche (1).webp`, `20261109160616_hh_mas que rivales.webp`. **INFERIDO (confianza media):** los banners activos giran en torno a preventa (tazas/café), aniversario, Isabel Allende y dos novedades («El príncipe de la noche», «Más que rivales»). Es una inferencia desde nombres de archivo, no texto visible confirmado.
2. **Rejilla de portadas (14 imágenes, sin títulos ni precios en la extracción):** portadas servidas por ISBN (`/sotano_covers/9791387/9791387920357.jpg`, `9786073/9786073948579.jpg`, `9786073/9786073826082.jpg`, `9786075/9786075853017.jpg`, `9786079/9786079513979.jpg`, `9786073/9786073952033.jpg`, `9788493/9788493442606.jpg`, `9786076/9786076414378.jpg`, `9786073/9786073856263.jpg`, `9786073/9786073873154.jpg`, `9786073/9786073914178.jpg`, `9786073/9786073945882.jpg`, `9786073/9786073871402.jpg`, `9786073/9786073871419.jpg`). OBSERVADO que existen y se muestran como rejilla; **NO VERIFICADO** a qué títulos corresponden (no se resolvió cada ISBN; ver §9).
3. **Bloque editorial — autora destacada (Sarah J. Maas):** bio en texto («es una escritora estadounidense de fantasía, nacida el 5 de marzo de 1986 en Nueva York. Es una de las autoras más populares de la fantasía juvenil y romántica contemporánea… Comenzó a escribir Throne of Glass cuando era adolescente…») + dos sagas con sinopsis corta: **«Saga Una corte de rosas y espinas»** («Feyre Archeron es una joven cazadora… mata a un lobo en el bosque sin saber que en realidad era un ser feérico») y **«Saga Ciudad Medialuna»** («Bryce Quinlan es una joven mitad humana y mitad fae…»). OBSERVADO. Es contenido editorial propio, no solo catálogo.
4. **«Recomendaciones»:** imagen de fondo `assets/images/bg/recomienda.jpg` con ese rótulo. OBSERVADO solo el rótulo; el contenido de las recomendaciones (qué libros, cuántos) no apareció en la extracción.
5. **Cómo comprar (4 pasos con icono, OBSERVADO, textos literales):**
   - «Encuentra tu libro favorito» — «Contamos con un amplio catálogo y material especializado para niños.»
   - «Agrégalo a tu carrito» — «Inicia el proceso de compra con todos tus productos que tenemos disponibles.»
   - «Realiza el pago» — «Utiliza cualquiera de nuestras opciones para efectuar el pago.»
   - «Recibe tus productos» — «Tenemos envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales.»
6. **Teléfono al pie de la extracción: 800 276 8266.** OBSERVADO (también aparece en todas las fichas).

### Buen Fin — ausencia observada

- **OBSERVADO:** ninguna de las páginas leídas en el sitio (home, 3 fichas, catálogo de Derecho) menciona «Buen Fin», ni muestra fechas 13–17 nov, ni «meses sin intereses», ni «envío gratis». Los banners visibles por nombre de archivo son de preventa/aniversario/autores, no de Buen Fin.
- **INFERIDO (confianza media):** El Sótano no está empujando el Buen Fin 2026 en su home el primer día de la campaña — contraste fuerte con F4T3, donde el Buen Fin dominaba home y colecciones el mismo día. Los descuentos que sí se ven (§3) son descuentos por título, no una campaña Buen Fin.
- **Dato externo (no del sitio):** Cazaofertas anuncia una «Venta Nocturna Librerías El Sótano 13 de diciembre: Descuentos, meses sin intereses, tarjeta cliente frecuente gratis y más». Es un evento de diciembre, no del Buen Fin; se cita solo como contexto y **NO VERIFICADO** en el sitio.

### Idioma y moneda

- **OBSERVADO:** todo el copy está en español de México; los precios en MXN en todas las páginas leídas. No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Catálogo — listado por tema (Derecho)

URL: https://www.elsotano.com/libros_tema-derecho-395 — OBSERVADO 13 nov 2026 (lectura completa, 364 líneas; se llegó desde el enlace «Derecho» de una ficha).

- **Título de página:** «Libros de nuestro catálogo de Derecho en Librerías el Sótano».
- **Filtros laterales OBSERVADOS:**
  - **Tipo:** Libros / Libros para niños / Impresión Bajo Demanda. (La «Impresión Bajo Demanda» — print-on-demand — es una línea de producto propia del catálogo.)
  - **Temas (29):** Animales y mascotas, Bellas artes y artes decorativas, Ciencias naturales, Ciencias sociales, Contabilidad, Deportes y actividades, Derecho, Educación y pedagogía, Esoterismo, Filosofía, Gastronomía, Geografía, Historia, Informática, Ingenierías, Lingüística, Literatura, Matemáticas, Medicina, Negocios y admón. de empresas, Niños, Obras de referencia y consulta, Psicología, Religión, Salud alternativa, Superación personal y autoayuda, Teatro, Textos escolares, Turismo.
- **Paginación OBSERVADA:** «Mostrando 1-18 de más de 300 resultados» — 18 productos por página; el tema Derecho tiene más de 300 títulos. El total del catálogo no se observó.
- **Estructura de tarjeta OBSERVADA (repetida):** portada (imagen por ISBN) → etiqueta de descuento cuando aplica → botón «Agregar» → título (truncado en la extracción) → precio, o precio original + precio con descuento.
- **Precios y descuentos OBSERVADOS en esta página (1ª página, 18 tarjetas):** $210.00; $2,199.00; $140.00; $400.00 → $300.00 («25% Dto.»); $560.00; $250.00; $300.00; $99.00 → $84.15 («15% Dto.»); $100.00 → $80.00 («20% Dto.»); $89.00 → $75.65 («15% Dto.»); $90.00 («70% Dto.»); $85.00 → $25.50; $79.00 → $63.20 («20% Dto.»); $79.00; $250.00; $115.00; $250.00; $119.00. Los pares precio original → precio final cuadran aritméticamente con su etiqueta (400→300 = −25%; 99→84.15 = −15%; 100→80 = −20%; 89→75.65 = −15%; 79→63.20 = −20%; 85→25.50 = −70%).
- **Anomalía A1 — etiquetas vs. pares de precio:** en dos tarjetas la etiqueta visible junto a la tarjeta no cuadra con el par de precios extraído (una tarjeta muestra «70% Dto.» con un solo precio de $90.00, sin precio original visible; y el par $85.00 → $25.50, que es −70%, aparece junto a una etiqueta de «20% Dto.»). **INFERIDO (confianza media):** es un desalineamiento de la extracción de texto (las etiquetas se intercalan entre tarjetas), no un error de precios del sitio — los seis pares verificables cuadran exactos. El descuento exacto de esas dos tarjetas queda **NO VERIFICADO**.
- **Sección «Nuevos productos» al final del listado:** 8 tarjetas con sello «Disponible» y precio: $400.00, $272.00, $445.00, $450.00, $449.00, $374.00, $339.00, $360.00. Los títulos salen truncados en la extracción («Manual De Vida. …», «¿ Qué Es Una …», «Contra La Ilust …», «Misticismo. La …», «La Genealogía …», «De La Libertad …», «Meditaciones De …», «Mundo Loco. Gue …»): **NO VERIFICADO** el título completo de cada uno.
- **Widget de carrito al pie de la página (OBSERVADO):** «Carrito de compra — Su pedido cuenta con 0 productos — Subtotal: $0.00». El carrito es un bloque persistente visible en la página de catálogo, no una página aparte visitada.
- **Ordenación:** NO VERIFICADO. No apareció ningún control de ordenación (precio, novedad, relevancia) en la extracción de esta página.

## 4. Página de producto (ficha de libro)

Tres fichas leídas completas por lectura directa + 24 fichas vía snippets de búsqueda (ver §4.4). Estructura común OBSERVADA en las tres lecturas directas:

- Título + ISBN en el encabezado («Derecho procesal mercantil pd. - 9786076109670»).
- Tabla de datos: **ISBN, Editorial (enlace), Tema (enlace), Subtema (enlace), Número de páginas, Año de edición, Medidas** (cm).
- Sinopsis larga en texto (varios párrafos; en los libros en inglés, sinopsis en inglés).
- Bloque «Additional Details» con nombre, descripción («Libro: <título>, ISBN: …, Autor: …, Editorial: …») y contacto: **atencionaclientes@elsotano.com** y/o **Phone: 800 276 8266**.
- Bloque «Product Offer» (JSON-LD): **Product, Price (MXN), Availability (InStock / OutOfStock), Source: JSON-LD Product.offers**.
- **Lo que NO aparece en la extracción de ninguna ficha:** botón «Agregar al carrito» / «Añadir» como texto, selector de cantidad, precio tachado, sello visible de «Agotado»/«Disponible», reseñas, ni insignias de pago. El estado de stock solo se conoce por el JSON-LD, no por copy visible en la extracción. (Ausencia en extracción ≠ ausencia en el sitio: la caja de compra puede renderizarse por JS.)

### 4.1 Derecho procesal mercantil / Pd.

- URL: https://www.elsotano.com/libro-derecho-procesal-mercantil-pd-10619835 — OBSERVADO 13 nov 2026.
- **Precio: $495.00 MXN. Disponibilidad: InStock.** Sin precio tachado visible.
- ISBN 9786076109670; Editorial Flores Editor; Tema Derecho; Subtema Derecho Mercantil; 512 páginas; año 2022; medidas 24.00 cm x 18.00 cm. Autora: Maria Del Carmen Ayala Escorza.

### 4.2 Juicio sucesorio testamentario 4

- URL: https://www.elsotano.com/libro-juicio-sucesorio-testamentario-4-10585503 — OBSERVADO 13 nov 2026.
- **Precio: $380.00 MXN. Disponibilidad: InStock.** Sin precio tachado visible.
- ISBN 9786076108529; Editorial Flores Editor; Tema Derecho; Subtema Derecho Civil; 380 páginas; año 2020; medidas 23.00 cm x 17.00 cm. Autora: Maria Del Carmen Ayala Escorza.

### 4.3 Archer's Voice / Pd. (Mia Sheridan)

- URL: https://www.elsotano.com/libro-archers-voice-pd-10688279 — OBSERVADO 13 nov 2026.
- **Precio: $562.50 MXN. Disponibilidad: OutOfStock.** Sin precio tachado visible.
- ISBN 9781538766941; Editorial Grand Central Publishing; Tema Literatura; Subtema Literatura En Otros Idiomas; 400 páginas; año 2023; medidas 22.90 cm x 15.20 cm. Sinopsis en inglés; se presenta como «BookTok phenomenon, Goodreads Top Romance Novel of All Time».
- **OBSERVADO (contraste con §4.1/§4.2):** la ficha de un libro sin stock se ve igual en la extracción que las de libros en stock — mismo título, misma tabla, misma sinopsis; nada en el texto extraído marca el agotado. El único indicador es el JSON-LD.

### 4.4 Muestra de precios y stock vía snippets de búsqueda (NO lectura directa)

Precios y disponibilidad tomados de los datos estructurados que el buscador muestra de `elsotano.com` (crawls de hace 1–24 días; la fecha exacta de cada crawl varía). Se reportan como **muestra no aleatoria** (el buscador devuelve sobre todo fichas antiguas y de Derecho/Literatura en inglés) y **NO como inventario del sitio**:

| Título | Precio (MXN) | Disponibilidad (JSON-LD) |
|---|---|---|
| Legislación federal de seguridad social. Especializada | $320.00 | OutOfStock |
| Alternatividad. Principio rector del proceso acusatorio | $190.00 | InStock |
| Agenda penal federal 2025 | $460.00 | OutOfStock |
| Los 5 niveles de liderazgo (John C. Maxwell) | $382.50 | OutOfStock |
| Trilogía Africanus, edición pack (Santiago Posteguillo) | $899.00 | no consta en el snippet |
| Evolución del derecho mexicano | $399.00 | OutOfStock |
| Justicia juvenil mexicana | $150.00 | InStock |
| Noise (Kahneman / Sibony / Sunstein) | $202.50 | OutOfStock |
| The Unwedding / Pd. (Ally Condie) | $539.10 | OutOfStock |
| Hollowpox. The Hunt For Morrigan Crow | $170.10 | OutOfStock |
| A Good Life (Papa Francisco) | $355.50 | OutOfStock |
| Breaking Dawn (Stephenie Meyer) | $341.10 | OutOfStock |
| Digestion! The Musical / Pd. (Adam Rex) | $323.10 | OutOfStock |
| A Gambling Man (David Baldacci) | $310.50 | OutOfStock |
| Construction Site Board Books Boxed Set | $467.10 | OutOfStock |
| Muse of Nightmares (Laini Taylor) | $229.50 | OutOfStock |
| Alice's Adventures in Wonderland (Lewis Carroll) | $135.00 | OutOfStock |
| Skyrocket 2. Your Grammar (student's book) | $405.00 | InStock |
| The Last Guests / Pd. (Jp Pomare) | $555.00 | OutOfStock |
| Hawk (James Patterson) | $229.00 | OutOfStock |
| Rick Riordan Presents: The Lords of Night. A Shadow Bruja Novel | $322.15 | OutOfStock |
| Derecho procesal mercantil / Pd. (lectura directa §4.1) | $495.00 | InStock |
| Juicio sucesorio testamentario 4 (lectura directa §4.2) | $380.00 | InStock |
| Archer's Voice / Pd. (lectura directa §4.3) | $562.50 | OutOfStock |

- **OBSERVADO en la muestra:** 19 de 24 fichas con disponibilidad declarada figuran **OutOfStock** (79%). **NO es una tasa de agotado del sitio**: la muestra está sesgada (el buscador indexa sobre todo fichas antiguas y de fondo editorial) y los crawls tienen de 1 a 24 días. Lo que sí es un hallazgo de front end: **el sitio conserva y muestra fichas de libros sin stock, con precio vigente, sin que la extracción de texto marque el agotado de forma visible** — el usuario que llega por buscador ve el precio pero el estado de stock solo consta en los datos estructurados. El frente de precios/logística deberá verificar si esto es fondo descatalogado o un problema real de disponibilidad.
- **Rango de precios de la muestra: $135.00–$899.00 MXN** (fichas) y **$79.00–$2,199.00 MXN** en el listado de Derecho (§3). No es el rango del catálogo completo.
- **Sufijo «pd.» en títulos:** aparece en muchas fichas («…/ Pd.», «The Unwedding pd.»). **NO VERIFICADO** qué significa (posible abreviatura de formato/encuadernación); no se afirma.

## 5. Carrito y checkout

- **Carrito — OBSERVADO (widget en la página de catálogo, §3):** «Carrito de compra — Su pedido cuenta con 0 productos — Subtotal: $0.00». Es un bloque persistente al pie de la página de listado, no una página de carrito visitada por separado.
- **OBSERVADO:** cada tarjeta del catálogo trae botón «Agregar» (añadir al carrito sin entrar a la ficha). En las fichas de producto leídas directamente **no apareció** el botón de compra en la extracción (ver §4).
- **OBSERVADO (home, §2):** «Realiza el pago — Utiliza cualquiera de nuestras opciones para efectuar el pago.» No se lista ninguna opción concreta.
- **NO VERIFICADO:** pasos del checkout, campos, creación de cuenta/invitado, métodos de pago aceptados (no se observó ningún logotipo de tarjeta, banco, pasarela ni medio alternativo como OXXO/SPEI/PayPal en las páginas leídas), meses sin intereses por banco, costos y umbrales de envío, ni opciones de entrega en checkout. **No se afirma ningún método de pago concreto.** No se añadió nada al carrito ni se inició sesión.
- **NO VERIFICADO:** la URL del carrito/checkout como página independiente. No se observó ningún enlace al carrito en las extracciones (el widget no expone su URL en el texto) y no se adivinó ninguna URL.

## 6. Búsqueda y UX de navegación

- **Navegación por catálogo — OBSERVADA:** el sitio organiza el catálogo por **Tema** (29 temas, §3) y por **Tipo** (Libros / Libros para niños / Impresión Bajo Demanda). Cada ficha enlaza a su Editorial, su Tema y su Subtema (enlaces confirmados en las tres fichas leídas).
- **Paginación — OBSERVADA:** 18 resultados por página, con conteo («Mostrando 1-18 de más de 300 resultados» en Derecho).
- **Buscador — NO VERIFICADO.** Ninguna extracción mostró caja de búsqueda, botón de buscar ni página de resultados de búsqueda. (Ausencia en extracción ≠ ausencia en el sitio; el header no se renderizó en ninguna extracción.)
- **Ordenación — NO VERIFICADO.** No apareció ningún control de ordenación en el listado por tema.
- **Filtros — OBSERVADO parcialmente:** los filtros laterales de Tipo y Tema existen como enlaces (§3); **NO VERIFICADO** si hay filtros por precio, disponibilidad, editorial, año o idioma, ni si el panel es desplegable o fijo.
- **Móvil — NO VERIFICADO en render:** sin navegador en vivo no se pudo renderizar ni inspeccionar la vista móvil: menú hamburguesa, legibilidad, orden de secciones en móvil y comportamiento táctil quedan NO VERIFICADOS. Tampoco se observó ningún asset con nombre «mobile» en las URLs de imagen de la extracción.
- **Accesibilidad:** NO VERIFICADO. No se observó enlace de salto («Omitir…») ni otros marcadores de accesibilidad en las extracciones (a diferencia de F4T3, donde sí aparecía).

## 7. Promociones visibles

- **OBSERVADO — descuentos por título en el listado de Derecho (§3):** etiquetas de 15%, 20% y 25% con pares precio original → precio final que cuadran aritméticamente, más un par $85.00 → $25.50 (−70% aritmético, etiqueta en disputa, anomalía A1). Son descuentos por libro, no una campaña con nombre visible.
- **OBSERVADO — ausencia de Buen Fin:** ninguna página leída menciona «Buen Fin», MSI ni envío gratis (§2). Los descuentos observados no se vinculan textualmente a ninguna campaña.
- **NO VERIFICADO:** si existe una página/colección de Buen Fin en el sitio; si los descuentos por título son permanentes o rotan; si hay cupones, tarjeta de cliente frecuente en línea, o promociones por monto mínimo. La «tarjeta cliente frecuente gratis» de la Venta Nocturna de diciembre (§2) es un dato externo, no observado en el sitio.

## 8. Contenido editorial y mensajes comerciales

- **OBSERVADO — qué vende:** libros en español e inglés (literatura, fantasía juvenil/romántica, derecho, superación personal, niños, textos escolares, esoterismo, etc.), más material especializado para niños y la línea de Impresión Bajo Demanda. Las portadas se sirven por ISBN; el catálogo se organiza por tema, no por colección comercial.
- **Contenido editorial OBSERVADO (home, §2):** bio de autora destacada (Sarah J. Maas, n. 5 mar 1986, Nueva York) con sinopsis de dos sagas (Una corte de rosas y espinas; Ciudad Medialuna); sección «Recomendaciones» (solo el rótulo, sin contenido en la extracción); mención de «material especializado para niños» en el paso 1 de cómo comprar.
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - «Librerías el Sótano compra tu libro favorito en línea» (título de la home).
  - «Encuentra tu libro favorito» / «Agrégalo a tu carrito» / «Realiza el pago» / «Recibe tus productos».
  - «Tenemos envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales.»
  - «Contamos con un amplio catálogo y material especializado para niños.»
  - «Utiliza cualquiera de nuestras opciones para efectuar el pago.»
- **Blog — NO VERIFICADO.** Ninguna página leída enlaza ni muestra un blog, y ninguna búsqueda devolvió una sección de blog del sitio. No se afirma que no exista.
- **Reseñas — NO VERIFICADO.** No hay sección de reseñas visible en ninguna ficha ni en la home en las extracciones.

## 9. Red de sucursales (lo que se ve en el sitio vs. fuentes externas)

- **OBSERVADO en el sitio:** solo la frase de la home «recolección en algunas de nuestras sucursales» (§2). Ninguna página leída en `elsotano.com` lista sucursales, direcciones, horarios ni mapa. No se leyó ninguna página de sucursales del sitio.
- **Fuentes externas (NO verificadas en el sitio, se citan como contexto):**
  - Sistema de Información Cultural (Secretaría de Cultura): **Casa Matriz, Miguel Ángel de Quevedo 209, Col. Romero de Terreros, CP 04310, Coyoacán, CDMX**, tels. 55 5339 1300 exts. 110, 149; **Sucursal Insurgentes: Insurgentes Sur 214, Col. Roma Nte., CP 06700, Cuauhtémoc, CDMX**, tels. 55 5207 5444 y 01 800 276 8266; **Sucursal Puebla: Calle 43 Oriente núm. 13, Col. Huexotitla, CP 72530, Puebla, Puebla**, tels. 222 240 6519, 222 243 8396.
  - Directorios de lugares: sucursal Coyoacán en Av. Miguel Ángel de Quevedo 209 (lun–sáb 9:00–22:00, dom 10:00–21:00) y El Sótano Roma en Av. Insurgentes Centro 222-Loc A; el resumen de una de esas fichas menciona «additional locations in Mexico City, Guadalajara and Querétaro».
- **NO VERIFICADO:** el número total de sucursales. La cifra «15+ sucursales» del encargo **no se confirmó** por ninguna fuente consultada en este frente; no se afirma. Tampoco se verificó en el sitio qué sucursales ofrecen recolección de pedidos en línea.
- **Contacto OBSERVADO en el sitio:** teléfono 800 276 8266 (home, fichas, catálogo) y correo atencionaclientes@elsotano.com (bloque «Additional Details» de las fichas).

## 10. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** 5 de las 6 lecturas de página tuvieron éxito y el servicio de lectura marcó cada página como «crawled less than a minute ago» en el momento de la consulta. Eso solo constata que el crawler pudo cargar el texto con rapidez; **no es una medición de velocidad**.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, número de peticiones, ni puntuación Lighthouse/PageSpeed. No se inventa ninguna cifra.
- **INFERIDO (confianza baja):** las portadas se sirven por ISBN en rutas predecibles (`/sotano_covers/<ISBN>/<ISBN>.jpg`) y los banners llevan fecha en el nombre de archivo, lo que sugiere generación/gestión manual de assets más que un CDN con parámetros de ancho (a diferencia de F4T3/BUNA, no se vieron parámetros `width=` ni `.webp` en las imágenes de la extracción). Sin medición, no se puede afirmar el impacto real.

## 11. Tabla final — observado / inferido / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Home: carrusel de 5 banners (preventa, aniversario, Isabel Allende, El príncipe de la noche, Más que rivales — por nombre de archivo) → rejilla de 14 portadas por ISBN → bio Sarah J. Maas + sagas ACOTAR y Ciudad Medialuna → «Recomendaciones» → 4 pasos de compra → tel. 800 276 8266 | https://elsotano.com/ |
| O2 | Ninguna página leída menciona «Buen Fin», MSI ni envío gratis (13 nov, primer día de la campaña) | Home, 3 fichas, catálogo Derecho |
| O3 | Catálogo Derecho: filtros Tipo (Libros / Libros para niños / Impresión Bajo Demanda) y 29 Temas; «Mostrando 1-18 de más de 300 resultados» | https://www.elsotano.com/libros_tema-derecho-395 |
| O4 | Tarjetas de catálogo con botón «Agregar», precio o par original→final; descuentos 15/20/25% que cuadran aritméticamente; par $85.00→$25.50 (−70%) | Catálogo Derecho (§3) |
| O5 | «Nuevos productos»: 8 tarjetas con sello «Disponible» ($400, $272, $445, $450, $449, $374, $339, $360) | Catálogo Derecho (§3) |
| O6 | Widget «Carrito de compra — Su pedido cuenta con 0 productos — Subtotal: $0.00» al pie del catálogo | Catálogo Derecho (§3) |
| O7 | Derecho procesal mercantil / Pd.: $495.00 MXN, InStock, ISBN 9786076109670, Flores Editor, 512 pp., 2022, 24×18 cm | https://www.elsotano.com/libro-derecho-procesal-mercantil-pd-10619835 |
| O8 | Juicio sucesorio testamentario 4: $380.00 MXN, InStock, ISBN 9786076108529, Flores Editor, 380 pp., 2020, 23×17 cm | https://www.elsotano.com/libro-juicio-sucesorio-testamentario-4-10585503 |
| O9 | Archer's Voice / Pd.: $562.50 MXN, OutOfStock, ISBN 9781538766941, Grand Central, 400 pp., 2023, 22.9×15.2 cm | https://www.elsotano.com/libro-archers-voice-pd-10688279 |
| O10 | Estructura de ficha: tabla ISBN/Editorial/Tema/Subtema/páginas/año/medidas + sinopsis + «Additional Details» (atencionaclientes@elsotano.com, 800 276 8266) + JSON-LD precio/disponibilidad | Fichas §4.1–§4.3 |
| O11 | En la muestra de 24 fichas vía snippets, 19 con disponibilidad declarada figuran OutOfStock (muestra sesgada, no tasa del sitio) | Snippets de búsqueda (§4.4) |
| O12 | «Tenemos envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales» (única mención a sucursales en el sitio) | Home (§2) |
| O13 | Español de México + precios en MXN en todo lo leído | Todas las páginas |
| O14 | Banners con fecha en el nombre de archivo (9 y 13 nov 2026); portadas servidas por ISBN | Home (§2) |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Sitio a medida, no Shopify | URLs propias `/libro-…`, `/libros_tema-…`, assets `/assets/`, `/sotano_covers/`, URL legada `index.php` — confianza **media-alta** |
| I2 | El Sótano no empuja el Buen Fin 2026 en su home el primer día de campaña | Ausencia total de mención + banners de preventa/aniversario/autores — confianza **media** |
| I3 | La anomalía A1 (etiquetas vs. precios) es desalineamiento de la extracción, no error de precios | Los 6 pares verificables cuadran exactos con su etiqueta — confianza **media** |
| I4 | La caja de compra de la ficha existe pero no se renderizó en la extracción | El catálogo sí muestra «Agregar» por tarjeta; la ficha sin botón visible sería incoherente con un e-commerce activo — confianza **media-baja** (sobre el método, no sobre el sitio) |
| I5 | Segunda variante de URL de ficha `/libro/<slug>_<id>` | Vista en un resultado de búsqueda — confianza **baja** (sin lectura directa) |
| I6 | El stock solo consta en JSON-LD, no en copy visible de la ficha | Las 3 fichas leídas no muestran sello de stock en el texto; solo el JSON-LD lo declara — confianza **media** (limitada a la extracción) |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Ficha de Trilogía Africanus por lectura directa ($899.00 solo por snippet) | La lectura directa devolvió 429 y **no se reintentó** (§12) |
| N2 | Header completo (logo, menú, buscador, cuenta), footer (enlaces legales, contacto, redes) y newsletter | No aparecen en ninguna extracción (ausencia en extracción ≠ ausencia en el sitio) |
| N3 | Buscador del sitio y página de resultados de búsqueda | No observados en ninguna extracción |
| N4 | Pasos del checkout, métodos de pago, MSI por banco, costos/umbrales de envío | Carrito vacío (0 productos) no los muestra; checkout no recorrible con lectura de texto |
| N5 | URL del carrito/checkout como página independiente | El widget no expone su URL en el texto; no se adivinó ninguna URL |
| N6 | Ordenación del listado y resto de filtros (precio, disponibilidad, editorial, año, idioma) | No aparecieron controles en la extracción del catálogo |
| N7 | Página/colección de Buen Fin en el sitio; vigencia y alcance de los descuentos por título | Ninguna página leída los menciona; los descuentos no se vinculan a campaña |
| N8 | Reseñas de clientes (número, texto, puntuación) | No hay sección de reseñas visible en las extracciones |
| N9 | Blog o contenido editorial más allá de la home | Ninguna página leída lo enlaza o muestra |
| N10 | Página de sucursales del sitio (listado, direcciones, horarios, recolección por sucursal) y total de sucursales | No se leyó ninguna página de sucursales; «15+» del encargo sin confirmar |
| N11 | Vista y UX móvil real (menú, orden, táctil) | Sin navegador en vivo ni render |
| N12 | Rendimiento medido (LCP, tiempos, Lighthouse) | Método de lectura de texto no mide rendimiento |
| N13 | Título completo de los 14 libros de la rejilla de la home y de los 8 «Nuevos productos» | Títulos truncados o ausentes en la extracción; ISBN sin resolver |
| N14 | Significado del sufijo «pd.» en los títulos de ficha | Abreviatura sin explicar en ninguna página leída |
| N15 | Total del catálogo y conteo por tema (salvo Derecho: «más de 300») | No se recorrió paginación ni otros temas |

## 12. Fuentes consultadas

Lecturas de texto de páginas públicas de https://elsotano.com/ el 13 nov 2026 (~20:01–20:07 UTC), 5 lecturas exitosas + 1 fallida:

1. https://elsotano.com/ (home)
2. https://www.elsotano.com/libro-derecho-procesal-mercantil-pd-10619835
3. https://www.elsotano.com/libro-juicio-sucesorio-testamentario-4-10585503
4. https://www.elsotano.com/libro-archers-voice-pd-10688279
5. https://www.elsotano.com/libros_tema-derecho-395 (desde el enlace «Derecho» de la ficha 2)
6. https://www.elsotano.com/libro-trilogia-africanus-edicion-pack-con-el-hijo-del-consul-las-legiones-malditas-la-traicion-de-roma-10651487 — **fallida, 429, no reintentada**

Búsquedas web de apoyo: `site:elsotano.com libro` (patrón de ficha, precios y disponibilidad de 12 fichas); `site:elsotano.com sucursales…` (contacto en fichas, 12 fichas más); `site:elsotano.com "una corte de rosas y espinas"…` (sin resultados); ISBN de portadas de la home (sin resultados útiles); `Librerías El Sótano Buen Fin 2026…` (sin promo propia del Buen Fin; Venta Nocturna 13 dic vía Cazaofertas); `"Librerías El Sótano" sucursales…` (direcciones externas vía SIC Cultura y directorios de lugares); `site:elsotano.com carrito OR sucursales OR blog OR recomendaciones` (12 fichas más, sin páginas de carrito/sucursales/blog).

## 13. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, el buscador, los controles JS (filtros, menús, pop-ups, caja de compra) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio. La home en particular devolvió una extracción muy parcial (44 líneas, casi todo imágenes).
- **Límite de peticiones:** la lectura de la ficha de Trilogía Africanus devolvió **429 (límite de peticiones)** y **no se reintentó**, conforme a la regla del proyecto; su precio ($899.00) se cita solo desde el snippet de búsqueda (N1). Tras una pausa de 90 s se retomó con lecturas individuales espaciadas (todas exitosas). No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Muestras sesgadas:** los precios/stock de §4.4 provienen de snippets de búsqueda (crawls de 1–24 días, sesgo a fondo editorial antiguo); el conteo «19 de 24 OutOfStock» describe esa muestra, no el sitio. Los descuentos del listado de Derecho son de una sola página (18 tarjetas) de un solo tema.
- **Fecha:** todo lo observado corresponde al **13 nov 2026, primer día del Buen Fin 2026**. Los precios, promos y disponibilidad pueden cambiar en cualquier momento, y la ausencia de Buen Fin en la home es un dato de ese día.
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 2 y no se cubren aquí (salvo lo necesario para describir lo visible).

---

## Sin verificar

Lo que este frente no pudo establecer con lectura de texto el 13 nov 2026 (detalle en §11, N1–N15): la ficha de Trilogía Africanus por lectura directa (429, sin reintento); header, menú, buscador y footer; pasos del checkout, métodos de pago, MSI y envío; URL del carrito como página; ordenación y filtros más allá de Tipo/Tema; cualquier página o promo de Buen Fin; reseñas; blog; página de sucursales del sitio y total de sucursales («15+» sin confirmar); vista móvil; rendimiento medido; títulos completos de la rejilla de la home y de «Nuevos productos»; significado de «pd.»; y total del catálogo.

## Resumen ejecutivo

- El Sótano es una librería en línea a medida (no Shopify), con catálogo por tema (29 temas, 18 resultados por página; Derecho supera 300 títulos) y fichas por ISBN con precio MXN y disponibilidad en datos estructurados.
- La home del primer día del Buen Fin 2026 no menciona el Buen Fin: dominan banners de preventa/aniversario/autores, una rejilla de portadas, contenido editorial (Sarah J. Maas y sus sagas) y un «cómo comprar» en 4 pasos con envío nacional/internacional y recolección en sucursal.
- Los descuentos visibles son por título (15–25% verificados por aritmética en el listado de Derecho, más un −70% en un par de precios), sin campaña nombrada ni MSI ni envío gratis observables.
- El carrito existe como widget persistente (0 productos, subtotal $0.00) y cada tarjeta trae «Agregar»; pero el checkout, los métodos de pago y la URL del carrito quedaron sin verificar.
- Hallazgo de stock: 19 de 24 fichas muestreadas vía buscador figuran OutOfStock (muestra sesgada, no tasa del sitio) y la ficha no marca el agotado en texto visible — solo el JSON-LD lo declara.
- La red de sucursales no se ve en el sitio más allá de la frase de recolección; las direcciones (Quevedo 209 Coyoacán, Insurgentes Sur 214, Puebla) vienen de fuentes externas y el «15+ sucursales» no se confirmó.
