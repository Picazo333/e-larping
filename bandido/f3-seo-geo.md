# F3 — SEO / GEO + presencia digital — Bandido Studio

- **Frente:** F3 (SEO/GEO + presencia digital) — Fase 2, WO-E-LARPING
- **Sitio:** https://bandidostudio.com/
- **Fecha de investigación:** 13 nov 2026
- **Método:** `browser.open` (lectura de texto de páginas) y `browser.search` (búsqueda web). Sin navegador en vivo, sin interrogación de motores de IA, sin contacto ni publicación.
- **Convención:** cada afirmación va marcada como **OBSERVADO** (visto en una fuente leída ese día), **INFERIDO** (deducción explícita a partir de lo observado) o **NO VERIFICADO** (no se pudo comprobar con este método). No se afirman posiciones en ranking, tráfico ni volúmenes de búsqueda: no se midieron.

## 0. Hallazgo marco: sin checkout observable (no es un fracaso, es el modelo)

**OBSERVADO —** En el texto extraído de la home (13 nov 2026) no aparece ningún precio, botón de añadir al carrito, carrito ni pasarela de pago. El llamado a la acción es otro: «Registra tus datos y un asesor se comunicará contigo para brindarte mayor información» y «Contamos con asesoría especializada para proyectos y convenios para arquitectos y diseñadores de interiores». La sección «DESCARGABLES / CATÁLOGO DE PRODUCTOS» remite a un catálogo (imágenes `Mockup-catalogo-png-2.png` y `Portada-catalogo.webp`, oct 2026) y a fichas/instructivos en PDF. Es decir: **venta por asesor/cotización, con catálogo en PDF, no e-commerce transaccional observable**.

**OBSERVADO (matiz) —** Quedan restos de WooCommerce: `robots.txt` bloquea `/wp-content/uploads/wc-logs/`, `woocommerce_transient_files/`, `woocommerce_uploads/` y `/*?add-to-cart=`; el sitemap de páginas lista `/en/checkout-3/` (última modificación 2023-08-24) y `/en/shop/` (2023-11-21). **INFERIDO —** WooCommerce estuvo instalado y hubo (o hay) una tienda/checkout en inglés, pero su última modificación es de 2023 y no hay versión en español de esas URLs en el sitemap leído; nada de eso prueba un checkout activo en 2026. **NO VERIFICADO —** si `/en/checkout-3/` o `/en/shop/` responden hoy, si hay precios dentro de fichas de producto o si el checkout funciona: esas lecturas quedaron bloqueadas por el 429 (ver «Sin verificar»).

Consecuencia SEO/GEO: el sitio no compite por consultas transaccionales («comprar lámpara X», «precio») porque no publica precios ni compra en línea; compite por marca, por autoridad de diseño y por consultas de especificación/proyecto (B2B: arquitectos e interioristas).

## 1. Visibilidad en buscadores

### 1.1 Búsqueda de marca — fuerte

**OBSERVADO —** La búsqueda «Bandido Studio bandidostudio.com diseño iluminación México» devuelve como primer bloque la home y una cobertura de prensa reciente y convergente (ver §5). La home es el resultado principal para la marca.

**OBSERVADO —** Título de la home (leído 13 nov 2026): **«Luminarias en México - Lámparas Mexicanas de Autor - Bandido Studio»**. Es un título con intención SEO explícita: combina categoría genérica («Luminarias en México», «Lámparas Mexicanas de Autor») con marca. **INFERIDO —** Es la página mejor optimizada on-page del sitio para captar búsquedas genéricas de categoría, no solo de marca.

### 1.2 Operador `site:` — sin resultado, no concluyente

**OBSERVADO —** La búsqueda `site:bandidostudio.com` devolvió **«No results found»**. **INFERIDO —** Eso es una limitación del operador en este motor de búsqueda, **no** prueba de desindexación: en las mismas búsquedas de ese día el motor devuelve la home (`https://bandidostudio.com/`), el PDF de instructivos (`https://bandidostudio.com/wp-content/uploads/Documentos/BANDIDO_INSTRUCTIVOS_2026.pdf`) y el PDF de datasheets 2024, es decir, el dominio **sí está indexado al menos parcialmente**. No se afirma ningún conteo de páginas indexadas.

### 1.3 Búsquedas genéricas — ausente en la muestra

**OBSERVADO —** En la búsqueda genérica «lámparas de autor México diseño iluminación decorativa comprar», Bandido Studio **no aparece** en los resultados devueltos (primeros 7): dominan Craftruly (lámpara de cobre, 399 USD), dos guías de `es.jppai.net` (lámparas artesanales / personalizadas), CoLores DECOR, La Silla Acapulco (Taquito, MXN $1,990) y Filamento (Nahual, 3,070 MXN). **INFERIDO —** En consultas genéricas transaccionales/informativas de iluminación, Bandido no es visible en esa muestra — coherente con no publicar precios ni contenido transaccional. No es una posición medida: es ausencia en una muestra de 7 resultados, un día concreto.

**OBSERVADO —** En cambio, en búsquedas de marca y de colecciones («Bandido Studio ARUNA», «Bandido Studio NOVA») los resultados son la propia web y prensa de diseño (Emprendedor, Ámbito, CoolhunterMX, `a.com.mx/nova/`). La visibilidad es **de marca, no de categoría genérica**.

### 1.4 Posiciones, tráfico y volúmenes

**NO VERIFICADO —** No se midió ninguna posición de ranking, ni tráfico, ni volumen de búsqueda, ni Domain Authority ni backlinks (no hay acceso a Search Console, Analytics ni a herramientas SEO de terceros en este frente). No se inventa ningún número.

## 2. Robots.txt — abierto por defecto, sin reglas para crawlers de IA

**OBSERVADO —** `https://bandidostudio.com/robots.txt`, leído 13 nov 2026, texto íntegro:

- `User-agent: *` — `Disallow: /wp-content/uploads/wc-logs/`, `/woocommerce_transient_files/`, `/woocommerce_uploads/`, `/*?add-to-cart=`, `/*?*add-to-cart=`, `/wp-admin/`; `Allow: /wp-admin/admin-ajax.php`.
- Bloque WPForms: `Disallow: /wp-content/uploads/wpforms/`.
- Bloque Yoast: `User-agent: *` + `Disallow:` (vacío = permitir todo lo demás) + `Sitemap: https://bandidostudio.com/sitemap_index.xml`.

**OBSERVADO —** No hay ninguna regla dirigida a crawlers de IA: no aparecen `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, `CCBot`, `PerplexityBot` ni similares. **INFERIDO —** Los crawlers de IA **no están bloqueados** (caen bajo `User-agent: *`, que solo bloquea las rutas listadas), pero tampoco están **explícitamente permitidos ni invitados**: no hay una política de IA declarada. Para GEO es un punto neutro-positivo: el contenido es rastreable por defecto, sin señal de preferencia.

**OBSERVADO —** El sitemap declarado en robots es `sitemap_index.xml`; el `sitemap.xml` consultado redirige/resuelve al mismo índice (ver §3).

## 3. Sitemap — estructura Yoast, bilingüe, con actividad reciente

**OBSERVADO —** `https://bandidostudio.com/sitemap.xml` (índice, leído 13 nov 2026) lista **10 sub-sitemaps**:

| Sub-sitemap | Última modificación observada |
|---|---|
| `post-sitemap.xml` | 2026-11-06T19:32:02+00:00 |
| `page-sitemap.xml` | 2026-11-05T19:16:26+00:00 |
| `wpdmpro-sitemap.xml` | 2026-10-27T22:58:04+00:00 |
| `product-sitemap.xml` | 2026-11-13T19:46:01+00:00 |
| `category-sitemap.xml` | 2026-11-06T19:30:21+00:00 |
| `wpdmtag-sitemap.xml` | 2026-10-27T22:58:04+00:00 |
| `product_cat-sitemap.xml` | 2026-11-13T19:46:01+00:00 |
| `product_tag-sitemap.xml` | 2026-11-13T19:43:47+00:00 |
| `pa_delivery-time-sitemap.xml` | 2026-11-13T19:46:01+00:00 |
| `pa_tiempo-de-entrega-sitemap.xml` | 2026-11-13T19:46:01+00:00 |

**INFERIDO —** Es la estructura estándar de **Yoast SEO sobre WordPress + WooCommerce** (el bloque Yoast en robots.txt lo confirma): sitemaps separados por tipo de contenido, con atributos de producto (`pa_delivery-time` / `pa_tiempo-de-entrega` = atributo «tiempo de entrega» en inglés y español). La fecha más reciente es el **mismo 13 nov 2026, 19:46 UTC**, en productos y categorías: el catálogo se tocó el día de la investigación. El sitio se mantiene activamente.

### 3.1 Páginas (page-sitemap)

**OBSERVADO —** Se contabilizaron **24 URLs de página** en la vista leída: home ES + EN (`https://bandidostudio.com/`, `/en/`), `/productos/`, `/colecciones/` + `/en/collections/`, `/nosotros/` + `/en/about-us/`, `/eventos/` + `/en/events/`, `/contacto/` + `/en/contact-us/`, `/descargables/` + `/en/downloads/`, `/materiales-y-mantenimiento/` + `/en/materials-and-maintenance/`, `/glosario-de-iluminacion/` + `/en/lighting-glossary/`, `/preguntas-frecuentes/` + `/en/faq-bandido/`, más solo en inglés: `/en/shop/`, `/en/checkout-3/`, `/en/faq-framelova/`, `/en/about-us-2/`, `/en/document-library/`. Últimas modificaciones: home 2026-11-03, contacto 2026-11-05, nosotros 2026-10-27, descargables 2026-10-28, materiales 2026-10-22, eventos 2026-10-24, colecciones 2026-10-01, glosario y FAQ 2026-06-19.

**INFERIDO —** Arquitectura bilingüe ES/EN casi simétrica en las páginas de contenido, con asimetrías en páginas heredadas/comerciales (tienda y checkout solo en inglés; «faq-framelova» es un resto de otro proyecto o plantilla). La home es la página con modificación más reciente entre las páginas (3 nov), pero los productos se actualizaron después (13 nov).

### 3.2 Productos (product-sitemap)

**OBSERVADO —** La vista devuelta es una sola línea larga truncada en la visualización: se distinguen **al menos 17 URLs de producto** antes del corte, entre ellas (ES y EN duplicadas): `/productos/`, `/en/shop/`, `/en/producto/axis-sconce-lamp/`, `/en/producto/duo-verde-tikal-pendant-lamp/`, `/en/producto/buna-x-andres-gutierrez/`, `/producto/lampara-colgante-buna-x-andres-gutierrez/`, `/en/producto/buna-pendant-x-andres-gutierrez/`, `/en/producto/humo-natural-pendant-lamp-13/`, `/en/producto/humo-mottled-sconce-lamp-13/`, `/en/producto/templo-sconce-lamp/`, `/en/producto/templo-floor-lamp/`, `/en/producto/aura-walnut-pendant-lamp/`, `/en/producto/aura-wall-lamp-22/`, `/en/producto/aura-table-lamp/`, `/en/producto/fase-sconce-lamp-25/`, `/en/producto/naga-black-pendant-lamp/`, y más allá del corte. Cada producto incluye varias imágenes en el sitemap (fotos de producto + fotos en contexto: Design House, showroom, proyectos). Últimas modificaciones de producto vistas: 2026-06-29/30.

**NO VERIFICADO —** El **conteo total exacto de productos** en el sitemap: la paginación de la vista quedó interrumpida por el 429 (ver «Sin verificar»). No se afirma un total. Colecciones nombradas en el resto del sitio: ARUNA (2026), NOVA (AXIS / FLUX / CORE), DUO, BUNA (x Andrés Gutiérrez), HUMO, FASE, TEMPLO, AURA, NAGA.

### 3.3 Entradas / eventos (post-sitemap)

**OBSERVADO —** El post-sitemap no es un blog: son **páginas de colección y de evento**. URLs observadas (al menos 13 antes del corte): `/colecciones/nova/` (2026-03-15), `/colecciones/un-ciclo-interminable/` + `/en/collections/un-ciclo-interminable/`, `/eventos/zona-maco-2025-un-ciclo-interminable/`, `/eventos/la-frecuencia-de-la-luz/`, `/eventos/espacio-cdmx-2024/`, `/eventos/bulbo-xv-aniversario-materialuz/`, `/eventos/cosentino-materialuz/`, `/eventos/buna-x-andres-gutierrez-originario/`, `/eventos/zona-maco-2024/`, `/eventos/casa-hotbook-2024/`, `/eventos/diseno-contenido-2023/`, `/en/contact-us/oficinapuebla/` (2025-02-20). Modificaciones en bloque el 2026-06-17 para los eventos.

**INFERIDO —** No hay estrategia de blog SEO con artículos informativos periódicos; el «contenido editorial» del sitio es de **colección y de evento** (fichas con galerías), más dos activos informativos estables: glosario y FAQ (ver §4).

### 3.4 Otros sitemaps

**OBSERVADO —** Existen `wpdmpro-sitemap.xml` y `wpdmtag-sitemap.xml` (Download Manager: los descargables/catálogos en PDF están gestionados como descargas) y `category-sitemap.xml` / `product_cat-sitemap.xml` / `product_tag-sitemap.xml`. **NO VERIFICADO —** Su contenido (la lectura de `category-sitemap.xml` quedó bloqueada por el 429): no se listan categorías ni etiquetas.

## 4. Datos estructurados y SEO técnico observable

### 4.1 JSON-LD, meta description, Open Graph, hreflang, canonical

**NO VERIFICADO —** La lectura por `browser.open` devuelve **texto extraído, no el HTML fuente**: no expone etiquetas `<script type="application/ld+json">`, `<meta name="description">`, Open Graph/Twitter, `hreflang`, `canonical` ni encabezados HTTP. Por tanto **no se puede confirmar ni negar** que el sitio tenga JSON-LD (de producto, organización o local), ni qué meta description usa, ni si hay hreflang ES/EN. Es una limitación del método de este frente, no un hallazgo sobre el sitio. Queda en «Sin verificar» para un frente con acceso al código fuente.

**INFERIDO (débil, a partir de indicios) —** Yoast SEO está instalado (bloque en robots.txt y formato de sitemaps), y Yoast genera por defecto JSON-LD de WebSite/Organization y datos de producto en WooCommerce; pero eso es una suposición sobre la configuración, no una observación: **no se afirma que exista**.

### 4.2 Contenido propio con valor SEO/GEO

**OBSERVADO —** Activos de contenido en el propio sitio:

- **Glosario de iluminación** (`/glosario-de-iluminacion/`, última modificación 2026-06-19) y su versión EN: contenido definitorio, el formato más citable para GEO.
- **Preguntas frecuentes** (`/preguntas-frecuentes/`, 2026-06-19) y `/en/faq-bandido/`: formato pregunta-respuesta, también altamente citable.
- **Materiales y mantenimiento** (`/materiales-y-mantenimiento/`, 2026-10-22): guía por material (mármol negro, barro moteado, nogal, ónix, vidrio, acero cepillado…).
- **Descargables**: catálogo de productos (portada/mockup oct 2026), datasheets 2024 (`Product-Datasheets-2024-Bandido-Studio-1.pdf`) e instructivos 2026 (`BANDIDO_INSTRUCTIVOS_2026.pdf`, con fichas por modelo: fuente de luz, potencia, lúmenes, temperatura de color, voltaje, instalación y precauciones). **OBSERVADO en el PDF de instructivos (vía búsqueda):** fichas con datos técnicos concretos por lámpara (ej. AXIS: 6 W G9 LED, 600 lm, 2700 K, 120–127 V) y las dos sedes (CDMX y Puebla).
- **Páginas de colección** (NOVA, Un ciclo interminable) y **de evento** (ver §3.3) con narrativa de material y proceso.
- **Home con texto editorial corto**: ARUNA («la arena cambia de estado y adquiere transparencia», vidrio termoformado, acero cepillado), FLUX (acero con pátina bronce), CORE (Oyster White), FASE (ónix).

**INFERIDO —** El contenido más «GEO-amigable» del sitio son glosario, FAQ y fichas técnicas: responden preguntas con datos verificables. El resto es mayoritariamente visual (galerías con nombres de archivo descriptivos y alt text visible en las imágenes: ej. «Lámpara colgante ARUNA cuerpo de vidrio termoformado color alba y eje de acero cepillado, diseñada por Bandido Studio en México, 2026»). **OBSERVADO —** Los nombres de archivo de imagen son descriptivos y con keywords (`ARUNA-lampara-colgante-2-vidrio-acero-productos-Bandido-1.webp`, `FLUX-lampara-arbotante-70-patina-productos-Bandido-1.webp`): buen SEO de imágenes. **INFERIDO —** La home, en cambio, tiene poco texto corrido: los motores (clásicos y de IA) tienen que apoyarse en títulos, pies de imagen y fichas.

### 4.3 Presencia local / NAP

**OBSERVADO —** En la home (pie): «Bandido Studio CDMX, Aristóteles 127, Polanco, Polanco IV Secc, Miguel Hidalgo, Ciudad de Mexico, CDMX 11550. +52 555 0872 443. Hours: Mo–Fr 10:00–17:00». En el PDF de instructivos (vía búsqueda): sede Puebla, «Callejón del Cristo 2 Int. 6 A, Col. San José del Puente, 72150 Puebla, Pue., México, +52 222 688 8442». La ficha de lugar devuelta por la búsqueda confirma «Bandido Studio CDMX», categoría «Lighting Store», coordenadas 19.431849, -99.19336.

**INFERIDO —** NAP consistente entre web, PDFs y ficha de lugar: señal de SEO local sólida. **NO VERIFICADO —** Ficha de Google Business Profile (reseñas, fotos, horarios actualizados): no se consultó.

### 4.4 Sección «Prensa» en la propia web

**OBSERVADO —** La home tiene una sección «prensa / ÚLTIMAS NOTICIAS» con una sola imagen (`ARUNA-Lampara-Colgante-Bandido-Amy-Bello-2026-12-1.webp`, nov 2026) y **sin texto de artículo extraído**: no se pudo leer ningún titular, enlace ni fecha de nota propia. **INFERIDO —** La prensa vive fuera (medios terceros, §5), no como sala de prensa con artículos en el propio dominio. Eso concentra la autoridad externa pero no genera contenido indexable propio sobre esas menciones.

### 4.5 Redes sociales enlazadas desde el sitio

**OBSERVADO —** La home tiene un encabezado «Síguenos en instagram» (sin handle extraído en el texto). **OBSERVADO (vía terceros) —** Instagram `@bandidostudio`, Facebook `@bandidostudio`, LinkedIn `@bandidostudio` (podcast Hablando de Luz, Everand, 5 jun 2023; Grid Magazine, 22 feb 2024: «CONTACTO: IG: @bandidostudio»). **NO VERIFICADO —** Seguidores, frecuencia de publicación, enlaces UTM desde redes, ni si el footer enlaza efectivamente a esos perfiles (la extracción de texto no mostró los enlaces).

## 5. Autoridad externa: prensa de diseño, ferias, premios

**OBSERVADO —** Cobertura de terceros convergente y reciente. No se afirma tráfico ni autoridad numérica de ninguno; solo existencia, fecha y contenido citado:

| Fuente | Fecha | Qué dice de Bandido |
|---|---|---|
| Emprendedor.com — «Dos estudiantes hicieron una lámpara en Puebla; 10 años después venden diseño mexicano al mundo» | pub. 28 oct 2026, act. 5 nov 2026 | Fundada en Puebla en 2016 por Alejandro Campos y Joel Rojas; iluminación decorativa, manufactura en México; presencia en Zona MACO, ICFF, Maison & Objet y Salone del Mobile «según distintos registros de la marca y publicaciones especializadas»; Nova (Core, Fluxus, Axis) en 2026 y Aruna como colección destacada en la web; fichas técnicas con potencia, temperatura de color, materiales, instalación y certificación; ICFF la destacó como parte de una generación que usa materiales/técnicas mexicanas sin estética folclórica evidente. |
| Ámbito.com — «Eran simples estudiantes que diseñaban y vendían lámparas en Puebla y hoy lideran un negocio internacional» | 30 oct 2026 | Mismo relato fundacional (proyecto universitario, Tec de Monterrey Puebla, lanzamiento formal abril 2016); Puebla como centro de operación; vidrio, madera, metal, piedra; talleres nacionales. |
| CoolhunterMX — «Bandido Studio: Diez años iluminando el diseño mexicano desde Puebla» | 3 oct 2025, act. 6 oct 2025 | «Una de las marcas de iluminación decorativa más reconocidas de México»; colección inicial CTR; materiales: mármol, ónix, vidrio, talavera, acero, barro; proveedores: vidrio en Guadalajara, talavera en Puebla, barro en Oaxaca; ónix en Tecalitlán; blancos dinámicos y colaboraciones internacionales en exploración. |
| CoolhunterMX — Design House México 2025 | 11 oct 2025 | La iluminación de Bandido acompaña el espacio «Itzcali» de Sebastián Ángeles Studio. |
| CoolhunterMX — Guía de regalos navideños 2025 | 9 dic 2025 | Menciona las lámparas de Bandido como diseño mexicano «sólido, experimental y funcional». |
| CoolhunterMX — WePresent Design Hub | 11 oct 2025 | Lámpara colaborativa de Bandido con Andrés Gutiérrez entre los acentos del showroom. |
| Habitat Expo — «Bandido Studio - Jurado - Premio de Diseño Promesas México» | s.f. (consultado 13 nov 2026) | Bandido como **jurado** del premio (rol de autoridad sectorial, no premio ganado). |
| México Territorio Creativo — «Bandido: Exploración y transformación de la luz» | s.f. | Perfil del estudio; colección Menguante (10 años, luna menguante). |
| Grid Magazine — «BANDIDO STUDIO: Artífices de luz» | feb 2023 (Vol. 02) | Perfil extenso; FASE (ónix, latón, acero) en Zona MACO 2023; exposiciones: ICFF Nueva York, Design Week CDMX, Wuhan Design Biennale (China), The Worldwide Things. |
| Grid Magazine — «HUMO I Bandido Estudio» | 22 feb 2024 | Colección HUMO: barro de Santa María Atzompa, Oaxaca; colgante y arbotante. |
| PodioMX — «Lámpara AURA» | jul 2019 | AURA: esmalte cerámico sobre acero («peltre»), nogal, acero a +700 °C. |
| PodioMX — «Colección HUMO» | feb 2024 | Presentación de HUMO; barro natural/moteado, difusores de vidrio. |
| a.com.mx — «NOVA: un destello infinito» | s.f. (429 días antes de la consulta) | NOVA: AXIS (discos parabólicos de vidrio, acero), FLUX (eje vertical, difusores esféricos de vidrio opalino), CORE (cuerpo cúbico de acero, difusor esférico); «por primera vez, el estudio adoptó un proceso de creación expandida, incorporando visualizaciones CGI y recursos de inteligencia artificial». |
| ArchDaily en Español | 1 nov 2026 (Hotel Casa Cuenca) | Bandido Studio listado como **proveedor** en el proyecto Hotel Casa Cuenca (Taller Ivan Esqueda et al., 2024), junto a Porcelanosa, David Pompa y otros. |
| Tec de Monterrey Conecta — «R-Evolucionan el diseño» | 13 mar 2018 | Fundadores EXATEC Puebla; tres áreas: desarrollo de producto, maquila e interiorismo; feria Wanted Design en Nueva York; entrada al mercado estadounidense. |

**OBSERVADO —** Ferias y plataformas donde el sitio o la prensa sitúan a Bandido (algunas auto-declaradas en el propio sitio, otras en prensa): Design House 2024, 2025 y **2026** (18.ª edición, Design Week México; en la home, espacio con Goldberg Interiores — la imagen se titula así); Zona MACO 2024 y 2025 (performance «Crear, un ciclo interminable», colección DUO en mármol verde Tikal); Espacio CDMX 2024 (Casa Rosa, Polanco); Casa Hotbook 2024; Diseño Contenido 2023; Materia & Luz en Costa Rica con Alto Design Studio; XV aniversario de Bulbo (SPGG, Nuevo León); Cosentino City CDMX (Día Internacional de la Luz); décimo aniversario (cena 24 sep, edificio Ferrocarril de Cuernavaca 780, Polanco); «Materia en Tránsito» (tercera edición de su espacio en CDMX, 2026, con cimática y ARUNA); «La Frecuencia de la Luz» (laboratorio sonoro, showroom CDMX).

**INFERIDO —** La autoridad externa es el activo SEO/GEO más fuerte de Bandido: **prensa de diseño mexicana de primer nivel + ferias de referencia + un rol de jurado + presencia como proveedor en proyectos publicados en ArchDaily**. Es autoridad ganada en 10 años, no comprable ni replicable en un trimestre. El pico de cobertura es **octubre–noviembre de 2026** (décimo aniversario): tres notas largas en menos de un mes (CoolhunterMX 3 oct 2025; Emprendedor 28 oct 2026; Ámbito 30 oct 2026) — el aniversario funcionó como gancho de prensa.

**NO VERIFICADO —** Premios **ganados** por Bandido: no se encontró ninguno; lo verificado es un rol de **jurado** (Habitat Expo) y participaciones en ferias. No se afirma ningún premio. Tampoco se verificó la presencia en Maison & Objet y Salone del Mobile más allá de la atribución de Emprendedor.com («según distintos registros…»): se cita como atribución, no como hecho propio.

**OBSERVADO (ambigüedad de dominio) —** Las notas del podcast Designaholic (Acast) enlazan «Bandido Studio → https://bandidostudio.com.mx» (dominio `.com.mx`, distinto del `.com` investigado). **NO VERIFICADO —** Si `bandidostudio.com.mx` es de la misma empresa, redirige al `.com` o es otro sitio. Es un riesgo de fragmentación de entidad: dos dominios circulando para la misma marca.

## 6. Pauta observable

**NO VERIFICADO —** No se observó **ningún UTM** (`utm_source`, `utm_medium`, `utm_campaign`) en ninguna URL devuelta por las búsquedas ni en el sitemap. Eso no prueba que no haya pauta: solo que ninguna URL con UTM apareció en esta muestra. **NO VERIFICADO —** Biblioteca de Anuncios de Meta y Centro de Transparencia de Google Ads: no se consultaron en este frente (requerirían navegación en vivo). No se afirma que Bandido paute ni que no paute, ni en qué canales, ni con qué presupuesto. La venta por asesor y el público B2B (arquitectos/interioristas) hacen plausible una pauta de captación, pero es una hipótesis, no un hallazgo.

## 7. Citabilidad GEO (evaluación del contenido, sin interrogar motores de IA)

No se interrogó a ningún motor de IA. Lo que sigue es una evaluación del **contenido** frente a lo que un motor de respuestas necesitaría para citar a Bandido.

### A favor

1. **Entidad clara y corroborada por terceros:** fundadores con nombre (Alejandro Campos, Joel Rojas), fecha (abril 2016), lugar (Puebla; sedes CDMX y Puebla con dirección y teléfono), 10 años de historia, materiales y procesos con origen geográfico (ónix de Tecalitlán, barro de Santa María Atzompa, talavera de Puebla, vidrio de Guadalajara). Un motor puede construir una ficha de entidad sin ambigüedad.
2. **Fichas técnicas con datos duros:** potencia, lúmenes, temperatura de color (2700 K), voltaje, materiales, instalación y certificación por modelo, en PDF y —según Emprendedor— en el sitio. Son datos citables en respuestas comparativas («qué lámpara colgante de ónix…»).
3. **Formatos pregunta-respuesta propios:** glosario de iluminación y FAQ (jun 2026). Son los formatos que los motores de IA extraen con más facilidad.
4. **Contenido bilingüe ES/EN** (páginas, productos, colecciones), que amplía la superficie citable a consultas en inglés sobre diseño mexicano.
5. **Prueba social con nombres propios y fechas:** Design House 2024–2026, Zona MACO 2024–2025, Cosentino, Bulbo, Alto Design (Costa Rica), colaboraciones (Andrés Gutiérrez / BUNA, Originario). Cada evento es una afirmación verificable con fecha.
6. **Actualización visible en 2026:** ARUNA (sep–nov 2026), NOVA, décimo aniversario, cobertura de prensa de oct–nov 2026. El contenido no parece abandonado.

### En contra

1. **Sin precios ni compra:** un motor no puede responder «¿cuánto cuesta la lámpara ARUNA?» ni «¿dónde comprar Bandido?» con una transacción; solo puede derivar a «contactar a un asesor». Para consultas transaccionales, Bandido es prácticamente incitable.
2. **JSON-LD no verificado** (ver §4.1): si no hay datos estructurados de producto/organización, el motor depende del texto y de terceros.
3. **Poco texto corrido:** home y colecciones son mayoritariamente visuales; la narrativa de material/proceso está, pero en frases cortas y en PDFs (los PDFs se indexan, pero se citan peor que el HTML).
4. **Sala de prensa vacía en la práctica:** la sección «prensa» de la home no expone titulares ni enlaces legibles; la autoridad externa no se recicla como contenido propio indexable.
5. **Sin `llms.txt` verificado ni política de IA declarada** (ver «Sin verificar»): no hay una puerta explícita para crawlers de IA, aunque tampoco un bloqueo.
6. **Ambigüedad de dominio** (`.com` vs `.com.mx` citado por un tercero): fragmenta la entidad si ambos existen.
7. **Sin blog ni guías de compra:** no hay contenido que responda «cómo elegir una lámpara colgante para…», «qué altura…», «ónix vs mármol…», que es donde los motores citan a los competidores de contenido (las guías de `jppai.net` que sí aparecen en genéricas).

### Veredicto GEO

**INFERIDO —** Bandido es **citable como entidad de autoridad en diseño/iluminación mexicana** (quién es, qué hace, con qué materiales, dónde se ha expuesto) y **poco citable como opción de compra** (sin precio, sin stock, sin checkout). Para un motor de IA, es una fuente de «quién» y de «cómo se hace», no de «cuánto cuesta ni dónde lo compro».

## 8. Lecciones para e-larping (dropshipping con IA + UGC, sin inventario ni ads)

Lo replicable y lo que no, a partir de lo observado:

- **Replicable en el corto plazo:** título de home con categoría + marca; glosario + FAQ como superficie citable GEO; fichas técnicas con datos duros por producto (potencia, medidas, materiales); sitemap Yoast por tipo de contenido + robots abierto a crawlers de IA; catálogo descargable en PDF como lead magnet B2B; arquitectura bilingüe ES/EN; nombres de archivo y alt text descriptivos en imágenes.
- **No replicable en el corto plazo (y no debe fingirse):** 10 años de prensa de diseño, Design House / Zona MACO / ICFF, rol de jurado, colaboraciones con estudios y proveedores en ArchDaily. Eso se construye con producto y presencia, no con SEO.
- **No copiar:** la ausencia de precios y de checkout. Para un dropshipping, el precio visible, el stock y la compra en un clic son el producto: el modelo «asesor + catálogo PDF» de Bandido es coherente con lujo/B2B y letal para conversión de volumen.
- **Oportunidad que Bandido deja abierta (y e-larping puede tomar):** las consultas genéricas de iluminación («lámparas de autor México», guías de compra, comparativas por material) las ganan hoy guías de terceros y competidores con precio visible. Un sitio con guías reales + precio + compra puede citarse donde Bandido no aparece.

## Sin verificar

1. **Conteo total exacto de productos** en `product-sitemap.xml` (vista truncada; la paginación devolvió 429 y, por regla, no se reintentó).
2. **Contenido de `category-sitemap.xml`** (categorías y etiquetas de producto): lectura bloqueada por 429, no reintentada.
3. **Contenido de la página del glosario** (`/glosario-de-iluminacion/`): lectura bloqueada por 429, no reintentada. Solo se conocen su existencia y su fecha de modificación (2026-06-19) por el sitemap.
4. **JSON-LD / meta description / Open Graph / hreflang / canonical**: no observables con lectura de texto; requieren acceso al HTML fuente.
5. **`llms.txt`** (`https://bandidostudio.com/llms.txt`): no consultado; quedó fuera por el límite de lecturas tras el 429.
6. **Checkout y tienda activos** (`/en/checkout-3/`, `/en/shop/`): no se comprobó si responden ni si hay precios dentro de fichas de producto.
7. **Posiciones de ranking, tráfico, volúmenes de búsqueda, backlinks y autoridad de dominio**: no medidos.
8. **Pauta**: Meta Ads Library y Google Ads Transparency no consultados; ningún UTM observado no equivale a «no hay pauta».
9. **Ficha de Google Business Profile** (reseñas, fotos, estado): no consultada.
10. **Redes sociales**: seguidores, frecuencia y enlaces reales desde el footer del sitio no verificados; solo se conoce el handle `@bandidostudio` por fuentes de terceros.
11. **Premios ganados**: ninguno verificado; solo rol de jurado (Habitat Expo) y participaciones en ferias.
12. **Dominio `bandidostudio.com.mx`**: no verificado si pertenece a la misma empresa o redirige al `.com`.
13. **Ficha de producto individual** (ej. ARUNA, AXIS): no se leyó ninguna ficha completa; los datos técnicos citados proceden del PDF de instructivos y de la prensa, no de la ficha HTML.

**Nota sobre el 429:** durante la investigación, tres lecturas consecutivas (`product-sitemap.xml` paginado, `category-sitemap.xml`, `/glosario-de-iluminacion/`) devolvieron error 429 del servicio de lectura («maximum number of requests allowed within a given time frame»). Conforme a las reglas del frente, **no se reintentaron**; los puntos 1–3 y 5 de esta lista quedaron sin leer por ese motivo. Las lecturas previas (home, robots, sitemaps índice/páginas/posts/productos, búsquedas) se completaron antes del límite.

## Fuentes (consultadas 13 nov 2026)

- https://bandidostudio.com/ — home, título «Luminarias en México - Lámparas Mexicanas de Autor - Bandido Studio»
- https://bandidostudio.com/robots.txt
- https://bandidostudio.com/sitemap.xml (= sitemap_index.xml)
- https://bandidostudio.com/page-sitemap.xml
- https://bandidostudio.com/post-sitemap.xml
- https://bandidostudio.com/product-sitemap.xml (vista parcial, truncada)
- https://bandidostudio.com/wp-content/uploads/Documentos/BANDIDO_INSTRUCTIVOS_2026.pdf (vía búsqueda)
- https://bandidostudio.com/wp-content/uploads/2024/09/Product-Datasheets-2024-Bandido-Studio-1.pdf (vía búsqueda)
- https://emprendedor.com/bandido-studio-diseno-mexicano-iluminacion-alejandro-campos-joel-rojas/ (28 oct 2026, act. 5 nov 2026)
- https://www.ambito.com/mexico/economia/eran-simples-estudiantes-que-disenaban-y-vendian-lamparas-puebla-y-hoy-lideran-un-negocio-internacional-n6339243 (30 oct 2026)
- https://coolhuntermx.com/diseno-bandido-studio-diez-anos-luminarias-mexicanas/ (3 oct 2025)
- https://coolhuntermx.com/design-house-mexico-2025-un-dialogo-material-entre-presente-pasado-y-futuro/ (11 oct 2025)
- https://coolhuntermx.com/moda-diseno-guia-de-regalos-navidenos-2025-10-marcas-mexicanas/ (9 dic 2025)
- https://coolhuntermx.com/wepresent-design-hub-diseno-arte-ciudad-de-mexico/ (11 oct 2025)
- https://www.habitatexpo.com/team/bandido-studio/ (jurado, Premio de Diseño Promesas México)
- https://mxterritoriocreativo.com/en/category/proyectos/page/2/ (perfil Bandido / Menguante)
- https://www.gridmag.com.mx/wp-content/uploads/2022/02/REVISTA-FEBRERO-2023_-VOL-2_2.pdf (feb 2023)
- https://www.gridmag.com.mx/index.php/2024/02/22/humo-i-bandido-estudio/ (22 feb 2024)
- https://www.podiomx.com/2019/07/lampara-aura-por-bandido-studio.html?m=0
- https://www.podiomx.com/2024/02/con-mucho-exito-se-presento-la-nueva.html
- https://a.com.mx/nova/
- https://conecta.tec.mx/es/noticias/san-luis-potosi/educacion/r-evolucionan-el-diseno (13 mar 2018)
- https://es.everand.com/podcast/650837955/Bandido-Studio-Luminarias-decorativas (5 jun 2023)
- https://www.archdaily.com/es/tag/ciudad-de-mexico/page/68 (Hotel Casa Cuenca, 1 nov 2026; Bandido como proveedor)
- Búsquedas: `site:bandidostudio.com` (sin resultados — no concluyente, ver §1.2); «lámparas de autor México diseño iluminación decorativa comprar» (Bandido ausente en la muestra); «Bandido Studio» + Zona MACO / ICFF / Salone del Mobile; «Bandido Studio» + ARUNA; «bandidostudio» + Instagram.

## Resumen ejecutivo

- Bandido Studio vende por asesor y catálogo PDF: en la home no hay precios, carrito ni checkout observable; los restos de WooCommerce (checkout/shop, última modificación 2023) no prueban una tienda activa en 2026.
- La visibilidad es de marca, no de categoría: domina las búsquedas de «Bandido Studio», con título de home optimizado («Luminarias en México - Lámparas Mexicanas de Autor»), pero no aparece en la muestra genérica de «lámparas de autor México comprar», donde ganan guías y competidores con precio.
- La base técnica es sólida y activa: WordPress + WooCommerce + Yoast, robots abierto (sin bloqueo a crawlers de IA, pero sin reglas específicas para ellos), sitemap con 10 sub-sitemaps y productos actualizados el mismo 13 nov 2026; arquitectura bilingüe ES/EN.
- Su mayor activo SEO/GEO es la autoridad externa ganada en 10 años: prensa de diseño (CoolhunterMX, Emprendedor, Ámbito, Grid, PodioMX), Design House 2024–2026, Zona MACO, ICFF y rol de jurado en Habitat Expo, con pico de cobertura en oct–nov 2026 por el décimo aniversario.
- Para GEO es citable como autoridad en diseño/iluminación mexicana (entidad clara, fichas técnicas con datos duros, glosario y FAQ), pero casi incitable como opción de compra por la ausencia de precios y checkout.
- Para e-larping, lo replicable es el playbook de contenido (glosario, FAQ, fichas técnicas, sitemap, bilingüe, robots abierto a IA); lo no replicable es la autoridad de una década, y lo que no debe copiarse es el modelo sin precio ni compra en línea.
- Quedó sin verificar por el límite 429 y por los límites del método: conteo total de productos, categorías del sitemap, contenido del glosario, JSON-LD/meta/hreflang, `llms.txt`, checkout activo, pauta, rankings/tráfico y el dominio `.com.mx` citado por un tercero.
