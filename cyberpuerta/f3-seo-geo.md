# F3 — SEO / GEO + Presencia digital: Cyberpuerta

- **Sitio:** Cyberpuerta — https://cyberpuerta.mx/ — e-commerce mexicano de tecnología / hardware y cómputo
- **Frente:** F3 (SEO / GEO + presencia digital) — Fase 2, WO-E-LARPING
- **Fecha de investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Método:** solo fuentes públicas — búsqueda web y lectura de páginas públicas. Sin inicio de sesión, sin compras, sin contacto, sin extracción de datos personales.
- **Etiquetas usadas en todo el informe:** **OBSERVADO** (visto, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada) / **NO VERIFICADO** (no se interrogó o no se pudo leer la fuente).

---

## 1. Qué devuelve el buscador para la marca

### 1.1 Home y páginas institucionales

- **OBSERVADO** — La home devuelve el título `Hardware, Computadoras, Laptops & Más | Cyberpuerta.mx` y la meta descripción: «Cyberpuerta es el principal retailer de tecnología y hardware en México, una empresa mexicana fundada en 2008 con productos originales de las principales marcas del mercado, garantía directa del fabricante y envíos a toda la República.» Fuente: lectura directa de https://www.cyberpuerta.mx/ el 13 nov 2026, 19:49 UTC. El fetch de texto de la home apenas renderizó contenido (solo se vio el bloque «¿Ya tienes cuenta en Cyberpuerta?» y el enlace de registro); el resto del contenido de la home no pudo leerse por esta vía.
- **OBSERVADO** — La página «Quiénes somos» (`https://www.cyberpuerta.mx/Quienes-somos/`, leída 13 nov 2026, 19:49 UTC) se posiciona como «Tu mejor opción de Electrónica en México», declara «Desde 2008, en Cyberpuerta S.A. de C.V.», «más de 55,000 productos», distribuidor autorizado de Dell, HP, Lenovo, Kingston, Apple y Asus, y enlaza a App Store, Play Store y AppGallery. Incluye un video de YouTube embebido (`youtube.com/embed/vy22aYw2v9E`).
- **OBSERVADO** — La búsqueda de marca devuelve en primer plano la home, «Quiénes somos» y páginas de categoría y de producto, no un blog ni notas de prensa recientes. Búsqueda del 13 nov 2026.

### 1.2 Páginas indexadas (vía `site:`)

- **OBSERVADO** — La consulta `site:cyberpuerta.mx` devuelve sobre todo fichas de producto (ej.: charola Intellinet para rack, pantalla Huawei IdeaHub B3 65", monitor Naceb curvo 34", cargador Samsung 15W, bafle Radox, barebone ASUS NUC 14, Ulefone Armor X31 Pro, bafle QSC K10.2, tanque Brother BTD60BK, licuadora Mirati) y páginas de categoría (ej.: `Laptops-RTX-4080`, `Laptops-Gamer`, `Tarjetas-Madre-ASUS-ROG`, `Barebones-MSI`). Los resultados muestran rastreos de hace 1–7 días (último crawl 1 día antes, en la mayoría). Búsqueda del 13 nov 2026.
- **OBSERVADO** — La estructura de URL de producto es jerárquica y descriptiva, del tipo `/Computo-Hardware/Monitores/Monitores/Monitor-Gamer-Curvo-Naceb-...-Gris.html` y `/Computadoras/Barebones/ASUS-NUC-14-Essential-...-1.html`. Las categorías usan slugs en español con guiones (`/Laptops-RTX-4080/`, `/Hubs-y-Controles-Smart-Hubitat/`).
- **INFERIDO (confianza alta)** — El grueso del inventario indexado es producto y categoría; el contenido editorial, si existe, pesa poco en los resultados de marca. Evidencia: en las tres consultas `site:` realizadas, ningún resultado de la primera página fue un artículo de blog o guía; todos fueron productos, categorías o páginas de servicio.
- **NO VERIFICADO** — Número total de URLs indexadas. La consulta `site:` no devuelve un conteo fiable y no se usó Search Console (sin acceso). No se afirma ninguna cifra de indexación.

---

## 2. robots.txt y sitemap

### 2.1 robots.txt

- **OBSERVADO** — `https://www.cyberpuerta.mx/robots.txt` se leyó completo el 13 nov 2026, 19:49 UTC (444 líneas). Encabezado: «IMPORTANT: Do not modify this file without first consulting your team leader. IT-45501».
- **OBSERVADO** — Bloquea por completo a Baiduspider y a Yandex (`Disallow: /` para ambos).
- **OBSERVADO** — Grupo específico para bots de IA: `User-agent: GPTBot`, `ClaudeBot` y `PerplexityBot` con `Disallow` solo sobre rutas internas y de staging (`/_base/`, `/_clone/`, `/_clone2/`, `/_performance/`, `/_stash/`, `/COYCO/`, `/modulesOLD/`, `/OLD/`, `/tmpml/`, `/out/productdescription/`, `/Outlet/`, `/admin/`, `/core/`, `/tmp/`, `/views/`, `/setup/`, `/log/`, newsletter, carrito, cuenta, registro, `cl=moredetails`, `cl=review`, `cl=search`, parámetros `sid`/`cur`, `/api/`, `/Promociones/`, etc.). El comentario del propio archivo dice: «OpenAI, Anthropic, Perplexity — same crawl rules as the wildcard group (RFC 9309: no cross-group inheritance)».
- **OBSERVADO** — `User-agent: Google-Extended` tiene `Allow: /` (permiso explícito para el entrenamiento/uso de Google AI).
- **OBSERVADO** — El grupo `User-agent: *` replica los mismos `Disallow` (rutas internas, cuenta, carrito, wishlist, registro, búsqueda interna, parámetros de sesión/moneda, `/Outlet/`, `/api/`, `/Promociones/`, una URL concreta de opiniones de un Ryzen 3 1200 y `/Welcometext/`). Hay una línea `#Crawl-delay: 5` comentada (sin efecto).
- **OBSERVADO** — Declara el sitemap: `Sitemap: https://www.cyberpuerta.mx/export/google/sitemap-mx.xml`.
- **INFERIDO (confianza alta)** — Cyberpuerta no bloquea a los crawlers de IA generalistas: GPTBot, ClaudeBot y PerplexityBot tienen permitido el contenido público (productos, categorías, CMS) y solo se les cierran las rutas transaccionales/internas. Evidencia: los `Disallow` de su grupo son los mismos del comodín y ninguno cubre la raíz ni las rutas de producto/categoría. Google-Extended está explícitamente permitido.
- **INFERIDO (confianza media)** — El archivo tiene años de sedimento: quedan rutas en alemán (`/agb/`, `/warenkorb/`, `/mein-konto/`, `/konto-eroeffnen/`) de la plataforma original (software de tienda alemán, según la entrevista de 2014 citada abajo) y referencias a un ticket interno (IT-45501). Evidencia: las rutas `/en/` y alemanas coexisten con las actuales en español.

### 2.2 Sitemap

- **OBSERVADO** — `https://www.cyberpuerta.mx/sitemap.xml` devuelve **404** (13 nov 2026). El sitemap real vive en la ruta declarada en robots.txt.
- **OBSERVADO** — `https://www.cyberpuerta.mx/export/google/sitemap-mx.xml` se leyó el 13 nov 2026, 19:50 UTC. Es un índice con **51 sub-sitemaps**, todos con `lastmod 2026-11-12T21:04:36-06:00`:
  - `sitemap-facet-mx.xml` + `-2` a `-5` y `sitemap-facet-special-mx.xml` (6 de facetas/filtros)
  - `sitemap-manufacturer-mx.xml` y `-2` (2 de marcas)
  - `sitemap-category-mx.xml` (1 de categorías)
  - `sitemap-cms-mx.xml` (1 de páginas CMS)
  - `sitemap-review-mx.xml` + `-2` a `-4` (4 de reseñas)
  - `sitemap-article-mx.xml` + `-2` a `-37` (37 de artículos)
- **OBSERVADO** — El intento de abrir `sitemap-article-mx.xml` devolvió **429 (límite de peticiones)**. Conforme a las reglas del encargo, **no se reintentó**. Su contenido es, por tanto, desconocido en este informe.
- **INFERIDO (confianza alta)** — La arquitectura de sitemap es la de un catálogo grande y bien segmentado para Google: separa producto por facetas, marcas, categorías, reseñas y artículos, con actualización diaria (lastmod del 12 nov, víspera de la lectura). Evidencia: 51 sub-sitemaps con el mismo lastmod reciente.
- **INFERIDO (confianza media)** — Existe un volumen editorial no despreciable: 37 archivos de sitemap de artículos sugieren cientos o miles de URLs de tipo artículo. Pero sin haber leído ni uno, no se puede afirmar cuántos artículos hay, de qué tratan ni su fecha.
- **NO VERIFICADO** — Contenido, cantidad de URLs y frescura real de los sub-sitemaps de artículos, facetas y reseñas (solo se leyó el índice; el sub-sitemap de artículos dio 429).

---

## 3. Datos estructurados (JSON-LD) observables

- **OBSERVADO** — Los resultados de búsqueda de fichas de producto exponen un bloque «Product Offer» con la etiqueta explícita `Source: JSON-LD Product.offers`: nombre del producto, precio en MXN y disponibilidad (`InStock` / `Discontinued`). Ejemplos vistos el 13 nov 2026: Intellinet charola rack $461 MXN InStock; Huawei IdeaHub B3 $57,759 MXN InStock; Naceb monitor curvo $3,569 MXN InStock; Samsung cargador $599 MXN InStock; ASUS NUC 14 $5,689 MXN InStock; Brother BTD60BK $175 MXN InStock; QSC K10.2 $21,119 MXN InStock; Yeyian Shoge $22,019 MXN Discontinued; Corsair ONE i500 $73,939 MXN Discontinued.
- **OBSERVADO** — Las fichas exponen también `Rating` agregado en el mismo bloque: Brother BTD60BK 4.6 (8 ratings); Cooler Master MasterLiquid ML240L V2 4.7 (180 ratings); gabinete Evotec EV-1004 3.68 (22 ratings); No Break Vica 4.6 (18 ratings).
- **OBSERVADO** — Existen páginas propias de opiniones por producto bajo el patrón `/Opiniones-sobre-<producto>/`, con reseñas fechadas (ej.: reseñas del 07/09/2022 visibles en las páginas de Cooler Master, Evotec y Vica) y marca de «Compra verificada» en algunas.
- **INFERIDO (confianza alta)** — Cyberpuerta marca sus productos con `Product` + `offers` (+ `aggregateRating` donde hay reseñas) en JSON-LD, lo que alimenta rich results de precio, disponibilidad y estrellas en Google. Evidencia: el buscador extrae y etiqueta esos campos como «JSON-LD Product.offers» de forma sistemática en todas las fichas consultadas.
- **NO VERIFICADO** — El resto del marcado: no se abrió el HTML crudo de ninguna página, así que no se pudo confirmar si existe `Organization`, `WebSite` (con `SearchAction`), `BreadcrumbList`, `FAQPage` o `ItemList` en home, categorías o CMS. Tampoco se verificó si las reseñas usan `Review` individual con autor y fecha en el marcado.

---

## 4. Publicidad pagada observable

- **OBSERVADO** — URLs de producto indexadas con parámetros UTM de Meta: `?utm_source=facebook&utm_medium=paid-social&utm_campaign=dpa` (DPA = Dynamic Product Ads) en al menos cuatro fichas (charola Intellinet, cargador Samsung, ASUS NUC 14, bafle QSC K10.2). Búsqueda `site:` del 13 nov 2026.
- **OBSERVADO** — URL de producto con `?utm_source=rtbcr&utm_medium=retargeting&utm_campaign=display` (retargeting display) en la laptop AORUS RTX 5070. Búsqueda del 13 nov 2026.
- **OBSERVADO** — URLs con `srsltid` (identificador de clic de Google Ads / Shopping) en fichas de PC gamer Naceb y en la categoría `Laptops-Gamer`.
- **OBSERVADO** — La página de Alchemy Force circula con `?utm_id=120208905896300047_v2_s10_e7070` (identificador de campaña de Meta).
- **OBSERVADO** — La landing del Buen Fin circula con `?dst=2022-11-05` en una variante indexada (`https://www.cyberpuerta.mx/Buen-Fin/?dst=2022-11-05`), parámetro heredado de una campaña antigua.
- **INFERIDO (confianza alta)** — Cyberpuerta corre paid social en Meta (DPA de catálogo + retargeting display) y paid search/Shopping en Google. Evidencia: los cuatro parámetros anteriores solo aparecen cuando hay campañas activas que los generan; `dpa` y `srsltid` son huellas directas de esos formatos.
- **NO VERIFICADO** — Contenido y gasto de las campañas: no se consultó la Biblioteca de anuncios de Meta ni Google Ads Transparency Center, así que no se afirma qué anuncios están activos, con qué creatividades ni con qué presupuesto. Tampoco se verificó pauta en TikTok, YouTube o programática.

---

## 5. Presencia en respuestas de IA / citabilidad (GEO)

- **NO VERIFICADO** — No se interrogó a ningún motor de respuestas de IA (ChatGPT, Gemini, Perplexity, Copilot, AI Overviews) sobre Cyberpuerta, sus precios o sus productos. No se afirma ninguna cita, mención ni ausencia en esos sistemas.
- **INFERIDO (confianza media) — qué juega a favor de ser citable:**
  - Los crawlers de IA no están bloqueados en el contenido público (ver §2.1: GPTBot, ClaudeBot, PerplexityBot permitidos salvo rutas internas; Google-Extended con `Allow: /`).
  - El catálogo está marcado con JSON-LD `Product/offers` con precio y disponibilidad en MXN (ver §3), dato que los motores de respuesta pueden extraer sin renderizar.
  - Tiene páginas de contenido propio orientadas a decisión de compra (configurador, Alchemy Force, páginas de marca/categoría con texto) y señales de autoridad externa (ver §6).
- **INFERIDO (confianza media) — qué le falta para ser citable:**
  - **Textos de categoría genéricos y sin fuente.** Las páginas de categoría leídas (Hubs y Controles Smart, Lápices para Tablets, Laptops, Laptops de alta gama) usan párrafos de plantilla con afirmaciones sin citar («el mercado de dispositivos inteligentes puede alcanzar los $1.5 trillones para 2026», «las ventas de laptops han superado los 200 millones de unidades en el último año») y cierran con el mismo CTA («realiza tu pedido hoy mismo»). Un motor de respuestas prefiere citar fuentes con datos fechados y autoría; esto es contenido de relleno SEO, no referencia.
  - **Sin autoría ni fecha visibles en lo observado.** Ninguna de las páginas de categoría o de producto leídas muestra autor, fecha de publicación/actualización ni fuentes. (Las reseñas propias sí muestran fecha, pero son de 2022 en los ejemplos vistos.)
  - **Sin comparativas propias con datos.** No se observó ninguna comparativa «X vs Y» con mediciones propias, ni guías de compra con criterios y tablas, en los resultados consultados. El contenido que más citaría un motor para «qué laptop comprar» no apareció.
  - **Reseñas propias envejecidas en los ejemplos.** Las páginas de opiniones consultadas muestran reseñas de 2022; si el UGC reciente es escaso, la señal de frescura es débil.
- **HIPÓTESIS** — El activo GEO más fuerte de Cyberpuerta no es su blog sino su **configurador de PC con Asistente con IA** y sus fichas con especificaciones técnicas completas: son el tipo de página que un motor de respuestas citaría para «qué piezas son compatibles con X». Para confirmarlo haría falta interrogar a los motores, cosa que este frente no hizo.

---

## 6. Autoridad externa (prensa, listados, comparadores)

### 6.1 Prensa y perfiles

- **OBSERVADO** — Think&Start (2014) publicó una entrevista con uno de los fundadores, Jan Plassow: fundado por 3 socios (2 alemanes y 1 mexicano), modelo de conexión con mayoristas, certificación AMIPCI y uso de Ekomi (empresa externa alemana) para recabar opiniones. URL: `https://thinkandstart.com/2014/cyberpuerta-venta-de-electronicos-al-alcance-de-un-clic/`.
- **OBSERVADO** — Pubrio (perfil de empresa, rastreado hace 2 días) recoge: constituida en 2008, programa de incubadora del ITESM, certificada por AMIPCI, miembro de la Cámara Nacional de Comercio en Guadalajara, y que «CNN Expansión nominó a www.cyberpuerta.mx como una de las mejores tres tiendas en línea 2011 en México en la categoría Comercio». Es fuente secundaria (agregador), no la nota original de CNN Expansión. URL: `https://www.pubrio.com/companies/0aa23518-b8dc-4530-a1bf-c5d01139db31`.
- **OBSERVADO** — ENIUN (23 feb 2026) publicó «El auge del ecommerce tecnológico en México: el caso de Cyberpuerta», artículo de análisis que la presenta como ecommerce líder en su ramo, con más de 30,000 productos activos (cifra distinta a los 55,000 de la web oficial) y filtros técnicos por frecuencia de RAM, certificación de fuentes o tipo de panel. URL: `https://www.eniun.com/auge-ecommerce-tecnologico-mexico-caso-cyberpuerta/`.
- **OBSERVADO** — La Jornada Jalisco publicó una nota sobre el Configurador de PC de Cyberpuerta (herramienta que valida compatibilidad y coste total). El Heraldo de Saltillo (9 abr 2025) publicó «Cyberpuerta: Tu Mejor Aliado para Armar la PC Perfecta», guía de armado con ejemplos de configuraciones.
- **OBSERVADO** — Tec-Check (artículo de experiencia de compra, ~2020) declara participar en el programa de afiliados de TradeTracker «y por ende, al programa de Cyberpuerta», y que en 2020 no había recibido comisiones. Es evidencia de que Cyberpuerta opera (u operaba) programa de afiliados vía TradeTracker. URL: `https://tec-check.com.mx/comprando-cyberpuerta-la-tienda-computo/`.

### 6.2 Sellos y certificaciones (declarados por la propia tienda)

- **OBSERVADO** — En «Quiénes somos» (13 nov 2026): Sello de Confianza de la Asociación de Internet (antes AMIPCI), certificación SSL de DigiCert, certificación ISO 9001, y «1er lugar nacional como El mejor lugar para trabajar en México 2024» (categoría 50–500 colaboradores, Great Place to Work).
- **INFERIDO (confianza media)** — Los sellos son coherentes con su historia (AMIPCI desde 2014 según Think&Start), pero este frente no verificó su vigencia actual en los registros de la Asociación de Internet, DigiCert ni Great Place to Work. La verificación de vigencia queda como pendiente.

### 6.3 Comparadores de precios y listados de cupones

- **OBSERVADO** — Cyberpuerta aparece en listados de cupones con ofertas vigentes a 13 nov 2026: RadarCupón (`https://www.radarcupon.com.mx/tienda/cyberpuerta.mx`, actualizado 13 nov 2026: $100 en primera compra con mínimo de $700, hasta 58% y $3,000 de descuento, 25% de cashback Scotiabank en Buen Fin) y Picodi (`https://www.picodi.com/mx/cyber-puerta`, hasta 30% en Buen Fin / Black Friday / Cyber Monday según su histórico).
- **OBSERVADO** — Cyberpuerta figura como tienda participante del Buen Fin 2026 en el listado de Cazaofertas, en El Dictamen (10 nov 2026, «Comercio electrónico: Cyberpuerta») y en Líder Empresarial (2 nov 2026, junto a Amazon México, Mercado Libre y AliExpress).
- **NO VERIFICADO** — Presencia en comparadores de precios de hardware (ej.: Solotodo, HardGaming o similares): la búsqueda específica no devolvió evidencia de que Cyberpuerta esté listada en ellos. No se afirma que esté ni que no esté; no se encontró el dato.
- **NO VERIFICADO** — Listado en el monitoreo de tiendas virtuales de PROFECO: la mención encontrada (sitio VIU) describe el monitoreo en general, no incluye a Cyberpuerta. Sin verificar.

### 6.4 Datos de dominio (de terceros)

- **OBSERVADO** — Scamadviser (rastreado hace 3 días) califica a cyberpuerta.mx como «de media a buena» y «very likely not a scam but legit and reliable», con Trust Score 0 (sin escaneo en más de 30 días), Tranco alto por volumen de tráfico, SSL válido, dominio de 17 años y fecha de registro WHOIS 2009-05-27. URL: `https://www.scamadviser.com/es/comprobar-sitio-web/cyberpuerta.mx`.
- **INFERIDO (confianza baja)** — Hay una tensión entre «fundada en 2008» (web oficial) y «dominio registrado 2009-05-27» (Scamadviser): es compatible (empresa antes que dominio actual), pero la cifra de antigüedad del dominio viene de un tercero y no se contrastó con WHOIS directo.
- **NO VERIFICADO** — Tráfico, ranking y autoridad de dominio (no se usaron SimilarWeb, Semrush, Ahrefs ni ninguna herramienta de estimación; no se afirma ninguna cifra de visitas, ni de backlinks, ni de posición para ninguna keyword).

---

## 7. Canales y reputación

### 7.1 Canales propios observados

- **OBSERVADO** — Facebook: `facebook.com/Cyberpuerta.mx` (citado en las descripciones de sus Shorts de YouTube y en la entrevista de 2014). Instagram: `instagram.com/cyberpuertamx`. X/Twitter: `twitter.com/Cyberpuerta`. TikTok: abreviado «TT» en las mismas descripciones, sin handle completo visible en lo consultado. YouTube: canal activo con Shorts y videos de Buen Fin 2026 (ej.: Short `youtube.com/shorts/s_i_FQn9fvE`, «111626 CP Buenfin V3 1a1», hace 4 días, con enlace al configurador `https://www.cyberpuerta.mx/configurador-de-pc/` y texto «SÍGUENOS Y ÚNETE A LA COMUNIDAD CYBERPUERTA»).
- **OBSERVADO** — App móvil propia en App Store (`https://apps.apple.com/mx/app/cyberpuerta/id1636030641`, vendedor Cyberpuerta S.A. de C.V., versión 9.1.7 del 14 oct, **4.8 de 5 con 3.9 k calificaciones**) y en Play Store y AppGallery (enlazadas desde «Quiénes somos»; sus fichas no se abrieron).
- **OBSERVADO** — Video de YouTube embebido en «Quiénes somos» y otro en la página de Alchemy Force (`youtube.com/embed/J7sP8SiMgV4`).
- **NO VERIFICADO** — Número de seguidores en Facebook, Instagram, TikTok, X y YouTube, frecuencia de publicación y engagement: la búsqueda genérica de redes no devolvió conteos y no se abrieron los perfiles. No se afirma ninguna cifra de audiencia social.

### 7.2 Reputación: Trustpilot y reseñas propias

- **OBSERVADO** — Trustpilot (`https://es.trustpilot.com/review/cyberpuerta.mx`) muestra un patrón mixto y reciente. Reseñas vistas el 13 nov 2026: positiva del 11 nov 2026 (tarjeta de video en Buen Fin, entrega al día siguiente, «Recomiendo mucho»); negativas del 22 sep 2026 (retraso de envío de semanas, «muy mala atención»), 1 jun 2026 (garantía rechazada en tarjeta gráfica XFX, «la peor experiencia postventa»), 25 may 2026 y 6 may 2025 (devoluciones y monitor defectuoso). Los temas que se repiten en las negativas son **postventa, garantías rechazadas y devoluciones**, no el precio ni la legitimidad de la tienda.
- **NO VERIFICADO** — La puntuación agregada de Trustpilot (estrellas y número total de reseñas): los snippets consultados no la mostraron. No se afirma ningún score.
- **OBSERVADO** — Las reseñas propias por producto (ver §3) son antiguas en los ejemplos vistos (2022) y con volúmenes bajos por producto (8–180 ratings).
- **INFERIDO (confianza media)** — La reputación pública de Cyberpuerta es polarizada: precios y entrega rápida se elogian; la postventa (garantías, devoluciones, ensambles) concentra las quejas. Para un dropshipping nuevo, el aprendizaje es que la postventa es el frente reputacional que más cuesta y el que más se cita en público. Evidencia: el patrón temático es consistente en Trustpilot (2025–2026) y en los videos de creadores citados en búsquedas («¿Es CONFIABLE CYBERPUERTA?», «NO COMPRES en Cyberpuerta por esta RAZÓN»), aunque estos últimos no se visionaron.

---

## 8. Contenido propio (blog, guías, secciones)

- **OBSERVADO** — No se encontró una sección `/blog/` en los resultados consultados. Lo que sí existe:
  - **Páginas de categoría con texto SEO** (ver §1.2 y §5): párrafos descriptivos por categoría y por marca (ej.: `Tarjetas-Madre-ASUS-ROG`, `Barebones-MSI`, `Laptops-Gamer`), con estructura H2/H3, listados de marcas y CTA de compra.
  - **Sitemap de artículos** con 37 archivos (ver §2.2), cuyo contenido no pudo leerse (429).
  - **«Algunos artículos que podrían interesarte»** en «Quiénes somos»: la página anuncia «Explora nuestras guías, herramientas y recursos que te guiarán durante tu experiencia de compra» (13 nov 2026).
  - **Configurador de PC** (`https://www.cyberpuerta.mx/configurador-de-pc/`): valida compatibilidad entre procesador, tarjeta madre, memoria y fuente; incluye **Asistente con IA** que sugiere una configuración lista. El servicio de ensamble (`https://www.cyberpuerta.mx/Servicio-de-ensamble/`) explica requisitos mínimos, garantía de 30 días de Cyberpuerta y plazo de ~2 semanas.
  - **Alchemy Force** (`https://www.cyberpuerta.mx/conoce-alchemy-force/` y `https://www.cyberpuerta.mx/elige-tu-camino-configurador-de-pc-alchemy-force/`): marca propia de PCs gamer armadas, con garantía gestionada por Cyberpuerta de 1 año y certificación ISO 9001:2015 declarada.
- **OBSERVADO** — Landing de Buen Fin 2026 (`https://www.cyberpuerta.mx/Buen-Fin/`): «Del 13 al 17 de noviembre», «Tu buen momento. Tu Buen Fin.», «Hasta 12 MSI en toda la tienda», 18 promociones vía PayPal, bonificación BBVA de hasta 16% solo el 13 nov (compra mínima $5,000, tope $2,500/día/cliente) y 15% del 14–17 nov. Y landing de Pre Buen Fin (`https://www.cyberpuerta.mx/pre-buen-fin/`, vigencia 9–12 nov 2026).
- **INFERIDO (confianza media)** — El contenido de Cyberpuerta está orientado a la **conversión dentro del catálogo** (categorías, configurador, marca propia, landings de temporada), no a captar búsquedas informativas con guías periodísticas. El volumen de «artículos» del sitemap sugiere que sí hay producción editorial, pero su peso en buscador es bajo frente a producto/categoría (ver §1.2).
- **NO VERIFICADO** — Existencia, URL y contenido de un blog editorial; autoría, fechas y tráfico de los 37 archivos de sitemap de artículos; y si las páginas de categoría con texto SEO generan tráfico informativo.

---

## 9. Lecciones para el dropshipping (lectura F3, no de otros frentes)

- **OBSERVADO → INFERIDO** — El SEO de Cyberpuerta se sostiene en **escala de catálogo + marcado de producto + sitemap segmentado**, no en contenido editorial. Un dropshipping sin inventario no puede copiar la escala; su equivalente es profundidad en pocas categorías con fichas ricas y marcado completo desde el día uno.
- **OBSERVADO → INFERIDO** — El **configurador con IA + servicio de ensamble** es su activo de diferenciación buscable («arma tu PC»): convierte una búsqueda genérica en una herramienta. Un dropshipping puede replicar la lógica (herramienta interactiva + garantía clara) sin inventario.
- **OBSERVADO → INFERIDO** — La **postventa es su talón reputacional público** (Trustpilot 2025–2026). En hardware de ticket alto, la garantía y las devoluciones son el contenido de reputación que más se cita; un nuevo entrante debe diseñar postventa y comunicarla antes de escalar pauta.
- **HIPÓTESIS** — Su apertura a crawlers de IA (robots.txt permisivo + JSON-LD) es una ventaja GEO que un clon nuevo debería copiar desde el inicio: no bloquear GPTBot/ClaudeBot/PerplexityBot y publicar precios con disponibilidad en datos estructurados.
- **HIPÓTESIS** — Las landings de temporada (Buen Fin / Pre Buen Fin) con promociones bancarias detalladas son el formato que más citan prensa y cuponeras; un dropshipping puede replicar la mecánica (landing por temporada + condiciones por banco) aunque no tenga el catálogo.

---

## 10. Cierre: observado / inferido / hipótesis / no verificado

### OBSERVADO (con fuente y fecha, 13 nov 2026)

1. Home: título `Hardware, Computadoras, Laptops & Más | Cyberpuerta.mx` y meta descripción de «principal retailer de tecnología y hardware en México, fundada en 2008» (lectura directa, 19:49 UTC).
2. «Quiénes somos»: desde 2008, +55,000 productos, distribuidor autorizado Dell/HP/Lenovo/Kingston/Apple/Asus, Sello de Confianza Asociación de Internet, SSL DigiCert, ISO 9001, GPTW 2024, app en 3 tiendas, envíos desde $134 MXN, entrega 1–4 días hábiles.
3. `site:cyberpuerta.mx` devuelve sobre todo producto y categoría, con rastreos de 1–7 días; URLs jerárquicas descriptivas en español.
4. robots.txt completo (444 líneas, 19:49 UTC): Baidu/Yandex bloqueados; GPTBot/ClaudeBot/PerplexityBot con Disallow solo de rutas internas; Google-Extended `Allow: /`; comodín con Disallow de cuenta/carrito/búsqueda/parámetros/`/Outlet/`/`/api/`/`/Promociones/`; sitemap declarado.
5. Sitemap índice con 51 sub-sitemaps (facetas 6, marcas 2, categoría 1, CMS 1, reseñas 4, artículos 37), lastmod 2026-11-12T21:04:36-06:00; `/sitemap.xml` en raíz da 404.
6. JSON-LD `Product.offers` con precio MXN y disponibilidad en todas las fichas consultadas, y `Rating` agregado (ej.: 4.6/8, 4.7/180, 3.68/22, 4.6/18); páginas propias `/Opiniones-sobre-…/` con reseñas fechadas y «Compra verificada».
7. Paid observable: UTM `facebook / paid-social / dpa`, `rtbcr / retargeting / display`, `srsltid` (Google) y `utm_id` de Meta en Alchemy Force.
8. Buen Fin 2026: landing activa 13–17 nov, hasta 12 MSI, 18 promociones PayPal, BBVA 16% solo 13 nov; Pre Buen Fin 9–12 nov; tienda listada como participante en Cazaofertas, El Dictamen (10 nov) y Líder Empresarial (2 nov).
9. Prensa: Think&Start 2014 (entrevista a Jan Plassow, AMIPCI, Ekomi), Pubrio (nominación CNN Expansión top 3 tiendas 2011), ENIUN 23 feb 2026, La Jornada Jalisco (configurador), El Heraldo de Saltillo 9 abr 2025; afiliados TradeTracker vía Tec-Check.
10. Canales: FB `facebook.com/Cyberpuerta.mx`, IG `instagram.com/cyberpuertamx`, X `twitter.com/Cyberpuerta`, TikTok (handle no visto), YouTube activo con Shorts de Buen Fin; app iOS 4.8/5 con 3.9 k calificaciones, v9.1.7 (14 oct).
11. Trustpilot con reseñas recientes mixtas (positiva 11 nov 2026; negativas 22 sep 2026, 1 jun 2026, 25 may 2026, 6 may 2025) centradas en postventa/garantías/devoluciones; Scamadviser: «likely not a scam», dominio registrado 2009-05-27.
12. Contenido propio: configurador de PC con Asistente con IA, servicio de ensamble (~2 semanas, garantía 30 días), marca Alchemy Force (garantía 1 año), páginas de categoría/marca con texto SEO.

### INFERIDO (con evidencia y confianza)

1. (Alta) El inventario indexado es producto/categoría; lo editorial pesa poco en buscador.
2. (Alta) Los crawlers de IA no están bloqueados en contenido público; Google-Extended permitido explícito.
3. (Alta) El marcado `Product/offers/aggregateRating` alimenta rich results de precio, disponibilidad y estrellas.
4. (Alta) Corre paid social Meta (DPA + retargeting) y paid search/Shopping Google.
5. (Media) El sitemap segmentado (51 archivos, lastmod diario) indica operación SEO madura de catálogo grande.
6. (Media) Los textos de categoría son plantilla SEO sin fuentes ni autoría; débiles para citabilidad GEO.
7. (Media) La reputación es polarizada: precio/entrega elogiados, postventa criticada; la postventa es el riesgo reputacional principal.
8. (Media) Los sellos (AMIPCI, ISO, GPTW) son coherentes con su historia, sin verificación de vigencia en este informe.
9. (Baja) La diferencia «fundada 2008» vs dominio registrado 2009 es compatible, no una contradicción probada.

### HIPÓTESIS (derivadas, marcadas)

1. Su activo GEO más citable es el configurador con IA + fichas técnicas completas, no el blog.
2. Copiar desde el día uno su apertura a crawlers de IA + JSON-LD de precio/disponibilidad es ventaja GEO barata para un clon.
3. Replicar landings de temporada con condiciones bancarias detalladas es el formato que más prensa y cuponeras recogen.

### NO VERIFICADO

1. Posiciones en buscador, tráfico, volúmenes de búsqueda y autoridad de dominio (sin Search Console ni SimilarWeb/Semrush/Ahrefs).
2. Número total de URLs indexadas.
3. Contenido, cantidad de URLs y frescura de los sub-sitemaps (el de artículos dio 429 y no se reintentó, conforme a reglas).
4. Marcado `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage` (no se abrió HTML crudo).
5. Campañas activas, creatividades y gasto en Meta Ads Library / Google Ads Transparency.
6. Citas o menciones en respuestas de IA (ningún motor fue interrogado).
7. Puntuación agregada de Trustpilot; seguidores y engagement en Facebook, Instagram, TikTok, X y YouTube.
8. Presencia en comparadores de hardware (Solotodo, HardGaming u otros) y en el monitoreo de PROFECO.
9. Vigencia actual de los sellos AMIPCI/ISO/GPTW y del programa Ekomi.
10. Existencia, URL y contenido de un blog editorial; autoría y fechas de los artículos del sitemap.
11. Fichas de Play Store y AppGallery (no se abrieron); número de sucursales físicas (la cifra de 4 viene de cuved.com.mx, sin contraste oficial).

---

## Fuentes consultadas (13 nov 2026)

- https://www.cyberpuerta.mx/ (home, 19:49 UTC)
- https://www.cyberpuerta.mx/robots.txt (19:49 UTC)
- https://www.cyberpuerta.mx/export/google/sitemap-mx.xml (índice, 19:50 UTC)
- https://www.cyberpuerta.mx/sitemap.xml (404)
- https://www.cyberpuerta.mx/Quienes-somos/
- https://www.cyberpuerta.mx/Buen-Fin/ y https://www.cyberpuerta.mx/pre-buen-fin/
- https://www.cyberpuerta.mx/configurador-de-pc/ (citado en YouTube y Tecno-Comunicación)
- https://www.cyberpuerta.mx/Servicio-de-ensamble/
- https://www.cyberpuerta.mx/conoce-alchemy-force/ y https://www.cyberpuerta.mx/elige-tu-camino-configurador-de-pc-alchemy-force/
- Búsquedas web del 13 nov 2026: marca, `site:cyberpuerta.mx`, blog/guías, opiniones/reputación, Buen Fin 2026, redes sociales, comparadores, sellos AMIPCI/CNN Expansión, Trustpilot, configurador/Arma tu PC.
- Páginas de terceros citadas: es.trustpilot.com/review/cyberpuerta.mx; scamadviser.com/es/comprobar-sitio-web/cyberpuerta.mx; thinkandstart.com (2014); pubrio.com; eniun.com (23 feb 2026); tec-check.com.mx; elheraldodesaltillo.mx (9 abr 2025); lajornadajalisco.com.mx; radarcupon.com.mx; picodi.com/mx/cyber-puerta; cazaofertas.com.mx; eldictamen.mx (10 nov 2026); liderempresarial.com (2 nov 2026); apps.apple.com/mx/app/cyberpuerta/id1636030641; youtube.com/shorts/s_i_FQn9fvE.

## Límites

- Solo fuentes públicas y lectura de texto de páginas; la home apenas renderizó contenido en el fetch y no se abrió el HTML crudo de ninguna página (el marcado más allá de `Product/offers` no se pudo confirmar).
- Una lectura (`sitemap-article-mx.xml`) devolvió 429 y no se reintentó, conforme a las reglas del encargo; su contenido queda como desconocido, no como ausente.
- No se interrogó ningún motor de IA, no se consultaron herramientas de tráfico/rankings ni bibliotecas de anuncios, y no se abrieron perfiles sociales ni fichas de Android/Huawei.
- Las cifras de terceros (Scamadviser, Pubrio, ENIUN, cuved) se reportan como lo que dicen esas fuentes, no como hechos verificados por este frente.
- Nada se publicó ni se contactó; no se extrajeron datos personales.
