# F1 — FRONT END · Ki'Xocolatl (kixocolatl.mx)

- **Frente:** F1 (front end) — WO-E-LARPING, Fase 2
- **Sitio:** Ki'Xocolatl — https://kixocolatl.mx/
- **Fecha de investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Investigador:** frente F1 (subagente, sin navegador en vivo, sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto con la empresa)
- **Método:** lectura de la home vía servicio de lectura de páginas + búsqueda web pública. No se usó navegador en vivo.

> **Aviso de cobertura limitada (leer primero):** el servicio de lectura de páginas devolvió **429 (límite de peticiones)** al intentar leer la página "Acerca de" y, por regla de la WO, **no se reintentó**. Solo se pudo leer directamente **una página: la home**. Todo lo demás de este informe (colecciones, producto, carrito, checkout, búsqueda, políticas) se documenta como **NO VERIFICADO** o, cuando existe, a partir de fragmentos del índice de búsqueda y prensa externa, con su fecha y su límite declarados. **Nada de lo no leído se presenta como observado.**

## Etiquetas usadas en todo el documento

- **OBSERVADO** — visto directamente en una página leída o en un resultado de búsqueda, con URL y fecha.
- **INFERIDO** — deducción a partir de evidencia citada, con confianza declarada.
- **HIPÓTESIS** — idea derivada, marcada como tal, sin evidencia directa.
- **NO VERIFICADO** — no se pudo comprobar con las fuentes disponibles en esta sesión.

---

## 0. Contexto del encargo

- **OBSERVADO (encargo):** Ki'Xocolatl es **sustituto de Cervecería Minerva** en la lista de la Fase 2. Según el encargo, cervezaminerva.mx muestra "Coming Soon" (parking del hosting) y Minerva vende vía Amazon/Mercado Libre/retail, sin tienda propia.
- **NO VERIFICADO (por este frente):** este frente **no comprobó** el estado de cervezaminerva.mx; se consigna solo como contexto dado por el encargo, no como hallazgo propio.
- **OBSERVADO:** Ki'Xocolatl es una chocolatería de chocolate mexicano artesanal, originaria de Mérida, Yucatán, con boutiques físicas y tienda en línea. Su fundador es el chocolatier Mathieu Brees. Fuentes: home (13 nov 2026) y prensa citada abajo.

---

## 1. Plataforma

### 1.1 Evidencia directa

- **OBSERVADO** — Todas las imágenes de la home servidas por el lector provienen de rutas bajo el dominio propio con patrón Shopify CDN:
  - `https://www.kixocolatl.mx/cdn/shop/files/IMG_1954_{width}x.png?v=1689291577`
  - `https://www.kixocolatl.mx/cdn/shop/files/chocopremium_{width}x.jpg?v=1614315730`
  - `https://www.kixocolatl.mx/cdn/shop/files/mathieu-brees-chocolatier-kixocolatl_570x339.jpg?v=1613791308`
  - `https://www.kixocolatl.mx/cdn/shop/files/3_eac0f8a5-28da-4983-b2f0-1d014e6ea800_{width}x.jpg?v=1694715446`
  - Fuente: lectura de https://kixocolatl.mx/ , rastreada 13 nov 2026 19:49 UTC.
- **OBSERVADO** — El título de la pestaña/home es "Ki'Xocolatl | Compra chocolate mexicano en línea". Fuente: misma lectura, 13 nov 2026.

### 1.2 Inferencia

- **INFERIDO (confianza alta):** el sitio corre sobre **Shopify**. Evidencia: el patrón `/cdn/shop/files/` con parámetros `{width}x` y `?v=` (versionado de assets) es la firma del CDN de Shopify servido bajo dominio propio; el parámetro `{width}x` corresponde al redimensionado responsivo de imágenes de Shopify. No se observó código fuente, `products.json`, ni pie de página, por lo que no se afirma versión de tema ni apps instaladas.
- **INFERIDO (confianza media):** las imágenes con `?v=1613791308` / `?v=1614315730` (feb–mar 2021 aprox., por epoch) y `?v=1689291577` / `?v=1694715446` (2023) sugieren que **buena parte de los assets de la home no se renueva desde 2021–2023**. Es inferencia por fecha de versionado, no una fecha de publicación verificada de la página.

### 1.3 NO VERIFICADO

- Tema de Shopify, apps instaladas (reseñas, upsell, chat, etc.), proveedor de pagos, pasarela de checkout, dominio de checkout, ni certificado. **NO VERIFICADO** — no se pudo leer código fuente ni pie de página.

---

## 2. Home — https://kixocolatl.mx/

Lectura directa: **OBSERVADO**, 13 nov 2026, rastreo 19:49 UTC. La extracción de texto del lector devolvió solo 28 líneas (el lector no reprodujo menú de navegación, footer, grid de productos ni banners promocionales, si los hay). **Lo que sigue es exactamente lo que devolvió la lectura; el orden es el de la extracción, no necesariamente el orden visual real.**

### 2.1 Secciones en el orden extraído

1. **Titular principal:** "Vive la experiencia ki'xocolatl®" — **OBSERVADO**.
2. **Texto de presentación:** "Visita nuestras boutiques físicas en la República Mexicana y compra el mejor cacao, marquetas, confitados, barras y ediciones especiales." — **OBSERVADO**. Nótese: la home **empuja lo físico (boutiques) al mismo nivel que la compra en línea**; enumera las familias de producto: cacao, marquetas, confitados, barras, ediciones especiales.
3. **Bloque "CHOCOLATE PREMIUM / 75% CACAO":** "Conoce nuestro Chocolate 100% Sustentable. Certificado por Cacao Trace. Ideal para postres, coberturas y más." — **OBSERVADO**. (Imagen asociada: `chocopremium_...jpg`.)
4. **Bloque "KI'XOCOLATL EN TU COCINA"** — **OBSERVADO** (solo el encabezado; sin texto descriptivo en la extracción).
5. **Bloque "EL MEJOR CACAO DE MÉXICO"** — **OBSERVADO** (solo el encabezado; sin texto descriptivo en la extracción).
6. **Bloque fundador:** "Mathieu Brees, el reconocido Chocolatier Mexi-Belga es uno de los Fundadores de Ki'Xocolatl. Conoce más sobre su historia." — **OBSERVADO**. (Imágenes asociadas: retrato de Mathieu Brees y su logo.)

### 2.2 Lo que NO apareció en la extracción de la home

- **NO VERIFICADO:** menú de navegación (categorías, buscador, cuenta, carrito), hero/banner promocional, grid o carrusel de productos, precios en home, banner de Buen Fin, newsletter, footer (envíos, contacto, políticas, redes), selector de idioma/moneda. **La ausencia en la extracción no prueba ausencia en la página**: el lector devolvió una versión muy parcial (28 líneas, sin navegación ni footer). No se afirma que no existan.
- **OBSERVADO (negativo parcial):** en el texto extraído de la home **no aparece ninguna mención al Buen Fin, descuento, porcentaje, cupón ni "oferta"**. Con el límite anterior: es lo que devolvió la lectura, no una certificación de que la home no tenga banner promocional (un banner gráfico no deja texto en esta extracción).

### 2.3 Contenido y mensajes comerciales de la home

- **OBSERVADO:** los tres pilares del mensaje son: (a) **experiencia / boutiques físicas** ("Vive la experiencia…", "Visita nuestras boutiques físicas"); (b) **origen y sustentabilidad** ("100% Sustentable", "Certificado por Cacao Trace", "EL MEJOR CACAO DE MÉXICO"); (c) **autoridad del fundador** (Mathieu Brees, "Chocolatier Mexi-Belga", "reconocido").
- **OBSERVADO:** el uso culinario es un ángulo explícito: "Ideal para postres, coberturas y más" y la sección "KI'XOCOLATL EN TU COCINA" — el chocolate se vende también como **insumo de cocina/repostería**, no solo como confitería para consumo directo.
- **INFERIDO (confianza media):** la home funciona más como **escaparate de marca y derivador a boutiques** que como tienda agresiva: en el texto extraído no hay llamadas a "comprar", precios ni urgencia. Es inferencia sobre el texto parcial disponible, no sobre el diseño visual completo.

---

## 3. Colecciones / catálogo

- **NO VERIFICADO:** no se pudo leer ninguna página de colección. Las búsquedas `site:kixocolatl.mx collections` y `"kixocolatl.mx/collections" OR "kixocolatl.mx/products"` **no devolvieron ninguna URL interna de colección o producto** (13 nov 2026). El índice de búsqueda solo expone la home y la página "Acerca de".
- **OBSERVADO (fuente secundaria — ficha de lugar, no navegación del sitio):** un listado de lugar de Ki'Xocolatl Mérida Norte enumera como "Selection of Offerings": **"Chocolate sin azúcar, Confitados, Especiales, Higiene y belleza, Repostería"**. Fuente: resultado de búsqueda de lugares, kixocolatl.mx, sin fecha de actualización declarada. **No es la navegación del sitio**: se consigna como indicio de las familias de producto, no como estructura de colecciones.
- **OBSERVADO (prensa, contexto de catálogo):** según Dónde Ir (Polanco, 7 jul 2023), en boutique hay "chocolate blanco, oscuro, semi-amargo y amargo, algunos snacks como almendras cubiertas de chocolate, mole y su línea de chocolates sin azúcar hasta café de grano y productos profesionales de repostería", además de "shampoo, cremas y jabón líquido y en barra" (línea de cuidado corporal con cacao). Según Yucatán Today (oct 2024, actualizado 13 nov 2024), hay además "chocolates veganos", "línea sin azúcar", "frappés", "chocolate caliente", colaboración con Donia Way (sabores Cochinita Pibil, Tostadas de Coco, Poc Chuc) y asociación con Choco-Story (museo del chocolate). **Estas son líneas de boutique física según prensa de 2023–2024; NO VERIFICADO que todas estén en el catálogo en línea ni con qué nombres de colección.**
- **NO VERIFICADO:** nombres y URLs de colecciones, número de productos, filtros, ordenamiento, paginación, etiquetas, colecciones de temporada o de regalo.

---

## 4. Página de producto (ficha estándar)

- **NO VERIFICADO:** no se pudo leer **ninguna** página de producto. No se documenta ficha estándar real (precio, disponibilidad, variantes, galería, descripción, reseñas, botón de compra, envíos, upsells). Todo lo de esta sección es contexto externo, no ficha observada.

### 4.1 Contexto de precios (externo, NO precios vigentes del sitio)

- **OBSERVADO (prensa desactualizada, no usar como precio actual):** Dónde Ir (7 jul 2023) reporta "las barras cuestan $110 pesos la pieza" en boutique Polanco. Es un dato de **2023, de tienda física**, no del e-commerce y no vigente a 13 nov 2026.
- **NO VERIFICADO:** no se encontró ningún precio vigente de kixocolatl.mx (ni en home, ni en buscador, ni en prensa reciente). **No se reporta ningún precio de producto de este sitio como vigente.**

### 4.2 Reseñas

- **NO VERIFICADO:** no se observó sistema de reseñas en el sitio (no se leyó ninguna ficha de producto).
- **OBSERVADO (no es del sitio — no confundir):** la ficha de lugar de Ki'Xocolatl Santa Lucía (C. 60 462, Mérida) muestra **4.7 estrellas basadas en 48 reseñas** en el proveedor de lugares, y la de Mérida Norte no muestra rating. Fuente: resultados de búsqueda de lugares, 13 nov 2026. **Esto es reputación del local físico en un directorio externo, no reseñas on-site ni prueba social del e-commerce.**

### 4.3 Disponibilidad, variantes, envíos

- **NO VERIFICADO:** stock, variantes (gramaje, % cacao, sabor, paquetes), envío a todo México, envío gratis, tiempos de entrega, métodos de pago, meses sin intereses. Nada de esto se pudo leer.

---

## 5. Carrito y checkout

- **NO VERIFICADO:** no se pudo observar el carrito (drawer o página), ni el checkout. No se añadió nada al carrito (prohibido por el encargo) y no se pudo leer ni `/cart` ni el checkout. Por tanto **no se documentan**: pasos del checkout, campos, métodos de pago, costos de envío, impuestos, upsells, ni sellos de confianza.
- **INFERIDO (confianza media, solo por plataforma):** al ser Shopify (inferencia §1.2), el checkout estándar sería el de Shopify con sus métodos habituales; **esto no se afirma como observado** y no se detalla, porque la configuración real (pasarelas activas en México, MSI, envío) es decisión del comerciante y no se verificó.

---

## 6. Búsqueda y UX de navegación

- **NO VERIFICADO:** no se pudo observar buscador interno, menú, mega-menú, breadcrumbs, filtros, ni comportamiento móvil/escritorio. La extracción de la home no incluyó navegación.
- **OBSERVADO (limitación del lector):** la extracción de texto de la home fue mínima (28 líneas, sin nav ni footer), lo que **impide cualquier juicio de UX** desde esta sesión. No se emiten juicios de usabilidad, velocidad percibida ni arquitectura de información.
- **HIPÓTESIS:** dado que el lector de texto no reprodujo navegación ni footer, es plausible que la home cargue gran parte de su contenido (menú, grid de productos, footer) vía plantillas/JS que el extractor no volcó, o que el extractor trunque. Es hipótesis sobre la herramienta, no sobre el sitio.

---

## 7. Contenido y mensajes comerciales (marca)

### 7.1 Página "Acerca de" — solo fragmentos del índice de búsqueda

La página https://www.kixocolatl.mx/pages/acerca-de-kixocolatl **no pudo leerse directamente (429, sin reintento)**. Lo que el índice de búsqueda muestra de ella (rastreo: 1 día antes / 3 horas antes de la consulta, 13 nov 2026):

- **OBSERVADO (fragmento de buscador):** "Ki'Xocolatl es el resultado del trabajo de productores de cacao mexicanos, quienes dan su máximo para que tú disfrutes la mejor calidad y sabor en cada uno de sus productos. Sus fundadores son de Bélgica pero mexicanos de corazón. El respeto y cuidado por México los impulsa a seguir creando el mejor chocolate y productos de cacao. El viaje de Ki'Xocolatl inició con cacaoteros de Chiapas y Tabaso [sic] pero más tarde se abrió la Plantación Ticul, 289 hectáreas en el sur del estado de Yucatán que ha crecido más y más con los años. Ki'Xocolatl lleva a tu paladar la mejor calidad, del grano a la barra en cada uno de sus productos."
- **OBSERVADO (fragmento de buscador):** la página tiene un bloque "KI'XOCOLATL PROMUEVE" con los puntos "RESCATAR CACAO CRIOLLO" y "CONSUME CACAO MEXICANO" ("Impulsamos el consumo del Cacao 100% mexicano ayudando a productores").
- **Advertencia:** son **fragmentos del índice**, no lectura completa; puede haber más secciones no visibles.

### 7.2 Ángulo regalo / turismo

- **OBSERVADO (prensa):** Yucatán Today (oct 2024) recomienda explícitamente como **souvenirs** "las tabletas de sabores con descripciones en tres idiomas y las marquetas de trocitos de chocolate", y describe la marca como "un homenaje a la rica cultura mexicana" y "embajador del sabor mexicano". También señala presencia en "hoteles, tiendas, supermercados y farmacias".
- **OBSERVADO (prensa):** Food and Travel México describe la boutique CDMX (Roma, Frontera 132) como destino para "amantes del chocolate" y Dónde Ir (2021) subraya que "en Yucatán y la Riviera Maya los chocolates de Ki'Xocolatl son muy reconocidos y están entre los favoritos de turistas".
- **INFERIDO (confianza media):** el ángulo **regalo/turismo/souvenir** es central en la marca (tabletas trilingües, marquetas, boutiques en zonas turísticas: Santa Lucía, Paseo de Montejo, Roma, Polanco, Condesa). Pero **NO VERIFICADO** si la tienda en línea tiene una colección, bundle o mensaje de "regalo" / "souvenir" — no se pudo leer el catálogo.
- **OBSERVADO (red física, prensa 2024):** "cuatro sucursales en Mérida y otras ocho en diferentes estados de la república" (Yucatán Today, oct 2024, actualizado 13 nov 2024). Sucursales Mérida citadas: Plaza Galerías (Calle 60 x 20-B, Revolución), Mérida Norte (Av. Cámara de Comercio x Andrés García Lavín, San Antonio Cucul), Santa Lucía (Calle 60 x 55, Parque de Santa Lucía). En CDMX: Roma (Frontera 132), Polanco (Óscar Wilde 9H) y Condesa (Citlaltépetl 68) según Dónde Ir y fichas de lugar. **Estas direcciones son de prensa/fichas, no de la web oficial leída; su vigencia a nov 2026 NO VERIFICADA.**

---

## 8. Buen Fin 2026 — ¿hay promo visible?

- **OBSERVADO (contexto general):** El Buen Fin 2026 corre del **13 al 17 de noviembre de 2026** (confirmado por varias fuentes: Milenio 5 nov 2026; Scotiabank, vigencia 13–17 nov 2026). Hoy, 13 nov, es el primer día.
- **OBSERVADO (negativo parcial):** en el texto extraído de la home **no aparece ninguna mención al Buen Fin, descuento o promoción**. Ver §2.2: la extracción fue parcial, así que no certifica ausencia de banner gráfico.
- **NO VERIFICADO:** búsqueda "Ki'Xocolatl Buen Fin 2026 descuento promoción" (13 nov 2026) **no devolvió ningún resultado sobre una promoción de Ki'Xocolatl** (los resultados fueron de Kiehl's, Xiaomi, Scotiabank y gobiernos estatales). No se encontró evidencia pública de promo Buen Fin de la marca.
- **Conclusión honesta:** **no se puede afirmar ni que tenga promo ni que no la tenga**. Si la hay, no dejó rastro en la home extraída ni en el índice de búsqueda. Por tanto **no hay precio estructural vs. precio promo que distinguir en este informe**: no se documentó ningún precio vigente.

---

## 9. Rendimiento observado

- **OBSERVADO:** la home respondió y fue rastreada por el lector el 13 nov 2026 19:49 UTC (hace menos de 1 minuto al momento de la lectura). El sitio está **activo**.
- **NO VERIFICADO:** no se midió ni se estima tiempo de carga, Lighthouse, Core Web Vitals, peso de página ni nº de peticiones. **No se inventan métricas.** La única observación cualitativa es que la extracción de texto del lector fue inusualmente pobre (28 líneas), lo que puede deberse a la herramienta y no al sitio (ver hipótesis §6).
- **OBSERVADO:** las imágenes de la home usan el CDN de Shopify con versionado (`?v=`), lo que implica caché de assets con invalidación por versión (**INFERIDO**: práctica estándar de Shopify, no medición).

---

## 10. Hallazgos aprovechables para la WO (derivados solo de lo observado)

1. **Plataforma replicable y barata de imitar:** Shopify con CDN propio; la lección operativa es que una tienda artesanal mexicana puede correr en Shopify estándar sin desarrollo a medida visible. (INFERIDO de §1.)
2. **La home vende marca y origen, no precio:** sustentabilidad (Cacao Trace), fundador con autoridad (Mathieu Brees), "del grano a la barra", plantación propia (Ticul, 289 ha). Es el patrón de "prueba de origen" que la WO busca. (OBSERVADO.)
3. **Omnicanal físico-digital:** la home deriva a boutiques al mismo nivel que a la compra en línea; el e-commerce parece el complemento de 12 boutiques, no el canal único. (OBSERVADO home + prensa.)
4. **Ángulo souvenir/regalo con evidencia externa:** tabletas trilingües y marquetas como souvenir recomendado; sabores con platillos regionales (Cochinita Pibil, Poc Chuc) como diferenciador de producto. (OBSERVADO prensa; NO VERIFICADO en el catálogo en línea.)
5. **Producto más allá del chocolate:** repostería profesional (cacao para postres/coberturas), línea sin azúcar/vegana, y cuidado corporal con cacao — diversificación de ticket. (OBSERVADO home + prensa; NO VERIFICADO en línea.)

---

## 11. Tabla final — observado / inferido / hipótesis / no verificado

| # | Afirmación | Etiqueta |
|---|---|---|
| 1 | Sitio activo; home rastreada 13 nov 2026 19:49 UTC; título "Ki'Xocolatl \| Compra chocolate mexicano en línea" | OBSERVADO |
| 2 | Home: "Vive la experiencia ki'xocolatl®" + boutiques físicas + cacao/marquetas/confitados/barras/ediciones especiales | OBSERVADO |
| 3 | Home: bloque "CHOCOLATE PREMIUM 75% CACAO", "100% Sustentable. Certificado por Cacao Trace. Ideal para postres, coberturas y más" | OBSERVADO |
| 4 | Home: secciones "KI'XOCOLATL EN TU COCINA" y "EL MEJOR CACAO DE MÉXICO" (solo encabezados en la extracción) | OBSERVADO |
| 5 | Home: bloque fundador Mathieu Brees, "Chocolatier Mexi-Belga", "uno de los Fundadores" | OBSERVADO |
| 6 | Imágenes de home servidas desde `www.kixocolatl.mx/cdn/shop/files/` con `{width}x` y `?v=` | OBSERVADO |
| 7 | Fragmentos "Acerca de" (índice de búsqueda): productores mexicanos, fundadores belgas, Plantación Ticul 289 ha, "del grano a la barra", "RESCATAR CACAO CRIOLLO", "CONSUME CACAO MEXICANO" | OBSERVADO (fragmento de buscador, no lectura directa) |
| 8 | Prensa: 4 sucursales Mérida + 8 en otros estados; tabletas trilingües y marquetas como souvenirs; sabores regionales (Cochinita Pibil, Poc Chuc); línea sin azúcar/vegana; cuidado corporal con cacao | OBSERVADO (prensa 2021–2024) |
| 9 | Prensa 2023: barras a $110 en boutique Polanco | OBSERVADO (prensa desactualizada, no precio vigente) |
| 10 | Ficha de lugar Santa Lucía: 4.7 estrellas / 48 reseñas (directorio externo, local físico) | OBSERVADO (no es reseña on-site) |
| 11 | Buen Fin 2026: 13–17 nov 2026 | OBSERVADO |
| 12 | En el texto extraído de la home no aparece mención al Buen Fin/descuento | OBSERVADO (parcial, no certifica ausencia) |
| 13 | Plataforma: Shopify | INFERIDO (confianza alta, por patrón CDN §1) |
| 14 | Assets de home con versionado 2021–2023: contenido de home posiblemente sin renovar desde entonces | INFERIDO (confianza media) |
| 15 | La home prioriza marca/origen/boutiques sobre venta directa con precio | INFERIDO (confianza media, sobre texto parcial) |
| 16 | Ángulo regalo/turismo/souvenir central en la marca | INFERIDO (confianza media, por prensa + ubicaciones) |
| 17 | Checkout estándar Shopify (métodos no detallados) | INFERIDO (confianza media, solo por plataforma) |
| 18 | La pobreza de la extracción se debe a la herramienta o a carga vía plantillas/JS, no al sitio | HIPÓTESIS |
| 19 | Nombres/URLs de colecciones, nº de productos, filtros, ordenamiento | NO VERIFICADO |
| 20 | Ficha de producto: precio vigente, disponibilidad, variantes, galería, descripción, reseñas on-site, botón de compra | NO VERIFICADO |
| 21 | Carrito (drawer/página) y checkout: pasos, pagos, envíos, MSI, upsells | NO VERIFICADO |
| 22 | Buscador interno, menú/navegación, footer, políticas (envíos, devoluciones, privacidad, T&C) | NO VERIFICADO |
| 23 | Existencia o ausencia de promo Buen Fin en el sitio | NO VERIFICADO |
| 24 | Rendimiento: Lighthouse, Core Web Vitals, tiempos de carga | NO VERIFICADO (no medido) |
| 25 | Tema Shopify, apps, pasarelas de pago activas | NO VERIFICADO |
| 26 | Vigencia a nov 2026 de sucursales y precios de prensa 2021–2024 | NO VERIFICADO |
| 27 | Estado de cervezaminerva.mx ("Coming Soon") | NO VERIFICADO por este frente (contexto del encargo) |

---

## 12. Fuentes consultadas

1. https://kixocolatl.mx/ — lectura directa del servicio de lectura, rastreo 13 nov 2026 19:49 UTC (única página leída directamente).
2. https://www.kixocolatl.mx/pages/acerca-de-kixocolatl — **intento de lectura fallido: 429, sin reintento** (regla WO); solo fragmentos visibles en el índice de búsqueda (rastreo del índice: 1 día / 3 horas antes de la consulta, 13 nov 2026).
3. Búsquedas web (13 nov 2026): "Ki'Xocolatl kixocolatl.mx chocolate mexicano tienda en línea"; "kixocolatl.mx Shopify chocolate Mérida"; "site:kixocolatl.mx collections"; "site:kixocolatl.mx products barra chocolate precio"; "\"kixocolatl.mx/collections\" OR \"kixocolatl.mx/products\""; "\"kixocolatl\" tienda en línea comprar barra cacao precio pesos"; "Ki'Xocolatl Buen Fin 2026 descuento promoción"; "Ki'Xocolatl sucursales boutiques Mérida Ciudad de México envíos".
4. https://yucatantoday.com/blog/kixocolatl-chocolate-artesanal-de-sabores-unicos-mexicanos — prensa, ed. impresa nº 442 oct 2024, actualizado 13 nov 2024.
5. https://dondeir.com/ciudad/boutique-chocolateria-kixocolatl-colonia-roma/2021/07/ — prensa, 7 jul 2021.
6. https://dondeir.com/ciudad/kixocolatl-chocolates-de-cacao-mexicano-ahora-en-polanco/2023/07/?amp=1 — prensa, 7 jul 2023.
7. https://foodandtravel.mx/page/536/ — Food and Travel México, archivo (tienda CDMX Roma).
8. https://emprendedor.com/10-marcas-de-chocolates-mexicanos-para-regalar-en-el-dia-del-amor-y-la-amistad/ — 14 feb 2025.
9. Fichas de lugar de Ki'Xocolatl (Mérida Norte, Santa Lucía, Condesa) vía resultados de búsqueda, 13 nov 2026 (direcciones, horarios, rating de local físico).
10. Contexto Buen Fin 2026 (13–17 nov): https://www.milenio.com/estados/anuncian-descuentos-de-buen-fin-2026-en-coahuila (5 nov 2026) y https://www.scotiabank.com.mx/promociones/buenfin.aspx .

## 13. Límites de este informe

- **429 sin reintento:** el servicio de lectura devolvió 429 al intentar leer "Acerca de" y, por regla de la WO y del encargo, no se reintentó ni se rodeó por otra vía (ni curl, ni otro endpoint). Por eso **solo la home fue leída directamente**.
- **Sin navegador en vivo:** no se pudo interactuar con el sitio (menús, filtros, buscador, carrito, checkout), ni ver el diseño visual real, ni el footer, ni banners gráficos. La extracción de texto de la home fue mínima (28 líneas) y puede haber omitido contenido real.
- **Sin compras ni carrito:** por encargo, no se añadió nada al carrito ni se inició checkout.
- **Índice de búsqueda pobre:** el buscador no indexa URLs internas de colecciones/productos de kixocolatl.mx; no se pudo descubrir ninguna URL interna verificable, por lo que no se inventó ninguna.
- **Prensa desactualizada:** los datos de catálogo, sucursales y precios externos son de 2021–2024 y se marcan como tales; no sustituyen la observación del sitio.
- **Buen Fin:** al ser 13 nov (día 1), cualquier promo podría aparecer o cambiar durante 13–17 nov; lo reportado es solo lo visible el 13 nov 2026 en las fuentes consultadas.
- **Sin datos personales:** no se extrajo ni se buscó ningún dato personal; no se rastreó actividad fuera de perfiles.

---

*Fin del informe F1 — Ki'Xocolatl — 13 nov 2026.*
