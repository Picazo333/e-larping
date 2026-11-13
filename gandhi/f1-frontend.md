# F1 — Front end · Librerías Gandhi (gandhi.com.mx)

- **WO:** WO-E-LARPING, Fase 2 — reverse engineering de e-commerce mexicanos
- **Frente:** F1 (Front end)
- **Sitio:** Librerías Gandhi — https://gandhi.com.mx/
- **Fecha de observación:** viernes 13 de noviembre de 2026 — primer día del Buen Fin 2026 (13–17 nov 2026)
- **Método:** lectura de texto de páginas con `browser.open` y `browser.search` (búsqueda web + fetch de texto). Sin navegador en vivo, sin inicio de sesión, sin añadir nada al carrito, sin publicar ni contactar.
- **Convención de este informe:** cada afirmación lleva etiqueta **OBSERVADO** (visto en el texto leído ese día), **INFERIDO** (deducción razonable, marcada como tal) u **NO VERIFICADO** (no se pudo comprobar con las lecturas hechas). No se inventan métricas, precios ni anuncios.

## 1. Home — orden de secciones

**OBSERVADO** — Lectura de la home, `https://gandhi.com.mx/`, rastreada 13 nov 2026 18:20 UTC (1 hora antes de la lectura). El extractor devolvió solo 24 líneas de texto; los banners/hero probablemente son imágenes o contenido renderizado por JS y **no quedaron capturados en texto**. Lo que sí se leyó, en este orden:

1. Barra superior / aviso: «Envío gratis siempre a todo México.»
2. Navegación principal (etiquetas, sin URLs capturadas): **Librerías, Eventos, Tinta, Radio Gandhi, Ayuda, Tarjetas de regalo**
3. Secciones de catálogo, en este orden:
   - LOS MÁS LEÍDOS
   - NOVEDADES
   - LIBROS DE ARTE
   - EBOOK Y AUDIOLIBROS
   - HARRY POTTER
   - EDICIONES GANDHI
   - JUEGOS Y JUGUETES
   - RINCÓN DE OPORTUNIDADES
4. Sección promocional: **«Destacados de Buen Fin»** + enlace «Ver todo»

**OBSERVADO** — La home no mostró en texto: hero con titular, buscador con placeholder, precios, carrusel de banners, footer, ni enlaces de redes/app. Eso es una limitación del extractor, no una afirmación de que no existan.

**INFERIDO** — La estructura es la de una librería generalista con curaduría por listas (más leídos / novedades / colecciones temáticas) y una sección de saldos («Rincón de Oportunidades»), más una marca propia («Ediciones Gandhi») y una franquicia ancla («Harry Potter») con sección propia. El Buen Fin tiene sección propia en home el primer día de la campaña, no solo un banner.

**NO VERIFICADO** — Contenido concreto de cada sección (qué títulos aparecen en «Los más leídos», «Novedades», etc.), orden visual real, banners del Buen Fin, ni si hay contador, cupón o MSI anunciado en home.

## 2. Menú / buscador / navegación

**OBSERVADO** — Menú superior leído en home: Librerías, Eventos, Tinta, Radio Gandhi, Ayuda, Tarjetas de regalo.

**OBSERVADO** — Página de mayoreo (`https://www.gandhi.com.mx/mayoreo`, rastreada 13 nov 2026 20:01 UTC) confirma que el sitio tiene una vertical B2B/institucional separada, con formulario «Haz tu pedido» (Información personal + Registro de libros para cotizar, con adjunto .pdf / .xlsx / .docx / .csv) y FAQ propias.

**NO VERIFICADO** — Buscador: el texto extraído de la home no incluye campo de búsqueda, placeholder, sugerencias ni filtros. No se puede afirmar cómo funciona (autocompletado, búsqueda por ISBN/autor, filtros por formato). Tampoco se verificaron: menú por categorías/géneros, breadcrumbs en fichas, ni navegación móvil.

## 3. Fichas de producto

### 3.1 Patrón general de ficha (observado en las 4 fichas abiertas en vivo)

**OBSERVADO** — Todas las fichas leídas muestran, en texto:

- Logo Gandhi (imagen) + «Haz clic para hacer zoom» (visor de portada).
- Autor (nombre, encima del título).
- Título en H1.
- Bloque «Cargando comentarios…» / «Cargando el resumen…» — es decir, **reseñas y resumen se cargan por JS y no quedaron en el texto leído**.
- «Comparte» (botón de compartir).
- Precio tachado + precio vigente («Precio Gandhi», con la nota «*Precio exclusivo para compras en línea» en las fichas donde el snippet la incluye).
- «Por favor, inicia sesión para escribir un comentario.» — comentar exige cuenta.
- «Additional Details» / descripción del libro (sinopsis, en inglés en varios títulos importados).
- En algunas fichas, bloque «Frequently Asked Questions» generado (preguntas sobre el contenido del libro, no sobre envío/pago).
- Metadatos de oferta (JSON-LD / Open Graph): precio en MXN y disponibilidad `instock`.

**OBSERVADO** — Campos que **sí** aparecen en fichas (según el título): autor, editorial, formato (tapa blanda / eBook / audiolibro), fecha de publicación, ISBN. Ejemplo: *Secondhand Jew* — Ta'om Pearlman, Editorial: Fulton Books, Inc., eBook, fecha de publicación 5 de marzo de 2026, ISBN 9798896750161. *Venice Peach* — Jessamyn Violet, Editorial: Junkfood Media, audiolibro, 4 de junio de 2025, ISBN 9781737022299. *Derecho Internacional Privado. Parte General* — José Francisco Contreras Vaca, Editorial: Dikaia, tapa blanda, 14 de abril de 2025, ISBN 9786072636033.

**NO VERIFICADO** — En el texto leído no aparecieron: botón «Agregar al carrito» (etiqueta exacta), selector de cantidad, disponibilidad por sucursal, tiempo de entrega por ficha, ni «libros relacionados / también te puede interesar». Tampoco se vio número de páginas, idioma ni dimensiones en estas fichas.

### 3.2 Precios observados (MXN, 13 nov 2026)

> Advertencia de método: los precios de la **búsqueda** (caché del buscador, rastreos de hace 1 hora a 6 días) y los de la **apertura en vivo** (13 nov 20:01 UTC) **no coinciden en 3 de 4 fichas**: el precio vigente en vivo es un 10% menor que el precio vigente del snippet. Se reportan ambas lecturas con su fuente y hora; no se elige una como «la correcta».

| Título / formato | Precio tachado | Precio vigente — snippet de búsqueda | Precio vigente — apertura en vivo 13 nov 20:01 UTC | Disponibilidad |
|---|---|---|---|---|
| 365 CALENDARS — Weiming Huang (libro físico) | $1,499 | $899.10 | $899.10 — coincide | instock |
| DERECHO INTERNACIONAL PRIVADO. PARTE GENERAL — José Francisco Contreras Vaca, Dikaia, tapa blanda | (no capturado en vivo) | $450 → $405 | **$364.50** (JSON-LD) | no capturada en vivo |
| Secondhand Jew — Ta'om Pearlman, Fulton Books, eBook | $173 | $173 (precio OG) | **$155.70** (OG) — tachado $173 en página | instock |
| Venice Peach — Jessamyn Violet, Junkfood Media, audiolibro | $259 | $259 (precio OG) | **$233.10** (OG) — tachado $259 en página | instock |
| COLL WORKS (Kahlil Gibran) | $671 | $603.90 | **sin leer en vivo — 429, ver §7** | instock (según snippet) |

**OBSERVADO** — Descuentos en fichas (cálculo propio a partir de los dos precios mostrados en la misma página, no una etiqueta del sitio):

- 365 CALENDARS: $1,499 → $899.10 = **−40.0%** aprox. (único descuento profundo visto; resto del catálogo parece moverse en −10%).
- Secondhand Jew, Venice Peach, Derecho…: el precio vigente en vivo es exactamente el 90% del precio listado ($173 → $155.70; $259 → $233.10; $405 → $364.50).

**INFERIDO** — El −10% sistemático en la lectura en vivo del 13 nov (primer día del Buen Fin) es compatible con un descuento de campaña aplicado en la apertura en vivo, o con un «Precio Gandhi» online que el snippet no reflejaba; **no se puede afirmar cuál de las dos**, porque ninguna página leída nombra el −10% ni lo vincula al Buen Fin. El −40% de 365 Calendars es distinto y parece precio de oportunidad/saldo, no el mismo mecanismo.

**OBSERVADO (solo snippet, no apertura en vivo)** — Otros precios con el mismo patrón −10% en resultados de búsqueda de `gandhi.com.mx` (rastreos de 1 hora a 6 días antes): ZIPADIZOOS LION $398 → $358.20; Meditations, Love Poems, Prayers, and Hope $111 → $99.90; Angry Bear $99 → $89.10; Fair Street (eBook) $138; Growing Fruit (eBook) $379; Abyssal Coalition (eBook) $189; Your home, your style $692 (sin tachado capturado).

**NO VERIFICADO** — Si el −10% es Buen Fin, si aplica a todo el catálogo o solo a una selección, su vigencia, ni si hay un precio distinto en tienda física («Precio Gandhi *exclusivo para compras en línea» sugiere que sí hay diferencia de canal, pero no se verificó el precio en tienda).

### 3.3 URLs de fichas leídas (verbatim)

- https://www.gandhi.com.mx/derecho-internacional-privado--parte-general-9786072636033/p
- https://www.gandhi.com.mx/365-calendars-9788415967965/p
- https://www.gandhi.com.mx/secondhand-jew-9798896750161/p
- https://www.gandhi.com.mx/venice-peach-9781737022299/p
- https://www.gandhi.com.mx/coll-works-9780307267078/p (snippet; apertura en vivo fallida por 429)

Patrón de URL **OBSERVADO**: slug del título + ISBN + `/p` (plataforma VTEX, ver §6).

## 4. Carrito / checkout — solo lo observable en texto

**OBSERVADO** — Nada. En ninguna de las páginas leídas en texto (home, mayoreo, 4 fichas) apareció: icono/etiqueta de carrito, botón de compra, pasos de checkout, métodos de pago del canal retail, ni MSI.

**OBSERVADO (solo mayoreo, canal B2B — no extrapolar al retail)** — FAQ de `/mayoreo`: «Aceptamos transferencias, depósitos y todas las tarjetas bancarias»; mínimo de compra $10,000; entregas nacionales de 4 a 6 días hábiles tras autorizar cotización y pagar; envíos a toda la República y al extranjero; crédito «dependiendo de la compra específica y el historial de compra».

**NO VERIFICADO** — Todo el checkout retail: si hay compra como invitado o exige registro, métodos de pago (tarjetas, PayPal, Mercado Pago, etc.), MSI y montos mínimos, costo de envío por pedido, entrega en sucursal (click & collect), ni confirmación de pedido. No se añadió nada al carrito ni se inició sesión, por regla del proyecto.

## 5. Promociones visibles

**OBSERVADO en el propio sitio:**

- Home: «Envío gratis siempre a todo México.» (sin mínimo visible en el texto leído).
- Home: sección «Destacados de Buen Fin» + «Ver todo» (13 nov, primer día del Buen Fin).
- Fichas: «Precio Gandhi *Precio exclusivo para compras en línea» (descuento online vs. tienda física, magnitud no declarada como tal).
- Mayoreo: «Descuentos preferenciales. Otorgamos descuentos de acuerdo a la frecuencia y volumen de compra.» (canal B2B).
- Tarjetas de regalo físicas y digitales (navegación + mayoreo; en mayoreo: carga de $100 a $10,000, aceptadas en ambos canales).

**OBSERVADO en fuentes de terceros (no en gandhi.com.mx):**

- Gandhi aparece en una lista de tiendas participantes del Buen Fin 2026 (segurointeligente.mx, 29 oct 2026). **NO VERIFICADO** en el portal oficial elbuenfin.org ni en el propio sitio de Gandhi.
- Picodi (cupones, nov 2026) afirma: 10% de descuento al crear cuenta para la próxima compra y envío gratis a partir de $99 MXN. **NO VERIFICADO** en gandhi.com.mx — y el mínimo de $99 **contradice** el «Envío gratis siempre» de la home, por lo que no se da por bueno ninguno de los dos como regla operativa sin segunda lectura.

**NO VERIFICADO** — Porcentaje general del Buen Fin en Gandhi, MSI en Gandhi (plazos, bancos, mínimo), cupones vigentes, vigencia exacta de «Destacados de Buen Fin», ni si los precios −10% observados en vivo son la promo de Buen Fin.

## 6. Contenido editorial, comunidad y servicios

**OBSERVADO** — Navegación: **Eventos, Tinta, Radio Gandhi**. Son etiquetas de primer nivel en la home, lo que indica que el contenido editorial y los eventos son parte estructural del sitio, no un blog escondido.

**OBSERVADO** — Mayoreo: «Servicio de información periódica de novedades y títulos relevantes», «Atención personalizada por parte de un librero experto», «Asesoramiento para abasto y manejo de bibliotecas, librerías, corporativos e instituciones», «Capacitación a personal para el servicio de venta a librerías».

**OBSERVADO (fuente secundaria, caso VTEX)** — vtex.com, caso «Librerías Gandhi mantiene su liderazgo digital…»: Gandhi explora «suscripciones literarias personalizadas, donde cada cliente recibe mensualmente un libro adaptado a su perfil lector». Es una declaración del proveedor tecnológico, no algo visto en el front el 13 nov.

**NO VERIFICADO** — Contenido real de Tinta (blog/revista), de Radio Gandhi (podcast/radio), calendario de Eventos, clubes de lectura (hay mención en reseñas de terceros de un club en Gandhi del Valle, pero no se verificó en el sitio), recomendaciones personalizadas, ni suscripción literaria activa.

## 7. Red de sucursales y app / omnichannel

**OBSERVADO en el propio sitio:**

- Mayoreo/home: «MÁS DE 40 LIBRERÍAS EN TODO EL PAÍS».
- Mayoreo: «Te ofrecemos más de 5,000,000 de libros, ebooks y audiolibros»; «Entregas nacionales de 4 a 6 días»; «Envíos a todo el país y el extranjero con tarifas preferenciales».
- Mayoreo (contadores del sitio): «MÁS DE 5 MILLONES DE TÍTULOS», «MÁS DE 150 CLIENTES POR MES ATENDIDOS», «MÁS DE 50 AÑOS DE EXPERIENCIA EN EL MEDIO LIBRERO».

**OBSERVADO en fuentes de terceros (no en el front leído):**

- Caso VTEX (vtex.com): «más de 50 tiendas físicas», «catálogo de entre 35,000 y 40,000 SKUs por tienda», «más de 4.5 millones de ebooks»; Gandhi lanzó ecommerce en 1996; usa VTEX OMS + VTEX Sales App («pasillo infinito»: si un libro no está en tienda, el vendedor lo consulta en la app, confirma disponibilidad en otra sucursal o almacén central y cierra la venta ahí; carrito y pago unificados web/tienda/teléfono). **INFERIDO** — la discrepancia «más de 40» (sitio) vs. «más de 50» (VTEX) puede ser fecha de cada fuente o conteo distinto; no se resuelve aquí.
- Directorio de lugares (fichas de sucursales, no el sitio de Gandhi): Del Valle, Av. Universidad 767, Benito Juárez, CDMX (10:00–21:00); Lomas, Av. Paseo de las Palmas 840, Miguel Hidalgo, CDMX (9:00–21:00, con café Gramo Café según reseñas); AICM Terminal 2, local 18 y 19 (5:00–22:00). **NO VERIFICADO** contra el localizador del propio sitio.
- ShopFully (folletos): evento «LEE 210 Quien es el culpable», 1–30 nov 2026, en folletos de Gandhi por ciudad. **NO VERIFICADO** en gandhi.com.mx.

**NO VERIFICADO** — Localizador de sucursales en el propio sitio (no se abrió), app propia de Gandhi (no apareció en el texto leído; la «app» del caso VTEX es la Sales App para vendedores, no una app de cliente — no confundir), disponibilidad en tiempo real por sucursal, ni recogida en tienda.

## 8. Stack / señales técnicas (solo lo que el front deja ver)

**INFERIDO** — Plataforma VTEX: URLs de producto con patrón `/slug-isbn/p`, archivos en `/arquivos/` (mayoreo: `gandhi.com.mx/arquivos/ben1.jpg`…), metadatos JSON-LD/Open Graph de producto, y el caso VTEX citado. Es una inferencia fuerte (patrón de URL + assets + caso del proveedor), no una lectura del código fuente.

**OBSERVADO** — Las reseñas/resúmenes se cargan de forma asíncrona («Cargando comentarios…»), por lo que un lector de texto plano pierde ese contenido; el front depende de JS para partes centrales de la ficha.

## 9. Contraste útil para la Fase 2 (El Sótano como cadena mediana)

**INFERIDO** — Gandhi juega en otra escala que una cadena mediana: +40 sucursales, 5M de títulos (físico + ebook + audiolibro), vertical B2B/mayoreo con cotizador y FAQ propias, marca editorial propia, y omnichannel con «pasillo infinito» y carrito unificado. El front, sin embargo, es sobrio: la venta se apoya en listas curadas y en el «Precio Gandhi» online, no en banners agresivos ni en MSI destacado en el texto leído. Esa sobriedad es en sí un dato: el descuento parece estar en el precio de ficha (−10% sistemático el 13 nov), no en un hero promocional legible por texto.

## Sin verificar

- Contenido de las secciones de home (qué títulos hay en Los más leídos, Novedades, Harry Potter, Ediciones Gandhi, Rincón de Oportunidades) y banners/hero del Buen Fin.
- Buscador: funcionamiento, autocompletado, filtros.
- Botón de compra, carrito y checkout retail completo (registro/invitado, pagos, MSI, envío, recogida en tienda).
- Si el −10% en vivo es la promo de Buen Fin, su alcance y vigencia; porcentaje general de Buen Fin y MSI en Gandhi.
- Registro oficial de Gandhi en el Buen Fin 2026 (elbuenfin.org) y T&C de sus promos.
- Contenido de Tinta, Radio Gandhi y Eventos; clubes de lectura; suscripción literaria.
- Localizador de sucursales en el propio sitio; número exacto de sucursales (40+ en el sitio vs. 50+ en VTEX); app de cliente (si existe).
- **Ficha COLL WORKS (Kahlil Gibran, https://www.gandhi.com.mx/coll-works-9780307267078/p): apertura en vivo fallida por 429** — el servicio de lectura devolvió «exceeded the maximum number of requests» tras 3 intentos (13 nov 2026 ~20:02 UTC). Por regla del proyecto **no se reintentó**. Solo se conoce su snippet de búsqueda: $671 → $603.90, instock. Queda como no verificada en vivo.
- Precios en tienda física vs. online («Precio Gandhi exclusivo para compras en línea»).
- Reseñas reales por ficha (cargan por JS; el texto leído solo mostró «Cargando comentarios…»).

## Resumen ejecutivo

- Gandhi es una librería omnichannel gigante: +40 sucursales según su sitio (50+ según VTEX), 5M de títulos entre físico, ebook y audiolibro, con vertical B2B/mayoreo propia y marca editorial propia.
- La home del 13 nov (primer día del Buen Fin) se ordena por listas curadas —Los más leídos, Novedades, Arte, Ebook y audiolibros, Harry Potter, Ediciones Gandhi, Juegos y juguetes, Rincón de Oportunidades— y cierra con «Destacados de Buen Fin».
- Las fichas muestran autor, título, editorial, formato, fecha e ISBN, precio tachado + «Precio Gandhi» online, y reseñas que cargan por JS; comentar exige iniciar sesión.
- El 13 nov el precio vigente en vivo fue un 10% menor que el del snippet en 3 de 4 fichas (ej. $405 → $364.50), y un −40% en 365 Calendars ($1,499 → $899.10); no se pudo verificar si ese −10% es la promo de Buen Fin.
- Promos visibles en texto: «Envío gratis siempre a todo México» y la sección de Buen Fin; no se observó MSI, cupón ni porcentaje general en las páginas leídas.
- El checkout retail quedó sin verificar (no hay botón de compra ni pagos en el texto extraído); solo se documentaron los pagos del canal mayoreo (transferencia, depósito, tarjetas).
- Tinta, Radio Gandhi y Eventos existen como navegación de primer nivel, pero su contenido no se leyó; la app de cliente tampoco se verificó (la app citada por VTEX es de vendedores).
- Una ficha quedó sin leer en vivo por 429 (COLL WORKS) y no se reintentó, por regla del proyecto.
