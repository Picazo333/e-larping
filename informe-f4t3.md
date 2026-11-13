# Informe consolidado — F4T3 (FATE™) · Fase 1, WO-E-LARPING

- **Sitio:** https://www.f4t3.co/ (marca visible: FATE™)
- **Fecha de la investigación:** 13 nov 2026 (primer día del Buen Fin 2026, 13–17 nov)
- **Fase:** Fase 1 de la WO-E-LARPING (informe completo del sitio ancla)
- **Método:** 7 frentes en paralelo, archivos exclusivos por frente, solo fuentes públicas. Sin navegador en vivo, sin inicio de sesión, sin compras, sin contacto con la empresa ni con clientes.
- **Convención:** cada afirmación lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con URL y fecha) / **INFERIDO** (con evidencia y confianza) / **HIPÓTESIS** (derivada, marcada como tal) / **NO VERIFICADO**.

## Frentes y archivos fuente

| Frente | Dimensión | Archivo |
|---|---|---|
| F1.1 | Front end | `f1-frontend.md` |
| F1.2 | Back end + stack | `f2-backend-stack.md` |
| F1.3 | SEO/GEO + presencia digital | `f3-seo-geo.md` |
| F1.4 | Redes sociales + embudo | `f4-redes-embudo.md` |
| F1.5 | Precios | `f5-precios.md` |
| F1.6 | Logística como hipótesis | `f6-logistica-hipotesis.md` |
| F1.7 | Pain points | `f7-pain-points.md` |

---

## 0. Resumen ejecutivo

**OBSERVADO.** F4T3 (FATE™) es una marca mexicana de moda/streetwear, venta 100% online desde su propia tienda en https://www.f4t3.co/, construida sobre **Shopify** (confirmado por `robots.txt`, `/agents.md` y cabeceras) con borde Cloudflare. Vende prendas de marca propia —playeras, hoodies, jeans, crop tees, polos, jackets, gorras— en 8 categorías, con producción declarada en México (algodón 100% mexicano, 250 gsm en playeras) y corte oversize.

**El negocio en una frase:** vende por volumen con descuento permanente como precio real — playeras 6×$1,299 ($216.50 por pieza) y todo lo demás con precio tachado ~2.5× el precio de venta más escalera −10/−20/−30% por 2/4/6 piezas. El Buen Fin 2026 (13–17 nov) re-etiqueta esa promo estructural y añade 12 MSI; no se observó rebaja adicional por producto.

**Tres rasgos que la distinguen de una tienda mexicana típica:**
1. **Comercio agentic:** `/agents.md`, UCP/MCP (`/.well-known/ucp`, `/api/ucp/mcp`) y `sitemap_agentic_discovery.xml` — infraestructura para que agentes de IA compren en su tienda, poco común en México.
2. **Reclutamiento de creadores por performance:** subdominio `creators.f4t3.co` con oferta de ganar un porcentaje de lo invertido en sus videos, circulado como anuncio pagado de Facebook. El modelo de adquisición es paid + UGC por performance, no SEO ni contenido.
3. **Fricción postventa estructural:** devoluciones solo con crédito en tienda, productos en promoción excluidos de cambios voluntarios, plazos de entrega de hasta ~12 días naturales, costos de envío contradictorios entre dos páginas oficiales, y atención solo por correo e Instagram DM. La única queja pública directa encontrada es un video de TikTok pidiendo reembolso (5,395 me gusta, 246 comentarios, ~abr 2026, caso aislado).

**Pista previa corregida:** el constructor del espacio la había observado como "Shopify sobre Cloudflare, con colecciones de promo permanente (buen-fin, summer-sale)". Verificado: Shopify **confirmado**; Cloudflare **confirmado solo a nivel de borde** (no se distingue si es infra de Shopify o zona propia del comerciante); la colección buen-fin **existe pero como campaña fechada 13–17 nov 2026, no como promo permanente**; **summer-sale no se encontró en ningún lado** (ni en navegación, ni en sitemap, ni en búsqueda).

---

## 1. Qué es F4T3

**OBSERVADO.** Marca ready-to-wear mexicana con sede en México (página `/pages/nosotros`, sin actualizar desde 2022): "f4t3 se centra más en crear un alma en la marca… para enseñar que el destino no es algo exacto… 'Todos vamos a nuestra d3st1no, pero, ¿es realmente inevitable e ineludible?'". Fundador: Salvador Huher (podcast SIMU ep. 72, "Platicando con emprendedores"). La marca se presenta como comunidad/estilo de vida —diseño, música, arte y cultura callejera— con colecciones limitadas y colaboraciones con artistas emergentes.

**OBSERVADO.** Catálogo (13 nov 2026): 8 categorías en la home — Sudaderas/Hoodies, Playeras/T-Shirts, Sin Mangas, Pantalones/Jeans, Crop/Baby Tee's, Playeras Polo, Jackets, Gorras. Sitemap con 58 colecciones (casi todas con `lastmod` 13 nov 2026), incluyendo bundles promocionales (`2x1`, `3x1`, `sudaderas-2x1`, `jeans-classy-3x1`) y `buen-fin`. Búsqueda interna "hoodie": 367 resultados (probablemente cuenta variantes, no productos — INFERIDO, confianza media).

**OBSERVADO.** Afirmación de la tienda en home y fichas: "MÁS DE 168,783 PERSONAS USAN FATE™". Es cifra propia, sin verificación externa; no se reproduce como dato de tráfico ni de ventas. Instagram: @f4t3.co, cuenta business verificada, 164,831 seguidores (cifra distinta; su relación con el 168,783 **no está verificada**).

**OBSERVADO.** Precios de referencia (13 nov 2026): playera Not All Angels Tee $1,299 (6X1); longsleeve Destino Studios $599 (antes $1,499); hoodie All My Fears $760 (antes $1,899); zip hoodie Cathedral $840 (antes $2,099); crop tees $315 uniformes (antes $899). Tallas XS–XXL disponibles en los productos muestreados, incluso en pleno Buen Fin.

---

## 2. Front end (F1.1)

**OBSERVADO — home, en orden:** banner Buen Fin (MIPYMES · 13–17 nov) → hero "PLAYERAS 6X1 / HASTA 80% OFF EN TODO LO DEMÁS / HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE" con CTAs a `/collections/t-shirts` y `/collections/buen-fin` → "MÁS DE 168,783 PERSONAS USAN FATE™" → Best sellers (Not All Angels Tee, $1,299, 6X1) → New Arrivals FW26 "WRITTEN IN THE STARS" (Destino Studios Longsleeve, $599, antes $1,499) → rejilla de 8 categorías → "BEHIND THE BRAND" (video de YouTube "EFFORTLESS — BEHIND THE BRAND") → "RESEÑAS DE CLIENTES" con handle @f4t3.co.

**OBSERVADO — ficha de producto:** galería de 6 imágenes, título, precio en MXN, prueba social, bloque de promoción por volumen, sello "PAGO 100% SEGURO · HECHO EN MÉXICO", acordeones en orden fijo (Detalles + Fit / CAMBIOS + DEVOLUCIONES / COSTOS + TIEMPOS DE ENVIO / ¿CÓMO CUIDAR MI PRODUCTO?), aviso de demoras por alta demanda, carrusel de 4 looks, sección de reseñas al final (sin contenido legible por texto).

**OBSERVADO — carrito y búsqueda:** carrito vacío muestra solo "You may also like" (4 productos); búsqueda con orden Relevancia / Precio ↑ / Precio ↓; filtros en colección **no verificados** (no aparecieron en la extracción de texto); header, footer, menú y newsletter **no verificados** por este método (su ausencia en la extracción no prueba su ausencia en el sitio).

**NO VERIFICADO:** pasos del checkout y métodos de pago en pantalla (no se recorrió el checkout), contenido real de reseñas, vista móvil real (solo indicios de assets dedicados), rendimiento medido (sin cifras), rango de precios del catálogo completo, colección summer-sale (intento directo devolvió 429).

---

## 3. Back end + stack (F1.2)

**OBSERVADO — plataforma:** Shopify, sin ambigüedad. `robots.txt` abre con "# Shopify storefront"; `agents.md` declara "This store is built on Shopify"; cabecera `powered-by: Shopify`; tienda ID `65410957555`; subdominio `f4t3-clo.myshopify.com`; endpoints `/products.json` y `*.js` funcionales.

**OBSERVADO — borde y origen:** cabeceras `Server: cloudflare`, `CF-RAY …-SJC`, `Nel: cf-nel`, `x-dc: gcp-us-west1`. El tráfico pasa por borde Cloudflare y el origen está en Google Cloud US Oeste. **INFERIDO (confianza alta para el borde; media para atribuirlo a Shopify):** Shopify corre sobre Cloudflare y GCP, por lo que es plausible que todo sea infraestructura de Shopify. **NO VERIFICADO:** si existe una zona Cloudflare propia del comerciante como proxy delante de Shopify.

**OBSERVADO — tema y front propio:** tema Shopify "Fabric" v3.4.0 (instancia 190563057907, `/cdn/shop/t/68/`), nombre interno "FATE BUEN FIN · PASSWORD 13", muy personalizado con JS propio `fate-*`: pack builder 6×1, mystery gift, precios por volumen, cart sync, tipografía y navegación propias.

**OBSERVADO — pagos (perfil UCP `/.well-known/ucp`, v2026-08-25):** tarjeta Visa/Amex/Mastercard, Google Pay (gateway `shopify`, merchantId 65410957555) y Shop Pay. **INFERIDO (confianza alta):** procesador Shopify Payments. PayPal, Mercado Pago, Conekta, Stripe directo, OXXO/SPEI, Kueski/Aplazo: **NO VERIFICADO**. Adquirente de los 12 MSI: **NO VERIFICADO**.

**OBSERVADO — comercio agentic:** UCP/MCP nativo de Shopify (endpoint `f4t3-clo.myshopify.com/api/ucp/mcp`, capacidades cart, checkout, order, catalog, discount, fulfillment, buyer_consent, identity_linking).

**OBSERVADO — terceros:** Klaviyo (`company_id XD8hjH`), GA4 `G-QVJCE4GPQW` / Google Ads `AW-18386659777` / GTM `GT-PLTRXNMW`, Meta Pixel `351414497090367` + CAPI activado, analítica Shopify (Trekkie/Monorail/Web Pixels), Adobe Fonts (Typekit), centro de ayuda y rastreo en `soporte.f4t3.co` — app propia en Railway (`Server: railway-hikari`) con Chatwoot en su CSP (inferido, confianza media-alta) —, feeds de Instagram/YouTube servidos por apps propias en Railway (inferido, confianza media), extensión propia de reseñas `fate-reviews-collect-only` (proveedor de reseñas **no verificado**).

**OBSERVADO — extra:** producto "Seguro de envío plus" ($199, `product_type: "Servicio"`, tag `catalog-hidden`) en el catálogo; locales en sitemap `en-us`, `es-us`, `en-can`, `es-can` (ventas activas en US/CA **no verificadas**).

**NO VERIFICADO:** plan de Shopify, apps del admin, logística/ERP/inventario, interior del checkout y post-compra.

---

## 4. SEO / GEO + presencia digital (F1.3)

**OBSERVADO — SEO técnico bueno, autoridad débil:** sitemap índice completo y fresco (productos, páginas, colecciones, blog, `sitemap_agentic_discovery.xml`, más versiones por locale); `robots.txt` permisivo estándar de Shopify; URLs limpias; 58 colecciones tocadas el 13 nov 2026. Pero la home (título "FATE™" a secas, sin descriptor de categoría ni geografía) **no apareció en el top 10 devuelto** para consultas de marca exacta, y F4T3 **no aparece en ninguno de los listados editoriales de streetwear mexicano consultados** (The Title, Pousta, CoolhunterMX, Merca20 — citan a Pay's, Tony Delfino, Barragán, Acapella, MEXICO IS THE SHIT, etc.).

**OBSERVADO — menciones externas:** solo 2 encontradas — podcast SIMU ep. 72 con el fundador Salvador Huher, y ELLE México oct 2023 (T-Shirt F4T3 $600, dominio entonces `f4-t3.co`). Blog `/blogs/news` muerto desde jul 2022 (sitemap, sin artículos visibles). Cero contenido informativo/SEO: todo es transaccional o de marca.

**OBSERVADO — GEO (infraestructura, no presencia):** `/agents.md` con instrucciones para agentes de IA, UCP/MCP enlazados desde `robots.txt`, `sitemap_agentic_discovery.xml` (contenido no leído: 429). **NO VERIFICADO:** presencia real en respuestas de ChatGPT, Google AI Overviews, Perplexity o Copilot (no se pudo interrogar a ningún motor en esta sesión). **INFERIDO (confianza media-alta):** F4T3 está mejor preparada para el comercio agentic que para la citación en respuestas generativas: tiene la tubería para que un agente compre, pero carece de guías, comparativas, listados y reseñas externas que los motores suelen citar.

**INFERIDO (confianza media-alta) — estrategia:** paid + creadores UGC por performance + tienda propia, no SEO editorial ni contenido. Evidencia: la única URL de `site:f4t3.co` es la landing de FATE Creators (`creators.f4t3.co/onboarding`) con UTM de Facebook Ads ("¿Y SI GANARAS $50,000 O MÁS AL MES CREANDO PARA FATE? … Sujeto a selección. Ingresos variables según el performance del video"), el fundador habla de ads en el podcast, y el blog lleva muerto desde 2022. **INFERIDO (confianza media):** el nombre FATE/F4T3 compite con homónimos fuertes (neumáticos FATE Argentina, Fate/stay night, juego de rol) y eso diluye la descubribilidad por marca.

**NO VERIFICADO:** posiciones exactas, tráfico, meta description, JSON-LD, seguidores en redes, gasto publicitario, Biblioteca de Anuncios de Meta, tienda física, redirección `f4-t3.co` → `f4t3.co`.

---

## 5. Redes sociales + embudo (F1.4)

**OBSERVADO — redes confirmadas:** Instagram **@f4t3.co** — cuenta business verificada, **164,831 seguidores**, 77 seguidos; bio con http://f4-t3.co (resuelve al mismo home). Es la única red enlazada por handle desde la tienda (sección "RESEÑAS DE CLIENTES @f4t3.co") y la red principal. YouTube: video "EFFORTLESS — BEHIND THE BRAND" (https://www.youtube.com/watch?v=67FNT5hpZvo), enlazado desde la home; descripción transcrita: "Proceso detrás de nuestra campaña EFFORTLESS. Una selección de nuestros best sellers, reinterpretados desde la esencia de FATE. More to come. FATE STUDIOS / f4t3.co". Nombre del canal, suscriptores, vistas y fecha: **NO VERIFICADOS**.

**INFERIDO (confianza media) — TikTok:** existe una cuenta @f4t3.co (una mención con @ solo puede dirigirse a una cuenta existente), pero perfil oficial, contenido, seguidores y frecuencia quedaron **NO VERIFICADOS**. La home no contiene la palabra "TikTok". Facebook, X/Twitter, Pinterest, WhatsApp: sin evidencia (no se afirma que no existan).

**OBSERVADO — embudo:** Instagram bio → home con promo Buen Fin → best sellers (Not All Angels Tee $1,299 en 6X1; longsleeve Destino $599→$419 llevando 6+) → checkout Shopify. YouTube como canal de marca/consideración (video de proceso, CTA solo el dominio). Elementos observados: hero con fecha límite (17 nov), 6X1, hasta 80% off, 12 MSI, contador "168,783 personas", sección de reseñas con identidad de Instagram, best sellers + categorías. Códigos de descuento, Linktree, UTM y anuncios: **NO VERIFICADOS**.

**NO VERIFICADO (hueco principal):** ritmo de publicación y captions de Instagram — la lectura del perfil solo devolvió metadatos, sin posts, fechas ni highlights. Sin navegador en vivo no hay capturas; todo es descripción en texto. La landing de promo 6X1/80% off y el video de TikTok citado no se pudieron abrir (429 al final de la sesión).

**INFERIDO (confianza media-alta) — lectura del embudo:** monocanal en origen (Instagram), promocional en el medio (bundle + Buen Fin) y de prueba social en el cierre. No se observó captura de datos previa a la compra (sin newsletter visible), ni retargeting verificable, ni canal de atención conversacional anunciado en el sitio. La conversión se juega en tres cosas: que el contenido de Instagram mueva al clic en bio, que la promo 6X1 justifique llevar 6 piezas, y que la fecha límite del Buen Fin cierre la decisión.

---

## 6. Precios (F1.5)

**OBSERVADO — dos mecánicas que conviven:**
1. **Playeras 6X1:** 1 playera $1,299; 6 playeras $1,299 ($216.50 c/u).
2. **Todo lo demás: precio tachado + escalera por volumen:** precio visible ya con ~50–65% de descuento sobre el tachado, y −10%/−20%/−30% al llevar 2/4/6 piezas.

**OBSERVADO — precios (13 nov 2026):**

| Producto | Venta | Tachado | Efectivo a 6 piezas |
|---|---|---|---|
| Not All Angels Tee | $1,299 | — | $216.50 c/u (6X1) |
| Destino Studios Longsleeve | $599 | $1,499 (−60%) | $419 (−72% vs. tachado) |
| All My Fears Hoodie | $760 | $1,899 (−60%) | $532 (−72%) |
| Cathedral Zip Hoodie | $840 | $2,099 (−60%) | $588 (−72%) |
| Crop tees (uniforme) | $315 | $899 (−65%) | $221 (−75.4%) |
| Jeans | badge 50% OFF | sin precio absoluto observado | — |

**OBSERVADO — el tachado es sistemáticamente ~2.5× el precio de venta** ($1,499/$599 = 2.50; $1,899/$760 = 2.50; $2,099/$840 = 2.50; crop 2.85×). El descuento no es un evento: está incrustado en la plantilla de cada ficha y en los badges de cada colección.

**OBSERVADO — Buen Fin:** colección propia `/collections/buen-fin` ("HASTA 80% OFF", "ENTRE MÁS LLEVAS, MENOS PAGAS + HASTA 30% EXTRA ADICIONAL"), con fechas 13–17 nov y MSI "termina el 17 de noviembre". Los productos muestran los mismos badges que en sus colecciones normales. **INFERIDO:** el Buen Fin en F4T3 es re-etiquetado de la promo estructural + MSI, no una rebaja adicional visible por producto. **INFERIDO:** el "HASTA 80% OFF" probablemente se refiere al 6X1 (−83.3% efectivo), no a un 80% directo en un producto (ningún producto individual se vio a 80%).

**OBSERVADO — venta por volumen:** "COMBINA DISEÑOS Y TALLAS", "ENTRE MÁS LLEVAS, MENOS PAGAS" como titular, envío gratis con 5+ piezas o subtotal >$1,999 (dos umbrales distintos publicados; ver §7). **INFERIDO:** el umbral de envío gratis está calibrado para forzar carritos multi-pieza.

**Efecto de espera (INFERIDO, argumentado):** la espera probable no es "al siguiente Buen Fin" sino "a armar un pedido grande"; el descuento permanente erosiona la credibilidad del precio sin descuento, y la urgencia la aportan novedad (FW26/New Arrivals), stock y MSI. El 6X1 no se puede "esperar mejor" (no hay 7X1); el cliente vuelve por el diseño, y el precio por volumen es el cierre. La política de cambios ("no aplica a productos en promoción") puede reforzar la espera y empuja a pedidos grandes y meditados.

**NO VERIFICADO:** Mystery Box como producto (precio, contenido, condiciones) — ver §9 reconciliación; summer-sale; 3x1/2x1 como ofertas activas (ver §9); precios absolutos de jeans, gorras, sin mangas, polos y jackets; descuento extra en checkout durante el Buen Fin; frecuencia histórica de las promos.

---

## 7. Logística como hipótesis (F1.6)

Todo en esta sección es **hipótesis derivada con su evidencia**, salvo lo marcado OBSERVADO.

**OBSERVADO:** catálogo ancho (≥24 playeras, 8 categorías), tallas XS–XXL completas en los 2 productos muestreados en pleno Buen Fin, re-stocks anunciados, liquidación agresiva (6X1 a $1,299; hasta 80% OFF; hoodie $760 vs. $1,899), producción declarada en México, preventas (el pedido completo espera a la preventa), confirmación de pago 48 h + entrega 4–10 días hábiles, cobertura México, tienda internacional `row.f4t3.co`.

**HIPÓTESIS H1 (confianza media) — superávit:** F4T3 produce/compra por encima de la demanda inmediata y drena con descuento por volumen. Evidencia: catálogo ancho + tallas completas en Buen Fin, descuentos 60–80%, re-stocks. Contrapeso: el descuento profundo también puede explicarse por un tachado inflado como ancla.

**HIPÓTESIS H2 (confianza media) — modelo mixto:** producción por lotes con inventario propio + preventa parcial (no print-on-demand puro). Evidencia: stock inmediato + preventas + plazo 4–10 días (largo para almacén con stock listo, corto para producir desde cero).

**HIPÓTESIS H3 (confianza media-alta) — rotación por drops:** FW26 + re-stocks, no catálogo estático.

**Mystery Box — OBSERVADO que existe, HIPÓTESIS su función:** la política de envío (9 nov 2026) dice: "El seguro de envío, los stickers, la Mystery Box y los regalos no cuentan para el envío gratis." No se encontró página de producto, precio, contenido ni tallas. **H4 (confianza baja-media):** la Mystery Box es salida de excedente (diseños lentos, tallas XS/XXL, restos de lote) — encaje estructural estándar en moda, sin evidencia directa. **H5 (confianza media):** excluirla del envío gratis protege el margen de la caja.

**OBSERVADO — mensajerías: ninguna nombrada.** La política habla genéricamente de "la paquetería"; el transportista solo se revelaría en el checkout (no accedido). Rastreador propio en `soporte.f4t3.co`; contacto hola@f4-t3.co e Instagram DM. **NO VERIFICADO:** DHL, Estafeta, FedEx o cualquier otra; tarifa negociada; almacén/3PL.

**OBSERVADO — discrepancia de costos de envío (dos versiones publicadas el mismo día, 13 nov 2026):**

| | Política de envío (9 nov 2026) | Fichas de producto |
|---|---|---|
| Estándar | $299 con playeras manga corta / $199 otros | $179 |
| Gratis | Con 5+ productos que no sean playera | Subtotal > $1,999 |
| Premium | $299, nunca gratis | $299, nunca gratis |

**HIPÓTESIS H6 (confianza media):** la política es la vigente y el bloque de producto es texto residual (menciona un "2X1" que ya no es la promo vigente). **NO VERIFICADO:** cuál cobra realmente el checkout.

**MODELO PROPIO (no son cifras de F4T3) — costos de una empresa similar:** pedido 6X1 ($1,299) con margen bruto estimado 17–55%; hoodie en promo ($760) con margen 11–51%. Supuestos declarados en F1.6 §5: producto $60–$100 por playera, envío $120–$220 por pedido, pasarela 3–7%, plataforma 1–3%, empaque 1–2%, marketing orgánico 2–5%, devoluciones 1–3%. Sensibilidad clave: si el costo real por playera supera ~$110, el 6X1 deja de ser rentable antes de fijos. El modelo no incluye costos fijos ni pauta pagada.

**OBSERVADO — devoluciones:** 30 días naturales, sin uso/etiquetas/empaque; no aplica en promo; cliente paga guías si el error es suyo; crédito en tienda sin vencimiento; reposición por defecto "habitualmente" también con crédito; evidencia fotográfica de 4 elementos para reclamar defectos.

---

## 8. Pain points (F1.7)

**Hallazgo central: hay muy pocas quejas públicas verificables sobre F4T3.** Tras 14 búsquedas dirigidas y lectura de home, ficha best-seller y las dos políticas oficiales, solo se encontró **una queja pública directa y atribuible**: un video de TikTok ("Fate devuélveme mi dinero porfavor @f4t3.co", 5,395 me gusta, 246 comentarios; fecha exacta no verificable, rastreo del índice ~abr 2026). Caso aislado, sin evidencia de recurrencia; contenido y desenlace **no verificados** (el video y sus comentarios no pudieron leerse en texto).

**OBSERVADO — fricción estructural en las propias reglas (el terreno donde nace la queja):**
1. **Reembolsos:** devoluciones voluntarias autorizadas solo con crédito en tienda (no efectivo); reposiciones por defecto "habitualmente" también con crédito; productos en promoción excluidos de cambios voluntarios. **INFERIDO:** la brecha entre "quiero mi dinero de vuelta" y "solo crédito" es el mecanismo más plausible detrás de la queja pública.
2. **Envíos:** 48 h de confirmación + 4–10 días hábiles (hasta ~12+ días naturales), advertencia explícita de demoras por alta demanda, preventas que retrasan el pedido completo, y la inconsistencia de costos de envío entre páginas oficiales (§7). Protección de envío como extra opcional de pago; sin ella, la solución ante pérdida se decide "según el caso".
3. **Cambios:** 30 días, sin uso, con etiquetas y empaque; cliente cubre ambas guías si el error es suyo; evidencia fotográfica de 4 elementos (incluida la hoja de orden impresa) para reclamar defectos.
4. **Atención:** solo correo (hola@f4-t3.co) e Instagram DM; sin teléfono ni WhatsApp en las políticas. Rastreador y centro de ayuda en `soporte.f4t3.co` (contenido **no verificado**, 429). **INFERIDO:** concentrar el soporte en Instagram DM deja al cliente sin vía de escalamiento si el DM no se contesta, lo que empuja la queja a lo público.

**NO VERIFICADO:** quejas sobre envíos tardíos/perdidos, tallas, calidad/estampado, atención, precios o cobros. Lo positivo verificable es escaso: sección "RESEÑAS DE CLIENTES" en home y producto sin texto legible; ELLE México oct 2023; estimación de Particl (~19 M de ingresos en 6 meses, 330 productos / 1.9K variantes — estimación de tercero, **no verificada**). Sin perfil en Trustpilot ni reseñas en Google localizables. No se inventó ningún porcentaje de satisfacción ni conteo de quejas.

**Implicaciones para la empresa nueva (de F1.7):** reembolso en efectivo rápido y anunciado antes del pago; plazo total real en una sola cifra; costo de envío unificado y reflejado exactamente en checkout; cambio de talla gratis en el primer pedido aunque sea en promoción; canal de soporte dentro de la propia tienda con folio y tiempo de respuesta comprometido; tabla de medidas reales por prenda.

---

## 9. Verificación global (cierre de fase)

Leídos los 7 archivos y cruzados entre sí. Contradicciones y tensiones encontradas, y cómo quedan:

1. **Mystery Box — resuelto.** F1.5 la reportó como "no localizada" (sin página, precio ni contenido). F1.6 la confirma como existente por una línea textual de la política de envío vigente, y F1.2 encontró el asset `fate-mystery-gift.js` en el tema. **Veredicto: existe como extra del checkout; su página de producto, precio, contenido y tallas siguen NO VERIFICADOS.** Se añadió una nota de verificación al final de `f5-precios.md` para que el frente no quede contradicho.
2. **2x1 / 3x1 — resuelto.** F1.5 no los vio como ofertas activas (solo una mención fantasma de "2X1" en el texto de envío). F1.3 los encontró como colecciones en el sitemap (`2x1`, `3x1`, `sudaderas-2x1`, `jeans-classy-3x1`). **Veredicto: las colecciones existen en el sitemap; no se verificó que estén activas como oferta con precios.** No se afirma un 2x1/3x1 vigente.
3. **Buen Fin como "colección permanente" — resuelto.** F1.5 la llamó "colección permanente en la navegación" (la URL existe, no es un pop-up); F1.1 no confirmó permanencia como promo (comunicación acotada 13–17 nov). **Veredicto: la URL existe; la campaña es fechada. La pista previa de "promo permanente" queda NO CONFIRMADA.**
4. **Summer-sale — resuelto.** Ningún frente la encontró: ni en navegación, ni en el sitemap de 58 colecciones (F1.3), ni en búsqueda. El intento directo de F1.1 devolvió 429 sin reintento. **Veredicto: no existe evidencia de que exista; la pista previa queda corregida.**
5. **Costos de envío — confirmado por 4 frentes.** F1.1, F1.5, F1.6 y F1.7 reportan la misma discrepancia con las mismas cifras. Es un hallazgo sólido, no un error de lectura.
6. **Cloudflare — matizado, sin contradicción.** F1.2 lo confirma a nivel de borde y deja sin verificar la zona propia del comerciante. Ningún frente afirma más que eso.
7. **Precios — consistentes.** Las mismas cifras ($1,299 / $599 / $760 / $840 / $315; escalera −10/−20/−30%; tachado 2.5×) aparecen en F1.1, F1.5 y F1.6 sin discrepancias.
8. **Instagram/TikTok/UCP/soporte — consistentes.** 164,831 seguidores (F1.4) no contradice a F1.3 (que no los verificó); TikTok probable-no-confirmado en F1.3 y F1.4; UCP/MCP en F1.2 y F1.3; Railway + Chatwoot en F1.2, contenido no leído en F1.6/F1.7 (429).
9. **Klaviyo vs. newsletter no observada — sin contradicción.** F1.2 observó el script de Klaviyo; F1.4 no observó formulario de suscripción en el texto de la home. El script existe; el formulario visible no se constató por lectura de texto.

**Correcciones aplicadas en esta verificación:** nota de verificación añadida al final de `f5-precios.md` (Mystery Box existe como extra del checkout). Ningún otro archivo de frente necesitó corrección; las demás tensiones eran de redacción y quedan resueltas en este consolidado.

---

## 10. Qué quedó sin verificar (consolidado)

- **Checkout real:** pasos, métodos de pago en pantalla, descuento extra en Buen Fin, transportista y costo final de envío por dirección, post-compra. Requiere iniciar una compra (fuera de alcance de esta fase).
- **Mystery Box:** página de producto, precio, contenido, tallas, disponibilidad.
- **2x1/3x1:** si las colecciones del sitemap están activas como oferta.
- **Summer-sale:** sin evidencia de existencia.
- **Redes:** ritmo de publicación y captions de Instagram; perfil, contenido y seguidores de TikTok; canal de YouTube (nombre, suscriptores, catálogo); Biblioteca de Anuncios de Meta; gasto publicitario. Requiere pasada con navegador en vivo y/o sesión.
- **GEO real:** presencia/ausencia en respuestas de ChatGPT, AI Overviews, Perplexity, Copilot. Requiere interrogar a los motores.
- **SEO:** meta description, JSON-LD, posiciones exactas, tráfico, número total de productos indexados, contenido de `sitemap_agentic_discovery.xml` (429, no reintentado).
- **Reseñas:** contenido, cantidad y tono de "RESEÑAS DE CLIENTES"; satisfacción general; desenlace de la queja de TikTok.
- **Logística:** mensajerías utilizadas, tarifa negociada, almacén/3PL, stock por talla, total de SKUs, costos reales de producto/pasarela/marketing.
- **Empresa:** plan de Shopify, apps del admin, ventas en US/CA, tienda física, redirección `f4-t3.co` → `f4t3.co`, veracidad de "168,783 personas" y de la estimación de Particl.
- **Front:** header/footer/menú, filtros, vista móvil real, rendimiento medido, rango de precios del catálogo, total de productos en Gorras.

**Causas técnicas recurrentes:** el servicio de lectura devolvió 429 (límite de peticiones) en varios frentes al final de la sesión (sitemap agentic, `soporte.f4t3.co`, colección summer-sale, políticas, fichas adicionales). Ninguno se reintentó, conforme a la regla. Una segunda pasada con navegador en vivo cerraría la mayoría de estos huecos.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

Lo que F4T3 enseña para la empresa dropshipping con IA + UGC, en una línea por lección:

1. **El precio real es el precio con descuento por volumen, no el tachado.** El tachado 2.5× es ancla; el cliente aprende el precio efectivo y el precio pleno pierde credibilidad.
2. **La urgencia no puede venir del descuento si el descuento es permanente.** Tiene que venir de novedad, stock, financiamiento o fecha.
3. **El volumen se diseña:** 6X1 con "combina diseños y tallas" elimina la fricción del pack; el envío gratis por cantidad fuerza el ticket hacia arriba.
4. **La fricción postventa es el riesgo reputacional mayor:** solo crédito en tienda + sin cambios en promo + plazos largos + soporte solo por DM = queja pública cuando algo sale mal.
5. **Paid + creadores por performance es el motor, no el SEO.** Blog muerto desde 2022, cero contenido informativo, y sin embargo la tienda vende: la adquisición es ads + UGC, no orgánico de buscadores.
6. **La infraestructura agentic es ventaja real y barata de copiar:** `/agents.md` + UCP/MCP cuestan poco y casi nadie en México los tiene.
7. **La inconsistencia de precios entre páginas propias destruye confianza en el checkout.** Un solo lugar de verdad para cada precio.
8. **El nombre de marca importa para ser encontrado:** FATE/F4T3 compite con homónimos (neumáticos, anime, juegos) y no aparece en listados editoriales de su categoría.

---

## Fuentes

- Frentes F1.1–F1.7 en `~/workspace/your_files/e-larping/informes/f4t3/` (cada uno con sus fuentes y límites).
- Sitio: https://www.f4t3.co/ (home, colecciones, fichas, políticas, robots.txt, sitemap.xml, agents.md, .well-known/ucp) — lecturas del 13 nov 2026.
- Terceros citados en los frentes: podcast SIMU ep. 72 (Podjoint), ELLE México oct 2023, Particl, comparativa Profeco oct 2026, listados de The Title / Pousta / CoolhunterMX / Merca20.
