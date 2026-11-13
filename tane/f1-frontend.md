# F1 — Front end · TANE

- **Sitio:** https://tane.mx/ (redirige / opera en https://mx.tane.com/)
- **Fecha de investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F1 (front end) — Fase 2, WO-E-LARPING
- **Método:** fuentes públicas únicamente (lectura de páginas públicas y búsqueda web; descarga del HTML público para verificar plataforma y contenido). Sin navegador en vivo, sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto con la empresa, sin extracción de datos personales.

## Reglas de lectura

Cada afirmación lleva una etiqueta:

- **OBSERVADO** — visto directamente, con URL y fecha.
- **INFERIDO** — deducción a partir de evidencia citada, con confianza (alta / media / baja).
- **HIPÓTESIS** — derivada, marcada como tal, sin evidencia directa.
- **NO VERIFICADO** — no se interrogó la fuente o no se pudo comprobar; no es ausencia.

No se inventan métricas de rendimiento, precios, funcionalidades ni textos que la lectura no expuso. Los precios citados son los leídos el 13 nov 2026 y pueden estar afectados por la temporada: donde el dato lo permite se distingue precio estructural de promo de temporada (ver §8).

---

## 1. Plataforma

**OBSERVADO** — El sitio corre sobre **Shopify**, con Cloudflare por delante. Evidencia leída el 13 nov 2026:

- `https://tane.mx/` responde **301** a `https://mx.tane.com/`, con cabeceras `x-redirect-reason: primary_domain_redirection`, `powered-by: Shopify`, `shopify-complexity-score: 10`, `Server: cloudflare` y `cf-cache-status: DYNAMIC`.
- El HTML de la home declara la tienda `tane-mx.myshopify.com` y `shop_id: 173310`; los assets viven en `mx.tane.com/cdn/shop/t/70/assets/` (`theme.dev.js`, `custom.js`, `vendor.js`) y en `cdn.shopify.com`.
- Título de la home: **"TANE México 1942 | La casa Mexicana de joyería de lujo"** — https://tane.mx/
- Meta description leída en el HTML: *"Descubre joyería de lujo en plata y oro hecha a mano por artesanos de TANE. Diseño mexicano icónico con más de 80 años de tradición."*

**OBSERVADO** — Scripts de terceros presentes en el código fuente de la home (su sola presencia no prueba uso activo, ver inferencia abajo): Klaviyo (`a.klaviyo.com`, `static.klaviyo.com/onsite/js/XusFWj/klaviyo.js`), Zendesk (`static.zdassets.com/ekr/snippet.js`), Salesforce Messaging (`tane.my.site.com/ESWMessagingTaneChannelEn1771369465673/`), HulkApps Form Builder, un widget social de Shopify y `Shopify.SignInWithShop` / portable wallets.

**INFERIDO (confianza media)** — La tienda usa Shopify como plataforma de comercio, Cloudflare como CDN/protección, Klaviyo para email marketing y Zendesk/Salesforce para soporte/chat. La confianza es media porque la presencia de un script en el fuente no garantiza que la función esté activa o configurada; no se probó ningún formulario ni chat.

**INFERIDO (confianza alta)** — El dominio canónico operativo es `mx.tane.com`; `tane.mx` es solo la puerta de entrada que redirige. Toda la navegación, los productos y las páginas de políticas viven en `mx.tane.com`.

---

## 2. Home — secciones en orden

**OBSERVADO** — Orden de las secciones según el orden del documento HTML leído el 13 nov 2026 (el orden visual no se verificó sin navegador en vivo; el orden del DOM es el que se reporta):

1. Barra de anuncio: *"Hasta 18 MSI en compras a partir de $15,000 MXN\* — Consulta Términos y Condiciones"*.
2. Cabecera: logo TANE, menú **Joyería** (mega-menú), enlaces **Shop global farretch** [sic], **TANE USA**, **Contacto**, **Embajadores**, **Buscar**, **Mi cuenta**, **wishlist**, **Bolsa $ 0 (0)**.
3. Slideshow principal de **2 imágenes** (alt genérico *"Slideshow Image 1/2"*; la lectura de texto no expuso ningún titular ni copy del hero).
4. **"TE PODRÍA GUSTAR"** — 6 productos de Xocolate por TANE con precio y botón *"Agregar al carrito"*.
5. Banner editorial **"Un símbolo de amor eterno, ahora en vermeil rosa"** — presenta el Corazón Anudado Vermeil Rosa (plata .925 y vermeil de oro rosa de 18 quilates), con botón *"Compra ahora"*.
6. Bloque **Lanzamiento** — 4 piezas nuevas de Lazos (gargantilla, pulseras y anillo; algunas con diamantes).
7. **"CATEGORÍAS QUE TRANSMITEN LA IDENTIDAD DE TANE"** — Collares, Anillos, Aretes, Pulseras, *"Ver todo"*, con parrilla de productos y **adición rápida** (selector de talla directo en la parrilla, sin entrar a la ficha).
8. Bloque **TANE RACING** — dijes, esclava y llavero de llanta, más la Réplica oficial del trofeo de Fórmula 1 Gran Premio de la Ciudad de México (con etiqueta *"Lanzamiento"*).
9. **"DESCUBRE TUS COLECCIONES FAVORITAS"** — tarjetas de colección con conteo de productos (ver §3).
10. Franja de beneficios (10 íconos con texto): entrega a toda la República sin costo de 1 a 5 días; mismo o próximo día en CDMX y ZM; *"Paga seguro y disfruta MSI con PayPal"*; 60 días para cambios y devoluciones; *"De cortesía, graba tu joya TANE para personalizarla"*; Personal Shopping vía `concierge@tane.mx`; empaque para regalo de cortesía; *"Evaluación de nuestros clientes al servicio de venta"*; pago seguro con tarjeta o PayPal; *"Reserva una cita virtual con nuestros expertos"*.
11. Newsletter: *"Accede a novedades y ediciones especiales"* (captura de email).
12. Footer: Servicio al cliente (Preguntas frecuentes, Formas de pago, Envíos y devoluciones, Composturas/mantenimiento/limpieza, Términos de venta, Términos de promociones, Guía de tallas, Guía de cuidados); Contacto (Nosotros, Contáctanos, Regalos corporativos, Trofeos TANE, Código de Ética, Encuentra tu tienda, Aviso de Privacidad; +52 55 7970 TANE, hola@tane.mx, WhatsApp +52 55 9035 4644); bloque *"ACERCA DE"* (más de ocho décadas, *"la única casa de lujo mexicana de clase mundial"*); redes (Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp).

**OBSERVADO** — El mega-menú **Joyería** se organiza en: **Categorías** (Anillos, Aretes, Pulseras, Collares y Dijes, Para Ella, Para Él, Accesorios, Ver todo); **Descubre por colección** (Lazos, Xocolate, Alma, Frida Kahlo, Orbital, X de México, Ver todas las colecciones); **Descubre por material** (plata, plata con vermeil, con diamantes, oro); **Destacados** (El Arte de Celebrar, Lazos, TANE Racing, Favoritos TANE, El Arte de Regalar, Beneficios Exclusivos, Casa TANE, Arte Objeto); **Obras de Arte Objeto** y **Universo TANE** (Cicek por Yvonne Domenge, Alas de México por Jorge Marín, X de México).

**NO VERIFICADO** — El copy y las imágenes del slideshow principal: la lectura de texto solo devolvió los alt genéricos *"Slideshow Image 1"* y *"Slideshow Image 2"*. No se afirma qué muestra ni qué dice el hero; haría falta una vista visual.

**INFERIDO (confianza alta)** — La home vende por colección y por historia (Lazos, Xocolate, Alma, Frida Kahlo, Racing/F1), no por precio ni por oferta: en toda la home leída no hay ningún banner de descuento porcentual ni precio tachado (ver §8).

---

## 3. Colecciones y categorías

**OBSERVADO** — Página de colecciones (https://mx.tane.com/collections, 13 nov 2026) con conteo de productos por colección:

| Colección | Productos |
|---|---|
| Frida Kahlo por TANE | 54 |
| México Mi Amor® | 53 |
| Xocolate por TANE | 35 |
| Diamantes por TANE | 31 |
| Alma | 30 |
| TANE Racing | 22 |
| Dalia | 10 |
| Orbital por TANE | 8 |
| Bordados por TANE | 6 |
| Churumbela | 2 |
| ALU | 2 |
| Agua | 2 |

**OBSERVADO** — Colecciones por categoría en el menú: `/collections/anillos`, `/collections/aretes`, `/collections/pulseras`, `/collections/collares-y-dijes`, `/collections/para-ella`, `/collections/accesorios-mujer`, `/collections/regalos-para-el`, `/collections/joyeria-de-plata`, `/collections/joyeria-de-plata-con-vermeil`, `/collections/joyeria-de-oro`, `/collections/diamantes-por-tane`, `/collections/arte-objeto`, `/collections/casa-tane`, `/collections/favoritos-de-tane`.

**NO VERIFICADO** — Conteo de productos de la colección **Lazos por TANE** (existe como `/collections/lazos-por-tane` y como bloque destacado en la home, pero no apareció en el listado extraído de `/collections`); tampoco el número total de productos del catálogo. El endpoint público de catálogo (`/products.json?limit=250`) devolvió 250 productos, que es su límite, no el total.

---

## 4. Página de producto — ficha estándar

Se leyeron completas dos fichas y se contrastaron con el catálogo público. Estructura común **OBSERVADA** en ambas: breadcrumb (Home / …), título en mayúsculas, selector de variante, precio único en MXN, botones *"Agregar al carrito"* y *"COMPRAR AHORA"*, descripción con *"Leer más / Leer menos"*, bloque **MATERIALES** y **DIMENSIONES**, **Referencia** (SKU), franja de badges, acordeón de *"PAGOS, ENVÍOS Y DEVOLUCIONES"* (mismo texto en todas las fichas), *"TE PODRÍA GUSTAR"* y *"VISTOS RECIENTEMENTE"*.

### 4.1 Pulsera Matilda — https://mx.tane.com/products/pulsera-matilda

- **OBSERVADO** — Precio **$10,600 MXN**; precio de comparación (*compare-at*) **$0** (sin precio tachado). Una sola variante (*"Default Title"*), disponible.
- **OBSERVADO** — Materiales: plata .925; dimensiones: 180 mm de largo; referencia `01080200256`. Descripción: *"México Mi Amor nace para homenajear nuestras costumbres, los íconos de nuestro país y todas aquellas cosas que nos hacen únicos en el mundo. Elaborada en plata .925, cada pulsera se hace a mano por nuestros maestros orfebres en los talleres de la casa."*
- **OBSERVADO** — Etiqueta interna del producto en el catálogo público: `no_buen_fin` (ver §8).

### 4.2 Anillo Churumbela 2.0 Vermeil — https://mx.tane.com/products/anillo-churumbela-2-0-ve

- **OBSERVADO** — Precio **$13,900 MXN** en todas las tallas; sin precio tachado. Variantes por **Talla: 6, 7, 8, 9**, todas disponibles al momento de la lectura; el precio no cambia con la talla.
- **OBSERVADO** — Descripción: cinco anillas diferentes, plata .925 con vermeil de oro amarillo de 23 quilates y vermeil de oro rosa de 18 quilates, hecha a mano. Etiqueta interna `no_buen_fin`.

### 4.3 Anillo Lazos Torzal — https://mx.tane.com/products/anillo-lazos-torzal

- **OBSERVADO** — Precio **$28,000 MXN**; tallas **5.5, 6, 7, 7.5, 8**, todas disponibles, mismo precio en todas. Sin precio tachado.

### 4.4 Otros precios leídos en la home (13 nov 2026)

**OBSERVADO** — Gargantilla Xocolate Cadena $29,900; Pulsera Xocolate Cadena $14,900; Dije Xocolate Canutillos Diamantes $15,000; Aretes Xocolate Praliné Diamantes $14,800; Collar Xocolate Praliné Diamantes $24,500; Aretes Xocolate Praliné $9,000. En la franja de Alma: Aretes Alma Maizal $8,700; Anillo Alma Triada $9,000; Pulsera Alma Triada $8,500; Pulsera Alma Vermeil $7,800; Collar Alma $26,900. TANE Racing: Portarretratos Conmemorativo Trofeo F1 $9,900; Coleccionable Oficial Trofeo F1 $95,000; Réplica Oficial Trofeo F1 $550,000.

**OBSERVADO** — En los primeros 250 productos del catálogo público (`/products.json?limit=250`), el rango de precios es de **$2,600 a $3,300,000 MXN** y **ninguna variante tiene precio de comparación** (0 de 250 con `compare_at_price`): no hay precios tachados en esa muestra. El total del catálogo es mayor a 250 y no se verificó.

### 4.5 Disponibilidad, variantes y personalización

- **OBSERVADO** — La disponibilidad se expresa por variante (talla) en anillos; en piezas sin talla hay una única variante *"Default Title"*. La ficha de Gargantilla Xocolate Cadena muestra disponibilidad *InStock* en su JSON-LD ($29,900 MXN).
- **OBSERVADO** — **Grabado de cortesía**: la home lo anuncia (*"De cortesía, graba tu joya TANE para personalizarla"*) y los términos de promociones precisan que aplica a ciertas piezas, tarda **7 días hábiles** y no tiene costo extra. Las FAQs añaden que se pueden grabar piezas compradas en línea (máximo 5 letras) contactando a atención al cliente, y que no todas las piezas se pueden grabar por diseño o dimensiones (lo decide un maestro grabador).
- **OBSERVADO** — **TANE por Ti** (pulsera personalizable por componentes) está documentado en las FAQs, no en la navegación leída: precio inicial **$2,500**; esferas de plata $150, charms $500, letras/números $300; grabado de terminación de hasta 4 letras/números o un emoji; tallas Chica (15.5–18.5 cm) y Grande (19–22 cm); hay que completar 26 o 32 componentes según la talla; la venta es final (sin cambios, devoluciones ni cancelaciones); envío gratuito de 7 días naturales. Las FAQs indican entrar por *"la pestaña TANE por Ti en la parte superior de la página"*.
- **NO VERIFICADO** — Si el enlace/configurador de TANE por Ti es visible en la navegación actual: en el HTML de la home leído no apareció el texto *"TANE por Ti"*. No se afirma que no exista (puede cargar por menú, imagen o app); solo que la lectura de texto no lo expuso.

### 4.6 Reseñas

- **OBSERVADO** — En la lectura de texto de la home y de las dos fichas de producto **no apareció ningún módulo de reseñas**: no hay texto de *"reseñas"*, *"opiniones"*, *"estrellas"* ni puntuación, y el JSON-LD de producto **no incluye `aggregateRating`**. Las menciones de *"review"* en el código son de scripts, no de contenido visible.
- **OBSERVADO** — La franja de beneficios dice *"Evaluación de nuestros clientes al servicio de venta"*, sin estrellas, sin número y sin enlace visible en el texto extraído: es un rótulo, no una calificación observada.
- **NO VERIFICADO** — Que no exista ningún sistema de reseñas: un widget podría cargar por JavaScript/app sin dejar texto en la lectura. No se afirma su ausencia; se afirma que no fue observable por este método.

### 4.7 Garantía — dato con contradicción interna (importante)

- **OBSERVADO** — En la ficha de Pulsera Matilda aparecen **dos franjas de badges con cifras distintas**: una dice *"30 DÍAS DE GARANTÍA / ENVÍO ASEGURADO / 15 DÍAS PARA CAMBIOS"* y otra *"6 MESES DE GARANTÍA / ENVÍO ESTÁNDAR GRATUITO / 60 DÍAS PARA CAMBIOS"*. Ambas están en el mismo HTML.
- **OBSERVADO** — El texto de envíos/devoluciones de la ficha y las FAQs coinciden en **60 días para cambios y devoluciones** (ver §5), por lo que la cifra de 60 días es la documentada en texto; la de 15 días solo aparece en un badge.
- **OBSERVADO** — Para hacer válido cualquier cambio, reparación o devolución es **imprescindible presentar el certificado / folleto de garantía** y la factura o recibo. Las FAQs: *"Todas las piezas TANE cuentan con garantía de componentes y defecto de fabricación"* (sin duración en ese párrafo).
- **OBSERVADO** — **Composturas, mantenimiento y limpieza** (https://mx.tane.com/pages/composturas-mantenimiento-y-limpieza): la **limpieza no tiene costo** (en tienda mientras se espera o en taller); mantenimiento por desgaste, compostura y reposición de vermeil/caucho/madera/piel se cotizan en el **Centro de Evaluación** (precio no publicado; la pieza debe llevarse a una tienda).
- **NO VERIFICADO** — La duración única y oficial de la garantía: las dos cifras de los badges (30 días vs. 6 meses) se contradicen y ningún texto de política leído fija una duración en meses/años. No se reporta ninguna duración como hecho.

---

## 5. Carrito y checkout (solo lo observable sin comprar)

**OBSERVADO** — El carrito es un **drawer lateral ("Bolsa")** presente en todas las páginas, con: subtotal, *"Gastos de envío y descuentos calculado al momento de pagar"*, botón **"IR AL PAGO"**, campo *"Instrucciones especiales para el vendedor"*, selector de *"Opciones de entrega"* (País / Provincia / Código postal), opción *"¿Esta compra es para regalo? / Guardar dedicatoria"*, bloque *"COMPRA PARA REGALO / NOTAS PARA LA ENTREGA"* y cross-sell *"TE PODRÍA GUSTAR"* con los mismos 6 productos de Xocolate. Con el carrito vacío muestra *"Su carrito actualmente está vacío"* y *"Seguir comprando"*.

**OBSERVADO** — Mensajes de progreso del carrito (con el carrito en $0): *"¡Felicidades! Su pedido está calificado para envío gratis — Agrega $ 10,000 más para envío gratis"* y *"¡Felicidades! Su pedido está calificado para meses sin intereses — Agrega $ 10,000 más para obtener meses sin intereses"*.

**INFERIDO (confianza media)** — Esos dos mensajes se contradicen entre sí (dicen que el pedido ya califica y a la vez que faltan $10,000): lo más probable es un defecto de la plantilla cuando el carrito está vacío, no una regla comercial. Además el umbral que muestran ($10,000) **no coincide** con el mínimo de MSI de los términos ($15,000, ver §8). No se probó el carrito con productos, por lo que el comportamiento con importe real es NO VERIFICADO.

**OBSERVADO** — Formas de pago documentadas en https://mx.tane.com/pages/formas-de-pago-1: **MasterCard, VISA, AMEX, Discover** (crédito y débito), **PayPal** (con redirección a pago exprés) y **transferencia bancaria** (solo gestionándola con atención al cliente por chat, mail hola@tane.mx, WhatsApp +52 55 90 35 46 44 o teléfono +52 55 7970 TANE). Para MSI hay que seleccionar la tarjeta de crédito y aparecen las mensualidades disponibles en el checkout.
- Las FAQs añaden que comprar es seguro por **SSL** y que las tarjetas se validan con el emisor y con TANE.

**OBSERVADO** — Envíos (ficha de producto y https://mx.tane.com/pages/envio-y-devoluciones): **Estándar gratis** a toda la República, 3–5 días hábiles (CDMX y ZM 1–3 días); **Retiro en tienda — Boutique Masaryk, Polanco, gratis**, 48 h hábiles; **Mismo día CDMX/ZM $300**; **Día siguiente CDMX/ZM $150**. En temporada alta el plazo estándar se amplía (la ficha dice de 5 a 10 días; las FAQs dicen de 5 a 7 días — ver discrepancias abajo).

**OBSERVADO** — Cambios y devoluciones: **gratuitos, 60 días** desde la compra, solo para compras en tane.mx, por otro producto de igual valor, en perfectas condiciones, empaque original, etiquetas intactas, factura/recibo y folleto de garantía; los cambios de compras web se gestionan por hola@tane.mx; **no se permiten cambios en piezas personalizadas, grabadas y/o descontinuadas**; las pulseras TANE por Ti no admiten cambios, devoluciones ni cancelaciones; el departamento de calidad tarda **10 días hábiles** en validar y responder. Las devoluciones de compras en elpalaciodehierro.com solo se gestionan por ese canal.

**OBSERVADO** — Las FAQs dicen que **no es necesario registrarse para comprar** (el registro es opcional) y que tras la compra llega un email de confirmación y **no se puede cancelar ni modificar la orden una vez confirmada**. Para factura hay que pedirla por hola@tane.mx o indicarlo en el carrito.

**NO VERIFICADO** — El flujo real del checkout (no se llegó a él: no se añadió nada al carrito ni se inició sesión): métodos de pago que efectivamente aparecen, pasarela, si pide cuenta o permite invitado, opciones de envío por código postal, ni impuestos/facturación en el checkout. Tampoco se verificó el comportamiento del carrito con productos dentro.

**Discrepancias observadas entre páginas (se consignan, no se resuelven):**
1. Hora límite del envío mismo día / día siguiente: la ficha de producto dice **11:00 h** (lun–jue, entrega límite 21:00 h); las FAQs dicen **13:00 h** (lun–vie).
2. Plazo estándar en temporada alta: la ficha dice **5–10 días hábiles**; las FAQs dicen **5–7 días hábiles**.
3. Umbral de MSI: el carrito muestra **$10,000**; los términos de promociones fijan **$15,000** en una sola orden.
4. Garantía/cambios en badges de producto: **30 días / 15 días** frente a **6 meses / 60 días** (ver §4.7).

---

## 6. Búsqueda y UX de navegación

**OBSERVADO** — Buscador en la cabecera (*"Buscar"* / *"Borrar"*, ruta `/search`). La búsqueda de **"anillo"** devolvió **"254 resultados encontrados"** (https://mx.tane.com/search?q=anillo, 13 nov 2026), con filtros visibles de **Precio**, **Disponibilidad** y **Colección** (con listado de colecciones: Agua, Alas de México, Alma, Alu, Animales, Bordados, Caballero, Churumbelas, Cicek, Dalia, Diamantes por TANE, Eletra…).

**OBSERVADO** — Navegación por **colección, categoría y material** (ver §2–3); **adición rápida** desde la parrilla con selector de talla (anillos: tallas 5.5–9 y 55–110 según el modelo; esclava TANE Racing: CH/M/G); **wishlist** y **Mi cuenta** en la cabecera (`/account`); *"VISTOS RECIENTEMENTE"* en la ficha de producto.

**INFERIDO (confianza media)** — La búsqueda es la de Shopify con filtros por facetas (precio, disponibilidad, colección). No se probaron búsquedas sin resultados, con errores de ortografía ni ordenamientos, por lo que su comportamiento en esos casos es NO VERIFICADO.

**NO VERIFICADO** — Funcionamiento real de Mi cuenta y de la wishlist (no se inició sesión): no se comprobó si la wishlist guarda sin cuenta, si hay historial de pedidos visible ni qué pide el registro.

---

## 7. Contenido y mensajes comerciales (herencia, garantía, cita)

**OBSERVADO** — Herencia como eje del mensaje:
- *"TANE México 1942 | La casa Mexicana de joyería de lujo"*; footer: *"Por más de ocho décadas… la única casa de lujo mexicana de clase mundial"*.
- Página *"Acerca de nosotros"* (https://mx.tane.com/pages/acerca-de-nosotros): fundación de **Alquimística**, el taller que produce las piezas hasta hoy; colaboración con Russell Marker y reproducciones de Thomas Germain; desde 1974 fusión de arte y plata con Pedro Leites y artistas como Mathias Goeritz, Leonora Carrington, Luis Barragán, Francisco Toledo, Jorge Marín y Javier Marín, entre otros.
- Colecciones narradas por historia mexicana: México Mi Amor® (costumbres e íconos del país), Xocolate (origen ancestral del chocolate, molinillo), Alma (el maíz), Frida Kahlo, Lazos (los vínculos, henequén y torzales), TANE Racing / trofeo de F1.
- Prensa externa confirma el marco: marca fundada en **1942**, en 2010 pasó a Grupo Bal (El Palacio de Hierro) y fabrica desde 2015 el trofeo de la Fórmula 1 en México (https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/, 5 dic 2022).

**OBSERVADO** — La tienda física como parte de la venta:
- *"Encuentra tu tienda"* (https://mx.tane.com/pages/encuentra-una-tienda): pestañas Ciudad de México / Interior de la República. **Boutique TANE Masaryk, Av. Presidente Masaryk 430, Polanco, 11560 CDMX, lun–dom 11:00–19:00, tel. +52 55 2729 0195** (también sede del retiro de pedidos en 48 h y del *"Click & Collect con Drive-thru"*). En el mismo predio: **REPÚBLICA Boutique** (mismo domicilio, tel. +52 55 5282 6200) y la esquina Masaryk / Edgar Allan Poe como *"hotspot más fotografiado de México"*, visitable 24 h los 365 días.
- Corners en **El Palacio de Hierro**: Polanco (Av. Moliere 222), Santa Fe, Mitikah, Durango, Interlomas, Perisur, Satélite (lun–dom 11:00–21:00), Guadalajara, Monterrey, Puebla, Querétaro, Veracruz, Villahermosa y León.
- *"El Atelier de TANE"*: pop-up de lujo en un Airstream de 1971; la página dice *"PRONTO ANUNCIAREMOS LA PRÓXIMA PARADA"* (sin fecha ni lugar actuales).

**OBSERVADO** — La cita como servicio:
- Página *"Reserva una cita"* (https://mx.tane.com/pages/reserva-una-cita): *"Descubre a TANE de forma virtual… una exclusiva cita virtual para compartir nuestras últimas y más bellas creaciones. Durante esta experiencia exclusiva e individual, nuestros expertos te introducirán en el mundo de TANE para explorar nuestras colecciones, aconsejarte para encontrar el regalo perfecto y recomendaciones de estilismo. Una experiencia creada desde nuestra tienda insignia en Ciudad de México, para ti."* Botón: *"RESERVA AQUI TU CITA VIRTUAL"*.
- La home ofrece además **Personal Shopping** por `concierge@tane.mx` y la página de contacto promete *"asesoría personalizada"*.
- Contacto y horarios de atención: hola@tane.mx, **800-770-TANE**, +52 55 7970 TANE, WhatsApp +52 55 9035 4644; **lun–jue 8:00–17:00, vie 8:00–14:00**; formulario de contacto con nombre y apellido en https://mx.tane.com/pages/contactanos.

**NO VERIFICADO** — A dónde lleva el botón de reserva de cita virtual (formulario propio, herramienta externa, calendario) ni qué disponibilidad real ofrece: no se hizo clic. Tampoco se verificó si existe cita presencial reservable en la web (la página encontrada es solo de cita virtual).

**HIPÓTESIS** — La venta se sostiene en tres pilares que sustituyen al descuento: herencia (1942, taller propio, artistas), servicio (garantía/certificado, limpieza gratis, grabado de cortesía, composturas, cita virtual y Personal Shopping) y tienda física (Masaryk + corners en Palacio de Hierro). La evidencia de los §4–8 es coherente con esa lectura, pero la ponderación entre pilares no se midió.

---

## 8. Buen Fin 2026 y precio: el extremo opuesto del descuento

**OBSERVADO** — En el HTML de la home del 13 nov 2026 (primer día del Buen Fin) hay **cero menciones de "Buen Fin"** y cero menciones de "descuento" en el contenido visible; la única promo de la barra superior es *"Hasta 18 MSI en compras a partir de $15,000 MXN\*"*.

**OBSERVADO** — Términos de promociones (https://mx.tane.com/pages/terminos-y-condiciones-promociones, leídos 13 nov 2026), sección **":: BUEN FIN ::"**: la única promoción de Buen Fin es **pago a meses sin intereses, hasta 18 MSI**, con **monto mínimo de compra de $15,000 MXN** en una sola orden, **vigencia del 09 al 19 de noviembre de 2026**, válido únicamente en mx.tane.com, **CAT 0.0%** informativo. Sin ajuste en compras anteriores, no intercambiable por efectivo, no transferible, **no acumulable con otras promociones ni descuentos**. Los términos generales añaden: en piezas adquiridas con algún beneficio en precio no hay cambios ni devoluciones (excepción: cambio de talla en anillos si hay inventario) y **no aplica en la colección Herencia por TANE**.

**OBSERVADO** — El catálogo público refuerza la lectura: **152 de los primeros 250 productos llevan la etiqueta interna `no_buen_fin`** (Matilda y Churumbela entre ellos) y **ninguno tiene precio de comparación** (ver §4.4). La etiqueta es un dato interno del producto, no un mensaje visible en la ficha.

**OBSERVADO** — Matiz: las FAQs ofrecen **10% de descuento en la primera compra al suscribirse al newsletter**. Es el único descuento porcentual encontrado en el sitio, condicionado a dejar el email, y no es una promo de Buen Fin ni aparece como banner en la home leída.

**INFERIDO (confianza alta)** — La pista de la WO se confirma en lo observable: TANE vende en Buen Fin **sin rebajar el precio** — la palanca es financiación (18 MSI desde $15,000), no descuento. El precio es estructural (mismo precio en todas las tallas, sin precio tachado en la muestra de 250) y la temporada solo añade MSI con vigencia 9–19 nov 2026.

**NO VERIFICADO** — Si existe alguna otra promoción de Buen Fin fuera de la página de términos (por ejemplo, en el checkout, por email o en tienda física): no se llegó al checkout ni se revisó correo. Tampoco se verificó el precio de los productos excluidos del MSI ni de la colección Herencia.

---

## 9. Rendimiento observado (sin inventar métricas)

**OBSERVADO** — La home descargada el 13 nov 2026 pesa **1,809,834 bytes de HTML** (1.8 MB, con scripts y estilos en línea incluidos) y responde 200 a través de Cloudflare. Las imágenes de producto se sirven desde el CDN de Shopify (`mx.tane.com/cdn/shop/files/…` y `cdn.shopify.com`) con parámetros de ancho.

**NO VERIFICADO** — No se midió nada más: sin puntuaciones Lighthouse, sin tiempos de carga, sin Core Web Vitals, sin peso total de página con imágenes ni número de peticiones. No se afirma que el sitio sea rápido o lento; solo consta el tamaño del HTML y el uso de CDN.

---

## 10. Tabla final — observado / inferido / hipótesis / no verificado

| # | Afirmación | Etiqueta |
|---|---|---|
| 1 | Shopify + Cloudflare; `tane.mx` redirige 301 a `mx.tane.com`; tienda `tane-mx.myshopify.com` | OBSERVADO |
| 2 | Scripts de Klaviyo, Zendesk, Salesforce Messaging, HulkApps en el fuente | OBSERVADO (presencia) |
| 3 | Klaviyo = email, Zendesk/Salesforce = soporte/chat activos | INFERIDO (media) |
| 4 | Orden de secciones de la home y contenido del mega-menú Joyería | OBSERVADO (orden del DOM) |
| 5 | Copy/imágenes del slideshow principal | NO VERIFICADO |
| 6 | Conteos por colección (Frida 54, México Mi Amor 53, Xocolate 35, Diamantes 31, Alma 30, Racing 22, Dalia 10, Orbital 8, Bordados 6, Churumbela/ALU/Agua 2) | OBSERVADO |
| 7 | Conteo de Lazos y total del catálogo | NO VERIFICADO |
| 8 | Precios: Matilda $10,600; Churumbela $13,900 (tallas 6–9); Lazos Torzal $28,000 (5.5–8); Xocolate $9,000–$29,900; Racing $9,900–$550,000 | OBSERVADO |
| 9 | 0 de 250 productos con precio tachado; rango $2,600–$3,300,000 en esa muestra | OBSERVADO (muestra, límite 250) |
| 10 | Grabado de cortesía en ciertas piezas, 7 días hábiles | OBSERVADO |
| 11 | TANE por Ti: desde $2,500, 26/32 componentes, venta final, envío 7 días | OBSERVADO (FAQs) |
| 12 | Enlace/configurador de TANE por Ti visible en la navegación actual | NO VERIFICADO |
| 13 | Ningún módulo de reseñas ni `aggregateRating` visible en la lectura | OBSERVADO (ausencia en texto) |
| 14 | No existe sistema de reseñas en el sitio | NO VERIFICADO (podría cargar por JS) |
| 15 | Garantía: certificado imprescindible; limpieza gratis; composturas cotizadas en Centro de Evaluación | OBSERVADO |
| 16 | Duración única de la garantía (badges: 30 días vs. 6 meses) | NO VERIFICADO (contradicción interna) |
| 17 | Carrito drawer: subtotal, IR AL PAGO, regalo/dedicatoria, entrega por CP, cross-sell | OBSERVADO |
| 18 | Mensajes de carrito contradictorios ($10,000) y umbral distinto al de MSI ($15,000) | OBSERVADO + INFERIDO (media, defecto de plantilla) |
| 19 | Pagos: MasterCard, VISA, AMEX, Discover, PayPal, transferencia vía atención al cliente | OBSERVADO |
| 20 | Envíos: estándar gratis 3–5 días; Masaryk 48 h gratis; mismo día $300; día siguiente $150 | OBSERVADO |
| 21 | Cambios/devoluciones gratis 60 días, solo tane.mx; sin cambios en personalizadas/grabadas | OBSERVADO |
| 22 | Flujo real del checkout y carrito con productos | NO VERIFICADO |
| 23 | Búsqueda "anillo": 254 resultados; filtros Precio, Disponibilidad, Colección | OBSERVADO |
| 24 | Funcionamiento de Mi cuenta y wishlist | NO VERIFICADO |
| 25 | Tiendas: Masaryk 430 (11–19 h) + 14 corners en Palacio de Hierro; Atelier Airstream sin fecha | OBSERVADO |
| 26 | Cita virtual: página y propuesta de experiencia con expertos desde la flagship | OBSERVADO |
| 27 | Destino/disponibilidad del botón de reserva de cita | NO VERIFICADO |
| 28 | Buen Fin 2026 = solo hasta 18 MSI desde $15,000, 9–19 nov; sin % de descuento | OBSERVADO |
| 29 | 152/250 productos con etiqueta `no_buen_fin` | OBSERVADO (dato interno de catálogo) |
| 30 | 10% primera compra por newsletter | OBSERVADO (FAQs) |
| 31 | Home HTML 1.8 MB; imágenes por CDN de Shopify | OBSERVADO |
| 32 | Lighthouse / tiempos de carga / Core Web Vitals | NO VERIFICADO |
| 33 | Venta sostenida en herencia + servicio + tienda física en lugar de descuento | HIPÓTESIS |
| 34 | Discrepancias: corte mismo día 11:00 vs. 13:00; temporada alta 5–10 vs. 5–7 días | OBSERVADO (sin resolver) |

---

## Fuentes consultadas (13 nov 2026)

- https://tane.mx/ (home; crawl 19:49 UTC; HTML descargado, 1,809,834 bytes, 200)
- https://mx.tane.com/products/pulsera-matilda (200)
- https://mx.tane.com/products/anillo-churumbela-2-0-ve (200)
- https://mx.tane.com/products/gargantilla-xocolate-cad (200, vía lector)
- https://mx.tane.com/products/pulsera-matilda.js, /products/anillo-churumbela-2-0-ve.js, /products/gargantilla-xocolate-cad.js, /products/anillo-lazos-torzal.js (datos públicos de producto: precio, variantes, etiquetas)
- https://mx.tane.com/products.json?limit=250 (200; 250 productos, límite del endpoint)
- https://mx.tane.com/collections (200)
- https://mx.tane.com/search?q=anillo (200; 254 resultados)
- https://mx.tane.com/pages/acerca-de-nosotros (200, vía lector)
- https://mx.tane.com/pages/encuentra-una-tienda (200)
- https://mx.tane.com/pages/reserva-una-cita (200)
- https://mx.tane.com/pages/faqs (200)
- https://mx.tane.com/pages/formas-de-pago-1 (200)
- https://mx.tane.com/pages/envio-y-devoluciones (200)
- https://mx.tane.com/pages/composturas-mantenimiento-y-limpieza (200)
- https://mx.tane.com/pages/terminos-y-condiciones-promociones (200)
- https://mx.tane.com/pages/beneficios-por-tane (200)
- https://mx.tane.com/pages/contactanos (200)
- Búsqueda web: "TANE joyería mexicana tane.mx sitio oficial" (13 nov 2026); "TANE joyería garantía tienda física cita Buen Fin 2026" (sin resultados útiles de TANE); "tane.mx colecciones anillos collares aretes pulseras México Mi Amor" (13 nov 2026); `site:tane.mx Buen Fin descuento` (cero resultados)
- Prensa citada solo como contexto de marca: https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/ (5 dic 2022); https://gourmetdemexico.com.mx/gourmet/lujo-y-personalizacion-entre-preciosa-plateria-asi-se-vive-la-nueva-normalidad-en-tane/ (27 jul 2020); https://noirmagazine.mx/joyeria/tane-nuevas-piezas-lazos/ (29 sep 2026)

## Límites

- Sin navegador en vivo: el orden de secciones es el del DOM, no el visual verificado; el hero del slideshow no pudo leerse (alt genéricos).
- Sin inicio de sesión, sin carrito con productos y sin llegar al checkout: el flujo de pago real, Mi cuenta, wishlist y el comportamiento del carrito con importe son NO VERIFICADO.
- Sin reintentos por 429: en este frente **no se devolvió ningún 429**; todas las lecturas fueron 200 salvo dos URLs adivinadas por mí que dieron 404 (`/products/anillo-lazos-cordel` y `/pages/envios-y-devoluciones`, slugs incorrectos; los correctos son los citados en el informe) y no se reintentaron como tales.
- La ausencia de reseñas y del enlace de TANE por Ti en la lectura de texto no prueba su inexistencia: ambos podrían cargar por JavaScript o app.
- Los precios son los del 13 nov 2026, primer día del Buen Fin; la promo de temporada vigente ese día era solo MSI (9–19 nov 2026), por lo que los precios leídos se tratan como estructurales, salvo el 10% de newsletter, que es un beneficio por email.
- No se extrajeron datos personales ni se rastreó actividad fuera de perfiles públicos; no se contactó a la empresa.
