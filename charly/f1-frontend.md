# F1.1 — Front end · Charly

- **Sitio:** https://www.charly.com/ (marca visible: Charly — «Charly México»; calzado y ropa deportiva, marca mexicana)
- **Fecha de la investigación:** 13 nov 2026
- **Frente:** F1.1 (front end) — Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` y `browser.search` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras, sin contacto con la empresa). Las páginas se rastrearon el 13 nov 2026; las lecturas directas muestran «crawled» entre 00:59 y 18:18 UTC del 13 nov 2026.
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página o en el resultado de búsqueda, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza), **HIPÓTESIS** (derivada, marcada como tal) u **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.
- **Advertencia de fecha:** 13 nov 2026 es el **primer día del Buen Fin 2026 (13–17 nov)**. Los precios con descuento, las etiquetas BUEN FIN / PROMOCIÓN y los porcentajes citados están distorsionados por la campaña y pueden cambiar al terminarla. Los precios tachados son los precios de lista que muestra el propio sitio; el JSON-LD `Product.offers` también publica el precio de lista, no el precio con descuento.

---

## 1. Plataforma (inferencia de front)

- **INFERIDO (confianza alta): Magento 2 (familia Adobe Commerce / Magento Open Source).** Evidencia acumulada:
  - Patrón de búsqueda `/search.html?query=…` (típico de Magento catalogsearch). OBSERVADO en https://www.charly.com/search.html?query=Sudadera%20día%20de%20muertos .
  - Marcado de Page Builder filtrado en la ficha del Jersey Atlas: en «Additional Details» aparece `#html-body [data-pb-style=AY40YQQ]{justify-content:flex-start;display:flex;…}` — `data-pb-style` es la firma del Page Builder de Magento 2. OBSERVADO en https://www.charly.com/jersey-atlas-local-para-hombre-24-25-5020045600-mx .
  - Parámetro `?media_type=image` en URLs de producto (p. ej. `…-5020045600-mx?media_type=image`, `…-5019963300-mx?media_type=image`), propio de la galería multimedia de Magento. OBSERVADO en resultados de búsqueda.
  - URLs de producto con reescritura Magento: dos patrones conviven, `/<ITEM>-<slug>` (p. ej. `/1087560002-tachones-de-piel-…`) y `/<slug>-<ITEM>-mx` (p. ej. `/jersey-atlas-local-para-hombre-24-25-5020045600-mx`), además de la forma corta `/<ITEM>-310` (p. ej. `https://www.charly.com/1059879004-310`). OBSERVADO.
  - Páginas CMS con slug simple (`/politica-de-privacidad`, `/colecciones/dia-de-muertos`). OBSERVADO.
- **NO VERIFICADO:** si es Magento Open Source o Adobe Commerce, versión, hosting/CDN, tema, módulos instalados, ni pasarela de pago (eso corresponde al frente back end). El contraste con F4T3 es total: F4T3 es Shopify; Charly es Magento.

## 2. Home — secciones en orden

URL: https://www.charly.com/ — OBSERVADO 13 nov 2026. **La extracción de texto de la home es muy escueta (32 líneas)**: el sitio es pesado en JS/imágenes y el crawler solo devolvió texto parcial. El orden siguiente es el de la extracción, no necesariamente el orden visual completo.

Orden observado en la extracción (de arriba a abajo):

1. **Título de página:** «Calzado y Ropa Deportiva». OBSERVADO.
2. **Fila no interpretable:** «-, -, -, -, -, -» (probablemente marcadores de un carrusel/hero de imágenes sin texto alternativo legible). OBSERVADO como texto; su contenido visual es NO VERIFICADO.
3. **«CATEGORÍAS»** — **HOMBRE, MUJER, FÚTBOL, KIDS**. OBSERVADO. Son las 4 categorías de nivel superior visibles en la home.
4. **Productos con etiqueta «Nuevo»** (sin encabezado de sección visible en la extracción):
   - *Chamarra Charly Winter color Gris para Hombre*, $1,099.00 MXN.
   - *Playera Charly Día de Muertos color Negro*, $499.00 MXN.
   - *Chamarra Charly Winter color Blanco para Mujer*, $1,099.00 MXN.
   OBSERVADO (precios sin descuento visible en estos tres).
5. **«CALZADO FÚTBOL»** — producto destacado: *Tenis Charly Cicero Sala 26 Sport Fútbol Indoor color Crema Verde para Hombre*, $999.00 MXN → **$799.20 MXN** (20% off). OBSERVADO.
6. **«TENIS DEPORTIVOS MUJER»** — encabezado de sección al final de la extracción, **sin productos listados** (la extracción se corta ahí). OBSERVADO el encabezado; su contenido es NO VERIFICADO.
7. **Banner de envío — OBSERVADO vía snippet de búsqueda de la home:** «**Envío Estándar Gratis en compras mayores a $999**» (también visible en la página de búsqueda, §7). El texto aparece en la home según el resultado de búsqueda de `site:charly.com` del 13 nov 2026.
8. **Aviso de PWA — OBSERVADO vía snippet de búsqueda de la home:** «You are offline. Some features may be unavailable.» / «Estas desconectado. Es posible que algunas funciones no estén disponibles.» Es el mensaje offline de una app/PWA. **INFERIDO (confianza baja-media):** el sitio tiene service worker / comportamiento PWA; no se pudo confirmar qué funciones quedan offline ni si hay app instalable.

### Idioma y moneda

- **OBSERVADO:** todo el copy comercial está en español de México; los nombres de producto mezclan español e inglés («Sport», «Running», «City», «Moda Skurban»). Precios en MXN en todas las páginas leídas, con el sufijo «MXN». No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Colecciones

Solo se pudo leer directamente una colección temática. Las categorías de la home (HOMBRE, MUJER, FÚTBOL, KIDS) no devolvieron URL en ningún resultado de búsqueda ni en la extracción, por lo que sus URLs de listado quedan NO VERIFICADAS.

| Colección | URL | Titular / promo en página | Productos visibles (extracción) | Etiquetas vistas |
|---|---|---|---|---|
| Día de Muertos | https://www.charly.com/colecciones/dia-de-muertos | «DÍA DE MUERTOS», «11 Resultados», «Ordenar por» | 11 | PROMOCIÓN (en 3 productos) |

- **OBSERVADO** (13 nov 2026, https://www.charly.com/colecciones/dia-de-muertos ): 11 productos, todos con precio en MXN; 4 de ellos con precio tachado + precio con descuento:
  - *Tenis Charly Luno Día de Muertos Moda Skurban color Blanco Negro para Hombre*, $1,099.00.
  - *Chamarra Bomber Charly Día de Muertos Fútbol Eterno color Negro*, $1,249.00.
  - *Playera Charly Día de Muertos Fútbol Eterno color Negro Multicolor*, $999.00.
  - *Gorra Charly Día de Muertos Fútbol Eterno color Negro*, $349.00.
  - *Tenis Charly Action color Negro Multicolor para Hombre X Jacobo y María Ángeles*, $1,399.00 → **$979.30** (30% off), etiqueta PROMOCIÓN.
  - *Playera Charly Día de Muertos color Blanco*, $499.00.
  - *Gorra Charly Día de Muertos Training color Negro*, $399.00.
  - *Tenis Charly Día de Muertos Mikado color Blanco Naranja para Mujer*, $1,099.00 → **$659.40** (40% off), etiqueta PROMOCIÓN.
  - *Playera Charly Día de Muertos color Negro*, $499.00.
  - *Gorra Charly Día de Muertos Fútbol Eterno color Negro Multicolor*, $349.00.
  - *Tenis CHARLY X METZICAN Día de Muertos Glow in the Dark City Moda Skurban color Negro para Hombre*, $999.00 → **$699.30** (30% off), etiqueta PROMOCIÓN.
- **Patrón de la colección:** mezcla calzado, ropa y accesorios (gorras) bajo una misma colección temática; los productos no son solo «Día de Muertos» de nombre, hay colaboraciones (Jacobo y María Ángeles, METZICAN). OBSERVADO.
- **Filtros en colección:** NO VERIFICADO. Solo apareció el control «Ordenar por» (sin que la extracción muestre sus opciones). No apareció ningún facetado por talla, color, precio o disponibilidad en la extracción. **HIPÓTESIS:** al ser Magento, es probable que exista navegación por capas (layered navigation) con filtros; no se observó, así que no se afirma.
- **Categorías del encargo (fútbol, running, trail, casual, walking):** **OBSERVADO como disciplinas en los nombres de producto** — «Fútbol Soccer», «Running Road», «Running Trail», «Casual» (p. ej. *Tenis Charly Leggera Sport Running Road Casual*, *Tenis Charly Quest 2.0 Sport Running Trail*). **NO VERIFICADO** como páginas de categoría con URL propia, y «walking» como categoría no apareció en ningún nombre de producto (la palabra «caminar» sí aparece en descripciones, p. ej. Leggera: «corriendo, trotando o caminando por asfalto»).

## 4. Página de producto

Tres fichas leídas directamente y completas, más una cuarta (Legendario 1087560002) documentada solo vía resultados de búsqueda porque su lectura directa devolvió 429 y no se reintentó (ver §11). Estructura común OBSERVADA en las tres fichas leídas:

- Migas de pan: «Inicio» + categoría en mayúsculas (**CALZADO / FÚTBOL / ROPA**) + etiqueta(s) de campaña (**BUEN FIN / PROMOCIÓN / Nuevo**).
- Bloque de reseñas: «**(Sin reseñas)**» + enlace «**Añadir reseña**» en todas las fichas observadas (ningún producto mostró reseñas reales).
- «**ITEM #:**» con código numérico de 10 dígitos (p. ej. 1087246002, 5020045600, 1065288001). OBSERVADO.
- Precio tachado (lista) + precio con descuento en MXN, cuando hay descuento.
- Selectores en este orden: **Color / Talla / «GUÍA DE TALLAS +» / Cantidad**. Los valores concretos de Color y Talla **no aparecen en la extracción de texto** (ver §5).
- Secciones colapsables en el mismo orden: **«- Descripción» / «- Detalles» / «- Reseñas»** (el guion indica acordeón cerrado en la extracción).
- Bloque «**Tecnologías**» en algunos productos (jerseys: aparece la etiqueta «Tecnologías» tras el ITEM #; su contenido detallado solo se ve dentro de la descripción). OBSERVADO en Jersey León Mundial de Clubes (ITEM 5019963300) y en Playera Equipamiento León (ITEM 5095322100) vía snippets.
- Sección «**COMPLEMENTA TU ESTILO**» (venta cruzada / productos relacionados) al final de varias fichas. OBSERVADO en Tenis Breaker 2.0, Chamarra Bomber Día de Muertos y Tenis Quest 2.0 (vía snippets).
- **JSON-LD `Product` con `offers`**: `Product` (nombre), `Price` (precio de lista en MXN, p. ej. 899, 1699, 1599), `Availability: InStock`. OBSERVADO al pie de cada ficha. Ojo: el `Price` del JSON-LD es el precio de lista, **no** el precio con descuento que se ve en la página.
- **Galería de imágenes:** NO VERIFICADO su número ni su contenido — la extracción de texto no incluye imágenes. El parámetro `?media_type=image` en URLs de producto indica que la galería distingue medios (imagen/vídeo), pero no se pudo constatar cuántas imágenes tiene cada ficha ni si hay vídeo o zoom.

### 4.1 Tenis Charly Leggera Sport Running Road Casual color Rey para Hombre

- URL: https://www.charly.com/1087246002-tenis-charly-leggera-sport-running-road-casual-color-rey-para-hombre — OBSERVADO 13 nov 2026 (crawl 18:18 UTC).
- **Precio: $899.00 MXN tachado → $539.40 MXN** (40% off, Buen Fin). Breadcrumb: Inicio / CALZADO, BUEN FIN. ITEM #: 1087246002. (Sin reseñas).
- Descripción OBSERVADA (resumen): para «corredores casuales»; «corriendo, trotando o caminando por asfalto»; parte superior en malla textil, forro textil suave, plantilla de espuma, suela de EVA «ligera, suave y flexible», ajuste por agujetas.

### 4.2 Jersey Atlas Local para Hombre 24-25

- URL: https://www.charly.com/jersey-atlas-local-para-hombre-24-25-5020045600-mx — OBSERVADO 13 nov 2026 (crawl 05:02 UTC).
- **Precio: $1,599.00 MXN tachado → $639.00 MXN** (60% off, Buen Fin). Breadcrumb: Inicio / FÚTBOL, BUEN FIN. ITEM #: 5020045600. (Sin reseñas).
- Descripción OBSERVADA: jersey de club (Atlas F.C., «Rojinegros», «La Academia»); corte Performance, cuello semi V, «embossing» con el contorno del escudo en relieve; 100% poliéster, malla transpirable «MESH», tecnologías **DRY FACTOR** (secado rápido), **NANO GUARD** (anti-olor) y **UV BLOCK**.
- Detalle técnico OBSERVADO: en «Additional Details» se filtra marcado `#html-body [data-pb-style=…]` del Page Builder de Magento (ver §1).

### 4.3 Tachones Charly Stingr PFX Jr Fútbol Soccer color Azul para Niño

- URL: https://www.charly.com/1065288001-tachones-charly-stingr-pfx-jr-futbol-soccer-color-azul-para-nino — OBSERVADO 13 nov 2026 (crawl 03:18 UTC).
- **Precio: $1,699.00 MXN tachado → $1,359.20 MXN** (20% off). Breadcrumb: Inicio / FÚTBOL, PROMOCIÓN. ITEM #: 1065288001. (Sin reseñas).
- Descripción OBSERVADA: calzado infantil/juvenil («Jr», «para Niño»); tecnologías con nombre propio: suela **Monarc** («sigue los tendones anatómicos de tu pie»), **Sweetspot** (zona de golpeo), plantilla **Scape** de EVA pre-moldeada, tecnología sin costuras, tacos rotativos; uso en «pasto sintético y pavimento».
- **El patrón de ficha es idéntico al de adulto** (Color / Talla / GUÍA DE TALLAS + / Cantidad / Descripción / Detalles / Reseñas): no hay ficha diferenciada para kids. OBSERVADO.

### 4.4 Tachones de Piel Charly Legendario 26 PFX Sport Fútbol Soccer color Negro para Hombre (vía búsqueda; lectura directa con 429)

- URL: https://www.charly.com/1087560002-tachones-de-piel-charly-legendario-26-pfx-sport-futbol-soccer-color-negro-para-hombre — **NO VERIFICADO por lectura directa**: el intento de abrirla devolvió 429 y, por regla, no se reintentó.
- **OBSERVADO vía resultados de búsqueda del 13 nov 2026:** ITEM #: 1087560002; breadcrumb Inicio / FÚTBOL, BUEN FIN; **$1,699.00 MXN → $679.60 MXN** (60% off); (Sin reseñas); JSON-LD `Price: 1699`, `Availability: InStock`. Descripción (snippet): «Tradición, precisión y clase… corte fabricado completamente en piel full grain… suela de TPU, plantilla premoldeada, ajuste mediante agujetas… pasto natural, artificial y tierra».
- Este es el ITEM # del encargo (1087560002): **verificado** como producto real, precio y etiquetas, aunque no por lectura directa de la ficha.

### 4.5 Otros precios observados vía resultados de búsqueda (13 nov 2026, Buen Fin)

Todos OBSERVADOS en snippets de búsqueda de charly.com (no por lectura directa de la ficha). El % es cálculo propio sobre los dos precios mostrados por el sitio.

| Producto | ITEM # | Lista | Buen Fin | Desc. |
|---|---|---|---|---|
| Tachones Charly Zinetik 26 Select Jr (Niño, Turquesa Amarillo) | 1065454002 | $899.00 | $629.30 | 30% |
| Tenis Charly Voila Sport Running Road Casual (Negro Naranja) | 1087475007 | $1,199.00 | $599.50 | 50% |
| Tachones Charly Stingr PFX (Mujer, Morado Coral) | 1043036001 | $1,699.00 | $849.50 | 50% |
| Tachones Charly Stingr PFX (Negro Amarillo) | 1087323005 | $1,699.00 | $1,359.20 | 20% |
| Tachones Charly Stingr Sport (Blanco Verde) | 1087322006 | $999.00 | $399.60 | 60% |
| Tenis Charly Quest 2.0 Sport Running Trail (Negro) | 1087605001 | $1,049.00 | $891.65 / $734.30 * | 15% / 30% * |
| Tenis Charly Action X Jacobo y María Ángeles | 1038120006 | $1,399.00 | $979.30 / $839.40 * | 30% / 40% * |
| Tenis Charly Pearl City Moda Urbano (Mujer, Negro) | 1059971002 | $999.00 | $799.20 | 20% |
| Tenis Charly Statem City Moda Urbano (Beige) | 1086333001 | $999.00 | $599.00 | 40% |
| Tenis Charly Breaker 2.0 Sport Tenis (Mujer, Lila Naranja) | 1059879004 | $1,199.00 | $599.50 | 50% |
| Tenis Charly Baku City Moda Urbano (Negro) | 1087677002 | $999.00 | — (solo lista) | — |
| Tachones Charly Neovolution 2.0 (Marino Azul) | 1086955009 | $899.00 | — (solo lista) | — |
| Tenis Charly Electrico Tr Running Trail (Negro) | 1086958003 | $1,299.00 | — (solo lista) | — |
| Jersey Atlas Local Manga Larga 26-27 | 5020488994 | $1,799.00 | — (solo lista) | — |
| Jersey León Mundial de Clubes Edición Especial | 5019963300 | $2,999.00 | — (solo lista) | — |
| Tenis Charly Hotcross 5.0 TF YT (Niño, Blanco Negro) | 1065390005 | $799.00 | — (solo lista) | — |
| Tenis Charly Luno Día de Muertos (Blanco Negro) | 1038231001 | $1,099.00 | — (solo lista) | — |

\* **Anomalía de precios — OBSERVADO:** dos rastreos distintos del mismo producto muestran precios con descuento diferentes el mismo día: Quest 2.0 figura a $891.65 en un rastreo y a $734.30 en otro; Action X Jacobo y María Ángeles a $979.30 en un rastreo y a $839.40 en otro. **INFERIDO (confianza media):** el descuento de Buen Fin se fue profundizando durante el día (o varía por rastreo/caché). Los precios de esta tabla son, por tanto, una foto de cada rastreo, no un precio estable. No se afirma cuál es el precio vigente al cierre del día.

## 5. Guía de tallas y selector de tallas (central en calzado)

- **OBSERVADO — presencia universal del enlace:** el texto «**GUÍA DE TALLAS +**» aparece junto al selector de «Talla» en **todas** las fichas de producto leídas directamente (Leggera, Atlas, Stingr Jr) y en los snippets de búsqueda de al menos 10 productos más (Baku, Statem, Quest 2.0, Stingr PFX en 3 variantes, Neovolution 2.0, Electrico Tr, Voila, Stingr Sport). El «+» indica un elemento expandible (acordeón o modal). Es un componente estándar de la ficha, no de un solo producto.
- **NO VERIFICADO — contenido de la guía:** la tabla de tallas (equivalencias MX/US/EU/cm, cómo medir el pie, diferencias hombre/mujer/niño) **nunca apareció en ninguna extracción de texto**. El contenido vive presumiblemente en un modal/ventana emergente cargado por JS, invisible para el crawler. No se afirma ninguna equivalencia de tallas ni ningún rango.
- **NO VERIFICADO — valores del selector de tallas:** los valores seleccionables (p. ej. qué números MX ofrece cada modelo, qué tallas están agotadas) **no aparecen en ninguna extracción**. En F4T3 las tallas XS–XXL sí eran visibles en texto; en Charly el selector es un control JS cuyos valores no se extrajeron. Tampoco se observó ningún indicador de «quedan pocas» o «agotado» por talla.
- **NO VERIFICADO — guía como página propia:** ninguna búsqueda (`site:charly.com "GUÍA DE TALLAS"`, `site:charly.com colecciones`, búsquedas de tallas) devolvió una página independiente de guía de tallas. Si existe como CMS, su URL no se encontró.
- **OBSERVADO — mismo patrón en kids y en ropa:** la guía aparece igual en calzado infantil (Stingr Jr, Hotcross YT) y en jerseys/playeras (Atlas, León, Equipamiento León). No hay una guía visiblemente distinta por segmento en lo que se pudo ver.
- **INFERIDO (confianza media):** en calzado mexicano la talla se expresa habitualmente en centímetros (MX); que la guía sea el componente central de la ficha (junto al selector, antes de Cantidad) es coherente con una tienda donde la talla es la principal causa de devolución/cambio. Pero **las equivalencias concretas de Charly no se observaron**: no se copian tablas genéricas de otros sitios como si fueran las de Charly.
- **Implicación para el dropshipping (HIPÓTESIS):** si el proyecto replica este frente, la guía de tallas debe ser un componente propio con tabla por segmento (hombre/mujer/niño) y selector con disponibilidad por talla; en Charly esa pieza existe pero su contenido no es legible por texto, así que su calidad real (¿tabla? ¿medidor imprimible? ¿recomendación de ajuste?) queda pendiente de verificación visual.

## 6. Carrito y checkout

- **NO VERIFICADO (completo).** Ninguna página leída ni ningún resultado de búsqueda mostró la URL del carrito, su contenido, el mini-carrito, los pasos del checkout, los métodos de pago, los meses sin intereses ni las opciones de envío en checkout. Añadir productos al carrito y recorrer el checkout queda fuera del alcance de la lectura de texto y no se hizo.
- **Lo único observado sobre la compra:**
  - «**Envío Estándar Gratis en compras mayores a $999**» — banner visible en la página de búsqueda y (vía snippet) en la home. OBSERVADO 13 nov 2026.
  - El selector «Cantidad» existe en la ficha (antes de añadir al carrito). OBSERVADO.
  - No se observó ningún logotipo de tarjeta, banco, pasarela (Mercado Pago, Stripe, PayPal, Conekta, etc.) ni medio alternativo (OXXO, SPEI, etc.) en las páginas leídas. **No se afirma ningún método de pago concreto.** Las búsquedas de «meses sin intereses» / pagos en charly.com no devolvieron resultados propios de Charly.
  - **INFERIDO (confianza media):** al ser Magento, el checkout es presumiblemente el checkout estándar de Magento (con su flujo de envío → pago); pero eso es una inferencia de plataforma, no una observación del flujo real de Charly.

## 7. Búsqueda y UX de navegación

- **Buscador — OBSERVADO:** https://www.charly.com/search.html?query=Sudadera%20día%20de%20muertos (crawl 12 nov 2026 16:34 UTC, leído el 13 nov).
  - Encabezado: «Charly México's Search Result for term Sudadera día de muertos» (título en inglés, contenido en español).
  - Banner: «Envío Estándar Gratis en compras mayores a $999».
  - «**1315 elementos**» como conteo total.
  - Bloque «**PRODUCTOS SUGERIDOS**» con 3 productos (Playera Día de Muertos Negro $499; Playera Día de Muertos Blanco $499; Gorra Día de Muertos Fútbol Eterno Negro $349) **antes** de los resultados.
  - Migas «Inicio / Resultados para la búsqueda: Sudadera día de muertos» (el título se repite dos veces en la extracción).
  - Control «**Ordenar por**» (opciones no visibles en la extracción).
  - Resultados listados (13 en la extracción): mezclan sudaderas con playeras, gorras, tenis y chamarras. Etiquetas **PROMOCIÓN** y **Nuevo** visibles en varios resultados. Precios con tachado + descuento donde aplica (p. ej. METZICAN $999 → $699.30; Mikado $1,099 → $659.40).
- **INFERIDO (confianza media-alta):** el «1315 elementos» **no** es el número de coincidencias de la búsqueda — es probablemente el tamaño total del catálogo (o el conteo sin filtrar): la consulta «Sudadera día de muertos» devuelve playeras y gorras que no son sudaderas, y 1,315 es un orden de magnitud coherente con un catálogo de marca grande. El número se reporta tal como lo muestra la página.
- **INFERIDO (confianza media):** la relevancia de la búsqueda es débil para consultas compuestas: devuelve productos que comparten alguna palabra («día de muertos») aunque no sean sudaderas. No se pudo confirmar el motor de búsqueda (nativo de Magento, Elasticsearch u otro): NO VERIFICADO.
- **Filtros en búsqueda:** NO VERIFICADO. Ningún control de filtro por talla, color, precio, categoría o disponibilidad apareció en la extracción (ver HIPÓTESIS de navegación por capas en §3).
- **Navegación:** OBSERVADO que la home organiza el catálogo por **público** (HOMBRE, MUJER, FÚTBOL, KIDS) y por **momento comercial** (Nuevo, Día de Muertos, Buen Fin). Las fichas organizan por **categoría de producto** (CALZADO / FÚTBOL / ROPA) y por **disciplina** (Running Road/Trail, Fútbol Soccer, Casual, Moda Urbano/Skurban, Training). La promo del Buen Fin domina visualmente fichas y listados durante la campaña.
- **Móvil — NO VERIFICADO en render:** sin navegador en vivo no se pudo inspeccionar la vista móvil (menú hamburguesa, orden de secciones, comportamiento táctil, selector de tallas en móvil). No se observaron assets con nombre «mobile» en las extracciones.
- **Accesibilidad:** NO VERIFICADO. No apareció enlace de salto ni información de accesibilidad en las extracciones (a diferencia de F4T3, donde sí se vio «Omitir para ir a lista de resultados»).

## 8. Header / footer / menú / newsletter

- **Header, menú principal, buscador visible, cuenta, footer y newsletter: NO VERIFICADO.** La extracción de texto de la home, las colecciones, las fichas, la búsqueda y la política de privacidad **no muestra** ninguno de estos bloques. **Eso no significa que no existan**: la extracción de texto omite rutinariamente header/footer y los controles JS (menús, pop-ups, buscador predictivo). Queda pendiente de verificación visual.
- **Búsqueda de newsletter sin resultado:** `site:charly.com "suscríbete" OR newsletter OR "boletín"` no devolvió ningún resultado (13 nov 2026). No se afirma que no haya newsletter; solo que no es encontrable por ese medio.
- **Página legal leída — OBSERVADO:** https://www.charly.com/politica-de-privacidad (crawl 12 nov 2026 23:47 UTC):
  - Operador: **Inter Tenis S.A. de C.V.**, domicilio Blvd Aeropuerto No. 425 D, Fracciones del Predio Sta Julia de Jerez, C.P. 37290, León, Guanajuato.
  - Contacto: **contactotiendaonline@charly.com**; teléfono de atención **800-925-1001** (para derechos ARCO y revocación de consentimiento).
  - Datos tratados: identificación, contacto y ubicación física derivados del registro como cliente/usuario de Charly.com y de las transacciones; finalidades secundarias de mercadotecnia/promoción (con oposición por correo).
  - «En nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet».
  - Es la única página de footer/legal que se pudo leer; términos y condiciones, envíos y devoluciones **no** se encontraron por búsqueda (`site:charly.com términos condiciones envíos devoluciones meses sin intereses` solo devolvió home y fichas de producto).

## 9. Contenido y mensajes comerciales (qué vende)

- **OBSERVADO — qué vende:** calzado y ropa deportiva de marca propia (Charly, marca mexicana), para hombre, mujer y niños:
  - **Calzado fútbol:** tachones/tacos (Legendario 26 PFX, Stingr PFX, Hotcross 26, Zinetik 26 Select Jr, Neovolution 2.0), turf/tenis sala (Cicero Sala 26, Hotcross 5.0 TF YT).
  - **Running:** road/casual (Leggera, Voila), trail (Quest 2.0, Electrico Tr).
  - **Moda urbana / casual:** City (Baku, Statem, Pearl), Skurban (Luno, Action), Training (Breaker 2.0).
  - **Ropa:** jerseys de clubes (Atlas 24-25 y 26-27, León Mundial de Clubes), playeras de equipamiento, chamarras (Winter, Bomber Día de Muertos), sudaderas Fleece, gorras.
  - **Colecciones temáticas y colaboraciones:** Día de Muertos (Fútbol Eterno), CHARLY X METZICAN, X Jacobo y María Ángeles, Colección Juegos de Invierno Milano Cortina 2026 (anunciada en prensa externa, precios $599–$799 según esa fuente — no verificada en charly.com).
  - **Clubes:** Atlas y León son los equipos visibles en las fichas leídas (jerseys oficiales).
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - Etiquetas de campaña en ficha y listado: «BUEN FIN», «PROMOCIÓN», «Nuevo».
  - «Envío Estándar Gratis en compras mayores a $999».
  - Tecnologías con nombre propio como argumento de venta: DRY FACTOR, NANOGUARD / NANO GUARD, MICROVENT, UV BLOCK, suela Monarc, Sweetspot, plantilla Scape.
  - Identidad mexicana como argumento: colaboraciones con artistas mexicanos (Jacobo y María Ángeles), colección Día de Muertos, homenaje a Quetzalcóatl (Hotcross 26), «Fútbol Eterno».
  - Precio tachado + precio con descuento en la mayoría de fichas durante el Buen Fin (descuentos observados: 15%, 20%, 30%, 40%, 50%, 60% según producto — no hay un % único de campaña).
- **Rango de precios — OBSERVADO (solo productos citados, 13 nov 2026, precios de lista):** de **$349 MXN** (gorra Día de Muertos) a **$2,999 MXN** (Jersey León Mundial de Clubes Edición Especial); calzado entre $799 y $1,699 de lista; con descuento Buen Fin, calzado observado entre $399.60 y $1,359.20. **No es un rango de catálogo verificado completo**: es el rango de los productos citados en este informe; el catálogo total (1,315 elementos según la búsqueda) no se recorrió.
- **Reseñas:** todas las fichas observadas muestran «(Sin reseñas)» y el enlace «Añadir reseña». **OBSERVADO:** el sistema de reseñas existe pero sin contenido visible en ningún producto consultado. No se afirma que no haya reseñas en todo el catálogo; solo que en las fichas vistas el contador es cero.

## 10. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** las 6 lecturas directas exitosas se completaron y el servicio de lectura marcó cada página como rastreada recientemente (entre 1 y 19 horas antes de la consulta). Eso solo constata que el crawler pudo cargar el texto; **no es una medición de velocidad**.
- **OBSERVADO (indicio PWA):** el snippet de la home muestra el aviso offline «You are offline. Some features may be unavailable.» (ver §2.8), indicio de service worker. Sin medición, no se puede afirmar impacto en rendimiento.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, número de peticiones, puntuación Lighthouse/PageSpeed, ni comportamiento en móvil. No se inventa ninguna cifra.
- **INFERIDO (confianza baja):** la home devuelve una extracción de solo 32 líneas pese a ser la página principal, lo que sugiere una home pesada en imágenes/JS con poco texto indexable por el crawler; F4T3, en cambio, devolvió una extracción rica. Es una diferencia de método de render, no una medición de rendimiento.

## 11. Tabla final — observado / inferido / hipótesis / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Home: título «Calzado y Ropa Deportiva»; categorías HOMBRE, MUJER, FÚTBOL, KIDS; productos «Nuevo» ($499–$1,099); secciones «CALZADO FÚTBOL» y «TENIS DEPORTIVOS MUJER» | https://www.charly.com/ |
| O2 | «Envío Estándar Gratis en compras mayores a $999» (banner en búsqueda y home vía snippet) | https://www.charly.com/search.html?query=Sudadera%20día%20de%20muertos ; home vía búsqueda |
| O3 | Colección Día de Muertos: 11 resultados, «Ordenar por», precios $349–$1,399, 3 productos con etiqueta PROMOCIÓN | https://www.charly.com/colecciones/dia-de-muertos |
| O4 | Ficha estándar: Inicio + categoría + etiqueta de campaña, (Sin reseñas) + Añadir reseña, ITEM # de 10 dígitos, precio tachado + descuento, Color / Talla / GUÍA DE TALLAS + / Cantidad, acordeones Descripción / Detalles / Reseñas | Leggera, Atlas, Stingr Jr (§4.1–4.3) |
| O5 | Leggera: $899 → $539.40 (40% off), ITEM 1087246002, CALZADO + BUEN FIN | https://www.charly.com/1087246002-… |
| O6 | Jersey Atlas 24-25: $1,599 → $639 (60% off), ITEM 5020045600, FÚTBOL + BUEN FIN, tecnologías DRY FACTOR / NANO GUARD / UV BLOCK | https://www.charly.com/jersey-atlas-local-para-hombre-24-25-5020045600-mx |
| O7 | Stingr PFX Jr (Niño): $1,699 → $1,359.20 (20% off), ITEM 1065288001, FÚTBOL + PROMOCIÓN, tecnologías Monarc / Sweetspot / Scape | https://www.charly.com/1065288001-… |
| O8 | Legendario 1087560002: $1,699 → $679.60 (60% off), FÚTBOL + BUEN FIN (vía búsqueda; lectura directa 429) | Búsqueda 13 nov 2026 (ver §4.4) |
| O9 | «GUÍA DE TALLAS +» presente en todas las fichas leídas y en ≥10 productos vía snippets (calzado, ropa, kids) | Fichas §4 + búsquedas |
| O10 | JSON-LD Product.offers con precio de lista (no el precio con descuento) e InStock, al pie de cada ficha | Fichas §4 |
| O11 | Búsqueda: «1315 elementos», bloque PRODUCTOS SUGERIDOS (3), «Ordenar por», resultados con etiquetas PROMOCIÓN / Nuevo | https://www.charly.com/search.html?query=Sudadera%20día%20de%20muertos |
| O12 | Sección «COMPLEMENTA TU ESTILO» (venta cruzada) en varias fichas | Snippets: Breaker 2.0, Bomber, Quest 2.0 |
| O13 | Precios Buen Fin variables por producto: descuentos observados 15–60% (tabla §4.5) | Búsquedas 13 nov 2026 |
| O14 | Dos rastreos del mismo producto con descuento distinto el mismo día (Quest 2.0: $891.65 vs $734.30; Action: $979.30 vs $839.40) | Búsquedas 13 nov 2026 |
| O15 | Política de privacidad: operador Inter Tenis S.A. de C.V. (León, Gto.), contactotiendaonline@charly.com, 800-925-1001, uso de cookies/web beacons | https://www.charly.com/politica-de-privacidad |
| O16 | Todas las fichas consultadas muestran «(Sin reseñas)» | Fichas §4 + snippets |
| O17 | Español de México + precios en MXN en todo lo leído | Todas las páginas |
| O18 | Aviso offline «You are offline. Some features may be unavailable.» en la home (vía snippet) | Búsqueda site:charly.com |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Plataforma Magento 2 | `/search.html?query=`, `data-pb-style` (Page Builder), `?media_type=image`, patrones de URL — confianza **alta** |
| I2 | «1315 elementos» es el tamaño del catálogo, no las coincidencias de la búsqueda | La consulta devuelve productos que no son sudaderas; el orden de magnitud cuadra con marca grande — confianza **media-alta** |
| I3 | La relevancia de búsqueda es débil en consultas compuestas | Resultados «Sudadera día de muertos» incluyen playeras y gorras — confianza **media** |
| I4 | El descuento de Buen Fin se profundizó durante el día (o varía por rastreo) | Dos precios distintos por producto el mismo día (O14) — confianza **media** |
| I5 | El sitio tiene service worker / comportamiento PWA | Aviso offline en la home — confianza **baja-media** (sin verificación técnica) |
| I6 | Checkout estándar de Magento | Inferencia de plataforma (I1), no observación del flujo — confianza **media** |
| I7 | La home es pesada en imágenes/JS con poco texto extraíble | Extracción de solo 32 líneas frente a la riqueza de F4T3 — confianza **baja** (diferencia de método, no medición) |

### HIPÓTESIS (derivadas, marcadas)

| # | Afirmación | Base |
|---|---|---|
| H1 | Existe navegación por capas (filtros por talla/color/precio/disponibilidad) en colección y búsqueda | Es el comportamiento estándar de Magento; no se observó en ninguna extracción |
| H2 | La guía de tallas es un modal con tabla por segmento (hombre/mujer/niño) | El enlace «GUÍA DE TALLAS +» es universal en la ficha y el «+» sugiere expansión; contenido no observado |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Contenido de la guía de tallas (tabla, equivalencias, cómo medir) | El enlace existe (O9) pero su contenido nunca apareció en ninguna extracción; probablemente modal JS |
| N2 | Valores del selector de tallas (qué tallas ofrece cada modelo, disponibilidad por talla) | Los controles son JS; la extracción solo muestra la etiqueta «Talla» |
| N3 | Guía de tallas como página propia | Ninguna búsqueda devolvió su URL |
| N4 | Carrito (contenido, mini-carrito), pasos del checkout, métodos de pago, MSI por banco | Ninguna URL de carrito surgió en lecturas ni búsquedas; añadir al carrito fuera de alcance |
| N5 | Número de imágenes de la galería por ficha; zoom; vídeo en ficha | La extracción omite imágenes; solo el parámetro `?media_type=image` sugiere galería multimedia |
| N6 | Header, menú principal, buscador visible, cuenta, footer, newsletter | No aparecen en ninguna extracción (ausencia en extracción ≠ ausencia en el sitio); la búsqueda de newsletter no devolvió nada |
| N7 | Filtros en colección y en búsqueda | Solo se vio «Ordenar por»; ver HIPÓTESIS H1 |
| N8 | URLs de las categorías HOMBRE / MUJER / FÚTBOL / KIDS y de las disciplinas (running, trail, casual, walking) | La home las nombra pero ninguna URL surgió; «walking» no apareció como categoría |
| N9 | Términos y condiciones, política de envíos y devoluciones | La búsqueda solo devolvió home y fichas; no se encontró su URL |
| N10 | Vista y UX móvil real (menú, orden, táctil, selector de tallas en móvil) | Sin navegador en vivo ni render |
| N11 | Rango de precios del catálogo completo y total de productos | Solo los productos citados; «1315 elementos» es inferencia (I2), no conteo recorrido |
| N12 | Rendimiento medido (LCP, tiempos, Lighthouse) | Método de lectura de texto no mide rendimiento |
| N13 | Motor de búsqueda (nativo / Elasticsearch / otro) y criterio de ordenación por defecto | No observable por texto |
| N14 | Lectura directa de la ficha Legendario 1087560002 | Intento de apertura devolvió 429; no se reintentó por regla (sus datos se documentan vía búsqueda, O8) |
| N15 | Existencia o no de app móvil propia de Charly México (la app «Charly» de Google Play hallada es de delivery en Paraguay, no relacionada) | La búsqueda de carrito devolvió una app homónima no relacionada; sin evidencia de app propia |

## 12. Fuentes consultadas

Lecturas directas de texto de páginas públicas de https://www.charly.com/ el 13 nov 2026 (6 exitosas):

1. https://www.charly.com/ (home — extracción de 32 líneas)
2. https://www.charly.com/colecciones/dia-de-muertos
3. https://www.charly.com/1087246002-tenis-charly-leggera-sport-running-road-casual-color-rey-para-hombre
4. https://www.charly.com/jersey-atlas-local-para-hombre-24-25-5020045600-mx
5. https://www.charly.com/1065288001-tachones-charly-stingr-pfx-jr-futbol-soccer-color-azul-para-nino
6. https://www.charly.com/search.html?query=Sudadera día de muertos
7. https://www.charly.com/politica-de-privacidad

Lectura fallida (429, no reintentada): https://www.charly.com/1087560002-tachones-de-piel-charly-legendario-26-pfx-sport-futbol-soccer-color-negro-para-hombre (sus datos se cubren vía búsqueda, O8/N14).

Búsquedas web de apoyo (13 nov 2026, resultados de charly.com usados como evidencia y citados arriba): «Charly charly.com tienda calzado deportivo México Buen Fin 2026», «site:charly.com categorías hombre mujer fútbol kids», «site:charly.com colecciones», «site:charly.com "GUÍA DE TALLAS"», «"charly.com" Magento tienda en línea», «site:charly.com "suscríbete" OR newsletter OR "boletín"», «"charly.com" "Mi carrito" OR "checkout/cart" OR "Ver carrito"», «charly.com "guía de tallas" calzado tallas MX», «"charly.com" carrito checkout "envío" gratis $999», «site:charly.com términos condiciones envíos devoluciones meses sin intereses», «site:charly.com "Buen Fin" colección OR categoría OR "resultados"», «"charly" "charly.com" "meses sin intereses" OR "pago" tarjeta OXXO PayPal Mercado Pago». Las búsquedas genéricas de pagos/carrito/guía devolvieron resultados ajenos a Charly y no aportan hechos a este informe (salvo N15).

## 13. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, los controles JS (filtros, menús, selector de tallas, modal de guía de tallas, galería, pop-ups) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio. En Charly este límite pesa más que en F4T3: la home devolvió solo 32 líneas y los valores de talla/color nunca se extrajeron.
- **Límite de peticiones:** una lectura directa (ficha Legendario 1087560002) devolvió **429 (límite de peticiones)**. Por regla no se reintentó; sus datos se documentan solo vía resultados de búsqueda (O8) y la lectura directa queda en NO VERIFICADO (N14). Tras una pausa de 90 s las lecturas siguientes funcionaron. No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Fecha:** todo lo observado corresponde al **13 nov 2026, primer día del Buen Fin 2026**; la home, las colecciones y las fichas están dominadas por esa campaña. Los precios con descuento varían incluso dentro del mismo día (O14). Los precios, promos y disponibilidad pueden cambiar al terminar la campaña (17 nov 2026).
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 2 y no se cubren aquí (salvo lo necesario para describir lo visible).
