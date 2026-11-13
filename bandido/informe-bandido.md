# Informe consolidado — Bandido Studio · Fase 2, WO-E-LARPING

- **Sitio:** https://bandidostudio.com/ (marca visible: Bandido Studio — "Luminarias en México - Lámparas Mexicanas de Autor - Bandido Studio"; diseño / objetos / iluminación, México)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 3: El Sótano / Gandhi / Bandido)
- **Método:** 7 frentes en paralelo, archivos exclusivos por frente, solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con la empresa ni con clientes.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada como tal) / **NO VERIFICADO**.
- **Salvedad del sitio:** Bandido Studio se mantiene con salvedad en la fase: activo (colección Aruna 2026, Design House 2026), pero **SIN checkout observable** — la venta es por asesor/cotización, con catálogo en PDF. La ausencia de checkout se documenta como hallazgo, no como fracaso.

## Frentes y archivos fuente

| Frente | Dimensión | Archivo |
|---|---|---|
| F2.1 | Front end | `f1-frontend.md` |
| F2.2 | Back end + stack | `f2-backend-stack.md` |
| F2.3 | SEO/GEO + presencia digital | `f3-seo-geo.md` |
| F2.4 | Redes sociales + embudo | `f4-redes-embudo.md` |
| F2.5 | Precios | `f5-precios.md` |
| F2.6 | Logística como hipótesis | `f6-logistica-hipotesis.md` |
| F2.7 | Pain points | `f7-pain-points.md` |

---

## 0. Resumen ejecutivo

**OBSERVADO.** Bandido Studio es un estudio mexicano de diseño e iluminación (10º aniversario en 2026; colección Aruna 2026; Design House 2024–2026; Zona MACO 2024–2025) que tiene sitio en https://bandidostudio.com/ sobre **WordPress + WooCommerce, confirmado con marcadores duros** — imágenes en `/wp-content/uploads/`, `robots.txt` con reglas `wc-logs`/`woocommerce_uploads`/`add-to-cart`/`wp-admin`, e índice `wp-json/` con namespaces `wc/v3`, `wc/store/v1`, `wc-admin` — con Elementor + Elementor Pro (con Elementor AI), Slider Revolution, Essential Blocks, WPML bilingüe (en/es) y Yoast SEO. **Pero WooCommerce opera sin tienda: `/checkout/` da 404, la home no muestra precios ni carrito, y la venta es por asesor/cotización** (formulario "Registra tus datos y un asesor se comunicará contigo", teléfono, showroom Polanco) con catálogo en PDF (Datasheet 2027 y Lookbook ES 2026, sin precios).

**El negocio en una frase:** un estudio de autor que vende por cotización, no por carrito — **no publica ningún precio** (el único precio en toda la web indexada es una lámpara de mesa a $172 USD de septiembre de 2019, observado-estancado, NO vigente; ninguna colección 2026 tiene precio), **no tiene promo de Buen Fin** (ninguna encontrada en home, web ni prensa reciente), **no tiene política de devoluciones publicada** (solo "Contactar directamente a Bandido para solicitar garantía", sin plazo ni cobertura) y **no tiene ninguna queja pública** en 15 búsquedas dirigidas — y aun así es citable como autoridad en diseño/iluminación mexicana (prensa convergente y reciente, jurado del Premio de Diseño Promesas México, glosario y fichas técnicas con datos duros).

**Tres rasgos que la distinguen:**
1. **WooCommerce sin checkout: la tienda que no vende en línea.** Los restos de WooCommerce (checkout/shop, última modificación 2023) no prueban tienda activa. El embudo real es: descubrimiento (prensa/ferias/IG) → sitio con colecciones y fichas técnicas → catálogo en PDF → formulario → showroom → cotización, con canal B2B explícito de convenios para arquitectos e interioristas.
2. **Autoridad sin precio.** CoolhunterMX (3 oct 2025, 10 años), Emprendedor.com (28 oct 2026) y Ámbito (30 oct 2026); Design House 2024–2026, Zona MACO 2024–2025, ICFF, Casa Hotbook, Cosentino, Bulbo, Alto Design (Costa Rica); glosario de iluminación, FAQ, materiales y mantenimiento, fichas técnicas con W, lm, 2700 K y voltaje. Citable como autoridad; casi incitable como opción de compra (sin precios ni checkout).
3. **Agentic cero.** `/agents.md` y `/.well-known/ucp` dan 404, sin MCP ni endpoint agentic, y `robots.txt` no tiene reglas para crawlers de IA (ni los bloquea ni los autoriza expresamente). Es el único sitio de la fase con agentic en cero confirmado por lectura directa de los dos endpoints.

**Pista previa corregida:** «diseño/objetos, sin checkout observable; venta por asesor/cotización, catálogo en PDF». Verificado: **sin checkout confirmado** — `/checkout/` 404, sin precios, sin carrito; WooCommerce confirmado como plataforma (no desarrollo propio ni Webflow). Corrección de dominio: `bandidostudio.com` es el sitio; `bandidostudio.com.mx` (citado por Designaholic) no se verificó como de la misma empresa.

---

## 1. Qué es Bandido Studio

**OBSERVADO.** Estudio mexicano de diseño e iluminación; 10º aniversario en 2026 (cena 24 sep 2026; prensa CoolhunterMX 3 oct 2025, Emprendedor 28 oct 2026, Ámbito 30 oct 2026). Colección nueva ARUNA 2026 ("la materia transformada en presencia etérea", vidrio termoformado color alba + acero cepillado); nuevos acabados de FLUX/CORE/FASE; índice del lookbook con 13 colecciones (CORE, AURA, DBH 02, TEMPLO, AXIS, NAGA, FASE, DUO, HUMO, CANOPES, BO, BUNA, Soporte L).

**OBSERVADO.** Producción en baja escala, personalizada, con talleres distribuidos (vidrio Guadalajara, talavera Puebla, barro Oaxaca, ónix Tecalitlán) y equipo de 25 personas (prensa). Oficios mexicanos: ónix, vidrio, talavera, barro de Oaxaca. Luz como material; colecciones-narrativa (Aruna y Nova en 2026).

**OBSERVADO.** Showrooms: Aristóteles 127, Polanco, CDMX (+52 555 0872 443, lun–vie 10:00–17:00) y Del Cristo 2, Puebla (+52 222 688 8442). Correo público joel@bandidostudio.com. Proyectos: Design House 2024–2026, Zona MACO 2024–2025, ICFF, Casa Hotbook, Museo Amparo "Hecho Forma" dic 2025–mar 2026, Casa Rosa Polanco, proyecto del aeropuerto de Guadalajara (2021), Materia en Tránsito (3er espacio CDMX, cimática).

---

## 2. Front end (F2.1)

**OBSERVADO.** Home: orden observado — nueva colección ARUNA 2026 ("la materia transformada en presencia etérea", vidrio termoformado color alba + acero cepillado), nuevos acabados de FLUX/CORE/FASE, encabezado de colecciones, Proyectos, Atención personalizada, 11 entradas de Eventos, Descargables/Catálogo, Instagram, Prensa y pie con showroom CDMX (Aristóteles 127, Polanco; +52 555 0872 443; lun–vie 10:00–17:00). Sin "Buen Fin", sin precios, sin carrito ni botón de compra en toda la home.

**OBSERVADO.** Colecciones/productos: ARUNA Colgante 90 (SKU LC50) y Arbotante 60 (LS36) con fichas completas; FLUX Arbotante/Colgante 70 y Colgante (SKUs LS28/LS32, LC42/LC47, LC40/LC46); índice del lookbook con 13 colecciones (CORE, AURA, DBH 02, TEMPLO, AXIS, NAGA, FASE, DUO, HUMO, CANOPES, BO, BUNA, Soporte L). Ningún precio ni indicador de stock en ninguna fuente leída.

**OBSERVADO — Compra (hallazgo central).** No hay checkout observable. En su lugar: formulario "Registra tus datos y un asesor se comunicará contigo", asesoría y convenios para arquitectos/interioristas, contacto telefónico/showroom y catálogo PDF. Embudo B2B por cotización, no tienda transaccional.

**OBSERVADO.** Catálogo PDF: Datasheet 2027 (fichas técnicas bilingües por SKU: dimensiones, peso, LED, materiales, manufactura México; sin precios) y Lookbook ES 2026 (índice + textos de concepto + foto de proyectos). El enlace de la home resolvió al Datasheet 2027.

**OBSERVADO.** Promociones: ninguna visible el 13 nov 2026, primer día del Buen Fin; la búsqueda `"Bandido Studio" "Buen Fin"` no devolvió ninguna promo de la marca.

**OBSERVADO.** Editorial: Design House 2026, Materia en Tránsito (3er espacio CDMX, cimática), cena 10º aniversario 24 sep 2026, Zona MACO 2024–2025, colaboraciones Cosentino, Bulbo, Alto Design (Costa Rica), BUNA x Andrés Gutiérrez; prensa reciente en Emprendedor (28 oct 2026) y Ámbito (30 oct 2026).

**NO VERIFICADO.** Menú de navegación (no vino en la extracción de texto); páginas individuales de colección/producto (sin URLs verbatim para abrirlas; `site:` sin resultados); Lookbook ES completo — lectura directa devolvió **429** y por regla del proyecto no se reintentó; Datasheet 2027 líneas 532–3,812 — la paginación también devolvió **429**, sin reintento; campos del formulario de asesoría; existencia de WhatsApp/correo/handle de Instagram en el propio sitio; precios, stock, envíos y garantías en páginas no leídas; promociones fuera del sitio (Instagram/correo).

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **Plataforma: WordPress + WooCommerce, confirmado con marcadores duros:** imágenes en `/wp-content/uploads/`, `robots.txt` con reglas `wc-logs`/`woocommerce_uploads`/`add-to-cart`/`wp-admin`, e índice `wp-json/` con namespaces `wc/v3`, `wc/store/v1`, `wc-admin`. No es Shopify, Webflow ni desarrollo propio.

**OBSERVADO.** Front-end: Elementor + Elementor Pro (con Elementor AI), Slider Revolution, Essential Blocks, WPML bilingüe (en/es) y Yoast SEO. Tema exacto no verificable sin acceso a la fuente HTML.

**OBSERVADO.** Catálogo: sitemap de productos actualizado el mismo 13 nov 2026 (19:46 UTC) — catálogo vivo — con atributo de tiempo de entrega bilingüe (`pa_delivery-time` / `pa_tiempo-de-entrega`); el catálogo PDF se distribuye vía Download Manager Pro.

**OBSERVADO — Checkout y pagos (hallazgo central).** Sin checkout observable — `/checkout/` da 404, la home no muestra precios ni carrito, y la venta es por asesor/cotización (formulario, teléfono, showroom Polanco). PayPal aparece instalado (namespaces `paypal/v1`, `wc/v3/wc_paypal`) pero sin confirmar activo; ninguna otra pasarela verificada.

**OBSERVADO.** Hosting/CDN: no verificado — la lectura de texto no expone cabeceras y la búsqueda web solo devolvió resultados genéricos, sin datos del dominio.

**OBSERVADO.** Terceros: instalados Google Site Kit, Meta for WooCommerce, Pinterest, Google Listings & Ads, WPForms, Wordfence, Jetpack y WP Mail SMTP (instalación observada vía namespaces `wp-json/`; disparo real de píxeles no verificado). Sin chat visible en la home.

**OBSERVADO — Comercio agentic: cero.** `/agents.md` y `/.well-known/ucp` dan 404, sin MCP ni endpoint agentic, y `robots.txt` no tiene reglas para crawlers de IA (ni los bloquea ni los autoriza expresamente).

**NO VERIFICADO.** Precios, número de productos y URLs individuales — `product-sitemap.xml` y `page-sitemap.xml` devolvieron **429 tras 3 intentos y no se reintentaron**, por regla de la WO; si existe checkout con otro slug o modo catálogo explícito; pasarelas activas; hosting/CDN; tema y versiones; ejecución real de píxeles; y rutas agentic no estándar (`agent.json`, `llms.txt`).

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Visibilidad: marca fuerte — la home es el primer resultado para «Bandido Studio» y su título está optimizado («Luminarias en México - Lámparas Mexicanas de Autor - Bandido Studio»). En cambio, no aparece en la muestra genérica de «lámparas de autor México comprar» (dominan guías y competidores con precio). El `site:` devolvió cero resultados, pero es no concluyente: home y PDFs sí están indexados. Sin posiciones, tráfico ni volúmenes medidos (no se inventaron).

**OBSERVADO.** Robots/sitemap: `robots.txt` abierto por defecto, sin reglas para crawlers de IA (ni bloqueo ni invitación explícita). Sitemap Yoast con 10 sub-sitemaps; productos y categorías actualizados el mismo 13 nov 2026 a las 19:46 UTC. 24 URLs de página observadas (bilingüe ES/EN casi simétrico); al menos 17 URLs de producto antes del corte (ARUNA, NOVA/AXIS-FLUX-CORE, DUO, BUNA, HUMO, FASE, TEMPLO, AURA, NAGA).

**OBSERVADO.** Datos estructurados / técnico: JSON-LD, meta description, OG, hreflang y canonical **no verificables** con lectura de texto (no expone el HTML fuente) — quedó documentado como limitación del método, no como ausencia. Activos citables propios: glosario de iluminación, FAQ, materiales y mantenimiento, y fichas técnicas en PDF con datos duros (W, lm, 2700 K, voltaje). NAP consistente (Aristóteles 127, Polanco CDMX + sede Puebla).

**OBSERVADO.** Autoridad externa: el activo más fuerte. Prensa convergente y reciente: CoolhunterMX (3 oct 2025, 10 años), Emprendedor.com (28 oct 2026, act. 5 nov) y Ámbito (30 oct 2026); Design House 2024–2026, Zona MACO 2024–2025, ICFF, Casa Hotbook, Cosentino, Bulbo, Alto Design (Costa Rica); rol de **jurado** en el Premio de Diseño Promesas México (Habitat Expo) — no se encontró ningún premio ganado, y no se afirma ninguno. Ferias Maison & Objet / Salone solo como atribución de Emprendedor.

**OBSERVADO.** Pauta: ningún UTM observado en la muestra; Meta Ads Library y Google Ads Transparency no consultados — no se afirma que paute ni que no paute.

**INFERIDO.** GEO: citable como autoridad en diseño/iluminación mexicana (entidad clara, fichas técnicas, glosario/FAQ, eventos con fecha) y casi incitable como opción de compra (sin precios ni checkout). Hallazgo marco: **sin checkout observable** — venta por asesor/cotización con catálogo PDF; restos de WooCommerce (checkout/shop, última modificación 2023) no prueban tienda activa.

**NO VERIFICADO (13 puntos).** Conteo total exacto de productos; contenido de `category-sitemap.xml`; contenido del glosario; JSON-LD/meta/hreflang; `llms.txt`; checkout/tienda activos; rankings/tráfico/backlinks; pauta (Ads Library); ficha de Google Business; métricas de redes; premios ganados; y si `bandidostudio.com.mx` (citado por Designaholic) pertenece a la misma empresa. Incidencia 429: tres lecturas consecutivas devolvieron 429 del servicio de lectura (paginación del product-sitemap, category-sitemap y glosario). Conforme a las reglas, **no se reintentaron**; esos tres puntos quedaron como sin verificar por ese motivo.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Cuentas oficiales: Instagram, Facebook y LinkedIn, las tres como @bandidostudio, confirmadas por la descripción del podcast *Hablando Luz* (5 jun 2023) y reforzada la de IG por Grid Magazine (feb 2024); correo público joel@bandidostudio.com. Sin cuenta oficial verificable en TikTok, X, YouTube ni Pinterest — las búsquedas solo devolvieron homónimos no relacionados (Grupo Bandido, Bicibandido, etc.), que no se atribuyen.

**OBSERVADO.** Contenido: feed no leído (ver abajo), así que ritmo, captions y formatos son NO VERIFICADO y no se inventó ninguno. Lo observable en texto es contenido de autor/proceso: luz como material, oficios mexicanos (ónix, vidrio, talavera, barro de Oaxaca), colecciones-narrativa (Aruna y Nova en 2026), amplificado por prensa (Coolhunter MX, Emprendedor y Ámbito en oct 2026 por el 10º aniversario) y podcasts de diseño.

**OBSERVADO — Embudo (real, no de tienda).** Sin checkout ni precios públicos. Descubrimiento (prensa/ferias/IG) → sitio con colecciones y fichas técnicas → catálogo en PDF (Descargables) → formulario "Registra tus datos y un asesor se comunicará contigo" → showroom (Aristóteles 127, Polanco, +52 555 0872 443; Puebla Del Cristo 2, +52 222 688 8442; lun–vie 10:00–17:00) → cotización, con canal B2B explícito de convenios para arquitectos e interioristas. Sin WhatsApp ni newsletter observables en la home leída.

**OBSERVADO.** Buen Fin 2026: sin evidencia en sitio ni en búsqueda; no se afirma que no participen por vías no leídas.

**OBSERVADO.** Colaboraciones: de diseño/plataforma, no influencers: Andrés Gutiérrez (BUNA x A-G Originario), Alto Design Studio (Costa Rica), Cosentino City CDMX, Bulbo (XV aniversario), Design House 2024–2026, Zona MACO 2024–2025; jurado del Premio de Diseño Promesas México (Habitat Expo).

**NO VERIFICADO.** Seguidores/publicaciones en IG/FB/LinkedIn, bio y link en bio de Instagram, ritmo/formatos/captions/engagement, campos del formulario de contacto, existencia de WhatsApp/newsletter/cotizador, cuentas en TikTok/X/YouTube/Pinterest, promo de Buen Fin 2026, embajadores/UGC, y si el PDF pide datos a cambio. Causa principal del hueco: la lectura directa de los perfiles de Instagram y Facebook devolvió error 429 del servicio de lectura; por regla no se reintentó (tampoco se repitió `browser.open` tras el fallo, por indicación del runtime).

---

## 6. Precios (F2.5)

**OBSERVADO — Hallazgo central: Bandido Studio no publica ningún precio.** Home leída completa el 13 nov 2026 (crawl 20:01 UTC): sin cifras, sin carrito, sin checkout. La única vía es «Atención personalizada — un asesor se comunicará contigo» + convenios para arquitectos/interioristas. Venta por catálogo + cotización.

**OBSERVADO.** Precios observados: uno solo en toda la web indexada — lámpara de mesa a **$172 USD** (Cool Hunting / Made Trade, publicada sep 2019), marcado como observado-estancado, NO vigente. Ninguna colección 2026 (Aruna, FLUX, CORE, FASE, etc.) tiene precio.

**OBSERVADO.** Catálogo PDF: lookbooks 2026 ES/EN y catálogos 2023/2024 sin precios en los fragmentos indexados; el cuerpo completo del PDF no pudo leerse (429, no reintentado).

**OBSERVADO.** Promociones: ninguna promo de Buen Fin 2026 encontrada — ni en la home (primer día del Buen Fin), ni en web, ni en prensa reciente. Sin descuentos ni MSI publicados.

**OBSERVADO.** Costos adicionales: envío e instalación sin costo publicado. El instructivo 2026 recomienda instalación por especialista y entre dos personas; fuente de luz incluida (6W G9 LED) en al menos una ficha.

**OBSERVADO.** Comparación multicanal: imposible — no hay contraparte con precio en 1stDibs, Artemest, Adorno, Pamono, Amazon ni Mercado Libre. Se descartaron homónimos: tienda de piel bandidopiel.myshopify.com (BND-2 $2,390 vs $2,990 MXN), restaurante Bandido (MXN 310–500) y motos Dinamo «Bandid».

**INFERIDO.** Efecto de espera (hipótesis): no hay motivo para esperar una rebaja; la fricción real es la opacidad de precio y el tiempo de producción artesanal, no el calendario de ofertas.

**NO VERIFICADO.** Cuerpo completo del lookbook 2026 (ES/EN) y de la ficha de Cool Hunting: la lectura directa devolvió **429** y, por regla, no se reintentó. Solo se usaron fragmentos indexados por el buscador. Estado actual de la lista en Made Trade (¿sigue activa? ¿precio actual?). Precios reales 2026 por pieza, costos de envío/instalación/plazos, y posibles precios diferenciados por canal (profesionales vs. particular) — solo obtenibles pidiendo cotización, fuera del alcance de este frente. Verificación exhaustiva canal por canal en 1stDibs/Artemest/Adorno/Pamono (ausencia solo en los resultados de búsqueda consultados). No se inventó ningún precio, no se añadió nada al carrito, no se contactó ni se publicó nada.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Disponibilidad: sin checkout, precios ni stock en la home (leída 13 nov 2026); la venta es por asesor ("registra tus datos y un asesor se comunicará contigo"). Las fichas 2024 repiten "los tiempos de entrega pueden variar" y advierten piezas hechas a mano; prensa confirma producción en baja escala, personalizada, con talleres distribuidos (vidrio Guadalajara, talavera Puebla, barro Oaxaca, ónix Tecalitlán) y equipo de 25 personas. Inferencia: producción bajo pedido / lotes pequeños, sin stock en línea.

**OBSERVADO.** Salida de excedente: ningún outlet, remate ni liquidación encontrado en el sitio ni en buscadores. Lo que existe son canales de exhibición-venta (Zona MACO, Design House 2024–2026, Museo Amparo "Hecho Forma" dic 2025–mar 2026, Casa Rosa Polanco). Inferencia: con baja escala casi no hay excedente que liquidar.

**OBSERVADO.** Mensajerías / entrega / instalación: ninguna mensajería nombrada por Bandido en ninguna fuente consultada. Las fichas sí tratan canopes y acomodos como parte de la especificación del producto, y remiten la garantía a contacto directo. Inferencia: entrega coordinada con instalación probable, pero no declarada.

**OBSERVADO.** Costos y tiempos: ningún costo de envío ni plazo numérico publicado; única declaración: "los tiempos de entrega pueden variar". Coherente con cotización caso por caso.

**OBSERVADO.** Devoluciones / garantía: no se localizó política de devoluciones/cambios publicada; única mención propia: "Contactar directamente a Bandido para solicitar garantía" (fichas 2024), sin plazo ni cobertura.

**OBSERVADO.** Showroom y pickup: dos sedes observadas — Aristóteles 127, Polanco, CDMX (+52 555 0872 443, lun–vie 10:00–17:00) y Del Cristo 2, Puebla (+52 222 688 8442) — pero el pickup/retiro de pedidos no está declarado en ninguna.

**MODELO PROPIO (§7, F2.6 — no son cifras de Bandido, supuestos declarados, rangos amplios).** Escenario A (pieza pequeña CDMX–Puebla) $1,000–$5,300; B (colgante mediano nacional) $4,000–$19,000; C (proyecto + instalación) $14,000–$81,000 por pedido, con reserva por rotura aparte. Lectura: embalaje/seguro dominan sobre el flete y la rotura es el riesgo principal.

**HIPÓTESIS.** H1 venta bajo pedido sin stock; H2 entrega coordinada con instalación, no paquetería estándar; H3 sin canal de excedente (absorción por exhibición-venta). Cada una con falsador explícito en el archivo.

**OBSERVADO — Exclusiones aplicadas.** No se atribuyó nada de `bandidopiel.myshopify.com`, `studiobandido.com` (Lleida), BA Studio, ni de Galería Mexicana de Diseño (sus plazos 3–7 días / 2–6 semanas son de la Galería, no del estudio) ni los $160 Estafeta/FedEx de otra tienda (latidorosamx).

**NO VERIFICADO.** Texto completo de los PDFs de fichas 2024 y lookbook — ambos intentos de lectura devolvieron **429 y no se reintentaron** por regla, por lo que solo se usaron fragmentos indexados por el buscador; precios; plazo numérico de producción/entrega; mensajería(s), costo/cobertura de envío e instalación; política de devoluciones/garantía (plazo y procedimiento); pickup en showroom; venta de piezas de exhibición/prototipos; proceso de exportación; y la posible relación corporativa de `bandidopiel.myshopify.com` (tratada como marca distinta).

---

## 8. Pain points (F2.7)

**OBSERVADO — Hallazgo central (baja visibilidad).** En 15 búsquedas dirigidas no apareció ni una sola queja pública atribuible a Bandido Studio en ninguna categoría. Es coherente con su modelo (venta asesorada, sin checkout, bajo volumen, trato directo), pero se reporta como baja visibilidad, no como prueba de satisfacción.

**OBSERVADO — Quejas por categoría.** Cero atribuibles en reembolsos/devoluciones, entregas, cambios, atención al cliente, calidad/producto, precios/cotizaciones y disponibilidad. Único matiz observado: el instructivo oficial 2026 advierte "materiales frágiles", lo que deja la rotura en transporte y la variabilidad artesanal como fricciones plausibles (inferidas, no observadas).

**OBSERVADO — Política oficial.** No se localizó ninguna política de devoluciones/reembolsos en bandidostudio.com (`site:` devolvió cero resultados). Lo único oficial es el instructivo 2026, que remite mantenimiento y garantía a un QR; sin promesa pública ni narraciones de clientes, no hay contraste posible promete-vs-narran.

**OBSERVADO — Puntuaciones agregadas.** Ninguna atribuible. Trustpilot: ningún perfil surfacó en búsqueda. Google: existen fichas de CDMX (Aristóteles 127) y Puebla, pero los fragmentos no muestran puntuación ni conteo de reseñas; no se inventa ninguna nota.

**OBSERVADO — Lo positivo.** Reputación sólida en prensa de diseño — Dezeen 2019 (Aura), Interior Design 2022, Enki 2022, CoolhunterMX 2025, Emprendedor y Ámbito oct 2026 (10º aniversario), Zona MACO/ICFF/Maison & Objet/Salone, y proyecto del aeropuerto de Guadalajara (2021).

**OBSERVADO — Homónimos (excluidos).** El restaurante Bandido de Polanco (4.8/105 en OpenTable) domina casi todas las búsquedas; también Bandit Tattoo (Gran Canaria), Bandit Studio (Brooklyn), Bandido Piel (Shopify) y Studio Bandido (studiobandido.com, con política de 14 días que no pertenece al estudio).

**NO VERIFICADO.** Las 4 lecturas directas (home de bandidostudio.com, Emprendedor, CoolhunterMX, PDF de instructivos 2026) devolvieron 429 del servicio de lectura y no se reintentaron, por regla; lo citado de ellas procede de fragmentos de búsqueda. Tampoco se pudo confirmar/descartar perfil en Trustpilot, ni nota/conteo de Google, ni consultar el Buró Comercial de PROFECO (falta la razón social exacta), ni revisar comentarios de Instagram/Facebook del estudio, ni verificar por este frente la participación en Design House 2026.

---

## 9. Verificación global (cierre de sitio)

### C1 — Sin checkout: 404 + sin precios + sin carrito (CONFIRMADO POR TRES FRENTES)
F1: sin "Buen Fin", sin precios, sin carrito ni botón de compra en toda la home; venta por asesor/cotización. F2: `/checkout/` da 404; home sin precios ni carrito; PayPal instalado pero sin confirmar activo. F5: home leída completa sin cifras, sin carrito, sin checkout; único precio en toda la web indexada es de sep 2019 ($172 USD, observado-estancado). Resolución: **no hay checkout observable**. Matiz de F2: el 404 de `/checkout/` por sí solo no prueba que no exista ninguna forma de pago en línea (podría haber otro slug o modo catálogo); prueba que la ruta estándar no existe y que la home no ofrece compra directa. La venta se cierra por asesor (teléfono / formulario / showroom), no por checkout web.

### C2 — WooCommerce instalado, tienda no activa (COMPATIBLE)
F2: WordPress + WooCommerce confirmado con marcadores duros (imágenes `/wp-content/uploads/`, robots `wc-logs`/`woocommerce_uploads`/`add-to-cart`/`wp-admin`, `wp-json/` con namespaces `wc/v3`, `wc/store/v1`, `wc-admin`); sitemap de productos actualizado el mismo 13 nov 2026 (19:46 UTC) — catálogo vivo. F3: restos de WooCommerce (checkout/shop, última modificación 2023) no prueban tienda activa. Resolución: WooCommerce está instalado y el catálogo está vivo (actualizado el 13 nov), pero **no hay tienda transaccional activa observable**. No hay contradicción: catálogo vivo ≠ checkout activo.

### C3 — Precios: uno solo en toda la web indexada, de 2019 (HUECO CENTRAL, DECLARADO)
F5: único precio en toda la web indexada — lámpara de mesa $172 USD (Cool Hunting / Made Trade, sep 2019), observado-estancado, NO vigente. Ninguna colección 2026 tiene precio. F1: ningún precio ni indicador de stock en ninguna fuente leída. F2: precios, número de productos y URLs individuales sin verificar (sitemaps con 429). Resolución: **este informe no contiene ningún precio vigente de Bandido Studio**. No se cita el $172 USD como vigente en ningún apartado.

### C4 — Agentic cero (CONFIRMADO POR DOS FRENTES)
F2 (lectura directa: `/agents.md` y `/.well-known/ucp` 404, sin MCP; robots sin reglas para crawlers de IA) y F3 (robots abierto por defecto, sin reglas para crawlers de IA) coinciden: sin infraestructura agentic. Es el único sitio de la fase con agentic en cero confirmado por lectura directa de ambos endpoints. No se afirma que no se pueda comprar por agente: se afirma que no hay endpoint agentic.

### C5 — Buen Fin: cero evidencia en cuatro frentes (AUSENCIA OBSERVADA EL 13 NOV, CON RESERVA)
F1 (ninguna promo visible el 13 nov; búsqueda `"Bandido Studio" "Buen Fin"` sin resultados), F4 (sin evidencia en sitio ni en búsqueda), F5 (ninguna promo en home, web ni prensa reciente) y F3 (sin UTM ni pauta consultada) coinciden: no hay evidencia observable de promo de Buen Fin. Reserva de F4: no se afirma que no participen por vías no leídas (Instagram/correo). Se consigna como ausencia observada el 13 nov, no como hecho sobre toda la campaña.

### C6 — Quejas: cero en 15 búsquedas (BAJA VISIBILIDAD, NO SATISFACCIÓN)
F7: cero quejas atribuibles en 15 búsquedas dirigidas; sin perfil Trustpilot, sin nota/conteo de Google, sin política de devoluciones publicada. F6: sin política de devoluciones/cambios publicada; única mención propia sobre garantía remite a contacto directo. Resolución: la ausencia de quejas se reporta como baja visibilidad (modelo de venta asesorada, bajo volumen, trato directo), no como satisfacción probada. La fricción plausible (rotura en transporte, variabilidad artesanal) es inferida del instructivo 2026 ("materiales frágiles"), no observada en quejas.

### C7 — Conteo de productos: ≥17 URLs antes del corte, total no afirmado (SIN RESOLVER)
F3: al menos 17 URLs de producto antes del corte (ARUNA, NOVA/AXIS-FLUX-CORE, DUO, BUNA, HUMO, FASE, TEMPLO, AURA, NAGA); 24 URLs de página observadas. F2: `product-sitemap.xml` y `page-sitemap.xml` devolvieron 429 tras 3 intentos. Resolución: el conteo total exacto queda NO VERIFICADO; se consigna ≥17 URLs de producto observadas antes del corte.

### C8 — Dominio: bandidostudio.com es el sitio; .com.mx no verificado (SIN RESOLVER)
F3: si `bandidostudio.com.mx` (citado por Designaholic) pertenece a la misma empresa queda sin verificar. F2: la búsqueda web solo devolvió resultados genéricos, sin datos del dominio. Resolución: el sitio investigado es `bandidostudio.com`; el .com.mx no se atribuye.

### C9 — Showroom: dos sedes consistentes (CONFIRMADO POR TRES FRENTES)
F1, F4 y F6 coinciden: Aristóteles 127, Polanco, CDMX (+52 555 0872 443, lun–vie 10:00–17:00) y Del Cristo 2, Puebla (+52 222 688 8442). NAP consistente (F3). El pickup/retiro de pedidos no está declarado en ninguna fuente (F6).

### C10 — Homónimos: el restaurante domina las búsquedas (TRAMPA DOCUMENTADA)
F5 y F7 coinciden: el restaurante Bandido de Polanco (4.8/105 en OpenTable) domina casi todas las búsquedas; también Bandido Piel (Shopify), Studio Bandido (Lleida, con política de 14 días que no pertenece al estudio), Bandit Tattoo y Bandit Studio (Brooklyn). Ninguno se atribuye a Bandido Studio. Se consigna la trampa para que la síntesis no contamine.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Precios vigentes de todas las piezas** (ver C3); costos de envío/instalación/plazos; precios diferenciados por canal (profesionales vs. particular).
2. **Si existe checkout con otro slug o modo catálogo explícito** (solo se comprobó que `/checkout/` da 404; ver C1); pasarelas activas (PayPal instalado, sin confirmar).
3. **Conteo total exacto de productos** (≥17 URLs observadas; ver C7); contenido de `category-sitemap.xml` y del glosario.
4. **Cuerpo completo del lookbook 2026 (ES/EN) y de las fichas 2024** (429, no reintentados); Datasheet 2027 líneas 532–3,812 (429).
5. **Política de devoluciones/garantía** (plazo y procedimiento; solo "contactar directamente a Bandido"); plazo numérico de producción/entrega.
6. **Mensajería(s), costo/cobertura de envío e instalación**; pickup en showroom; venta de piezas de exhibición/prototipos; proceso de exportación.
7. **JSON-LD, meta description, OG, hreflang y canonical** (no verificables con lectura de texto); `llms.txt`; rutas agentic no estándar (`agent.json`).
8. **Seguidores/publicaciones en IG/FB/LinkedIn**; bio y link en bio; ritmo/formatos/captions/engagement; campos del formulario de contacto; WhatsApp/newsletter/cotizador; cuentas en TikTok/X/YouTube/Pinterest; embajadores/UGC; si el PDF pide datos a cambio.
9. **Hosting/CDN; tema y versiones; ejecución real de píxeles**; ficha de Google Business; métricas de redes; premios ganados; perfil en Trustpilot; nota/conteo de Google; Buró Comercial de PROFECO (falta la razón social exacta); comentarios de Instagram/Facebook.
10. **Menú de navegación; páginas individuales de colección/producto** (sin URLs verbatim); promociones fuera del sitio (Instagram/correo); si `bandidostudio.com.mx` pertenece a la misma empresa (ver C8).

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **La autoridad se construye sin precio — pero no se cobra sin precio.** Bandido es citable como autoridad (prensa, jurado, glosario, fichas técnicas) y casi incitable como opción de compra (sin precios ni checkout). Para la empresa nueva: la autoridad sin precio es prensa, no venta; publicar el precio en la ficha es lo que convierte la cita en compra.
2. **El catálogo en PDF es un embudo, no una tienda.** Datasheet 2027 + Lookbook ES 2026 + formulario + showroom + cotización: el PDF filtra al cliente serio y el asesor cierra. Para la empresa nueva sin showroom: el equivalente es la ficha técnica completa + el formulario de cotización como paso del embudo, no como sustituto del carrito — y el precio debe estar en la ficha, no solo en la cotización.
3. **WooCommerce instalado no es tienda activa.** Catálogo vivo (actualizado el 13 nov) con `/checkout/` en 404: la plataforma no es el negocio. Para la empresa nueva: auditar el checkout como lo haría un cliente (¿existe la ruta? ¿hay precios? ¿hay carrito?) antes de afirmar que "la tienda está en WooCommerce/Shopify".
4. **El B2B es un canal, no un accidente.** Convenios para arquitectos e interioristas, con canal explícito: el cliente profesional es el que compra sin ver el precio en la web. Para la empresa nueva: si hay canal profesional, que tenga su propia vía (convenio, lista de precios, asesor) y no compita con el carrito del particular.
5. **La rotura es el riesgo, no el flete.** El modelo de F6 lo cuantifica: embalaje/seguro dominan sobre el flete y la rotura es el riesgo principal (escenarios $1,000–$5,300 / $4,000–$19,000 / $14,000–$81,000 por pedido). Para la empresa nueva con producto frágil: presupuestar embalaje + seguro + reserva por rotura antes que el flete; y declarar la instalación por especialista como parte del producto, no como costo sorpresa.
6. **Sin política de devoluciones publicada, la garantía es una conversación.** "Contactar directamente a Bandido para solicitar garantía", sin plazo ni cobertura, funciona con trato directo y bajo volumen. Para la empresa nueva: publicar plazo y cobertura de garantía aunque sea corta; la ausencia de política no es confianza, es fricción para el cliente que no conoce al estudio.
7. **Las genéricas las ganan los que tienen precio visible.** «Lámparas de autor México comprar» la dominan guías y competidores con precio; Bandido no aparece. Para la empresa nueva: si el producto es buscable por categoría, el precio visible en la ficha es el ticket de entrada a la genérica; sin precio, solo se gana la búsqueda de marca.

---

## Fuentes

- https://bandidostudio.com/ — home (lectura 13 nov 2026; sin precios, sin carrito, sin "Buen Fin")
- https://bandidostudio.com/checkout/ — 404 (13 nov 2026)
- https://bandidostudio.com/wp-json/ — namespaces `wc/v3`, `wc/store/v1`, `wc-admin`, `paypal/v1`
- https://bandidostudio.com/robots.txt — reglas `wc-logs`/`woocommerce_uploads`/`add-to-cart`/`wp-admin`; sin reglas para crawlers de IA
- Sitemap Yoast (10 sub-sitemaps; productos y categorías actualizados 13 nov 2026, 19:46 UTC); ≥17 URLs de producto observadas
- Datasheet 2027 y Lookbook ES 2026 (fichas técnicas bilingües por SKU, sin precios; líneas 532–3,812 con 429)
- https://www.coolhunting.com/ · Made Trade (sep 2019) — lámpara de mesa $172 USD (observado-estancado, NO vigente)
- Prensa: CoolhunterMX (3 oct 2025, 10 años), Emprendedor.com (28 oct 2026, act. 5 nov), Ámbito (30 oct 2026); Dezeen 2019 (Aura), Interior Design 2022, Enki 2022
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/bandido/`, 13 nov 2026)
