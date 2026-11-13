# Propuesta de empresa — OBSIDIANA · Fase 4, WO-E-LARPING

- **Fecha:** 13 nov 2026
- **Alcance:** propuesta de empresa dropshipping con IA + UGC orgánico/viral, sin ads pagados y sin inversión en inventario. Última fase de la WO-E-LARPING.
- **Insumos:** 10 informes de sitio (F4T3 + 9; 70 frentes), síntesis comparativa de la Fase 2, síntesis final de la Fase 3, pipeline generador (Cloudflare Workers + D1, 37 archivos, harness 30/30 PASS).
- **Método:** cada afirmación importante lleva su etiqueta — **OBSERVADO** (visto en fuente pública, con cifra y fuente en el informe de su sitio) / **INFERIDO** (con evidencia y confianza) / **NO VERIFICADO** / **HIPÓTESIS** (propuesta de esta fase, a validar) / **PROPUESTO** (decisión de diseño de esta propuesta, no un hecho). Nada aquí es métrica inventada: las cifras observadas remiten a su informe; los números de esta propuesta son decisiones o escenarios etiquetados como tales.
- **Estado:** hipótesis comercial accionable. Nada se gasta, nada se publica, nadie se contacta en esta fase. El contacto con proveedores, la pasarela de pago y el pedido de muestra son decisiones de Miguel (§13).

---

## 0. Resumen ejecutivo

**La empresa en una frase:** OBSIDIANA vende joyería de diseño accesible en acero inoxidable 316L con acentos de obsidiana, online, con precio visible, promo por volumen y devolución gratuita con reembolso en 3–5 días — y crece solo con contenido UGC orgánico, sin ads y sin inventario.

**El nicho, en 3 líneas (criterio en §1):** de los 10 nichos investigados, la joyería de diseño accesible es el único que combina (a) producto ligero, pequeño, sin tallas, sin caducidad y sin garantía serial — el que mejor sobrevive al envío directo desde China — con (b) un hueco observable: TANE prueba que la joyería vende online en México, pero a precio de lujo ($2,600–$3,300,000 MXN) y con tienda física; nadie en la muestra vende diseño accesible online con precio visible y política de devoluciones cumplida.

**La economía, en 3 líneas (fórmulas en §8):** con precios propuestos de $349–$1,299 MXN y la escalera del pipeline (2 piezas −10%, 3 −20%, 6 −30%), una cesta de 2 piezas de $549 deja ~43% de margen bruto si el costo landed (producto + envío internacional + arancel) es de $250 por pieza — y cae por debajo del 30% si el landed supera ~$320 por pieza. Los costos fijos en v1 son ~$0/mes por diseño (Workers + D1, sin servicios de pago); el único desembolso previo a vender es el pedido de muestra, que necesita aprobación de Miguel con monto exacto. Todo número de costo es HIPÓTESIS hasta que la cotización real del proveedor lo reemplace (§6.4).

---

## 1. La decisión del nicho — matriz de descarte

El nicho no se eligió por gusto: se descartaron los otros 9 nichos de la muestra con su evidencia. El criterio fue: (1) el producto debe sobrevivir al envío directo desde China sin romperse, caducar ni necesitar talla; (2) no debe depender de financiamiento (MSI/BNPL, excluidos de v1 por la síntesis §10.3) ni de un precio fijado por ley; (3) debe tener un hueco observable — demanda probada sin competidor accesible online con precio visible.

| # | Nicho (sitio de referencia) | Veredicto | Razón con evidencia |
|---|---|---|---|
| 1 | Moda/streetwear (F4T3) | DESCARTADO | Incumbente con 164,831 seguidores en IG y adquisición paid + creadores por performance (OBSERVADO); precio efectivo $216.50 por pieza en 6X1, difícil de batir con producto de China + envío + devoluciones; tallas = devoluciones por ajuste. |
| 2 | Deporte/calzado (Charly) | DESCARTADO | Tallas (devolución por talla 8–19% del ticket, OBSERVADO en revendedores); escala de fabricante (150–200 tiendas, 3,500–5,000 puntos de venta). |
| 3 | Cosmética natural (Ahal) | DESCARTADO | Alergias: descargo "no somos responsables" ×2 en la propia tienda (OBSERVADO); caducidad como diferencia estructural (el stock caduca, no se liquida); la confianza es el producto (Sephora Accelerate, PETA) y una marca nueva sin autoridad no la tiene; devolución de producto usado. |
| 4 | Café de especialidad (Buna) | DESCARTADO | Perecedero y pesado (frescura + flete por gramo); el modelo depende de tostado y cafeterías físicas. |
| 5 | Chocolate (Ki'Xocolatl) | DESCARTADO | Térmico: derretido sin política de hielo seco ni suspensión estacional (OBSERVADO: ni Políticas ni Términos lo mencionan); ningún precio vigente verificable. |
| 6 | Tecnología (Cyberpuerta) | DESCARTADO | La garantía es el pain point de la fase (Trustpilot 1.9/5, casos de 30 días y 6 meses, OBSERVADO); el descuento es financiero (12 MSI + bonificaciones bancarias), y el financiamiento está excluido de v1; riesgo de falsificación. |
| 7 | Joyería de lujo (TANE) | DESCARTADO como lujo; el hueco es lo accesible | Precio $2,600–$3,300,000 MXN, 0/250 con `compare_at_price` (OBSERVADO); el modelo es confianza + herencia (1942, RJC, Farfetch) + tienda física (flagship Masaryk + 14 corners). No replicable por un entrante — pero prueba que la joyería vende online en México. |
| 8 | Libros (Gandhi, El Sótano) | DESCARTADO | Ley del Libro fija el precio (OBSERVADO); la promo es por título, no por precio. Sin palanca de precio, no hay propuesta. |
| 9 | Diseño/iluminación (Bandido) | DESCARTADO | Frágil ("materiales frágiles", instructivo 2026, OBSERVADO); venta por cotización y showroom, sin precios ni checkout (404). |
| 10 | Marketplace (Canasta Rosa) | DESCARTADO | Sin caso en la fase: marketplace zombi, sin actividad pública en 2026 (OBSERVADO, verificación Fase 2). |
| — | **Joyería de diseño accesible** | **ELEGIDO** | Ver §1.1. |

### 1.1 Por qué la joyería de diseño accesible sí pasa el criterio

- **Logística (INFERIDO, confianza alta, desde los modelos F6):** una pieza pesa gramos y cabe en un sobre acolchado. Es el producto que menos sufre el envío directo desde China: no se rompe como el vidrio de Bandido, no se derrite como el chocolate de Ki'Xocolatl, no caduca como la cosmética de Ahal ni el café de Buna, no tiene número de serie ni garantía como la tecnología de Cyberpuerta.
- **Sin tallas (OBSERVADO como problema en los descartados):** aretes, collares y pulseras no tienen talla. Los anillos sí — por eso quedan fuera de v1 (§2).
- **Sin autenticidad que probar (INFERIDO):** el material se nombra honestamente — acero inoxidable 316L, obsidiana — no "oro". La lección de Buna (§2.2 de la síntesis: 15% prometido vs. 0–7,2% real) es que la promesa debe cuadrar con la ficha; aquí la ficha dice acero y el producto es acero.
- **Precio visible como ventaja (OBSERVADO):** Bandido y Ki'Xocolatl pierden al cliente que compara porque no publican precio. TANE publica precio pero de lujo. El hueco es precio visible en el rango $349–$1,299 MXN, donde no hay competidor en la muestra.
- **Volumen como mecánica (OBSERVADO):** la escalera de F4T3 y el 3X2 de Ahal funcionan porque el ticket permite la cesta. Con piezas de $349–$649, una cesta de 2–3 piezas es natural (regalo + autorregalo), y el umbral de envío gratis de $2,000 (Ahal y Ki'Xocolatl, OBSERVADO) se alcanza con 3–4 piezas — el umbral es incentivo de cesta, no barrera.
- **UGC nativo (INFERIDO desde Ahal, confianza media-alta):** la joyería se prueba en cámara (try-on), se combina (styling) y se regala (unboxing). Ahal demuestra que la cara del creador tracciona ~68× más que la marca (video de la fundadora 6,768 likes frente a 100 del de la marca, OBSERVADO). El contenido es el producto en uso, no un anuncio del producto.
- **Sourcing alineado con la WO (INFERIDO):** China es el canal estándar para este producto (Yiwu, Guangzhou); la WO pide explícitamente "contacto directo con proveedores en China u otros países". En cosmética o tecnología ese contacto trae fricción regulatoria o de garantía; en joyería de acero, el proveedor es un fabricante con catálogo, no un distribuidor con marca que proteger.
- **La promesa de devoluciones es asequible aquí (INFERIDO, confianza media):** una pieza pequeña, ligera y no usada se repone: si el cliente la devuelve sin uso, se revende; la guía de devolución es la de un sobre, no la de una caja. Por eso la combinación "reembolso 3–5 días + devolución gratuita" — que la síntesis §10.4 declara como meta de diseño no observada en ningún sitio — es financieramente plausible en este nicho y no lo sería en moda (prenda usada) ni en tecnología (producto abierto). La tasa real de devoluciones sigue sin medirse en ningún sitio (síntesis §11): se mide desde el pedido 1 (§8.4).

### 1.2 Lo que esta elección NO afirma

- No afirma que la joyería accesible venda en México: ningún sitio de la muestra la vende. Lo que afirma es que la demanda de joyería online está probada (TANE) y que el segmento accesible con precio visible no tiene competidor en la muestra. La validación es el lanzamiento (§11), no esta propuesta.
- No afirma un tamaño de mercado: posiciones, tráfico y volúmenes no se midieron en ningún sitio (síntesis §11). El plan no usa ninguna cifra de mercado.
- No afirma que el proveedor exista a un precio dado: el costo landed es HIPÓTESIS hasta la cotización (§6.4, §8).

---

## 2. El producto inicial — 5 SKUs, y qué queda fuera de v1

**Catálogo inicial propuesto (PROPUESTO, no observado):** 5 SKUs, espejo del ejemplo del pipeline (5 productos, 8 variantes). Pocos SKUs a propósito: cada SKU es una pieza que se puede probar, fotografiar y explicar; el catálogo crece solo con lo que se vende.

| SKU | Producto | Precio propuesto (MXN) | Papel |
|---|---|---|---|
| OBS-ARE-01 | Aretes Obsidiana | $349 | Entrada: el "mini" de Ahal — baja el ticket de prueba. Sin talla. |
| OBS-COL-01 | Collar Obsidiana | $549 | Core: la pieza que se prueba en cámara y se combina. Sin talla. |
| OBS-PUL-01 | Pulsera Obsidiana | $649 | Core: segunda pieza de la cesta; combina con el collar. Sin talla. |
| OBS-SET-01 | Set Ritual (collar + aretes) | $999 | Cesta diseñada: el cliente que compra 2 piezas paga menos que por separado ($549 + $349 = $898… ver nota). |
| OBS-SET-02 | Set Completo (collar + aretes + pulsera) | $1,299 | Cesta diseñada: el ticket que activa el envío gratis por sí solo. |

**Nota de coherencia (PROPUESTO, a resolver antes de generar la tienda):** el Set Ritual a $999 cuesta más que sus piezas por separado ($549 + $349 = $898). Eso es un error de precio, no una decisión. Antes de generar la tienda real, los precios de los sets se fijan por debajo de la suma de sus piezas (p. ej. Set Ritual $799, Set Completo $1,199) o los sets se eliminan y la cesta la hace la escalera. La regla es la de la síntesis §10.3: el descuento anunciado es el que ve el cliente, variante por variante. Este documento deja la inconsistencia marcada en lugar de esconderla.

**Fuera de v1, con su razón:**
- **Anillos:** tienen talla. La talla es la devolución por ajuste (lección Charly). Entran solo cuando haya guía de tallas verificada con muestras reales.
- **Piezas bañadas en oro o "gold filled" sin certificado:** el material debe nombrarse con exactitud. Acero 316L y obsidiana natural: sí. Cualquier baño: solo con su especificación (micras, si aplica) verificada con el proveedor; si no se verifica, no se vende como tal.
- **Piezas personalizadas o grabadas:** TANE las excluye de cambios (OBSERVADO). Una pieza personalizada no se puede revender tras devolución; en v1, sin personalización.
- **Colecciones de temporada:** el catálogo es permanente en v1. La novedad llega por diseño nuevo, no por liquidación (lección Charly: lo nuevo a precio completo, la temporada anterior liquidada — en v1 no hay temporada anterior que liquidar).

**Material y honestidad (PROPUESTO):** acero inoxidable 316L (hipoalergénico — afirmación que debe verificar el proveedor por escrito, §6.3; la alergia es el pain point clásico de la cosmética de Ahal y no se traslada a la joyería por descuido) + obsidiana natural. Cada ficha dice el material, el peso y el cuidado. Nada de "oro", "baño de oro" ni "premium" sin especificación.

---

## 3. La marca — OBSIDIANA (nombre de trabajo)

**Nombre propuesto (PROPUESTO, no aprobado):** OBSIDIANA. La obsidiana es vidrio volcánico negro, material mexicano con historia prehispánica, oscuro por naturaleza y elegante sin adornos. Es la identidad "oscura y elegante" de la referencia Awwwards (Serotoninn, Fase 0) traducida a un material con historia local — no un nombre inventado sin ancla.

**Antes de adoptarlo (gate, §11 semana 0):** verificar dominio canónico real, handle de Instagram y homónimos (lección 10 de la síntesis: `tane.mx` → 301 → `mx.tane.com` rompió el operador `site:` en dos frentes; Dportenis, Xiocolat y el restaurante Bandido contaminaron búsquedas en cinco sitios). Si el dominio o el handle están tomados por una marca de joyería, el nombre se cambia; no se pelea por un nombre.

**Identidad (PROPUESTO, desde la referencia de la Fase 0):** fondo oscuro, tipografía display grande, fotografía de producto en negro con la pieza como único punto de luz. La tienda generada por el pipeline ya trae radio 0, sin sombras y sin fuentes externas; la fotografía real la pone la tienda (el pipeline genera SVG placeholder). La primera fotografía es la del pedido de muestra (§6.3): sin muestra no hay foto real, y sin foto real no hay UGC.

**Tono (PROPUESTO):** corto, material, sin superlativos. "Acero 316L. Obsidiana. Precio visible. Devolución gratis." — cuatro frases que se pueden verificar en la ficha. Lo contrario es el copy de Buna (15% prometido, 0–7,2% real).

---

## 4. Modelo de negocio

**Cómo gana dinero (PROPUESTO):** vende piezas de joyería de diseño accesible con margen por pieza + margen por cesta (la escalera hace que el cliente lleve 2–3 piezas y el ticket suba; el umbral de envío gratis de $2,000 hace que la cesta suba a 3–4 piezas). Sin suscripción en v1 (Buna demuestra que la suscripción exige cumplir la promesa variante por variante; en v1 no hay historial que la sostenga), sin retail, sin marketplace.

**El embudo por ticket (OBSERVADO, síntesis §7):** ticket medio ($349–$1,299) con catálogo pequeño → embudo de herramienta + contenido, no de persona. El modelo es el de Ahal (embudo educativo: contenido → kit/mini → checkout) con la mecánica de F4T3 (volumen). El cierre no es una cita ni un asesor (TANE, Bandido: ticket alto); es el checkout con precio visible, stock verificado antes del cobro y política publicada.

**El embudo en 4 pasos (PROPUESTO):**
1. **Descubrimiento:** Reel de UGC (try-on, styling, unboxing) → perfil.
2. **Consideración:** el perfil lleva a la tienda; la tienda responde (FAQ, guías de cuidado y combinación, fichas con material y precio) — el contenido citable de la síntesis §6.
3. **Cierre:** checkout con escalera visible, umbral de envío gratis con barra de progreso (ya en el pipeline), stock verificado antes del cobro (409 `out_of_stock` sin descontar, ya en el pipeline).
4. **Retención:** correo de confirmación y de entrega (cola `email_outbox` del pipeline), invitación a publicar su foto (UGC del cliente), y la devolución gratuita como razón para volver a comprar — no un programa de puntos (Gandhi "Página 1" con montos de 2022 sin confirmar no se copia).

**Canales (PROPUESTO):** Instagram como única red orgánica en v1 (F4T3: monocanal en origen; Buna: Instagram como única red orgánica confirmada). TikTok en semana 3 solo si el formato de Instagram funciona — no se abren dos canales a la vez sin saber cuál convierte. Sin Facebook, sin X, sin Pinterest en v1. Sin pauta en v1: el crecimiento es orgánico o no hay crecimiento que medir.

---

## 5. La tienda — pipeline de la Fase 3: qué es real, qué es stub, y los gates antes de vender

La tienda se genera con el pipeline de la Fase 3 (`pipeline/generate.js`, sin dependencias, offline). Lo que ya es real y lo que falta está documentado en `pipeline/README.md`; aquí solo se resume lo que afecta al lanzamiento.

**Real (OBSERVADO, verificado en la Fase 3: harness 30/30 PASS, servidor estático 14/14):** catálogo en D1; precios por volumen y promos calculados en el servidor; carrito valorado en servidor; verificación de disponibilidad ANTES del cobro (409 sin descontar); stock descontado en un solo batch con ledger de movimientos; umbral de stock bajo con webhook `inventory.low`; webhooks `order.created` / `payment.*` / `inventory.low` registrados en D1; auto-respuesta de correo en cola (`email_outbox`); capa agentic (`agents.md`, `/.well-known/ucp` UCP 2026-08-25, MCP `catalog.search`/`lookup`, `cart.create`, `order.lookup`, `/products.json`, permalink `/buy`); JSON-LD Product con precio+stock; robots abierto a crawlers de IA; sitemap.

**Stub (OBSERVADO, documentado en el pipeline):** pago (`authorizePayment()` autoriza de mentira, nunca cobra); correo (`sendEmail()` solo encola, no envía); webhooks salientes sin URL quedan en `no_endpoint`; webhook de pago entrante valida forma, no firma.

**Gates antes de la primera venta (ninguno se salta):**
1. **Pasarela de pago (decisión de Miguel, §13):** conectar Stripe, Mercado Pago o Conekta en `authorizePayment()`, con la clave como secreto (`wrangler secret put`), nunca en el código. Sin pasarela no hay cobro real y la tienda no vende. MSI/BNPL quedan excluidos de v1 (síntesis §10.3): se vende a precio con escalera, no con financiamiento.
2. **Correo (decisión de Miguel, §13):** conectar un proveedor en `sendEmail()` o aceptar que los correos quedan en cola y se envían manualmente. La confirmación de pedido es parte de la confianza; sin ella, el cliente no sabe si su pedido existe.
3. **Despliegue real en Cloudflare (NO VERIFICADO en la Fase 3):** `wrangler dev`/`deploy` y D1 remoto no se lograron en el entorno de la fase (wrangler sin red útil, `database_id` placeholder). El comando exacto está en ambos READMEs. El despliegue es el primer trabajo técnico del lanzamiento (§11 semana 2).
4. **Punto de pickup (decisión de Miguel, §13):** el contrato del pipeline exige un punto de pickup nombrado (nombre, dirección, horario). El ejemplo usa un punto ficticio ("Punto NEGRA — CDMX, Calle Ejemplo 123"), que NO se puede publicar. Opciones: (a) designar un punto real (aliado, locker, entrega acordada); (b) pedir el ajuste del generador para que el pickup sea opcional (cambio pequeño en la Fase 3). Lo que no se hace: prometer pickup sin punto. La síntesis §10.3 ya declara el límite: el pickup observado depende siempre de tienda física real, y una tienda dropshipping sin punto no tiene evidencia de sostener esa promesa.
5. **Dominio y handles (gate de la semana 0):** verificar dominio, Instagram y homónimos antes de adoptar OBSIDIANA (§3).
6. **Precios de los sets (§2):** corregir la inconsistencia del Set Ritual antes de generar la tienda real.

---

## 6. Operación dropshipping — proveedor, pedido, envío, devolución

### 6.1 El modelo: proveedor → cliente, sin inventario

**Modelo (PROPUESTO):** dropshipping puro. El proveedor envía directo al cliente; OBSIDIANA no toca el producto. Sin inventario, sin bulk, sin almacén. La alternativa (bulk al operador y fulfillment nacional) es inventario y queda descartada para v1 — es una opción posterior si el tiempo de tránsito mata la conversión, no el arranque.

**Consecuencia que se declara (INFERIDO, confianza alta):** el tiempo de tránsito es el del proveedor (China → México), no el de un courier nacional. No hay cifra en esta propuesta porque no hay cotización. El plazo se publica al cliente ANTES del pago, con su seguimiento — la lección de F4T3 (entregas de hasta ~12 días naturales con advertencia de demoras) es que el plazo largo se puede publicar; lo que no se puede es esconderlo y que el cliente lo descubra después de pagar.

### 6.2 Dónde buscar proveedor (canales, no nombres)

**Canales a verificar (PROPUESTO, sin proveedores concretos inventados):** Alibaba, Made-in-China y DHgate como directorios de fabricantes; 1688 a través de agente (el idioma y el pago son la barrera; el agente es un costo a cotizar, no un proveedor). Ningún proveedor concreto se nombra en esta propuesta porque ninguno se contactó ni se verificó. La lista corta de 3 proveedores sale del protocolo (§6.3), no de este documento.

### 6.3 Protocolo de verificación del proveedor (checklist)

Antes de vender una sola pieza de un proveedor, se verifica esto — y se guarda la evidencia (capturas, correos, fotos de la muestra) en el repo:

1. **Existencia:** empresa con licencia comercial verificable en el directorio; antigüedad y transacciones visibles en la plataforma; fuera de la plataforma, sin trato.
2. **Material por escrito:** acero inoxidable 316L, hipoalergénico, sin níquel liberable; obsidiana natural (no vidrio teñido). Si el proveedor no lo pone por escrito, no se vende.
3. **Muestra (único desembolso previo, §13):** 1 unidad por proveedor de la lista corta (máximo 3 proveedores). Se paga con tarjeta, con monto exacto aprobado por Miguel. La muestra se somete a: prueba de uso 7 días (piel, sudor, agua), cierre y durabilidad, peso, foto contra realidad, empaque.
4. **Precio y MOQ:** precio unitario a 50/100/300 unidades (el MOQ no debe forzar inventario: si el MOQ mínimo es mayor que la demanda validada, ese proveedor no sirve para v1); precio con envío internacional incluido o separado — el costo landed se calcula con el envío dentro (§8).
5. **Envío:** método, plazo a México, seguimiento, qué pasa si se pierde (reposición o reembolso del proveedor por escrito).
6. **Defectos y devolución al proveedor:** tasa de defectos declarada, quién paga el retorno de defectuosos, plazo.
7. **Banderas rojas (cualquiera descarta):** sin licencia verificable; sin seguimiento; precio 50% por debajo del resto de la lista corta; MOQ que obliga a comprar inventario; "oro" sin especificar baño; presión por pagar fuera de la plataforma; negativa a enviar muestra.

### 6.4 El costo landed — la cifra que falta y cómo se obtiene

**Costo landed = precio unitario del proveedor + envío internacional a México + arancel/impuestos de importación (si aplica) + empaque.** Ninguno de sus componentes está en esta propuesta porque ninguno se cotizó. La cotización del proveedor lo llena; hasta entonces, §8 trabaja con escenarios etiquetados como HIPÓTESIS y con la tabla de "costo landed máximo admisible" que fija el objetivo de la negociación: si el landed real supera ~$320 por pieza, la cesta de 2 × $549 cae por debajo del 30% de margen y hay que renegociar, subir precio o cambiar de proveedor — no vender a pérdida.

**Arancel e importación (NO VERIFICADO):** no se afirma ninguna tarifa ni exención en esta propuesta. Es una verificación del lanzamiento (§11 semana 1): con el proveedor y la mensajería se confirma quién paga el arancel, si el envío es DDP o DAP, y qué pasa si el paquete se retiene en aduana. Si el arancel lo paga el cliente al recibir, se publica antes del pago; si lo absorbe la tienda, entra en el costo landed.

### 6.5 Pedido, envío y devolución — el flujo

1. **Pedido:** el cliente paga (pasarela, §5); el Worker verifica stock en D1 ANTES del cobro (409 si no hay); el pedido se crea y el stock se descuenta con ledger.
2. **Envío:** el pedido se transmite al proveedor (manual en v1: correo o panel del proveedor; el webhook `order.created` queda registrado en D1 y es el punto de conexión para automatizarlo después). El proveedor envía directo al cliente con seguimiento; el seguimiento se comunica al cliente por correo (cola `email_outbox`).
3. **Entrega:** el cliente recibe con seguimiento. Si el paquete se pierde, la reposición o el reembolso es del proveedor según §6.3 punto 5 — por escrito antes de vender.
4. **Devolución (doméstica, no a China):** el cliente devuelve a una dirección nacional (decisión de Miguel, §13: su dirección de recepción o un punto aliado; no se publica una dirección particular sin su aprobación). Devolver a China cuesta más que la pieza y tarda semanas: no es la vía. La tienda paga la guía de devolución (devolución gratuita, publicada), reembolsa en 3–5 días hábiles tras recibir la pieza sin uso, y la pieza se repone al stock si está sin uso. La tasa real de devoluciones y el costo real de la guía se miden desde el pedido 1 (§8.4).

---

## 7. Precios y promo — arquitectura propuesta

**Reglas (PROPUESTO, desde la síntesis §10.3):**
- Precio de lista siempre visible en MXN, en la ficha y en el texto indexable. Sin precio no hay comparación ni citación.
- **Sin tachado en v1:** el tachado solo aparece si el producto se vendió realmente al precio tachado (regla Charly). En v1 no hay historial de ventas: no hay `compare_at_price`. El tachado permanente ~2.5× de F4T3 queda prohibido.
- **Volumen como mecánica principal:** escalera del pipeline — 2 piezas −10%, 3 piezas −20%, 6 piezas −30%. Una sola mecánica, publicada igual en ficha y carrito. (Nota: F4T3 usa 2/4/6; el pipeline implementa 2/3/6. Se adopta la del pipeline porque es la que corre.)
- **Envío gratis por umbral:** $2,000 MXN (Ahal y Ki'Xocolatl, OBSERVADO; ejemplo del pipeline). Por debajo del umbral, tarifa plana publicada de $99 (ejemplo del pipeline). La tarifa plana es lo que paga el cliente; el costo real del courier es otro número (§8) — si el courier real cuesta más de $99, la tienda subsidia la diferencia y lo sabe.
- **Mensajerías nombradas:** Estafeta y FedEx (Ki'Xocolatl las nombra en sus políticas, OBSERVADO; ejemplo del pipeline). La mensajería real del tramo internacional es la del proveedor (§6.4); la nacional, solo si hay tramo nacional.
- **Sin MSI/BNPL en v1** (síntesis §10.3). Sin Buen Fin en v1: no se participa en una campaña sin mecánica legible (lección Gandhi/El Sótano); si se participa después, es con landing y mecánica propias (modelo Cyberpuerta).

**Precios propuestos (PROPUESTO):** Aretes $349 · Collar $549 · Pulsera $649 · Set Ritual $799 (corregido, §2) · Set Completo $1,199 (corregido, §2). Los sets quedan por debajo de la suma de sus piezas ($898 y $1,547 respectivamente) o no se venden.

---

## 8. Economía — fórmulas, no promesas

**Regla de lectura:** todo costo es HIPÓTESIS hasta la cotización del proveedor (§6.4). Lo que sí es aritmética es la tabla de "costo landed máximo admisible": fija el objetivo de la negociación. Los modelos de costo de los frentes F6 son modelos propios de sus autores, no cifras de las empresas, y se citan como tales cuando se usan.

### 8.1 Costo landed máximo admisible por pieza (PROPUESTO)

Costo landed = precio unitario del proveedor + envío internacional a México + arancel/impuestos (si aplica). Para un margen bruto objetivo, el landed no puede superar:

| Precio de lista (MXN) | Landed máximo al 40% de margen | Landed máximo al 50% de margen |
|---|---|---|
| $349 (Aretes) | $209.40 | $174.50 |
| $549 (Collar) | $329.40 | $274.50 |
| $649 (Pulsera) | $389.40 | $324.50 |
| $799 (Set Ritual, corregido) | $479.40 | $399.50 |
| $1,199 (Set Completo, corregido) | $719.40 | $599.50 |

Lectura: si el proveedor cotiza el collar con landed por encima de $329.40, ese SKU no llega al 40% de margen al precio propuesto. La respuesta no es vender a pérdida: es renegociar, subir el precio de lista o cambiar de proveedor.

### 8.2 P&L de un pedido — escenario trabajado (HIPÓTESIS, con sus entradas etiquetadas)

Cesta: 2 × Collar $549 con escalera −10% (2 piezas) = $988.20 de producto + $99 de tarifa plana de envío (por debajo del umbral de $2,000) = **$1,087.20 de ingreso**.

| Concepto | Escenario A (landed $150/pieza) | Escenario B (landed $250/pieza) | Escenario C (landed $350/pieza) |
|---|---|---|---|
| Ingreso (producto + envío cobrado) | $1,087.20 | $1,087.20 | $1,087.20 |
| Costo landed (2 piezas) | $300.00 | $500.00 | $700.00 |
| Costo logístico nacional (courier + empaque, HIPÓTESIS $120 — dentro del rango de los modelos F6: $65–$248 por pedido) | $120.00 | $120.00 | $120.00 |
| **Margen bruto del pedido** | **$667.20 (61%)** | **$467.20 (43%)** | **$267.20 (25%)** |

**Punto de quiebre (aritmética):** para que esta cesta mantenga 30% de margen, el costo total no puede superar el 70% de $1,087.20 = $761.04; menos $120 de logística = $641.04 para 2 piezas, es decir, **landed ≤ ~$320 por pieza**. Ese es el número que la negociación con el proveedor debe defender.

**Provisión de devoluciones (fórmula, no cifra):** provisión por pedido = tasa de devolución × (guía de devolución + margen perdido). Ejemplo con entradas etiquetadas como HIPÓTESIS: tasa 10% × ($120 de guía + $467 de margen) ≈ $59 por pedido. La tasa real no se midió en ningún sitio (síntesis §11) — es el dato que más urge medir desde el pedido 1.

### 8.3 Punto de equilibrio

Costos fijos en v1 ≈ $0/mes por diseño (Workers + D1, sin servicios de pago; el único costo fijo previsible es el dominio, monto anual por verificar en el registrador). Con costos fijos ~$0, el negocio es rentable desde el primer pedido con margen positivo; la pregunta real no es el punto de equilibrio contable sino el volumen que justifica el tiempo. Tabla de escenarios (aritmética, no proyección):

| Margen neto por pedido (HIPÓTESIS) | 10 pedidos/mes | 20 pedidos/mes | 50 pedidos/mes |
|---|---|---|---|
| $250 | $2,500 | $5,000 | $12,500 |
| $450 | $4,500 | $9,000 | $22,500 |
| $650 | $6,500 | $13,000 | $32,500 |

El margen neto por pedido sale de §8.2 menos la provisión de §8.2. Si el volumen no llega, la decisión es cambiar el contenido o el producto, no bajar el precio (bajar el precio sin bajar el landed destruye el margen que la tabla protege).

### 8.4 Qué se mide desde el pedido 1 (sin esto no hay iteración)

- Costo landed real por pieza y por proveedor (cotización → factura).
- Tránsito real China → cliente (días, con seguimiento) y % de paquetes perdidos/retenidos.
- Tasa de devolución real, motivo, costo real de la guía, tiempo real de reembolso.
- Piezas por pedido, % de pedidos con 2+ piezas, % de pedidos que superan el umbral de $2,000.
- Conversión por fuente (Reel → perfil → tienda → pedido), guardados y compartidos por Reel (plan UGC).
- Tiempo de respuesta de soporte y quejas por canal.
- Nada de esto existe hoy: son los campos que el operador llena en D1 (`inventory_movements`, `webhook_deliveries`, `email_outbox`) y en una hoja de seguimiento, no cifras de esta propuesta.

---

## 9. Contenido UGC — resumen (detalle en el plan de 4 semanas)

El plan completo está en [`plan-ugc-4-semanas.md`](sandbox://workspace/your_files/e-larping/propuesta/plan-ugc-4-semanas.md): 4 semanas, 3–5 Reels por semana, con formatos, screens, captions, ritmo y métricas por semana.

**La idea en 5 líneas:**
1. **La cara antes que la marca (INFERIDO desde Ahal):** la fundadora/creadora tracciona más que la marca. El contenido lo protagoniza quien se prueba las piezas, no el logo.
2. **La prueba antes que la promesa:** semana 1 prueba el material en cámara (agua, roce, uso) — el contenido demuestra lo que la ficha afirma.
3. **La combinación antes que el catálogo:** semana 2 enseña a combinar (collar + aretes + pulsera), que es como se vende la cesta de 2–3 piezas.
4. **El unboxing y el cuidado antes que la venta:** semana 3 muestra qué llega y cómo se mantiene; la devolución se explica antes de que haga falta.
5. **El pack antes que el descuento:** semana 4 vende la escalera con el precio conjunto visible — el descuento se entiende en el Reel o no se entiende.

**Mecánica de captura (del método Cambridge):** "comenta [palabra clave]" → DM manual con el enlace al producto. Sin automatización en v1: el DM lo contesta una persona, y si el DM no se contesta, la queja nace en público (lección F4T3).

**Honestidad del plan:** el ritmo y los captions de Instagram quedaron NO VERIFICADOS en toda la fase (429 recurrente, feeds no devueltos). El plan propone ritmos y captions para PROBARLOS, con umbrales de corte explícitos por semana; no afirma que funcionen.

---

## 10. Pain points resueltos — tabla

Cada pain point observado en las Fases 1–2 tiene su resolución en esta empresa y su medida. Si la resolución no se puede medir, no es una resolución, es un deseo.

| Pain point (OBSERVADO, con su sitio) | Cómo lo resuelve OBSIDIANA | Qué lo mide |
|---|---|---|
| F4T3: solo crédito en tienda al devolver | Reembolso al mismo medio de pago en 3–5 días hábiles, publicado antes del pago | Tiempo real de reembolso; % de reembolsos en plazo |
| F4T3: entregas de hasta ~12 días sin aviso claro | Plazo de tránsito publicado antes del pago + seguimiento | Tránsito real vs. publicado; quejas por entrega |
| F4T3: soporte solo por correo e IG DM, sin escalamiento | Soporte por correo con tiempo de respuesta publicado (24 h hábiles, PROPUESTO) y folio = número de pedido | Tiempo real de respuesta; quejas por soporte |
| F4T3: dos versiones de costos de envío el mismo día | Una sola fuente de verdad: mismo precio, mismo envío y misma política en ficha, carrito y checkout | Auditoría mensual ficha vs. carrito vs. checkout |
| Cyberpuerta: política publicada y no cumplida (Trustpilot 1.9/5) | Política corta, medible y cumplible; si no se cumple, se cambia la política con datos, no se esconde | Cumplimiento de plazo de reembolso; reseñas |
| Cyberpuerta: stock fantasma / producto sin stock tras cobrar | Disponibilidad verificada en D1 ANTES del cobro (409 sin descontar, pipeline) | Pedidos con 409; quejas por stock |
| Gandhi: sin cambios ni devoluciones | Devolución gratuita 30 días, reembolso 3–5 días | Tasa de devolución; costo real por devolución |
| Ki'Xocolatl: sin devoluciones; 2 h para reclamar defecto | Devolución 30 días; reclamación por defecto sin ventana de 2 horas | Tasa de devolución; defectos reportados |
| El Sótano: reembolso en 10–15 días | Reembolso en 3–5 días hábiles | Tiempo real de reembolso |
| Ahal: descargo por alergias ("no somos responsables" ×2) | Material 316L hipoalergénico por escrito del proveedor; sin descargo que traslade el riesgo al cliente | Reclamaciones por irritación/alergia |
| Buna: 15% prometido vs. 0–7,2% real | La promesa es la ficha: el descuento anunciado es el que ve el cliente, variante por variante | Auditoría promesa vs. ficha |
| TANE: umbrales y badges contradictorios | Un solo umbral de MSI (n/a en v1), un solo plazo, un solo medio de reembolso | Auditoría mensual de contradicciones |
| Bandido / Ki'Xocolatl: sin precio publicado | Precio visible en ficha, carrito y texto indexable | % de fichas con precio visible (objetivo: 100%) |
| El Sótano: robots bloquea lo que vende | Robots abierto a crawlers de IA; categorías, guías y comparativas indexables | Páginas indexadas; citas en motores de IA |
| Charly: umbral de envío roto por la promo sin regla | Regla publicada: el umbral de $2,000 se calcula sobre el subtotal CON descuento; si la promo lo baja, se cobra la plana de $99 — antes del pago | Pedidos bajo umbral por promo; quejas por envío |
| Ahal: Liverpool canibaliza el precio de la tienda propia | Sin retail en v1: un solo canal, un solo precio | Precio en tienda vs. otros canales (objetivo: sin otros canales) |

---

## 11. Plan de lanzamiento — semanas 0 a 6, con gates

Cada semana tiene su entrega y su falsador: lo que haría parar o cambiar. Sin falsador, el plan es un calendario, no un experimento.

| Semana | Entrega | Falsador (qué haría parar o cambiar) |
|---|---|---|
| **0 — Decisiones** | Miguel decide §13 (nombre, pasarela, pickup, dirección de devoluciones, muestra, sets, correo). Se verifican dominio y handles. | Sin estas decisiones no arranca la semana 1. No se avanza por encima de una decisión pendiente. |
| **1 — Proveedores** | Contacto con 5–10 proveedores por los canales de §6.2; cotización con el protocolo §6.3; confirmación de arancel (DDP/DAP) y tránsito. | Si ningún proveedor pasa los puntos 1–2 del protocolo (licencia, material por escrito) → parar y revisar el nicho. |
| **2 — Muestra + tienda** | Pedido de muestra (máx. 3 proveedores, monto aprobado); prueba de 7 días; tienda generada con el pipeline y desplegada en Cloudflare (primer deploy real); pasarela y correo conectados. | Si el deploy no funciona → no se vende. Si la muestra falla la prueba (mancha, se rompe el cierre, no es lo fotografiado) → se descarta ese proveedor. |
| **3 — Contenido 1** | Guías/FAQ publicadas en tienda (316L, obsidiana, cuidado, devoluciones); UGC semana 1 (prueba); lista de espera abierta. | Si los Reels no llegan al umbral de corte del plan UGC → cambiar de formato, no comprar ads. |
| **4 — Contenido 2 + pre-lanzamiento** | UGC semana 2 (combinación); lista de espera → acceso anticipado. Gate: la pasarela debe estar conectada antes de abrir ventas. | Si la lista de espera no convierte en visitas a la tienda → revisar el gancho, no abrir ventas a ciegas. |
| **5 — Lanzamiento** | Primeras ventas; UGC semana 3 (unboxing + cuidado). Se mide: piezas por pedido, tránsito real, devoluciones. | Si el costo landed real o la tasa de devolución rompen el margen de §8 → pausar y revisar precio o proveedor. |
| **6 — Revisión** | Decisión con datos: seguir / ajustar / parar. UGC semana 4 (pack/escalera). | Criterios: pedidos, margen real por pedido, devoluciones, guardados/compartidos por Reel. Sin datos no hay decisión. |

---

## 12. Riesgos y qué NO hacer

**Riesgos (con su mitigación o su declaración):**
- **Confianza:** la joyería es categoría de confianza y la marca no tiene historia (TANE: 1942). Mitigación: precio visible, devolución honrada, UGC real, cero afirmaciones sin evidencia. No se compra confianza con anuncios (no hay ads).
- **Alergia/níquel:** el riesgo real del producto. Mitigación: 316L por escrito del proveedor + muestra de 7 días en piel. Si el proveedor no lo garantiza por escrito, no se vende.
- **Varianza del proveedor:** la muestra no es el lote. Mitigación: primer pedido pequeño, inspección de la primera remesa, y el proveedor se cambia con datos, no con lealtad.
- **Tránsito largo (NO VERIFICADO):** el envío desde China tarda lo que tarde; si el cliente no lo sabe antes de pagar, es la queja de F4T3. Mitigación: plazo publicado + seguimiento.
- **Aduana/arancel (NO VERIFICADO):** retención o cobro al recibir. Mitigación: verificar DDP/DAP en la semana 1; si el cliente paga arancel, se publica antes del pago.
- **Pasarela (stub):** sin pasarela no hay venta. Es un gate, no un riesgo oculto (§5).
- **Costo de la devolución (NO VERIFICADO):** la promesa de 3–5 días + gratis no tiene costo medido (síntesis §10.4). Mitigación: medirlo desde el pedido 1 y revisar el plazo con datos si no cuadra.
- **Pickup sin punto:** prometerlo sin punto real es la contradicción de TANE. Mitigación: gate §5.4.
- **Dependencia de un canal:** Instagram es el único canal en v1. Si el formato no funciona, no hay plan B pagado. Mitigación: el plan UGC tiene umbrales de corte por semana.
- **Límites del tier gratuito de Cloudflare (NO VERIFICADO):** el pipeline está diseñado sin servicios de pago, pero los límites del tier gratuito no se verificaron en la fase. Si el volumen los supera, el costo aparece — y se decide entonces, con datos.

**Qué NO hacer (de la evidencia):**
- No copiar el tachado permanente ~2.5× de F4T3 ni prometer % que la ficha desmiente (Buna).
- No participar en Buen Fin sin mecánica legible (Gandhi/El Sótano).
- No publicar una política y no cumplirla (Cyberpuerta, Trustpilot 1.9/5).
- No vender anillos en v1 (tallas), ni piezas personalizadas (no revendibles), ni "oro" sin especificación.
- No comprar inventario por MOQ (la trampa del proveedor: el MOQ que obliga a stock).
- No pagar ads antes de la prueba orgánica (sin prueba no hay nada que escalar).
- No lanzar sin la muestra verificada (sin muestra no hay foto real, y sin foto real no hay UGC).
- No prometer pickup sin punto real ni MSI en v1.
- No afirmar tamaño de mercado, conversión ni citas en IA: ninguno se midió.

---

## 13. Decisiones que necesita Miguel

Nada de esto se decide en esta propuesta. Cada punto pide una respuesta exacta; sin ella, su semana no arranca.

1. **D1 — Nombre:** ¿OBSIDIANA sí, no, o con cambio? Y autorización para verificar dominio, Instagram y homónimos.
2. **D2 — Pasarela:** ¿Stripe, Mercado Pago o Conekta? La conexión se hace en su máquina, con sus claves como secreto; Moncho no las ve ni las recibe.
3. **D3 — Pickup:** ¿designa un punto real de entrega (aliado/locker/entrega acordada) o autoriza ajustar el generador para que el pickup sea opcional?
4. **D4 — Devoluciones:** ¿qué dirección nacional recibe las devoluciones?
5. **D5 — Muestra:** aprobar el monto exacto del pedido de muestra (máximo 3 proveedores, 1 unidad por proveedor) y pagarlo con su tarjeta.
6. **D6 — Sets:** ¿Set Ritual $799 y Set Completo $1,199 (corregidos, §2) o se eliminan los sets y la cesta la hace solo la escalera?
7. **D7 — Correo:** ¿conectar un proveedor de correo o enviar manualmente desde la cola `email_outbox`?
8. **D8 — Arranque:** ¿se lanza la semana 0 con estas decisiones o se ajusta primero el nicho o el producto?

---

## 14. Hipótesis por validar (tabla)

| # | Hipótesis | Cómo se valida | Cuándo se sabe |
|---|---|---|---|
| H1 | El costo landed por pieza es ≤ ~$320 (cesta 2 × $549 al 30% de margen) | Cotización + factura del proveedor | Semana 1–2 |
| H2 | El tránsito China → cliente es publicable y aceptable para el cliente | Primeros envíos con seguimiento real | Semana 5 |
| H3 | La tasa de devolución y su costo no rompen el margen | Pedidos reales, §8.4 | Semanas 5–6 |
| H4 | El ritmo y las captions del plan UGC convierten (guardados, clics, registros) | Plan UGC, umbrales de corte por semana | Semanas 3–6 |
| H5 | La cara del creador tracciona más que la marca en joyería (analogía Ahal, observado en cosmética) | Reels con cara vs. Reels de producto, guardados/compartidos | Semanas 3–4 |
| H6 | La escalera (2 −10% / 3 −20% / 6 −30%) se entiende en un Reel y sube las piezas por pedido | % de pedidos con 2+ piezas; comentarios con la palabra PACK | Semana 6 |
| H7 | La lista de espera predice pedidos | Registros → visitas → pedidos | Semanas 4–5 |
| H8 | El despliegue en Cloudflare + D1 sostiene la tienda (el deploy real no se verificó en la Fase 3) | Primer deploy y primeras ventas | Semana 2 |
| H9 | Los límites del tier gratuito no aparecen al volumen de v1 | Uso real de Workers + D1 | Semanas 5–6 |
| H10 | La conversión del checkout Cloudflare-nativo es suficiente (paridad vs. Shopify NO VERIFICADA) | Conversión real visita → pedido | Semanas 5–6 |

---

## 15. Fuentes

- `wo-e-larping.md` (WO; Fases 0–4, contratos, reglas duras)
- `~/workspace/custom-skills/e-larping-reverse-engineering/SKILL.md` (método)
- `sintesis/sintesis-final.md` (§1–§12: tabla maestra, precios, promo, Buen Fin, agentic, SEO/GEO, redes/embudo, logística, pain points, decisión de arquitectura §10, qué no se puede afirmar §11)
- `informes/sintesis-comparativa-9-sitios.md` (§1–§10: mapa de plataforma, 4 lógicas de precio, Buen Fin, agentic, SEO/GEO, 3 embudos, logística, pain points, verificación global, 10 lecciones)
- `informes/verificacion-fase2.md` (sustituciones Minerva → Ki'Xocolatl, Canasta Rosa → El Sótano)
- `pipeline/README.md` + `pipeline/store-config.example.json` (generador, contrato de configuración, real vs. stub, verificación 30/30 PASS y 14/14, límites; ejemplo NEGRA con umbral $2,000, plana $99, escalera 2/3/6)
- `propuesta/plan-ugc-4-semanas.md` (plan de contenido UGC, semanas 1–4)
- Nada subido al repo (lo hace el agente principal al recibir la entrega).
