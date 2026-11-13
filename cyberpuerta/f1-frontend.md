# F1 — Front end · Cyberpuerta

- **Sitio:** https://www.cyberpuerta.mx/ (marca visible: Cyberpuerta.mx; razón social observada: Cyberpuerta S.A. de C.V.)
- **Fecha de la investigación:** 13 nov 2026, primer día del Buen Fin 2026 (13–17 nov 2026)
- **Frente:** F1 (front end) — Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura de texto de páginas mediante `browser.open` (sin navegador en vivo, sin clics, sin inicio de sesión, sin compras, sin añadir al carrito, sin contacto con la empresa) y búsqueda web pública. Las 4 lecturas exitosas se rastrearon el 13 nov 2026 ~19:49 UTC (13:49 CST).
- **Convención de este informe:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en la página, con URL y fecha), **INFERIDO** (con evidencia y grado de confianza), **HIPÓTESIS** (derivada, marcada como tal) o **NO VERIFICADO**. No se inventan métricas, precios ni funcionalidades.
- **Advertencia de temporada:** todo lo observado corresponde al primer día del Buen Fin 2026. Los precios, las promos y la disponibilidad pueden estar distorsionados por la temporada; donde el dato lo permite se distingue precio estructural de promo de temporada, y donde no, se marca como no distinguible.

---

## 1. Plataforma (inferencia de front, NO asumida)

- **INFERIDO (confianza media): plataforma propia / a medida con base OXID eShop y front en Nuxt.** Evidencia observada:
  - URLs de producto con patrón OXID clásico: `https://www.cyberpuerta.mx/Computo-Hardware/Componentes/Tarjetas-de-Video/Tarjeta-de-Video-Zotac-NVIDIA-GeForce-RTX-4060-Ti-Twin-Edge-OC-8GB-128-bit-GDDR6-PCI-Express-x8-4-0.html` y, en un resultado, `https://www.cyberpuerta.mx/index.php?cl=details&anid=581f49c5503f690c7e245ccd06cc8b2c` — el esquema `index.php?cl=details&anid=` es el de OXID eSales. OBSERVADO (en URLs devueltas por búsqueda, 13 nov 2026).
  - Rutas de assets `/out/marketing/2026/buen-fin/assets/...`, `/out/cmsp/evergreen/about-us/...` y `/out/pictures/wysiwigpro/ISO9001.svg` — el directorio `/out/` es la convención de OXID. OBSERVADO (en la extracción de las páginas Buen Fin y Quiénes somos).
  - Assets del front bajo `/pcb2/_nuxt/` (p. ej. `https://www.cyberpuerta.mx/pcb2/_nuxt/AsociacionInternet.Dev_wVd5.png`, `.../digicert.sV1lhHQ6.png`) — `_nuxt` es la marca de Nuxt.js (Vue). OBSERVADO (Quiénes somos, 13 nov 2026).
  - Ausencia de los patrones típicos de Shopify (`/collections/`, `/products/`, `cdn/shop/`), WooCommerce (`wp-content`, `/product/`) o Magento: ninguno apareció en ninguna URL observada. OBSERVADO (ausencia en el corpus leído, no prueba definitiva).
- **INFERIDO (confianza media-baja): el "pcb2" sugiere una segunda generación del portal ("Portal Cyberpuerta 2" o similar) conviviendo con rutas heredadas.** Es solo una lectura del nombre de la carpeta; no hay evidencia del significado exacto.
- **NO VERIFICADO:** versión de OXID o de Nuxt, si el back es OXID puro o un headless propio, proveedor de hosting/CDN, apps o módulos instalados, ni si hay cabecera de Cloudflare (eso corresponde al frente back end). Una fuente de terceros (Pubrio) lista "Cloudflare, Google Workspace, Amazon SES" como tecnologías de la empresa, pero es un dato de un agregador, no verificado en el front: se cita solo como pista para F2, no como hecho.
- **Consecuencia para e-larping:** si la inferencia es correcta, Cyberpuerta NO es un caso de "tienda SaaS rápida" sino de plataforma propia con años de desarrollo acumulado; no es un modelo replicable de arranque para un dropshipping nuevo sin inventario ni ads.

## 2. Home — secciones en orden

URL: https://www.cyberpuerta.mx/ — OBSERVADO 13 nov 2026, 19:49 UTC.

- **Hallazgo principal — OBSERVADO:** la extracción de texto de la home devolvió **casi nada**: solo un bloque de registro ("¿Ya tienes cuenta en Cyberpuerta? Regístrate y abre la puerta al mundo de la tecnología", con 4 bullets de beneficios: entrega rápida y segura, seguimiento del pedido, compra adaptada con recomendaciones, lista de deseos para compartir) y la descripción "Cyberpuerta es el principal retailer de tecnología y hardware en México, una empresa mexicana fundada en 2008 con productos originales de las principales marcas del mercado, garantía directa del fabricante y envíos a toda la República".
- **INFERIDO (confianza media-alta): la home es una app JS (Nuxt) cuyo contenido no se entrega como texto estático al crawler.** La extracción vacía, combinada con los assets `_nuxt`, apunta a renderizado en cliente. No es un fallo de una página: las páginas de contenido (Buen Fin, Quiénes somos, categoría SEO) sí devolvieron texto extenso.
- **NO VERIFICADO (y es la mayor laguna de este frente):** el orden real de secciones de la home, banners, hero, categorías en home, productos destacados, prueba social, header (logo, menú, buscador, cuenta, carrito), footer (enlaces legales, contacto, newsletter) y cualquier pop-up. **La ausencia en la extracción no significa ausencia en el sitio.** Queda pendiente de verificación visual con navegador en vivo.
- **HIPÓTESIS:** por la página de Buen Fin (que sí se leyó completa en su primera mitad) es probable que la home del 13 nov 2026 estuviera dominada por la campaña Buen Fin, como en F4T3; pero es una hipótesis, no una observación de la home.

### Idioma y moneda

- **OBSERVADO:** todo el copy leído está en español de México; los precios citados están en MXN. No se observó selector de idioma ni de moneda (tampoco se puede afirmar que no exista; no apareció en la extracción).

## 3. Colecciones y categorías

### 3.1 Lo observado

- **Página de Buen Fin como "colección de campaña" — OBSERVADO:** https://www.cyberpuerta.mx/Buen-Fin/ funciona como landing de campaña con acceso directo a categorías: "Lo que buscas. Directo a tu categoría." (13 nov 2026). No se observó un listado de productos en esta página (al menos en las líneas 0–285 leídas; el resto no se pudo leer por el 429, ver §9).
- **Página de categoría SEO — OBSERVADO:** https://www.cyberpuerta.mx/Laptops-RTX-4080/ ("Descubre Laptops de alta gama") es una página de texto SEO por atributo, no un listado: describe la categoría Laptops, enlaza marcas (Lenovo, ASUS, HP), tipos (Laptops Gamer) y complementos (Microsoft Office, Bases para Laptops). No muestra productos, precios, filtros ni paginación en la extracción.
- **Páginas de categoría por marca/uso — OBSERVADO (vía búsqueda):** existen URLs del tipo `https://www.cyberpuerta.mx/Hubs-y-Controles-Smart-Hubitat/`, `.../Lapices-para-Tablets-ADONIT/`, `.../Laptops-RTX-4080/`, con el mismo formato: texto descriptivo de la categoría + listado de marcas disponibles (p. ej. Hubs: LUTRON, TP-LINK, DUOSMART, SURE-FI, AKUBELA, YALE; Lápices: HUAWEI, MICROSOFT, SAMSUNG, Wacom, BROBOTIX). El listado de productos de esas páginas no apareció en los snippets: NO VERIFICADO si listan producto o solo texto SEO.
- **Estructura de URL de catálogo — OBSERVADO:** jerarquía por departamento → familia → producto, en español con guiones y sufijo `.html`: `/Computo-Hardware/Componentes/Tarjetas-de-Video/<producto>.html`, `/Apple/Mac/MacBook-Air/<producto>.html`, `/Computadoras/Laptops/Filtro/Busqueda/...` (esta última con segmentos `/Filtro/Busqueda/` que sugieren búsqueda facetada por URL).
- **Categorías / departamentos mencionados — OBSERVADO (Quiénes somos + Guías de Compra):** tarjetas de video, procesadores, memorias RAM y SSD, PCs de escritorio y laptops (gaming o trabajo), monitores, tarjetas madre, copiadoras, equipos de audio, cámaras profesionales, soluciones para hogar y oficina, impresoras, proyectores, equipos 2 en 1. Las Guías de Compra (https://www.cyberpuerta.mx/Guias-de-Compra/) cubren: Laptops, Tarjetas de Video, Impresoras, Tarjetas madre, Procesadores, Proyectores, 2 en 1, Monitores, PC de escritorio.
- **Tamaño del catálogo — OBSERVADO (afirmación de la propia tienda):** "más de 55,000 productos" (Quiénes somos y ficha de la app, 13 nov 2026). Una página más antigua de la tienda ("Compra seguro con PayPal") dice "más de 30,000 productos": **discrepancia interna observada**; el número actual que la tienda comunica es 55,000. El conteo real no se verificó (no se recorrió paginación ni se contó el catálogo).
- **NO VERIFICADO:** número de productos por colección, filtros y ordenación en listados, paginación, si las páginas de categoría muestran precio tachado o etiquetas de descuento, y el menú de navegación por departamentos.

### 3.2 Buen Fin 2026 — la campaña que domina el sitio (OBSERVADO, 13 nov 2026)

Página: https://www.cyberpuerta.mx/Buen-Fin/ (líneas 0–285 de 685 leídas; resto bloqueado por 429).

- Titular: "Tu buen momento. Tu Buen Fin." / "Encuentra ofertas para jugar, crear y trabajar." / "Hasta **12 MSI*** en toda la tienda". Vigencia: "Del 13 al 17 de noviembre". Contador: "Buen Fin empieza en: 00 Días 00 Horas 00 Minutos 00 Segundos" (la campaña ya había empezado al leerla).
- **PayPal como eje de las promos bancarias:** "Con PayPal todo suma: elige tu promoción para este Buen Fin. Paga con tu tarjeta a través de [PayPal] y elige la promoción de tu banco. 17 promociones" (el snippet de búsqueda de la misma página dice 18 promociones en otra captura — variación entre rastreos; se reportan ambas cifras tal cual, sin resolver).
- **Bloques por uso (no por producto):** "Tu PC. A tu manera. Elige las piezas. Hazla tuya." (configurador); Apple: "Tu mundo. En Apple."; "Tecnología para cada parte de ti / Más para tu día. Más para ti." con 6 bloques: EL TOQUE FINAL ("Teclados, mouse y audífonos para completar tu setup"), VIDEOJUEGOS ("Es momento de jugar. Encuentra consolas y juegos"), PARA TU OFICINA ("Que tu trabajo fluya"), PARA TU CASA ("Disfruta estar en casa"), PARA ESTUDIAR ("Ve por lo que sigue"), PARA CREAR ("Dale espacio a tus ideas").
- **Promociones bancarias detalladas (leídas, líneas 100–285):**
  - BBVA, solo 13 nov: hasta 16% de bonificación a 12 y 18 MSI vía PayPal; compra mínima $5,000 MXN; beneficio máximo $2,500 MXN por día y por cliente.
  - BBVA, 14–17 nov: hasta 15% de bonificación a 12 y 18 MSI; mismos mínimos y topes.
  - BBVA: "Paga hasta marzo de 2027 a 3 MSI", 13–17 nov; compra mínima $3,500 MXN.
  - Banorte: 15% de bonificación en compras a MSI, 13–17 nov; beneficio máximo $5,000 MXN por cuenta.
  - Banamex: hasta 30% de bonificación a partir de 12 MSI (10% base, sube con productos adicionales: Nómina, Afore, Crédito Hipotecario); compra mínima acumulable $10,000 MXN; beneficio máximo $10,000 MXN por cliente.
  - Letra pequeña común observada: descuentos, envíos, saldo de regalo y regalos (digitales hasta 24 h tras la recepción; físicos hasta 3 semanas) "limitados a disponibilidad de la marca"; "Productos de importación no aplican para ninguna promoción".
- **NO VERIFICADO (por el 429):** las promociones restantes de la página (HSBC, Nu, Scotiabank, DiDi Card, Falabella, Santander, Afirme, BanBajío, Liverpool, Suburbia, Klar y otras — los logos aparecen en la lista de imágenes de la página, líneas 285–685 no leídas). Tampoco se leyó el bloque final de preguntas frecuentes, salvo un fragmento en snippet: "¿Cómo reviso la compatibilidad de mi PC? En nuestro configurador de PC puedes revisar la compatibilidad entre procesador, tarjeta madre, memoria y fuente."
- **Pre Buen Fin — OBSERVADO (vía búsqueda):** https://www.cyberpuerta.mx/pre-buen-fin/ : "Las ofertas ya comenzaron. Aprovecha el Pre Buen Fin con promociones en tarjetas de video, procesadores, RAM, SSDs, monitores, laptops, PCs, periféricos, pantallas, impresoras, redes y más." / "¡Hasta 15% de descuento en productos seleccionados!" / Vigencia 9 al 12 de noviembre de 2026 o hasta agotar unidades. **Distinción estructural vs. temporada:** el 15% del Pre Buen Fin y las bonificaciones bancarias son promo de temporada (vigencia acotada y explícita); el "hasta 12 MSI en toda la tienda" se presenta como condición de la campaña, no como precio estructural.

## 4. Página de producto

**Advertencia de método — importante:** ninguna ficha de producto se pudo leer directamente con `browser.open` (las 3 lecturas intentadas tras la home devolvieron 429 y no se reintentaron, ver §9). Los datos de esta sección provienen de **snippets de búsqueda con JSON-LD `Product.offers` del propio sitio**, rastreados el 12–13 nov 2026. Se reportan como observados en esa fuente, con su límite declarado; no equivalen a una lectura directa de la ficha.

### 4.1 Estructura común de la ficha (OBSERVADO vía snippets)

- Título largo y descriptivo con marca + modelo + especificaciones clave en el propio título (p. ej. "Tarjeta de Video MSI NVIDIA GeForce RTX 5070 World of Warcraft MIDNIGHT VOID EDITION OC, 12GB 192-bit GDDR7, PCI Express 5.0, Mín. 650W").
- **SKU visible** en al menos un producto (MSI RTX 5070 WoW: "SKU: WORLD OF WARCRAFT MIDNIGHT VOID EDITION OC").
- **Precio en MXN, costo de envío y ventana de entrega en la ficha:** ejemplo OBSERVADO (MSI RTX 5070 WoW): "$23,209.00", "Costo de envío: $148.00", "Recíbelo entre el 13 y el 19 de Noviembre", "12 pzas. disponibles".
- **Bloque "Especificaciones esenciales":** p. ej. memoria del adaptador, tipo de memoria, tipo de interfaz. La descripción larga es texto de especificaciones técnicas (núcleos CUDA, frecuencias, interfaz PCIe), no copy de marketing.
- **NO VERIFICADO en ficha:** precio tachado / % de descuento por producto (ningún snippet mostró tachado), galería de imágenes, variantes (color/capacidad), guía de tallas (no aplica a hardware), reseñas de producto (ningún snippet mostró estrellas, conteo ni texto de reseñas), botón de compra, cross-selling, ni disponibilidad por sucursal.

### 4.2 Precios observados (tarjetas de video, 13 nov 2026 — primer día de Buen Fin)

Precios del JSON-LD del sitio en resultados de búsqueda. **No se distingue si incluyen descuento de Buen Fin o son precio base**: ningún snippet mostró precio anterior/tachado, así que no se afirma descuento alguno sobre estos precios.

| Producto | Precio MXN | Disponibilidad (JSON-LD) |
|---|---|---|
| Gigabyte GeForce RTX 5060 Ti 8GB GDDR7 PCIe 5.0 | $10,469 | InStock |
| MSI GeForce RTX 5070 12G SHADOW 2X OC | $11,869 | Discontinued |
| Zotac GeForce RTX 4060 Ti 8GB GDDR6 | $10,599 | Discontinued |
| ASUS Dual GeForce RTX 4070 SUPER OC 12GB | $14,299 | Discontinued |
| Zotac GeForce RTX 4070 Ti SUPER 16GB | $19,539 | Discontinued |
| MSI GeForce RTX 5070 WoW MIDNIGHT VOID EDITION OC 12GB | $23,209 | (precio en ficha; 12 pzas. disponibles; envío $148) |
| MSI GeForce RTX 4080 SUPER 16G VENTUS 3X OC | $24,209 | Discontinued |
| ASUS GeForce RTX 5070 Ti TUF OC 16GB | $29,619 | OutOfStock |
| Zotac GeForce RTX 5080 16GB GDDR7 | $37,549 | Discontinued |

- **Anomalía — OBSERVADO, sin resolver:** la mayoría de estos productos figura como "Discontinued" en el JSON-LD y a la vez con precio vigente y, en un caso, con stock declarado ("12 pzas. disponibles"). **INFERIDO (confianza media):** el valor "Discontinued" probablemente refleja un estado del feed/datos estructurados (p. ej. fin de línea del fabricante o un mapeo de disponibilidad), no que el producto no se venda; pero no se puede afirmar. Se reporta el valor tal cual y no se usa como prueba de descontinuación real.
- **Ticket:** los precios observados confirman ticket alto (de ~$10,500 a ~$37,500 MXN solo en GPUs de esta muestra) y precios muy granulares y comparables — coherente con el posicionamiento de la tienda. **HIPÓTESIS:** en hardware con precio de mercado transparente, el descuento de Buen Fin probablemente opera vía bonificación bancaria y MSI más que vía tachado agresivo en ficha; no hay evidencia en ficha que lo confirme o lo niegue.

### 4.3 Otro producto observado (vía snippet)

- Apple MacBook Air 13.6" (M4, 10 núcleos CPU/GPU, 16GB RAM, 512GB SSD, Plata), macOS Sequoia, pantalla Retina 2560×1664, cámara 12 MP: descripción técnica detallada en el snippet; disponibilidad JSON-LD "Discontinued" (misma anomalía que §4.2). Precio **no** apareció en el snippet: NO VERIFICADO.

## 5. Carrito y checkout

- **NO VERIFICADO — carrito:** no se leyó ninguna página de carrito (no se intentó abrir una URL de carrito; no se añade nada al carrito por método). No se observó: contenido del carrito, subtotal, resumen, cupones, ni recomendaciones en carrito.
- **NO VERIFICADO — checkout:** pasos, campos, registro obligatorio u opcional, opciones de envío en checkout, ni confirmación de pedido. No se recorrió (requeriría añadir productos y avanzar, fuera del alcance).
- **OBSERVADO — métodos de pago (página Quiénes somos, 13 nov 2026):** pago referenciado por transferencia electrónica SPEI; tarjeta de débito y crédito; PayPal (tarjetas de débito/crédito nacionales e internacionales); pago en efectivo en tiendas OXXO. "Cada compra en Cyberpuerta incluye factura y podrás descargarla desde tu historial de pedidos."
- **OBSERVADO — PayPal y MSI (página propia):** https://www.cyberpuerta.mx/Compra-seguro-con-PayPal/ : "Compra en la tienda con PayPal a meses sin intereses", "cuando hagas checkout en nuestra tienda, podrás elegir modo de pago PayPal y hacer login directamente en la compra". **INFERIDO (confianza media):** PayPal es la vía principal —posiblemente la única— para los MSI y las bonificaciones bancarias del Buen Fin, dado que todas las promos bancarias leídas exigen pagar "a través de PayPal". No se observó si el pago directo con tarjeta en el sitio ofrece MSI por sí mismo.
- **OBSERVADO — envíos (Quiénes somos):** "Envíos seguros desde $134 MXN"; "Entrega estándar en 1 a 4 días hábiles"; "Rastreo en línea con número de guía"; "Protección contra daños, pérdida o robo"; "Ahorra en el envío con la compra de varios productos". Paqueterías: Paquetexpress, Estafeta, DHL (logos observados). El ejemplo de ficha (§4.1) muestra envío de $148 MXN y entrega 13–19 nov (6 días) para un producto concreto, por encima del rango estándar declarado — **OBSERVADO como dato puntual, no como contradicción general**: la ventana real depende del producto/destino.
- **OBSERVADO — garantías y devoluciones (Quiénes somos):** gestión de garantía con la marca, centro de servicio autorizado o procesos internos; devolución si el producto está completamente sellado, no se recibió lo solicitado o presenta detalles al recibirlo; "Aplican restricciones".
- **Cupones — OBSERVADO (solo vía agregadores externos, no en el sitio):** RadarCupón (13 nov 2026) lista "$100 de descuento en cómputo y accesorios" en primera compra al registrarte (compra mínima $700) y "hasta 30% de descuento en laptops gamer". **NO VERIFICADO** en el sitio de Cyberpuerta: ningún cupón se observó en las páginas leídas. No se afirma que estén activos.

## 6. Búsqueda y UX de navegación

- **Buscador — NO VERIFICADO:** no se leyó ninguna página de resultados de búsqueda ni se observó el buscador (no aparece en la extracción de la home). La URL de categoría `/Computadoras/Laptops/Filtro/Busqueda/...` sugiere búsqueda facetada por segmentos de URL, pero su funcionamiento, sus filtros y su conteo de resultados no se observaron.
- **Navegación por departamentos — INFERIDO (confianza media):** la jerarquía de URLs (`/Computo-Hardware/Componentes/Tarjetas-de-Video/`, `/Apple/Mac/MacBook-Air/`, `/Computadoras/Laptops/`) indica navegación por departamento → categoría → subcategoría. El menú real no se vio.
- **Filtros y ordenación — NO VERIFICADO:** no apareció ningún control de filtro u orden en las extracciones leídas.
- **Herramienta diferencial — Configurador de PC — OBSERVADO (vía página de Buen Fin + búsqueda):**
  - En Buen Fin: "Tu PC. A tu manera. Elige las piezas. Hazla tuya. En nuestro configurador revisas la compatibilidad entre procesador, tarjeta madre, memoria y fuente. [Configurar mi PC]".
  - Página de servicio de ensamble (https://www.cyberpuerta.mx/Servicio-de-ensamble/, vía snippet de búsqueda, 13 nov 2026): "Crea tu PC ideal con nuestro servicio de ensamble a medida"; componentes mínimos: procesador, tarjeta madre, memoria RAM, almacenamiento HDD o SSD, gabinete y fuente de poder; "El configurador solo muestra piezas que funcionan bien juntas"; "Nuestro Asistente con IA te puede sugerir una configuración lista para arrancar"; garantía de 30 días directa con Cyberpuerta; entrega aproximada 2 semanas; incluye versión de prueba de Windows 11 Home (la licencia completa se agrega en el configurador); "No aceptamos devoluciones de PCs nuevas y selladas que hayan sido ensambladas bajo pedido".
  - URL del configurador: https://www.cyberpuerta.mx/configurador-de-pc/ (citada en una fuente externa; la página en sí no se leyó por el 429 — NO VERIFICADO su contenido directo).
  - **Lectura para e-larping:** el configurador + asistente con IA es el activo de front más distintivo observado: convierte un catálogo de componentes (difícil de comprar por separado) en un producto guiado con validación de compatibilidad. Es también el único punto donde la tienda declara usar IA de cara al cliente.
- **Guías de Compra — OBSERVADO:** contenido editorial de ayuda a la decisión por categoría (ver §3.1). Es contenido de consideración, no blog de marca: no se observó blog general ni comunidad.
- **App móvil — OBSERVADO (fichas de tienda, no del sitio):** Google Play: 4.7★, 13.4 mil opiniones, actualización 28 oct 2026; App Store: 4.8★, 3.9 mil calificaciones, versión 9.1.7 (14 oct 2026), 110.5 MB, solo iPhone. Descripción: "el eCommerce en tecnología #1 en México... más de 55,000 productos nuevos, originales y con garantía de fabricante". Reseñas de usuarios en Play mencionan precios mejores que Amazon/Mercado Libre en procesadores y SSD, pero también fallos de la app en 2026 (no carga productos, no inicia sesión, se congela) — son opiniones de usuarios de la app, no del sitio web, y se citan solo como contexto de UX móvil.
- **Móvil web — NO VERIFICADO:** sin navegador en vivo no se observó menú hamburguesa, orden de secciones en móvil, legibilidad ni comportamiento táctil. El CDN propio `cdn.cyberpuerta.mx/mobile/badges/shipping/...` sugiere assets diferenciados para móvil, pero es solo un indicio de nombre de ruta.
- **Accesibilidad — NO VERIFICADO:** no se observó enlace de salto ni controles de accesibilidad en las extracciones.

## 7. Contenido y mensajes comerciales (qué vende)

- **OBSERVADO — qué vende:** hardware y cómputo de marcas (no marca propia): tarjetas de video, procesadores, RAM, SSD, PCs de escritorio, laptops gaming y de trabajo, monitores, tarjetas madre, impresoras, copiadoras, audio, cámaras profesionales, periféricos, redes, pantallas, consolas y videojuegos, ecosistema Apple (iPhone, iPad, MacBook, iMac, AirPods, Apple Watch), hogar inteligente (hubs y controles smart) y oficina. Distribuidor autorizado de Dell, HP, Lenovo, Kingston, Apple y Asus.
- **Mensajes comerciales recurrentes (OBSERVADO, textos literales):**
  - "Tu mejor opción de Electrónica en México" / "el principal retailer de tecnología y hardware en México".
  - "100% originales" / "productos nuevos, originales y con garantía de fabricante".
  - "Tu buen momento. Tu Buen Fin." / "Encuentra ofertas para jugar, crear y trabajar." / "Hasta 12 MSI en toda la tienda".
  - "Tu PC. A tu manera." / "Elige las piezas. Hazla tuya."
  - "Tu mundo. En Apple." / "Tecnología para cada parte de ti".
  - "Más de 17 años de experiencia en tecnología" / "Desde 2008".
  - Confianza: Sello de Confianza de la Asociación de Internet, SSL DigiCert, ISO 9001, "El mejor lugar para trabajar en México 2024" (GPTW, 1er lugar nacional, 50–500 colaboradores).
- **Tono — INFERIDO (confianza media):** funcional y de especificación, no aspiracional: el copy de producto es ficha técnica (núcleos, frecuencias, interfaces) y el de campaña es financiero (MSI, bonificación, mínimos). No se observó storytelling de marca, UGC ni creadores; la prueba social es institucional (certificaciones, años, ranking GPTW), no reseñas de clientes visibles.
- **Reseñas de producto — NO VERIFICADO:** ninguna ficha leída/mostrada incluye estrellas, conteo ni texto de reseñas. No se afirma que no existan; no aparecieron en los snippets.
- **Precios — rango:** NO VERIFICADO como rango de catálogo. Solo la muestra de GPUs del §4.2 ($10,469–$37,549 MXN) y el envío desde $134 MXN. No se afirma precio mínimo ni máximo del catálogo.

## 8. Rendimiento observado

- **OBSERVADO (cualitativo, sin cifras):** las 4 lecturas exitosas se completaron y el servicio marcó cada página como "crawled less than a minute ago". Eso solo constata que el crawler pudo cargar el texto con rapidez; **no es una medición de velocidad**.
- **OBSERVADO (indicio, sin medición):** las imágenes de la landing Buen Fin se sirven como `.webp` (p. ej. `apple-ecosistema.webp`, `perifericos.webp`) y hay un CDN propio (`cdn.cyberpuerta.mx`) para badges; hay video incrustado de YouTube en Quiénes somos. No se midió peso, número de peticiones ni impacto.
- **NO VERIFICADO / no medible con este método:** tiempos de carga, LCP, CLS, peso de página, puntuación Lighthouse/PageSpeed. No se inventa ninguna cifra.
- **INFERIDO (confianza baja-media):** la home vacía en la extracción sugiere una app JS pesada en cliente; si el render depende de JS, el tiempo hasta contenido visible puede ser peor que en una tienda con HTML servido — pero sin medición ni render es solo una hipótesis de riesgo, no un hallazgo.

## 9. Tabla final — observado / inferido / hipótesis / no verificado

### OBSERVADO (con URL y fecha, 13 nov 2026)

| # | Afirmación | Fuente |
|---|---|---|
| O1 | Home devuelve casi solo el bloque de registro ("¿Ya tienes cuenta en Cyberpuerta?") + descripción de retailer fundado en 2008 | https://www.cyberpuerta.mx/ |
| O2 | Buen Fin 13–17 nov 2026: "Tu buen momento. Tu Buen Fin.", hasta 12 MSI en toda la tienda, contador en 00 | https://www.cyberpuerta.mx/Buen-Fin/ |
| O3 | Promos bancarias vía PayPal: 17 promociones; BBVA 16% solo 13 nov (mín. $5,000, tope $2,500) y 15% 14–17 nov; BBVA paga hasta mar 2027 a 3 MSI (mín. $3,500); Banorte 15% (tope $5,000); Banamex hasta 30% desde 12 MSI (mín. $10,000, tope $10,000) | https://www.cyberpuerta.mx/Buen-Fin/ (líneas 0–285) |
| O4 | Bloques por uso en Buen Fin: configurador, Apple, toque final, videojuegos, oficina, casa, estudiar, crear | https://www.cyberpuerta.mx/Buen-Fin/ |
| O5 | Configurador de PC: valida compatibilidad procesador / tarjeta madre / memoria / fuente; asistente con IA sugiere configuración; ensamble con garantía 30 días, ~2 semanas, Windows 11 Home de prueba; sin devolución por descontento en PC ensamblada | https://www.cyberpuerta.mx/Buen-Fin/ + https://www.cyberpuerta.mx/Servicio-de-ensamble/ (snippet) |
| O6 | Quiénes somos: desde 2008, +17 años, +55,000 productos, distribuidor autorizado Dell/HP/Lenovo/Kingston/Apple/Asus; Sello Asociación de Internet, SSL DigiCert, ISO 9001, GPTW 2024 1er lugar; app en App Store / Play Store / AppGallery | https://www.cyberpuerta.mx/Quienes-somos/ |
| O7 | Pagos: SPEI, tarjeta débito/crédito, PayPal, efectivo OXXO; factura descargable desde historial de pedidos | https://www.cyberpuerta.mx/Quienes-somos/ |
| O8 | Envíos desde $134 MXN; entrega estándar 1–4 días hábiles; rastreo con guía; protección daños/pérdida/robo; paqueterías Paquetexpress, Estafeta, DHL | https://www.cyberpuerta.mx/Quienes-somos/ |
| O9 | Precios GPU (JSON-LD, 13 nov): RTX 5060 Ti $10,469 (InStock); RTX 5070 Shadow $11,869; RTX 4060 Ti $10,599; RTX 4070 SUPER $14,299; RTX 4070 Ti SUPER $19,539; RTX 5070 WoW $23,209 (12 pzas., envío $148, entrega 13–19 nov); RTX 4080 SUPER $24,209; RTX 5070 Ti $29,619 (OutOfStock); RTX 5080 $37,549 | Snippets de búsqueda cyberpuerta.mx, 13 nov 2026 |
| O10 | Ficha con SKU visible, costo de envío, ventana de entrega, stock en piezas y "Especificaciones esenciales" | Snippet MSI RTX 5070 WoW |
| O11 | Anomalía: mayoría de GPUs con "Discontinued" en JSON-LD pese a precio vigente (y stock en un caso) | Snippets de búsqueda, 13 nov 2026 |
| O12 | Categoría SEO Laptops RTX 4080: texto descriptivo + marcas Lenovo/ASUS/HP, sin listado de productos en la extracción | https://www.cyberpuerta.mx/Laptops-RTX-4080/ |
| O13 | Páginas de categoría por marca/uso con texto SEO y listado de marcas (Hubs, Lápices, Laptops) | Snippets cyberpuerta.mx |
| O14 | Guías de Compra por categoría: Laptops, Tarjetas de Video, Impresoras, Tarjetas madre, Procesadores, Proyectores, 2 en 1, Monitores, PC de escritorio | https://www.cyberpuerta.mx/Guias-de-Compra/ (snippet) |
| O15 | Pre Buen Fin 9–12 nov 2026: hasta 15% en seleccionados; categorías listadas | https://www.cyberpuerta.mx/pre-buen-fin/ (snippet) |
| O16 | Assets `/out/marketing/`, `/out/cmsp/`, `/out/pictures/` y `/pcb2/_nuxt/`; imágenes Buen Fin en `.webp`; CDN `cdn.cyberpuerta.mx` | Extracciones Buen Fin y Quiénes somos |
| O17 | URLs de producto `.html` jerárquicas y `index.php?cl=details&anid=` | URLs devueltas por búsqueda |
| O18 | App: Google Play 4.7★ / 13.4 mil opiniones (act. 28 oct 2026); App Store 4.8★ / 3.9 mil calificaciones, v9.1.7 (14 oct 2026) | Fichas Play / App Store (búsqueda) |
| O19 | Español de México + precios en MXN en todo lo leído | Todas las páginas |

### INFERIDO (con evidencia y confianza)

| # | Afirmación | Evidencia / confianza |
|---|---|---|
| I1 | Plataforma propia con base OXID + front Nuxt | `/out/`, `index.php?cl=details&anid=`, `/pcb2/_nuxt/`; ausencia de patrones Shopify/Woo/Magento — confianza **media** |
| I2 | Home renderizada en cliente (JS); por eso la extracción sale casi vacía | Extracción vacía + assets `_nuxt` — confianza **media-alta** |
| I3 | PayPal es la vía principal (quizá única) para MSI y bonificaciones del Buen Fin | Todas las promos bancarias leídas exigen pagar "a través de PayPal" — confianza **media** |
| I4 | "Discontinued" en JSON-LD no significa que el producto no se venda | Precio vigente + stock declarado en el mismo producto — confianza **media** |
| I5 | Navegación por departamento → categoría → subcategoría | Jerarquía de URLs — confianza **media** |
| I6 | Tono funcional/de especificación, prueba social institucional (no reseñas visibles) | Copy observado en fichas, Quiénes somos y campaña — confianza **media** |

### HIPÓTESIS (derivadas, marcadas)

| # | Hipótesis | Base |
|---|---|---|
| H1 | La home del 13 nov 2026 estaba dominada por la campaña Buen Fin | La landing Buen Fin existe y la home no se pudo leer; sin evidencia directa |
| H2 | En hardware de precio transparente, el descuento de Buen Fin opera vía bonificación bancaria y MSI más que vía tachado en ficha | Ninguna ficha mostró precio tachado; las promos leídas son financieras |
| H3 | La home JS puede tener un tiempo hasta contenido visible peor que una tienda con HTML servido | Extracción vacía; sin medición ni render, es solo riesgo a verificar |

### NO VERIFICADO

| # | Punto | Motivo |
|---|---|---|
| N1 | Secciones, banners, header, menú, buscador, footer y newsletter de la home | Extracción de la home casi vacía; sin navegador en vivo |
| N2 | Promociones bancarias restantes del Buen Fin (HSBC, Nu, Scotiabank, DiDi, Falabella, Santander, Afirme, BanBajío, Liverpool, Suburbia, Klar, etc.) y FAQ final | Líneas 285–685 de /Buen-Fin/ no leídas: 429, no reintentado |
| N3 | Contenido directo del Configurador de PC y de Servicio de ensamble | Solo snippets; las lecturas directas devolvieron 429, no reintentadas |
| N4 | Contenido directo de Pre Buen Fin | Solo snippet; lectura directa devolvió 429, no reintentada |
| N5 | Ficha de producto leída directamente (galería, variantes, tachado, reseñas, botón de compra, cross-selling) | Ninguna ficha se pudo abrir: 429, no reintentado; solo snippets JSON-LD |
| N6 | Carrito (contenido, subtotal, cupones) y pasos del checkout | No se leyó página de carrito ni se recorrió checkout |
| N7 | Métodos de pago en checkout (MSI directo con tarjeta, límites por método) | Solo lo declarado en Quiénes somos y PayPal; el flujo no se observó |
| N8 | Buscador, resultados, filtros y ordenación | Ninguna página de búsqueda leída; solo indicio en URL `/Filtro/Busqueda/` |
| N9 | Filtros y ordenación en listados de categoría; conteo por colección; paginación | No aparecieron en las extracciones leídas |
| N10 | Reseñas de producto (estrellas, conteo, texto) | No aparecieron en ningún snippet ni extracción |
| N11 | Rango de precios del catálogo y total real de productos | Solo muestra de GPUs; conteo 55,000 es afirmación de la tienda |
| N12 | Precio tachado / % de descuento por producto y distinción precio base vs. Buen Fin en ficha | Ningún snippet mostró precio anterior |
| N13 | Vista y UX móvil web real; rendimiento medido (LCP, Lighthouse) | Sin navegador en vivo ni medición |
| N14 | Versión de OXID/Nuxt, hosting/CDN, apps instaladas | Corresponde a F2; no observable por este método |
| N15 | Vigencia real de los cupones de agregadores ($100 primera compra, 30% laptops gamer) | Solo en RadarCupón; no observados en el sitio |

## 10. Fuentes consultadas

Lectura de texto de páginas públicas el 13 nov 2026 (~19:49 UTC), 4 lecturas exitosas:

1. https://www.cyberpuerta.mx/ (home)
2. https://www.cyberpuerta.mx/Buen-Fin/ (líneas 0–285 de 685)
3. https://www.cyberpuerta.mx/Quienes-somos/
4. https://www.cyberpuerta.mx/Laptops-RTX-4080/

Búsquedas web (13 nov 2026; los hechos usados provienen de sus snippets con fuente cyberpuerta.mx o fichas oficiales de app):

5. "Cyberpuerta cyberpuerta.mx tienda tecnología México"
6. "cyberpuerta.mx plataforma ecommerce Shopify Magento WooCommerce" (sin resultado útil sobre la plataforma de Cyberpuerta; solo comparativas genéricas — no aporta hechos)
7. "Cyberpuerta Buen Fin 2026 ofertas" (landing Buen Fin, Pre Buen Fin, agregadores de cupones)
8. "\"cyberpuerta.mx\" configurador PC armar computadora" (Servicio de ensamble, configurador, Guías de Compra)
9. "Cyberpuerta app opiniones reseñas productos calificación" (fichas Google Play y App Store)
10. "\"cyberpuerta.mx\" tarjeta video RTX procesador precio MXN" (9 fichas de GPU con JSON-LD)
11. "Cyberpuerta métodos de pago envío meses sin intereses MSI PayPal OXXO SPEI" (página "Compra seguro con PayPal")
12. "cyberpuerta.mx categorías Computo Hardware laptops monitores Apple gaming" (Guías de Compra, MacBook Air, categoría Laptops)

## 11. Límites de lo verificado

- **Método:** lectura de texto extraído por un crawler, no navegación visual. El header, el footer, los controles JS (filtros, menús, pop-ups, buscador) y el diseño real (colores, tipografía, layout) **no son observables** por este método; su ausencia en la extracción no prueba su ausencia en el sitio. La home es el caso extremo: la extracción salió casi vacía y todo su contenido real queda NO VERIFICADO.
- **Límite de peticiones (429):** tras las 4 lecturas exitosas, el servicio de lectura devolvió **429 (límite de peticiones)** en tres lecturas — continuación de Buen Fin (líneas 285–685), Servicio de ensamble y Pre Buen Fin. Conforme a la regla de la WO, **no se reintentaron**; sus contenidos quedan en NO VERIFICADO (N2, N3, N4) y las fichas de producto solo se documentan vía snippets de búsqueda (N5). No se hizo clic, no se inició sesión, no se añadió nada al carrito ni se compró nada.
- **Fecha y temporada:** todo lo observado corresponde al **13 nov 2026, primer día del Buen Fin 2026**. La campaña domina la comunicación; precios, promos y disponibilidad pueden cambiar al terminar la campaña (17 nov 2026). Los precios de GPU citados son de esa fecha y no se distingue en ellos precio base de promo.
- **Alcance:** este informe es solo front end. Back/stack, SEO/GEO, redes/embudo, precios comparados, logística e hipótesis y pain points corresponden a otros frentes de la Fase 2 y no se cubren aquí (salvo lo necesario para describir lo visible).
