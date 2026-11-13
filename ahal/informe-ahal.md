# Informe consolidado — Ahal · Fase 2, WO-E-LARPING

- **Sitio:** https://www.ahal.mx/ (marca visible: AHAL Bio Cosmética — "Maquillaje Orgánico Cruelty Free"; cosmética natural mexicana, Monterrey)
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

**OBSERVADO.** Ahal es una marca mexicana de cosmética natural / bio cosmética (Monterrey, fundada en 2010 por la ingeniera química Iliana Loza; más de 300 ingredientes naturales, mayoría mexicanos; razón social LABORATORIO BIOCOSMETICA SA DE CV) que vende en https://www.ahal.mx/ sobre **Shopify** (confirmado por `robots.txt`, `/agents.md` y cabecera `powered-by: Shopify`; ID de tienda 6793053, `ahal-bio.myshopify.com`, tema MyShopiguru V1 v14.9.9), con **PageFly v4.15.12** en sus landings de producto. Su título de home — "Maquillaje Orgánico Cruelty Free - AHAL Bio Cosméticos" — sí lleva palabras clave de categoría, a diferencia de F4T3.

**El negocio en una frase:** vende a precio de lista fijo sin tachados en su propia tienda; el descuento llega por **volumen (3X2 en toda la tienda)**, por **regalos por umbral** (Kit de 3 Mini Jabones Faciales >$1,800) y por **envío gratis por umbral** (>$2,000). Es el modelo inverso a F4T3: aquí el precio base no está rebajado; lo que se rebaja es el ticket total cuando el carrito crece. Quien compra 1 sola pieza paga el precio más alto del sistema y no activa ningún beneficio.

**Tres rasgos que la distinguen:**
1. **Autoridad ganada en retail, la más fuerte de los sitios investigados hasta ahora:** única marca mexicana de cosmética orgánica seleccionada por Sephora (programa Sephora Accelerate, ganadora en México en 2019 entre 100 marcas inscritas), sello Clean At Sephora, presencia en Ulta Beauty (programa "Orgullosamente Latino", sep 2025), Liverpool, Arboleda y Amazon (vendido por Laboratorio Biocosmética); listado oficial de PETA como cruelty-free. Pero Liverpool canibaliza: el Mask & Scrub cuesta $570 (−25%) en Liverpool frente a $830 en ahal.mx.
2. **Contenido educativo como embudo, con la tienda rota en público.** Blog activo (`/blogs/ahal-1`, último artículo observado 1 sep 2025) y AHAL Revista (`/pages/revista`, actualizada 18 ago 2026); landings por producto con "CÓMO USAR"; 5,209 reseñas con foto (4.7/5) en home. Y al mismo tiempo: **error Liquid reproducido en vivo en la compra rápida del Kit Raíces** (línea 51) **+ segundo error Liquid en Sleeping Mask** (línea 133) **+ error Liquid en el layout del tema** (línea 156) en las 3 landings — la pieza de cierre del embudo (el kit) no muestra precio ni formulario de compra.
3. **La caducidad es la diferencia estructural.** El excedente no se liquida: caduca. No se publica caducidad, PAO ni vida útil en las páginas leídas, ni calendario de lotes. La devolución es con gift card (mínimo 20% del precio pagado), sin devolución en rebaja/descuento, 60 días; y el descargo por alergias dice dos veces "no somos responsables" — en cosmética, donde la irritación es el pain point clásico, ese descargo es el terreno donde nace la queja, aunque no se encontró ninguna queja de irritación pública.

**Pista previa corregida:** «en la landing del Kit Raíces se ve un error `Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product` — el prefijo `pf-` sugiere PageFly». Verificado: PageFly **confirmado** (CDN `cdn.pagefly.io/pagefly/4.15.12/core/helper.js`, dominios `analytics.pagefly.io` / `apps.pagefly.io`, `window.__pageflyProducts`); el error **se reproduce en la descarga cruda** de la página; y PageFly no es solo el Kit Raíces: también aparece en `/pages/tonicmist-landing` (sección `pf-c0b3641c`) y `/pages/maskscrub-landing` (sección `pf-0e732f27`). "Sobre Cloudflare": **confirmado solo a nivel de borde** (`Server: cloudflare`, `CF-RAY`) — no se distingue si es infra propia de Shopify o zona propia del comerciante.

---

## 1. Qué es Ahal

**OBSERVADO.** Cosmética natural / bio cosmética mexicana, fundada en 2010 en Monterrey por la ingeniera química Iliana Loza. Más de 300 ingredientes naturales de pequeños productores mexicanos; fórmulas sin sintéticos innecesarios; sello Clean At Sephora; listado oficial de PETA como cruelty-free. Razón social: LABORATORIO BIOCOSMETICA SA DE CV. Prensa y listados: El Universal (~sep 2023), NotiMX (ago 2023), Merca20 (2025), Mujer de 10 (2025), Glamour (vía QueTalVirtual); al menos 5 episodios de podcast con la fundadora (2020–2022); perfil en Bien Bonita (mar 2024).

**OBSERVADO.** Catálogo (13 nov 2026): Tonic Mist $850 (100 ml), Mask & Scrub $830, serums Edición Limitada $980–$1,080 (33 ml: Kalahari $980, Opuntia $1,080), Sleeping Mask Edición Limitada $1,390 (50 g, agotada, con el rótulo "Ahorras 0%"). Minis como puerta de entrada: Mini Tonic Mist $290 (20 ml) frente a $850 (100 ml) — prima por ml de +70,6%. Kits de rutina: KIT Raíces (Mask & Scrub + 3 minis), KIT Back to Beauty, Kit Winter Revival, 3 Pack Jabones. Ediciones Limitadas de disponibilidad reducida. El precio del Kit Raíces **no se pudo observar** (ver §9, C4).

**OBSERVADO.** Retail declarado: Sephora, Ulta Beauty, Liverpool, Arboleda y Amazon. La home exhibe prueba social propia: **4.7/5 a partir de 5,209 reseñas** (widget Loox, leído el 13 nov 2026) — Loox indica 3,555 en su conteo (ver §9, C1).

---

## 2. Front end (F2.1)

**OBSERVADO.** Landings de producto con PageFly: Kit Raíces (`/pages/kitraices-landing`), Tonic Mist (`/pages/tonicmist-landing`, lectura directa completa, 126 líneas, sin error Liquid visible, 4 GIFs, Mini $290 / Tonic Mist $850 / Mask & Scrub $830) y Sleeping Mask (`/pages/sleepingmask-landing`). Estructura de URLs Shopify (`/collections/<slug>`, `/products/<slug>`, `/search?q=…`, `/cart`, `/pages/<slug>`); assets desde `cdn.shopify.com/s/files/1/0679/3053/`.

**OBSERVADO.** **Errores Liquid visibles en la página pública (no errores internos):** en Kit Raíces, bajo "COMPRA RÁPIDA": `Liquid error (sections/pf-1134a0a4 line 51): product form must be given a product` — el formulario de compra del kit no se muestra (o se muestra roto) y el precio del kit no apareció. En Sleeping Mask, segundo error: `Liquid error (sections/pf-2ca009e8 line 133): product form must be given a product`. Además, error Liquid en el layout del tema (línea 156) en las 3 landings.

**OBSERVADO.** Anomalía de disponibilidad en las fichas: la misma ficha muestra **"Agotado" y "En stock y listo para enviarse" a la vez**, con fecha estimada de llegada vacía ("Fecha estimada de llegada: ."). En Mini Tonic Mist los metadatos Open Graph dicen `Availability: InStock`, mientras la instantánea de búsqueda de Opuntia (~12 nov 2026) muestra "Ahorras 0% Agotado". La Sleeping Mask Edición Limitada ($1,390) sí muestra "Agotado" con `Availability: OutOfStock` — el estado "Agotado" existe como estado real en el catálogo. INFERIDO (confianza media): el texto "Agotado" junto a "Ahorras 0%" parece un defecto de plantilla/tema, no un agotamiento real — pero no se puede descartar lo contrario; la disponibilidad real queda NO VERIFICADA (ver §9, C2).

**OBSERVADO.** Envíos y devoluciones en la ficha: texto de política visible (ver §7). Búsqueda y navegación Shopify estándar. Contenido y mensajes comerciales centrados en ingredientes, ritual y educación ("CÓMO USAR").

**NO VERIFICADO.** Precio del Kit Raíces; disponibilidad real de Opuntia y Mini Tonic Mist; contenido completo de la guía de tallas (no aplica); rendimiento medido; vista móvil real.

---

## 3. Back end + stack (F2.2)

**OBSERVADO.** Shopify confirmado: `robots.txt` ("# Shopify storefront"), `/agents.md` ("This store is built on [Shopify](https://www.shopify.com)"), cabecera HTTP `powered-by: Shopify`. Borde Cloudflare (`Server: cloudflare`, `CF-RAY`, `Nel: cf-nel`, `Report-To: a.nel.cloudflare.com`) — sin distinguir si es infra de Shopify o zona propia del comerciante. PageFly v4.15.12 confirmado (ver §2). Sitemap: 71 URLs de productos vs. 70 en `products.json` (ver §9, C5).

**OBSERVADO.** Terceros: **Klaviyo** (email), **Loox** (reseñas), **Wizybot**, countdown de Essential Apps, **GA4** (`G-HWXEC6EJS3`), Meta Pixel + Conversions API, probable píxel de TikTok. **UCP/MCP nativo activo** (Shopify Payments inferido). **PayPal en el storefront pero ausente del perfil UCP** (ver §9, C6). Página `/pages/kueski` (Kueski Pay: pago en 12 quincenas sin tarjeta de crédito, visible en la ficha de producto).

**INFERIDO.** La capa de descubrimiento para agentes de IA existe (`/agents.md`, endpoint UCP, `sitemap_agentic_discovery.xml`), pero es **el texto estándar generado por Shopify, idéntico en estructura al de F4T3** — infraestructura de plataforma, no inversión propia de Ahal en GEO.

**NO VERIFICADO.** IDs de analítica adicionales; pasarela exacta y adquirente; si la zona Cloudflare es propia del comerciante; contenido de landings no leídas; interior del checkout.

---

## 4. SEO / GEO + presencia digital (F2.3)

**OBSERVADO.** Autoridad externa **la más fuerte de los sitios investigados hasta ahora en este frente**: única marca mexicana de cosmética orgánica seleccionada por Sephora (Sephora Accelerate, ganadora en México en 2019 entre 100 marcas inscritas), sello Clean At Sephora, Ulta Beauty (programa "Orgullosamente Latino", sep 2025), Liverpool, Arboleda, Amazon (vendido por Laboratorio Biocosmética). Prensa y listados convergentes (El Universal, NotiMX, Merca20, Mujer de 10, Glamour, PETA, podcasts de la fundadora).

**OBSERVADO.** A diferencia de F4T3, Ahal **sí hace content marketing**: blog activo (`/blogs/ahal-1`) con artículos educativos sobre ingredientes (tuna, bakuchiol, ingredientes "relleno") — el más reciente observado es del 1 sep 2025 — y **AHAL Revista** (`/pages/revista`, actualizada 18 ago 2026) como pieza editorial de marca. El contenido es el producto: cada artículo de ingrediente termina en los productos que lo contienen. Además: quiz de skincare, shade finder, programa de embajadoras, localizador de tiendas.

**OBSERVADO.** Sin oferta propia de Buen Fin 2026 (ni en la tienda ni en anuncios observables). Sin pauta agresiva observable.

**INFERIDO (confianza media-alta).** La estrategia digital es **contenido educativo + autoridad retail + comunidad**, no paid agresivo ni promociones. El SEO técnico es el estándar de Shopify (correcto pero no distintivo); el diferencial es la **autoridad ganada en retail y prensa**, que los motores de respuesta sí pueden citar.

**NO VERIFICADO.** Posiciones reales en Google/Bing, tráfico orgánico, volúmenes de búsqueda, citas en respuestas de ChatGPT / Google AI Overviews / Perplexity, número de seguidores en Instagram/TikTok, gasto publicitario, cualquier campaña de Buen Fin 2026 propia.

---

## 5. Redes sociales + embudo (F2.4)

**OBSERVADO.** Tres redes confirmadas: **Instagram (@ahal_bio, verificada, 160,715 seguidores)**, **TikTok (@ahal_bio, cuenta existente con al menos un video propio)** y **Facebook (AhalBio, handle confirmado en prensa; la página en sí no se pudo abrir)**. Cuarto canal de facto: la cuenta personal de la fundadora, **Iliana Loza (@ilianalog en Instagram y TikTok)**, que funciona como cara y educadora de la marca — un video suyo tracciona ~68× más que el de la marca (6,768 vs. 100 likes). No hay evidencia observable de canal propio de YouTube, X/Twitter ni Pinterest (no prueba que no existan).

**OBSERVADO.** El embudo es **educativo y de confianza, no promocional**: red (rutina/ritual) → landing educativa con "CÓMO USAR" → kit o producto con reseñas con foto → checkout, con las **reseñas de clientas (4.7/5, 5,209 reseñas, con foto y video) como prueba social central** y los **kits/landings (Kit Raíces, Tonic Mist) como piezas de cierre**. No se observó ninguna oferta de Buen Fin propia de Ahal en lo rastreado, a diferencia de F4T3.

**OBSERVADO.** Lo educativo sí se observa (rutinas, "CÓMO USAR" con frecuencias, videos de la fundadora citados por las propias clientas). El antes-después formal (galería de fotos antes/después) **no** se observa; lo que existe es **testimonio narrativo de mejora** en las reseñas ("mi piel ha mejorado muchísimo", "disminución de los puntos negros").

**NO VERIFICADO.** Ritmo de publicación y captions de Instagram (la lectura del perfil devolvió solo metadatos, sin publicaciones, bio completa ni fechas; el lector devolvió error 429 a mitad de la sesión y no se pudieron abrir el perfil de TikTok ni la página de Facebook). Seguidores de TikTok y Facebook; contenido concreto de TikTok; anuncios pagados.

---

## 6. Precios (F2.5)

**OBSERVADO.** Ahal no vende con precio tachado en su propia tienda: vende a **precio de lista fijo** y el descuento llega por volumen (3X2), regalos por umbral y envío gratis por umbral. Las tres mecánicas visibles el 13 nov 2026 en `/collections/all` (carrusel repetido en toda la página): (1) **3X2 EN TODA LA TIENDA** — llevas 3, pagas 2; (2) **envío gratis en compras mayores a $2,000**; (3) **Kit de 3 Mini Jabones Faciales de regalo en compras mayores a $1,800**.

| Producto | Precio (OBSERVADO) | Contenido | Precio por ml/g |
|---|---|---|---|
| Tonic Mist | $850.00 | 100 ml | $8.50/ml |
| Mini Tonic Mist | $290.00 | 20 ml | $14.50/ml (+70,6% por ml) |
| Mask & Scrub | $830.00 | — | — |
| Opuntia Facial Serum LE | $1,080.00 | 33 ml | $32.73/ml |
| Kalahari Facial Serum LE | $980.00 | 33 ml | $29.70/ml |
| Sleeping Mask LE | $1,390.00 | 50 g | agotada ("Ahorras 0%") |

**OBSERVADO.** El único tachado observado en todo el ejercicio está **fuera** de ahal.mx: en **Liverpool**, el Mask & Scrub se vende a **$570 con tachado de $760 (−25%)** y la base líquida mate a $555 con tachado de $740 (−25%), frente a $830 en ahal.mx. Liverpool canibaliza el precio de la tienda propia.

**OBSERVADO.** Regalo por umbral con dos valores en el tiempo: colorstick de regalo en compras mayores a **$1,700** (publicación de la marca, agosto 2026, vía directorio de negocios) vs. Kit de 3 Mini Jabones en compras mayores a **$1,800** (marquee actual, noviembre 2026) — ver §9, C3. **Kueski Pay hasta 12 quincenas** sin tarjeta de crédito (ficha de producto); no hay MSI bancario. El precio del Kit Raíces no se pudo observar por el error Liquid (ver §9, C4).

**INFERIDO.** El precio "real" de Ahal es el precio de lista; el 3X2 es el descuento efectivo (−33,3% con 3 piezas iguales) y los regalos por umbral son el incentivo de ticket. Quien compra 1 sola pieza paga el precio más alto del sistema y no activa ningún beneficio: ni 3X2, ni regalo, ni envío gratis. **Ahal no rebaja precio de lista en tienda propia.**

**NO VERIFICADO.** Precio del Kit Raíces; vigencia exacta del 3X2; si el 3X2 aplica a Ediciones Limitadas; MSI bancario (no observado); precios de envío (no publicados en la política).

---

## 7. Logística como hipótesis (F2.6)

**OBSERVADO.** Centro logístico propio declarado; procesamiento en **1 día hábil**; despacho el mismo día o el siguiente. Entrega estimada **1–6 días hábiles** desde el despacho; **solo México**; sin garantía de fecha; extensiones en Buen Fin / Hot Sale / diciembre. **No se publica ningún costo de envío ni umbral de envío gratis** en la política leída. **Ninguna mensajería nombrada** en ninguna página revisada ("la paquetería", "empresas de mensajería", "operador logístico"). Seguimiento por guía enviada por correo; incidencias por WhatsApp 8114753065.

**OBSERVADO.** Devoluciones: **60 días**, solo compras en ahal.mx, **sin devolución en rebaja/descuento**, bonificación con **gift card (mínimo 20% del precio pagado)**, resolución en máximo 15 días; daños de transporte: 5 días hábiles para reportar con foto. La devolución de un producto abierto no se puede revender (higiene): la gift card es la única salida que no destruye valor dos veces.

**OBSERVADO.** **No se publica caducidad, PAO ni vida útil** en las páginas leídas, ni calendario de lotes. La merma por caducidad es la partida que no existe en moda y que decide el tamaño del lote: si el costo de producto por serum supera ~$300 y la merma supera ~5% del lote, el pedido suelto deja de ser rentable antes de fijos (modelo propio, ver abajo).

**HIPÓTESIS (F2.6).** El pedido de rutina es el corazón del negocio, no el serum suelto (a $1,080 por un serum, el margen de un solo producto es delgado una vez sumados envío, empaque de vidrio y BNPL; la ganancia está en que el cliente compre dos productos de rutina, $1,930, y en que el envío se diluya en una sola guía). El vidrio es un costo logístico, no solo estético (empaque protector + peso + rotura en tránsito; incidencias con 5 días para reportar daños con foto del embalaje). El BNPL en 12 quincenas es un costo de conversión, no un regalo (comisión mayor que la de tarjeta). Sensibilidad clave: si el costo real de producto por serum supera ~$350, el pedido de 1 producto a $1,080 deja de ser rentable antes de fijos; si la merma por caducidad supera el 8–10% del lote, el modelo exige lotes más pequeños aunque el costo unitario suba.

**MODELO PROPIO (no son cifras de Ahal).** Para una tienda mexicana de cosmética natural del mismo perfil: el pedido de 1 serum a $1,080 con envío, empaque de vidrio (2–6%) e incidencias; el pedido de rutina de 2 productos ($1,930) como corazón del negocio; la merma por caducidad como partida decisiva del tamaño de lote. Los rangos de paquetería son de referencia pública 2026 (Profeco, *Revista del Consumidor* oct 2026), no tarifas negociadas de Ahal. No estima costos fijos ni punto de equilibrio; no incluye pauta pagada ni el canal retail (Sephora/Ulta/Liverpool: márgenes, exigencias de caducidad y devoluciones son un P&L aparte que comparte el mismo lote de producción).

**NO VERIFICADO.** Mensajerías utilizadas; costo de envío y umbral de envío gratis vigente (no publicados en la política); caducidad, PAO y vida útil por fórmula; rotación real por SKU; costos reales de producto, empaque y BNPL; tasa real de devolución; volumen de ventas en línea vs. retail.

---

## 8. Pain points (F2.7)

**OBSERVADO.** **Hallazgo central: no se encontró ninguna queja pública directa y atribuible a Ahal.** Tras 13 búsquedas dirigidas (reseñas, quejas, reembolsos, envíos, Trustpilot, Reddit/foros, TikTok, alergias/irritación, precio) y la lectura directa de su página agregada de reseñas en Loox, no apareció ni un solo reclamo público de un cliente contra Ahal: ni por reembolso, ni por envío perdido o tardío, ni por irritación, ni por precio, ni por atención al cliente. No existe perfil localizable de ahal.mx en Trustpilot, no se encontraron hilos en Reddit ni videos de queja en TikTok atribuibles a la marca.

**OBSERVADO.** Lo que sí existe es **un corpus grande de reseñas de la propia tienda (3,555 reseñas en Loox) abrumadoramente positivas, dentro de las cuales aparecen quejas menores incrustadas**: empaques defectuosos, ardor inicial de la Sleeping Mask, el rímel que se separa si no se agita y baja las pestañas, y la base líquida que ya no sale por el aplicador cuando se está terminando. Son fricciones de producto, no de servicio, y todas aparecen dentro de reseñas que en conjunto recomiendan la marca.

**OBSERVADO.** Segunda capa de fricción estructural: **el descargo de responsabilidad por reacciones alérgicas de sus propios términos del servicio**, que traslada toda la responsabilidad de una reacción al cliente (prueba en zona pequeña, dejar de usar, consultar a su médico; "no somos responsables si se produce una reacción de este tipo"). El descargo dice dos veces "no somos responsables". En cosmética —donde la irritación es el pain point clásico— ese descargo es el terreno donde nace la queja, aunque esta investigación no encontró ninguna queja de irritación pública.

**INFERIDO.** La ausencia de quejas directas con un corpus de 3,555 reseñas casi unánimemente positivas sugiere operación cuidada y clientes que recomiendan; pero las quejas menores incrustadas (empaque, ardor, aplicador) son las fricciones reales de producto que la empresa nueva debe diseñar desde el inicio (empaque, fórmula, aplicador), no descubrir por reseñas.

**NO VERIFICADO.** Contenido completo de las 3,555 reseñas (solo se leyó la página agregada); quejas en comentarios de Instagram/TikTok no indexados, mensajes directos o Profeco; proporción de clientes con irritación; si el descargo de alergias ha generado alguna reclamación formal.

---

## 9. Verificación global (cierre de sitio)

### C1 — Conteo de reseñas: 5,209 en home vs. 3,555 en Loox (DISCREPANCIA SIN RECONCILIAR)
La home exhibe "4.7/5 a partir de 5,209 reseñas" (widget Loox, 13 nov 2026); Loox indica 3,555 en su conteo. F2.1, F2.3, F2.6 y F2.7 reportan ambas cifras sin poder reconciliarlas (distinta fecha de conteo, distinto criterio —p. ej. reseñas con foto vs. totales— o widget desactualizado). Se consignan las dos con su fuente; ninguna se elige en silencio.

### C2 — Opuntia: "Agotado" y "En stock" a la vez (DEFECTO VISIBLE, DISPONIBILIDAD NO VERIFICADA)
F2.1 y F2.6 coinciden: la misma ficha muestra "Agotado" junto a "Ahorras 0%" y, a la vez, "En stock y listo para enviarse" con fecha estimada vacía. INFERIDO (confianza media): parece un defecto de plantilla/tema, no un agotamiento real — pero no se puede descartar lo contrario sin intentar añadir al carrito (fuera de alcance). Lo que sí es un hecho observable es la **contradicción visible en la página** y la **fecha de llegada vacía**, dos defectos de front end que un comprador ve.

### C3 — Regalo por umbral: $1,700 (ago 2026) vs. $1,800 (nov 2026) (CAMBIO EN EL TIEMPO, NO CONTRADICCIÓN)
F2.5/F2.6: colorstick de regalo >$1,700 en una publicación de la marca de agosto de 2026 (vía directorio de negocios) vs. Kit de 3 Mini Jabones >$1,800 en el marquee actual (noviembre 2026). No hay contradicción: el umbral y el regalo cambiaron entre agosto y noviembre. Se consigna el valor vigente ($1,800, Kit 3 Mini Jabones) y el anterior como referencia temporal.

### C4 — Precio del Kit Raíces no observable (CAUSA IDENTIFICADA)
F2.1 y F2.5 coinciden: el precio del Kit Raíces no apareció en ninguna lectura. La causa está observada: el error Liquid de la línea 51 en la sección "COMPRA RÁPIDA" de su landing impide que el formulario de compra (y con él el precio) se renderice. No es ausencia de precio en el catálogo: es un defecto que lo oculta. Queda NO VERIFICADO hasta que se corrija el error o se lea el precio por otra vía.

### C5 — Sitemap: 71 URLs vs. 70 en products.json (DIFERENCIA DE 1, SIN RESOLVER)
F2.2: el sitemap de productos declara 71 URLs; `products.json` devuelve 70. La diferencia de 1 puede ser un producto sin variante visible, un producto oculto o un desfase de caché. No se censó producto por producto; se consigna la diferencia.

### C6 — PayPal en storefront pero ausente del perfil UCP (SEÑALADO)
F2.2 observó PayPal en el storefront pero ausente del perfil UCP. Implicación: el checkout agentic (UCP) no ofrece PayPal aunque la tienda sí. Queda señalado como inconsistencia entre canales de compra.

### C7 — Errores Liquid en 3 landings (CONFIRMADO POR DOS FRENTES)
F2.1 (lectura directa y vía índice) y F2.2 (descarga cruda) reproducen el error Liquid del Kit Raíces (línea 51); F2.1 documenta además el segundo error en Sleeping Mask (línea 133) y el error en el layout del tema (línea 156). No es un error transitorio de una lectura: es un defecto visible en las páginas públicas de las 3 landings. La landing de Tonic Mist no muestra error Liquid.

### C8 — Liverpool canibaliza el precio propio (CONFIRMADO)
F2.5 observó el Mask & Scrub a $570 (−25% sobre $760) en Liverpool frente a $830 en ahal.mx. No es un error de dato: es el mismo producto más barato en retail que en la tienda propia. Se consigna como hallazgo de canal, no como discrepancia entre frentes.

---

## 10. Qué quedó sin verificar (consolidado)

1. **Precio del Kit Raíces** (oculto por el error Liquid, ver C4) y **disponibilidad real** de Opuntia y Mini Tonic Mist (ver C2).
2. **Ritmo y captions de Instagram:** perfil @ahal_bio con solo metadatos (sin publicaciones, bio completa ni fechas); TikTok y Facebook no se pudieron abrir (429 a mitad de sesión); seguidores de TikTok/Facebook NO VERIFICADOS.
3. **Conteo reconciliado de reseñas** (5,209 en home vs. 3,555 en Loox, ver C1).
4. **SEO/GEO real:** posiciones en Google/Bing, tráfico orgánico, citas en respuestas de ChatGPT / AI Overviews / Perplexity, gasto publicitario, campañas de Buen Fin 2026 propias.
5. **Precios de envío** (no publicados en la política) y **mensajerías utilizadas** (la tienda no nombra ninguna).
6. **Caducidad, PAO y vida útil** por fórmula; rotación real por SKU; calendario de lotes.
7. **MSI bancario** en ahal.mx (no observado; solo Kueski Pay a 12 quincenas).
8. **Vigencia exacta del 3X2** y si aplica a Ediciones Limitadas.
9. **Contenido completo de las 3,555 reseñas** de Loox (solo se leyó la página agregada); quejas en comentarios no indexados, DMs o Profeco.
10. **Interior de la empresa:** costos reales de producto, empaque y BNPL; tasa real de devolución; volumen de ventas en línea vs. retail (Sephora/Ulta/Liverpool); si la zona Cloudflare es propia del comerciante.

---

## 11. Lecciones para la propuesta (puente a la Fase 4)

1. **El precio de lista fijo + 3X2 es el modelo inverso a F4T3 — y funciona sin tachar nada.** Ahal no rebaja el precio base; el descuento es el ticket (3X2 = −33,3% con 3 piezas iguales) más regalo y envío gratis por umbral. Para la empresa nueva: si el producto es de rutina (se compra en conjunto), el descuento por volumen de carrito es más limpio que el tachado por producto — pero hay que vigilar que el cliente de 1 sola pieza no pague el precio más alto del sistema sin ningún beneficio.
2. **La autoridad retail es el activo; el precio retail es el riesgo.** Ser la única cosmética orgánica mexicana en Sephora vale más que cualquier pauta; pero Liverpool vendiendo el mismo producto a $570 frente a $830 en la tienda propia canibaliza el canal directo. Para la empresa nueva: antes de entrar a retail, definir precio mínimo anunciado y coherencia de precio entre canales, o el cliente aprenderá a no comprar en la tienda propia.
3. **El mini es la puerta de entrada — con prima por ml explícita.** Mini Tonic Mist $290 (20 ml) frente a $850 (100 ml): +70,6% por ml. El mini convierte porque baja el ticket de prueba, no porque sea barato por ml. Para la empresa nueva: diseñar el formato de prueba como puerta de entrada y el formato grande como el formato "inteligente", con la prima visible.
4. **La caducidad decide el lote, no el descuento.** En cosmética el excedente no se liquida: caduca. No publicar caducidad ni PAO es un vacío de confianza en un producto que se pone en la piel. Para la empresa nueva: publicar vida útil y fecha de caducidad por lote, y diseñar el tamaño de lote alrededor de la rotación real por SKU antes que negociar la guía.
5. **El error en la pieza de cierre es el error más caro.** El Kit Raíces es la pieza de cierre del embudo educativo — y su compra rápida está rota en público (error Liquid línea 51) y sin precio visible. Dos landings más tienen errores Liquid. Para la empresa nueva: auditar las páginas de cierre (kit, landing, checkout) como las vería un cliente, en cada despliegue; un error Liquid en producción es una venta perdida que no deja rastro en analítica.
6. **El descargo de alergias es el terreno de la queja futura.** "No somos responsables" dos veces, en cosmética, donde la irritación es el pain point clásico. Ahal no tiene quejas de irritación públicas, pero el descargo traslada todo el riesgo al cliente. Para la empresa nueva: prueba de parche guiada, política de devolución por reacción clara y lenguaje que acompañe en lugar de blindarse.
7. **La fundadora tracciona ~68× más que la marca.** El video de @ilianalog (6,768 likes) frente al de la marca (100) muestra que la cara educa y vende más que el logo. Para la empresa nueva: la fundadora (o una cara) como canal de confianza no es opcional en cosmética: es el embudo.
8. **La gift card como devolución retiene valor — pero hay que decirlo antes del pago.** Devolución a 60 días con gift card (mínimo 20%), sin devolución en rebaja: es una política de margen legítima, pero el cliente debe saberlo antes de pagar, no al devolver. Para la empresa nueva: medio de reembolso explícito en la ficha y en el checkout.

---

## Fuentes

- https://www.ahal.mx/ — home (lectura 13 nov 2026; 4.7/5, 5,209 reseñas)
- https://www.ahal.mx/pages/kitraices-landing · https://www.ahal.mx/pages/tonicmist-landing · https://www.ahal.mx/pages/maskscrub-landing — landings PageFly (errores Liquid líneas 51, 133, 156)
- https://www.ahal.mx/pages/revista — AHAL Revista (actualizada 18 ago 2026)
- https://www.ahal.mx/blogs/ahal-1 — blog activo (último artículo observado 1 sep 2025)
- https://www.ahal.mx/collections/all — 3X2, envío gratis >$2,000, regalo >$1,800
- https://www.ahal.mx/pages/politicas-de-devolucion · https://www.ahal.mx/policies/refund-policy — logística y devoluciones (60 días, gift card)
- https://www.ahal.mx/robots.txt · https://www.ahal.mx/products.json · https://www.ahal.mx/agents.md — Shopify, sitemap 71 vs. 70
- https://loox.io/s/4JV5-rlTx — 3,555 reseñas en Loox
- https://www.liverpool.com.mx/ — Mask & Scrub $570 (tachado $760, −25%)
- https://eluniversal-eluniversal-prod.web.arc-cdn.net/de-ultima/descubre-ahal-marca-mexicana-que-apuesta-por-la-cosmetica-limpia/ · https://www.notimx.mx/2023/08/la-nueva-era-de-la-belleza-cosmetica.html — prensa (Sephora Accelerate 2019, Clean At Sephora, Ulta 2025)
- Archivos fuente de los frentes: `f1-frontend.md`, `f2-backend-stack.md`, `f3-seo-geo.md`, `f4-redes-embudo.md`, `f5-precios.md`, `f6-logistica-hipotesis.md`, `f7-pain-points.md` (carpeta `informes/ahal/`, 13 nov 2026)
