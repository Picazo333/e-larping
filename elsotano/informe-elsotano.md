# Informe consolidado — El Sótano · Fase 2, WO-E-LARPING

- **Sitio:** https://elsotano.com/ (marca visible: Librerías El Sótano; librería, cadena mediana mexicana fundada en 1952)
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

**OBSERVADO.** El Sótano es una librería mexicana fundada en 1952 (cadena mediana; el contraste útil de esta oleada es Gandhi, el gigante omnichannel) que vende en https://elsotano.com/ sobre **desarrollo propio en PHP, sin SaaS** — no es Shopify (`/products.json` → 404) ni muestra marcadores de WooCommerce/Magento/PrestaShop: cookie `PHPSESSID`, `Expires: 19 Nov 1981` típico de `session_start()`, rutas a medida en español (`/cesta/`, `/libros-de/`, `/tagus/`), sitemaps en `/seo/` y portadas claveadas por ISBN — con origen oculto tras Cloudflare (`Server: cloudflare`, `CF-RAY`, `cf-cache-status: DYNAMIC`). Es, junto con Cyberpuerta (OXID), una de las dos plataformas propias de la fase.

**El negocio en una frase:** una librería de catálogo con ISBN y flujo de compra en 4 pasos, descuentos por título (15/20/25% verificados por aritmética en Derecho; −10% integrado en 12/29 fichas muestreadas, sin tachado visible), **disponibilidad débil en la muestra** (10/29 en stock, 34%; 0 de 12 títulos de ficción en inglés disponibles, incluidos bestsellers BookTok como *The Housemaid*) y **ausencia total de Buen Fin en su propio sitio el primer día de la campaña** — aparece como participante solo en listados de terceros (Cazaofertas; Picodi lista 30% en seleccionados, 20% Sexto Piso, 10% ISEF y envío gratis >$450, todo de agregador, no confirmado en canal propio).

**Tres rasgos que la distinguen:**
1. **El descuento es por título, no de campaña.** Sin tachado visible en la extracción: el −10% ya viene integrado en el precio (ej. $256.50 = $285 −10%) y los descuentos de Derecho se verifican por aritmética (400→300, 99→84.15, 100→80, más un par $85→$25.50, −70%). El precio único del libro (Ley del Libro) limita la promo: la palanca es el título, no el porcentaje general.
2. **La disponibilidad es el hueco.** Tres frentes independientes reportan muestras con mucho OutOfStock (F1: 19/24 fichas vía snippets; F3: 7/11; F5: 10/29 en stock) — todas marcadas como muestra, no como tasa del catálogo, pero el patrón es consistente y la ficción en inglés está a cero.
3. **Cero quejas públicas y cero presencia social verificable.** En 20 búsquedas no apareció ni una sola queja individual atribuible a elsotano.com (baja visibilidad, no satisfacción probada); y aunque el aviso legal declara 5 redes (YouTube, Facebook, Instagram, X, TikTok), **ningún handle oficial pudo verificarse** desde su web ni desde búsqueda pública.

**Pista previa corregida:** «cadena mediana de libros, fichas con precio MXN y stock, rastreo 1–2 días, 15+ sucursales». Verificado: fichas con precio y stock sí; rastreo 1–2 días no se pudo verificar por ficha (F6 no leyó ninguna ficha individual); **el "15+" no se confirmó** — 14 según AnyFlip vs. "más de 15" en entrevista de 2021 (ver §9, C2).

---

## 1. Qué es El Sótano

**OBSERVADO.** Librería mexicana fundada en 1952 (historia verificable en fuentes oficiales: ELEM y fichas SIC Cultura para Coyoacán, Puebla e Insurgentes). Cadena mediana; el contraste de esta oleada es Gandhi (gigante omnichannel). Tienda virtual desde agosto de 2002 (AnyFlip, fuente secundaria).

**OBSERVADO.** Catálogo claveado por ISBN, con flujo de compra en 4 pasos (buscar → carrito → pago → envío/recolección en sucursal). Teléfono 800 276 8266; correo `atencionaclientes@elsotano.com`; cancelaciones por `ventas@elsotano.com`. Filosofía declarada: "Servicio al pie de la letra".

**OBSERVADO.** Sucursales: 5 ubicaciones confirmadas con dirección (Coyoacán–Quevedo 209, Roma/Insurgentes, Puebla, Guadalajara/Zapopan, Querétaro); pickup confirmado en la home ("recolección en algunas sucursales"), pero el detalle "solo Coyoacán e Infantil y Juvenil, sin costo" es solo de tercero. Testimonios de empleados en Indeed confirman almacén con picking/packing para venta en línea.

---

## 2. Front end (F2.1)

**OBSERVADO.** Plataforma: sitio a medida, no Shopify (URLs propias `/libro-<slug>-<id>` y `/libros_tema-<slug>-<id>`, assets `/assets/`, portadas por ISBN en `/sotano_covers/`). Stack/hosting quedan para el frente back end.

**OBSERVADO.** Home: extracción muy parcial (44 líneas, casi todo imágenes). Carrusel de 5 banners (preventa, aniversario, Isabel Allende, «El príncipe de la noche», «Más que rivales» — por nombre de archivo), rejilla de 14 portadas, bio editorial de Sarah J. Maas con las sagas ACOTAR y Ciudad Medialuna, sección «Recomendaciones» y «cómo comprar» en 4 pasos (envío nacional/internacional + recolección en sucursal).

**OBSERVADO — Buen Fin: ausencia total observada.** Ninguna página leída menciona Buen Fin, MSI ni envío gratis el primer día de la campaña; contraste fuerte con F4T3. Los descuentos visibles son por título, no de campaña.

**OBSERVADO.** Catálogo (Derecho): filtros laterales Tipo (Libros / Niños / Impresión Bajo Demanda) y 29 temas; «1–18 de más de 300 resultados»; tarjetas con botón «Agregar»; descuentos 15/20/25% verificados por aritmética (400→300, 99→84.15, 100→80) más un par $85→$25.50 (−70%); sección «Nuevos productos» con sello «Disponible».

**OBSERVADO.** Fichas (3 lecturas directas): Derecho procesal mercantil $495 InStock; Juicio sucesorio testamentario 4 $380 InStock; Archer's Voice $562.50 OutOfStock. Estructura: tabla ISBN/editorial/tema/subtema/páginas/año/medidas + sinopsis + contacto (800 276 8266, atencionaclientes@elsotano.com) + JSON-LD precio/disponibilidad. La ficha no marca el agotado en texto visible: solo el JSON-LD lo declara.

**OBSERVADO.** Stock (muestra sesgada): 19 de 24 fichas vía snippets figuran OutOfStock — reportado como muestra, no como tasa del sitio; el frente de precios/logística debe verificar si es fondo descatalogado o problema real (ver §9, C3).

**OBSERVADO.** Carrito/checkout: widget persistente observado («0 productos, Subtotal: $0.00») y «Agregar» por tarjeta; checkout, métodos de pago y URL del carrito sin verificar.

**OBSERVADO.** Sucursales: en el sitio solo la frase de recolección; direcciones (Quevedo 209 Coyoacán, Insurgentes Sur 214, Puebla) solo por fuentes externas (SIC Cultura); el «15+ sucursales» del encargo no se confirmó.

**NO VERIFICADO.** Ficha de Trilogía Africanus por lectura directa — devolvió **429 y no se reintentó** (regla del proyecto; su precio $899 solo por snippet); header/menú/buscador/footer; checkout, métodos de pago, MSI y envío; URL del carrito; ordenación y resto de filtros; cualquier promo/página de Buen Fin; reseñas; blog; página de sucursales del sitio y total de sucursales; vista móvil; rendimiento medido; títulos completos de la rejilla de la home y de «Nuevos productos»; significado del sufijo «pd.»; total del catálogo.

**Anomalía registrada (A1, F2.1):** en dos tarjetas del listado la etiqueta de descuento no cuadra con el par de precios extraído; inferido como desalineamiento de la extracción (los 6 pares verificables cuadran exactos), no como error de precios del sitio.

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** **Plataforma: desarrollo propio sobre PHP, sin SaaS.** No es Shopify (`/products.json` → 404) ni muestra marcadores de ningún SaaS. Evidencia: cookie `PHPSESSID`, `Expires: 19 Nov 1981` típico de `session_start()`, rutas a medida en español (`/cesta/`, `/libros-de/`, `/tagus/`), sitemaps en `/seo/` y portadas claveadas por ISBN. WooCommerce/Magento/PrestaShop: sin evidencia observada.

**OBSERVADO.** Hosting/CDN: origen oculto tras Cloudflare — `Server: cloudflare`, `CF-RAY` (PoPs LAX/SEA), `cf-cache-status: DYNAMIC`, `/cdn-cgi/` en robots.txt y NEL. Mismo piso de CDN que F4T3, pero protegiendo un origen propio en vez de una tienda SaaS. IP y hosting de origen no verificables.

**OBSERVADO.** Front-end: banners WebP fechados (9 y 13 nov 2026, contenido fresco), iconos de flujo de compra en 4 pasos y teléfono 800 276 8266. Framework JS/tema no afirmable: el lector de texto no expone el HTML fuente. Hipótesis débil: MPA clásico con render en servidor.

**OBSERVADO.** Catálogo/SEO: 7 sub-sitemaps (`/seo/sitemap1-7.xml`); robots.txt bloquea rutas funcionales a todos y **bloquea totalmente a Amazonbot y a Awario**, pero no menciona crawlers de IA (no bloqueados por defecto). Catálogo claveado por ISBN.

**OBSERVADO.** Pagos: no observables en el propio sitio (checkout inaccesible sin carrito/sesión). Única lista disponible es secundaria (Picodi): tarjeta crédito/débito, Mercado Pago, depósito/transferencia y pago en +3,000 tiendas de conveniencia; el aviso de privacidad confirma "datos bancarios para pago" y "convenios para el cobro" sin nombrar pasarela. MSI, PayPal y pasarela concreta quedan sin verificar.

**OBSERVADO.** Terceros: solo Cloudflare es confirmable. Analítica, píxeles, chat, email y reseñas: no observables (el lector no expone scripts ni HTML fuente); la ausencia en lo leído no prueba ausencia en el sitio.

**OBSERVADO — Comercio agentic: en cero.** `/agents.md` y `/.well-known/ucp` devuelven 404, sin MCP visible. Pero los crawlers de IA no están bloqueados: un agente puede leer el catálogo público, aunque no puede comprar.

**NO VERIFICADO.** Contenido de los 7 sub-sitemaps (la lectura devolvió **429** y no se reintentó, conforme a las reglas); endpoints `/wp-json/`, `/graphql` y `/llms.txt` no probados por el mismo límite; métodos de pago reales, MSI y pasarela; analítica/píxeles/chat/email/reseñas; hosting de origen, framework PHP concreto, TLS y PCI; número exacto de sucursales (14 según AnyFlip vs. 15+ del encargo); contenido real de `/facturacion` y `/tagus/`.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Visibilidad en buscadores: la marca resuelve bien (home y sucursales arriba para "El Sótano librería"), pero en genérico ("comprar libros en línea México") es invisible como tienda: solo aparece citada en un listicle de terceros (rastrearpedido.com.mx, tras Amazon y Gandhi), mientras Buscalibre y Péndulo ocupan los resultados. `site:elsotano.com` devuelve casi solo fichas de producto, rastreadas hace 1–12 días; en la muestra de 11 fichas, 7 marcaban OutOfStock (muestra sesgada, no tasa del catálogo).

**OBSERVADO.** robots.txt (lectura directa): bloquea para Googlebot y `*` las rutas `/noticias/`, `/categoria/`, `/autor/`, `/editorial/` y `/libros-de/`, además de `/buscar`, `/cesta/` y `/favoritos/`; bloqueo total solo a `Amazonbot` y bots de Awario. No nombra a ningún crawler de IA (GPTBot, ClaudeBot, PerplexityBot…), que cae bajo `*`: puede rastrear el sitio salvo esas rutas.

**OBSERVADO.** Sitemap: índice con 7 sub-sitemaps (`/seo/sitemap1.xml` … `sitemap7.xml`); conteos no obtenidos (429, ver abajo).

**OBSERVADO.** Datos estructurados: JSON-LD `Product.offers` observable en ficha (nombre, ISBN, autor, editorial, precio MXN, InStock/OutOfStock; ej. verificado *Los 5 niveles de liderazgo*, $382.50, OutOfStock). Es su activo estructurado más sólido; no se pudo confirmar ni descartar `Book`/`Organization`/`FAQ` en el `<head>`.

**OBSERVADO.** Contenido editorial: ausencia notable — `site:elsotano.com noticias` = 0 resultados, coherente con el bloqueo de `/noticias/`; la home solo tiene biografías de autora, "Recomendaciones" y banners de Buen Fin (13 nov). Sin blog, guías ni comparativas indexadas.

**OBSERVADO.** Autoridad externa: historia verificable en fuentes oficiales (fundada 1952, ELEM y fichas SIC Cultura para Coyoacán, Puebla e Insurgentes); "más de 15 sucursales" es cifra de 2021 (entrevista a Rodrigo López). Reseñas por sucursal en fichas de buscador: Coyoacán 4.0★ (2 reseñas), Querétaro 4.3★ (64), Zapopan 4.5★ (64). Picodi lista cupón 30% Buen Fin (vence 17/11/26) y afirma "mayor catálogo de México" sin verificación independiente.

**OBSERVADO.** Pauta observable: ninguna URL de elsotano.com con UTM encontrada (el método sí detectó UTM/gclid en Buscalibre en la misma tanda); no se afirma que no paute.

**INFERIDO.** Citabilidad GEO: a favor, fichas con ISBN/autor/editorial/precio/stock legibles por máquina + historia institucional citable; en contra, sin contenido editorial ni rutas temáticas indexables, descripciones tomadas de la editorial (a menudo en inglés) y fichas sin stock en la muestra. Citable como tienda e institución, no como autoridad que recomienda.

**NO VERIFICADO.** Conteos de los 7 sub-sitemaps y total del catálogo — la lectura de `sitemap1.xml` devolvió **429** y no se reintentó. La lectura de `/noticias/` devolvió el mismo **429**; no se pudo comprobar si la sección existe. Posiciones, tráfico y volúmenes de ninguna keyword; número actual de sucursales y tamaño actual del catálogo; JSON-LD completo del `<head>`; pauta pagada (Biblioteca de Anuncios de Meta / Google Ads Transparency, requiere navegador en vivo); handles y seguidores en redes sociales (búsqueda específica devolvió 0 resultados); ratings en Google Maps en vivo; claim "mayor catálogo de México".

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Cuentas oficiales: el aviso legal de El Sótano declara las 5 redes (YouTube, Facebook, Instagram, X, TikTok), pero **ningún handle oficial pudo verificarse** desde su web ni desde búsqueda pública. El único canal atestiguado por nombre es Facebook "Librerías El Sótano" (boletín CANIEM 2021), sin URL verificable. Dos homónimos peligrosos descartados con evidencia: @elsotanomx (foro musical, Monterrey) y @el_sotano1 (ropa, Guadalajara).

**OBSERVADO.** Contenido: sin feed observable en ninguna red, así que no se inventaron ritmo ni captions. Lo observable es la home del 13 nov: preventa de tazas, aniversario, Isabel Allende, *El príncipe de la noche*, *Más que rivales*, y fantasía/romantasy (ACOTAR, Ciudad Medialuna) como escaparate dominante.

**OBSERVADO.** Embudo: omnicanal clásico y bien documentado: compra web en 4 pasos (buscar → carrito → pago → envío/recolección en 15+ sucursales), retención por Boletín de Novedades, alertas de disponibilidad, wishlist y programas de lealtad; teléfono 800 276 8266. Amazon es a la vez su mayor cliente y su mayor competidor (director Pedro López, Amazing Retail Podcast, ago 2026).

**OBSERVADO.** Buen Fin 2026: participación confirmada por listado de Cazaofertas (13–17 nov); Picodi lista 30% en seleccionados, 20% Sexto Piso, 10% ISEF y envío gratis >$450 MXN, pero todo es de agregador, no confirmado en canal propio.

**OBSERVADO.** Colaboraciones: sin embajadores, drops ni UGC incentivado verificables; solo presencia orgánica en contenido de booktubers (que enlazan a elsotano.com como punto de compra) y el caso del libro nacido en TikTok *Las Aventuras de Pori*, disponible en sus tiendas.

**NO VERIFICADO.** Handles/URLs y seguidores de las 5 redes; feed, formatos, ritmo y captions; bio/link en bio; contenido de Buen Fin en redes oficiales y detalle oficial de la promo; club de lectura, agenda de eventos 2026 y participación en FIL Guadalajara 2026; colaboraciones pagadas/drops; vigencia del WhatsApp de Monterrey (2021); tienda seller en Amazon/ML. Además: dos lecturas con `browser.open` devolvieron 429 (aviso legal y Picodi) y no se reintentaron; sus contenidos se citan solo desde fragmentos de búsqueda.

---

## 6. Precios (F2.5)

**OBSERVADO.** Fichas (29, 13 nov 2026): precios de $54 a $2,879 MXN, mediana $495. Patrón de −10% ya integrado en 12/29 fichas (casi todas Grand Central/Hachette, ej. $256.50 = $285 −10%), sin ningún precio tachado visible en la extracción. Disponibilidad débil: 10/29 en stock (34%); 0 de 12 títulos de ficción en inglés disponibles, incluidos bestsellers BookTok como *The Housemaid*.

**OBSERVADO.** Promociones / Buen Fin: El Sótano aparece como participante en la lista de terceros Cazaofertas, pero la homepage del 13 nov no menciona el Buen Fin en su texto extraíble (banners de aniversario, Isabel Allende, preventa) y las fichas del 11–13 nov muestran precios habituales, sin descuento adicional. Cupón vigente no verificado; precedente vencido CRAFTERS10 (10% acumulable, abr–may 2025). Envío gratis >$450 solo en agregador tercero.

**OBSERVADO.** Costos adicionales: paqueterías Estafeta/FedEx/Borzo y recolección en sucursal sin costo (tercero + homepage); costo exacto de envío, plazo de entrega, MSI, formas de pago completas y devoluciones sin verificar — no se llegó a checkout (sin carrito, por método).

**OBSERVADO.** Comparación mismo título: único comparable mismo-ISBN: *The Housemaid* (9781538742570) — El Sótano $256.50 sin stock vs El Péndulo $342 en stock (−25%, pero no comprable). Gandhi no tuvo ficha del mismo ISBN, pero sí exhibe su −10% con tachado explícito ($349→$314.10), mecánica que El Sótano no muestra.

**INFERIDO.** Efecto de espera (hipótesis): no vale esperar si el título está en stock — el −10% estructural ya está aplicado y el riesgo es el quiebre; solo valdría vigilar 24–48 h para compras de 2+ títulos por si aparece un 2×1. El sorteo SAT (compras ≥$250 con tarjeta) empuja a canasta, no a título suelto.

**NO VERIFICADO.** Registro oficial en elbuenfin.org; mecánica/% propio de Buen Fin; cupón de noviembre (la página de Picodi devolvió 429 y no se reintentó, por regla); costo y plazo de envío, umbral oficial de envío gratis, MSI, devoluciones; precios vigentes en Amazon/Gandhi del mismo ISBN; liquidación/outlet; ficción en español (la muestra quedó sesgada a inglés, escolares y derecho por cobertura del índice); y si los banners gráficos de la homepage anuncian Buen Fin.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Disponibilidad por SKU: la home de elsotano.com estaba activa (13 nov 2026) y muestra catálogo con ISBN y flujo de compra en 4 pasos, pero la lectura de texto no expone conteos de stock ni etiquetas "agotado". No se pudo leer ninguna ficha individual: las búsquedas no devolvieron URLs de ficha de elsotano.com.

**OBSERVADO.** Salida de excedente: no hay sección de outlet/remate/liquidación localizable. Lo observado es promoción por curaduría editorial (30% títulos seleccionados, 20% Sexto Piso, 10% ISEF, según Picodi), Buen Fin 2026 (13–17 nov), aniversario y preventas.

**OBSERVADO.** Mensajerías: la única fuente que nombra carriers es Picodi (tercero): Estafeta, FedEx y Borzo (CDMX). No verificado en fuente primaria; no se atribuye ninguna mensajería como hecho confirmado de El Sótano. La home solo dice "envíos nacionales e internacionales".

**OBSERVADO.** Costos y tiempos: único umbral encontrado: envío gratis >$450 MXN (Picodi, no verificado en primaria). No se localizó ninguna tarifa en MXN ni plazo en días publicado.

**OBSERVADO.** Devoluciones: texto solo en Picodi (no verificado en primaria): reclamo en 5 días hábiles, reembolso en 10–15 días hábiles a cuenta del titular, guía gratis solo por defecto/daño, cliente paga la guía por error de compra; cancelación previa al envío vía ventas@elsotano.com.

**OBSERVADO.** Sucursales y pickup: 5 ubicaciones confirmadas con dirección (Coyoacán–Quevedo 209, Roma/Insurgentes, Puebla, Guadalajara/Zapopan, Querétaro); pickup confirmado en la home ("recolección en algunas sucursales"), pero el detalle "solo Coyoacán e Infantil y Juvenil, sin costo" es solo de tercero. Testimonios de empleados en Indeed confirman almacén con picking/packing para venta en línea.

**MODELO PROPIO (§7, F2.6 — no son cifras de El Sótano).** Supuestos declarados: $118–$248 MXN de costo logístico por pedido vendido (flete terrestre $90–$180 + empaque $10–$25 + pick/pack $15–$30 + prorrateo de devoluciones 2–5%). El flete pesa 20–60% de un ticket de $300–$600: el envío gratis solo funciona como incentivo de cesta de 2 libros, y un retorno equivale al margen de 1–2 pedidos.

**HIPÓTESIS.** H1 fulfillment centralizado (no ship-from-store), H2 envío gratis de $450 como incentivo de cesta, H3 política restrictiva de devoluciones como protector de margen — cada una con su falsador explícito.

**NO VERIFICADO.** Fichas de producto (precio/stock/"agotado") y rastreo 1–2 días; mensajerías en fuente primaria; tarifas y plazos reales de envío; texto oficial de devoluciones; total de sucursales ("15+" del brief no verificado); qué sucursales ofrecen pickup y plazos de recogida; existencia de la sucursal "Infantil y Juvenil"; destino del excedente; detalles del envío internacional; tasa real de devoluciones y ticket medio. No hubo ningún 429; nada se publicó ni se contactó. La verificación pendiente requeriría la página de ayuda/términos de elsotano.com o un checkout real (tarea de navegador en vivo, fuera de alcance).

---

## 8. Pain points (F2.7)

**OBSERVADO.** **Hallazgo central: en 20 búsquedas no apareció ni una sola queja individual atribuible a elsotano.com** (reembolso, envío, daño, stock, atención). Se reporta como **baja visibilidad pública de quejas, NO como satisfacción probada**; las quejas podrían vivir en correo/teléfono/DM, canales no indexables.

**OBSERVADO — Reembolsos/devoluciones.** Política (resumen secundario de Picodi): reembolso solo al titular, por escrito, en ~10–15 días hábiles; defectos/daños a reportar en 5 días hábiles con guía gratuita; error de compra en 5 días hábiles con guía a cargo del cliente; si ya se envió, se reembolsa solo el producto, sin envío. Ninguna queja de cliente observada sobre esto.

**OBSERVADO — Envíos.** Gratis desde $450 MXN (Picodi nov 2026; $389 en promo de abril 2025, discrepancia sin resolver — ver §9, C1); Estafeta/FedEx/Borzo y recogida solo en Coyoacán e Infantil y Juvenil; entrega lun–vie 10:00–18:00 h. Ninguna queja por retraso/pérdida encontrada.

**OBSERVADO — Cambios.** No hay cambio por gusto aplicable a libros; solo reposición por defecto y devolución por error de compra (ver arriba). Sin quejas públicas.

**OBSERVADO — Atención al cliente.** Canales públicos 800 276 8266, `atencionaclientes@elsotano.com`, cancelaciones por `ventas@elsotano.com`; filosofía "Servicio al pie de la letra". Búsqueda en Facebook/X: 0 resultados. Sin quejas observadas.

**OBSERVADO — Calidad/producto.** Ninguna queja por libro dañado, roto o equivocado. Activo: curaduría y fondo editorial (Siglo XXI, Era, FCE).

**OBSERVADO — Precios/promociones.** Nivel "moderate" en fichas; promos 30% seleccionados, 20% Sexto Piso, 10% ISEF; tesis UNAM 2015 documenta descuentos agresivos vs. Gandhi en 1986 y la Ley del Libro (precio único) como límite estructural. Ninguna queja por precio/cupón.

**OBSERVADO — Disponibilidad/stock.** Algunas fichas marcan OutOfStock ($320, $240, $399 MXN), sin medir proporción del catálogo ni inventar porcentajes; ninguna queja por cobro sin stock.

**OBSERVADO — Puntuaciones (sin mezclar poblaciones).** Picodi 3.97/5 (636 ratings, base sin explicar); sucursales físicas Quevedo 4.0 (n=2, no utilizable), Zapopan 4.5 (64), Puebla 4.4 (126), Querétaro 4.3 (64), Juárez 4.0 (34). **Sin perfil de Trustpilot ni app propia localizados**; las búsquedas devolvieron solo homónimos (videojuego *Slendrina: The Cellar*, novela *El sótano* en Goodreads, bar y obra de teatro homónimos, fichas de Amazon) — todos descartados explícitamente. Indeed 3.2/5 (50 evaluaciones) es de **empleados**, no de clientes, y se trata aparte.

**OBSERVADO — Lo positivo.** "Quizás mi librería favorita" (Querétaro), sección manga/cómic e infantil, "por fin encontré las 2 novelas que buscaba" (Juárez). El activo es físico/curatorial, no digital.

**NO VERIFICADO.** La política oficial íntegra en elsotano.com — `browser.open` a Picodi y a elsotano.com devolvió **429 en ambos casos y no se reintentó** por regla, por lo que la política se cita desde snippets de Picodi; umbral actual de envío gratis; existencia de perfil en Trustpilot (búsqueda interna no hecha); texto completo y distribución por estrellas de las reseñas de Google Maps por sucursal; quejas en grupos cerrados/DM, Profeco/ConciliaNET y app móvil propia.

**INFERIDO — Implicación F7.** La oportunidad para el dropshipping es de fricción, no de escándalo — reembolso en 3–5 días, devolución gratuita y disponibilidad verificada antes del cobro, no explotar un descontento público que no existe en las fuentes consultadas.

---

## 9. Verificación global (cierre de sitio)

### C1 — Envío gratis: >$389 (abr 2025) vs. >$450 (nov 2026) (DISCREPANCIA SIN RESOLVER)
F5: el umbral reportado cambia según la fuente y la fecha: >$389 en abril 2025 (cupón Crafters, documento oficial del aliado) vs. >$450 en noviembre 2026 (Picodi, tercero). F6 y F7 coinciden en >$450 (Picodi, nov 2026). F5 lo infiere: el envío gratis es una palanca promocional variable, no una política fija publicada. Resolución: se consignan ambas cifras con su fecha y fuente; el umbral vigente debe confirmarse en checkout. No se elige una en silencio.

### C2 — Sucursales: 14 vs. 15+ (SIN RESOLVER)
F2: 14 sucursales según AnyFlip (fuente secundaria); el encargo indica 15+. F3: "más de 15 sucursales" es cifra de 2021 (entrevista a Rodrigo López). F1: el "15+" no se confirmó en el sitio. Resolución: el número actual de sucursales queda NO VERIFICADO; se consignan 14 (AnyFlip) y "más de 15" (2021) como cifras en conflicto. F6 confirmó 5 ubicaciones con dirección, no el total.

### C3 — Disponibilidad: tres muestras con mucho OutOfStock (PATRÓN CONSISTENTE, TASAS NO ADOPTADAS)
F1: 19/24 fichas vía snippets OutOfStock. F3: 7/11 fichas OutOfStock. F5: 10/29 en stock (34%); 0 de 12 títulos de ficción en inglés disponibles. Los tres frentes marcan sus cifras como muestra sesgada, no como tasa del catálogo. Resolución: el patrón (disponibilidad débil, sobre todo en ficción en inglés) es consistente entre frentes; ninguna tasa se adopta como tasa del catálogo. Queda como hallazgo de muestra, no como hecho de inventario.

### C4 — Buen Fin: participante en terceros, ausente en el propio sitio (COMPATIBLE)
F1: ausencia total observada en las páginas leídas (ninguna menciona Buen Fin, MSI ni envío gratis el primer día). F4: participación confirmada por listado de Cazaofertas (13–17 nov); Picodi lista 30%/20%/10% y envío gratis >$450. F5: aparece como participante en Cazaofertas, pero la homepage del 13 nov no menciona el Buen Fin en su texto extraíble y las fichas del 11–13 nov muestran precios habituales. No hay contradicción: estar listado como participante no implica tener la promo visible en el texto del propio sitio. Se consigna así: participante según terceros; sin evidencia de promo propia en texto el 13 nov. Reserva: los banners gráficos de la homepage no se pudieron leer (F5) y podrían anunciar Buen Fin.

### C5 — Descuentos: −10% integrado (F5) vs. 15/20/25% por aritmética (F1) (MUESTRAS DISTINTAS, COMPATIBLE)
F5: −10% integrado en 12/29 fichas (casi todas Grand Central/Hachette), sin tachado visible en la extracción. F1: descuentos 15/20/25% verificados por aritmética en el listado de Derecho (400→300, 99→84.15, 100→80) más un par $85→$25.50 (−70%). Son muestras distintas (Derecho vs. 29 fichas de varios géneros) y mecanismos distintos (descuento por título en listado vs. precio ya rebajado en ficha). No hay contradicción: el descuento es por título, no de campaña. La anomalía A1 de F1 (dos etiquetas de descuento que no cuadran con el par extraído) se atribuye a desalineamiento de la extracción, no a error de precios del sitio (los 6 pares verificables cuadran exactos).

### C6 — Mensajerías: solo de tercero (CONSISTENTE EN TRES FRENTES)
F5, F6 y F7 coinciden: Estafeta/FedEx/Borzo solo constan en Picodi (tercero); la página de Picodi devolvió 429 y no se reintentó, así que los datos proceden de snippets. La home solo dice "envíos nacionales e internacionales". Ninguna mensajería se atribuye como hecho confirmado de El Sótano.

### C7 — Pagos: no observables en el propio sitio (CONSISTENTE)
F2: checkout inaccesible sin carrito/sesión; única lista es secundaria (Picodi): tarjeta, Mercado Pago, depósito/transferencia, pago en +3,000 tiendas de conveniencia. F5: MSI, formas de pago completas y devoluciones sin verificar — no se llegó a checkout. F1: widget de carrito observado («0 productos, Subtotal: $0.00») pero checkout y métodos sin verificar. Consistente: los pagos no se pudieron verificar en el propio sitio.

### C8 — Agentic: cero, con crawlers de IA no bloqueados (CONFIRMADO POR DOS FRENTES)
F2 (lectura directa: `/agents.md` y `/.well-known/ucp` 404, sin MCP) y F3 (robots.txt no nombra crawlers de IA; caen bajo `*` y pueden rastrear salvo rutas bloqueadas) coinciden: sin infraestructura agentic, pero el catálogo público es legible por agentes. No se afirma que no se pueda comprar por agente: se afirma que no hay endpoint agentic y que el checkout no se recorrió.

### C9 — Redes: 5 declaradas, 0 handles verificables (HUECO, NO AUSENCIA)
F4: el aviso legal declara las 5 redes, pero ningún handle oficial pudo verificarse; solo Facebook "Librerías El Sótano" atestiguado por nombre (CANIEM 2021), sin URL verificable. F3: búsqueda específica de handles devolvió 0 resultados. Resolución: las redes existen como declaración legal; sus handles no se pudieron verificar. No se afirma que no tengan redes.

### C10 — Política de devoluciones: solo en snippets de tercero (LIMITACIÓN DECLARADA)
F6 y F7 citan la política desde Picodi (reclamo 5 días hábiles, reembolso 10–15 días hábiles, guía gratis solo por defecto/daño) porque `browser.open` a Picodi y a elsotano.com devolvió 429 en ambos casos y no se reintentó. La política oficial íntegra queda NO VERIFICADA. Se consigna como resumen secundario, no como texto oficial.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Checkout real y carrito:** métodos de pago, MSI, costo y plazo de envío, URL del carrito.
2. **Umbral vigente de envío gratis** (>$389 vs. >$450; ver C1) y tarifa/plazo de envío.
3. **Número actual de sucursales** (14 vs. 15+; ver C2) y total del catálogo; conteos de los 7 sub-sitemaps (429).
4. **Tasa real de disponibilidad del catálogo** (muestras con mucho OutOfStock; ver C3); rastreo 1–2 días por ficha.
5. **Mecánica/% propio de Buen Fin** (participante según terceros; sin evidencia propia en texto; ver C4); registro oficial en elbuenfin.org; cupón de noviembre (Picodi 429).
6. **Mensajerías en fuente primaria** (solo Picodi; ver C6); detalles del envío internacional.
7. **Texto oficial de devoluciones** (solo snippets de Picodi; ver C10); tasa real de devoluciones y ticket medio.
8. **Handles/URLs y seguidores de las 5 redes**; feed, formatos, ritmo y captions; contenido de Buen Fin en redes oficiales; club de lectura, agenda de eventos 2026, FIL Guadalajara 2026; tienda seller en Amazon/ML.
9. **JSON-LD completo del `<head>`** (`Book`/`Organization`/`FAQ`); posiciones, tráfico y volúmenes; pauta pagada (requiere navegador en vivo); claim "mayor catálogo de México".
10. **Endpoints `/wp-json/`, `/graphql`, `/llms.txt`**; hosting de origen, framework PHP concreto, TLS y PCI; contenido de `/facturacion` y `/tagus/`; existencia de la sucursal "Infantil y Juvenil"; qué sucursales ofrecen pickup y plazos de recogida; destino del excedente.
11. **Existencia de perfil en Trustpilot**; texto completo y distribución por estrellas de las reseñas de Google Maps por sucursal; quejas en grupos cerrados/DM, Profeco/ConciliaNET y app móvil propia.
12. **Header/menú/buscador/footer; vista móvil; rendimiento medido; blog; significado del sufijo «pd.»; títulos completos de la rejilla de la home.**

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **El precio único del libro cambia la promo.** La Ley del Libro fija el precio: no hay tachado 2.5× ni % general. El descuento es por título (−10% integrado, 15/20/25% en Derecho) y la palanca es la curaduría, no el porcentaje. Para la empresa nueva: si vende libros, la promo no puede ser de precio; tiene que ser de cesta (2×1, sorteo SAT ≥$250, envío gratis por umbral) o de experiencia.
2. **La disponibilidad es la promesa que se rompe en silencio.** 10/29 en stock en la muestra, 0/12 en ficción en inglés, y la ficha no marca el agotado en texto visible (solo el JSON-LD lo declara). Para la empresa nueva: mostrar el stock real por SKU antes del cobro y marcar el agotado en texto visible; un cliente que llega a checkout con un libro agotado no vuelve.
3. **El robots.txt puede bloquear justo lo que vende.** El Sótano bloquea `/noticias/`, `/categoria/`, `/autor/`, `/editorial/` y `/libros-de/` — es decir, todo el contenido temático que haría citable a la tienda. Para la empresa nueva: hacer lo contrario — categorías, guías y comparativas indexables y abiertas a crawlers de IA; copiar el marcado `Product` con precio+stock, no el bloqueo.
4. **Las redes declaradas no son redes verificables.** El aviso legal declara 5 redes y ningún handle pudo verificarse. Para la empresa nueva: enlazar los handles reales desde el pie del sitio; si la red no está enlazada, no existe para el cliente que la busca.
5. **Sin quejas públicas no hay escándalo que explotar — hay fricción que resolver.** Cero quejas en 20 búsquedas no es satisfacción probada, es baja visibilidad. La oportunidad no es "hacerlo mejor que el que se queja", sino resolver la fricción silenciosa: reembolso en 3–5 días (no 10–15), devolución gratuita y disponibilidad verificada antes del cobro.
6. **El envío gratis por umbral es incentivo de cesta, no beneficio universal.** Con ticket medio de libro en $250–$400 y umbral ~$450, el gratis se alcanza típicamente con 2 libros. Para la empresa nueva: fijar el umbral donde el margen de 2 unidades absorba el flete ($118–$248 por pedido en el modelo de F6) y publicarlo en el propio sitio, no solo en un agregador.
7. **Plataforma propia: el costo de no ser SaaS.** PHP propio + Cloudflare es una operación con equipo técnico, como Cyberpuerta (OXID). Para la empresa nueva (Fase 3/4): empezar ligero como F4T3 (Shopify), con El Sótano como referencia de a dónde se llega con catálogo por ISBN y 70 años de historia, no de dónde se empieza.

---

## Fuentes

- https://elsotano.com/ — home (lectura 13 nov 2026; extracción parcial, 44 líneas)
- https://elsotano.com/libros-de/derecho — listado Derecho (descuentos 15/20/25% verificados por aritmética; «1–18 de más de 300 resultados»)
- Fichas con precio (13 nov 2026): Derecho procesal mercantil $495 InStock; Juicio sucesorio testamentario 4 $380 InStock; Archer's Voice $562.50 OutOfStock
- https://elsotano.com/robots.txt — bloquea `/noticias/`, `/categoria/`, `/autor/`, `/editorial/`, `/libros-de/`; bloqueo total a Amazonbot y Awario; sin reglas para crawlers de IA
- https://elsotano.com/seo/sitemap1.xml … sitemap7.xml — índice con 7 sub-sitemaps (conteos no obtenidos, 429)
- https://www.picodi.com/mx/el-sotano — agregador tercero (envío gratis >$450; 30% seleccionados, 20% Sexto Piso, 10% ISEF; tarjeta/Mercado Pago/depósito/+3,000 tiendas de conveniencia; página con 429, datos solo por snippet)
- https://www.cazaofertas.com.mx/ — listado Buen Fin 2026 (El Sótano participante, 13–17 nov)
- Fichas de sucursales (buscador): Coyoacán 4.0★ (2), Querétaro 4.3★ (64), Zapopan 4.5★ (64), Puebla 4.4★ (126), Juárez 4.0★ (34); Picodi 3.97/5 (636 ratings)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/elsotano/`, 13 nov 2026)
