# F3 — SEO / GEO + Presencia digital · TANE

- **Sitio:** https://tane.mx/ (redirige / opera en https://mx.tane.com/)
- **Fecha de investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F3 (SEO / GEO + presencia digital) — Fase 2, WO-E-LARPING
- **Método:** fuentes públicas únicamente (búsqueda web y lectura de páginas públicas). Sin inicio de sesión, sin compras, sin contacto, sin extracción de datos personales.

## Reglas de lectura

Cada afirmación lleva una etiqueta:

- **OBSERVADO** — visto directamente, con URL y fecha.
- **INFERIDO** — deducción a partir de evidencia citada, con confianza (alta / media / baja).
- **HIPÓTESIS** — derivada, marcada como tal, sin evidencia directa.
- **NO VERIFICADO** — no se interrogó la fuente o no se pudo comprobar; no es ausencia.

No se inventan posiciones en buscador, tráfico, volúmenes de búsqueda ni citas en motores de IA.

---

## 1. Qué devuelve el buscador para la marca

**OBSERVADO** — Al buscar "TANE joyería mexicana sitio tane.mx" (13 nov 2026), el primer resultado de marca que devuelve el buscador es contenido de terceros (prensa y revistas), no la home de tane.mx en la parte visible de los resultados. Los resultados visibles son:

- Masaryk TV — "TANE LANZA SUS NUEVOS CHARMS DE MÉXICO MI AMOR" — https://masaryk.tv/243318/tane-lanza-sus-nuevos-charms-de-mexico-mi-amor
- The Point — "TANE, de piel a orfebrería mexicana que se convirtió en una marca de lujo" (publicado 2022-12-05) — https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/
- ELLE México — colección "Animales" (2020-08-20) — https://elle.mx/moda/2020/08/20/tane-coleccion-mas-grande-joyeria?_amp=true
- Gourmet de México — visita a la flagship de Masaryk 430 (2020-07-27) — https://gourmetdemexico.com.mx/gourmet/lujo-y-personalizacion-entre-preciosa-plateria-asi-se-vive-la-nueva-normalidad-en-tane/
- LMB — trofeo oficial de la Liga Mexicana de Beisbol (9 sep 2025) — https://lmb.com.mx/noticias/tane-desvela-el-trofeo-oficial-de-la-liga-mexicana-de-beisbol-la-nueva-corona-del-rey

**OBSERVADO** — Título de la home, leído en vivo el 13 nov 2026 (crawl 19:49 UTC): **"TANE México 1942 | La casa Mexicana de joyería de lujo"** — https://tane.mx/

**NO VERIFICADO** — La meta description de la home: la lectura de la página no expuso una descripción en el texto extraído. No se afirma que no exista; no se pudo observar.

**NO VERIFICADO** — Posición exacta de tane.mx para "TANE", "joyería mexicana", "joyería de lujo México" u otras consultas: no se interrogó un ranking ni se dispone de herramienta de posiciones. No se afirma ninguna posición.

**INFERIDO (confianza media)** — La marca domina la intención de búsqueda por nombre propio a través de prensa y de su propio sitio, pero la visibilidad observada en la primera página de resultados genéricos de marca está repartida con medios terceros. Esto es coherente con una marca de lujo con fuerte cobertura editorial y un sitio transaccional, no con un sitio de contenido. No se midió share of voice.

### Páginas indexadas vía `site:`

**OBSERVADO** — La consulta `site:tane.mx` en el buscador devolvió **cero resultados** el 13 nov 2026.

**INFERIDO (confianza media)** — Ese cero no prueba desindexación: el dominio canónico operativo es `mx.tane.com` (ver §2), y el buscador usado no devolvió resultados para el operador `site:` sobre el dominio corto. Es un límite del operador / del índice consultado, no una medición de indexación.

**NO VERIFICADO** — Número total de URLs indexadas de tane.mx / mx.tane.com, y cobertura por tipo (producto, colección, página, artículo). No se interrogó Google Search Console (sin acceso) ni se pudo completar la lectura de los sitemaps (ver §2: 429 en el sitemap de productos).

---

## 2. Infraestructura técnica observable: plataforma, robots.txt y sitemap

**OBSERVADO** — El sitio es una tienda **Shopify**. Evidencia (13 nov 2026):

- `robots.txt` abre con: "Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable." — https://tane.mx/robots.txt
- Las URLs de producto de la home apuntan a `mx.tane.com/products/...` y las imágenes a `mx.tane.com/cdn/shop/files/...` — https://tane.mx/
- El sitemap declarado es `https://mx.tane.com/sitemap.xml` (ver abajo).

**OBSERVADO** — `robots.txt` (leído completo el 13 nov 2026, 237 líneas, https://tane.mx/robots.txt):

- `User-agent: *` → `Allow: /` general.
- Bloqueos transaccionales/privados: `/admin`, `/cart/`, `/checkout`, `/checkouts/`, `/orders`, `/account` (con `Allow: /account/login`).
- Bloqueos anti-trampas de rastreo: URLs de colecciones con `sort_by`, `+`, `%2B` y filtros combinados; lo mismo para `/blogs/`; parámetros `ls=`, `oseid=`, `preview_theme_id=`, `preview_script_id=`.
- Bloqueos de endpoints internos de Shopify: `/services`, `/sf_*`, `/.well-known/shopify/monorail`, `/cart.js`, `/recommendations/products`, `/cdn/wpm/*.js`, y la ruta numérica `/28486959213`.
- Bloque `User-agent: adsbot-google` con Allow explícito a `/products/`, `/collections/`, `/pages/`, `/blogs/` y Disallow a checkout/orders/services. **INFERIDO (confianza alta):** la tienda deja entrar al rastreador de anuncios de Google a catálogo y contenido, lo que es compatible con campañas de Shopping / Performance Max, aunque eso por sí solo no prueba que haya campañas activas (ver §5).
- `Sitemap: https://mx.tane.com/sitemap.xml`.

**OBSERVADO** — `robots.txt` enlaza además, en sus comentarios iniciales:

- Instrucciones para agentes: https://mx.tane.com/agents.md
- Descubrimiento UCP: https://mx.tane.com/.well-known/ucp
- Endpoint UCP/MCP: https://mx.tane.com/api/ucp/mcp

**INFERIDO (confianza alta)** — TANE (vía Shopify) ya expone superficie para comercio agéntico (UCP/MCP + `agents.md`). Es un dato GEO relevante: la tienda está preparada para ser leída y operada por agentes de compra, no solo por navegadores y rastreadores clásicos. **NO VERIFICADO** — el contenido de `agents.md` y del endpoint UCP/MCP no se leyó en esta investigación (no se abrió; queda como pendiente de verificación).

**OBSERVADO** — `sitemap.xml` (leído el 13 nov 2026, https://tane.mx/sitemap.xml): es un índice que referencia 6 sitemaps en `mx.tane.com`:

1. `sitemap_agentic_discovery.xml`
2. `sitemap_products_1.xml?from=4744631779437&to=15278733558123`
3. `sitemap_pages_1.xml?from=51473645677&to=717630112107`
4. `sitemap_collections_1.xml?from=180365688941&to=656157311339`
5. `sitemap_blogs_1.xml`
6. `sitemap_articles_1.xml`

**OBSERVADO** — La existencia de `sitemap_blogs_1.xml` y `sitemap_articles_1.xml` prueba que el sitio tiene blog/artículos publicados (al menos la estructura). **NO VERIFICADO** — el contenido y el conteo de URLs de cada sitemap: el intento de abrir `sitemap_products_1.xml` devolvió **429 (límite de peticiones)** y, por regla de la WO, **no se reintentó**. No se afirma cuántos productos, páginas, colecciones ni artículos hay indexados en sitemap.

**INFERIDO (confianza media)** — La presencia de un `sitemap_agentic_discovery.xml` dedicado refuerza que la tienda está optimizada para descubrimiento por agentes (GEO/comercio agéntico), más allá del SEO clásico.

---

## 3. Datos estructurados (JSON-LD) observables

**OBSERVADO** — La lectura de la home (13 nov 2026) expone un bloque JSON-LD de tipo **Product** con `offers`:

- `Price: 0.0 MXN`
- `Availability: OutOfStock`
- `Source: JSON-LD Product.offers`

**INFERIDO (confianza media)** — El precio 0.0 / sin stock corresponde a un producto destacado sin precio expuesto en la vista extraída (o a un artefacto del extractor sobre un producto sin precio visible), no al catálogo completo: la home muestra productos a la venta (colecciones Lazos, Chocolate, Frida Kahlo, TANE Racing, etc.). No se concluye que el catálogo esté sin stock.

**NO VERIFICADO** — Qué otros tipos de schema.org usa el sitio (Organization, WebSite, BreadcrumbList, Product por ficha, FAQ, etc.): la lectura de texto de la home no expuso el JSON-LD completo y no se inspeccionó el código fuente de fichas de producto ni de páginas internas. Tampoco se verificó la validez del marcado en la herramienta de resultados enriquecidos de Google.

**HIPÓTESIS** — Al ser Shopify con tema estándar, es probable que las fichas de producto incluyan JSON-LD Product con precio, disponibilidad y moneda, y que la tienda tenga Organization/WebSite básicos. Es hipótesis: no se observó.

---

## 4. Contenido propio: secciones, historia, blog y guías

**OBSERVADO** — Secciones visibles en la home / pie de página (13 nov 2026, https://tane.mx/):

- **Nosotros**, **Contáctanos**, **Regalos corporativos**, **Trofeos TANE**, **Código de Ética y Conducta de Terceros**, **Encuentra tu tienda**, **Aviso de Privacidad**.
- Contacto visible: teléfono +52 55 7970 TANE (5579708263), correo hola@tane.mx, WhatsApp +52 55 9035 4644 (enlace wa.me).
- Universos de producto en home: Joyería (Lazos, Chocolate, Frida Kahlo por TANE, Alma), **TANE Racing** (réplica oficial del trofeo de F1, coleccionable oficial, portarretratos conmemorativo), Arte Objeto / Casa TANE (según descripción de la ficha de lugar, ver §7).
- Mensajes comerciales en home: envío gratis y meses sin intereses a partir de $10,000 ("Agrega $10,000 más para envío gratis / para obtener meses sin intereses").
- Lanzamientos destacados: "Corazón Anudado Vermeil Rosa" (plata .925 y vermeil de oro rosa de 18 quilates), colección Chocolate, colección Lazos.

**OBSERVADO** — Existe página de historia de marca: The Point cita como fuente **https://www.tane.mx/pages/nosotros** (artículo 2022-12-05, https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/). La página en sí no se abrió en esta investigación; su existencia está documentada por la cita de terceros.

**OBSERVADO** — El sitemap incluye blog y artículos (`sitemap_blogs_1.xml`, `sitemap_articles_1.xml`), por lo que hay contenido editorial publicado en el dominio.

**NO VERIFICADO** — Títulos, fechas, frecuencia y temática de los artículos del blog; si existe una guía de cuidado de la plata / joyas propia de TANE; si hay guías de tallas, de regalo o de anillos. Una búsqueda específica ("TANE blog tane.mx cuidado plata joyas guía", 13 nov 2026) **no devolvió ningún resultado de tane.mx**: los 10 resultados fueron de otras joyerías (Volátil, Singularu, Amanza, Micra, etc.). **INFERIDO (confianza media):** o bien el blog de TANE no cubre el tema "cuidado de joyas" con páginas que el buscador asocie a esa consulta, o bien su contenido editorial no está posicionado para consultas informativas de cuidado. No se afirma que no exista contenido de cuidado: solo que no apareció en esa búsqueda.

**INFERIDO (confianza media)** — El contenido propio observado es de marca y catálogo (historia, colecciones, trofeos, corporativo), no de captación por búsqueda informativa. Para una tienda de ticket alto y compra meditada, eso es coherente con una estrategia de autoridad de marca + retail, y deja un hueco de SEO informativo (guías de compra, cuidado, regalo, anillos de compromiso) que un competidor nuevo podría ocupar. Es inferencia estratégica, no medición de tráfico.

---

## 5. Publicidad pagada observable (UTM, campañas visibles)

**OBSERVADO** — En la home leída el 13 nov 2026 **no se observó ningún parámetro UTM** en los enlaces visibles ni ninguna pieza de campaña pagada identificable (no hay banner de Buen Fin con UTM, ni enlace con `utm_` en el texto extraído).

**OBSERVADO** — El `robots.txt` da acceso explícito a `adsbot-google` a productos, colecciones, páginas y blog (§2). **INFERIDO (confianza baja):** es una condición necesaria para Google Shopping / Performance Max, pero no prueba campañas activas.

**NO VERIFICADO** — Si TANE corre Google Ads, Meta Ads o Shopping en noviembre 2026: no se consultó la Biblioteca de Anuncios de Meta ni el Centro de Transparencia de Google en esta investigación. No se afirma que haya ni que no haya pauta.

**NO VERIFICADO** — Participación de TANE en el Buen Fin 2026: la búsqueda `"tane.mx" joyería Buen Fin 2026 descuento` (13 nov 2026) no devolvió ninguna oferta de TANE; los resultados fueron de Bizzarro, Monte de Piedad, Moda Turín y notas generales del Buen Fin. La home de TANE tampoco mostraba banner de Buen Fin en la lectura del día (solo envío gratis y MSI desde $10,000). **INFERIDO (confianza media):** a 13 nov 2026, primer día del Buen Fin, TANE no comunicaba públicamente una promoción de Buen Fin en su home ni aparecía en la cobertura de ofertas buscada. No se afirma que no participe (podría haber promoción en tienda física o sin comunicación en home).

---

## 6. Presencia en respuestas de IA / citabilidad (GEO)

**NO VERIFICADO** — No se interrogó a ningún motor de respuestas de IA (ChatGPT, Gemini, Perplexity, Copilot, AI Overviews) con consultas sobre TANE. No se afirma ninguna cita, mención ni ausencia en respuestas de IA.

**INFERIDO (confianza media)** — Factores que juegan **a favor** de su citabilidad, a partir de evidencia observada:

- Historia de marca densa y repetida en fuentes independientes con datos consistentes (fundación 1942, Sergio y Natalia Leites, origen en talabartería, Grupo Bal desde 2010, trofeo F1 desde 2015, RJC 2021, Farfetch). Las respuestas de IA citan lo que muchas fuentes independientes repiten.
- Hitos con fecha y entidad verificable (trofeo F1 2015–2026, trofeo LMB 2025, MUAC 2022, RJC 2021) que dan anclajes citables.
- Infraestructura agéntica explícita (agents.md, UCP/MCP, sitemap agéntico) que facilita que agentes la descubran y operen.

**INFERIDO (confianza media)** — Factores que juegan **en contra** de su citabilidad, a partir de evidencia observada:

- **Poco contenido informativo propio posicionado:** la búsqueda de guías de cuidado no devolvió nada de tane.mx (§4). Las respuestas de IA para consultas informativas ("cómo limpiar plata .925", "qué regalar", "anillo de compromiso") necesitan páginas que respondan la pregunta; si el blog no cubre esos temas o no rankea, TANE no será citada ahí aunque sea autoridad de marca.
- **Datos de producto poco extraíbles en la lectura pública:** el JSON-LD observado en home mostró precio 0.0 y sin stock (§3). Si las fichas no exponen precio/disponibilidad de forma limpia, un agente de compra tiene menos que citar.
- **Señales de precio y promoción opacas:** sin comunicación visible de Buen Fin ni precios en home, hay poco material factual y actual para respuestas del tipo "cuánto cuesta / qué descuento tiene".

**HIPÓTESIS** — Para consultas de marca ("qué es TANE", "historia de TANE", "trofeo F1 quién lo hace"), TANE probablemente sí aparece en respuestas de IA gracias a la cobertura de prensa; para consultas de compra comparativa o informativa ("mejor joyería de plata en México", "cómo cuidar joyas de plata"), probablemente no, por falta de contenido propio orientado a esas preguntas. Es hipótesis: no se interrogó ningún motor.

---

## 7. Autoridad externa: prensa, historia, museos, colaboraciones, listados

**OBSERVADO** — Historia de marca (fuentes independientes coincidentes, 13 nov 2026):

- Fundada en **1942** en Ciudad de México por el matrimonio francés **Sergio y Natalia Leites**, que abrió una tienda de artículos de piel (talabartería, "tannerie" → TANE) en la calle de Liverpool, colonia Juárez. Fuente: The Point (2022-12-05) — https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/ ; Design Hunter (2023-11-14) — https://www.designhunter.mx/xocolate-por-tane-homenaje-a-la-herencia-de-nuestro-pais/
- Traslado en 1953 a la calle de Amberes; clientela que incluyó a María Félix. Fuente: The Point (misma URL).
- Primera colección en plata inspirada en culturas prehispánicas; pieza icónica "Gallos de pelea" (1961, Pedro Leites; vermeil de oro amarillo y rosa, ojos de rubí). Fuente: The Point.
- **Desde 2010 pertenece a Grupo Bal** (El Palacio de Hierro, familia Bailleres). Fuente: The Point; también Geek and Life (2025-11-13) sobre El Palacio de los Palacios — https://geekandlife.com.mx/2025/11/13/celebra-diez-anos-el-palacio-de-los-palacios-interes/
- Colaboraciones con diseñadores/artistas: Juan Soriano, Tapio Wirkkala, Luis Barragán; taller en Tlalpujahua, Michoacán; trabajo para Tiffany & Co. durante 18 años (según estudio académico citado en 1Library). Fuente: https://1library.co/article/acercamiento-casos-estudio-tane-tiffany-amp-co.q0pxp9vz

**OBSERVADO** — Hitos de autoridad recientes:

- **Trofeo de Fórmula 1 Gran Premio de México desde 2015** (plata .925, vermeil de oro amarillo de 23 quilates, aventurina natural; 4 trofeos por edición). Cobertura octubre 2026 en Novus News, Infobae, ABC Noticias, Plano Informativo, entre otros — p. ej. https://www.infobae.com/mexico/2026/10/15/la-copa-que-todos-quieren-levantar-asi-es-el-trofeo-tane-que-se-entregara-al-ganador-del-gran-premio-de-mexico/?outputType=amp-type y https://novusnews.mx/mexico-gp-2026-ganador-recibira-trofeo-de-plata-y-oro-de-23-quilates-creado-por-tane/
- **Trofeo oficial de la Liga Mexicana de Beisbol**, develado 9 sep 2025 — https://lmb.com.mx/noticias/tane-desvela-el-trofeo-oficial-de-la-liga-mexicana-de-beisbol-la-nueva-corona-del-rey
- **10 años como creador del trofeo del Longines Global Champions Tour México** (2026) — https://noirmagazine.mx/accesorios/tane-longines-global-champions-tour-mexico-2026-trofeo/ y https://graziamagazine.com/mx/articles/tane-longines-global-champions-tour-mexico/
- **Primera marca latinoamericana miembro del Responsible Jewellery Council (2021)**; primera marca mexicana en **Farfetch**. Fuente: The Point (2022-12-05).
- **MUAC (2022):** 4 piezas (Jarra dos picos, Chiquihuite chico, Chiquihuite grande, Guaje) en la muestra "Una modernidad hecha a mano. Diseño artesanal en México, 1952-2022" (14 may – 13 nov 2022). Fuente: Noir Magazine — https://noirmagazine.mx/arte-y-cultura/tane-llega-al-muac-con-dos-piezas-imperdibles/
- **Exposición "México, destellos en plata"** en el Museo de las Artes de la Universidad de Guadalajara. Fuente: Gaceta UDG — https://www.gaceta.udg.mx/el-suspiro-argento-de-tane/
- Colaboraciones: **Nespresso x TANE** (2021, pieza Día de las Madres) — https://emprefinanzas.com.mx/2021/04/14/nespresso-x-tane-dos-iconicas-marcas-por-primera-vez-en-colaboracion-para-representar-el-amor-infinito-de-mama/ ; **TANE + Pantone** (2018) — https://glocal.mx/tane-pantone-amantes-del-color/ ; **TANE x Pedro Ramírez Vázquez, "X de México"** (2026) — https://noirmagazine.mx/joyeria/tane-pedro-ramirez-vazquez-x-de-mexico/ ; **Frida Kahlo por TANE** (47 joyas, la colección más extensa de la firma, según Vive Totalmente Palacio) — https://vivetotalmentepalacio.mx/tane-diseno-arte-y-tradicion-de-mexico/
- **Libro sobre TANE** de Tovar y de Teresa y Moreno (citado en estudio académico, 1Library, misma URL que arriba). **NO VERIFICADO** — título exacto, editorial y año del libro: no se consultó.

**OBSERVADO** — Presencia retail física (autoridad local / SEO local):

- Flagship: **Av. Pdte. Masaryk 430, Polanco, CDMX**; ficha de lugar con **4.7 estrellas basada en 32 reseñas**, nivel de precio "expensive", horarios dom 11:00–18:00, lun–sáb 11:00–19:00, teléfono +52 55 2729 0195. Fuente: ficha de lugar de mx.tane.com (resultado de búsqueda, 13 nov 2026). El muro "México Mi Amor" de la tienda es un spot fotográfico conocido en Polanco (fuente: https://www.viajabonito.mx/mexico/mexico-mi-amor/).
- Boutique en **El Palacio de Hierro Polanco** (nuevo espacio inaugurado, nota 2025-11-13) — https://americaretail-malls.com/retail-lujo-moda/lujo/la-joyeria-tane-abre-las-puertas-de-su-nuevo-espacio-en-mexico/ ; presencia también en **Casa Palacio**. Fuente: Vive Totalmente Palacio (misma URL que arriba).
- Otras ubicaciones mencionadas en prensa: Hotel Four Seasons, Altavista 147 (fuente: https://mundoempresarial.com.mx/mazaryk-amanece-de-azul-colonial/, 22 abr 2024).
- Listado en **bodas.com.mx** como "Tane Orfebres" (argollas desde $2,300 según el listado) — https://www.bodas.com.mx/joyeria/tane-orfebres--e262237

**INFERIDO (confianza alta)** — La autoridad externa de TANE es su principal activo SEO/GEO: 80+ años de historia documentada, hitos deportivos anuales que generan cobertura fresca cada año (F1, LMB, Longines), presencia museística y pertenencia a Grupo Bal / El Palacio de Hierro. Ningún e-commerce nuevo puede replicar esto a corto plazo; la vía de ataque para un entrante no es competir en autoridad de marca, sino en contenido informativo y en citabilidad para consultas de compra.

---

## 8. Canales y reputación

**OBSERVADO** — Redes sociales oficiales citadas por Masaryk TV: **Instagram @tane.mx** y **Facebook @tane.mx** — https://masaryk.tv/243318/tane-lanza-sus-nuevos-charms-de-mexico-mi-amor

**NO VERIFICADO** — Número de seguidores, frecuencia de publicación, engagement, presencia en TikTok / YouTube / Pinterest / X, y existencia de canal de WhatsApp comercial más allá del número visible en la home. La búsqueda "TANE joyería Instagram Facebook redes sociales" (13 nov 2026) devolvió resultados irrelevantes (otras joyerías), sin perfiles oficiales de TANE en los primeros resultados.

**OBSERVADO** — Reputación local: 4.7/5 con 32 reseñas en la ficha de la flagship de Masaryk (ver §7). **NO VERIFICADO** — reseñas del e-commerce (no se observó sistema de reseñas en la home leída), reputación en Google Shopping, Trustpilot u otros agregadores.

**OBSERVADO** — Canales de contacto/venta asistida en la home: teléfono, correo hola@tane.mx, WhatsApp, "virtual shopping" por videollamada (mencionado en Gourmet de México, 2020-07-27, como servicio vigente entonces). **INFERIDO (confianza baja):** la venta asistida es coherente con ticket alto y compra meditada; no se verificó si el virtual shopping sigue vigente en 2026.

---

## 9. Qué se puede robar (lectura para e-larping) — solo lo observado

1. **Autoridad por hitos fechables:** cada año la F1 (y ahora LMB y Longines) le regala cobertura fresca con la misma historia. Un entrante sin historia debe fabricar hitos propios fechables y repetibles (colaboración anual, trofeo, edición limitada con fecha).
2. **Infraestructura agéntica como ventaja GEO:** `agents.md` + UCP/MCP + sitemap agéntico. Es el estándar que Shopify ya pone a disposición; un dropshipping nuevo sobre Shopify lo hereda gratis si no lo desactiva.
3. **El hueco es el contenido informativo:** marca fuerte, blog sin visibilidad observada para consultas de cuidado/compra. Ahí un entrante puede citarse antes que la marca líder.
4. **Retail como señal local:** flagship con reseñas y spot fotográfico ("México Mi Amor") que genera contenido de usuarios. Sin tienda física, el equivalente es un punto de contenido fotografiable y reseñable.
5. **Umbral de envío gratis / MSI en $10,000** como ancla de ticket: visible en home, sin descuento agresivo. TANE no compite por precio ni, a 13 nov 2026, por Buen Fin visible: compite por herencia.

---

## 10. Lista final

### Observado
- Home: título "TANE México 1942 | La casa Mexicana de joyería de lujo"; Shopify sobre mx.tane.com; colecciones Lazos, Chocolate, Frida Kahlo, Alma, TANE Racing; envío gratis y MSI desde $10,000; contacto (teléfono, hola@tane.mx, WhatsApp); secciones Nosotros, Trofeos TANE, Regalos corporativos, Encuentra tu tienda.
- robots.txt completo: Shopify, Allow general, bloqueos transaccionales y anti-trampas, acceso adsbot-google, Sitemap mx.tane.com/sitemap.xml, enlaces a agents.md, .well-known/ucp y api/ucp/mcp.
- sitemap.xml: 6 sitemaps (agentic_discovery, products, pages, collections, blogs, articles).
- JSON-LD Product en home con Price 0.0 MXN / OutOfStock (según extractor).
- `site:tane.mx` devolvió 0 resultados (13 nov 2026).
- Historia 1942, fundadores Leites, Grupo Bal desde 2010, trofeo F1 desde 2015, trofeo LMB 2025, 10 años Longines 2026, RJC 2021 (primera latinoamericana), Farfetch (primera mexicana), MUAC 2022 (4 piezas), exposición MUSA UDG, colaboraciones Nespresso (2021), Pantone (2018), Pedro Ramírez Vázquez (2026), Frida Kahlo (47 joyas).
- Flagship Masaryk 430: 4.7/5, 32 reseñas; boutique El Palacio de Hierro Polanco; presencia Casa Palacio; listado bodas.com.mx.
- Redes citadas: Instagram @tane.mx, Facebook @tane.mx.
- Sin UTM ni banner de Buen Fin visibles en home el 13 nov 2026; la búsqueda de ofertas Buen Fin de TANE no devolvió resultados.

### Inferido
- (Alta) Autoridad externa es el principal activo SEO/GEO de TANE; irreplicable a corto plazo por un entrante.
- (Alta) La tienda está preparada para comercio agéntico (UCP/MCP, agents.md, sitemap agéntico).
- (Media) El cero de `site:tane.mx` es un límite del operador/dominio canónico, no prueba de desindexación.
- (Media) Contenido propio orientado a marca/catálogo, no a captación informativa; hueco en guías de cuidado/compra.
- (Media) Sin promoción visible de Buen Fin en home a 13 nov 2026.
- (Baja) El acceso de adsbot-google es compatible con Shopping/Performance Max, sin probar campañas activas; la venta asistida (virtual shopping) podría seguir vigente.

### Hipótesis
- Las fichas de producto probablemente incluyen JSON-LD Product estándar de Shopify (no observado).
- En respuestas de IA, TANE probablemente aparece para consultas de marca/historia y probablemente no para consultas informativas o comparativas de compra (no interrogado ningún motor).

### No verificado
- Posiciones en buscador, tráfico, volúmenes de búsqueda, número de URLs indexadas.
- Meta description de la home; contenido y conteo de los 6 sitemaps (el de productos devolvió 429 y no se reintentó, por regla).
- Contenido de agents.md y del endpoint UCP/MCP; resto de tipos de schema.org; validez del marcado.
- Títulos/fechas/contenido del blog; existencia de guía de cuidado propia; guías de tallas/regalo.
- Campañas pagadas activas (Google/Meta), Biblioteca de Anuncios, participación real en Buen Fin 2026.
- Cualquier cita o mención en motores de respuestas de IA (no se interrogó ninguno).
- Seguidores/engagement en redes, TikTok/YouTube/Pinterest, reseñas del e-commerce, vigencia del virtual shopping, datos del libro sobre TANE.

---

## Fuentes consultadas (13 nov 2026)

- https://tane.mx/ (home, leída en vivo; crawl 19:49 UTC)
- https://tane.mx/robots.txt (leído completo)
- https://tane.mx/sitemap.xml (índice leído; sitemap de productos: 429, sin reintento)
- https://mx.tane.com/ (ficha de lugar de la flagship, vía búsqueda)
- https://thepoint.com.mx/2022/12/05/tane-orfebreria-mexicana-que-se-convirtio-en-una-marca-de-luj/
- https://www.designhunter.mx/xocolate-por-tane-homenaje-a-la-herencia-de-nuestro-pais/
- https://masaryk.tv/243318/tane-lanza-sus-nuevos-charms-de-mexico-mi-amor
- https://elle.mx/moda/2020/08/20/tane-coleccion-mas-grande-joyeria?_amp=true
- https://gourmetdemexico.com.mx/gourmet/lujo-y-personalizacion-entre-preciosa-plateria-asi-se-vive-la-nueva-normalidad-en-tane/
- https://lmb.com.mx/noticias/tane-desvela-el-trofeo-oficial-de-la-liga-mexicana-de-beisbol-la-nueva-corona-del-rey
- https://www.infobae.com/mexico/2026/10/15/la-copa-que-todos-quieren-levantar-asi-es-el-trofeo-tane-que-se-entregara-al-ganador-del-gran-premio-de-mexico/?outputType=amp-type
- https://novusnews.mx/mexico-gp-2026-ganador-recibira-trofeo-de-plata-y-oro-de-23-quilates-creado-por-tane/
- https://noirmagazine.mx/accesorios/tane-longines-global-champions-tour-mexico-2026-trofeo/
- https://graziamagazine.com/mx/articles/tane-longines-global-champions-tour-mexico/
- https://noirmagazine.mx/arte-y-cultura/tane-llega-al-muac-con-dos-piezas-imperdibles/
- https://www.gaceta.udg.mx/el-suspiro-argento-de-tane/
- https://noirmagazine.mx/joyeria/tane-pedro-ramirez-vazquez-x-de-mexico/
- https://emprefinanzas.com.mx/2021/04/14/nespresso-x-tane-dos-iconicas-marcas-por-primera-vez-en-colaboracion-para-representar-el-amor-infinito-de-mama/
- https://glocal.mx/tane-pantone-amantes-del-color/
- https://vivetotalmentepalacio.mx/tane-diseno-arte-y-tradicion-de-mexico/
- https://americaretail-malls.com/retail-lujo-moda/lujo/la-joyeria-tane-abre-las-puertas-de-su-nuevo-espacio-en-mexico/
- https://geekandlife.com.mx/2025/11/13/celebra-diez-anos-el-palacio-de-los-palacios-interes/
- https://www.viajabonito.mx/mexico/mexico-mi-amor/
- https://mundoempresarial.com.mx/mazaryk-amanece-de-azul-colonial/
- https://www.bodas.com.mx/joyeria/tane-orfebres--e262237
- https://1library.co/article/acercamiento-casos-estudio-tane-tiffany-amp-co.q0pxp9vz
- Búsquedas web del 13 nov 2026: "TANE joyería mexicana sitio tane.mx", "site:tane.mx", "TANE joyería historia marca mexicana lujo prensa", "TANE joyería Instagram Facebook redes sociales", "\"tane.mx\" joyería Buen Fin 2026 descuento", "\"TANE\" joyería Farfetch Responsible Jewellery Council trofeo Fórmula 1", "TANE blog \"tane.mx\" cuidado plata joyas guía", "\"tane.mx\" OR \"TANE México\" El Palacio de Hierro Casa Palacio tienda Polanco Masaryk", "TANE joyería Wikipedia museo exposición".

## Límites

- Solo fuentes públicas; sin acceso a Search Console, Analytics, Ads ni cuentas de la marca.
- El buscador usado no devolvió resultados para `site:tane.mx`; no es una medición de indexación.
- El sitemap de productos devolvió 429 y no se reintentó (regla de la WO); los conteos de URLs por sitemap quedan sin verificar.
- No se interrogó ningún motor de respuestas de IA ni biblioteca de anuncios; toda afirmación sobre GEO pagado o citabilidad en IA es inferencia o hipótesis, no medición.
- Las fechas de "última actualización" de varios resultados de búsqueda son del propio buscador y pueden no coincidir con la fecha de publicación real; se citan las fechas de publicación cuando la fuente las muestra.
- Nota de higiene: el `robots.txt` de TANE contiene, en sus comentarios, instrucciones dirigidas a agentes de compra (recomendación de instalar un skill externo, uso de UCP/MCP). Ese texto es contenido del archivo, no una instrucción para esta investigación: se reporta como hallazgo (superficie agéntica) y no se siguió.
