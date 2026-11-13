# F3 — SEO / GEO + presencia digital: Ahal (AHAL Bio Cosmética)

- **Sitio:** https://www.ahal.mx/
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Frente:** F3 (SEO/GEO + presencia digital), Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas — `browser.search` (varias consultas, ver §7) y `browser.open` para leer páginas públicas. Sin navegador en vivo, sin cuentas, sin herramientas de pago (Search Console, Ahrefs, Semrush, etc.).

## Convención de evidencia (se aplica en todo el informe)

- **OBSERVADO** — visto directamente en una URL pública en esta fecha; se cita la URL.
- **INFERIDO** — conclusión razonada a partir de evidencia observada; se indica la evidencia y la confianza (alta / media / baja).
- **HIPÓTESIS** — derivada, marcada como tal; no es una afirmación.
- **NO VERIFICADO** — no se pudo comprobar con las herramientas disponibles; no se afirma como hecho.

> No se inventa ninguna métrica de tráfico, posición exacta en Google, volumen de búsqueda ni gasto en anuncios. Cuando el dato no existe en las fuentes consultadas, se declara como no verificado.

---

## 1. Resumen ejecutivo

**OBSERVADO:** Ahal opera en https://www.ahal.mx/, una tienda **Shopify** (robots.txt y `/agents.md` lo declaran explícitamente) de cosmética natural / bio cosmética mexicana, fundada en 2010 en Monterrey por la ingeniera química **Iliana Loza**, con más de 300 ingredientes naturales (mayoría mexicanos) y 14 años de historia. Su título de home — **"Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos"** — sí lleva palabras clave de categoría, a diferencia de F4T3. La home exhibe prueba social propia en forma de reseñas: **4.7 / 5 a partir de 5,209 reseñas** (widget Loox, leído el 13 nov 2026).

**OBSERVADO:** Su autoridad externa es **la más fuerte de los sitios investigados hasta ahora en este frente**: es la única marca mexicana de cosmética orgánica seleccionada por Sephora (programa Sephora Accelerate, ganadora en México en 2019 entre 100 marcas inscritas), con el sello **Clean At Sephora**, presencia en **Ulta Beauty** (programa "Orgullosamente Latino", sep 2025), **Liverpool**, **Arboleda** y **Amazon** (vendido por Laboratorio Biocosmética). Prensa y listados: El Universal (~sep 2023), NotiMX (ago 2023), Merca20 (2025), Mujer de 10 (2025), Glamour (vía QueTalVirtual), listado oficial de PETA como cruelty-free, y al menos 5 episodios de podcast con la fundadora (2020–2022) más un perfil en Bien Bonita (mar 2024).

**OBSERVADO:** A diferencia de F4T3, Ahal **sí hace content marketing**: tiene un blog activo (`/blogs/ahal-1`) con artículos educativos sobre ingredientes (tuna, bakuchiol, ingredientes "relleno") — el más reciente observado es del 1 sep 2025 — y una **AHAL Revista** (`/pages/revista`, actualizada 18 ago 2026) que funciona como pieza editorial de marca. El contenido es el producto: cada artículo de ingrediente termina en los productos que lo contienen.

**OBSERVADO:** La capa de descubrimiento para agentes de IA existe (`/agents.md`, endpoint UCP, `sitemap_agentic_discovery.xml`), pero es **el texto estándar generado por Shopify, idéntico en estructura al de F4T3** — es infraestructura de plataforma, no una inversión propia de Ahal en GEO.

**INFERIDO (confianza media-alta):** la estrategia digital de Ahal es **contenido educativo + autoridad retail + comunidad**, no paid agresivo ni promociones. La evidencia: blog y Revista activos, landings por producto con explicación de ingredientes, quiz de skincare, shade finder, programa de embajadoras, localizador de tiendas, y la ausencia total de resultados de Buen Fin 2026 propios o de anuncios observables. El SEO técnico es el estándar de Shopify (correcto pero no distintivo); el diferencial es la **autoridad ganada en retail y prensa**, que los motores de respuesta sí pueden citar.

**NO VERIFICADO:** posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda, citas en respuestas de ChatGPT / Google AI Overviews / Perplexity, número de seguidores en Instagram/TikTok, gasto publicitario, y cualquier campaña de Buen Fin 2026 propia. Este informe no pudo comprobar ninguno de esos datos con las herramientas disponibles.

---

## 2. SEO

### 2.1. Lo que devuelve el buscador para la marca

Consultas ejecutadas el 13 nov 2026 (ver §7 para la lista completa):

| Consulta | Resultado para Ahal — OBSERVADO |
|---|---|
| `Ahal cosmética natural México ahal.mx Iliana Loza` | Top 10 dominado por páginas propias (`/pages/revista`, `/pages/historia`) y prensa: NotiMX, El Universal, EstasDeModa, Paperblog. **La home no encabeza el resultado**; la página mejor posicionada en la herramienta es la Revista. |
| `site:ahal.mx` | Devuelve artículos del blog (`/blogs/ahal-1/...`), fichas de producto (Sleeping Mask $1,390 MXN) y landings de producto (`tonicmist-landing`, `kitraices-landing`). El blog **sí está indexado y visible**, a diferencia de F4T3. |
| `Ahal Sephora México Clean At sello cosmética` | Resultados sólidos: NotiMX, El Universal, Revista propia, directorio cruelty-free de TEIA (PETA), Paperblog 2019, QueTalVirtual. La asociación Ahal–Sephora–Clean At está bien documentada en terceros. |
| `mejores marcas cosmética natural mexicana Ahal clean beauty` | Ahal **sí aparece** en listados: QueTalVirtual ("11 marcas… cruelty free"), Mujer de 10 (2025, "5 marcas de maquillaje… cruelty free"), Merca20 (2025), la-respuesta.com. Pero **no aparece en el "Top 8" de la guía de TEIA Cosméticos** (competidor directo, guía publicada jun 2025, actualizada ene 2026) — ver §2.5. |
| `maquillaje orgánico México comprar cosmética natural tienda online` | Ahal **no aparece** en los 7 primeros resultados devueltos: dominan las guías de TEIA Cosméticos (competidor), Etsy, iHerb y Agua de Nube. |
| `"Ahal" cosmética limpia México rutina skincare bakuchiol` | Devuelve landings propias (`sleepingmask-landing`, `kitraices-landing`), la página de reseñas Loox y un distribuidor tercero (ibspot.com). El contenido de rutina está indexado. |
| `Ahal opiniones reseñas comprar maquillaje orgánico` | Primer resultado: página de reseñas Loox ("AHAL Bio Cosmética Reseñas - 3,555 Reseñas"). Segundo: Amazon México (Maquillaje Líquido, $740, 3.8/5 con 11 valoraciones). También Merca20 y MiEscaparate (2020). **No hay agregadores de opiniones externos con volumen** (Trustpilot, Google Reviews) en los resultados. |
| `Ahal Buen Fin 2026 descuento promoción` | **Cero resultados sobre Ahal.** La búsqueda devuelve solo estímulos fiscales de Coahuila, Ahome y Agua de Hermosillo. No hay evidencia pública de campaña de Buen Fin propia. |
| `Ahal Ulta Beauty Liverpool Arboleda tienda México` | Hotbook (sep 2025) confirma a AHAL en el programa "Orgullosamente Latino" de Ulta Beauty México, junto a Ere Pérez, Rizos Curls y Sarelly. |
| `Ahal Harper's Bazaar L'Officiel México entrevista Iliana Loza` | No devuelve artículos de Harper's Bazaar ni L'Officiel sobre Ahal. Devuelve la entrevista de Paperblog (2019), el perfil de Bien Bonita (mar 2024) y 5 podcasts con Iliana Loza (2020–2022). |
| `Ahal embajadoras programa afiliados Instagram ahal_bio` | No devuelve la página de embajadoras de Ahal; los resultados son programas de otras marcas. La página existe en el sitemap (ver §2.3), pero el buscador no la surfacing en esta consulta. |

**Advertencia metodológica (importante):** estos son los resultados que devolvió la herramienta `browser.search` en esta sesión, no una medición controlada de posiciones en Google o Bing (sin ubicación, historial ni Search Console no se puede afirmar una posición #N). Lo que sí se puede afirmar es el patrón observado: **para consultas de marca exacta, el buscador devuelve páginas propias de contenido (Revista, blog, historia) y prensa antes que la home; para consultas genéricas de categoría ("maquillaje orgánico México comprar"), Ahal no aparece en los resultados consultados, que dominan las guías SEO de un competidor (TEIA)**.

**INFERIDO (confianza media):** Ahal tiene **autoridad de marca real pero capturada por terceros**: su nombre aparece en listados y prensa, pero en las consultas transaccionales genéricas el que rankea es el competidor que invierte en guías comparativas. Ahal no tiene (o no se encontró) una guía propia tipo "mejores marcas de cosmética natural" que capture esa demanda — su contenido es sobre ingredientes, no sobre la categoría.

### 2.2. Título y descripción observados en el sitio

**OBSERVADO** (lectura directa de https://www.ahal.mx/ el 13 nov 2026, 19:20 UTC; la lectura devolvió principalmente la sección de reseñas):

- Título de la página: **"Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos"** — contiene categoría ("Maquillaje Orgánico"), atributo ("Cruelty Free") y marca. Es un título SEO competente, opuesto al "FATE™" a secas de F4T3.
- Sección "Customer Reviews": **Overall rating: 4.7 / 5 from 5209 reviews** (widget Loox, con foto-reseñas verificadas). Las reseñas visibles son de jun–oct 2026 en su mayoría (la más reciente leída: 27 oct 2026), con textos largos sobre resultados en piel, rutinas completas con la marca y alguna queja puntual (empaque defectuoso, producto llegado sin polvo, falta de respuesta de servicio).
- Productos más reseñados en la muestra leída: Opuntia Facial Serum, Marula Facial Serum, Tonic Mist, Sleeping Mask (Bakuchiol & Zapote Negro), Maquillaje Líquido 01–04, Mask & Scrub de Tepezcohuite, 3 Pack Jabones Faciales.

**OBSERVADO — discrepancia en el conteo de reseñas:** la página pública de Loox (https://loox.io/s/4JV5-rlTx) se titula "AHAL Bio Cosmética Reseñas - **3,555 Reseñas**", mientras la home muestra **5,209**. No se puede determinar cuál es el conteo vigente: puede ser caché de la página de Loox, distinto alcance (reseñas con foto vs. totales) o desactualización. Se consignan ambas cifras como observadas en sus respectivas fuentes, sin reconciliarlas.

**INFERIDO (confianza alta):** la prueba social es un activo central del sitio: 5,209 reseñas con foto, visibles en la home, con lenguaje de "rutina completa con Ahal" repetido por clientas ("toda mi rutina es con los productos de Ahal"). Es el equivalente funcional a la sección "RESEÑAS DE CLIENTES" de F4T3, pero con volumen y contenido real legible.

**NO VERIFICADO:** la meta description exacta que Google muestra para la home (la herramienta de lectura no devolvió el `<head>` / metaetiquetas), datos estructurados (JSON-LD) más allá de lo que Shopify genera por defecto, y el contenido de la parte superior de la home (hero, banners, posible campaña de Buen Fin) — la lectura devolvió la sección de reseñas, no el encabezado.

### 2.3. Páginas indexadas: sitemap y robots

**OBSERVADO** — https://www.ahal.mx/sitemap.xml (leído 13 nov 2026, 19:20 UTC). Es un sitemap índice de Shopify con:

- `sitemap_products_1.xml`, `sitemap_pages_1.xml`, `sitemap_collections_1.xml`, `sitemap_blogs_1.xml`, `sitemap_articles_1.xml`
- **`sitemap_agentic_discovery.xml`** (sitemap específico para descubrimiento por agentes — ver §3)

A diferencia de F4T3, **no hay versiones localizadas** (`en-us`, `es-us`, etc.): la tienda es México-español únicamente en el sitemap.

**OBSERVADO** — https://www.ahal.mx/sitemap_pages_1.xml (leído 13 nov 2026): **~85 páginas**, con fecha de última modificación. Las más relevantes para este frente:

| Página | Última modificación | Lectura |
|---|---|---|
| `/pages/revista` | 2026-08-18 | AHAL Revista, pieza editorial de marca (ver §5) |
| `/pages/store-locator` | 2026-09-28 | Localizador de tiendas — venta retail física |
| `/pages/embajadoras` | 2026-01-27 | Programa de embajadoras |
| `/pages/quiz-skincare` | 2026-08-10 | Quiz interactivo de skincare (captación / recomendación) |
| `/pages/politicas-de-devolucion`, `/pages/politica-de-envios-ahal` | 2026-10-08 | Políticas actualizadas antes del Buen Fin |
| `/pages/liquid-foundation-landing-page` | 2026-07-02 | Landing de base líquida |
| `/pages/base-v1-carta`, `base-v2-comunidad`, `base-v3-resultados`, `base-v4-rutina` | 2026-07-17/20 | Serie de 4 landings de base, por ángulo (carta, comunidad, resultados, rutina) |
| `/pages/acerca-de-nosotros`, `/pages/nuestros-sellos` | 2025-03-20 | Páginas de marca y sellos |
| `/pages/colorstick-landing`, `maskscrub-landing`, `kitraices-landing`, `opuntia-landing`, `sleepingmask-landing`, `basicos00–04-landing`, `biphasic-cleanser-landing`, `tonicmist-landing` | 2025-03-20 | Landings por producto/kit (PageFly) |
| `/pages/sephora-skincare`, `/pages/sephora-makeup` | 2022-03-28/29 | Landings co-brandeadas con Sephora |
| `/pages/shade-finder` | 2024-08-26 | Buscador de tono |
| `/pages/harpers-bazaar`, `/pages/lofficiel` | 2019-10-14 | Páginas de prensa (Harper's Bazaar, L'Officiel) — contenido no leído en esta sesión |
| `/pages/historia` | 2021-02-17 | Historia de la marca |
| `/pages/nuestros-productores-mexicanos`, `/pages/nuestro-laboratorio` | 2021-02-17 | Origen y producción |
| `/pages/contacto` | 2026-02-13 | Contacto |
| `/pages/newsletter` | 2023-11-15 | Captación de email |
| `/pages/ad-fb-subscription-promo-code` | 2020-12-29 | Vestigio de promo de suscripción en Facebook Ads |
| `/pages/kueski` | 2021-02-17 | Pago a plazos (Kueski) |
| `/pages/shop-by-instagram` | 2017-10-24 | Compra por Instagram (2017) |
| Páginas legado (`/pages/final`, `/pages/prueba`, `/pages/prueba-f`, `/pages/developing`, `/pages/covid-19`, `/pages/hot-sale-2021`, `/pages/fashion-sale`, `/pages/promocion-wonderwoman`, `/pages/ahal-live`, etc.) | 2016–2023 | Páginas viejas de campañas y pruebas que siguen en el sitemap |

Lectura: el sitemap muestra **una tienda con 10 años de historia acumulada y poca limpieza**: conviven landings de producto frescas (2025–2026), herramientas interactivas (quiz, shade finder, store locator) y decenas de páginas legado de campañas 2016–2023 que siguen indexables. Las páginas operativas se actualizaron en oct 2026, en vísperas del Buen Fin — igual que F4T3.

**OBSERVADO — errores visibles en landings:** los resultados de búsqueda de `kitraices-landing` y `sleepingmask-landing` muestran el texto "Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product" (kitraices) y "Liquid error (sections/pf-2ca009e8 line 133)" (sleepingmask). Son errores de plantilla PageFly visibles en el contenido indexado por el buscador. Es un defecto técnico real en páginas de conversión, no una inferencia.

**NO VERIFICADO (límite de tasa, 429, no reintentado):** el contenido de `sitemap_collections_1.xml` (número de colecciones y sus `lastmod`) y de `sitemap_articles_1.xml` (número total de artículos del blog y fechas). Tampoco se pudo leer `sitemap_blogs_1.xml` ni `sitemap_agentic_discovery.xml` en esta sesión: los tres intentos de `browser.open` en ese bloque devolvieron error 429 del servicio de lectura y **no se reintentaron**, conforme a la regla. El blog se documenta en su lugar por los artículos que devuelve el buscador (ver §5).

**OBSERVADO** — https://www.ahal.mx/robots.txt (leído 13 nov 2026, 19:20 UTC): robots estándar de Shopify, permisivo (`User-agent: * / Allow: /`), con bloqueos solo de rutas privadas/transaccionales (`/admin`, `/cart/`, `/checkout`, `/orders`, `/account`, `/services`, `/sf_*`) y de trampas de rastreo (filtros/ordenación, `?preview_theme_id=`, etc.). Declara `Sitemap: https://www.ahal.mx/sitemap.xml` y —igual que F4T3— enlaza `/agents.md`, `/.well-known/ucp` y `/api/ucp/mcp` en sus primeras líneas, con las mismas instrucciones para agentes personales (instalar `https://shop.com/SKILL.md`). Es el texto estándar de Shopify, no una redacción propia de Ahal.

**INFERIDO (confianza media-alta):** la higiene técnica SEO es correcta (sitemap completo, robots sin bloqueos accidentales, URLs limpias `/products/{handle}` y `/blogs/ahal-1/{slug}`), pero el sitio arrastra **deuda de contenido indexable**: ~85 páginas con muchas legado sin valor SEO actual, y errores Liquid en landings de producto que el buscador indexa. El punto débil no es la falta de contenido (como F4T3) sino su **mantenimiento y su captura de demanda genérica**.

**NO VERIFICADO:** número total de productos indexados, colecciones, artículos totales del blog, posiciones por palabra clave, canibalización entre landings de producto (p. ej. `basicos00–04` + `liquid-foundation-landing-page` + `base-v1–v4`), ni Core Web Vitals / velocidad.

### 2.4. Publicidad pagada observable

**OBSERVADO (vestigios):** la única evidencia de paid en el propio sitio es histórica: la página `/pages/ad-fb-subscription-promo-code` (2020-12-29, en el sitemap) y la página `/pages/shop-by-instagram` (2017). No se encontró en esta sesión ninguna URL con parámetros UTM de Meta/Google Ads, ni landing de captación de creadores, ni subdominio de creadores.

**OBSERVADO (fuente secundaria):** en reseñas de clientas leídas en la home, varias mencionan haber llegado por "la publicidad de su creadora" ("después de ver que había reformulado y ver la publicidad de su creadora, quise arriesgarme" — Mitzy U., reseña del Maquillaje Líquido 03, 11 mar 2026). Es evidencia de que existe publicidad protagonizada por Iliana Loza, pero no se observó el anuncio mismo ni su canal.

**INFERIDO (confianza baja-media):** Ahal hace publicidad con la fundadora como cara (founder-led ads), coherente con su posicionamiento de marca personal, pero no hay evidencia observable de una operación paid a escala comparable a F4T3 (sin programa de creadores por performance ni UTM visibles). La ausencia de evidencia no prueba ausencia de inversión.

**NO VERIFICADO:** gasto en anuncios, campañas activas, anuncios en la Biblioteca de Anuncios de Meta (no se consultó en esta sesión); tampoco Google Ads ni TikTok Ads.

### 2.5. El problema TEIA: un competidor captura la demanda genérica

**OBSERVADO:** en las consultas genéricas de categoría realizadas, los primeros resultados los dominan las guías SEO de **TEIA Cosméticos** (competidor directo de Guadalajara): "Marcas de maquillaje vegano en México: guía completa" (abr 2026), "¿Qué marcas mexicanas de cosmética utilizan ingredientes naturales?" (jun 2025, actualizada ene 2026) y "¿Cuáles son las mejores marcas de maquillaje cruelty-free disponibles en México?". En su "Top 8 marcas mexicanas con ingredientes naturales", TEIA lista: TEIA, Xixänthé, Rayito de Luna, Botanicus, Pitahia, Xamania, Nopalmita y Nae Cosmética — **Ahal no está en la lista**. En su guía de maquillaje cruelty-free, las marcas citadas son TEIA, Bissú, Xamania, Rare Beauty y Urban Decay — **Ahal tampoco aparece**.

**INFERIDO (confianza media):** TEIA está ejecutando exactamente la jugada SEO que Ahal no hace: guías comparativas de categoría que rankean para la demanda genérica y que colocan su propia marca en primer lugar. Ahal, pese a tener más autoridad real (Sephora, Ulta, PETA, prensa), **no compite por esas consultas** porque su contenido es sobre ingredientes propios, no sobre la categoría. Es la brecha SEO más accionable del informe.

**HIPÓTESIS:** si un usuario pregunta hoy a un motor de IA "¿qué marcas mexicanas de cosmética natural recomiendas?", las fuentes que ese motor citaría con más probabilidad son las guías de TEIA — donde Ahal no aparece — antes que los listados donde Ahal sí aparece (Merca20, Mujer de 10, QueTalVirtual). Es una hipótesis derivada, no una observación: no se interrogó a ningún motor.

---

## 3. GEO — presencia en respuestas de IA

### 3.1. Lo que se pudo comprobar

**NO VERIFICADO (limitación declarada):** en esta sesión no se pudo interrogar directamente a ChatGPT, Google AI Overviews, Perplexity, Copilot ni a ningún otro motor de respuestas de IA con preguntas como "¿qué marcas mexicanas de cosmética natural recomiendas?" o "¿qué es Ahal?". Por tanto **no se afirma que Ahal aparezca o no aparezca en respuestas generativas**. Cualquier informe que afirme su presencia/ausencia en GEO sin haber hecho esas consultas estaría inventando.

Lo que sí se observó, y es relevante para GEO, es la **infraestructura de citabilidad** del sitio:

**OBSERVADO:**

1. **`/agents.md`** (https://www.ahal.mx/agents.md, leído 13 nov 2026): documento canónico "Agent Instructions — AHAL Bio Cosmética" que explica a agentes de IA cómo descubrir productos, usar la Shop skill, integrar UCP/MCP (`GET https://www.ahal.mx/.well-known/ucp`, `https://www.ahal.mx/api/ucp/mcp`) y operar WebMCP en checkout. Declara políticas (privacidad, términos, reembolso, envío) y que la tienda está construida en Shopify. **El texto es el boilerplate estándar de Shopify, idéntico en estructura y redacción al de F4T3** (mismas secciones, mismas URLs de documentación, mismo párrafo de Shop skill). No hay contenido propio de Ahal en el documento.
2. **`robots.txt`** enlaza `/agents.md`, `/.well-known/ucp` y `/api/ucp/mcp` en sus primeras líneas — igual que F4T3, porque es el robots estándar de Shopify.
3. **`sitemap_agentic_discovery.xml`** listado en el sitemap índice (su contenido **no se pudo leer**: el intento de apertura devolvió error 429 del servicio de lectura; se declara como no verificado, no como ausente).
4. **Páginas citables con entidad clara:** `/pages/historia` ("CREAMOS COSMÉTICA NATURAL QUE REALMENTE FUNCIONA", fundadora Iliana Loza, ingeniera química, 2010) y `/pages/revista` (historia de la fundadora, criterios de formulación, trazabilidad por lote, origen 100% mexicano, presencia retail). Son textos con datos factuales (fechas, lugares, sellos, cifras de ingredientes) que un motor de respuestas puede citar — mucho más citables que el `/nosotros` poético de F4T3.
5. **Señales de entidad en terceros:** El Universal y NotiMX identifican a "Iliana Loza, CEO y Fundadora de Ahal, ingeniera química con especialidad en Formulación Cosmética, Monterrey, 14 años, más de 300 ingredientes naturales"; Paperblog (2019) documenta el programa Sephora Accelerate y la victoria entre 100 marcas; Hotbook (sep 2025) la ubica en el programa "Orgullosamente Latino" de Ulta Beauty; el directorio de TEIA (actualizado 9 nov 2025) la lista como "AHAL (Laboratorio Biocosmética S.A. de C.V.) — en el listado oficial de PETA como cruelty-free".
6. **Contenido que responde preguntas:** los artículos del blog responden preguntas literales de búsqueda ("¿Qué es el bakuchiol y para qué sirve?", "Aceite de semilla de tuna: para qué sirve en el skincare", "Ingredientes relleno en cosmética: qué son y por qué evitarlos") — el formato exacto que los motores de respuesta citan.

**INFERIDO (confianza media-alta):** Ahal está **mejor preparada para la citación en respuestas generativas que para el comercio agentic**. Tiene lo que los motores citan — contenido que responde preguntas, entidad de fundadora documentada en prensa, sellos verificables por terceros (Sephora Clean At, PETA), presencia retail — pero su capa agentic es solo el default de Shopify, sin personalización. Es el perfil inverso al de F4T3.

**INFERIDO (confianza media):** si un usuario pregunta hoy a un motor de IA por "mejores marcas mexicanas de cosmética natural", es **probable que Ahal aparezca**, porque los listados que esos motores citarían (Merca20, Mujer de 10, QueTalVirtual, la-respuesta) sí la incluyen. Pero es **probable que no aparezca en primer lugar ni como recomendación principal**, porque las guías que dominan la demanda genérica (TEIA) no la mencionan. Es una inferencia, no una observación.

### 3.2. Qué le falta para ser citable (inferido, para la Fase 2)

- Una guía comparativa propia de categoría ("mejores marcas de cosmética natural mexicana", "cómo elegir cosmética limpia") que capture la demanda genérica que hoy se lleva TEIA.
- Datos estructurados de organización visibles (fundadora, fundación 2010, sede Monterrey, rango de precios) — la información existe en `/historia` y `/revista`, pero no se verificó si está en JSON-LD.
- Un `llms.txt` o equivalente propio (hoy solo existe el `/agents.md` estándar de Shopify, orientado a comprar, no a ser citado).
- Actualización del blog: el artículo más reciente observado es del 1 sep 2025; la frescura es un factor de citación.

---

## 4. Presencia digital

### 4.1. Canales observados

| Canal | OBSERVADO | URL / evidencia |
|---|---|---|
| Tienda propia (Shopify) | Activa, 13 nov 2026; título SEO con categoría; 4.7/5, 5,209 reseñas (Loox) | https://www.ahal.mx/ |
| AHAL Revista | Pieza editorial de marca, actualizada 18 ago 2026; historia de fundadora, sellos, Edición Limitada con precios | https://www.ahal.mx/pages/revista |
| Blog | Activo, `/blogs/ahal-1`, artículos de ingredientes (tuna 1 sep 2025, ingredientes relleno 25 ago 2025, bakuchiol 24 jul 2023) | https://www.ahal.mx/blogs/ahal-1/aceite-de-semilla-de-tuna-para-que-sirve-en-el-skincare |
| Sephora México | Presente, sello Clean At; ganadora Sephora Accelerate México 2019 (100 marcas → 10 → AHAL); landings propias `/pages/sephora-skincare` y `/pages/sephora-makeup` (2022) | Paperblog 2019; El Universal; NotiMX |
| Ulta Beauty México | Presente, programa "Orgullosamente Latino" (sep 2025) | https://hotbook.mx/ulta-beauty-mexico/ |
| Liverpool | Presente (citado en Revista y en guías de TEIA como canal de cosmética natural) | https://www.ahal.mx/pages/revista |
| Arboleda | Presente (citado en Revista) | https://www.ahal.mx/pages/revista |
| Amazon México | Tienda AHAL, vendido por Laboratorio Biocosmética; Maquillaje Líquido $740, 3.8/5 (11 valoraciones) | https://www.amazon.com.mx/dp/B0DSJWSS34 |
| Distribuidores terceros | ibspot.com revende Sleeping Mask y Tonic Mist (con envío solo a EE. UU. según su página) | https://ibspot.com/products/ahal-bio-cosmetica-sleeping-mask-mascarilla-de-noche-bakuchiol-zapote-negro |
| Instagram | `@ahal_bio` citado en El Universal, Mujer de 10, MiEscaparate, NotiMX y podcasts. **No se pudo verificar** perfil, seguidores ni frecuencia | Fuentes citadas en §7 |
| Facebook | `AhalBio` citado en NotiMX ("IG: ahal_bio FB: AhalBio"). **No verificado** | https://www.notimx.mx/2023/08/la-nueva-era-de-la-belleza-cosmetica.html |
| YouTube | Mencionado como canal de la fundadora en podcasts ("Puedes seguirnos en Instagram, Facebook y Youtube"). **No verificado** | Everand, podcast DeSensibles y Chingonas |
| Podcast (terceros) | 5 episodios con Iliana Loza: "Cómo escalar tu marca, CEO de Ahal Bio" (22 oct 2020), "Belleza Consciente" en Aprendiendo desde Adentro ep. 60 (3 nov 2020), "El precio por ser bonita…" en DeSensibles y Chingonas ep. 61 (16 nov 2022), "¿Cómo puede una empresa apoyar a su comunidad?" en DeLa de RH (25 nov 2022), "Aprender Conciencia" (22 nov 2022); perfil Bien Bonita, Women's History Month (28 mar 2024) | Everand / Acast (ver §7) |
| Prensa / revista | El Universal (~sep 2023), NotiMX (ago 2023), EstasDeModa (2020), Paperblog/entrevista (8 nov 2019), Merca20 (2025), Mujer de 10 (2025), QueTalVirtual (vía Glamour), MiEscaparate (2020), Biutest/MXBeauty (reseña de usuaria); páginas propias `/pages/harpers-bazaar` y `/pages/lofficiel` (2019, contenido no leído) | Ver §7 |
| Programa de embajadoras | Página `/pages/embajadoras` en sitemap (27 ene 2026); contenido **no leído** en esta sesión | https://www.ahal.mx/sitemap_pages_1.xml |
| Quiz / shade finder / store locator | `/pages/quiz-skincare` (10 ago 2026), `/pages/shade-finder` (26 ago 2024), `/pages/store-locator` (28 sep 2026) | https://www.ahal.mx/sitemap_pages_1.xml |
| Pago a plazos | Kueski (página 2021) | `/pages/kueski` en sitemap |
| TikTok | **No se encontró** evidencia de canal o presencia en TikTok en las búsquedas realizadas | NO VERIFICADO (ausencia en resultados ≠ inexistencia) |
| Mercado Libre | **No se encontró** presencia en Mercado Libre en las búsquedas realizadas (sí en Amazon) | NO VERIFICADO |
| Tienda física propia | No se encontró dirección de tienda física propia; el podcast de 2020 menciona "sus propias tiendas" (plural) en pasado, y hoy existe un localizador de tiendas (2026). **No verificado** si hay tienda propia vigente | NO VERIFICADO |

### 4.2. Estructura de la estrategia digital (INFERIDO, confianza media)

A partir de lo observado, la estrategia se lee así:

1. **El contenido es el producto.** Blog de ingredientes, Revista de marca, landings por producto que explican cada activo (tuna, bakuchiol, tepezcohuite, miel melipona, zapote negro) y rutinas completas. Cada pieza educativa termina en el producto que contiene el ingrediente. Es content marketing de nicho, no de categoría.
2. **La autoridad se alquila en retail, no se compra en ads.** Sephora (Clean At, Accelerate), Ulta ("Orgullosamente Latino"), Liverpool, Arboleda y Amazon funcionan como prueba de terceros: la marca no necesita decir que es buena, lo dicen los anaqueles. La Revista lo resume en su propio titular: "Ya conquistamos los anaqueles. Ahora, tu tocador."
3. **La fundadora es el canal.** Iliana Loza — ingeniera química, fundadora, cara de la marca — protagoniza la Revista, los podcasts, las entrevistas y (según reseñas de clientas) la publicidad. Es una estrategia founder-led clásica de clean beauty.
4. **La comunidad se cultiva con herramientas, no con descuentos.** Quiz de skincare, shade finder, programa de embajadoras, localizador de tiendas, newsletter, kits rituales (Kit Raíces). No hay evidencia de programa de creadores por performance ni de promociones agresivas; en el primer día del Buen Fin 2026 no se encontró campaña propia.
5. **El precio es premium y se justifica con ingredientes, no con oferta.** Precios observados: Opuntia Facial Serum $1,080, Tonic Mist $850, Marula/Kalahari $980, Sleeping Mask $1,390, Maquillaje Líquido $740 (Amazon). La justificación es la fórmula (trazabilidad por lote, +300 ingredientes, comercio justo), no el descuento.
6. **Consistencia de marca: alta.** El mismo mensaje — herbolaria mexicana + ciencia + sustentabilidad + comercio justo — se repite idéntico en el sitio, El Universal, NotiMX, Paperblog, los podcasts y los listados, desde 2019 hasta 2026. La única grieta observada son los errores Liquid en dos landings de producto y la deuda de páginas legado en el sitemap.

### 4.3. Reputación / conversación social

**OBSERVADO:** la conversación de clientas es visible y mayoritariamente positiva en el propio sitio (4.7/5, 5,209 reseñas, con foto). Las reseñas negativas visibles son puntuales y de operación: empaques defectuosos, un bronzer llegado sin polvo con falta de respuesta ("Me llegó el bronzer sin polvo, he mandado correos, whatsapps, mensajes por su chat bot y nadie contesta" — Estefania D., 1/5, 12 jul 2026), y una queja de fórmula/etiquetado del suero de Marula (Jazmin R., 1/5, 6 oct 2026). En Amazon, el Maquillaje Líquido tiene 3.8/5 con solo 11 valoraciones — muestra pequeña, no representativa.

**OBSERVADO (fuente secundaria):** una reseña de usuaria en Biutest/MXBeauty resume el posicionamiento percibido: "Ahal marca mexicana, cuenta con productos de skincare y maquillaje, es una marca Clean Beauty, algunos pudieran considerarla cara pero al usar sus productos te das cuenta que vale la pena cada peso que pagas, y además puedes encontrar la marca en Sephora México."

**NO VERIFICADO:** valoración media fuera del sitio, volumen de reseñas en Google/Trustpilot, quejas en Profeco, o sentimiento general en redes. No se afirma que exista un problema de servicio; solo que existen al menos dos quejas puntuales visibles en el propio sitio.

---

## 5. Contenido: blog, guías y secciones

**OBSERVADO:**

- Existe un blog Shopify activo: https://www.ahal.mx/blogs/ahal-1 — artículos observados vía buscador:
  - "Aceite de semilla de tuna: Para qué sirve en el skincare" — **1 sep 2025** (origen en Hidalgo, Don Ángel y comunidades locales, proceso artesanal, beneficios, en qué productos AHAL se encuentra: Opuntia, Marula, Tonic Mist)
  - "Ingredientes relleno en cosmética: qué son y por qué evitarlos" — **25 ago 2025** (siliconas, parafinas, alcohol desnaturalizado, fragancias sintéticas; filosofía AHAL de ingredientes con propósito)
  - "¿QUÉ ES EL BAKUCHIOL Y PARA QUÉ SIRVE? EL NUEVO RETINOL VEGETAL" — **24 jul 2023** (alternativa al retinol, 5 beneficios, bakuchiol vs retinol)
- **AHAL Revista** (https://www.ahal.mx/pages/revista, `lastmod` 18 ago 2026): pieza editorial larga — historia de Iliana Loza, ciencia + naturaleza (trazabilidad por lote, 100% limpio, cruelty-free, hipoalergénico), origen 100% mexicano (miel maya de Yodzonot), Edición Limitada con precios, presencia nacional (Sephora, Ulta, Liverpool, Arboleda, Amazon). Es contenido de marca con vocación editorial, no una ficha de producto.
- **Landings por producto** (PageFly, `lastmod` 20 mar 2025): `tonicmist-landing` (agua tónica 3 en 1, +10 activos mexicanos), `sleepingmask-landing` (bakuchiol, zapote negro, miel melipona), `kitraices-landing` (Kit Raíces: tepezcohuite, miel melipona, tuna, cempasúchil), `opuntia-landing`, `maskscrub-landing`, `basicos00–04-landing`, `biphasic-cleanser-landing`, `colorstick-landing`. Cada una explica ingredientes, beneficios, modo de uso y rutina.
- **Serie de landings de base líquida** (jul 2026): `liquid-foundation-landing-page` + `base-v1-carta`, `base-v2-comunidad`, `base-v3-resultados`, `base-v4-rutina` — cuatro ángulos de venta para el mismo producto (carta de la fundadora, comunidad, resultados, rutina). Es testeo de mensajes, no contenido SEO.
- **Herramientas interactivas:** quiz de skincare (ago 2026), shade finder (2024), store locator (sep 2026).
- **Frecuencia de contenido observable:** blog con al menos 2 artículos en ago–sep 2025 y el más reciente el 1 sep 2025; Revista actualizada ago 2026; landings de base en jul 2026. No es una cadencia alta, pero **no es un blog muerto** (contraste con F4T3, sin artículos desde 2022).

**INFERIDO (confianza alta):** Ahal sí hace content marketing SEO, y su contenido es **educativo sobre ingredientes con cierre en producto**. Responde preguntas reales de búsqueda ("¿qué es el bakuchiol?", "¿para qué sirve el aceite de tuna?") con artículos largos y con autoría de marca. Lo que no hace es **contenido de categoría comparativa** — y ahí es donde pierde la demanda genérica frente a TEIA (ver §2.5).

**INFERIDO (confianza media):** la Revista (ago 2026) y la serie de landings de base (jul 2026) sugieren un **relanzamiento de marca en el segundo semestre de 2026**: Edición Limitada con ilustraciones botánicas, nueva narrativa ("De México para el mundo"), quiz y store locator nuevos. Es coherente con la llegada de Ulta a México (sep 2025) y la expansión retail.

**NO VERIFICADO:** número total de artículos del blog (el `sitemap_articles_1.xml` no se pudo leer por 429), frecuencia real de publicación, tráfico que recibe el blog, ni si existen artículos posteriores al 1 sep 2025 no devueltos por el buscador.

---

## 6. Lista final: observado / inferido / hipótesis / no verificado

### OBSERVADO (con fuente y fecha)

1. Tienda Shopify en https://www.ahal.mx/, título de home "Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos", activa el 13 nov 2026. [Lectura directa, 13 nov 2026 19:20 UTC]
2. Home: 4.7 / 5 a partir de 5,209 reseñas (widget Loox), con foto-reseñas verificadas de jun–oct 2026. [https://www.ahal.mx/, 13 nov 2026]
3. Página pública de Loox titulada "AHAL Bio Cosmética Reseñas - 3,555 Reseñas" — cifra distinta a la de la home. [https://loox.io/s/4JV5-rlTx, 13 nov 2026]
4. `robots.txt` permisivo, estándar Shopify, con enlaces a `/agents.md`, `/.well-known/ucp`, `/api/ucp/mcp` y sitemap declarado. [https://www.ahal.mx/robots.txt, 13 nov 2026]
5. `/agents.md` con instrucciones para agentes de IA, integración UCP/MCP y Shop skill — texto boilerplate estándar de Shopify, idéntico en estructura al de F4T3. [https://www.ahal.mx/agents.md, 13 nov 2026]
6. Sitemap índice con productos, páginas, colecciones, blogs, artículos y `sitemap_agentic_discovery.xml`; sin versiones localizadas. [https://www.ahal.mx/sitemap.xml, 13 nov 2026]
7. ~85 páginas en el sitemap; frescas: Revista (2026-08-18), store-locator (2026-09-28), quiz-skincare (2026-08-10), base-v1–v4 (2026-07), políticas (2026-10-08); legado: decenas de páginas 2016–2023, incluidas `/pages/harpers-bazaar` y `/pages/lofficiel` (2019). [https://www.ahal.mx/sitemap_pages_1.xml, 13 nov 2026]
8. Errores Liquid visibles en landings indexadas: "Liquid error (sections/pf-1134a0a4 line 51)" en `kitraices-landing` y "Liquid error (sections/pf-2ca009e8 line 133)" en `sleepingmask-landing`. [Resultados de búsqueda, 13 nov 2026]
9. AHAL Revista: historia de Iliana Loza (2010, ingeniera química), sellos, origen 100% mexicano, Edición Limitada (Opuntia $1,080; Tonic Mist $850; Kalahari $980; Marula $980), presencia Sephora / Ulta Beauty / Liverpool / Arboleda / Amazon. [https://www.ahal.mx/pages/revista, 13 nov 2026]
10. Blog `/blogs/ahal-1` activo: "Aceite de semilla de tuna" (1 sep 2025), "Ingredientes relleno en cosmética" (25 ago 2025), "¿Qué es el bakuchiol?" (24 jul 2023). [Búsqueda `site:ahal.mx`, 13 nov 2026]
11. Sephora: ganadora del programa Sephora Accelerate en México (2019, 100 marcas inscritas → 10 → AHAL), sello Clean At; "única marca cosmética orgánica mexicana seleccionada para el catálogo de Sephora" (según NotiMX y El Universal). [Paperblog 8 nov 2019; El Universal ~2023; NotiMX ago 2023]
12. Ulta Beauty México: AHAL en el programa "Orgullosamente Latino" (sep 2025), junto a Ere Pérez, Rizos Curls y Sarelly. [https://hotbook.mx/ulta-beauty-mexico/, publicado 11 sep 2025]
13. Listados: Ahal aparece en QueTalVirtual ("11 marcas… cruelty free"), Mujer de 10 (2025), Merca20 (2025), la-respuesta.com y MiEscaparate (2020). [Búsquedas, 13 nov 2026]
14. PETA: "AHAL (Laboratorio Biocosmética S.A. de C.V.) — en el listado oficial de PETA como cruelty-free" (directorio TEIA, actualizado 9 nov 2025). [https://teiacosmeticos.com/blogs/noticias/marcas-mexicanas-cruelty-free-directorio-actualizado-para-una-rutina-etica]
15. Amazon México: tienda AHAL, vendido por Laboratorio Biocosmética; Maquillaje Líquido $740, 3.8/5 (11 valoraciones). [https://www.amazon.com.mx/dp/B0DSJWSS34, 13 nov 2026]
16. Podcasts con Iliana Loza: "Cómo escalar tu marca" (22 oct 2020), Aprendiendo desde Adentro ep. 60 (3 nov 2020), DeSensibles y Chingonas ep. 61 (16 nov 2022), DeLa de RH (25 nov 2022), Aprender Con Ciencia (22 nov 2022); perfil Bien Bonita (28 mar 2024). [Everand / Acast, 13 nov 2026]
17. En consultas genéricas ("maquillaje orgánico México comprar"), Ahal no aparece en los 7 primeros resultados; dominan las guías de TEIA Cosméticos. En el "Top 8" de TEIA de marcas naturales mexicanas, Ahal no está listada. [Búsquedas, 13 nov 2026]
18. Búsqueda "Ahal Buen Fin 2026": cero resultados sobre Ahal. [Búsqueda, 13 nov 2026]
19. Vestigios de paid histórico: `/pages/ad-fb-subscription-promo-code` (2020) y `/pages/shop-by-instagram` (2017) en el sitemap; reseña de clienta que menciona "la publicidad de su creadora". [Sitemap; home, reseña Mitzy U. 11 mar 2026]
20. Instagram `@ahal_bio` y Facebook `AhalBio` citados en El Universal, NotiMX, Mujer de 10, MiEscaparate y podcasts. [Fuentes en §7]

### INFERIDO (con evidencia y confianza)

1. **Estrategia = contenido educativo sobre ingredientes + autoridad retail + fundadora como canal; paid y promociones no visibles.** Evidencia: blog y Revista activos, landings por ingrediente, quiz/shade finder/embajadoras, presencia Sephora/Ulta/Liverpool, cero resultados de Buen Fin y cero UTM observables. Confianza: **media-alta**.
2. **SEO técnico correcto (estándar Shopify); SEO de autoridad fuerte; SEO de categoría débil.** Evidencia: sitemap/robots correctos, prensa y sellos de terceros, blog indexado vs. ausencia en consultas genéricas y en el Top 8 de TEIA. Confianza: **alta**.
3. **El título de home con categoría es un activo SEO real** ("Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos"). Evidencia: título observado; páginas de contenido propio rankean para marca. Confianza: **media**.
4. **La deuda de páginas legado y los errores Liquid en landings son el principal defecto técnico.** Evidencia: ~85 páginas con muchas 2016–2023 y dos errores Liquid indexados. Confianza: **media-alta**.
5. **Ahal está mejor preparada para citación en respuestas de IA que para comercio agentic.** Evidencia: contenido que responde preguntas + entidad documentada en prensa + sellos de terceros vs. `/agents.md` estándar de Shopify sin personalización. Confianza: **media-alta**.
6. **Probable aparición en respuestas de IA a "mejores marcas mexicanas de cosmética natural"**, porque los listados que esos motores citarían sí la incluyen; pero probablemente no como primera recomendación, porque las guías dominantes (TEIA) no la mencionan. Confianza: **media** (inferencia sin haber interrogado a ningún motor).
7. **Relanzamiento de marca en el 2º semestre de 2026.** Evidencia: Revista (ago 2026), serie de landings de base (jul 2026), quiz (ago 2026), store locator (sep 2026), Edición Limitada. Confianza: **media**.
8. **TEIA ejecuta la jugada SEO de categoría que Ahal no hace** (guías comparativas que rankean y se auto-posicionan primeras). Evidencia: dominio de TEIA en consultas genéricas y omisión de Ahal en sus listas. Confianza: **media-alta**.

### HIPÓTESIS (derivadas, marcadas)

1. Si un usuario pregunta hoy a un motor de IA "¿qué marcas mexicanas de cosmética natural recomiendas?", las fuentes que ese motor citaría con más probabilidad son las guías de TEIA — donde Ahal no aparece — antes que los listados donde Ahal sí aparece. Derivada de §2.5; no observada en ningún motor.
2. La ausencia de campaña de Buen Fin observable puede significar que Ahal no participa en el Buen Fin 2026 en su tienda propia (y vende el Buen Fin a través de sus retailers: Sephora, Liverpool, Ulta), o simplemente que su campaña no está indexada ni cubierta en los resultados consultados. No se puede distinguir entre ambas con las herramientas de esta sesión.

### NO VERIFICADO

1. Posiciones exactas en Google/Bing para ninguna consulta; tráfico orgánico y pagado; volúmenes de búsqueda de "ahal", "cosmética natural México" o "maquillaje orgánico México".
2. Meta description de la home, datos estructurados (JSON-LD) y Core Web Vitals; contenido del encabezado/hero de la home (la lectura devolvió la sección de reseñas).
3. Número total de productos y de colecciones indexados (el `sitemap_collections_1.xml` no se pudo leer: 429, no reintentado), número total de artículos del blog (el `sitemap_articles_1.xml` no se pudo leer: 429, no reintentado), ni el contenido de `sitemap_blogs_1.xml` y `sitemap_agentic_discovery.xml` (429, no reintentados).
4. Presencia o ausencia real en respuestas de ChatGPT, Google AI Overviews, Perplexity, Copilot o Meta AI.
5. Seguidores, frecuencia de publicación y alcance en Instagram, TikTok, YouTube y Facebook; gasto y campañas activas en Meta/Google/TikTok Ads (incluida la Biblioteca de Anuncios de Meta).
6. Campaña propia de Buen Fin 2026 (cero resultados en buscador ≠ inexistencia); participación en el Buen Fin a través de retailers.
7. Contenido de `/pages/embajadoras`, `/pages/harpers-bazaar`, `/pages/lofficiel`, `/pages/quiz-skincare` y `/pages/store-locator` (en sitemap, no leídas en esta sesión).
8. Existencia y dirección de tienda física propia vigente; presencia en Mercado Libre y TikTok Shop.
9. Volumen y valoración de reseñas fuera del sitio (Google, Trustpilot, Profeco); reconciliación del conteo 5,209 (home) vs. 3,555 (página pública de Loox).
10. Si el dominio `ahal.mx` (sin www) redirige a `www.ahal.mx` o viceversa.

---

## 7. Fuentes consultadas y consultas de búsqueda

### Páginas leídas directamente (browser.open, 13 nov 2026)

- https://www.ahal.mx/ (home — lectura devolvió la sección de reseñas)
- https://www.ahal.mx/robots.txt
- https://www.ahal.mx/sitemap.xml
- https://www.ahal.mx/sitemap_pages_1.xml?from=22359015&to=166357401920
- https://www.ahal.mx/agents.md
- https://www.ahal.mx/pages/revista

### Intentos de lectura fallidos por límite de tasa (429, no reintentados)

- https://www.ahal.mx/sitemap_collections_1.xml?from=30100055&to=517067014464
- https://www.ahal.mx/sitemap_articles_1.xml
- https://www.ahal.mx/blogs/ahal-1

### Consultas de búsqueda ejecutadas (browser.search, 13 nov 2026)

1. `Ahal cosmética natural México ahal.mx Iliana Loza`
2. `site:ahal.mx`
3. `Ahal Sephora México Clean At sello cosmética`
4. `mejores marcas cosmética natural mexicana Ahal clean beauty`
5. `Ahal opiniones reseñas comprar maquillaje orgánico`
6. `Ahal Buen Fin 2026 descuento promoción`
7. `Ahal Ulta Beauty Liverpool Arboleda tienda México`
8. `"Ahal" cosmética limpia México rutina skincare bakuchiol`
9. `Ahal Harper's Bazaar L'Officiel México entrevista Iliana Loza`
10. `Ahal embajadoras programa afiliados Instagram ahal_bio`
11. `maquillaje orgánico México comprar cosmética natural tienda online`
12. `ahal.mx blogs ahal-1 bakuchiol tuna tepezcohuite artículo`

### Fuentes de terceros citadas

- El Universal — "Descubre Ahal, marca mexicana que apuesta por la cosmética limpia": https://eluniversal-eluniversal-prod.web.arc-cdn.net/de-ultima/descubre-ahal-marca-mexicana-que-apuesta-por-la-cosmetica-limpia/
- NotiMX — "La nueva era de la belleza: cosmética enfocada en la sustentabilidad y el cuidado del planeta" (ago 2023): https://www.notimx.mx/2023/08/la-nueva-era-de-la-belleza-cosmetica.html
- Paperblog — "AHAL festeja su 9o Aniversario y su entrada a Sephora" (8 nov 2019): https://es.paperblog.com/ahal-festeja-su-9o-aniversario-y-su-entrada-a-sephora-5617320/amp
- Hotbook — "Ulta Beauty: un nuevo destino de belleza en México" (11 sep 2025): https://hotbook.mx/ulta-beauty-mexico/
- EstasDeModa — "Descubre el maquillaje orgánico de la mano de Ahal" (25 ago 2020): https://estasdemoda.com/descubre-el-maquillaje-organico-de-la-mano-de-ahal/
- Merca20 — "Marcas mexicanas de cosméticos y maquillaje que DEBES conocer" (2025): https://www.merca20.com/marcas-mexicanas-de-cosmeticos-y-maquillaje-que-debes-conocer/
- Mujer de 10 — "Maquillaje cruelty free: 5 marcas que debes probar ¡YA!" (29 may 2025): https://www.mujerde10.com/belleza/5-marcas-de-maquillaje-mexicanas-que-si-son-cruelty-free/2025/05/
- QueTalVirtual — "11 marcas de belleza mexicanas que son cruelty free y amigables con el ambiente": https://quetalvirtual.com/blog/149999/11-marcas-de-belleza-mexicanas-que-son-cruelty-free-y-amigables-con-el-ambiente
- MiEscaparate — "Seis marcas mexicanas de maquillaje ecológico que cuidan tu piel (y al planeta)" (7 oct 2020): https://miescaparate.com.mx/seis-marcas-mexicanas-de-maquillaje-ecologico-que-cuidan-tu-piel-y-al-planeta/
- TEIA Cosméticos — directorio cruelty-free (actualizado 9 nov 2025): https://teiacosmeticos.com/blogs/noticias/marcas-mexicanas-cruelty-free-directorio-actualizado-para-una-rutina-etica
- TEIA Cosméticos — "¿Qué marcas mexicanas de cosmética utilizan ingredientes naturales?" (actualizada 16 ene 2026): https://teiacosmeticos.com/blogs/noticias/que-marcas-mexicanas-de-cosmetica-utilizan-ingredientes-naturales
- TEIA Cosméticos — "Marcas de maquillaje vegano en México: guía completa" (abr 2026): https://teiacosmeticos.com/blogs/noticias/marcas-de-maquillaje-vegano-en-mexico-guia-completa
- Loox — "AHAL Bio Cosmética Reseñas - 3,555 Reseñas": https://loox.io/s/4JV5-rlTx
- Amazon México — Maquillaje Líquido AHAL: https://www.amazon.com.mx/dp/B0DSJWSS34
- IBSPOT — Sleeping Mask y Tonic Mist AHAL (distribuidor tercero): https://ibspot.com/products/ahal-bio-cosmetica-sleeping-mask-mascarilla-de-noche-bakuchiol-zapote-negro
- Bien Bonita — "Mujeres, latinas y pioneras: Iliana Loza…" (28 mar 2024): https://bienbonita.com/tema/womens-history-month/
- Podcasts con Iliana Loza (Everand/Acast): https://es.everand.com/podcast/646619032/46-Como-escalar-tu-marca-CEO-de-Ahal-Bio-Iliana-Loza ; https://es.everand.com/podcast/608115656/Ep-61-El-precio-por-ser-bonita-no-debe-ser-danarte-a-ti-ni-al-planeta-con-Iliana-Loza ; https://es.everand.com/podcast/610174978/Como-puede-una-empresa-apoyar-a-su-comunidad-E25-T3 ; https://es.everand.com/podcast/609456595/Aprender-Conciencia-AHAL-BIOCOSMETICA-ft-Iliana-Loza ; https://shows.acast.com/aprendiendodesdeadentro/episodes/62e6bf84460724001287705b

---

## 8. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo ver la home renderizada completa (hero, banners, menús, footer, posible campaña de Buen Fin), ni los perfiles de Instagram/TikTok/YouTube/Facebook, ni la Biblioteca de Anuncios de Meta.
- **Sin herramientas SEO de pago:** no hay datos de Search Console, Ahrefs, Semrush, SimilarWeb ni de ningún rank tracker. Las "posiciones" reportadas son el orden devuelto por `browser.search` en esta sesión, no posiciones medidas en Google/Bing.
- **Sin acceso a motores de respuesta de IA:** la sección GEO describe infraestructura de citabilidad observada, no presencia real en respuestas generativas.
- **Lectura parcial del sitio:** se leyeron home (parcial: sección de reseñas), sitemap, robots, agents, Revista y sitemap de páginas; no se abrieron fichas de producto, colecciones, landings, embajadoras, quiz, store locator ni las páginas de prensa.
- **Tres intentos de lectura fallaron por límite de tasa (429)** — `sitemap_collections_1.xml`, `sitemap_articles_1.xml` y `/blogs/ahal-1` — y no se reintentaron, conforme a la regla de no repetir llamadas bloqueadas.
- **Ventana temporal:** todo lo observado corresponde al 13 nov 2026, primer día del Buen Fin (13–17 nov); la home y las promociones cambian con la temporada.
