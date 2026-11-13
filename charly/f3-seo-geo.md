# F3 — SEO / GEO + presencia digital: Charly

- **Sitio:** https://www.charly.com/
- **Fecha de la investigación:** 13 nov 2026
- **Frente:** F3 (SEO/GEO + presencia digital), Fase 2, WO-E-LARPING
- **Método:** solo fuentes públicas — `browser.search` (varias consultas, ver §7) y `browser.open` para leer páginas públicas. Sin navegador en vivo, sin cuentas, sin herramientas de pago (Search Console, Ahrefs, Semrush, etc.).

## Convención de evidencia (se aplica en todo el informe)

- **OBSERVADO** — visto directamente en una URL pública en esta fecha; se cita la URL.
- **INFERIDO** — conclusión razonada a partir de evidencia observada; se indica la evidencia y la confianza (alta / media / baja).
- **HIPÓTESIS** — idea derivada de lo observado, marcada como tal; no es un hecho.
- **NO VERIFICADO** — no se pudo comprobar con las herramientas disponibles; no se afirma como hecho.

> No se inventa ninguna métrica de tráfico, posición exacta en Google, volumen de búsqueda ni gasto en anuncios. Cuando el dato no existe en las fuentes consultadas, se declara como no verificado.

---

## 1. Resumen ejecutivo

**OBSERVADO:** Charly es una marca mexicana grande y antigua (origen 1949/1950 como Campanita; giro a calzado deportivo en 1977; sede León, Guanajuato) que vende en https://www.charly.com/, una tienda **Magento** (su `robots.txt` lo declara: "#Magento theme robots.txt"), con catálogo de calzado, ropa y accesorios deportivos para hombre, mujer y niños, y una arquitectura de producto con URLs por número de artículo (`/{ITEM#}-{slug}`) y **JSON-LD de producto** (precio, disponibilidad y valoración) visible en los resultados del buscador. El 13 nov 2026, primer día del Buen Fin, la tienda muestra productos etiquetados "BUEN FIN" con descuentos fuertes (ej.: tachones Legendario 26 PFX de $1,699 a $679.60; playera León niño de $649 a $259.60).

**OBSERVADO:** A diferencia de F4T3, Charly tiene **autoridad externa real y densa**: es el patrocinador oficial que vistió a la delegación mexicana en París 2024 (convenio con el Comité Olímpico Mexicano que, según prensa de Guanajuato, se extiende a Los Ángeles 2028) y viste a la delegación juvenil en Dakar 2026 con la colección "Raíces del Futuro" (presentada 17 oct 2026); viste clubes de Liga MX (León, Santos, Atlante, Atlas en 2026); tiene página propia en Wikipedia; aparece en listados editoriales de "mejores marcas mexicanas de tenis/ropa deportiva" (Merca20, DondeIrDeCompras, blog de Martí); y tiene cobertura de prensa de negocio (Expansión, ago 2026), de producto (Distrito Magazine: colección PFX y Charly Recycle) y de estilo de vida (Radio Fórmula, con sus tenis en Walmart y Coppel). Vende también en Amazon México (tienda de marca CHARLY, un modelo con 4.1/5 en 29 reseñas) y sus productos se venden en Sears, Walmart, Coppel, Pakar y Martí.

**INFERIDO (confianza alta):** la estrategia digital de Charly es **autoridad + distribución omnicanal**, no SEO de contenido propio. La evidencia: la autoridad la construyen los patrocinios (fútbol, COM) y la prensa que los cubre, no un blog propio (no se encontró blog en charly.com); la venta se reparte entre tienda propia, 150+ tiendas físicas, ~3,500 puntos de venta y marketplaces/departamentales. El SEO técnico es el de un Magento clásico (sitemap declarado, robots permisivo con Googlebot, JSON-LD de producto), pero sin señales de infraestructura para agentes de IA.

**NO VERIFICADO:** posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda, citas en respuestas de ChatGPT / Google AI Overviews / Perplexity, número de seguidores en Instagram/TikTok, gasto publicitario, el contenido del sitemap (su lectura devolvió error 429 y no se reintentó) y la existencia o no de `/agents.md` (su lectura también devolvió 429; no se afirma que no exista).

---

## 2. SEO

### 2.1. Lo que devuelve el buscador para la marca

Consultas ejecutadas el 13 nov 2026 (ver §7 para la lista completa):

| Consulta | Resultado para Charly — OBSERVADO |
|---|---|
| `Charly calzado México charly.com marca deportiva` | La marca domina el top: Wikipedia (ficha "Charly (marca)"), Expansión (ago 2026), Merca20, podcasts de historia de la marca (GRITones, Los Aficionados), blog de Martí y Radio Fórmula. **La home `charly.com` no aparece entre los 10 primeros resultados devueltos** — los devuelven terceros —, pero todos los resultados son sobre la marca, sin homónimos que la desplacen. |
| `site:charly.com` | Devuelve **fichas de producto** (jerseys de Atlas, Atlante y León; tachones Hotcross 26, Legendario 26 PFX, Zinetik 26; tenis Luno Día de Muertos; playera Día de Muertos), con precio, disponibilidad y JSON-LD. Es decir, el buscador indexa el catálogo, no solo la home. |
| `Charly Comité Olímpico Mexicano París 2024 uniforme` | Cobertura densa y convergente: Chic Magazine, El Informador, Somos News, Infobae, Siminforma, Sports QRO, Periódico Correo. Todos identifican a Charly como patrocinador oficial y diseñador del vestuario. |
| `Charly tenis opiniones reseñas comprar México` | **No hay agregador de reseñas de la marca ni reseñas en su propia tienda** (las fichas muestran "(Sin reseñas)"). Lo que aparece: fichas de producto en Sears (4/5, 1 reseña), Amazon (4.1/5, 29 reseñas en un modelo), Walmart y Coppel (prensa de ofertas), Pakar y Stylo. La "opinión" sobre Charly vive en los retailers, no en charly.com. |
| `"mejores marcas mexicanas de tenis" Charly Pirma` | Charly **sí aparece** en los listados: Merca20 (jun 2026, artículo entero dedicado a Charly + Pirma + Concord), DondeIrDeCompras ("Las Mejores Marcas Mexicanas de Ropa Deportiva 2026", Charly en primer lugar) y blog de Martí (Charly y Pirma como las marcas mexicanas con disponibilidad vigente). Contraste directo con F4T3, que no aparecía en ningún listado. |
| `Charly Distrito Magazine marca mexicana` | Distrito Magazine cubre a Charly en al menos tres piezas: colección PFX (alto rendimiento), Charly Recycle (alianza con ONG, materiales hasta 80% reciclados, limpiezas de playas y cenotes) y "Raíces del Futuro" (Dakar 2026). |
| `Charly PFX performance tenis running tecnología` | Distrito Magazine (artículo de lanzamiento de PFX) y MNINoticias (prueba de producto) describen la línea con tecnologías y precios ($1,899–$1,999). |
| `Charly Buen Fin 2026 descuentos charly.com` | Charly figura como tienda participante del Buen Fin 2026 (Cazaofertas); Picodi lista "Hasta 50% de descuento" con vigencia hasta el 17/11/26; AM León (12 nov 2026) reporta hasta 50% en calzado Charly en Altacia. **No se encontró una landing propia de Buen Fin en charly.com** en los resultados. |
| `Charly Instagram @charlymx seguidores tenis` | Búsqueda ruidosa: devuelve homónimos (Charly Gynn, Charli D'Amelio, Charly el genial en TikTok) y no el perfil oficial. El handle oficial que sí consta en prensa es **@charlymxoficial** (Infobae, jul 2024) y **@CharlyFutbol** (citado por Club Santos, nov 2025). Seguidores: NO VERIFICADO. |
| `Charly Amazon México tienda oficial CHARLY` | Amazon muestra "Visita la tienda de CHARLY" en fichas de producto (ej. tenis 1086601001, 4.1/5, 29 reseñas, ASIN B0CGMN9KH8). **No se pudo verificar** la URL ni el catálogo completo de la tienda de marca en Amazon. |
| `"charly.com" agents.md OR "agents" tienda Charly` | **Cero resultados relevantes**: Wikipedia y homónimos (app argentina "Charly", Charlie Lounge). Ninguna evidencia de infraestructura para agentes. Ver §3. |

**Advertencia metodológica (importante):** estos son los resultados que devolvió la herramienta `browser.search` en esta sesión, no una medición controlada de posiciones en Google o Bing (sin ubicación, historial ni Search Console no se puede afirmar una posición #N). Lo que sí se puede afirmar es el patrón observado: **para consultas de marca, el buscador devuelve antes contenido de terceros (Wikipedia, Expansión, prensa olímpica) que la propia home; para consultas genéricas de categoría ("mejores marcas mexicanas de tenis"), Charly sí aparece en los listados editoriales**. Es el patrón inverso a F4T3: autoridad externa alta, home poco visible en el top 10 devuelto.

**INFERIDO (confianza media):** la home no aparece en el top 10 de las consultas de marca exacta probablemente porque la autoridad de dominio se reparte entre `charly.com` y `charly.com.mx` (Wikipedia cita `http://www.charly.com.mx` como sitio web) y porque los medios con más autoridad (Wikipedia, Expansión, Infobae) ocupan esos puestos. **NO VERIFICADO** si `charly.com.mx` redirige hoy a `charly.com` ni cuál es el dominio canónico.

**INFERIDO (confianza media):** el nombre "Charly" compite con homónimos (la app argentina de consultas a celebrities, la cantante Charly Gynn, Charli D'Amelio), pero a diferencia de F4T3/FATE, en las consultas de marca con contexto deportivo ("Charly calzado", "Charly tenis") los homónimos no desplazan a la marca: el buscador desambigua bien por el contexto deportivo.

### 2.2. Título y descripción observados en el sitio

**OBSERVADO** (lectura directa de https://www.charly.com/ el 13 nov 2026, rastreo de las 15:00 UTC):

- Título de la página: **"Charly | Calzado y Ropa Deportiva"** — con descriptor de categoría, a diferencia del "FATE™" a secas de F4T3. Es un título SEO correcto: marca + categoría.
- Contenido visible de la home: categorías HOMBRE, MUJER, FÚTBOL, KIDS y "Nuevo"; productos destacados (Chamarra Charly Winter $1,099; Playera Charly Día de Muertos $499); secciones "CALZADO FÚTBOL" (ej. Tenis Charly Cicero Sala 26, $999 → $799.20) y "TENIS DEPORTIVOS MUJER". La lectura de la home devolvió solo 32 líneas de texto (la herramienta no renderizó banners, menús ni footer completos), por lo que **no se pudo verificar** si la home exhibe un banner de Buen Fin ni su claim principal.

**INFERIDO (confianza media):** el título con categoría ("Calzado y Ropa Deportiva") es una buena práctica on-page que F4T3 no aplica, y es coherente con que el buscador devuelva fichas de producto de charly.com para consultas de producto. La home, sin embargo, parece una parrilla de producto sin narrativa de marca visible en el texto extraído — el posicionamiento de marca ("mexicana", "fútbol", "olímpica") no está en el título ni en el texto de la home leído.

**NO VERIFICADO:** la meta description exacta que Google muestra para la home (la herramienta de lectura no devolvió el `<head>` / metaetiquetas); el contenido completo de la home renderizada (banners, pop-ups, footer, enlaces a redes); ni si existe una landing de Buen Fin en el sitio.

### 2.3. Páginas indexadas: sitemap y robots

**OBSERVADO** — https://www.charly.com/robots.txt (leído 13 nov 2026, 19:20 UTC). Es un `robots.txt` de **Magento** ("#Magento theme robots.txt"):

- `User-agent: Googlebot` y `Googlebot-image`: `Disallow:` (vacío = todo permitido).
- `User-agent: *`: bloquea rutas de sistema y transaccionales: `/index.php/`, `/checkout/`, `/app/`, `/lib/`, `/*.php$`, `/pkginfo/`, `/report/`, `/var/`, `/catalog/`, `/customer/`, `/sendfriend/`, `/review/`, `/*SID=`.
- Declara un solo sitemap: `Sitemap: https://www.charly.com/media/sitemap/sitemap.xml`.

**OBSERVADO — dos bloqueos llamativos:** `/review/` está bloqueado para todos los crawlers (las páginas de reseñas no se indexan — coherente con que las fichas muestren "(Sin reseñas)" y con que la reputación viva en retailers) y `/catalog/` está bloqueado, lo que en Magento suele cubrir URLs de catálogo con parámetros. **INFERIDO (confianza baja-media):** el bloqueo de `/review/` es probablemente la configuración por defecto de Magento, no una decisión deliberada de ocultar reseñas; pero el efecto es el mismo: charly.com no acumula contenido de reseñas indexable.

**NO VERIFICADO — sitemap:** el intento de leer https://www.charly.com/media/sitemap/sitemap.xml devolvió **error 429 del servicio de lectura** y, conforme a la regla, **no se reintentó**. No se pudo comprobar cuántos productos, categorías o páginas contiene, ni sus fechas de última modificación. Se declara como no verificado, no como ausente.

**OBSERVADO — URLs de producto (vía resultados de búsqueda, 13 nov 2026):** dos patrones conviven:

- `/{ITEM#}-{slug}` — ej. `https://www.charly.com/5020488994-jersey-atlas-local-manga-larga-para-hombre-26-27` y `https://www.charly.com/1087560002-tachones-de-piel-charly-legendario-26-pfx-sport-futbol-soccer-color-negro-para-hombre`
- `/{slug}-{ITEM#}-mx` — ej. `https://www.charly.com/jersey-leon-mundial-de-clubes-edicion-especial-charly-para-hombre-5019963300-mx` y `https://www.charly.com/tenis-charly-electrico-tr-trail-color-negro-negro-para-hombre-1086958003-mx`

**INFERIDO (confianza media):** la convivencia de dos patrones de URL (con y sin sufijo `-mx`, con el ITEM# al inicio o al final) sugiere una migración o dos generaciones de URLs en el Magento; es un riesgo de duplicidad/canibalización menor, pero no se pudo verificar si hay redirecciones canónicas entre ambas formas.

**OBSERVADO — datos estructurados:** los resultados de búsqueda de fichas de charly.com muestran **JSON-LD `Product.offers`** (producto, precio en MXN, disponibilidad InStock). Es decir, las fichas llevan marcado estructurado de producto que el buscador lee. **NO VERIFICADO:** si existe JSON-LD de `Organization` (fundación, sede, fundadores) ni de `BreadcrumbList`, ni el estado de rich results.

**INFERIDO (confianza alta):** la higiene técnica SEO es la de un Magento estándar y cuidado (robots sin bloqueos accidentales de catálogo, sitemap declarado, JSON-LD de producto, título con categoría). El punto débil no es técnico: es la **falta de contenido editorial propio y de reseñas indexables** que den autoridad para consultas informativas.

**NO VERIFICADO:** número total de productos indexados, contenido y frescura del sitemap, canibalización entre las dos formas de URL, Core Web Vitals / velocidad, ni hreflang o versiones localizadas (no hay evidencia de versiones `en-us`/`es-us` como en F4T3).

### 2.4. Publicidad pagada observable

**OBSERVADO:**

- **Picodi** (agregador de cupones) lista para Charly "Hasta 50% de descuento con codigo promocional Charly", con expiración 18/11/26, y una entrada específica "Grandes descuentos del Buen Fin 2026 en Charly" con vigencia hasta el 17/11/26 — https://www.picodi.com/mx/charly. Es evidencia de que la marca (o afiliados) distribuye cupones en agregadores, un canal típico de captación por descuento.
- **Pakar.com** (retailer) vende tenis Charly con URL que trae parámetros UTM de Facebook: `?utm_content=Facebook_UA&utm_source=facebook` — https://pakar.com/products/cod-127392-e?utm_content=Facebook_UA&utm_source=facebook&variant=67998445830466. Es evidencia de que **al menos un retailer** anuncia Charly en Facebook Ads, no de que Charly lo haga directamente.
- **AM León** (12 nov 2026) reporta descuentos de hasta 50% en calzado Charly en el centro comercial Altacia durante el Buen Fin, con la gerente comercial citada diciendo "Son ofertas reales. Es cuando las personas aprovechan para comprar ropa deportiva, calzado y renovar su clóset" — https://www.am.com.mx/leon/2026/11/12/descuentos-de-hasta-70-y-mas-compradores-asi-se-prepara-leon-para-el-buen-fin-1865195.html.

**INFERIDO (confianza baja-media):** Charly participa en el Buen Fin 2026 con descuentos reales (las fichas de charly.com muestran etiquetas "BUEN FIN" y precios rebajados del 40–60% en los ejemplos observados) y con presencia en agregadores de cupones. **NO VERIFICADO** si Charly corre campañas propias en Meta Ads, Google Ads o TikTok Ads, ni su gasto: no se consultó la Biblioteca de Anuncios de Meta en esta sesión y ningún resultado de búsqueda devolvió un anuncio propio de la marca.

**HIPÓTESIS:** dado que la marca vende sobre todo por retail físico y departamentales, es probable que gran parte de su inversión publicitaria sea *trade marketing* y pauta de los retailers (Liverpool, Sears, Coppel, Walmart) más que pauta directa de charly.com. No hay evidencia que lo confirme o lo niegue en esta sesión.

---

## 3. GEO — presencia en respuestas de IA

### 3.1. Lo que se pudo comprobar

**NO VERIFICADO (limitación declarada):** en esta sesión no se pudo interrogar directamente a ChatGPT, Google AI Overviews, Perplexity, Copilot ni a ningún otro motor de respuestas de IA con preguntas como "¿qué marcas mexicanas de tenis recomiendas?" o "¿qué es Charly?". Por tanto **no se afirma que Charly aparezca o no aparezca en respuestas generativas**. Cualquier informe que afirme su presencia/ausencia en GEO sin haber hecho esas consultas estaría inventando.

Lo que sí se observó, y es relevante para GEO, es la **infraestructura de citabilidad** del sitio y de la marca:

**OBSERVADO:**

1. **Sin evidencia de `/agents.md` ni de infraestructura agentic.** La búsqueda `"charly.com" agents.md OR "agents" tienda Charly` devolvió cero resultados relevantes, y el intento de leer https://www.charly.com/agents.md directamente devolvió **error 429 del servicio de lectura** y no se reintentó. **NO VERIFICADO** si existe: no se afirma que no exista, solo que no hay evidencia pública de él. Su `robots.txt` tampoco enlaza `/agents.md`, `/.well-known/ucp` ni ningún endpoint MCP — a diferencia de F4T3, cuyo robots.txt los anuncia en las primeras líneas.
2. **`robots.txt` sin instrucciones para crawlers de IA.** No hay menciones de GPTBot, ClaudeBot, PerplexityBot ni CCBot; solo Googlebot y Googlebot-image con permiso total y el resto con bloqueos de sistema. **INFERIDO (confianza media):** Charly no ha hecho un trabajo deliberado de GEO/agentic; los crawlers de IA pueden leer el sitio por defecto (nada los bloquea explícitamente), pero no hay ninguna señal de que la marca los esté invitando o alimentando.
3. **Señales de entidad fuertes en terceros (lo que los motores de respuesta sí citan):**
   - **Wikipedia:** ficha "Charly (marca)" con infobox (Inter Tenis S.A. de C.V., fundación 1949, sede León, Guanajuato, productos, asociada Skechers, sitio web) y secciones de historia y tiendas (~168 tiendas, +3,500 puntos de venta) — https://es.wikipedia.org/wiki/Charly_(marca).
   - **Prensa de negocio:** Expansión (16 ago 2026) reconstruye la historia completa — Campanita → Charly (1977), licencia Skechers (2010), Charly Fútbol (2014), clubes vestidos, +150 tiendas y ~3,500 puntos de venta — https://expansion.mx/empresas/2026/08/16/empresa-familiar-charly-marca-viste-a-equipos-de-la-liga-mx.
   - **Prensa deportiva/olímpica:** 7 medios cubriendo el patrocinio del COM para París 2024 (ver §2.1), con datos factuales citables (diseño inspirado en México 68, jaguar, precios de la colección olímpica $899–$1,599, calzado $499–$1,999, según Chic Magazine).
   - **Listados de categoría:** Merca20 (25 jun 2026), DondeIrDeCompras (actualizado 31 ene 2026) y blog de Martí incluyen a Charly como marca mexicana de referencia — exactamente las fuentes que un motor de IA citaría para "mejores tenis mexicanos".
   - **Prensa de producto:** Distrito Magazine (PFX, Recycle, Dakar 2026), MNINoticias (prueba de PFX), Radio Fórmula (ofertas en Walmart/Coppel).
   - **Podcasts de historia de marca:** GRITones ep. 135 y Los Aficionados ("charly deportes: la campanita de una tienda deportiva", 8 ene 2026) narran la historia completa de la marca.
4. **Fichas de producto con texto descriptivo largo y con datos técnicos** (tecnologías DRY FACTOR, NANOGUARD, MICROVENT, UV BLOCK, Steamcell, ActiveFoam, plantillas Mullen-Skur/SCAPE, suelas Spine Outsole) — contenido factual que un motor de respuesta puede extraer para preguntas de producto, aunque sea copy comercial, no contenido experto independiente.
5. **Reseñas externas agregadas en retailers:** Amazon (4.1/5, 29 reseñas en un modelo), Sears (4/5, 1 reseña). Volumen bajo por modelo, pero existente fuera del dominio propio.

**INFERIDO (confianza media-alta):** Charly está **mejor preparada para ser citada en respuestas generativas que F4T3, por autoridad editorial y no por infraestructura**: tiene página de Wikipedia, cobertura convergente en prensa nacional, presencia en listados de categoría y patrocinios de alto perfil — las cuatro cosas que los motores de respuesta usan como fuentes. En cambio, **no tiene ninguna preparación deliberada para el comercio agentic** (sin `/agents.md` observable, sin UCP/MCP, sin sitemap agentic): si un agente de IA quisiera comprar en charly.com, no hay tubería para ello, solo el sitio web clásico.

**INFERIDO (confianza media):** si un usuario pregunta hoy a un motor de IA por "mejores marcas mexicanas de tenis", es **probable que Charly sí aparezca**, porque las fuentes que esos motores citan para esa pregunta (Merca20, DondeIrDeCompras, Martí, Wikipedia) la mencionan en primer lugar. Es una inferencia, no una observación: no se ejecutó la pregunta en ningún motor.

### 3.2. Qué le falta para ser citable (inferido, para la Fase 2)

- Una página "sobre la marca" en charly.com con datos estructurados de organización (fundación, sede, fundadores, nº de tiendas, patrocinios) — hoy la entidad vive en Wikipedia y Expansión, no en el propio dominio.
- Contenido que responda preguntas ("cómo elegir tenis para correr", "qué es PFX", "guía de tallas", "cómo cuidar tachones de piel") — hoy inexistente como contenido editorial propio (ver §5).
- Reseñas propias visibles e indexables — hoy las fichas muestran "(Sin reseñas)" y `/review/` está bloqueado en robots.txt; la reputación vive en Amazon/Sears.
- Cualquier infraestructura agentic (`/agents.md`, UCP/MCP) — hoy sin evidencia; si no existe, es una brecha frente a F4T3, que sí la tiene.
- Consolidar el dominio canónico (`charly.com` vs `charly.com.mx`, citado por Wikipedia) para no repartir autoridad entre dos dominios.

---

## 4. Presencia digital

### 4.1. Canales observados

| Canal | OBSERVADO | URL / evidencia |
|---|---|---|
| Tienda propia (Magento) | Activa, catálogo amplio, Buen Fin vigente el 13 nov 2026 (etiquetas "BUEN FIN" y descuentos 40–60% en fichas) | https://www.charly.com/ |
| Tiendas físicas propias | +150 tiendas (Expansión, ago 2026) / ~168 tiendas (Wikipedia); primera tienda en EE. UU. en Walnut Park, California (Radio Fórmula, 2022) | https://expansion.mx/empresas/2026/08/16/empresa-familiar-charly-marca-viste-a-equipos-de-la-liga-mx |
| Puntos de venta / retail | ~3,500 puntos de venta en México y EE. UU. (Expansión 2026; Wikipedia): departamentales, autoservicio, zapaterías y tiendas especializadas | Misma fuente |
| Amazon México | Tienda de marca CHARLY ("Visita la tienda de CHARLY"); modelo 1086601001 con 4.1/5 (29 reseñas), ASIN B0CGMN9KH8, nº 860 en Calzado de Tenis para Hombre | https://www.amazon.com.mx/dp/B0C4D2XVHS/ref=mp_s_a_1_19 |
| Sears, Walmart, Coppel, Pakar, Martí, Stylo | Venden Charly con fichas propias y reseñas (Sears 4/5, 1 reseña); Radio Fórmula cubre ofertas Charly en Walmart ($399.01) y Coppel ($892 vs $1,115) | https://www.sears.com.mx/producto/4140075/tenis-joven-deportivo-multicolor-charly-02304438; https://www.radioformula.com.mx/estilo-de-vida/walmart-casi-regala-estos-tenis-charly-son-modernos-comodos-y-cuestan-menos-de-400-pesitos-20251202-0071.html |
| Instagram | Handles observados en prensa: **@charlymxoficial** (Infobae, jul 2024) y **@CharlyFutbol** (Club Santos, nov 2025). Seguidores y frecuencia: NO VERIFICADO | https://www.infobae.com/mexico/2024/07/26/quien-es-el-dueno-de-la-marca-charly-patrocinador-de-los-uniformes-mexicanos-para-los-juegos-olimpicos-de-paris-2024/ |
| TikTok | Búsqueda ruidosa, sin perfil oficial identificado (homónimos: @charlyelgenial y otros) | NO VERIFICADO |
| YouTube | Sin evidencia encontrada en esta sesión | NO VERIFICADO |
| Podcast (terceros) | GRITones ep. 135 ("Charly: de vender zapatos para niños a vestir la Liga MX"); Los Aficionados / Podscan ("charly deportes: la campanita de una tienda deportiva", 8 ene 2026) | https://podcast.app/135-charly-de-vender-zapatos-para-ninos-a-vestir-la-liga-mx-e471974027; https://podscan.fm/podcasts/losaficionadosdeportes/episodes/charly-deportes-la-campanita-de-una-tienda-deportiva-1 |
| Prensa / negocio | Expansión (ago 2026, historia de la empresa familiar); LJA.mx (ago 2020, "Charly el nuevo imperio del fútbol en México", ~2,000 empleados, ~150 tiendas, exposición TV de ~25 millones de personas/semana) | https://www.lja.mx/2020/08/charly-el-nuevo-imperio-del-futbol-en-mexico-tik-tok-en-el-beisbol-mexicano/ |
| Prensa / producto | Distrito Magazine: PFX, Charly Recycle, "Raíces del Futuro" Dakar 2026; MNINoticias: prueba de PFX (feb 2026); blog Martí: guía de tenis Charly (ago 2023) | https://distritomagazine.com.mx/charly-se-posiciona-en-el-mercado-deportivo-de-alto-rendimiento-con-la-nueva-coleccion-pfx-para-un-performance-optimo/ |
| Patrocinios / fútbol | Liga MX 2026: León, Santos, Atlante, Atlas (Expansión); Santos Laguna jersey alterno Clausura 2026 "rumbo al Mundial" (nov 2025, @CharlyFutbol); Club de Cuervos (serie Netflix, Wikipedia) | https://www.enjuegodeportes.com/liga-mx/%f0%9f%9f%a2-santos-laguna-presenta-su-armadura-alterna-charly-un-homenaje-a-mexico-rumbo-al-2026/ |
| Patrocinios / olímpico | COM: París 2024 (uniformes de traslado/entrenamiento/competencia en 9 disciplinas) y Dakar 2026 juvenil ("Raíces del Futuro", 62 atletas, presentada 17 oct 2026); convenio citado hasta LA 2028 (Periódico Correo, jul 2024) | https://www.chicmagazine.com.mx/estilo-de-vida/moda/juegos-olimpicos-de-paris-2024-uniformes-de-mexico; https://lado.mx/noticia/22107322/ |
| Skechers | Distribuidora oficial de Skechers en México desde 2010 (Wikipedia, Expansión, Radio Fórmula) — negocio paralelo del grupo, no de la marca Charly | https://es.wikipedia.org/wiki/Charly_(marca) |
| Agregadores de cupones | Picodi: "Hasta 50%" y "Grandes descuentos del Buen Fin 2026 en Charly" (vigencia hasta 17/11/26) | https://www.picodi.com/mx/charly |
| Mercado Libre | **No se encontró** presencia en las búsquedas realizadas | NO VERIFICADO (ausencia en resultados ≠ inexistencia) |

### 4.2. Estructura de la estrategia digital (INFERIDO, confianza media)

A partir de lo observado, la estrategia se lee así:

1. **El retail físico es el centro; la tienda online es un canal más, no el centro.** 150+ tiendas propias y ~3,500 puntos de venta frente a una sola tienda online. La web vende, pero la marca se construye en estadios, televisión y tiendas.
2. **El motor de marca es el patrocinio, no el contenido ni los creadores.** La pieza más elaborada fuera de la tienda no es un programa de creadores ni un blog, sino vestir a la delegación olímpica mexicana y a clubes de Liga MX. Cada patrocinio genera una oleada de prensa (7 medios para París 2024; 3 medios para Dakar 2026) que es, en la práctica, su SEO: enlaces y menciones que una tienda DTC no puede comprar.
3. **La venta es omnicanal y con precio como palanca.** Charly está en su web, Amazon, Sears, Walmart, Coppel, Pakar, Martí y miles de zapaterías; los precios observados van de ~$259 (playera niño en Buen Fin) a ~$2,999 (jersey edición especial León Mundial de Clubes), con la línea PFX en $1,899–$1,999 como tope de gama. La prensa de ofertas (Radio Fórmula: tenis Charly a $399 en Walmart) refuerza el posicionamiento "bueno, bonito y barato" frente a Nike/Adidas.
4. **La marca se vende como "mexicana que compite con los grandes", no como estilo de vida.** El mensaje repetido en Expansión, Merca20, DondeIrDeCompras y los podcasts es el mismo: empresa familiar de León, 75+ años, que viste más equipos de Liga MX que Nike y Adidas en su mejor momento y que vistió a la delegación olímpica, a precios mucho menores porque fabrica localmente y no paga superestrellas. Es un relato de origen + precio + orgullo nacional, no de comunidad/estética.
5. **Consistencia de marca: alta en el relato, media en la ejecución digital.** El relato (Campanita → 1977 → fútbol 2014 → olímpicos 2024) es idéntico en Wikipedia, Expansión, Infobae, podcasts y Distrito Magazine. Pero conviven dos dominios citados (`charly.com` y `charly.com.mx`), dos patrones de URL de producto, y la home no muestra en su texto extraído el relato de marca. **NO VERIFICADO** si `charly.com.mx` redirige a `charly.com`.

### 4.3. Reputación / conversación social

**OBSERVADO (datos escasos, no una muestra):**

- Fichas de charly.com muestran **"(Sin reseñas)"** en los productos consultados (ej. Tenis Charly Electrico TR Running Trail, $1,299) — la tienda propia no acumula prueba social visible.
- Amazon: un modelo con **4.1/5 en 29 reseñas** (CHARLY 1086601001, simipiel blanco) y nº 860 en Calzado de Tenis para Hombre — https://www.amazon.com.mx/dp/B0C4D2XVHS/ref=mp_s_a_1_19.
- Sears: dos modelos con **4/5 en 1 reseña** cada uno.
- Merca20 (jun 2026): "Uno de los aspectos más valorados por los consumidores es la resistencia de sus materiales, especialmente para quienes practican deporte de manera frecuente en canchas de pasto o superficies de concreto" — valoración editorial, no reseñas de usuarios.
- Radio Fórmula (jul 2025): "Aunque Charly es una muy buena marca, apreciada por su calidad y bajos precios, hay otra marca mexicana que le hace competencia…" — Charly usada como referencia de calidad/precio contra la que se mide a la competencia.

**NO VERIFICADO:** valoración media global, volumen total de reseñas, quejas en Profeco/Trustpilot/Google, sentimiento en redes, o estado de ningún reclamo concreto. No se afirma que exista un problema de calidad o de servicio; solo que la prueba social observable es delgada y vive fuera del dominio propio.

---

## 5. Contenido: blog, guías y secciones

**OBSERVADO:**

- **No se encontró blog en charly.com** en ninguna de las búsquedas realizadas (las consultas `site:charly.com`, `"charly.com" blog` y las de PFX/Recycle/Dakar devuelven fichas de producto y prensa de terceros, nunca un `/blog` propio). **NO VERIFICADO** si existe un blog con otra ruta: ausencia en resultados ≠ inexistencia, pero no hay ninguna evidencia de él.
- **No hay guías, lookbooks editoriales ni contenido educativo observable** en el sitio: lo que el buscador devuelve de charly.com son fichas de producto con descripciones largas (tecnologías, materiales, inspiración cultural — ej. tachones Hotcross 26 con Quetzalcóatl; tenis Luno Día de Muertos con caja especial y llavero de colección) y la home como parrilla de producto.
- El contenido más cercano a editorial es **externo y ganado, no propio**: Distrito Magazine (PFX, Recycle, Dakar 2026), Lado.mx y Nación Deportes ("Raíces del Futuro"), MNINoticias (prueba de PFX), blog de Martí (guía de tenis Charly), Chic Magazine (uniformes olímpicos). Es decir, **terceros escriben el contenido que Charly no escribe**.
- **Colecciones con narrativa cultural:** Día de Muertos (Luno, playera), Quetzalcóatl (Hotcross 26), México 68 + jaguar (uniformes olímpicos París 2024), México–Senegal (Dakar 2026), 110 aniversario de Atlas y Atlante (jerseys 26-27). La narrativa cultural vive en el producto, no en artículos.
- **Charly Recycle:** línea de ropa, calzado y accesorios con materiales hasta 80% reciclados; la marca dona un porcentaje de sus ventas a una ONG y comunica limpiezas de playas y cenotes (Distrito Magazine) — es su único contenido con vocación de causa/sostenibilidad, y también vive en prensa de terceros, no en una sección propia observada.

**INFERIDO (confianza alta):** Charly no hace content marketing SEO propio. Todo su contenido indexable es transaccional (ficha de producto) y su autoridad informativa la generan terceros (prensa, listados, Wikipedia). Esto explica el patrón del §2: fichas de producto bien indexadas + presencia en listados de categoría, pero sin páginas que puedan rankear para consultas informativas ("cómo elegir tenis para correr", "qué tenis para fútbol rápido", "guía de tallas") ni atraer enlaces por contenido propio.

**HIPÓTESIS:** la marca no necesita un blog para rankear en categoría porque los patrocinios le regalan la autoridad que un blog le daría a una DTC: cada temporada de Liga MX y cada ciclo olímpico produce cobertura que cita a Charly por nombre. Para una marca nueva sin patrocinios, esa vía no es replicable; el aprendizaje transferible es el inverso: **si no tienes patrocinios, el contenido propio es tu sustituto de autoridad**.

**NO VERIFICADO:** si existe contenido editorial en Instagram/TikTok/YouTube con frecuencia regular (los perfiles no se pudieron verificar en esta sesión); si existe una sección de "nosotros"/historia en charly.com; el contenido de las páginas de políticas, envíos y devoluciones.

---

## 6. Lista final: observado / inferido / no verificado

### OBSERVADO (con fuente y fecha)

1. Tienda Magento en https://www.charly.com/, título de home "Charly | Calzado y Ropa Deportiva", activa el 13 nov 2026 con productos etiquetados "BUEN FIN" y descuentos (ej. Legendario 26 PFX $1,699 → $679.60; playera León niño $649 → $259.60). [Lectura directa de la home, rastreo 13 nov 2026 15:00 UTC; fichas vía `site:charly.com`, 13 nov 2026]
2. `robots.txt` de Magento: Googlebot y Googlebot-image con todo permitido; bloqueos de `/checkout/`, `/catalog/`, `/customer/`, `/review/`, `/app/`, `/lib/`, `/*.php$`, `/index.php/`, `/*SID=`; sitemap declarado en `https://www.charly.com/media/sitemap/sitemap.xml`. [https://www.charly.com/robots.txt, 13 nov 2026 19:20 UTC]
3. Fichas de producto con JSON-LD `Product.offers` (precio MXN, disponibilidad InStock) y dos patrones de URL conviviendo (`/{ITEM#}-{slug}` y `/{slug}-{ITEM#}-mx`). [Resultados `site:charly.com`, 13 nov 2026]
4. `site:charly.com` devuelve fichas de producto (jerseys Atlas/Atlante/León 26-27, tachones Hotcross 26, Legendario 26 PFX, Zinetik 26, tenis Luno Día de Muertos) — el catálogo está indexado. [Búsqueda `site:charly.com`, 13 nov 2026]
5. Charly vistió a la delegación mexicana en París 2024 como patrocinador oficial del COM (uniformes de traslado, entrenamiento y competencia en 9 disciplinas; diseño México 68 + jaguar + bandera; colección a la venta $899–$1,599, calzado $499–$1,999). [Chic Magazine, El Informador, Infobae, Somos News, Periódico Correo, jul 2024]
6. Charly viste a la delegación juvenil en Dakar 2026 con "Raíces del Futuro" (62 atletas; presentada 17 oct 2026; a la venta en tiendas desde 19 oct y en charly.com desde 21 oct). [Lado.mx, 20 oct 2026; Nación Deportes; Distrito Magazine]
7. Convenio con el COM citado hasta Los Ángeles 2028. [Periódico Correo, 26 jul 2024]
8. Liga MX 2026: León, Santos, Atlante y Atlas vestidos por Charly (Expansión, ago 2026); Santos Laguna jersey alterno Clausura 2026 presentado nov 2025, disponible en @CharlyFutbol. [Expansión; EnJuegoDeportes]
9. Wikipedia: ficha "Charly (marca)" — Inter Tenis S.A. de C.V., fundación 1949, sede León, Guanajuato, ~168 tiendas, +3,500 puntos de venta, distribuidora oficial de Skechers, sitio citado `http://www.charly.com.mx`. [https://es.wikipedia.org/wiki/Charly_(marca)]
10. Expansión (16 ago 2026): historia de la empresa familiar — Campanita, giro 1977, Skechers 2010, Charly Fútbol 2014, +150 tiendas y ~3,500 puntos de venta. [https://expansion.mx/empresas/2026/08/16/empresa-familiar-charly-marca-viste-a-equipos-de-la-liga-mx]
11. Charly **sí aparece** en listados de categoría: Merca20 (25 jun 2026, artículo Charly + Pirma + Concord), DondeIrDeCompras ("Las Mejores Marcas Mexicanas de Ropa Deportiva 2026", Charly primera), blog de Martí (Charly y Pirma con disponibilidad vigente). [Búsquedas, 13 nov 2026]
12. Distrito Magazine: colección PFX (modelos Akoyo, Turso, Akoyo Trail; tecnologías ActiveFoam 2.0, Contour Fit, Hi-Trac Rubber 2.0, MotionKnit, Dual Geometry System; $1,899–$1,999), Charly Recycle (materiales hasta 80% reciclados, donación a ONG, limpiezas de playas y cenotes) y "Raíces del Futuro". [https://distritomagazine.com.mx/charly-se-posiciona-en-el-mercado-deportivo-de-alto-rendimiento-con-la-nueva-coleccion-pfx-para-un-performance-optimo/]
13. Amazon México: tienda de marca CHARLY ("Visita la tienda de CHARLY"); modelo 1086601001 con 4.1/5 (29 reseñas), ASIN B0CGMN9KH8, nº 860 en Calzado de Tenis para Hombre. [https://www.amazon.com.mx/dp/B0C4D2XVHS/ref=mp_s_a_1_19]
14. Retailers venden Charly: Sears (4/5, 1 reseña por modelo), Walmart (tenis a $399.01, Radio Fórmula dic 2025), Coppel ($892 vs $1,115, Radio Fórmula jul 2025), Pakar (UTM de Facebook en su URL), Martí (Charly Neovolution 2.0 TF, $520). [Búsquedas, 13 nov 2026]
15. Fichas de charly.com muestran "(Sin reseñas)" (ej. Tenis Charly Electrico TR Running Trail, $1,299). [Búsqueda `Charly tenis opiniones reseñas comprar México`, 13 nov 2026]
16. Buen Fin 2026: Charly listada como tienda participante (Cazaofertas); Picodi: "Hasta 50%" con vigencia hasta 17/11/26; AM León (12 nov 2026): hasta 50% en calzado Charly en Altacia. [Búsquedas, 13 nov 2026]
17. Handles en prensa: @charlymxoficial (Infobae, jul 2024) y @CharlyFutbol (Club Santos, nov 2025). [Búsquedas, 13 nov 2026]
18. Podcasts de historia de marca: GRITones ep. 135 y Los Aficionados (8 ene 2026) narran Campanita → Charly → Liga MX. [Podcast.app; Podscan.fm]
19. La búsqueda `"charly.com" agents.md OR "agents" tienda Charly` devolvió cero resultados relevantes; el `robots.txt` no enlaza `/agents.md`, UCP ni MCP. [Búsqueda, 13 nov 2026; robots.txt]

### INFERIDO (con evidencia y confianza)

1. **Estrategia = patrocinios + distribución omnicanal + precio; SEO de contenido propio ausente.** Evidencia: COM + Liga MX + prensa convergente, 150+ tiendas y ~3,500 puntos de venta, Amazon + departamentales, blog no encontrado, fichas "(Sin reseñas)". Confianza: **alta**.
2. **SEO técnico estándar de Magento y cuidado; SEO de autoridad alto por terceros, no por contenido propio.** Evidencia: robots correcto, sitemap declarado, JSON-LD de producto, título con categoría vs. blog ausente y reseñas bloqueadas/no existentes. Confianza: **alta**.
3. **La home pierde visibilidad en el top 10 de marca exacta frente a terceros con más autoridad** (Wikipedia, Expansión, Infobae) y posiblemente por repartir autoridad entre `charly.com` y `charly.com.mx`. Evidencia: home ausente del top 10 devuelto en consultas de marca; Wikipedia cita `charly.com.mx`. Confianza: **media**.
4. **Charly está mejor preparada para ser citada en respuestas de IA que F4T3, por autoridad editorial, no por infraestructura.** Evidencia: Wikipedia + prensa nacional convergente + listados de categoría vs. sin `/agents.md` observable ni UCP/MCP. Confianza: **media-alta**.
5. **Probable aparición en respuestas de IA a "mejores marcas mexicanas de tenis"**, porque las fuentes que esos motores citarían la mencionan en primer lugar. Confianza: **media** (inferencia sin haber interrogado a ningún motor).
6. **Los dos patrones de URL de producto sugieren migración o dos generaciones de URLs** en el Magento; riesgo menor de duplicidad si no hay canónicas/redirecciones. Confianza: **media**.
7. **La reputación vive en los retailers, no en la tienda propia.** Evidencia: "(Sin reseñas)" en charly.com, `/review/` bloqueado en robots, reseñas solo en Amazon/Sears. Confianza: **alta**.
8. **Consistencia de relato alta** (Campanita → 1977 → fútbol 2014 → olímpicos 2024) en todos los terceros, con descuidos de ejecución digital (dos dominios citados, dos patrones de URL). Confianza: **media**.

### HIPÓTESIS (derivadas, marcadas)

1. Gran parte de la inversión publicitaria de Charly es probablemente *trade marketing* y pauta de retailers (Liverpool, Sears, Coppel, Walmart) más que pauta directa de charly.com — la única UTM de Facebook observada es de Pakar, no de Charly.
2. La marca no necesita un blog para rankear en categoría porque los patrocinios le regalan la autoridad que un blog le daría a una DTC; para una marca nueva sin patrocinios, el contenido propio es el sustituto de esa autoridad.
3. El bloqueo de `/review/` en robots.txt es probablemente la configuración por defecto de Magento, no una decisión deliberada de ocultar reseñas.

### NO VERIFICADO

1. Posiciones exactas en Google/Bing para ninguna consulta; tráfico orgánico y pagado; volúmenes de búsqueda de "Charly tenis", "Charly PFX" o "tenis mexicanos".
2. Contenido y frescura del sitemap (`https://www.charly.com/media/sitemap/sitemap.xml` — lectura devolvió error 429, no se reintentó); número total de productos indexados; canibalización entre los dos patrones de URL; redirecciones canónicas.
3. Existencia o no de `/agents.md`, `/.well-known/ucp` o endpoints MCP en charly.com (la lectura directa devolvió error 429, no se reintentó; la búsqueda no devolvió evidencia). No se afirma que no existan.
4. Meta description de la home, JSON-LD de `Organization`, datos estructurados de `BreadcrumbList` y Core Web Vitals.
5. Presencia o ausencia real en respuestas de ChatGPT, Google AI Overviews, Perplexity, Copilot o Meta AI.
6. Seguidores, frecuencia de publicación y alcance en Instagram (@charlymxoficial, @CharlyFutbol), TikTok, YouTube y Facebook; gasto y campañas activas en Meta/Google/TikTok Ads (incluida la Biblioteca de Anuncios de Meta).
7. Dominio canónico: si `charly.com.mx` redirige a `charly.com` o son dos sitios.
8. Existencia de un blog propio en charly.com con otra ruta; contenido de las páginas de políticas, envíos, devoluciones y "nosotros".
9. Catálogo completo de la tienda de marca CHARLY en Amazon; presencia en Mercado Libre.
10. Volumen y valoración global de reseñas; quejas en Profeco/Trustpilot/Google; sentimiento general en redes.
11. Contenido completo de la home renderizada (banners, pop-ups, footer, enlaces a redes) y existencia de una landing propia de Buen Fin en charly.com.

---

## 7. Fuentes consultadas y consultas de búsqueda

### Páginas leídas directamente (browser.open, 13 nov 2026)

- https://www.charly.com/ (home; rastreo de las 15:00 UTC)
- https://www.charly.com/robots.txt (19:20 UTC)

### Lecturas que fallaron por límite de tasa (429, no reintentadas)

- https://www.charly.com/media/sitemap/sitemap.xml
- https://www.charly.com/agents.md

### Consultas de búsqueda ejecutadas (browser.search, 13 nov 2026)

1. `Charly calzado México charly.com marca deportiva`
2. `site:charly.com`
3. `Charly Comité Olímpico Mexicano París 2024 uniforme`
4. `Charly tenis opiniones reseñas comprar México`
5. `Charly Distrito Magazine marca mexicana`
6. `Charly PFX performance tenis running tecnología`
7. `Charly Buen Fin 2026 descuentos charly.com`
8. `"mejores marcas mexicanas de tenis" Charly Pirma`
9. `charly.com blog Charly Recycle Dakar 2026 "Raíces del Futuro"`
10. `"charly.com" agents.md OR "agents" tienda Charly`
11. `Charly Instagram @charlymx seguidores tenis`
12. `Charly Amazon México tienda oficial CHARLY`

### Fuentes de terceros citadas

- Wikipedia — "Charly (marca)": https://es.wikipedia.org/wiki/Charly_(marca)
- Expansión — "La empresa familiar que convirtió a Charly en una marca que viste a equipos de la Liga MX" (16 ago 2026): https://expansion.mx/empresas/2026/08/16/empresa-familiar-charly-marca-viste-a-equipos-de-la-liga-mx
- Merca20 — "Las marcas de tenis que son mexicanas, originarias de Guanajuato…" (25 jun 2026): https://www.merca20.com/las-marcas-de-tenis-que-son-mexicanas-originarias-de-guanajuato-son-mas-baratas-y-no-le-piden-nada-a-nike-adidas-y-reebok/
- DondeIrDeCompras — "Las Mejores Marcas Mexicanas de Ropa Deportiva 2026": https://www.dondeirdecompras.com/marcas-mexicanas-ropa-deportiva/
- Blog Martí — "Marcas mexicanas de tenis deportivos": https://blog.marti.mx/apoya-a-marcas-mexicanas-10-marcas-de-tenis-deportivos/
- Chic Magazine — "Juegos Olímpicos de París 2024: Uniformes de México": https://www.chicmagazine.com.mx/estilo-de-vida/moda/juegos-olimpicos-de-paris-2024-uniformes-de-mexico
- El Informador — "Quién es el dueño de la marca que viste a los mexicanos en los Juegos Olímpicos 2024": https://www.informador.mx/deportes/Quien-es-el-dueno-de-la-marca-que-viste-a-los-mexicanos-en-los-Juegos-Olimpicos-2024-20240726-0081.html
- Infobae — "Quién es el dueño de la marca Charly, patrocinador de los uniformes mexicanos para los Juegos Olímpicos de París 2024": https://www.infobae.com/mexico/2024/07/26/quien-es-el-dueno-de-la-marca-charly-patrocinador-de-los-uniformes-mexicanos-para-los-juegos-olimpicos-de-paris-2024/
- Periódico Correo — "Guanajuato está en todos lados: Deportistas mexicanos le llevan en la piel durante estos Olímpicos de París 2024": https://periodicocorreo.com.mx/marcador/2024/jul/26/guanajuato-esta-en-todos-lados-deportistas-mexicanos-le-llevan-en-la-piel-durante-estos-olimpicos-de-paris-2024-105505.html
- Lado.mx — "CHARLY PRESENTA 'RAÍCES DEL FUTURO'…" (20 oct 2026): https://lado.mx/noticia/22107322/
- Nación Deportes — "CHARLY PRESENTA 'RAÍCES DEL FUTURO'…": https://naciondeportes.com/charly-presenta-raices-del-futuro-una-coleccion-que-conecta-a-mexico-y-senegal-a-traves-de-la-naturaleza-y-el-diseno/
- Distrito Magazine — PFX: https://distritomagazine.com.mx/charly-se-posiciona-en-el-mercado-deportivo-de-alto-rendimiento-con-la-nueva-coleccion-pfx-para-un-performance-optimo/
- MNINoticias — "Tenis PFX de Charly: Comodidad, rendimiento y estilo" (24 feb 2026): https://mninoticias.com/tenis-pfx-de-charly-comodidad-rendimiento-y-estilo/?amp=1
- EnJuegoDeportes — "Santos Laguna presenta su armadura alterna Charly" (nov 2025): https://www.enjuegodeportes.com/liga-mx/%f0%9f%9f%a2-santos-laguna-presenta-su-armadura-alterna-charly-un-homenaje-a-mexico-rumbo-al-2026/
- GRITones ep. 135: https://podcast.app/135-charly-de-vender-zapatos-para-ninos-a-vestir-la-liga-mx-e471974027
- Los Aficionados / Podscan: https://podscan.fm/podcasts/losaficionadosdeportes/episodes/charly-deportes-la-campanita-de-una-tienda-deportiva-1
- Amazon México — CHARLY 1086601001: https://www.amazon.com.mx/dp/B0C4D2XVHS/ref=mp_s_a_1_19
- Sears — Tenis Charly 02304438: https://www.sears.com.mx/producto/4140075/tenis-joven-deportivo-multicolor-charly-02304438
- Radio Fórmula — Walmart: https://www.radioformula.com.mx/estilo-de-vida/walmart-casi-regala-estos-tenis-charly-son-modernos-comodos-y-cuestan-menos-de-400-pesitos-20251202-0071.html
- Picodi — Charly: https://www.picodi.com/mx/charly
- Cazaofertas — Tiendas participantes El Buen Fin 2026: https://cazaofertas.com.mx/el-buen-fin/tiendas-participantes-el-buen-fin-2026/
- AM León — Buen Fin en León (12 nov 2026): https://www.am.com.mx/leon/2026/11/12/descuentos-de-hasta-70-y-mas-compradores-asi-se-prepara-leon-para-el-buen-fin-1865195.html
- LJA.mx — "Charly el nuevo imperio del fútbol en México" (27 ago 2020): https://www.lja.mx/2020/08/charly-el-nuevo-imperio-del-futbol-en-mexico-tik-tok-en-el-beisbol-mexicano/

---

## 8. Límites de lo verificado

- **Sin navegador en vivo:** no se pudo ver la home renderizada (pop-ups, menús, footer completo, banners de Buen Fin), ni los perfiles de Instagram/TikTok/YouTube/Facebook, ni la Biblioteca de Anuncios de Meta.
- **Sin herramientas SEO de pago:** no hay datos de Search Console, Ahrefs, Semrush, SimilarWeb ni de ningún rank tracker. Las "posiciones" reportadas son el orden devuelto por `browser.search` en esta sesión, no posiciones medidas en Google/Bing.
- **Sin acceso a motores de respuesta de IA:** la sección GEO describe infraestructura de citabilidad observada, no presencia real en respuestas generativas.
- **Lectura parcial del sitio:** se leyeron home y robots.txt; no se abrieron fichas de producto, categorías, ni páginas de políticas, envíos, devoluciones o "nosotros".
- **Dos intentos de lectura fallaron por límite de tasa (429)** — el sitemap (`/media/sitemap/sitemap.xml`) y `/agents.md` — y no se reintentaron, conforme a la regla de no repetir llamadas bloqueadas. Ambos se declaran NO VERIFICADOS, no ausentes.
- **Ventana temporal:** todo lo observado corresponde al 13 nov 2026, en plena campaña de Buen Fin (13–17 nov) y durante los Juegos Olímpicos de la Juventud Dakar 2026 (31 oct–13 nov); la home, las promociones y la cobertura de prensa cambian con la temporada.
