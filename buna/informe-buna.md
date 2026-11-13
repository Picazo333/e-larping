# Informe consolidado — Buna · Fase 2, WO-E-LARPING

- **Sitio:** https://buna.mx/ (marca visible: BUNA — "Café Rico que Conserva Ecosistemas"; café de especialidad, Ciudad de México)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 2 de la WO-E-LARPING (Oleada 1: Buna / Ahal / Charly)
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

**OBSERVADO.** Buna es una marca mexicana de café de especialidad (CDMX) que vende en https://buna.mx/ sobre **Shopify** (confirmado por `robots.txt` "# Shopify storefront", `/agents.md` y `products.json`; ID de tienda 14076980, `buna-mayoreo.myshopify.com`, tema 15), con **la suscripción como eje comercial**: 15% de descuento anunciado en todas las compras por suscripción, envío gratis en el primer pedido, entregas cada 2, 4 ó 6 semanas, pausa o cancelación libre. Catálogo corto y curado: 18 productos en `/collections/productos-ricos` (8 cafés en 340 g y 2 kg, mieles, chocolate y kits con Agárica). Tiene además **tres cafeterías físicas en CDMX** (Roma Norte — Orizaba 42 —, Condesa — Ámsterdam 285 — y La Tostadora en Doctores) que funcionan como canal de adquisición y de comunidad.

**El negocio en una frase:** vende a precio de lista estable por formato, sin precio tachado ni descuento por volumen en el carrito; las tres palancas son el formato grande (2 kg, −18,7% a −32,5% por gramo), la suscripción (descuento real pequeño y desigual) y los bundles/kits (−7% a −11%). El Buen Fin 2026 no existe en su home el primer día: ni mención, ni banner, ni MSI.

**Tres rasgos que la distinguen:**
1. **La suscripción promete 15% y entrega 0–7,2%.** Ninguna variante observada llega al 15% anunciado: Dalia 340 g $350 → $335 (−4,3%), Dalia 2 kg $1,390 → $1,290 (−7,2%), Maui Ome $395 → $395 (0%). Es la discrepancia central del informe, confirmada por cuatro frentes (ver §9, C1).
2. **Pauta Meta sofisticada con el blog muerto.** Dos campañas always-on por UTM (Dalia: retargeting a engagers de 180 días + lookalike; Miel Apis Inmunis en inglés para extranjeros en México) conviven con un blog sin artículos nuevos desde marzo–abril de 2022 y con ausencia total en la consulta transaccional genérica ("comprar café de especialidad en línea México").
3. **Comercio agentic nativo y fricción en las reglas.** UCP/MCP activo (v2026-08-25) con tarjetas + Google Pay + Shop Pay; pero los términos no publican política separada de envíos ni de devoluciones con plazos y costos, el reembolso puede ser un cupón electrónico de 6 meses (previo consentimiento), y no se encontró información pública sobre cómo pausar o cancelar la suscripción.

**Pista previa corregida:** «tienda en buna.mx; URLs /products/ con variant IDs numéricos (pinta Shopify, a confirmar)» y «opciones de suscripción en fichas». Verificado: Shopify **confirmado**; suscripción **confirmada como oferta comercial, con matiz** — la home describe el programa, pero la lectura de texto de la ficha `/products/micha-y-micha` no muestra ningún selector de suscripción ni mención a ella, y la app o mecanismo que opera las suscripciones queda NO VERIFICADO. Corrección de dominio: **buna.mx** (no buna.com.mx).

---

## 1. Qué es Buna

**OBSERVADO.** Marca de café de especialidad mexicano con trazabilidad de origen (región, altura, variedades, productores nombrados en cada ficha): productores de la Unión Regional de Cafeticultores de la Mazateca Alta (Oaxaca); variedades Bourbon, Mondo Novo, Typica. Claim: "BUNA: Café Rico que Conserva Ecosistemas". Razón social: BUNA CAFE RICO S.A.P.I. DE C.V. (ver §9, C3: la política de reembolso atribuye la garantía a "ETL 42 S.A.P.I. de C.V."). Contacto: caferico@buna.mx. Colaboración con Agárica (mencionada en las fichas de producto).

**OBSERVADO.** Catálogo (13 nov 2026): 18 productos en `/collections/productos-ricos` — 8 cafés (Guarumbo, Dalia, Alebrije, Datura, Micha y Micha, Maui Ome, Los Pajaritos, Ikaria) en 340 g y 2 kg, mieles, chocolate y kits. Precios 340 g: Guarumbo $310, Dalia/Alebrije $350, Datura/Micha $365, Maui Ome/Los Pajaritos $395, Ikaria 250 g $600 (edición limitada). Precios 2 kg: $1,250–$1,890. Kits: selección del tostador 3 × 340 g $975; Kit Rico $990 (2 cafés + miel 500 g + 2 chocolates); Kit Agárica $1,700. Mayoreo: −25% en `/collections/all` ("Tu descuento aumenta al pedir más producto").

**OBSERVADO.** Tres cafeterías en CDMX: Roma Norte (Orizaba 42), Condesa (Ámsterdam 285) y La Tostadora (Doctores). Buna 42: 4.5★ con 1,567 reseñas Google según un agregador; 4.8★ con 1,031 reseñas según un ranking de octubre de 2026 — las dos cifras no coinciden y no pudieron reconciliarse (ver §9, C5).

---

## 2. Front end (F2.1)

**OBSERVADO.** Home (13 nov 2026): misional, sin mención del Buen Fin el día 1, sin MSI ni banner de temporada. La única mención de envío gratis es "Envío gratis en tu primer pedido", dentro de la sección de suscripción. Colecciones: `/collections/all` ("Productos"), `/collections/productos-ricos` ("Productos Ricos"), `/collections/productos-con-hongos` ("Productos con Hongos").

**OBSERVADO.** Ficha de producto: café Maui Ome (edición especial) y café Guarumbo documentados; productos relacionados en ambas fichas; tabla de variantes con compra única vs. suscripción y sus precios (ver §6). Sobre las fichas flota un badge **"20% de descuento"** (imagen `20-off.png`) sin precio tachado visible: la ficha muestra el precio dos veces idéntico ($350.00 / $350.00 en Dalia), sin base sobre la que aplicar ese 20% (ver §9, C6).

**OBSERVADO.** Carrito y checkout: copia de carrito del 25 oct 2026 con envío gratis CDMX >$890 / resto de México >$1,499 (ver §9, C7: es copia de carrito, no política publicada). Búsqueda y navegación: la búsqueda del sitio existe; contenido y mensajes comerciales centrados en origen, trazabilidad y misión de conservación de ecosistemas.

**NO VERIFICADO.** El widget de suscripción dentro de la ficha (no aparece en la lectura de texto); contenido de la guía de compra; rendimiento medido; vista móvil real; a qué se aplica el badge del 20% ni si es Buen Fin.

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** Shopify confirmado: `robots.txt` "# Shopify storefront"; `/agents.md` declara "This store is built on Shopify"; `products.json` responde en el formato clásico de Shopify; imágenes desde `cdn.shopify.com/s/files/1/1407/6980/` (ID de tienda 14076980, `buna-mayoreo.myshopify.com`, tema 15). **Comercio agentic nativo activo (UCP/MCP v2026-08-25)**, con tarjetas + Google Pay + Shop Pay; procesador inferido Shopify Payments.

**OBSERVADO.** Terceros: HulkApps Metafields Manager, Widgetic. Productos internos con tag CEDIS y precio $0.00 visibles en el catálogo público (ver §9).

**INFERIDO.** La app o el mecanismo que opera las suscripciones no es observable desde fuera: la home describe el programa (15%, envío gratis en el primer pedido, cada 2/4/6 semanas, pausa/cancelación libre), pero ninguna ficha leída en texto muestra el selector de suscripción. Queda NO VERIFICADO qué app lo opera.

**NO VERIFICADO.** Cabeceras HTTP y tema/scripts en detalle (este frente se limitó a `browser.search` y `browser.open`, sin descarga de HTML crudo ni lectura de cabeceras); pasarela exacta; IDs de analítica; contenido de sitemaps secundarios (429, sin reintento).

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Visibilidad **notablemente más editorial que la de F4T3, pero envejecida**: crónicas de fondo en Local.mx (abr 2020) y Smartfood (mar 2021, que la describe como empresa B), ficha de socio en Mercados por un Futuro Sostenible (abr 2021, 256 productoras y productores), menciones recientes en listados de cafeterías de especialidad (The Happening, nov 2025; Franquiciasdecafe.com.mx; Brewworld; MexBest, oct 2026, nominada a Mejor Cafetería). Para la consulta transaccional genérica ("comprar café de especialidad en línea México") **Buna no aparece** en los resultados devueltos: dominan Lulú Café, Café Ge, Aroma de Altura, Jaguar Coffee, Olah Café, Tueste Café y Cafecito Mexicano.

**OBSERVADO.** Evidencia directa y estructurada de **pauta pagada en Meta**: las URLs de producto que devuelve el buscador traen parámetros UTM completos (`utm_source=meta_Instagram_Feed`, `utm_medium=paid_social`, campañas `[EPY_META_ACQ_RT_MAX_ATC_AON]` y `[EPY_META_ACQ_INT_MAX_ATC_AON]`, audiencia `new_customer`, segmento "Engagers Fb e Instagram 180 días", lookalikes) y una campaña en inglés dirigida a "Extranjeros en México" (Miel Apis Inmunis). Es el indicio de adquisición pagada más detallado de los frentes investigados hasta ahora.

**OBSERVADO.** El blog existe pero sus artículos devueltos por el buscador datan de **marzo–abril de 2022** (muerto desde entonces). La home no muestra campaña de Buen Fin el 13 nov 2026 pese a ser el primer día.

**INFERIDO (confianza media-alta).** La estrategia digital es **suscripción + pauta Meta + cafeterías físicas + autoridad de misión**, no SEO de contenido fresco. La adquisición visible es paid con segmentación sofisticada (retargeting de engagers, lookalikes, extranjeros en México) más el tráfico de las tres cafeterías y la prensa de sostenibilidad.

**NO VERIFICADO.** Posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda, citas en respuestas de ChatGPT / Google AI Overviews / Perplexity, número de seguidores en Instagram/TikTok, gasto publicitario, contenido de los sitemaps secundarios (429, sin reintento).

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Una red confirmada: **Instagram (@bunamx)**, citada como su Instagram en dos fuentes independientes (MexBest, 1 oct 2026; revista Laguna, n.º 01, mayo 2020). No se pudo leer el perfil: la apertura devolvió error 429 y no se reintentó. Seguidores, bio, ritmo y captions quedan NO VERIFICADOS. Es la única red orgánica confirmada.

**OBSERVADO.** El embudo es: **anuncio Meta → ficha de producto con UTM → elección compra única vs. suscripción → checkout**. La palanca central no es un descuento de temporada sino la **suscripción recurrente** (cada 2, 4 ó 6 semanas, 15% según la home, envío gratis en el primer pedido, pausa/cancelación libre), reforzada por el canal físico: tres cafeterías y eventos/talleres en La Tostadora.

**OBSERVADO.** **No se observó ninguna promo de Buen Fin** en el texto rastreado de la home el primer día del Buen Fin 2026 (13 nov). No se afirma que no exista en otro lugar del sitio o en redes; solo que la home no la anuncia.

**NO VERIFICADO.** Ritmo de publicación y captions de Instagram (perfil con 429); página "Somos BUNA" (mismo 429); existencia de otras redes (TikTok, Facebook, YouTube, X); anuncios activos en la Biblioteca de Anuncios de Meta.

---

## 6. Precios (F2.5)

**OBSERVADO.** Buna no vende a precio tachado ni con descuento por volumen en el carrito: vende a **precio de lista por formato**, con tres palancas modestas: (1) formato grande 2 kg: −18,7% a −32,5% por gramo según el café (la única rebaja grande y sistemática); (2) suscripción: de 0% a −7,2%; (3) bundles/kits: −7% a −11% frente a la suma de sus componentes.

| Producto | Compra única 340 g | Compra única 2 kg | Suscripción 340 g | Suscripción 2 kg |
|---|---|---|---|---|
| Guarumbo | $310.00 | $1,250.00 | NO VERIFICADO | NO VERIFICADO |
| Dalia | $350.00 | $1,390.00 | $335.00 (−4,3%) | $1,290.00 (−7,2%) |
| Alebrije | $350.00 | $1,390.00 | $335.00 (−4,3%) | $1,290.00 (−7,2%) |
| Datura | $365.00 | $1,450.00 | $360.00 (−1,4%) | $1,370.00 (−5,5%) |
| Micha y Micha | $365.00 | $1,450.00 | NO VERIFICADO | NO VERIFICADO |
| Maui Ome | $395.00 | $1,890.00 | $395.00 (0%) | $1,890.00 (0%) |
| Los Pajaritos | $395.00 | $1,890.00 | NO VERIFICADO | NO VERIFICADO |
| Ikaria (250 g) | $600.00 | — | — | — |

**OBSERVADO.** La home promete 15% de descuento al suscribirse, pero **ninguna variante observada llega al 15%** (ver §9, C1). Badge "20% de descuento" en fichas sin precio tachado ni base visible (ver §9, C6). Mayoreo −25% en `/collections/all`. Envío gratis CDMX >$890 / resto >$1,499 según copia de carrito del 25 oct 2026 (ver §9, C7).

**INFERIDO.** El precio de Buna es un precio de lista estable con la suscripción como mecanismo de retención (no de captación por precio) y el formato de 2 kg como mecanismo de ticket alto. Quien compra 340 g en compra única paga el precio más alto por gramo del sistema; quien se suscribe a 2 kg paga el más bajo.

**NO VERIFICADO.** Precios de suscripción de Guarumbo, Micha y Micha y Los Pajaritos (en el resultado consultado solo aparecen variantes de compra única); a qué se aplica el badge del 20%; MSI; costo de envío estándar fuera de la copia de carrito.

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Tienda Shopify, café de especialidad, México. Colección "Productos Ricos": 18 productos disponibles; 8 cafés en 340 g y 2 kg + miel, chocolate y kits. Todas las variantes muestreadas (Dalia, Maui Ome, Guarumbo) figuran "Available", en compra única y suscripción, en grano y molido. Términos: productos "sujetos a disponibilidad… hasta agotar existencias"; facturación al momento de la compra o dentro de 7 días naturales; contacto caferico@buna.mx.

**OBSERVADO.** Política de reembolso: solo garantía de productos/máquinas con evaluación del personal y recibo; atribuida a "ETL 42 S.A.P.I. de C.V." (discrepancia D3, ver §9). Domicilio publicado con discrepancia (D2): "Doctor Erazo 181-A" en Términos vs. "Dr Lucio 181-A" en Aviso de Privacidad (ver §9). **Política de envío: no legible** — la URL estándar de Shopify (`/policies/shipping-policy`) no devolvió contenido extraíble; no se encontró enlace a "Envíos"/"FAQ"/"Ayuda" en las páginas leídas.

**HIPÓTESIS (H1–H11, F2.6).** H1 — tueste por lote contra demanda prevista; verde como stock duradero, tostado como stock corto (media). H2 — la suscripción 2/4/6 semanas sincroniza tueste con demanda y reduce merma por frescura (media-alta como diseño; media como operación). H3 — el 2 kg es el formato de consumo intensivo y el que mejor absorbe el envío por gramo (media). H4 — las ediciones limitadas son válvula de rotación de lotes pequeños de origen, a precio premium, no liquidación (baja-media). H5 — el canal B2B es el segundo sumidero de volumen de tueste (media-baja). H6 — tueste y fulfillment salen de un solo nodo: La Tostadora, Doctores (baja-media). H7 — en café, la salida de excedente es no tostar de más; la suscripción es el instrumento (media). H8 — la "selección del tostador" (3 × 340 g) coloca los cafés de menor rotación sin exhibirlos (baja). H9 — los kits elevan el ticket y mueven miel y chocolate, de menor rotación probable que el café (baja-media). H10 — el 15% anunciado es un beneficio del programa sobre compras fuera de la suscripción, o texto desactualizado (media; ver §9, C1). H11 — el envío es la partida que decide el margen del pedido de 340 g; el 2 kg es el formato que sostiene el P&L (media).

**MODELO PROPIO (no son cifras de Buna).** Para una tienda mexicana de café de especialidad del mismo perfil, el eje es físico: el café es un consumible perecedero una vez tostado. El pedido de 340 g es el que decide el margen por el costo de envío; el formato de 2 kg es el que sostiene el P&L. La suscripción es el instrumento que sincroniza tueste con demanda y reduce la merma por frescura.

**NO VERIFICADO.** Mensajerías utilizadas (la tienda no nombra ninguna); costo de envío estándar, umbral de envío gratis fuera del primer pedido de suscripción y plazo de entrega; cobertura publicada ("todo México" no se afirma en las páginas leídas); stock, costos, contratos y tarifas negociadas.

---

## 8. Pain points (F2.7)

**OBSERVADO.** **Hallazgo central: no se encontró ninguna queja pública verificable sobre la tienda en línea de Buna** (pedidos, envíos, reembolsos o suscripción). Tras 15 búsquedas dirigidas (reseñas, quejas, reembolsos, envíos, suscripción, Trustpilot, Reddit/foros, TikTok/Instagram, Mercado Libre, Buen Fin) y la lectura de los fragmentos indexados de sus términos y condiciones y de varias fichas, el único corpus de quejas atribuible a Buna es el de su **café físico de Orizaba 42, Roma Norte (CDMX)**: un agregador de reseñas de Google resume las críticas recurrentes en dos temas — **espacio limitado y servicio lento** — y añade una fricción concreta para quienes van a trabajar: **no hay enchufes afuera**. La valoración general, sin embargo, es alta (4.5/5 con 1,567 reseñas según el agregador; 4.8/5 con 1,031 según un ranking de octubre de 2026 — ver §9, C5).

**OBSERVADO.** Fricción estructural en las propias reglas de la tienda (no son quejas en sí mismas, pero son los puntos donde nace la queja en un consumible con suscripción): los términos y condiciones **no publican una política separada de envíos ni de devoluciones/reembolsos con plazos y costos**; la única vía de reembolso que el documento describe es, en casos de pedido no procesado, la devolución del cobro **o, previo consentimiento del suscriptor, un cupón electrónico por el total, con vigencia de 6 meses**; la empresa se reserva el derecho de cancelar o suspender el seguimiento de una orden "para proteger los intereses comerciales"; y **no se encontró información pública sobre cómo pausar o cancelar la suscripción**, ni sobre plazos o costo de envío.

**INFERIDO.** El cliente no sabe cuánto tarda, cuánto cuesta el envío, ni cómo se sale de la suscripción. En un consumible con suscripción, esos tres vacíos son exactamente donde nace la queja — aunque esta investigación no encontró ninguna queja pública sobre la tienda en línea.

**NO VERIFICADO.** Quejas en comentarios de Instagram/TikTok no indexados, mensajes directos, tienda física fuera de Buna 42 o Profeco; contenido de reseñas de marketplaces; si la ausencia de quejas en línea refleja buena operación o un volumen bajo de pedidos en línea.

---

## 9. Verificación global (cierre de sitio)

### C1 — Suscripción: 15% prometido vs 0–7,2% real (DISCREPANCIA CONFIRMADA POR CUATRO FRENTES)
F2.1, F2.4, F2.5 y F2.6 coinciden: la home promete 15% en todas las compras por suscripción, pero ninguna variante observada llega al 15% (Dalia −4,3%/−7,2%; Datura −1,4%/−5,5%; Maui Ome 0%). No es un error de un frente: es una discrepancia entre la promesa de la home y los precios de las fichas. Hipótesis de F2.6 (H10, confianza media): el 15% es un beneficio del programa sobre compras fuera de la suscripción, o texto desactualizado. Queda como discrepancia declarada, no resuelta.

### C2 — Domicilio de La Tostadora: Erazo vs. Lucio (DISCREPANCIA SIN RESOLVER)
Términos y condiciones: "Doctor Erazo 181-A". Aviso de Privacidad: "Dr Lucio 181-A". Ambas son páginas oficiales de buna.mx. No se pudo determinar cuál es el domicilio correcto sin una fuente tercera; se reportan las dos.

### C3 — Razón social: BUNA CAFE RICO vs. ETL 42 (DISCREPANCIA SIN RESOLVER)
Los Términos operan bajo BUNA CAFE RICO S.A.P.I. DE C.V.; la política de reembolso atribuye la garantía a "ETL 42 S.A.P.I. de C.V.". Puede ser una razón social distinta para otra línea o un documento desactualizado; no se pudo resolver con fuentes públicas.

### C4 — Conteo de catálogo: 18 productos vs. ~25 tarjetas (TENSIÓN DECLARADA)
F2.3 y F2.6 reportan 18 productos en `/collections/productos-ricos`. F2.1 extrajo ~25 tarjetas en la colección. La diferencia puede ser variantes contadas como tarjetas, productos de otras colecciones mezclados en la extracción, o un conteo distinto. No se censó el catálogo completo; se consigna el 18 declarado y la tensión.

### C5 — Valoración de Buna 42: 4.5/1,567 vs. 4.8/1,031 (SIN RECONCILIAR)
Agregador de reseñas de Google: 4.5★, 1,567 reseñas. Ranking de octubre de 2026: 4.8★, 1,031 reseñas. Las dos cifras no coinciden y no pudieron reconciliarse (distinta fecha, distinto agregador o distinto local). Se reportan las dos con su fuente.

### C6 — Badge "20% de descuento" sin base (SIN RESOLVER)
F2.1 y F2.5 observan el badge (imagen `20-off.png`) en fichas sin precio tachado: Dalia muestra $350.00 / $350.00. No se pudo establecer a qué se aplica ni si es Buen Fin. No se cita como descuento real en este consolidado.

### C7 — Envío gratis: copia de carrito, no política (MATIZADO)
F2.6 no pudo leer la política de envío (`/policies/shipping-policy` sin contenido extraíble). El dato de envío gratis CDMX >$890 / resto >$1,499 proviene de una **copia de carrito del 25 oct 2026** (F2.1/F2.5), no de una política publicada vigente. Se consigna con esa procedencia y esa fecha; el umbral vigente el 13 nov 2026 queda NO VERIFICADO.

### C8 — Productos internos visibles en el catálogo público (SEÑALADO)
F2.2 observó productos internos con tag CEDIS y precio $0.00 visibles en el catálogo público. Es un descuido de higiene de catálogo (productos internos expuestos), no un hallazgo de precio; queda señalado para la Fase 4 como ejemplo de lo que no debe replicarse.

### C9 — Buen Fin: ausencia en home, no ausencia en la tienda (MATIZADO)
F2.1, F2.3 y F2.4 coinciden en que la home no menciona el Buen Fin el 13 nov 2026. Ningún frente afirma que no exista una promo de Buen Fin en otra parte del sitio o en redes: solo que la home no la anuncia. La ausencia es de comunicación en home, no un hecho sobre toda la tienda.

---

## 10. Qué quedó sin verificar (consolidado)

1. **El mecanismo de suscripción:** qué app lo opera y si el selector existe en la ficha (la lectura de texto no lo muestra); cómo se pausa o cancela (sin información pública).
2. **Política de envíos:** costo estándar, umbral de envío gratis vigente, plazo de entrega, cobertura, mensajerías (la tienda no nombra ninguna; `/policies/shipping-policy` no legible).
3. **Política de devoluciones/reembolsos con plazos y costos:** solo se conoce el fragmento de términos (cupón de 6 meses previo consentimiento; garantía de productos/máquinas con evaluación y recibo).
4. **Ritmo y captions de Instagram:** perfil @bunamx con 429; seguidores, bio y contenido NO VERIFICADOS; otras redes no confirmadas.
5. **A qué se aplica el badge del 20%** y si es Buen Fin (ver C6).
6. **Domicilio correcto de La Tostadora** (Erazo vs. Lucio) y **razón social de la garantía** (BUNA CAFE RICO vs. ETL 42).
7. **Conteo exacto del catálogo** (18 declarados vs. ~25 tarjetas extraídas) y **valoración reconciliada de Buna 42** (4.5/1,567 vs. 4.8/1,031).
8. **SEO/GEO real:** posiciones en Google/Bing, tráfico orgánico, citas en respuestas de IA, gasto publicitario, contenido de sitemaps secundarios (429).
9. **Precios de suscripción** de Guarumbo, Micha y Micha y Los Pajaritos; **MSI**; costo de envío estándar.
10. **Interior de la empresa:** stock, tueste por lote real, costos, contratos, volumen de ventas en línea vs. cafeterías y B2B.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **La suscripción es retención, no captación por precio — pero la promesa debe cuadrar con la ficha.** Buna promete 15% y entrega 0–7,2%: la discrepancia es el mayor riesgo reputacional del modelo. Para la empresa nueva: que el descuento anunciado sea el descuento que ve el cliente en la ficha, variante por variante; si el beneficio es otro (envío gratis, acceso anticipado), anunciarlo como tal.
2. **El formato grande es la palanca de ticket, no el descuento.** El 2 kg (−18,7% a −32,5% por gramo) es la única rebaja grande y sistemática; el cliente que compra 340 g paga el precio más alto por gramo. Para un consumible: diseñar el formato grande como el formato "inteligente" y el pequeño como prueba, no al revés.
3. **En un consumible perecedero, la salida de excedente es no producir de más.** No hay liquidación en Buna porque no puede haberla: el café tostado caduca en frescura. La suscripción sincroniza tueste con demanda y es el instrumento anti-merma. Para la empresa nueva: si el producto es perecedero, el modelo de inventario se diseña alrededor de la caducidad, no del descuento.
4. **La pauta pagada puede convivir con el contenido muerto, pero no lo sustituye.** Buna pauta en Meta con segmentación sofisticada (retargeting 180 días, lookalikes, extranjeros) mientras su blog lleva muerto desde abril de 2022 y no aparece en la consulta transaccional genérica. Para la empresa nueva: el paid compra tráfico, no autoridad; el contenido fresco es lo que hace aparecer en la búsqueda de categoría.
5. **Publicar las reglas antes del pago.** Sin política de envíos legible, sin plazos ni costos de devolución, sin instrucciones para pausar/cancelar la suscripción: el cliente de Buna no sabe cuánto tarda, cuánto cuesta el envío ni cómo se sale. Para la empresa nueva: política de envío, devolución y cancelación de suscripción en una sola página, visible antes del pago, con plazos y costos.
6. **El canal físico es adquisición y comunidad, no solo venta.** Tres cafeterías con talleres y eventos alimentan la marca; la queja del café físico (espacio limitado, servicio lento, sin enchufes afuera) es una queja de experiencia, no de producto. Para la empresa nueva sin locales: el equivalente es la comunidad (contenido, eventos, reseñas) y el servicio postventa como experiencia.
7. **Higiene de catálogo.** Productos internos con tag CEDIS y precio $0.00 visibles en público, badge de 20% sin base, domicilio y razón social contradictorios entre páginas oficiales: descuidos pequeños que erosionan confianza. Para la empresa nueva: auditar el catálogo público como lo vería un cliente, no como lo ve el operador.

---

## Fuentes

- https://buna.mx/ — home (lectura 13 nov 2026; programa de suscripción, sin mención de Buen Fin)
- https://buna.mx/collections/productos-ricos — 18 productos
- https://buna.mx/collections/all — mayoreo −25%
- https://buna.mx/products/cafe-dalia · https://buna.mx/products/cafe-alebrije-1 · https://buna.mx/products/cafe-datura · https://buna.mx/products/cafe-guarumbo · https://buna.mx/products/cafe-maui-ome-1 — fichas con variantes de compra única y suscripción
- https://buna.mx/pages/terminos-y-condiciones · https://buna.mx/policies/refund-policy · https://buna.mx/pages/aviso-de-privacidad — términos, reembolso, privacidad
- https://buna.mx/robots.txt — "# Shopify storefront" · https://buna.mx/products.json · https://buna.mx/agents.md
- https://www.mexbest.com/ (1 oct 2026) — @bunamx; revista Laguna n.º 01 (mayo 2020)
- https://local.mx/ (abr 2020) · Smartfood (mar 2021) · Mercados por un Futuro Sostenible (abr 2021) · The Happening (nov 2025) · MexBest (oct 2026)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/buna/`, 13 nov 2026)
