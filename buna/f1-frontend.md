# F1.1 — Front end · BUNA

- **Sitio:** https://buna.mx/ (marca visible: BUNA — «Café Rico que Conserva Ecosistemas»)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov: precios y promos pueden estar distorsionados por Buen Fin; se anota cuando aplica)
- **Frente:** F1.1 (front end) — Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras) y búsquedas web de apoyo con `browser.search`. Las páginas se rastrearon el 13 nov 2026 ~19:20–19:24 UTC (13:20–13:24 CST), salvo el carrito, cuya copia es del 25 oct 2026 (ver §5).
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza), **HIPÓTESIS** (derivada, marcada como tal) o **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.

---

## 1. Plataforma (inferencia de front)

- **INFERIDO (confianza alta): Shopify.** Evidencia: estructura de URLs `/collections/<slug>`, `/products/<slug>?variant=<id>`, `/search?q=…`, `/cart`; assets servidos desde `cdn/shop/files/` y `cdn/shop/t/15/assets/` (tema nº 15). Todo lo observado es coherente con una tienda Shopify estándar con tema personalizado.
- **INFERIDO (confianza media): app de metafields de HulkApps instalada.** Evidencia: las imágenes de fondo de las fichas y de los listados se sirven desde `metafields-manager-by-hulkapps.s3-accelerate.amazonaws.com/uploads/buna-mayoreo.myshopify.com/…`. El subdominio interno visible es `buna-mayoreo.myshopify.com` (mayoreo = venta al por mayor; ver §3).
- **NO VERIFICADO:** proveedor de hosting/CDN perimetral, versión del tema, resto de apps instaladas, ni si hay cabecera de Cloudflare (eso corresponde al frente back end).

## 2. Home — secciones en orden

URL: https://buna.mx/ — OBSERVADO 13 nov 2026 (extracción de solo 58 líneas; es una extracción parcial, no la página completa).

Orden observado en la extracción de texto (de arriba a abajo):

1. **Titular de portada:** «Productos ricos, del campo a tu mesa». OBSERVADO.
2. **Tres categorías con imagen + ilustración:** «café rico», «chocolate rico», «miel rica». OBSERVADO. Son las tres familias de producto de la tienda; no se observó en la extracción a qué URL enlaza cada una.
3. **Pregunta de misión:** «¿Qué si a través de un hábito tan cotidiano como tomar café pudiéramos promover la conservación de nuestros ecosistemas?» + enlace «Somos BUNA» («Conoce más sobre nuestra misión»). OBSERVADO.
4. **Vídeo incrustado** (archivo `.mp4` servido desde `files.widgetic.com`, app Widgetic). OBSERVADO solo la presencia del embed; el contenido del vídeo no se visionó.
5. **Sección de suscripción:** «Recibe productos ricos de manera recurrente en la puerta de tu casa.» con 6 beneficios listados:
   - «Obtén un 15 % de descuento en todas tus compras.»
   - «Envío gratis en tu primer pedido.»
   - «Programa tus pedidos automáticos y recíbelos cada 2, 4 ó 6 semanas.»
   - «Pausa o cancela cuando quieras y tan amigos como siempre.»
   - «Súmate a nuestra misión y ayúdanos a regenerar ecosistemas mexicanos con cada pedido.»
   - «Forma parte de la comunidad BUNA y ven a La Tostadora (tu casa) a eventos como talleres, pláticas y mucho más.»
   - CTA: «Haz tu primer pedido». Pie: «Imagen ilustrativa». OBSERVADO.
6. **Lo que NO apareció en la extracción de la home:** ninguna rejilla de productos, ningún precio, ningún banner de Buen Fin, ningún testimonio ni reseña, y tampoco el header (logo, menú, buscador, cuenta, carrito) ni el footer (enlaces legales, contacto, newsletter). **Eso no significa que no existan**: la extracción de texto omite rutinariamente esos bloques y esta extracción en particular es muy corta (58 líneas). Queda pendiente de verificación visual.

### Buen Fin — ausencia observada

- **OBSERVADO:** ninguna de las páginas leídas (home, 2 colecciones, 2 fichas de producto, carrito, búsqueda) menciona «Buen Fin», ni muestra fechas 13–17 nov, ni «meses sin intereses». La única promoción visible es un genérico «20% de descuento» (ver §4 y §7).
- **HIPÓTESIS:** el «20% de descuento» podría ser la promo del Buen Fin 2026 o una promo permanente; no hay evidencia textual que lo vincule al Buen Fin. **NO VERIFICADO** cuál de las dos es. Contraste con F4T3, donde el Buen Fin dominaba home y colecciones el mismo día.

### Idioma y moneda

- **OBSERVADO:** todo el copy está en español de México; los precios en MXN en todas las páginas leídas («Impuestos incluidos» en las fichas). No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Colecciones

Tres colecciones confirmadas por lectura directa o por resultado de búsqueda:

| Colección | URL | Conteo declarado en página | Tarjetas visibles en la extracción |
|---|---|---|---|
| Productos (todas) | https://buna.mx/collections/all | Sin conteo visible | ~18 tarjetas + artefactos de $0.00 (ver anomalía A3) |
| Productos Ricos | https://buna.mx/collections/productos-ricos | «Encontramos 18 productos disponibles» | **25 tarjetas** (índices 0–24) |
| Productos con Hongos | https://buna.mx/collections/productos-con-hongos | «Encontramos 4 productos disponibles» (según snippet de búsqueda) | No leída directamente |

### 3.1 /collections/all — «Productos»

- **OBSERVADO 13 nov 2026.** La extracción empieza con una fila de artefactos `$ 0.00 … / 0.0 kg` repetidos y dos imágenes promocionales en la parte superior: `20-off.png` y `Descuento.png` (los archivos de la promo del 20%).
- **OBSERVADO — formato mayoreo en las bolsas de 2 kg y cajas de 12:** cada una muestra «Precio retail» y «Precio con descuento» (25% menos) más la frase «**Tu descuento aumenta al pedir más producto**». Ejemplos: Alebrije 2 kg retail $1,390.00 / con descuento $1,042.50; Datura 2 kg $1,450.00 / $1,087.50; Los Pajaritos 2 kg $1,890.00 / $1,417.50; caja de 12 bolsas Alebrije 340 g $4,200.00 / $3,150.00. Es el mismo catálogo con presentación de mayoreo (coherente con el subdominio interno `buna-mayoreo`, §1).
- **OBSERVADO — precios de las bolsas de 340 g en esta colección:** Dalia $335.00, Alebrije $335.00, Datura $360.00, Guarumbo $310.00, Maui Ome $395.00, Los Pajaritos $395.00. Son los precios de **suscripción** (ver §4.4 y anomalía A2: en `/collections/productos-ricos` las mismas bolsas muestran el precio de compra única).
- Otros productos visibles: Café Ikaria 250 g $600.00; «Café / selección del tostador / 3 x 340 g» $975.00.

### 3.2 /collections/productos-ricos — «Productos Ricos»

- **OBSERVADO 13 nov 2026.** Encabezado con control «Filtrar productos» (texto del botón) y el conteo «Encontramos 18 productos disponibles».
- **Estructura de tarjeta OBSERVADA (repetida en las 25):** línea de perfil («Dulce + Cuerpo intenso», «Frutal + Cuerpo Ligero», «Especiado + Cuerpo Intenso», «Descafeinado», «Edición Especial», «Café rico + Extracto de melena de león», etc.), imagen(es) del producto, precio repetido dos veces, peso («/ 0.34 kg», «/ 2.0 kg», «/ 0.5 kg», «/ 0.042 kg»), y descripción corta de notas de sabor. Las bolsas de 340 g y las de 2 kg aparecen como **tarjetas separadas** (p. ej. Dalia 340 g $350.00 y Dalia 2 kg $1,390.00 son dos tarjetas distintas).
- **Precios en esta colección (compra única, OBSERVADO):** Ikaria 250 g $600.00; Micha y Micha 340 g $365.00 / 2 kg $1,450.00; Dalia 340 g $350.00 / 2 kg $1,390.00; Alebrije 340 g $350.00 / 2 kg $1,390.00; Maui Ome 340 g $395.00 / 2 kg $1,890.00; Los Pajaritos 340 g $395.00 / 2 kg $1,890.00; Datura 340 g $365.00 / 2 kg $1,450.00; Guarumbo 340 g $310.00 / 2 kg $1,250.00; Miel 500 g $270.00; Miel Apis Inmunis 350 g $270.00; selección del tostador 3 × 340 g $975.00; Kit Rico $990.00; Chocolate 42 g $70.00; Chocolate Ometeo 42 g $95.00; Chocolate jengibre y cúrcuma 42 g $80.00; Kit Agárica / Buna $1,700.00; Tinturero Agárica 1 (0.05 kg) $350.00; Nibs de cacao 70 g $70.00.
- **Anomalía A1 — conteo vs. tarjetas:** la página declara «18 productos disponibles» pero la extracción lista 25 tarjetas distintas. **NO VERIFICADO** el motivo (posible conteo de «productos base» sin duplicar por tamaño, o artefacto de la extracción). El total real del catálogo queda NO VERIFICADO.
- **Filtros y ordenación:** el botón «Filtrar productos» existe como texto; **NO VERIFICADO** qué filtros ofrece (categoría, precio, disponibilidad, etc.) ni si hay ordenación, porque la extracción no muestra el panel ni sus opciones.
- **Imagen promocional intercalada:** el archivo `20-off.png` aparece entre las tarjetas (tercera posición), como baldosa promocional dentro del listado. OBSERVADO.

### 3.3 /collections/productos-con-hongos — «Productos con Hongos»

- **OBSERVADO solo vía snippet de búsqueda** (no se leyó la página directamente): «Encontramos 4 productos disponibles» — chocolate Ometeo, miel Apis Inmunis, Tinturero Agárica 1 y Kit Agárica / Buna, todos de la colaboración con Agárica. Contenido de la página NO VERIFICADO por lectura directa.

## 4. Página de producto

Dos fichas leídas completas (Maui Ome y Guarumbo). Estructura común OBSERVADA en ambas:

- Imagen superior `20-off.png` (la promo del 20%) antes de la galería.
- Galería de **~5 imágenes de producto** (frente, lateral, lifestyle, trasera) + 1 imagen de fondo de metafields (HulkApps). Maui: 5 imágenes listadas (4 de producto + 1 fondo); Guarumbo: 6 imágenes (5 de producto + 1 fondo). No hay contador visible en la extracción («1 /6» no aparece, a diferencia de F4T3).
- Línea de etiquetas: «B2C, Café, Destacados».
- Insignia de perfil («Edición Especial» en Maui; «Especiado + Cuerpo Intenso» en Guarumbo) y línea de notas de cata («Mango | Frutos amarillos | Bayas» en Maui; «Chocolate | Especias | Tabaco» en Guarumbo).
- Etiqueta «20% de descuento» + precio en MXN + «Impuestos incluidos». **Sin precio tachado visible en la extracción** (ver anomalía A4).
- Tabla de variantes con 3 dimensiones: tipo de compra (Compra única / Suscripción), tamaño (340 gr / 2 kg) y molido (Molido medio / En grano / Molido Fino). Disponibilidad: todas las variantes listadas figuran «Available» / «InStock».
- Sección «Productos relacionados» con 15 tarjetas (ver §4.3).
- Descripción corta del café («Additional Details» / «Description»).

### 4.1 Café Maui Ome (edición especial)

- URL: https://buna.mx/products/cafe-maui-ome-1 — OBSERVADO 13 nov 2026.
- **Precio: $395.00 MXN** (340 g). Etiqueta «20% de descuento» sin precio anterior visible.
- Descripción: «Nuestra edición limitada, Maui Ome, reúne cafés de los proyectos más avanzados en sus programas de conservación. Sus notas a caramelo, mandarina y pasas son un deleite al paladar que te invita a seguirlo disfrutando antes de que vuelva a cambiar.»
- Variantes OBSERVADAS (11): Compra única 340 gr Molido medio / En grano / Molido Fino $395.00; Compra única 2 kg Molido medio / En grano / Molido Fino $1,890.00; Suscripción 340 gr Molido medio / En grano $395.00; Suscripción 2 kg Molido medio / En grano $1,890.00. **La suscripción cuesta lo mismo que la compra única ($395.00) y no ofrece Molido Fino** (ver anomalía A4).
- **Bloque de trazabilidad (región/productores) NO observado en la extracción de Maui** (la página termina en la tabla de variantes). No se puede afirmar que no exista; no apareció en la extracción.

### 4.2 Café Guarumbo

- URL: https://buna.mx/products/cafe-guarumbo?variant=40413022158918 — OBSERVADO 13 nov 2026.
- **Precio: $310.00 MXN** (340 g). Etiqueta «20% de descuento» sin precio anterior visible.
- Descripción: «Guarumbo es un sello con mezcla de café arábiga y robusta diseñado para transmitir sensaciones dulces y especiadas.»
- Variantes OBSERVADAS (4, solo Compra única): 340 gr Molido medio / En grano $310.00; 2 kg Molido medio / En grano $1,250.00. **Sin variantes de Suscripción y sin Molido Fino** (a diferencia de Maui, Dalia y Datura). Disponibilidad: todas «Available».
- **Bloque de trazabilidad OBSERVADO (3 orígenes, cada uno con Región / Altura / Variedades / Proceso / Productores / Especies e icono):**
  1. Huautla de Jiménez, Oaxaca — 1400–1500 m.s.n.m. — Bourbon, Mondo Novo y Typica — Lavado — Unión Regional de Cafeticultores de la Mazateca Alta — Arábiga.
  2. Nuevo México, Chiapas — 1300 m.s.n.m. — Bourbon y Caturra — Lavado — Carlos Alejandro Ibarra Zepeda — Arábiga.
  3. Tapachula, Chiapas — 700 m.s.n.m. — Agata — Lavado — Familia Luttmann — Robusta.
- **Sección de contacto al final de la ficha:** «Echemos el cafecito virtual — ¿Tienes preguntas sobre nuestro proyecto? Nuestro equipo está a solo un correo electrónico o chat de distancia.» + enlace «Contáctanos». OBSERVADO.

### 4.3 Productos relacionados (en ambas fichas)

- **OBSERVADO:** 15 tarjetas con el mismo catálogo en ambas fichas: Ikaria 250 g $600.00; Micha y Micha $365.00; Dalia $335.00; Alebrije $335.00; Maui Ome $395.00; Guarumbo $310.00; Datura $360.00; Los Pajaritos $395.00; selección del tostador 3 × 340 g $975.00; Miel 500 g $270.00; Miel Apis Inmunis 350 g $270.00; Kit Rico $990.00; Chocolate 42 g $70.00; Chocolate Ometeo 42 g $95.00; Chocolate jengibre y cúrcuma 42 g $80.00; Kit Agárica / Buna $1,700.00. (Son 16 contando el Kit Agárica; la extracción de Maui lista 15 enlaces numerados 0–14 y la de Guarumbo 0–14.)
- **OBSERVADO (solo en la lectura de Guarumbo):** cada tarjeta trae «Ver detalle», «Select options» (cuando el producto tiene variantes) y botón «Compra rápida» (quick-add sin entrar a la ficha). Los productos sin stock muestran «**Agotado**» en lugar de «Compra rápida»: Chocolate 42 g, Chocolate Ometeo, Chocolate jengibre y cúrcuma y Kit Agárica / Buna figuran Agotado el 13 nov 2026. En la extracción de Maui no aparecieron los textos «Ver detalle» / «Compra rápida» / «Agotado» — **variación entre extracciones, no necesariamente entre páginas**; el stock de esos 4 productos se reporta solo desde la lectura de Guarumbo.
- **OBSERVADO:** los precios de Dalia ($335.00) y Datura ($360.00) en estas tarjetas son los de **suscripción**, no los de compra única ($350.00 / $365.00). Las tarjetas muestran el precio más bajo disponible (ver anomalía A2).

### 4.4 Suscripción vs. compra única (precios observados)

| Producto (340 g) | Compra única | Suscripción | Ahorro observado |
|---|---|---|---|
| Dalia | $350.00 | $335.00 | $15 (4,3%) |
| Alebrije | $350.00 | $335.00 | $15 (4,3%) |
| Datura | $365.00 | $360.00 | $5 (1,4%) |
| Maui Ome | $395.00 | $395.00 | $0 |
| Guarumbo | $310.00 | — (sin variante) | — |
| Los Pajaritos | $395.00 | — (no verificado en lectura directa) | — |
| Dalia 2 kg | $1,390.00 | $1,290.00 | $100 (7,2%) |

Fuentes: tabla de variantes de Maui (lectura directa) y de Guarumbo (lectura directa); Dalia, Alebrije y Datura según snippets de resultados de búsqueda (variantes listadas con ID y precio). Los Pajaritos: precio de compra única $395.00 OBSERVADO en listados; su variante de suscripción NO VERIFICADA por lectura directa.

### 4.5 Lo no observado en las fichas

- **NO VERIFICADO:** botón «Añadir al carrito» / selector de cantidad como texto (la caja de compra no se renderizó en la extracción; solo la tabla de variantes), acordeones de envío/devoluciones, guía de preparación del café, reseñas de clientes (no hay sección de reseñas visible en ninguna de las dos extracciones), ni insignias de pago.
- **NO VERIFICADO:** ficha de Datura. Su lectura directa devolvió error 429 y **no se reintentó** (ver §11). Los datos de Datura citados arriba provienen de snippets de búsqueda, no de lectura directa de la ficha.

## 5. Carrito y checkout

- **Carrito — OBSERVADO con copia antigua:** https://buna.mx/cart , título «Tu carrito». **Advertencia: la copia leída es del 25 oct 2026 (19 días antes de la investigación)**, no del 13 nov 2026; su contenido puede haber cambiado.
- **OBSERVADO en esa copia:**
  - Banner superior: «Envíos gratis * a todo México *CDMX: compras mayores a $890 / Resto del país: compras mayores a $1,499». Son los umbrales de envío gratis.
  - Elementos de header visibles aquí: «Buscar», «Cerrar Buscar», «Carrito».
  - Texto «Estamos preparando tu suscripción» (relacionado con el flujo de suscripción).
  - Con el carrito vacío: «Continuar comprando», «Producto añadido al carrito», «Cantidad», «Subtotal», «Error», «Comparar producto». No apareció botón de checkout, resumen ni métodos de pago.
- **NO VERIFICADO:** pasos del checkout, campos, métodos de pago aceptados, meses sin intereses, ni opciones de envío en checkout (no se pudo recorrer el checkout con lectura de texto y sin navegador en vivo). **No se observó** ningún logotipo de tarjeta, banco, pasarela (Mercado Pago, Stripe, PayPal, Conekta) ni medio alternativo (OXXO, SPEI, etc.) en las páginas leídas. **No afirmar ningún método de pago concreto.**
- **INFERIDO (confianza media):** al ser Shopify, el checkout es presumiblemente el checkout estándar de Shopify; pero eso es una inferencia de plataforma, no una observación del flujo real de BUNA.

## 6. Búsqueda y UX de navegación

- **Buscador — OBSERVADO:** https://buna.mx/search?q=cafe devuelve «Resultados de tu búsqueda: **34 resultados** relacionados a "cafe"», con 23 tarjetas en la primera página (mismo formato que las colecciones: perfil, imagen, precio, peso, descripción). La búsqueda «cafe» mezcla productos de café con kits y accesorios que lo contienen (Kit Rico, Nibs de cacao).
- **INFERIDO (confianza media):** el conteo de 34 probablemente cuenta **variantes** (cada café tiene variantes de 340 g / 2 kg × molido × compra/suscripción), no 34 productos distintos — el catálogo visible es de ~25 tarjetas. No se pudo confirmar el criterio de conteo: el número se reporta tal como lo muestra la página.
- **Filtros y ordenación en búsqueda:** NO VERIFICADO. No apareció ningún control de filtro ni de ordenación en la extracción de la página de resultados.
- **Navegación:** OBSERVADO que la home organiza el catálogo por **familia de producto** (café / chocolate / miel) y por **colaboración** (Productos con Hongos / Agárica), y las colecciones por **formato de compra** (bolsa 340 g, bolsa 2 kg, caja de 12, kits) y por **perfil de sabor** (Dulce + Cuerpo intenso, Frutal + Cuerpo Ligero, Especiado + Cuerpo Intenso, Descafeinado, Edición Especial). La promo del 20% aparece como imagen (`20-off.png`) en la parte superior de fichas y colecciones y como baldosa dentro del listado.
- **Móvil — NO VERIFICADO en render:** no se observó ningún asset con nombre «mobile» ni variantes de ancho en las URLs de imagen de la extracción. Sin navegador en vivo no se pudo renderizar ni inspeccionar la vista móvil: menú hamburguesa, legibilidad, orden de secciones en móvil y comportamiento táctil quedan NO VERIFICADOS.
- **Accesibilidad:** NO VERIFICADO. No se observó enlace de salto («Omitir…») ni otros marcadores de accesibilidad en las extracciones (a diferencia de F4T3, donde sí aparecía).

## 7. Contenido y mensajes comerciales (qué vende)

- **OBSERVADO — qué vende:** café de especialidad mexicano en mezclas con nombre propio (Dalia, Alebrije, Guarumbo, Datura, Maui Ome, Los Pajaritos, Micha y Micha, Ikaria), en bolsa de 340 g y 2 kg, en grano o molido (medio/fino); miel (500 g y Apis Inmunis 350 g con extractos de hongos); chocolate en barrita de 42 g (70% cacao + panela) y nibs de cacao; kits (Kit Rico $990.00, Kit Agárica / Buna $1,700.00, selección del tostador 3 × 340 g $975.00, cajas de 12 bolsas, Tinturero Agárica 1 $350.00). Venta al por mayor implícita en la presentación de 2 kg y cajas de 12 («Precio retail / Precio con descuento»).
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - «Productos ricos, del campo a tu mesa» / «Café Rico que Conserva Ecosistemas».
  - «¿Qué si a través de un hábito tan cotidiano como tomar café pudiéramos promover la conservación de nuestros ecosistemas?»
  - «Recibe productos ricos de manera recurrente en la puerta de tu casa» + «15 % de descuento en todas tus compras» (suscripción).
  - «20% de descuento» (etiqueta en fichas y colecciones).
  - «Tu descuento aumenta al pedir más producto» (mayoreo).
  - «Envíos gratis * a todo México *CDMX: compras mayores a $890 / Resto del país: compras mayores a $1,499».
  - «Buna y Agárica trabajan juntos para promover la salud en los ecosistemas mexicanos.»
  - «Echemos el cafecito virtual» (contacto).
- **Rango de precios OBSERVADO (bolsa 340 g, compra única): $310.00–$395.00 MXN** (Guarumbo $310.00; Dalia/Alebrije $350.00; Datura/Micha y Micha $365.00; Maui Ome/Los Pajaritos $395.00). Rango completo del catálogo en listados: $70.00 (chocolate 42 g, nibs) a $4,740.00 (caja de 12 bolsas Maui Ome / Los Pajaritos, precio retail). Los precios de 2 kg y cajas de 12 se citan en §3.1/§3.2.
- **Datos del encargo verificados:** Maui Ome $395 ✓; Guarumbo $310 ✓; Datura $365 ✓ (compra única; suscripción $360); Dalia $350 ✓ (compra única; suscripción $335); Alebrije $350 ✓ (compra única; suscripción $335); Los Pajaritos $395 ✓; «20% de descuento» visible ✓; opciones compra única / suscripción, 340 gr, molido medio / en grano / fino ✓ (con las excepciones de §4.1/§4.2: Guarumbo no tiene suscripción ni molido fino; Maui no tiene molido fino en suscripción); colaboración con Agárica ✓; productores de Oaxaca (Huautla de Jiménez) ✓ (bloque de trazabilidad de Guarumbo, §4.2).

## 8. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** 6 de las 7 lecturas de página tuvieron éxito y el servicio de lectura marcó cada página como «crawled less than a minute ago» (home, /collections/all, ficha Maui, /cart es la excepción con copia del 25 oct, búsqueda) o «crawled 2 minutes ago» (/collections/productos-ricos) en el momento de la consulta. Eso solo constata que el crawler pudo cargar el texto con rapidez; **no es una medición de velocidad**.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, número de peticiones, ni puntuación Lighthouse/PageSpeed. No se inventa ninguna cifra.
- **INFERIDO (confianza baja-media):** hay indicios de optimización básica de imágenes — archivos `.webp` en CDN de Shopify y miniaturas `300x300` en la extracción de Guarumbo — pero también hay imágenes de fondo pesadas servidas desde S3 de HulkApps (`Buna_1600x1600_…jpg`) en cada ficha y tarjeta. Sin medición, no se puede afirmar el impacto real.
- **INFERIDO (confianza media):** la extracción de la home (58 líneas) es mucho más corta que la de las colecciones (500–700 líneas), lo que sugiere que gran parte del contenido de la home (rejilla de productos, testimonios, footer) se renderiza por JS o quedó fuera del texto extraído. Es una inferencia sobre el método de extracción, no sobre el sitio.

## 9. Tabla final — observado / inferido / hipótesis / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Home: «Productos ricos, del campo a tu mesa» → categorías café / chocolate / miel → pregunta de misión + «Somos BUNA» → vídeo (Widgetic) → sección suscripción (15% dto., envío gratis 1er pedido, cada 2/4/6 semanas, pausa/cancela, comunidad y La Tostadora) → CTA «Haz tu primer pedido» | https://buna.mx/ |
| O2 | Ninguna página leída menciona «Buen Fin» (13 nov, primer día de la campaña) | Home, colecciones, fichas, carrito, búsqueda |
| O3 | Colección Productos Ricos: «Filtrar productos», «Encontramos 18 productos disponibles», 25 tarjetas en la extracción | https://buna.mx/collections/productos-ricos |
| O4 | Colección /all con formato mayoreo: «Precio retail / Precio con descuento» (−25%) + «Tu descuento aumenta al pedir más producto» en 2 kg y cajas de 12 | https://buna.mx/collections/all |
| O5 | Maui Ome: $395.00 MXN, «20% de descuento», 11 variantes (compra única/suscripción × 340 g/2 kg × molido medio/en grano/fino) | https://buna.mx/products/cafe-maui-ome-1 |
| O6 | Guarumbo: $310.00 MXN, «20% de descuento», solo 4 variantes de compra única (sin suscripción, sin molido fino) | https://buna.mx/products/cafe-guarumbo?variant=40413022158918 |
| O7 | Guarumbo: trazabilidad de 3 orígenes (Huautla de Jiménez, Oaxaca 1400–1500 m; Nuevo México, Chiapas 1300 m; Tapachula, Chiapas 700 m) con altura, variedades, proceso, productores y especie | Ficha Guarumbo (§4.2) |
| O8 | Productos relacionados (15 tarjetas) con «Ver detalle», «Select options», «Compra rápida»; «Agotado» en Chocolate 42 g, Ometeo, jengibre y cúrcuma y Kit Agárica / Buna | Ficha Guarumbo (§4.3) |
| O9 | Precios 340 g compra única: Guarumbo $310, Dalia/Alebrije $350, Datura/Micha $365, Maui/Pajaritos $395; suscripción $335/$335/$360 (Dalia/Alebrije/Datura) | Fichas y listados (§4.4) |
| O10 | Carrito (copia 25 oct 2026): envío gratis CDMX >$890 / resto >$1,499; «Buscar», «Carrito», «Continuar comprando», «Cantidad», «Subtotal» | https://buna.mx/cart |
| O11 | Búsqueda «cafe»: 34 resultados, 23 tarjetas en 1ª pág. | https://buna.mx/search?q=cafe |
| O12 | Sección «Echemos el cafecito virtual» + «Contáctanos» al final de la ficha Guarumbo | Ficha Guarumbo |
| O13 | Español de México + precios en MXN + «Impuestos incluidos» en todo lo leído | Todas las páginas |
| O14 | Colección Productos con Hongos: 4 productos (según snippet de búsqueda) | Búsqueda web (§3.3) |
| O15 | Blog «Buna, la iniciativa» existe, publicado 2022-03-10 | https://buna.mx/blogs/info/buna-la-iniciativa (vía búsqueda) |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Plataforma Shopify (tema 15) | URLs `/collections/`, `/products/`, `/search`, `/cart` + CDN `cdn/shop/` — confianza **alta** |
| I2 | App de metafields de HulkApps instalada; subdominio interno `buna-mayoreo.myshopify.com` | Imágenes de fondo desde `metafields-manager-by-hulkapps.s3…` — confianza **media** |
| I3 | Los «34 resultados» de búsqueda cuentan variantes, no productos | Catálogo visible de ~25 tarjetas; cada café tiene 4–11 variantes — confianza **media** |
| I4 | Las tarjetas de listado muestran el precio más bajo (suscripción) cuando existe | Dalia $335 en /all y en relacionados vs. $350 compra única en /productos-ricos — confianza **media-alta** |
| I5 | Checkout estándar de Shopify | Inferencia de plataforma (I1), no observación del flujo — confianza **media** |
| I6 | Optimización básica de imágenes (webp + miniaturas 300×300) con fondos pesados de S3 | Extensiones y tamaños en URLs de imagen — confianza **baja-media** (sin medición) |
| I7 | Gran parte de la home se renderiza por JS o quedó fuera de la extracción de texto | Home con 58 líneas vs. 500–700 en colecciones — confianza **media** (sobre el método, no sobre el sitio) |

### HIPÓTESIS (derivadas, marcadas)

| # | Hipótesis | Base |
|---|---|---|
| H1 | El «20% de descuento» podría ser la promo del Buen Fin 2026 o una promo permanente | Es la única promo visible el primer día del Buen Fin y no se vincula textualmente a la campaña — **sin evidencia** |
| H2 | El precio con descuento del mayoreo (25% en 2 kg y cajas de 12) es la vía B2B/restaurantes de BUNA | Formato «Precio retail / Precio con descuento» + subdominio `buna-mayoreo` — **sin confirmar** |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Ficha completa de Datura (galería, variantes, trazabilidad) | Lectura directa devolvió 429 y no se reintentó (§11); solo datos por snippets |
| N2 | Header completo (logo, ítems de menú, cuenta), footer (enlaces legales, contacto, redes) y newsletter | No aparecen en ninguna extracción (ausencia en extracción ≠ ausencia en el sitio) |
| N3 | Contenido del panel «Filtrar productos» y ordenación en colección y en búsqueda | Solo existe el texto del botón; el panel no se renderizó en la extracción |
| N4 | Pasos del checkout y métodos de pago aceptados | Carrito vacío no los muestra; checkout no recorrible con lectura de texto |
| N5 | Mecanismo real del «20% de descuento» (¿código? ¿automático? ¿Buen Fin?) | Etiqueta visible sin precio tachado ni explicación; no cuadra con los ahorros de suscripción observados (0–7,2%) |
| N6 | Reseñas de clientes (número, texto, puntuación) | No hay sección de reseñas visible en las extracciones de ficha ni de home |
| N7 | Vista y UX móvil real (menú, orden, táctil) | Sin navegador en vivo ni render |
| N8 | Total real del catálogo («18 productos» declarados vs. 25 tarjetas extraídas) | Discrepancia sin explicar (A1) |
| N9 | Rendimiento medido (LCP, tiempos, Lighthouse) | Método de lectura de texto no mide rendimiento |
| N10 | Botón «Añadir al carrito» / selector de cantidad como texto; acordeones de envío/devoluciones; guía de preparación | La caja de compra no se renderizó en la extracción |
| N11 | Si el enlace «Somos BUNA» de la home apunta al blog «Buna, la iniciativa» | El blog existe, pero el destino del enlace no se observó |
| N12 | Contenido de /collections/productos-con-hongos por lectura directa | Solo snippet de búsqueda |
| N13 | Precio y variantes de suscripción de Los Pajaritos por lectura directa | Solo precio de compra única en listados |

## 10. Fuentes consultadas

Lecturas de texto de páginas públicas de https://buna.mx/ el 13 nov 2026 (~19:20–19:24 UTC), 6 lecturas exitosas + 1 fallida:

1. https://buna.mx/ (home)
2. https://buna.mx/collections/all
3. https://buna.mx/collections/productos-ricos (incl. continuación de líneas 651–712)
4. https://buna.mx/products/cafe-maui-ome-1
5. https://buna.mx/products/cafe-guarumbo?variant=40413022158918
6. https://buna.mx/cart (copia del 25 oct 2026)
7. https://buna.mx/search?q=cafe
8. https://buna.mx/products/cafe-datura — **fallida, 429, no reintentada**

Búsquedas web de apoyo: «Buna buna.mx café de especialidad México tienda» (confirmó precios, variantes y trazabilidad de los 6 cafés, y la colaboración Agárica); «site:buna.mx collections café chocolate miel» (descubrió `/collections/productos-ricos` con 18 productos y `/collections/productos-con-hongos` con 4); «"buna.mx" "Somos BUNA" OR "La Tostadora" OR newsletter suscríbete» (blog «Buna, la iniciativa», 2022-03-10; sin evidencia de newsletter propio).

## 11. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, los controles JS (filtros, menús, pop-ups, caja de compra) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio. La home en particular devolvió una extracción muy parcial (58 líneas).
- **Límite de peticiones:** la lectura de la ficha de Datura devolvió **429 (límite de peticiones)** y **no se reintentó**, conforme a la regla del encargo; su contenido queda en NO VERIFICADO (N1). Tras una pausa se retomó con lecturas individuales espaciadas (carrito, búsqueda, colecciones, Guarumbo, todas exitosas). No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Copia antigua del carrito:** la lectura de `/cart` es una copia rastreada el 25 oct 2026, 19 días antes; los umbrales de envío gratis citados (§5) pueden haber cambiado.
- **Anomalías de descuento sin resolver (A4):** conviven tres cifras distintas — 15% de suscripción (home), 20% (etiqueta en fichas y colecciones) y 25% (mayoreo en 2 kg y cajas de 12) — mientras los precios de variante muestran un ahorro real por suscripción de solo 0–7,2% (y 0% en Maui Ome). Ninguna página leída explica cómo se aplica el 20% ni muestra precio tachado. No se afirma cuál es el descuento efectivo.
- **Fecha:** todo lo observado corresponde al **13 nov 2026, primer día del Buen Fin 2026**; aun así, ninguna página menciona el Buen Fin. Los precios, promos y disponibilidad (4 productos figuran Agotado) pueden cambiar en cualquier momento.
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 2 y no se cubren aquí (salvo lo necesario para describir lo visible).
