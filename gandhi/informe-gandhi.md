# Informe consolidado — Gandhi · Fase 2, WO-E-LARPING

- **Sitio:** https://gandhi.com.mx/ (marca visible: Librerías Gandhi; librería gigante omnichannel mexicana, fundada en junio de 1971 por Mauricio Achar)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 3: El Sótano / Gandhi / Bandido)
- **Método:** 7 frentes en paralelo, archivos exclusivos por frente, solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con la empresa ni con clientes.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada como tal) / **NO VERIFICADO**.

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

**OBSERVADO.** Gandhi es la librería gigante omnichannel mexicana (fundada en junio de 1971 por Mauricio Achar; "+5,000,000 de títulos"; "+40 librerías" en su sitio, ">50" en el caso VTEX) que vende en https://gandhi.com.mx/ sobre **VTEX, confirmado por tres vías independientes** — robots.txt con rutas exclusivas VTEX (`/_v/public/graphql/v1`, `/api/vtexid`, `/api/catalog_system`, `vtex.store@2.x`), la API pública de catálogo que responde JSON en vivo (ej. "La conquista perfecta", SKU 8126561, $350.10, `accountName: "gandhi"`, imágenes en `gandhi.vteximg.com.br`) y el caso oficial VTEX (OMS + Sales App, omnicanal, 50+ tiendas). Shopify/Magento/WooCommerce: sin ningún marcador. Es la plataforma SaaS más pesada de la fase.

**El negocio en una frase:** vende con **"Precio Gandhi" = precio de lista −10% exacto** (descuento estructural permanente con tachado explícito, en 15 de 20 fichas con tachado; excepciones Lovecraft −20%, HP −19%, Rius −12%), **"Envío gratis siempre a todo México"** como rótulo (sin mínimo verificado en checkout; Picodi dice $99 — conflicto sin resolver), y **la política de devoluciones más restrictiva de la fase** ("Una vez entregado un pedido total o parcialmente no hay cambios ni devoluciones"), sostenida por marca y por el precio único del libro — con el pickup en tienda como ventaja logística real (VTEX: 70% de pedidos se recogen en tienda, 30% a domicilio, y 8 de cada 10 que vuelven compran algo más).

**Tres rasgos que la distinguen:**
1. **El −10% es estructural, no de Buen Fin.** Gandhi es participante confirmado del Buen Fin 2026 (13–17 nov) y su home muestra "Destacados de Buen Fin", pero no se encontró ningún %, cupón, MSI ni bundle oficial de Buen Fin. El −10% ya estaba aplicado antes y se verifica en vivo contra los snippets (ej. $405 → $364.50). La promo de Buen Fin, si existe, no se pudo leer.
2. **Omnicanal real, medido por VTEX.** OMS + Sales App, pasillo infinito, carrito unificado web/tienda/teléfono, 70% pickup, consulta inter-sucursal como herramienta de vendedor. El Sótano tiene 4 pasos web; Gandhi tiene el pedido que nace en un canal y se recoge en otro.
3. **Contenido fuera del dominio, comunidad dentro.** El contenido editorial fino vive fuera (podcast «Desde el Librero», Tinta, revista Lee Más, mascultura.mx); en el dominio solo hay intros de 2 párrafos en páginas `/t/`. La comunidad vive en eventos presenciales, clubes de lectura y TikTok (430.9k seguidores) — no en el blog, que no existe.

**Pista previa corregida:** «librería gigante omnichannel, libros». Verificado: VTEX confirmado (no inferido); el −10% es estructural permanente, no promo de Buen Fin; **el número de sucursales no se confirmó** — >40 en el sitio vs. >50 en VTEX (ver §9, C2).

---

## 1. Qué es Gandhi

**OBSERVADO.** Librería fundada en junio de 1971 por Mauricio Achar (La Jornada 1996, El Economista 2009, Expansión). "+5,000,000 de libros, ebooks y audiolibros", "MÁS DE 40 LIBRERÍAS EN TODO EL PAÍS", "Envíos a todo el país y el extranjero", "Entregas nacionales de 4 a 6 días", venta de tarjetas de regalo y venta al mayoreo (mínimo $10,000, entrega 4–6 días hábiles tras cotización y pago).

**OBSERVADO.** Catálogo declarado >5M títulos; 35,000–40,000 SKU/tienda (VTEX) y >75,000–100,000 referencias (Onebeat, cifras que no coinciden entre sí). Red de 40–50+ librerías (web propia ">40", VTEX ">50") más 250–320 quioscos; las cifras de 37 sucursales / 270 Walmart / 11 Palacio de Hierro son de fuentes de ~2017, no actuales.

**OBSERVADO.** Vertical B2B/mayoreo propia y marca editorial propia (Ediciones Gandhi). Tinta: suscripción mensual de libros curados (precio/planes sin verificar). Revista Lee Más, Radio Gandhi, podcast «Desde el Librero» (T2, cap. 53 oct 2026, 55 aniversario), mascultura.mx.

---

## 2. Front end (F2.1)

**OBSERVADO.** Home: aviso «Envío gratis siempre a todo México»; menú Librerías, Eventos, Tinta, Radio Gandhi, Ayuda, Tarjetas de regalo; secciones en orden: Los más leídos, Novedades, Libros de arte, Ebook y audiolibros, Harry Potter, Ediciones Gandhi, Juegos y juguetes, Rincón de Oportunidades, y «Destacados de Buen Fin» + Ver todo. El extractor solo devolvió 24 líneas — banners/hero no quedaron en texto.

**OBSERVADO.** Fichas de producto (4 abiertas en vivo): autor, título, editorial, formato (tapa blanda/eBook/audiolibro), fecha e ISBN; precio tachado + «Precio Gandhi» online; reseñas cargan por JS («Cargando comentarios…») y comentar exige iniciar sesión. Patrón de URL VTEX `/slug-isbn/p`.

**OBSERVADO — Precios (13 nov, Buen Fin día 1).** En 3 de 4 fichas el precio vigente en vivo fue exactamente 10% menor que el del snippet de búsqueda (ej. Derecho Internacional Privado $405 → $364.50; Secondhand Jew $173 → $155.70; Venice Peach $259 → $233.10). Excepción: 365 Calendars $1,499 → $899.10 (−40%). Se reportan ambas lecturas; no se afirma que el −10% sea la promo de Buen Fin (ver §9, C1).

**OBSERVADO.** Carrito/checkout: nada observable en texto en home ni fichas (sin botón de compra ni pagos). Solo documentado el canal mayoreo: transferencia, depósito y tarjetas; mínimo $10,000; entrega 4–6 días.

**OBSERVADO.** Promociones: solo «Envío gratis siempre» y la sección Buen Fin en el propio sitio. Sin MSI, cupón ni % general observados. Picodi afirma 10% por crear cuenta y envío gratis desde $99 — no verificado en Gandhi y contradictorio con el «siempre» (ver §9, C3).

**OBSERVADO.** Editorial/sucursales/app: Tinta, Radio Gandhi y Eventos son navegación de primer nivel, contenido no leído. «Más de 40 librerías» en el sitio vs. «más de 50» en el caso VTEX (que describe pasillo infinito y carrito unificado web/tienda/teléfono); app de cliente no verificada — la app de VTEX es de vendedores.

**NO VERIFICADO.** Contenido de las secciones de home y banners de Buen Fin; buscador; checkout retail completo; si el −10% es Buen Fin y su alcance/MSI; registro oficial en elbuenfin.org; contenido de Tinta/Radio/Eventos y clubes; localizador y número exacto de sucursales; app de cliente; precios en tienda física; reseñas reales (JS). **Y una ficha sin leer en vivo por 429 (COLL WORKS, Kahlil Gibran) — no reintentada por regla del proyecto; solo consta su snippet ($671 → $603.90, instock).**

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **Plataforma — VTEX, confirmado por tres vías independientes:** robots.txt con rutas exclusivas VTEX (`/_v/public/graphql/v1`, `/api/vtexid`, `/api/catalog_system`, `vtex.store@2.x`); la API pública de catálogo responde JSON en vivo (ej. "La conquista perfecta", SKU 8126561, $350.10, `accountName: "gandhi"`, imágenes en `gandhi.vteximg.com.br`); y caso oficial VTEX (OMS + Sales App, omnicanal, 50+ tiendas). Shopify/Magento/WooCommerce: sin ningún marcador.

**OBSERVADO.** Hosting/CDN: VTEX Cloud (SaaS) por inferencia directa; imágenes en el CDN de VTEX. CDN del HTML, cabeceras, DNS y rendimiento: sin verificar (el lector de texto no los expone).

**OBSERVADO.** Front-end: VTEX Store Framework 2.x (IO), inferido del enrutador `vtex.store@2.x` y `__pickRuntime`; tema a medida editorial. Nombre del tema, apps instaladas y librerías: sin verificar (no hay acceso al fuente).

**OBSERVADO.** Pagos (checkout no recorrido, por regla): observados en la API de catálogo — Amex, Visa, Mastercard, PayPal, Vale (gift card), Aplazo y "Pago en efectivo" (custom 201); checkout VTEX nativo con VTEX ID. En la muestra todo era a 1 exhibición; MSI no aparecieron en el JSON.

**OBSERVADO.** Terceros: solo lo visible — UTM de Meta Ads (pauta en Meta), comentarios en ficha de producto, Retail Media (caso VTEX) y Onebeat con IA para inventario en back-office. Analítica, píxeles, chat, email y proveedor de reseñas: sin verificar, no inventados.

**OBSERVADO.** Comercio agentic: sin evidencia de programa dedicado. `/agents.md` y `/.well-known/ucp` devolvieron HTTP 403 (no prueba existencia ni ausencia); robots.txt no menciona crawlers de IA ni `llms.txt`. El catálogo JSON y el GraphQL público sí están explícitamente permitidos a crawlers.

**NO VERIFICADO.** Cabeceras/DNS/CDN del HTML y rendimiento; tema y apps VTEX; GA/GTM, píxeles, chat, email, proveedor de reseñas; MSI vigentes, SPEI/OXXO/Mercado Pago/wallets y adquirente; `llms.txt`, MCP y UCP real; y —por el 429 del servicio de lectura, que por regla no se reintentó— `sitemap.xml`, `/products.json` y las páginas de ayuda/pagos del sitio.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Visibilidad: domina la búsqueda de marca (home primera, «+5,000,000 de títulos», «+40 librerías»); `site:` devuelve fichas indexadas con rastreo de 1–6 días; en la genérica «comprar libros en línea México» la parte visible la ocupan Buscalibre, Péndulo y marketplaces, Gandhi solo aparece vía un comparador de terceros.

**OBSERVADO.** robots.txt: copia del 6 may 2026 (191 días, puede no estar vigente): `User-agent: *` con disallows a cuenta/checkout/busca/admin, allows a `?idsku`, `?skuId`, `?page`, `utm_` y endpoints VTEX; **ninguna regla para crawlers de IA** (GPTBot, ClaudeBot, etc. no mencionados).

**OBSERVADO.** Sitemap: índice regenerado a diario (lastmod 2026-11-13): 44 archivos brand, 1 category, rutas custom y ≥1.183 archivos product observados antes de truncarse la lectura (total de URLs no afirmado).

**OBSERVADO.** Datos estructurados: Product + Offer + FAQ visibles vía el índice de búsqueda (precio MXN, instock, Q/A por ficha, ISBN/autor/editorial/páginas); JSON-LD literal no inspeccionado (429, no reintentado).

**OBSERVADO.** Plataforma: VTEX, inferido con evidencia fuerte (rutas `/_v/`, `vtex.store@2.x`, `/api/catalog_system/`, partición del sitemap); URL canónica por ISBN (`/<slug>-<ISBN>/p`).

**OBSERVADO.** Contenido editorial: fino en el dominio — intros de 2 párrafos en páginas `/t/` (ej. `/t/vinos-y-catas` leída completa); la recomendación real vive fuera: podcast «Desde el Librero» (T2, cap. 53 oct 2026, 55 aniversario), Tinta (club mensual), revista Lee Más y mascultura.mx; no se encontró blog en `gandhi.com.mx` ni club de lectura propio.

**OBSERVADO.** Autoridad: fundada jun 1971 por Mauricio Achar (La Jornada 1996, El Economista 2009, Expansión); cifras de 37 sucursales / 270 Walmart / 11 Palacio de Hierro son de fuentes de ~2017, no actuales; sin premios SEO/e-commerce encontrados.

**OBSERVADO.** Pauta observable: URL indexada con UTM de Facebook (`paidsocial`, campaña `lvly_fb_catalogo_perf_vtas`, segmento compradores); Biblioteca de Anuncios no consultable sin navegador en vivo.

**INFERIDO.** GEO: muy citable para consultas factuales/transaccionales (ficha ISBN, precio, stock, FAQ) y débil para recomendación/descubrimiento (contenido fino, en audio o en dominios satélite; sin reseñas visibles ni `llms.txt` verificado).

**NO VERIFICADO.** El JSON-LD literal de producto y `llms.txt` — ambos `browser.open` devolvieron **429 y no se reintentaron por regla**; vigencia del robots.txt (copia de mayo); páginas de Eventos y Tinta no abiertas; posiciones, tráfico, volúmenes y backlinks no medidos; Biblioteca de Anuncios de Meta / Google Ads; nº actual de sucursales y política de envío exacta (home dice «envío gratis siempre», un comparador de may 2026 sugiere un mínimo); premios, reseñas agregadas y posible blog en otra ruta.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Cuentas oficiales: TikTok @librerias.gandhi con 430.9k seguidores y 2.0m Me gusta (única cifra devuelta por fuente legible, aunque en caché de ~183 días); X @LibreriasGandhi con bio de cadena fundada en 1971; Instagram @librerias_gandhi solo corroborado por mención de terceros, sin lectura de perfil; Facebook existe (probado por pauta) pero sin datos; YouTube vive bajo la marca Revista Lee+ y hay podcast oficial "Desde el Librero" en Spotify.

**OBSERVADO.** Contenido: solo 2 videos de TikTok observables en texto (humor pop con CTA a tienda: "Ven por el tuyo", 1,176 likes; y frase identitaria "La novedad más grande es verte leer", 280 likes); en X dominan agenda de eventos, #LosLibrerosRecomiendan y promos con regalo. Ritmo de publicación en todas las redes: no verificable (feeds no devueltos).

**OBSERVADO.** Embudo: omnichannel con la tienda física como ancla — descubrimiento en redes + contenido propio (Revista Lee+, Radio Gandhi, podcast, mascultura.mx), comunidad en eventos presenciales y clubes de lectura (entrada libre, cupo limitado), cierre en web con envío gratis a todo México o en sucursal, y retención vía Tinta (suscripción mensual de libros curados).

**OBSERVADO.** Buen Fin 2026: Gandhi es participante confirmado (13–17 nov) y su home muestra "Destacados de Buen Fin", pero el %/mecánica exactos no se pudieron leer; las fichas muestran ~10% de descuento sin etiqueta de Buen Fin, por lo que no se atribuye.

**OBSERVADO.** Pauta y colaboraciones: pauta pagada en Meta activa y observable (UTMs `paidsocial`, campaña `lvly_fb_marca_perf_vtas`, en feed y Reels); clubes co-moderados por comunidades lectoras (@chicas.lectoras.05, @elauradeloslibros) y UGC orgánico de booktokers/autoras; sin evidencia de programa formal de embajadores o drops.

**NO VERIFICADO.** Seguidores de Instagram y Facebook; cifra de 1.6M en X (solo espejo de terceros); suscriptores de YouTube y ritmo/captions de IG/FB; detalle de la promo Buen Fin y su campaña en redes; precio/planes de Tinta y existencia de la app; número actual de sucursales; programa formal de embajadores; Threads/Pinterest/LinkedIn. Además, `browser.open` a eventos.gandhi.com.mx y gandhi.com.mx/tinta devolvió **429** (3 intentos agotados) — por regla no se reintentó, y así quedó anotado en el archivo.

---

## 6. Precios (F2.5)

**OBSERVADO.** Fichas (§1): 42 fichas (novela, clásicos, infantil, colecciones, derecho, ebooks, papelería). Rango: ebooks $52–$176; novela $179–$549; arte/colecciones $360–$899; box set Harry Potter $3,690. Solo 6 fichas tienen crawl del 13 nov (vigentes día 1 Buen Fin: HP Half-Blood Prince $489→$396, A Little Princess $58.50, Meditations $99.90, Count And Write $155.70); el resto es observado-estancado de 1–12 días atrás, marcado como tal.

**INFERIDO.** Patrón de descuento: el "Precio Gandhi" es precio de lista −10% exacto en 15 de 20 fichas con tachado — descuento estructural permanente, no de Buen Fin. Excepciones: Lovecraft −20%, HP −19%, Rius −12%.

**OBSERVADO.** Promociones (§2): Gandhi figura como participante del Buen Fin 2026 (13–17 nov) y la home del 13 nov 18:20 UTC muestra "Destacados de Buen Fin" y "Rincón de Oportunidades", pero no se encontró ningún %, cupón, MSI ni bundle oficial de Gandhi. Página 1 (Morado $140 / Amarillo $5,001–$15,000 / Blanco $15,000+, puntos dobles/triples) con montos de fuente 2022, sin confirmar 2026. Mayoreo: mínimo $10,000, entrega 4–6 días.

**OBSERVADO.** Comparativas (§3): *La felicidad cabe en una taza de café 2*: Gandhi $179.10 vs Amazon MX $266.35 pasta blanda — pero el crawl de Amazon es de ~17 mar 2026 (241 días), observado-estancado, no vigente. *Talking to Strangers*: Gandhi $179 vs El Sótano $328.50, pero ISBN/edición distintos — no comparable; El Sótano además OutOfStock. Mercado Libre: sin datos.

**OBSERVADO.** Costos adicionales (§4): envío gratis siempre a todo México según home oficial (13 nov); Picodi (tercero) dice mínimo $99 — conflicto reportado, no resuelto (ver §9, C3). Devoluciones, tiempo de entrega retail y MSI: sin verificar.

**INFERIDO.** Efecto espera (§6, hipótesis): libros <$200 con el 10% ya aplicado → no vale esperar; tickets $899–$3,690 → podría valer por MSI o un extra no publicado, con riesgo de agotar stock (hay fichas "no disponible" y mucho OutOfStock en El Sótano).

**NO VERIFICADO.** %/cupón/MSI/bundle específico de Gandhi para el Buen Fin 2026; contenido y precios del Rincón de Oportunidades y de "Destacados de Buen Fin"; valor del Punto Gandhi y montos Página 1 vigentes 2026; MSI, cupones, política de envíos/devoluciones retail y mínimo real de envío gratis; precios vigentes de la mayoría de fichas y de Amazon (mar 2026); precios en Mercado Libre y mismo-ISBN en El Sótano. Incidencia: tres `browser.open` a fichas de producto devolvieron 429; conforme a las reglas no se reintentaron — esas fichas se documentan solo vía índice de búsqueda y el hueco queda anotado en §7.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Disponibilidad por SKU: catálogo declarado >5M títulos; 35,000–40,000 SKU/tienda (VTEX) y >75,000–100,000 referencias (Onebeat, cifras que no coinciden entre sí). Las fichas muestran solo `Availability: instock`, sin conteos por SKU ni selector público de stock por sucursal observado; la consulta inter-sucursal existe como herramienta de vendedor (VTEX Sales App). Ruptura real documentada en best sellers: *Grandeza* agotó incluso el segundo lote, con sistema que marcaba existencia fantasma. Onebeat reporta disponibilidad 62%→86% en 6 meses, pero su reducción de excedentes es inconsistente en la misma fuente (32% vs 36%) — no se adopta ninguna.

**OBSERVADO.** Salida de excedente: concepto "Oportunidades"/saldos, distribuido en todas las librerías tras el cierre de la histórica Quevedo 134 (que "dejó de ser atractiva aún con remates"); promoción por fondo editorial/temporada del 10–20% (Día de la Mujer y regreso a clases 2024), limitada por el precio único del libro. Gandhi participa en el Buen Fin 2026 (13–17 nov), sin oferta concreta localizada. No se encontró outlet web separado.

**OBSERVADO.** Mensajerías: Gandhi solo dice "distintas alianzas con empresas de mensajería", sin nombrar ninguna. No se atribuye ninguna; el "envíos por DHL" de los resultados es de Dportenis, no de Gandhi, y se deja constancia explícita de no contaminar.

**OBSERVADO.** Costos/tiempos de envío: único plazo publicado por Gandhi: 4–6 días hábiles, pero del canal mayoreo (mínimo $10,000). En fichas B2C aparece el rótulo "Envío gratis siempre a todo México" —también en ebooks—, por lo que se reporta como banner no verificado en checkout, sin tabla de costos por zona. No hay mínimo de envío gratis B2C verificado.

**OBSERVADO.** Devoluciones: política escrita dura —"Una vez entregado un pedido total o parcialmente no hay cambios ni devoluciones"— y digital sin devolución tras la descarga, salvo reembolso por licencia agotada dentro de 96 h sin haber descargado.

**OBSERVADO.** Sucursales/pickup: red de 40–50+ librerías (web propia ">40", VTEX ">50") más 250–320 quioscos; el dato central es VTEX: 70% de pedidos se recogen en tienda, 30% a domicilio, y 8 de cada 10 que vuelven compran algo más.

**MODELO PROPIO (§7, F2.6 — no son cifras de Gandhi).** Con supuestos declarados, un pedido de 1–2 libros cuesta $65–$125 en CDMX, $80–$155 en ciudad media y $120–$245 en resto/zona extendida (fulfillment + flete + provisión de incidencia); es decir, ~15% a más del 70% de un ticket de $250–$450. El pickup a $0 de flete es lo que hace viable el "envío gratis" de Gandhi.

**HIPÓTESIS.** H1 — el pickup, no el flete barato, es la ventaja logística; H2 — el "envío gratis siempre" es rótulo no verificado en checkout; H3 — la política sin devoluciones es sostenible para Gandhi por marca/precio único pero no copiable por un entrante. Cada una con falsador explícito.

**NO VERIFICADO.** Resto de la página de condiciones (líneas 169–542): la segunda lectura devolvió **429 y, por regla, no se reintentó** — pueden existir excepciones (defecto, daño, error de envío) que maticen el "sin cambios ni devoluciones". Página de ayuda de envíos B2C, mensajería(s) usada(s), tiempo de entrega B2C y de preparación de pickup, oferta concreta del Buen Fin 2026, sección "Oportunidades" vigente en web, año exacto del cierre de Quevedo 134, número exacto vigente de sucursales, y conteos de stock por SKU — todo requiere navegación en vivo / compra de prueba, fuera del alcance de este frente. Nada se publicó ni se contactó.

---

## 8. Pain points (F2.7)

**OBSERVADO.** Método: 18 búsquedas dirigidas en `browser.search` (13 nov 2026). Los 4 intentos de lectura directa (`browser.open`: política oficial, 2 artículos Merca2.0, caso Onebeat) devolvieron 429 y no se reintentaron, conforme a la regla; las citas proceden de los snippets de búsqueda, y esa limitación queda documentada en el informe.

**OBSERVADO — Política oficial vs. clientes.** La política escrita es la más restrictiva de la fase: "Una vez entregado un pedido total o parcialmente no hay cambios ni devoluciones"; en digital, sin devolución tras la descarga y reembolso solo si se agota la licencia o hay imposibilidad técnica, en 96 h. No se encontró ninguna queja pública que confirme ni desmienta su aplicación.

**OBSERVADO — Reembolsos/devoluciones.** Ninguna queja individual atribuible encontrada en 18 búsquedas; tampoco registro de Profeco/Concilianet localizado (solo un expediente IMPI, que no es queja de consumo).

**OBSERVADO — Envíos.** Promesa de 4–6 días hábiles nacionales y "envío gratis siempre" en fichas (un agregador afirma mínimo de $99 — discrepancia no verificada). Ninguna queja por retraso/extravío atribuible; el plazo de 4–6 días es una fricción potencial frente al estándar actual, marcada como inferencia.

**OBSERVADO — Cambios/atención.** Sin proceso de cambio descrito; canales oficiales: `elcliente@gandhi.com.mx`, 55 2625 0606 y 800 426 3440. Único incidente público documentado: caída del sitio en oct 2021, con pérdida reportada de listas de deseos/sesión y una promo de cumpleaños no aprovechable (Merca2.0).

**OBSERVADO — Calidad/producto.** Ninguna queja por libro dañado/defectuoso/equivocado; solo una reseña aislada positiva ("llegó rápidamente y en perfecto estado").

**OBSERVADO — Precios/promociones.** Pain point estructural por el precio único del libro (18 meses sin descuento en novedades; Gandhi cumple la ley mientras otros incumplen sin sanción, y el cliente pasa de llevar 3–4 libros a 1, según su gerente en 2011). Buen Fin 2018: bases de 16 puntos y un descuento comunicado de forma inconsistente entre web y teléfono (Merca2.0).

**OBSERVADO — Disponibilidad/stock.** La propia empresa reconoció visibilidad limitada de inventario con 75,000+ referencias (caso Onebeat); varias fichas muestran "no disponible" con aviso por correo. Sin quejas de stock encontradas.

**OBSERVADO — Puntuaciones.** No existe puntuación agregada para gandhi.com.mx: sin perfil de Trustpilot encontrado ni app con reseñas. Solo fichas por sucursal (4.2–4.5/5; bases 4–250), sin mezclar poblaciones ni promediar; procedencia exacta del agregador no identificada en el snippet.

**OBSERVADO — Lo positivo.** Valoración alta por sucursal, comentarios de experiencia en tienda ("my safe place", olor del papel, café, eventos, recomendación de libreros) y catálogo amplio.

**OBSERVADO — Separación.** Excluidos Gandi.net, Gandys, Ganga Electrónica, Grandado, Desguace Gandia, Bubok y La Gandhi Argentina; ninguna queja de Amazon/ML atribuida a Gandhi.

**INFERIDO — Hallazgo central.** Baja visibilidad de quejas, reportado como tal — no como prueba de satisfacción; probablemente las reclamaciones van por correo/teléfono/tienda, no por canales indexados.

**NO VERIFICADO (10 puntos).** Lectura completa de la política oficial y de los artículos (429); versión vigente del envío gratis; existencia de perfil Trustpilot y de app oficial; quejas en Profeco; promociones actuales Buen Fin 2026; funcionamiento del aviso de reposición; tiempos de respuesta de atención; quejas actuales en redes sociales; y procedencia exacta de las puntuaciones de ficha de lugar.

---

## 9. Verificación global (cierre de sitio)

### C1 — El −10%: estructural, no de Buen Fin (RESUELTO)
F1: en 3 de 4 fichas el precio vigente en vivo fue exactamente 10% menor que el del snippet (ej. $405 → $364.50); excepción 365 Calendars $1,499 → $899.10 (−40%). F5: el "Precio Gandhi" es precio de lista −10% exacto en 15 de 20 fichas con tachado — descuento estructural permanente. F4: las fichas muestran ~10% sin etiqueta de Buen Fin, por lo que no se atribuye. Resolución: **el −10% es estructural permanente con tachado explícito**; el Buen Fin no añadió un % legible. La excepción del −40% (365 Calendars) es un título concreto, no una mecánica general. No se afirma que el −10% sea la promo de Buen Fin.

### C2 — Sucursales: >40 (sitio) vs. >50 (VTEX) (SIN RESOLVER)
F1: «Más de 40 librerías» en el sitio vs. «más de 50» en el caso VTEX. F3: home dice «+40 librerías»; las cifras de 37 sucursales / 270 Walmart / 11 Palacio de Hierro son de ~2017. F6: horquilla realista 40–50+ librerías propias más 250–320 quioscos; las diferencias se explican por fecha (aperturas/cierres) y por si se cuentan quioscos. Resolución: se reporta el rango **40–50+**; el número exacto vigente queda NO VERIFICADO.

### C3 — Envío gratis: "siempre" (home) vs. mínimo $99 (Picodi) (CONFLICTO SIN RESOLVER)
F1, F3, F5, F6 y F7 coinciden en el rótulo: "Envío gratis siempre a todo México" en home y fichas. Picodi (tercero) dice mínimo $99. F6 lo reporta como banner no verificado en checkout, sin tabla de costos por zona; F5 reporta el conflicto sin resolver. Resolución: el rótulo oficial dice "siempre"; el mínimo de $99 es de tercero; **el mínimo real en checkout queda NO VERIFICADO** (el checkout no se recorrió). No se adopta ninguna versión como hecho.

### C4 — Buen Fin: participante confirmado, mecánica no legible (COMPATIBLE)
F1: solo «Envío gratis siempre» y la sección Buen Fin en el propio sitio; sin MSI, cupón ni % general observados. F4: participante confirmado (13–17 nov), home con "Destacados de Buen Fin", %/mecánica no legibles. F5: participante, home 13 nov 18:20 UTC con "Destacados de Buen Fin" y "Rincón de Oportunidades", sin %, cupón, MSI ni bundle oficial. F6: participa en el Buen Fin 2026, sin oferta concreta localizada. No hay contradicción: participar no implica tener la mecánica legible en texto. Se consigna así.

### C5 — Referencias: 35,000–40,000 SKU/tienda vs. >75,000–100,000 (CIFRAS EN CONFLICTO, SIN ADOPTAR)
F6: 35,000–40,000 SKU/tienda (VTEX) y >75,000–100,000 referencias (Onebeat, cifras que no coinciden entre sí). Onebeat reporta disponibilidad 62%→86% en 6 meses, pero su reducción de excedentes es inconsistente en la misma fuente (32% vs 36%) — no se adopta ninguna. F7: la propia empresa reconoció visibilidad limitada de inventario con 75,000+ referencias (caso Onebeat). Resolución: se consignan ambas cifras con su fuente; ninguna se adopta como hecho. El catálogo declarado (>5M títulos) es de la home y es otra cifra distinta (títulos, no referencias).

### C6 — Política sin devoluciones: texto duro, excepciones no leídas (MATIZADO)
F6 y F7 coinciden en el texto: "Una vez entregado un pedido total o parcialmente no hay cambios ni devoluciones"; digital sin devolución tras la descarga, salvo reembolso por licencia agotada dentro de 96 h sin haber descargado. F6 advierte: el resto de la página de condiciones (líneas 169–542) devolvió 429 y no se reintentó — pueden existir excepciones (defecto, daño, error de envío) que maticen el "sin cambios ni devoluciones". Resolución: el texto duro está observado; **las excepciones quedan NO VERIFICADAS**. No se encontró ninguna queja pública que confirme ni desmienta su aplicación (F7).

### C7 — Agentic: 403, no ausencia (CONFIRMADO)
F2: `/agents.md` y `/.well-known/ucp` devolvieron HTTP 403 (no prueba existencia ni ausencia); robots.txt no menciona crawlers de IA ni `llms.txt`; el catálogo JSON y el GraphQL público están explícitamente permitidos a crawlers. F3: `llms.txt` no verificado (429); robots.txt sin reglas para crawlers de IA. Resolución: el estado agentic es **DESCONOCIDO**, no ausente. No se afirma que no exista.

### C8 — Mensajerías: ninguna nombrada (CONSISTENTE)
F6: Gandhi solo dice "distintas alianzas con empresas de mensajería", sin nombrar ninguna; el "envíos por DHL" es de Dportenis, no de Gandhi. F2, F5 y F7 no nombran mensajería. Consistente: ninguna mensajería se atribuye a Gandhi.

### C9 — Contenido editorial: fino en el dominio, fuera en satélites (COMPATIBLE)
F3: intros de 2 párrafos en páginas `/t/`; la recomendación real vive fuera (podcast, Tinta, Lee Más, mascultura.mx); no hay blog en gandhi.com.mx ni club de lectura propio. F4: descubrimiento en redes + contenido propio (Revista Lee+, Radio Gandhi, podcast, mascultura.mx), comunidad en eventos y clubes. F1: Tinta, Radio Gandhi y Eventos son navegación de primer nivel, contenido no leído. No hay contradicción: el contenido existe, pero vive fuera del dominio o en audio. Se consigna así.

### C10 — TikTok 430.9k: cifra en caché de ~183 días (MATIZADO)
F4: TikTok @librerias.gandhi con 430.9k seguidores y 2.0m Me gusta — única cifra devuelta por fuente legible, aunque en caché de ~183 días. Se consigna con su antigüedad; no es una cifra fresca del 13 nov. Instagram @librerias_gandhi solo corroborado por mención de terceros, sin lectura de perfil; Facebook existe (probado por pauta) pero sin datos.

---

## 10. Qué quedó sin verificar (consolidado)

1. **%/cupón/MSI/bundle específico de Buen Fin 2026**; contenido y precios del Rincón de Oportunidades y de "Destacados de Buen Fin"; valor del Punto Gandhi y montos Página 1 vigentes 2026.
2. **Mínimo real de envío gratis en checkout** ("siempre" vs. $99; ver C3); política de envíos/devoluciones retail; tiempo de entrega B2C y de preparación de pickup.
3. **Número exacto vigente de sucursales** (40–50+; ver C2); conteos de stock por SKU; total de URLs del sitemap (≥1.183 observados, total no afirmado).
4. **Excepciones a la política sin devoluciones** (líneas 169–542 con 429; ver C6); funcionamiento del aviso de reposición; tiempos de respuesta de atención.
5. **Checkout retail completo** (métodos de pago en pantalla, MSI vigentes, SPEI/OXXO/Mercado Pago/wallets, adquirente); contenido de la home y banners de Buen Fin; buscador.
6. **JSON-LD literal de producto y `llms.txt`** (429); vigencia del robots.txt (copia de mayo 2026); tema y apps VTEX; GA/GTM, píxeles, chat, email, proveedor de reseñas.
7. **Seguidores de Instagram y Facebook**; cifra de 1.6M en X (solo espejo de terceros); suscriptores de YouTube; ritmo/captions de IG/FB; detalle de la promo Buen Fin en redes; precio/planes de Tinta y existencia de la app; programa formal de embajadores; Threads/Pinterest/LinkedIn.
8. **Posiciones, tráfico, volúmenes y backlinks**; Biblioteca de Anuncios de Meta / Google Ads; premios; reseñas agregadas; existencia de perfil Trustpilot y de app oficial; quejas en Profeco; quejas actuales en redes sociales.
9. **Precios vigentes de la mayoría de fichas y de Amazon** (crawl mar 2026); precios en Mercado Libre y mismo-ISBN en El Sótano; precios en tienda física; reseñas reales (JS).
10. **Oferta concreta del Buen Fin 2026**; sección "Oportunidades" vigente en web; año exacto del cierre de Quevedo 134; contenido de Tinta/Radio/Eventos y clubes; registro oficial en elbuenfin.org.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **El descuento estructural con tachado es la promo.** El −10% permanente con tachado explícito ($349→$314.10) es más creíble que un % de Buen Fin que no se puede leer. Para la empresa nueva: si hay descuento estructural, que tenga tachado visible y que sea el mismo siempre; el cliente lo verifica en dos pestañas y el que no tiene tachado pierde.
2. **El pickup es la ventaja logística, no el flete barato.** 70% de pedidos se recogen en tienda; 8 de cada 10 que vuelven compran algo más. El modelo de F6 lo cuantifica: el pickup a $0 de flete es lo que hace viable el "envío gratis". Para la empresa nueva sin tiendas: el equivalente es el punto de entrega (locker, aliado, showroom) — no prometer "envío gratis siempre" sin un pickup que lo sostenga.
3. **"Envío gratis siempre" sin mínimo verificado es un rótulo, no una política.** La home dice "siempre" y un agregador dice $99; el checkout no se verificó. Para la empresa nueva: publicar el mínimo real y cumplirlo; un rótulo que el checkout desmiente es la primera queja.
4. **La política sin devoluciones solo la sostiene la marca.** "Una vez entregado no hay cambios ni devoluciones" es la más restrictiva de la fase y no generó quejas públicas — porque Gandhi tiene 55 años de marca y el precio único del libro. Para la empresa nueva: no copiarla. Un entrante sin marca que no acepta devoluciones no tiene segunda compra.
5. **El contenido puede vivir fuera del dominio — pero entonces el dominio no cita.** Podcast, Tinta, Lee Más, mascultura.mx: la recomendación real está en audio y en satélites, y el dominio solo tiene intros de 2 párrafos. Para la empresa nueva: si el contenido vive fuera, que el dominio lo cite y lo enlace; si no, el motor de IA cita el satélite, no la tienda.
6. **La comunidad es el embudo, no el anuncio.** TikTok 430.9k con humor pop y CTA a tienda, clubes co-moderados por comunidades lectoras, UGC orgánico de booktokers: Gandhi no compra embajadores, los clubes ya existen. Para la empresa nueva: buscar las comunidades que ya hablan del producto y co-moderar con ellas, antes de pagar pauta.
7. **VTEX es el techo SaaS de la fase.** OMS + Sales App + pasillo infinito + carrito unificado web/tienda/teléfono es la operación que El Sótano (PHP propio) no tiene y que F4T3 (Shopify) puede alcanzar por etapas. Para la empresa nueva: empezar en Shopify, con VTEX como referencia de a dónde se llega cuando el omnicanal es el negocio, no un canal más.

---

## Fuentes

- https://gandhi.com.mx/ — home (lectura 13 nov 2026; «Envío gratis siempre a todo México»; «Destacados de Buen Fin»)
- https://www.gandhi.com.mx/mayoreo — mayoreo (leída completa, 13 nov 2026): >5M títulos, tarifas preferenciales, 4–6 días nacionales, mínimo mayoreo $10,000, >40 librerías
- https://gandhi.com.mx/robots.txt — rutas VTEX (`/_v/public/graphql/v1`, `/api/vtexid`, `/api/catalog_system`, `vtex.store@2.x`); copia del 6 may 2026
- API pública de catálogo VTEX (JSON en vivo): "La conquista perfecta", SKU 8126561, $350.10, `accountName: "gandhi"`, imágenes en `gandhi.vteximg.com.br`
- Fichas con precio (13 nov 2026, vigentes día 1 Buen Fin): HP Half-Blood Prince $489→$396, A Little Princess $58.50, Meditations $99.90, Count And Write $155.70; 42 fichas en total en F5
- https://www.tiktok.com/@librerias.gandhi — 430.9k seguidores, 2.0m Me gusta (caché ~183 días)
- Caso oficial VTEX (OMS + Sales App, omnicanal, 50+ tiendas; 70% pickup, 30% domicilio; 8 de cada 10 que vuelven compran algo más)
- Caso Onebeat (disponibilidad 62%→86% en 6 meses; reducción de excedentes 32% vs. 36% inconsistente)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/gandhi/`, 13 nov 2026)
