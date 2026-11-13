# F1.1 — Front end · Ahal (AHAL Bio Cosmética)

- **Sitio:** https://www.ahal.mx/ (marca visible: AHAL Bio Cosmética)
- **Fecha de la investigación:** 13 nov 2026 — **primer día del Buen Fin 2026 (13–17 nov)**. Los precios y promos observados pueden estar distorsionados por el Buen Fin; se anota cuando aplica.
- **Frente:** F1.1 (front end) — Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras, sin contacto con la empresa). Las páginas se rastrearon el 13 nov 2026 ~19:20–19:23 UTC (13:20–13:23 CST). Dos búsquedas web de apoyo aportaron instantáneas del índice de búsqueda (rastreadas ~12 nov 2026) para las landings que no se pudieron leer directamente (ver §8 y §11).
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza), **HIPÓTESIS** (derivada, marcada como tal) u **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.

---

## 1. Plataforma (inferencia de front)

- **INFERIDO (confianza alta): Shopify.** Evidencia: estructura de URLs `/collections/<slug>`, `/products/<slug>`, `/search?q=…`, `/cart`, `/pages/<slug>`; assets servidos desde `cdn.shopify.com/s/files/1/0679/3053/` y `www.ahal.mx/cdn/shop/...`; errores de plantilla **Liquid** visibles en landings (ver §7); secciones PageFly (`sections/pf-1134a0a4`, `sections/pf-2ca009e8`). Todo lo observado es coherente con una tienda Shopify con tema personalizado + PageFly.
- **INFERIDO (confianza alta): app de reseñas Loox.** Evidencia: las reseñas de home y fichas se sirven desde `images.loox.io` y el widget se identifica como `#looxReviewsFrame`; la página pública de reseñas vive en `loox.io/s/4JV5-rlTx`.
- **NO VERIFICADO:** proveedor de hosting/CDN perimetral, versión del tema, resto de apps instaladas, ni si hay cabecera de Cloudflare (eso corresponde al frente back end).

## 2. Home — secciones en orden

URL: https://www.ahal.mx/ — OBSERVADO 13 nov 2026.

**Limitación importante de la lectura:** la extracción de texto de la home **solo devolvió el widget de reseñas** (378 líneas, todas del módulo de Customer Reviews). No aparecieron en la extracción el hero, las categorías, los bloques de producto, el header ni el footer. **Eso no significa que no existan**: la extracción de texto omite routinely esos bloques (en F4T3 ocurrió lo mismo con header/footer, §10 de aquel informe). El orden de secciones de la home queda, por tanto, **NO VERIFICADO** por este método. Lo único observable de la home es:

1. **Título SEO de la home (OBSERVADO):** «Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos».
2. **Sección «Customer Reviews» (OBSERVADO):** valoración global **4.7 / 5 a partir de 5,209 reseñas**, con fotos de clientes y texto completo. Se leyeron 39 reseñas con foto/vídeo en la extracción (la más reciente: 19 jun 2026; la más antigua visible: 3 sep 2025). Incluye reseñas de 1 estrella publicadas sin ocultar (p. ej. Marula Facial Serum 1/5, 6 oct 2026; Mini Lipgloss Sacred Icons Kit 1/5, 30 sep 2026; Dunas Bronzer 1/5, 12 jul 2026 por producto llegado sin polvo y sin respuesta de soporte). La página de reseñas de Loox cita **3,555 reseñas** (instantánea de búsqueda, rastreada ~12 nov 2026) — cifra **distinta** de las 5,209 de la home; la discrepancia no se explica con lo observado (ver §9, N8).
3. **Barra de anuncios (marquee) — OBSERVADO en todas las páginas leídas** (home, colecciones, búsqueda, carrito): se repite 10 veces el mismo trío de mensajes: «**3X2 EN TODA LA TIENDA**» / «**Envío gratis en compras mayores a $2,000**» / «**Kit de 3 Mini Jabones Faciales de regalo en compras mayores a $1,800**». La repetición ×10 en la extracción es coherente con un marquee/anuncio deslizante.
4. **Buen Fin — OBSERVADO por ausencia en las páginas leídas:** a 13 nov 2026, primer día del Buen Fin, **ninguna** de las 7 páginas leídas directamente menciona «Buen Fin». La promo visible es el **3X2 en toda la tienda** (sin fecha de fin visible en la extracción). No se puede afirmar que el 3X2 sea la promo de Buen Fin ni que no exista una campaña de Buen Fin en otra página no leída: queda **NO VERIFICADO** si hay una landing/colección de Buen Fin (ver §9, N2).

### Idioma y moneda

- **OBSERVADO:** todo el copy comercial está en español de México; los precios, en MXN en todas las páginas leídas. No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Colecciones

Dos colecciones leídas. Patrón común OBSERVADO: barra marquee de promos (3X2 / envío gratis >$2,000 / regalo >$1,800) en la parte superior de cada colección.

| Colección | URL | Titular / promo en página | Productos visibles (extracción) |
|---|---|---|---|
| Productos (toda la tienda) | https://www.ahal.mx/collections/all | «3X2 EN TODA LA TIENDA» + envío gratis >$2,000 + regalo >$1,800 | **0 productos listados** (anomalía, ver abajo) |
| Favoritos de Ahal | https://www.ahal.mx/collections/favoritos-de-ahal | Mismo marquee de promos | **0 productos listados** (anomalía, ver abajo) |

- **Anomalía — OBSERVADO:** en ambas colecciones la extracción devolvió el título y el marquee pero **ningún producto listado**, solo una única fila de «Product Variants» sin nombre (una variante a $640.00 en `/collections/all`; una a $690.00 en `/collections/favoritos-de-ahal`). **INFERIDO (confianza media):** es un fallo de la extracción de texto (rejilla de productos renderizada por JS), no colecciones vacías — la colección Favoritos existe como origen de navegación real (la ficha de Opuntia se sirve bajo su ruta, §4.2) y el catálogo es amplio (la home muestra reseñas de decenas de productos distintos). El conteo real de productos por colección y el total del catálogo quedan **NO VERIFICADOS**.
- **Filtros y ordenación en colección:** NO VERIFICADO. No apareció ningún control de filtro/orden en la extracción de texto de las colecciones.
- **Otras colecciones:** NO VERIFICADO. No se recorrieron más colecciones (nombres, slugs, conteos). La página editorial `/pages/revista` menciona «La línea completa · Edición Limitada» y un enlace «Ver catálogo completo →», pero su destino no se siguió (NO VERIFICADO a qué URL apunta).

## 4. Página de producto

Dos fichas leídas completas (Mini Tonic Mist y Opuntia Facial Serum). Estructura común OBSERVADA en ambas:

- Galería de imágenes (Opuntia: **4 imágenes**, contador «1 4»; Mini Tonic Mist: nº de imágenes no visible en la extracción).
- Título, precio en MXN (repetido dos veces en la extracción), línea «**Ahorras 0% Agotado**» (ver anomalía en §4.3), imagen de Kueski Pay y texto «**Paga hasta en 12 quincenas, no necesitas tarjeta de crédito.**»
- Secciones fijas en el mismo orden: **Descripción / Modo de uso (o «CÓMO APLICAR») / Ingredientes** (lista INCI completa en Opuntia) / **CONTENIDO** (ml/g) / **SELLOS** (imagen `Claimsfull`).
- Tres sellos de confianza con icono: **«Clínicamente probado — Seguro y efectivo para tu piel» / «Hipoalergénico — Suave hasta para piel sensible» / «Libre de fragancias — Nada que irrite tu piel»**.
- Bloque de disponibilidad: «**En stock y listo para enviarse.** Fecha estimada de llegada: **.**» (fecha vacía — ver §4.3).
- Enlace «Ver todos los detalles».
- Sección «Customer Reviews» (Loox) con valoración, fotos de clientes y **respuestas de la tienda** a reseñas (OBSERVADO en Opuntia: la dueña responde a Claudia F. y a Magnolia V., ambas en 2022–2026).
- **Sin variantes visibles:** ambos productos tienen una única variante «Default Title» (sin tallas ni tonos seleccionables en la extracción). En cosmética con tonos (bases, correctores) es esperable que existan variantes de tono; no se observó en las dos fichas leídas y queda NO VERIFICADO para el resto del catálogo.
- **Sin sección de «completa tu rutina» / cross-sell visible en la extracción de las fichas** (esa sección sí existe en la landing de Tonic Mist, §7.2). NO VERIFICADO si las fichas tienen recomendaciones relacionadas.

### 4.1 Mini Tonic Mist / Mini Agua Tónica con Tuna y Cempasúchil

- URL: https://www.ahal.mx/products/mini-tonic-mist-agua-tonica-con-tuna-y-cempasuchil — OBSERVADO 13 nov 2026.
- **Precio: $290.00 MXN** (sin precio tachado; «Ahorras 0%»). Contenido: **20 ml**. Variante única «Default Title» ($290.00, ID 49389587792192).
- Descripción: «VERSIÓN MINI AGUA TÓNICA HIDRATANTE CON MÁS DE 10 ACTIVOS MEXICANOS — REGRESA LA VITALIDAD A TU PIEL». Activos: cempasúchil, tuna, carambola, mamey. Tipos de piel: normal, mixta, grasa, seca. Tip: humectar después con suero Marula o Kalahari.
- Reseñas: **4.8 / 5 a partir de 11 reseñas** (Loox, en la propia ficha).

### 4.2 Opuntia Facial Serum / Suero Facial Opuntia

- URL: https://www.ahal.mx/collections/favoritos-de-ahal/products/opuntia-facial-serum-suero-facial-opuntia (canónica: https://www.ahal.mx/products/opuntia-facial-serum-suero-facial-opuntia) — OBSERVADO 13 nov 2026.
- **Precio: $1,080 MXN** (sin precio tachado; «Ahorras 0%»). Contenido: **33 ml**. «Producto vegano.» Tipos de piel: normal, mixta, grasa, madura.
- Descripción: «Serum facial que tonifica y previene: aporta protección antioxidante mientras reduce los signos de la edad». Ingredientes destacados: aceite de semilla de tuna, miel melipona mexicana, extracto de guava y tepezcohuite.
- Reseñas: **4.8 / 5 a partir de 102 reseñas** (Loox, en la propia ficha; reseñas visibles desde 2021 hasta sep 2026).

### 4.3 Anomalías de disponibilidad en las fichas — OBSERVADO

Tres señales contradictorias en **ambas** fichas leídas:

1. La línea de precio dice «**Ahorras 0% Agotado**» (texto literal en la extracción de ambas fichas).
2. El bloque de disponibilidad dice «**En stock y listo para enviarse.**» en ambas.
3. La «Fecha estimada de llegada» aparece **vacía**: «Fecha estimada de llegada: **.**» (punto sin fecha) en ambas.

Además, en Mini Tonic Mist los metadatos Open Graph dicen **Availability: InStock**, mientras que la instantánea de búsqueda de Opuntia (rastreo ~12 nov 2026) también muestra «Ahorras 0% Agotado». En cambio, el producto **Sleeping Mask Edición Limitada** ($1,390.00) sí muestra «Agotado» con **Availability: OutOfStock** en sus metadatos (instantánea de búsqueda, ~12 nov 2026) — es decir, el estado «Agotado» existe como estado real en el catálogo.

**INFERIDO (confianza media):** el texto «Agotado» junto a «Ahorras 0%» parece un **defecto de plantilla/tema** (la etiqueta de disponibilidad se renderiza aunque el producto esté en stock), no un agotamiento real de Mini Tonic Mist y Opuntia — porque en ambas fichas convive con «En stock y listo para enviarse» y con OG InStock. Pero **no se puede descartar** que los productos estén realmente agotados y el bloque «En stock» sea el texto defectuoso: la disponibilidad real queda **NO VERIFICADA** (requeriría intentar añadir al carrito, fuera del alcance de lectura). Lo que sí es un hecho observable es la **contradicción visible en la página** y la **fecha de llegada vacía**, dos defectos de front end que un comprador ve.

### 4.4 Envíos y devoluciones (texto en la ficha)

- **NO VERIFICADO:** las fichas leídas **no incluyen** secciones de envío, cambios ni devoluciones en la extracción (a diferencia de F4T3, donde la ficha sí las incluía). Solo se observan los umbrales del marquee: envío gratis en compras >$2,000 y regalo (Kit de 3 Mini Jabones Faciales) en compras >$1,800. Costos de envío por debajo de $2,000, tiempos de entrega, política de cambios/devoluciones y cobertura quedan **NO VERIFICADOS** (sus páginas no se leyeron).
- **OBSERVADO sobre pago:** logo de **Kueski Pay** en ambas fichas + «Paga hasta en 12 quincenas, no necesitas tarjeta de crédito». No se observó ningún otro logotipo de pago, banco, pasarela (Mercado Pago, Stripe, PayPal, Conekta) ni medio alternativo (OXXO, SPEI, tarjeta) en las páginas leídas. **No afirmar ningún otro método de pago.**

## 5. Carrito y checkout

- **Carrito — OBSERVADO:** https://www.ahal.mx/cart , título «Tu carrito» (13 nov 2026). Con el carrito vacío la página **solo muestra el marquee de promos** (3X2 / envío gratis >$2,000 / regalo >$1,800, repetido 10 veces). No apareció texto de «carrito vacío», ni recomendaciones, ni botón de checkout, ni subtotal, ni métodos de pago en la extracción.
- **NO VERIFICADO:** pasos del checkout, campos, métodos de pago aceptados, meses sin intereses por banco, y opciones de envío en checkout (requeriría añadir productos y avanzar, fuera del alcance de lectura de texto y sin navegador en vivo).
- **INFERIDO (confianza media):** al ser Shopify, el checkout es presumiblemente el checkout estándar de Shopify; pero eso es una inferencia de plataforma, no una observación del flujo real de Ahal.

## 6. Búsqueda y UX de navegación

- **Buscador — OBSERVADO:** https://www.ahal.mx/search?q=tonic+mist devuelve «Búsqueda: **7 resultados** encontrados para "tonic mist"», con el marquee de promos arriba. La extracción solo mostró **2 resultados de blog** («¿Para qué sirve el cempasúchil en tu skincare?» y «Fermentos en skincare: qué son, beneficios y cómo transforman la barrera de la piel») y una fila de variante ($290.00, Mini Tonic Mist). Los 7 resultados **no se pudieron enumerar** (la rejilla de productos no aparece en la extracción, misma anomalía que en colecciones, §3).
- **INFERIDO (confianza media):** la búsqueda cubre **productos y artículos del blog** (los dos resultados visibles son de blog). El conteo de 7 para «tonic mist» es plausible como productos + artículos, pero no se pudo confirmar la composición.
- **Filtros y ordenación:** NO VERIFICADO (ni en colección ni en búsqueda apareció control de filtro u ordenación en la extracción).
- **Navegación:** OBSERVADO que el catálogo se organiza por **colecciones** (al menos `all` y `favoritos-de-ahal`) y por **líneas de producto** (skincare, maquillaje, Edición Limitada — estas últimas inferidas de la página `/pages/revista` y de las reseñas, no de un menú observado). El **menú/header** no apareció en ninguna extracción: NO VERIFICADO (ausencia en extracción ≠ ausencia en el sitio).
- **Móvil — NO VERIFICADO en render:** no se observó ningún asset nombrado para móvil ni se pudo renderizar la vista móvil (sin navegador en vivo). Menú hamburguesa, legibilidad, orden de secciones en móvil y comportamiento táctil quedan NO VERIFICADOS.
- **Blog:** OBSERVADO que existe un blog activo (`/blogs/ahal-1/...`) y que la búsqueda lo indexa. Contenido del blog no revisado (fuera del frente F1 salvo su presencia en búsqueda).

## 7. Landings de producto (PageFly)

### 7.1 Kit Raíces — `/pages/kitraices-landing`

- **OBSERVADO (instantánea del índice de búsqueda, rastreada ~12 nov 2026; lectura directa el 13 nov devolvió 429 y NO se reintentó, ver §11):**
  - Titular: «**KIT RAÍCES AHAL** — UN VIAJE DE REGRESO A NUESTRAS RAÍCES MEXICANAS».
  - Bloque «**COMPRA RÁPIDA**» seguido inmediatamente del error: «**Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product**».
  - Secciones: «UN RITUAL DE CUIDADO DE LA PIEL» / «FÓRMULAS LIBRES DE ALCOHOL & FRAGANCIAS. CLÍNICAMENTE PROBADO. PARA TODO TIPO DE PIEL.» / «CELEBRA LA HERBOLARIA MEXICANA — UN RITUAL DEL CUIDADO DE LA PIEL INSPIRADO EN INGREDIENTES ANCESTRALES. ALGUNOS DE ELLOS: EL TEPEZCOHUITE, LA MIEL MELIPONA, LA TUNA Y EL CEMPASÚCHIL.» / «NUESTROS SELLOS» / «¿QUÉ INCLUYE TU KIT?» — **MASK & SCRUB / MINI SLEEPING MASK / MINI AGUA TÓNICA / MINI SERUM OPUNTIA** / «OPINIONES DESTACADAS» / cross-sell: Tonic Mist $850.00 y Mask & Scrub $830.00.
  - **El error Liquid es un defecto visible en la página pública** (no un error interno): la sección de compra rápida de PageFly (`pf-1134a0a4`, línea 51) no recibió el producto que debe renderizar, así que el formulario de compra del kit **no se muestra** (o se muestra roto) en esa landing. El precio del Kit Raíces **no apareció** en la instantánea: NO VERIFICADO.
  - **HIPÓTESIS (a verificar por otro frente o en re-lectura):** el error sugiere que el producto del kit fue eliminado, archivado o renombrado sin actualizar la sección PageFly, o que la sección quedó sin producto asignado tras un cambio de catálogo. No se afirma la causa.

### 7.2 Tonic Mist — `/pages/tonicmist-landing`

- URL: https://www.ahal.mx/pages/tonicmist-landing — OBSERVADO 13 nov 2026 (lectura directa completa, 126 líneas). **Sin error Liquid visible.**
- Estructura en orden: titular «AGUA TÓNICA con cempasúchil» / «REGRESA LA VITALIDAD A TU PIEL» / «TU TÓNICO, SETTING SPRAY Y BRUMA FACIAL 3 EN 1» / «FÓRMULA LIBRE DE ALCOHOL & FRAGANCIAS CLÍNICAMENTE PROBADA PARA TODO TIPO DE PIEL» / imagen + GIF / «REGRESA LA VITALIDAD A TU PIEL» (blend de +10 activos mexicanos: cempasúchil, tuna, carambola —escrito «CAMBOLA» en una línea y «carambola» en otra— y mamey; para piel normal, seca, mixta y grasa; tip de sellar con suero Marula o Kalahari) / «NUESTROS SELLOS» (imagen `SELLOS.png`) / «CONOCE LOS INGREDIENTES» (10 beneficios en lista: protege del daño ambiental, retiene agua, antioxidante/antiinflamatorio, regenerador celular, reparador, combate hiperpigmentación, controla sebo/acné, neutraliza radicales libres, reduce rojeces, hidrata a profundidad) / «BENEFICIOS» (6 puntos: protección antioxidante, previene degradación del colágeno, disminuye manchas y arrugas, regula producción de sebo, controla acné y puntos negros) / «CÓMO USAR» (1. rociar con ojos cerrados, 6 atomizaciones; 2. dejar actuar 1 minuto; tip: reaplicar cuantas veces se necesite) / «**TONIC MIST ON THE GO**» — ficha embebida de **Mini Tonic Mist $290.00** (20 ml, con descripción, tipos de piel, cómo aplicar, contenido y sellos; botón «View Details») / «OPINIONES DESTACADAS» (encabezado sin reseñas visibles en la extracción) / «**COMPLETA TU RUTINA**» — **Tonic Mist $850.00** y **Mask & Scrub $830.00** / «¿QUIERES CONOCER MÁS?» (cierre sin contenido visible en la extracción).
- Imágenes: PNG de producto + **4 GIFs** animados (activos/ingredientes, beneficios, cómo usar) servidos desde `cdn.shopify.com/s/files/1/0679/3053/`. OBSERVADO.
- **Precios confirmados en esta landing:** Mini Tonic Mist **$290.00**, Tonic Mist (100 ml) **$850.00**, Mask & Scrub **$830.00** — coinciden con los datos del encargo. OBSERVADO.

### 7.3 Sleeping Mask — `/pages/sleepingmask-landing`

- **OBSERVADO (instantánea del índice de búsqueda, rastreada ~12 nov 2026; no se leyó directamente):**
  - Titular: «MASCARILLA DE NOCHE CON BAKUCHIOL — REPARA TU PIEL CON EL NUEVO RETINOL VEGETAL».
  - Bloque «COMPRA RÁPIDA» y, más abajo, segundo error: «**Liquid error (sections/pf-2ca009e8 line 133): product form must be given a product**».
  - Secciones: «ACLARA, QUITA MANCHAS Y RESTAURA LA PIEL» / «FÓRMULA LIBRE DE ALCOHOL & FRAGANCIAS CLÍNICAMENTE PROBADA PARA TODO TIPO DE PIEL» / «REPARA TU PIEL MIENTRAS DUERMES» (bakuchiol, zapote negro, miel melipona; «el bakuchiol es la alternativa vegetal al retinol») / «NUESTROS SELLOS» / «CONOCE LOS INGREDIENTES» / «BENEFICIOS» / «TUS ESENCIALES DE NOCHE».
  - **Mismo defecto que Kit Raíces:** el formulario de compra rápida de PageFly no tiene producto asignado. Dos de las tres landings de producto conocidas muestran el error.

## 8. Contenido y mensajes comerciales (qué vende)

- **OBSERVADO — qué vende:** bio cosmética / maquillaje orgánico mexicano: skincare (sueros faciales —Opuntia, Marula, Kalahari—, agua tónica Tonic Mist, mascarillas —Mask & Scrub de tepezcohuite, Sleeping Mask de bakuchiol y zapote negro—, jabones faciales —miel melipona, 3 pack—, kits —Kit Raíces, Kit Back to Beauty, Kit Winter Revival—) y maquillaje (bases líquidas 01–04, correctores, polvo traslúcido, lipgloss —Afrodita, Iris—, lip balm, color sticks —Terra—, paleta de sombras KIN, bronzer Dunas), además de accesorios (cosmetiquera, tote bag) y minis de viaje.
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - «3X2 EN TODA LA TIENDA» / «Envío gratis en compras mayores a $2,000» / «Kit de 3 Mini Jabones Faciales de regalo en compras mayores a $1,800».
  - «REGRESA LA VITALIDAD A TU PIEL» / «FÓRMULA LIBRE DE ALCOHOL & FRAGANCIAS CLÍNICAMENTE PROBADA PARA TODO TIPO DE PIEL».
  - «+10 ACTIVOS MEXICANOS» (cempasúchil, tuna, carambola, mamey, tepezcohuite, miel melipona).
  - «Clínicamente probado / Hipoalergénico / Libre de fragancias» (sellos en cada ficha).
  - «Paga hasta en 12 quincenas, no necesitas tarjeta de crédito» (Kueski Pay).
  - «Maquillaje Orgánico Cruelty Free» (título SEO de la home).
- **Rango de precios:** NO VERIFICADO como rango. Precios observados directamente en ficha o landing: **$290** (Mini Tonic Mist, 20 ml), **$830** (Mask & Scrub), **$850** (Tonic Mist, 100 ml), **$1,080** (Opuntia Facial Serum, 33 ml; Edición Limitada), **$1,390** (Sleeping Mask Edición Limitada, 50 g, agotado — instantánea de búsqueda). Los listados de colección no mostraron precios en la extracción, así que **no se afirma un rango de catálogo**.
- **Edición Limitada — OBSERVADO (instantánea de búsqueda de `/pages/revista`, rastreada ~12 nov 2026):** línea con ilustraciones botánicas inspiradas en sus ingredientes, «disponibilidad reducida»; productos citados: Opuntia Facial Serum $1,080 MXN, Tonic Mist $850 MXN, Kalahari Facial Serum y Marula Facial Serum (precios de estos dos últimos NO VERIFICADOS en este informe). La misma página afirma presencia en **Sephora, Ulta Beauty, Liverpool, Arboleda y Amazon** («Ya conquistamos los anaqueles. Ahora, tu tocador.»). Esa presencia en retail es una afirmación de la propia página editorial, no verificada por este frente (corresponde a otros frentes).

## 9. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** las 7 lecturas de página que tuvieron éxito se completaron y el servicio de lectura marcó cada página como «crawled less than a minute ago» o «1 minute ago» en el momento de la consulta. Eso solo constata que el crawler pudo cargar el texto con rapidez; **no es una medición de velocidad**.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, número de peticiones, ni puntuación Lighthouse/PageSpeed. No se inventa ninguna cifra.
- **INFERIDO (confianza media):** hay indicios de optimización básica de imágenes — URLs de Shopify CDN con parámetros de ancho (`width=533/1946`) y un asset en `width=1946` para la galería de Opuntia. Sin medición, no se puede afirmar el impacto real. Las landings usan **GIFs animados** (4 en Tonic Mist), que suelen pesar más que vídeo o webp: **HIPÓTESIS** de posible lastre de rendimiento en esas landings, sin medición que la respalde.
- **OBSERVADO (fricción de lectura):** la extracción de texto falla sistemáticamente en las rejillas de producto (colecciones y búsqueda) y en el cuerpo principal de la home: solo devuelve el marquee, el widget de reseñas y filas sueltas de variantes. **INFERIDO (confianza media):** el contenido principal (hero, rejillas, header/footer) se renderiza por JS o queda fuera del DOM que el crawler extrae. Esto limita este informe; no es un dato de rendimiento del sitio para un visitante real.

## 10. Tabla final — observado / inferido / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026 salvo indicación)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Marquee de promos en todas las páginas: «3X2 EN TODA LA TIENDA» / «Envío gratis >$2,000» / «Kit de 3 Mini Jabones Faciales de regalo >$1,800» (repetido ×10) | Home, colecciones, búsqueda, carrito |
| O2 | Home: título SEO «Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos»; sección Customer Reviews 4.7/5 de 5,209 reseñas, con fotos y reseñas de 1★ visibles | https://www.ahal.mx/ |
| O3 | Landing Tonic Mist completa, sin error Liquid; estructura en orden (§7.2); 4 GIFs; Mini $290 / Tonic Mist $850 / Mask & Scrub $830 | https://www.ahal.mx/pages/tonicmist-landing |
| O4 | Mini Tonic Mist: $290 MXN, 20 ml, variante única, 4.8/5 de 11 reseñas, Kueski Pay 12 quincenas | https://www.ahal.mx/products/mini-tonic-mist-agua-tonica-con-tuna-y-cempasuchil |
| O5 | Opuntia Facial Serum: $1,080 MXN, 33 ml, galería de 4 imágenes, 4.8/5 de 102 reseñas, respuestas de la tienda | https://www.ahal.mx/collections/favoritos-de-ahal/products/opuntia-facial-serum-suero-facial-opuntia |
| O6 | En ambas fichas: «Ahorras 0% Agotado» convive con «En stock y listo para enviarse» y fecha de llegada vacía («Fecha estimada de llegada: .») | Fichas §4.1 y §4.2 |
| O7 | Colecciones `all` y `favoritos-de-ahal` existen; su rejilla de productos no aparece en la extracción (solo 1 fila de variante: $640 y $690) | https://www.ahal.mx/collections/all ; https://www.ahal.mx/collections/favoritos-de-ahal |
| O8 | Búsqueda «tonic mist»: 7 resultados; solo se ven 2 artículos de blog + 1 variante ($290); la búsqueda cubre productos y blog | https://www.ahal.mx/search?q=tonic+mist |
| O9 | Carrito vacío muestra solo el título «Tu carrito» + marquee de promos | https://www.ahal.mx/cart |
| O10 | Kueski Pay visible en fichas: «Paga hasta en 12 quincenas, no necesitas tarjeta de crédito» | Fichas §4.1 y §4.2 |
| O11 | Sellos en ficha: Clínicamente probado / Hipoalergénico / Libre de fragancias; secciones Descripción / Modo de uso / Ingredientes / CONTENIDO / SELLOS | Fichas §4.1 y §4.2 |
| O12 | Reseñas Loox: widget `#looxReviewsFrame`, imágenes en `images.loox.io`, reseñas con foto/vídeo y respuestas de la tienda | Home y fichas |
| O13 | **Error Liquid en Kit Raíces**: «Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product» bajo «COMPRA RÁPIDA»; kit incluye Mask & Scrub + Mini Sleeping Mask + Mini Agua Tónica + Mini Serum Opuntia | https://www.ahal.mx/pages/kitraices-landing (instantánea del índice de búsqueda, rastreada ~12 nov 2026) |
| O14 | **Error Liquid en Sleeping Mask**: «Liquid error (sections/pf-2ca009e8 line 133): product form must be given a product»; titular bakuchiol/retinol vegetal | https://www.ahal.mx/pages/sleepingmask-landing (instantánea del índice de búsqueda, rastreada ~12 nov 2026) |
| O15 | Ninguna de las 7 páginas leídas directamente menciona «Buen Fin» el 13 nov 2026 (día 1 del Buen Fin) | Todas las lecturas directas |
| O16 | Español de México + precios en MXN en todo lo leído | Todas las páginas |
| O17 | Sleeping Mask Edición Limitada: $1,390.00, «Agotado», Availability OutOfStock | Instantánea de búsqueda, ~12 nov 2026 |
| O18 | Página editorial `/pages/revista`: línea Edición Limitada (Opuntia $1,080, Tonic Mist $850) y presencia declarada en Sephora, Ulta Beauty, Liverpool, Arboleda y Amazon | Instantánea de búsqueda, ~12 nov 2026 |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Plataforma Shopify + PageFly | URLs `/collections/`, `/products/`, `/search`, `/cart` + CDN `cdn.shopify.com/s/files/1/0679/3053/` + errores Liquid + secciones `pf-*` — confianza **alta** |
| I2 | App de reseñas Loox | `images.loox.io`, `#looxReviewsFrame`, página en `loox.io` — confianza **alta** |
| I3 | Las colecciones no están vacías; su extracción falló | Favoritos es ruta real de navegación (ficha Opuntia); catálogo amplio visible en reseñas — confianza **media** |
| I4 | El «Agotado» de Mini Tonic Mist y Opuntia es un defecto de plantilla, no agotamiento real | Convive con «En stock y listo para enviarse» + OG InStock (Mini Tonic Mist) — confianza **media** (disponibilidad real NO VERIFICADA) |
| I5 | La búsqueda cubre productos y blog | 2 de los resultados visibles son artículos de blog — confianza **media** |
| I6 | El contenido principal (hero, rejillas, header/footer) se renderiza por JS o queda fuera del DOM extraído | La extracción falla sistemáticamente en esos bloques en 7 páginas — confianza **media** |
| I7 | Optimización básica de imágenes (responsive por ancho) | Parámetros `width=` en CDN — confianza **media** (sin medición de impacto) |
| I8 | Checkout estándar de Shopify | Inferencia de plataforma (I1), no observación del flujo — confianza **media** |

### HIPÓTESIS (derivadas, marcadas)

| # | Hipótesis |
|---|---|
| H1 | El error Liquid de Kit Raíces y Sleeping Mask se debe a que el producto asignado a la sección PageFly fue eliminado/archivado/renombrado sin actualizar la landing (causa no verificada). |
| H2 | Los GIFs animados de las landings (4 en Tonic Mist) pueden lastrar el rendimiento de esas páginas frente a vídeo/webp (sin medición). |
| H3 | El 3X2 de toda la tienda podría ser la promo del Buen Fin 2026 sin branding de Buen Fin, o una promo permanente independiente (no hay evidencia de fecha de fin ni de mención al Buen Fin en lo leído). |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Orden de secciones de la home (hero, categorías, bloques de producto) | La extracción de la home solo devolvió el widget de reseñas |
| N2 | Existencia de campaña/landing/colección de Buen Fin en Ahal | Ninguna página leída la menciona; no se buscó una URL específica de Buen Fin |
| N3 | Precio del Kit Raíces | No aparece en la instantánea de la landing; la lectura directa devolvió 429 y no se reintentó |
| N4 | Disponibilidad real de Mini Tonic Mist y Opuntia (¿agotados o en stock?) | Señales contradictorias en la propia ficha (§4.3); requeriría intentar añadir al carrito |
| N5 | Header, menú, buscador visible, cuenta, footer, newsletter | No aparecen en ninguna extracción (ausencia en extracción ≠ ausencia en el sitio) |
| N6 | Total de productos del catálogo y por colección; filtros y ordenación | Rejillas sin listar en la extracción; controles no visibles |
| N7 | Pasos del checkout, métodos de pago (salvo Kueski Pay), MSI por banco, envíos en checkout | Carrito vacío no los muestra; checkout no recorrible con lectura de texto |
| N8 | Discrepancia 5,209 reseñas (home) vs 3,555 (página Loox) | Dos fuentes distintas sin explicación observable |
| N9 | Costos de envío <$2,000, tiempos de entrega, cambios/devoluciones | No hay secciones de envío/devolución en las fichas leídas; sus páginas no se leyeron |
| N10 | Vista y UX móvil real (menú, orden, táctil) | Sin navegador en vivo ni render |
| N11 | Rango de precios del catálogo; precios de Kalahari y Marula Facial Serum (Edición Limitada) | Listados sin precios en la extracción |
| N12 | Variantes de tono en maquillaje (bases, correctores) | Las dos fichas leídas son de skincare sin variantes |
| N13 | Contenido de «OPINIONES DESTACADAS» y cierre «¿QUIERES CONOCER MÁS?» en la landing Tonic Mist | Encabezados sin contenido en la extracción |
| N14 | Rendimiento medido (LCP, tiempos, Lighthouse) | Método de lectura de texto no mide rendimiento |
| N15 | Contenido actual en vivo de la landing Kit Raíces (¿sigue el error Liquid hoy?) | Lectura directa 429 el 13 nov; solo se dispone de la instantánea del índice (~12 nov) |

## 11. Fuentes consultadas

Lecturas directas de texto de páginas públicas de https://www.ahal.mx/ el 13 nov 2026 (~19:20–19:23 UTC), 7 lecturas exitosas:

1. https://www.ahal.mx/ (home)
2. https://www.ahal.mx/pages/tonicmist-landing
3. https://www.ahal.mx/collections/all
4. https://www.ahal.mx/search?q=tonic+mist
5. https://www.ahal.mx/products/mini-tonic-mist-agua-tonica-con-tuna-y-cempasuchil (vía enlace «View Details» de la landing Tonic Mist)
6. https://www.ahal.mx/cart
7. https://www.ahal.mx/collections/favoritos-de-ahal/products/opuntia-facial-serum-suero-facial-opuntia

Búsquedas web de apoyo (instantáneas del índice, rastreadas ~12 nov 2026, usadas solo donde se indica):

- «ahal.mx Tonic Mist producto site ahal.mx» — confirma landing Tonic Mist y página `/pages/revista`.
- «"ahal.mx" collections tienda productos» — instantáneas de `/pages/kitraices-landing` (con error Liquid, §7.1), `/pages/sleepingmask-landing` (con error Liquid, §7.3), `/pages/revista` y página de reseñas Loox.
- «"ahal.mx/products" tonic mist OR "mask & scrub" OR opuntia» — URL canónica de Opuntia, ficha de Sleeping Mask Edición Limitada ($1,390, agotado) y confirmación de precios de la línea Edición Limitada.

## 12. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, el hero, las rejillas de producto, los controles JS (filtros, menús, pop-ups) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio. En Ahal esta limitación fue más severa que en F4T3: la home entera quedó reducida al widget de reseñas y las dos colecciones no listaron ningún producto.
- **Límite de peticiones:** la lectura directa de https://www.ahal.mx/pages/kitraices-landing devolvió **429 (límite de peticiones)** y **no se reintentó**, conforme a la regla del encargo. Tras una pausa de 120 s se retomó con lecturas individuales (todas exitosas). El contenido de Kit Raíces se documenta desde la instantánea del índice de búsqueda (~12 nov 2026), no desde lectura directa del 13 nov: su estado en vivo hoy queda en NO VERIFICADO (N15). No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Fecha:** todo lo observado directamente corresponde al **13 nov 2026, primer día del Buen Fin 2026**. La promo visible es un 3X2 sin branding de Buen Fin; los precios, promos y disponibilidad pueden cambiar al terminar la campaña (17 nov 2026).
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 2 y no se cubren aquí (salvo lo necesario para describir lo visible).
- **Datos del encargo verificados:** tienda en ahal.mx ✓; marca AHAL Bio Cosmética ✓; landings `/pages/kitraices-landing` y `/pages/tonicmist-landing` ✓ (existen); Tonic Mist $850 ✓; Mini Tonic Mist $290 ✓; Mask & Scrub $830 ✓; Edición Limitada $1,080 (Opuntia Facial Serum) ✓. Fundadora Iliana Loza y presencia en Sephora/Ulta/Liverpool/Amazon: **no verificadas por este frente** — solo aparecen como afirmación de la página editorial `/pages/revista` (O18) y de prensa citada en búsqueda; su verificación corresponde a otros frentes.
