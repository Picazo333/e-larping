# F1.1 — Front end · F4T3 (FATE™)

- **Sitio:** https://www.f4t3.co/ (marca visible: FATE™)
- **Fecha de la investigación:** 13 nov 2026
- **Frente:** F1.1 (front end) — Fase 1, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras). Las páginas se rastrearon el 13 nov 2026 ~19:07–19:10 UTC (13:07–13:10 CST).
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza) u **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.

---

## 1. Plataforma (inferencia de front)

- **INFERIDO (confianza alta): Shopify.** Evidencia: estructura de URLs `/collections/<slug>`, `/products/<slug>?variant=<id>`, `/search?q=…`, `/cart`; assets servidos desde `cdn/shop/files/` y `cdn/shop/t/68/assets/` (tema nº 68). Todo lo observado es coherente con una tienda Shopify estándar con tema personalizado.
- **NO VERIFICADO:** proveedor de hosting/CDN perimetral, versión del tema, apps instaladas, ni si hay cabecera de Cloudflare (eso corresponde al frente back end).

## 2. Home — secciones en orden

URL: https://www.f4t3.co/ — OBSERVADO 13 nov 2026.

Orden observado en la extracción de texto (de arriba a abajo):

1. **Banner superior de evento:** imagen con texto «MIPYMES · El Buen Fin, del 13 al 17 de noviembre». OBSERVADO.
2. **Hero promocional (texto, sin título de colección visible en la extracción):**
   - «PLAYERAS 6X1»
   - «HASTA 80% OFF EN TODO LO DEMÁS»
   - «HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE»
   - Dos CTAs: «6X1 EN PLAYERAS» → https://www.f4t3.co/collections/t-shirts ; «HASTA 80% OFF» → https://www.f4t3.co/collections/buen-fin . OBSERVADO (destinos confirmados al seguir los enlaces).
3. **Prueba social:** «MÁS DE **168,783** PERSONAS USAN FATE™». OBSERVADO como texto en página. Es una afirmación de marketing de la propia tienda; **no hay fuente externa que la respalde en este informe** (no es un conteo verificado).
4. **«Mas buscados / Best sellers.»** — «Nuestras piezas mas buscadas.» Producto destacado: *Not All Angels Tee Black & Black*, $1,299.00, etiqueta «6X1» («6 PLAYERAS POR $1,299»), enlace «VER MAS...». OBSERVADO.
5. **«NEW ARRIVALS · FW26» — «WRITTEN IN THE STARS»** — CTA «VER LO NUEVO». OBSERVADO.
6. **«New Arrivals / Nuevos productos.»** — «Nuestros lanzamientos mas recientes o re-stocks.» Producto destacado: *Destino Studios Striped Longsleeve Ivory w/ Black*, «NEW ARRIVAL 60% OFF», $599.00 (antes $1,499.00), «$419 AL LLEVAR, 6 O MÁS». OBSERVADO.
7. **«Explora nuestras» — rejilla de 8 categorías** (cada una con imagen y CTA «Discover»): Sudaderas / Hoodies, Playeras / T-Shirts, Sin Mangas / Sleveless [sic, así en el sitio], Pantalones / Jeans, Crop / Baby Tee's, Playeras Polo, Jackets, Gorras. OBSERVADO. Los destinos confirmados al seguirlos: hoodies → https://www.f4t3.co/collections/hoodies ; playeras → https://www.f4t3.co/collections/t-shirts ; pantalones → https://www.f4t3.co/collections/jeans ; gorras → https://www.f4t3.co/collections/gorras-caps .
8. **«BEHIND THE BRAND»** — vídeo incrustado de YouTube «EFFORTLESS — BEHIND THE BRAND» (miniatura `i.ytimg.com/vi/67FNT5hpZvo/maxresdefault.jpg`). OBSERVADO (solo la presencia del embed; el contenido del vídeo no se visionó).
9. **«RESEÑAS DE CLIENTES»** — sección con el handle `@f4t3.co` y enlace a Instagram. OBSERVADO. El contenido concreto de las reseñas (número, texto, puntuación) **no apareció en la extracción de texto**: NO VERIFICADO si hay reseñas reales visibles o es solo el encabezado.
10. **Pie de página / menú de navegación:** NO VERIFICADO. La extracción de texto de la home no mostró el header (logo, menú, buscador, cuenta, carrito) ni el footer (enlaces legales, contacto, newsletter). **Eso no significa que no existan**: la extracción de texto omite routinely esos bloques. Queda pendiente de verificación visual.

### Idioma y moneda

- **OBSERVADO:** todo el copy comercial está en español de México; los nombres de producto y de colección, en inglés. Precios en MXN en todas las páginas leídas. No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Colecciones

Todas OBSERVADAS el 13 nov 2026. Patrón común: banner superior del Buen Fin 2026 en cada colección y enlace de accesibilidad «Omitir para ir a lista de resultados».

| Colección | URL | Titular / promo en página | Productos visibles (1ª página, extracción) | Etiquetas vistas |
|---|---|---|---|---|
| Buen Fin | https://www.f4t3.co/collections/buen-fin | «HASTA 80% OFF» / «ENTRE MÁS LLEVAS, MENOS PAGAS + HASTA 30% EXTRA ADICIONAL» | 24 | 6X1, 60% OFF |
| Playeras de manga corta | https://www.f4t3.co/collections/t-shirts | «PLAYERAS ==6X1==» / «6 PLAYERAS POR $1,299 · COMBINA DISEÑOS Y TALLAS» | 24 | 6X1 |
| Sudaderas | https://www.f4t3.co/collections/hoodies | Mismo titular Buen Fin que arriba | 24 | NEW ARRIVAL 60% OFF, 60% OFF |
| Jeans | https://www.f4t3.co/collections/jeans | Mismo titular Buen Fin que arriba | 17 | NEW ARRIVAL 50% OFF, 50% OFF (algunos productos sin etiqueta visible en la extracción) |
| Gorras | https://www.f4t3.co/collections/gorras-caps | Mismo titular Buen Fin que arriba | **0 en la extracción** (anomalía, ver abajo) | — |

- **Anomalía Gorras — OBSERVADO:** la extracción de https://www.f4t3.co/collections/gorras-caps devolvió el título y el banner pero **ningún producto listado**, solo un volcado de IDs de variante sin nombre. **INFERIDO (confianza media):** es un fallo de la extracción de texto, no una colección vacía — la home enlaza a Gorras como categoría activa y el resto de colecciones sí listan producto. El conteo real de gorras queda **NO VERIFICADO**.
- **Conteos:** los números de arriba son productos listados en la primera página de la extracción, **no** el total del catálogo (no se recorrió paginación; puede haber más páginas).
- **Precios en listados:** la extracción de las colecciones **no incluyó precios** por producto (solo nombre y etiqueta). No se reportan precios de colección; los únicos precios citados en este informe son los de las dos fichas de producto leídas (§4).
- **Filtros y ordenación en colección:** NO VERIFICADO. No apareció ningún control de filtro/orden en la extracción de texto de las colecciones. En la página de búsqueda sí hay ordenación (ver §6); en colección no se pudo constatar.
- **Pista a re-verificar — Buen Fin como «promo permanente»:** **NO CONFIRMADA como permanente.** OBSERVADO: la colección `/collections/buen-fin` existe y está activa el 13 nov 2026, pero toda su comunicación es **acotada en el tiempo** («del 13 al 17 de noviembre», «TERMINA EL 17 DE NOVIEMBRE»). Nada de lo visto indica que sea una colección permanente; parece la campaña del Buen Fin 2026. Si existió en años anteriores o se reutiliza cada año, es NO VERIFICADO.
- **Pista a re-verificar — summer-sale:** **NO VERIFICADO.** Ninguna página visitada (home, 5 colecciones, 2 productos, carrito, búsqueda) enlaza ni menciona una colección «summer-sale» ni «Summer Sale». El intento directo de abrir https://www.f4t3.co/collections/summer-sale devolvió error 429 del servicio de lectura y no se reintentó (ver §8 Límites). No se puede afirmar que exista ni que no exista.

## 4. Página de producto

Dos fichas leídas completas. Estructura común OBSERVADA en ambas:

- Galería de **6 imágenes** (contador «1 /6»): mockups de frente/espalda + fotos de modelo (frente, perfil, detalle) y, en el segundo producto, fotos editoriales con fecha «Lookbook 2026-09-21».
- Título, precio en MXN, prueba social («Más de 168,783 personas usan FATE™»), bloque de promoción por volumen, sello «PAGO 100% SEGURO · HECHO EN MÉXICO».
- Acordeones/secciones fijas en el mismo orden: **Detalles + Fit del producto / CAMBIOS + DEVOLUCIONES / COSTOS + TIEMPOS DE ENVIO / ¿COMO CUIDAR MI PRODUCTO?** (con subapartados Lavado, Secado, Planchado, Recomendación).
- Aviso: «DEBIDO A ALTA DEMANDA LOS ENVIOS PUEDEN DEMORAR MAS DE LO ESTIMADO.»
- Carrusel de 4 looks («Look FATE con playera blanca / playera negra / hoodie blanco y jeans / hoodie azul marino»).
- Sección «RESEÑAS DE CLIENTES» al final (sin contenido de reseñas en la extracción: NO VERIFICADO número ni texto de reseñas).
- Enlaces «Consultar cambios y devoluciones» y «Consultar política de envíos» dentro de la ficha (sus páginas de destino no se pudieron leer por el límite 429: NO VERIFICADO su contenido; el texto resumido de ambas políticas sí está en la propia ficha, citado abajo).

### 4.1 Not All Angels Tee Black & Black

- URL: https://www.f4t3.co/products/not-all-angels-luxury-tee-black?variant=48777174712563 — OBSERVADO 13 nov 2026.
- **Precio: $1,299.00 MXN** (sin precio tachado). Promo: **PLAYERAS 6X1 — «COMBINA DISEÑOS Y TALLAS»**: 1 playera $1,299; 6 playeras $1,299 («LLEVAS 6 Y PAGAS SOLO 1»).
- Variantes OBSERVADAS (color Black; todas $1,299.00, disponibles): XS, S, M, L, XL, XXL.
- Detalles: «Hecha en México, de principio a fin. Algodón 100% mexicano — 250 gsm. Tela compacta con estructura firme y tacto suave. Cuello en rib de 3 cm que conserva su forma. Corte oversize: amplio en hombros y pecho, largo ligeramente corto. Estampado digital de alta definición y gran durabilidad. True to size. Para un fit más boxy, baja una talla.»

### 4.2 Destino Studios Striped Longsleeve Ivory w/ Black

- URL: https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black?variant=67983007187187 — OBSERVADO 13 nov 2026.
- **Precio: $599.00 MXN, antes $1,499.00 MXN** (etiqueta «NEW ARRIVAL 60% OFF»). Promo escalonada «ENTRE MÁS LLEVAS, MENOS PAGAS» (cuentan todas menos playeras 6X1): 2 piezas $539 (−10%), 4 piezas $479 (−20%), 6 piezas $419 (−30%). «ENVÍO GRATIS LLEVANDO 5 PIEZAS O MÁS».
- Variantes OBSERVADAS (Ivory w Black; todas $599.00, disponibles): S, M, L, XL, XXL.
- Detalles: «50% algodón, 50% poliéster — 220 gsm. Tejido Mazzat. Manga larga con rayas. Cuello redondo. Print al frente y en la espalda.»

### 4.3 Envíos y devoluciones (texto en la ficha — OBSERVADO, idéntico en ambas)

- Confirmación del pago: 48 horas; entrega estimada **4 a 10 días hábiles** tras la confirmación.
- **Envío Estándar: $179 MXN**, gratis cuando el subtotal después de descuentos supera $1,999 MXN. **Envío Premium: $299 MXN**, «opción independiente y nunca es gratis». Las opciones según dirección «se muestran antes de pagar» / «la cobertura y el costo se muestran en checkout».
- Cambios voluntarios por talla o preferencia: **30 días naturales desde la recepción**, prendas sin uso, con etiquetas y empaque. **No aplica a productos en promoción.** Si el error es del cliente, el cliente cubre las guías. Devoluciones voluntarias autorizadas se resuelven con **crédito en tienda**. Defectos, productos incorrectos e incumplimientos se revisan por separado.

## 5. Carrito y checkout

- **Carrito — OBSERVADO:** https://www.f4t3.co/cart , título «Tu carrito» (13 nov 2026). Con el carrito vacío la página solo muestra la sección **«You may also like»** con 4 recomendaciones (*8 Ball Tee Black* 6X1; *All My Fears Cheetah Hoodie Ivory* 60% OFF; *All My Fears Hoodie Burgundy* NEW ARRIVAL 60% OFF; *All My Fears Hoodie Green Forest* NEW ARRIVAL 60% OFF).
- **NO VERIFICADO:** con el carrito vacío no apareció botón de checkout, subtotal, resumen, ni métodos de pago. No se pudo recorrer el checkout (requeriría añadir productos y avanzar, fuera del alcance de lectura de texto y sin navegador en vivo). Por tanto: **pasos del checkout, campos, métodos de pago aceptados, meses sin intereses por banco, y opciones de envío en checkout quedan NO VERIFICADOS**.
- **Lo único observado sobre pago:** el sello «PAGO 100% SEGURO» en las fichas de producto y «HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE» en el hero de la home. **No se observó** ningún logotipo de tarjeta, banco, pasarela (p. ej. Mercado Pago, Stripe, PayPal, Conekta) ni medio alternativo (OXXO, SPEI, etc.) en las páginas leídas. **No afirmar ningún método de pago concreto.**
- **INFERIDO (confianza media):** al ser Shopify, el checkout es presumiblemente el checkout estándar de Shopify; pero eso es una inferencia de plataforma, no una observación del flujo real de F4T3.

## 6. Búsqueda y UX de navegación

- **Buscador — OBSERVADO:** https://www.f4t3.co/search?q=hoodie devuelve «Búsqueda: **367 resultados** encontrados para "hoodie"», con 24 resultados en la primera página (todos hoodies, con etiquetas 60% OFF / NEW ARRIVAL 60% OFF / NEW ARRIVAL 50% OFF) y opciones de ordenación: **Relevancia, Precio (menor a mayor), Precio (mayor a menor)**.
- **INFERIDO (confianza media):** el conteo de 367 probablemente cuenta **variantes** (cada producto tiene 6 tallas × colores), no 367 productos distintos de hoodie — el catálogo visible en colecciones es mucho menor. No se pudo confirmar el criterio de conteo: el número se reporta tal como lo muestra la página.
- **Filtros:** NO VERIFICADO (ni en colección ni en búsqueda apareció control de filtro por talla, color, precio o disponibilidad en la extracción).
- **Navegación:** OBSERVADO que la home organiza el catálogo por **categoría de prenda** (8 categorías, §2) y por **momento comercial** (Best sellers, New Arrivals FW26, Buen Fin). Las colecciones reutilizan el mismo banner de Buen Fin, lo que hace que la promo domine visualmente todas las páginas de categoría durante la campaña.
- **Móvil — INFERIDO (confianza media-alta) / NO VERIFICADO en render:** las imágenes de categoría de la home existen en dos anchos (p. ej. `width=2800` y `width=1200`) y hay un asset nombrado `MOBILE_-_3.png`, lo que indica assets dedicados para móvil. **No se pudo renderizar ni inspeccionar la vista móvil** (sin navegador en vivo): menú hamburguesa, legibilidad, orden de secciones en móvil y comportamiento táctil quedan NO VERIFICADOS.
- **Accesibilidad (detalle OBSERVADO):** las páginas de colección incluyen el enlace de salto «Omitir para ir a lista de resultados».

## 7. Contenido y mensajes comerciales (qué vende)

- **OBSERVADO — qué vende:** moda/streetwear de marca propia (FATE™): playeras (manga corta y manga larga), sudaderas/hoodies (incl. con cierre), jeans y pantalones, sin mangas, crop / baby tees, polos, jackets y gorras. Los diseños visibles giran en torno a gráficos con nombres en inglés (*Not All Angels, All My Fears, Cathedral, Serafin, Fate Studios, Local Super Star, 8 Ball, Retired Cowboy, Dolce Vita*).
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - «Hecho en México, de principio a fin» / «HECHO EN MÉXICO» / «Algodón 100% mexicano».
  - «PLAYERAS 6X1» / «LLEVAS 6 Y PAGAS SOLO 1» / «ENTRE MÁS LLEVAS, MENOS PAGAS».
  - «HASTA 80% OFF EN TODO LO DEMÁS» / «HASTA 12 MESES SIN INTERESES».
  - «Más de 168,783 personas usan FATE™» (afirmación de la tienda, sin verificar).
  - «NEW ARRIVALS · FW26» / «WRITTEN IN THE STARS».
  - «BEHIND THE BRAND» (vídeo) y «RESEÑAS DE CLIENTES».
- **Rango de precios:** NO VERIFICADO como rango. Solo dos precios se observaron directamente en ficha: **$599 MXN** (longsleeve en oferta, antes $1,499) y **$1,299 MXN** (playera, precio base del 6X1). Los listados de colección no mostraron precios en la extracción, así que **no se afirma un rango de catálogo**. Los descuentos por etiqueta observados: 50% OFF (jeans, algunos hoodies básicos), 60% OFF (hoodies, longsleeve), 80% OFF (titular general Buen Fin, sin producto concreto verificado a ese %).
- **Tallas:** OBSERVADO XS–XXL en playera y S–XXL en longsleeve; corte oversize declarado. Guía de tallas como página propia: NO VERIFICADO.

## 8. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** las 9 lecturas de página que tuvieron éxito se completaron y el servicio de lectura marcó cada página como «crawled less than a minute ago» en el momento de la consulta. Eso solo constata que el crawler pudo cargar el texto con rapidez; **no es una medición de velocidad**.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, número de peticiones, ni puntuación Lighthouse/PageSpeed. No se inventa ninguna cifra.
- **INFERIDO (confianza media):** hay indicios de optimización básica de imágenes — URLs de Shopify CDN con parámetros de ancho (`width=1200/1500/2800/3840`) y variantes separadas de escritorio/móvil, más posters `.webp` para los looks. Sin medición, no se puede afirmar el impacto real.

## 9. Tabla final — observado / inferido / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Home con hero Buen Fin: «PLAYERAS 6X1», «HASTA 80% OFF», «HASTA 12 MSI, termina 17 nov» | https://www.f4t3.co/ |
| O2 | «Más de 168,783 personas usan FATE™» (texto en página; afirmación de la tienda) | https://www.f4t3.co/ y fichas de producto |
| O3 | Secciones home en orden: banner Buen Fin → hero promo → Best sellers → New Arrivals FW26 «WRITTEN IN THE STARS» → 8 categorías → Behind the Brand (YouTube) → Reseñas / @f4t3.co / Instagram | https://www.f4t3.co/ |
| O4 | 8 categorías: Sudaderas, Playeras, Sin Mangas, Pantalones/Jeans, Crop/Baby Tee's, Polos, Jackets, Gorras | https://www.f4t3.co/ |
| O5 | Colección Buen Fin existe y está activa, «HASTA 80% OFF», 24 productos en 1ª pág. | https://www.f4t3.co/collections/buen-fin |
| O6 | Colección Playeras: «6 PLAYERAS POR $1,299», 24 productos en 1ª pág. | https://www.f4t3.co/collections/t-shirts |
| O7 | Colección Sudaderas: 24 productos en 1ª pág., etiquetas 60% OFF / NEW ARRIVAL | https://www.f4t3.co/collections/hoodies |
| O8 | Colección Jeans: 17 productos en 1ª pág., etiquetas 50% OFF / NEW ARRIVAL | https://www.f4t3.co/collections/jeans |
| O9 | Not All Angels Tee: $1,299 MXN, 6X1, tallas XS–XXL, algodón 100% mexicano 250 gsm, oversize | https://www.f4t3.co/products/not-all-angels-luxury-tee-black?variant=48777174712563 |
| O10 | Destino Studios Longsleeve: $599 (antes $1,499), escalonado 2×$539 / 4×$479 / 6×$419, tallas S–XXL | https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black?variant=67983007187187 |
| O11 | Envío Estándar $179 (gratis >$1,999), Premium $299 (nunca gratis); confirmación 48 h + entrega 4–10 días hábiles | Fichas de producto (§4.3) |
| O12 | Cambios 30 días naturales; no aplica a promo; devolución voluntaria = crédito en tienda | Fichas de producto (§4.3) |
| O13 | Carrito vacío muestra «Tu carrito» + «You may also like» (4 productos) | https://www.f4t3.co/cart |
| O14 | Búsqueda «hoodie»: 367 resultados, 24 en 1ª pág., orden Relevancia / Precio ↑ / Precio ↓ | https://www.f4t3.co/search?q=hoodie |
| O15 | Fichas con 6 imágenes, acordeones Detalles / Cambios / Envíos / Cuidado, aviso de demora por alta demanda | Fichas de producto (§4) |
| O16 | Extracción de Gorras sin listado de productos (solo IDs de variante) | https://www.f4t3.co/collections/gorras-caps |
| O17 | Español de México + precios en MXN en todo lo leído | Todas las páginas |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Plataforma Shopify (tema 68) | URLs `/collections/`, `/products/`, `/search`, `/cart` + CDN `cdn/shop/` — confianza **alta** |
| I2 | Hay assets dedicados para móvil | Imágenes en dos anchos + asset `MOBILE_-_3.png` — confianza **media-alta** (sin render móvil) |
| I3 | Los «367 resultados» de búsqueda cuentan variantes, no productos | Catálogo visible mucho menor; cada producto tiene ~6 variantes de talla — confianza **media** |
| I4 | La colección Gorras no está vacía; su extracción falló | Home la enlaza como categoría activa; resto de colecciones listan producto — confianza **media** |
| I5 | Optimización básica de imágenes (responsive + webp) | Parámetros `width=` en CDN y posters `.webp` — confianza **media** (sin medición de impacto) |
| I6 | Checkout estándar de Shopify | Inferencia de plataforma (I1), no observación del flujo — confianza **media** |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Colección «summer-sale» (¿existe? ¿permanente?) | No enlazada en ninguna página visitada; el intento directo de abrir `/collections/summer-sale` devolvió 429 y no se reintentó |
| N2 | Buen Fin como colección «permanente» | Lo visto es campaña acotada 13–17 nov 2026; permanencia o reutilización anual sin evidencia |
| N3 | Pasos del checkout y métodos de pago aceptados | Carrito vacío no los muestra; checkout no recorrible con lectura de texto |
| N4 | Bancos / MSI por banco, meses exactos por medio de pago | Solo el titular «HASTA 12 MSI» en el hero |
| N5 | Contenido de las páginas de cambios/devoluciones y envíos | Sus enlaces existen en la ficha, pero las páginas no se pudieron leer (429) |
| N6 | Header, menú, buscador visible, cuenta, footer, newsletter | No aparecen en la extracción de texto (ausencia en extracción ≠ ausencia en el sitio) |
| N7 | Filtros en colección y en búsqueda | No aparecieron controles en la extracción |
| N8 | Reseñas reales (número, texto, puntuación) | La sección existe pero su contenido no apareció en la extracción |
| N9 | Vista y UX móvil real (menú, orden, táctil) | Sin navegador en vivo ni render |
| N10 | Rango de precios del catálogo y total de productos | Listados sin precios en la extracción; paginación no recorrida |
| N11 | Rendimiento medido (LCP, tiempos, Lighthouse) | Método de lectura de texto no mide rendimiento |
| N12 | Total de productos en Gorras | Extracción sin listado (O16) |
| N13 | Guía de tallas como página propia | No observada |
| N14 | Veracidad del «168,783 personas» | Afirmación de la tienda sin fuente externa |

## 10. Fuentes consultadas

Lectura de texto de páginas públicas de https://www.f4t3.co/ el 13 nov 2026 (~19:07–19:10 UTC), 9 lecturas exitosas:

1. https://www.f4t3.co/ (home)
2. https://www.f4t3.co/collections/buen-fin
3. https://www.f4t3.co/collections/t-shirts
4. https://www.f4t3.co/collections/hoodies
5. https://www.f4t3.co/collections/jeans
6. https://www.f4t3.co/collections/gorras-caps
7. https://www.f4t3.co/products/not-all-angels-luxury-tee-black?variant=48777174712563
8. https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black?variant=67983007187187
9. https://www.f4t3.co/cart
10. https://www.f4t3.co/search?q=hoodie

Búsquedas web de apoyo (sin resultados útiles para F4T3; no aportan hechos a este informe): «F4T3 f4t3.co tienda streetwear México», «site:f4t3.co colecciones», «"f4t3.co" "summer-sale" OR "buen-fin" colección», «"f4t3.co" collections». La URL con parámetros de tracking del encargo (`?srsltid=…`) es el mismo destino que la home (O1); el parámetro es un identificador de clic de Google, no contenido del sitio.

## 11. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, los controles JS (filtros, menús, pop-ups) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio.
- **Límite de peticiones:** a mitad del trabajo el servicio de lectura devolvió **429 (límite de peticiones)** en tres lecturas simultáneas (colección `summer-sale`, política de envíos y política de cambios). Tras una pausa de 90 s se retomó con lecturas individuales (carrito y búsqueda, exitosas). Las tres lecturas fallidas **no se reintentaron**; sus contenidos quedan en NO VERIFICADO (N1, N5). No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Fecha:** todo lo observado corresponde al **13 nov 2026, primer día del Buen Fin 2026**; la home y las colecciones están dominadas por esa campaña. Los precios, promos y disponibilidad pueden cambiar al terminar la campaña (17 nov 2026).
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 1 y no se cubren aquí (salvo lo necesario para describir lo visible).
