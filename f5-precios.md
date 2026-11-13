# F1.5 — Precios · F4T3 (FATE™)

- **Sitio:** F4T3 — https://www.f4t3.co/ (tienda mexicana de moda/streetwear, Shopify, sobre Cloudflare)
- **Fecha de la investigación:** 13 nov 2026
- **Frente:** F1.5 (precios) — Fase 1, WO-E-LARPING
- **Método:** solo fuentes públicas. Lectura directa de la home y de las colecciones Playeras, Buen Fin, Sudaderas, Jeans, Playeras cortas (crop) y Gorras, más 4 fichas de producto abiertas en la misma sesión. Sin inicio de sesión, sin compra, sin navegador en vivo.
- **Moneda:** todos los precios en MXN, tal como los muestra la tienda.

> **Convención usada en todo el informe**
> - **OBSERVADO** — precio, promo o texto visto en la página, con URL y fecha (13 nov 2026).
> - **INFERIDO** — hipótesis argumentada a partir de lo observado, marcada como tal.
> - **NO VERIFICADO** — no se pudo ver en esta sesión; no se afirma ni se niega.

---

## 1. Resumen ejecutivo

**OBSERVADO.** F4T3 no vende a precio de lista: vende a precio con descuento permanente y escalonado por volumen. La estructura tiene dos mecánicas distintas que conviven:

1. **Playeras: 6X1** — 1 playera cuesta $1,299; 6 playeras cuestan $1,299 (llevas 6 y pagas solo 1). Precio efectivo por playera en pack: **$216.50**.
2. **Todo lo demás: precio tachado + escalera por cantidad** — el precio visible ya trae ~50–65% de descuento sobre un precio tachado, y baja otro −10% / −20% / −30% al llevar 2 / 4 / 6 piezas.

**OBSERVADO.** El precio tachado es sistemáticamente ~2.5× el precio de venta en los 4 productos con precio absoluto visto (ver §2). El descuento no es un evento: está incrustado en la plantilla de cada ficha de producto y en los badges de cada colección.

**INFERIDO.** El precio "real" de F4T3 es el precio con descuento por volumen, no el tachado ni el unitario. El tachado funciona como ancla; el 6X1 y la escalera −10/−20/−30% son el precio efectivo. Quien compra 1 sola pieza fuera de promo paga el precio más alto del sistema.

---

## 2. Tabla de precios observados por categoría

Precios vistos el 13 nov 2026. Donde la colección solo mostraba el badge de descuento sin precio absoluto, se consigna solo el badge.

| Categoría | Producto observado | Precio de venta (OBSERVADO) | Precio tachado (OBSERVADO) | Descuento sobre tachado | Precio efectivo por volumen (OBSERVADO) | Fuente |
|---|---|---|---|---|---|---|
| Playeras manga corta | Not All Angels Tee Black & Black | **$1,299.00** | — (sin tachado) | — | **6 × $1,299 = $216.50 c/u** | https://www.f4t3.co/products/not-all-angels-luxury-tee-black |
| Playeras manga corta (toda la colección) | 24 productos listados (Cathedral, All My Fears, Letter Cross, Fate Studios, etc.) | No visible en el listado | — | — | Todos con badge **6X1** | https://www.f4t3.co/collections/t-shirts |
| Manga larga | Destino Studios Striped Longsleeve Ivory w/ Black (New Arrival, FW26) | **$599.00** | ~~$1,499.00~~ | −60% (badge "60% OFF") | 2 pzas $539 (−10%) · 4 pzas $479 (−20%) · 6 pzas $419 (−30%) | https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black |
| Sudaderas / Hoodies | All My Fears Hoodie Vantablack | **$760.00** | ~~$1,899.00~~ | −60% (badge "60% OFF") | 2 pzas $684 · 4 pzas $608 · 6 pzas $532 | https://www.f4t3.co/products/all-my-fears-hoodie-black |
| Sudaderas / Hoodies | Cathedral Zip Hoodie Vantablack | **$840.00** | ~~$2,099.00~~ | −60% (badge "60% OFF") | 2 pzas $756 · 4 pzas $672 · 6 pzas $588 | https://www.f4t3.co/products/cathedral-zip-hoodie-vantablack |
| Sudaderas / Hoodies (toda la colección) | 24 productos listados | No visible en el listado | — | Badge **60% OFF** en todos | Escalera −10/−20/−30% (según fichas) | https://www.f4t3.co/collections/hoodies |
| Playeras cortas / Crop tees | Clothes Lie, Feeling Horny, Letter Cross, Starboy, Cheetah, etc. (10+ productos) | **$315.00** (precio uniforme en el listado) | ~~$899.00~~ | −65% (badge "65% OFF") | **$221 al llevar 6 o más** (−30% sobre $315) | https://www.f4t3.co/collections/crop-tees |
| Jeans / Pantalones | Twisted Flare, WB Jeans (varios lavados), Classy Pants | **NO VERIFICADO** (sin precio absoluto visible en el listado) | — | Badge **50% OFF** en casi todos | Escalera aplicable según plantilla general (no verificada en jeans) | https://www.f4t3.co/collections/jeans |
| Gorras / Caps | Colección Gorras | **NO VERIFICADO** (el listado no devolvió productos en la lectura del 13 nov 2026) | — | — | — | https://www.f4t3.co/collections/gorras-caps |
| Sin mangas, Polos, Jackets | Categorías visibles en la home | **NO VERIFICADO** (no se abrieron en esta sesión) | — | — | — | https://www.f4t3.co/ |

### 2.1. Aritmética verificada sobre lo observado

Cálculos propios a partir de precios observados (no son precios nuevos):

- **Ancla tachado ≈ 2.5× el precio de venta:** $1,499 / $599 = 2.50; $1,899 / $760 = 2.50; $2,099 / $840 = 2.50. En crop tees la relación es 2.85× ($899 / $315). **OBSERVADO** (cociente calculado sobre precios vistos).
- **Escalera exacta:** −10% / −20% / −30% se cumple al peso en los tres productos con ficha abierta ($599 → $539 / $479 / $419; $760 → $684 / $608 / $532; $840 → $756 / $672 / $588). **OBSERVADO.**
- **Descuento total combinado (venta + volumen, vs. tachado):** longsleeve a 6 pzas $419 vs. $1,499 = −72%; hoodie a 6 pzas $532 vs. $1,899 = −72%; zip hoodie a 6 pzas $588 vs. $2,099 = −72%; crop a 6+ $221 vs. $899 = −75.4%; playera en 6X1 $216.50 vs. $1,299 unitario = −83.3%. **INFERIDO** (cálculo sobre observados; la tienda no publica estos porcentajes combinados).
- **El "HASTA 80% OFF" de la home** (ver §3) no se vio en ningún producto individual abierto (máximo observado: 65% en crop, 60% en hoodies/manga larga, 50% en jeans). El único descuento observado ≥80% es el 6X1 de playeras (−83.3% efectivo). **INFERIDO:** el "hasta 80%" probablemente se refiere al 6X1, no a un producto con 80% directo.

### 2.2. Comparación dentro de la tienda (mismo diseño, distinto formato)

**OBSERVADO.** El mismo gráfico existe en varios formatos a precios distintos, siempre bajo la misma lógica:

| Diseño | Playera (6X1) | Hoodie (60% OFF) |
|---|---|---|
| All My Fears | Badge 6X1 en colección; precio unitario no visto en listado | $760 (tachado $1,899) — https://www.f4t3.co/products/all-my-fears-hoodie-black |
| Cathedral | Badge 6X1 en colección | Zip Hoodie $840 (tachado $2,099) — https://www.f4t3.co/products/cathedral-zip-hoodie-vantablack |
| Not All Angels | $1,299 (6 × $1,299) — https://www.f4t3.co/products/not-all-angels-luxury-tee-black | Hoodie con badge 60% OFF en colección (precio absoluto no visto) |

**INFERIDO.** La tienda no precia por diseño sino por categoría + formato: la playera es el producto de entrada (precio efectivo más bajo, $216.50 en pack) y el hoodie es el producto de ticket alto ($532–$840 según volumen). El diseño es intercambiable; la categoría fija el precio.

### 2.3. Costos adicionales observados (envío, cambios)

**OBSERVADO** en las fichas de producto (13 nov 2026):

- **Envío Estándar: $179 MXN.** Gratis cuando el subtotal después de descuentos supera **$1,999 MXN** (el texto menciona "incluido el 2X1" — ver §3.4).
- **Envío Premium: $299 MXN**, nunca gratis.
- **"ENVÍO GRATIS LLEVANDO 5 PIEZAS O MÁS"** en las fichas de productos fuera de playeras 6X1. Hay dos umbrales de envío gratis distintos en la tienda ($1,999 de subtotal vs. 5+ piezas); la relación entre ambos no se aclara en la página. **OBSERVADO** (ambos textos); **NO VERIFICADO** cuál aplica cuando se combinan.
- Entrega estimada 4–10 días hábiles tras 48 h de confirmación de pago; aviso de demoras por alta demanda.
- **Cambios/devoluciones:** 30 días naturales desde la recepción, prendas sin uso, etiquetas y empaque. **No aplica a productos en promoción.** Devoluciones voluntarias autorizadas se resuelven con **crédito en tienda** (no reembolso en efectivo, según el texto de la ficha). Si el error es del cliente, el cliente cubre las guías.
- **Hasta 12 meses sin intereses** (home, con fecha límite 17 nov 2026 — ver §3).

---

## 3. Promociones como normalidad

### 3.1. Lo que se ve en la home el 13 nov 2026

**OBSERVADO** — https://www.f4t3.co/ (lectura 13 nov 2026, 19:07 UTC):

- Banner superior con sello "MIPYMES · El Buen Fin, del 13 al 17 de noviembre".
- Titulares: **"PLAYERAS 6X1"** · **"HASTA 80% OFF EN TODO LO DEMÁS"** · **"HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE"**.
- Dos botones/colecciones destacadas: "6X1 EN PLAYERAS" y "HASTA 80% OFF".
- Reclamo de prueba social en toda la tienda: "MÁS DE **168,783** PERSONAS USAN FATE™" (cifra declarada por la tienda; **NO VERIFICADO** de forma independiente).
- Sección "NEW ARRIVALS · FW26 — WRITTEN IN THE STARS".

### 3.2. Buen Fin 2026 — colección propia, con fecha de fin

**OBSERVADO** — https://www.f4t3.co/collections/buen-fin:

- Encabezado: **"HASTA 80% OFF"** y **"ENTRE MÁS LLEVAS, MENOS PAGAS + HASTA 30% EXTRA ADICIONAL"**.
- Es una colección permanente en la navegación (URL `/collections/buen-fin`), no un pop-up; reúne playeras 6X1 y hoodies 60% OFF.
- El Buen Fin 2026 dura **del 13 al 17 de noviembre** (banner de la tienda y calendario oficial del Buen Fin; el 13 nov es el primer día). El "HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE" pone fecha de fin explícita al beneficio financiero.
- **Qué ofrece exactamente:** no hay un descuento Buen Fin distinto listado producto por producto en lo leído: los productos de la colección muestran los mismos badges que en sus colecciones normales (6X1 en playeras, 60% OFF en hoodies). El "HASTA 30% EXTRA ADICIONAL" coincide aritméticamente con la escalera por volumen (−30% a 6 piezas) ya presente en las fichas. **INFERIDO:** el Buen Fin en F4T3 parece ser sobre todo un re-etiquetado de la promo estructural + MSI, no una rebaja adicional visible por producto. **NO VERIFICADO** si existe un cupón o descuento extra en checkout durante el Buen Fin (no se llegó al checkout; no se compró nada).

### 3.3. ¿Permanentes o temporales? Frecuencia observable

| Promo | Carácter según lo observable | Evidencia |
|---|---|---|
| 6X1 en playeras | **Estructural / permanente en la práctica** | Badge en las 24 playeras de la colección, en la home y en la ficha de producto; es el titular principal de la tienda, no un banner fechado. |
| −10/−20/−30% por 2/4/6 piezas ("Entre más llevas, menos pagas") | **Estructural** | Impreso en la plantilla de cada ficha fuera de playeras; encabezado de las colecciones Buen Fin, Sudaderas, Jeans y Crop. |
| Precio tachado 50–65% OFF | **Estructural** | Badges por colección completa (60% hoodies, 50% jeans, 65% crop); el tachado 2.5× es uniforme. |
| Buen Fin (13–17 nov 2026) | **Temporal, fechado** | Banner con fechas; MSI "termina el 17 de noviembre". |
| Summer-sale | **NO VERIFICADO** | La brief de la WO la menciona como colección de promo permanente, pero en esta sesión no se observó ninguna colección, banner ni enlace "summer-sale" en la home ni en las colecciones abiertas. No se afirma que no exista; no se pudo verificar. |
| 3x1 / 2x1 | **NO VERIFICADO como oferta activa** | No se vio ningún "3x1" ni "2x1" como promoción en home, colecciones ni fichas. Ver §3.4 por la única mención de "2X1". |

**INFERIDO (frecuencia).** Con una sola lectura (13 nov 2026) no se puede medir frecuencia histórica. Lo que sí se puede afirmar: el día de la observación —primer día del Buen Fin— la tienda ya operaba con descuento profundo en el 100% de los productos listados en las colecciones revisadas, y ese descuento está construido en la plantilla, no en un banner temporal. Eso es compatible con "la promo es el precio", no con "la promo es la excepción".

### 3.4. La mención fantasma del "2X1"

**OBSERVADO.** El texto de envío en las fichas dice: "Envío Estándar: $179 MXN. Gratis cuando el subtotal después de descuentos, **incluido el 2X1**, supera $1,999 MXN." (fichas Not All Angels Tee, All My Fears Hoodie y Cathedral Zip Hoodie, 13 nov 2026).

**INFERIDO.** La tienda tuvo —o tiene en alguna categoría no revisada— una mecánica 2X1 que hoy no es visible en home, colecciones ni fichas abiertas. Es un residuo de copy: la política de envío la nombra, pero ninguna oferta vigente la ofrece en lo observado. **NO VERIFICADO** si existe un 2X1 activo en alguna categoría (sin mangas, polos, jackets, gorras) o si es texto heredado de una promo pasada. No se debe citar un 2X1 de F4T3 como hecho.

---

## 4. Venta por volumen

**OBSERVADO.** Toda la arquitectura de precios empuja a llevar más de una pieza; no hay ningún incentivo a comprar 1 sola unidad:

1. **6X1 en playeras** — el pack de 6 cuesta lo mismo que 1 ($1,299). Comprar 1 playera es, en la práctica, pagar 6× el precio efectivo unitario ($1,299 vs. $216.50). Es el empuje por volumen más agresivo observado.
2. **Escalera −10% / −20% / −30%** en todo lo demás (2 / 4 / 6 piezas), con el precio por pieza impreso en la ficha ($539 / $479 / $419 en el longsleeve de $599). El cliente ve el ahorro por cantidad antes de elegir talla.
3. **Envío gratis por cantidad** — 5+ piezas (fichas) o subtotal > $1,999 (política de envío). Un pedido de 6 hoodies a $532 = $3,192 supera el umbral; un pedido de 1 hoodie a $760 paga $179 de envío (+23.5% sobre el producto).
4. **"COMBINA DISEÑOS Y TALLAS"** (colección de playeras) — el pack no obliga a repetir diseño ni talla, lo que elimina la fricción típica del volumen (no hay que llevar 6 iguales).
5. **"ENTRE MÁS LLEVAS, MENOS PAGAS"** como titular de colección — el volumen es el mensaje, no un detalle en letra pequeña.
6. **Ticket mínimo implícito:** para que el envío gratis por subtotal ($1,999) se active con precios efectivos de ~$216–$532, el pedido necesita varias piezas o 1–2 hoodies + algo más. **INFERIDO:** el umbral de envío gratis está calibrado para forzar carritos multi-pieza.

**INFERIDO.** El modelo es volumen con margen por unidad protegida por el ancla: el precio tachado ($1,499–$2,099) hace que incluso el precio con −30% ($419–$588) se perciba como ganga, mientras el precio efectivo por pieza en pack ($216.50 en playeras) sugiere un costo de producto bajo y una operación que gana por unidades vendidas, no por precio unitario. Sin acceso a costos, esto es hipótesis sobre el modelo, no sobre sus márgenes.

**NO VERIFICADO:** no se observaron packs prearmados con nombre propio (tipo "Pack 3 playeras"), combos cerrados, mínimos de compra obligatorios ni mayoreo formal. El volumen se logra con reglas de carrito (6X1 + escalera), no con bundles cerrados.

---

## 5. Mystery Box

**NO VERIFICADO — no localizada en esta sesión.**

- La búsqueda `site:f4t3.co Mystery Box` no devolvió resultados (13 nov 2026).
- Ninguna Mystery Box apareció en la home ni en las colecciones abiertas (Playeras, Buen Fin, Sudaderas, Jeans, Crop, Gorras) ni en las 4 fichas de producto leídas.
- No se observó precio, contenido prometido, condiciones ni mención alguna a una caja misteriosa.

Por tanto, en este informe **no se puede describir qué es, cuánto cuesta, qué promete ni qué condiciones declara** — y no se inventa nada de eso.

**Qué sí se puede decir (INFERIDO, con cautela):**

- La ausencia en la navegación principal y en las colecciones revisadas sugiere que, si existe, no es un producto protagonista de la tienda en noviembre de 2026; no está a la altura del 6X1 ni de la escalera por volumen en visibilidad.
- **INFERIDO:** una Mystery Box encajaría con el modelo observado (liquidar inventario por volumen, precio efectivo bajo, ancla de valor alto) — es el formato natural para mover tallas/colores lentos sin rebajar el precio visible del catálogo. Pero esto es una hipótesis de encaje estratégico, no evidencia de que exista.
- **Límite:** una sola sesión de lectura no agota el catálogo (hay categorías no abiertas: sin mangas, polos, jackets, gorras sin productos visibles). La Mystery Box podría vivir en una de ellas, en una colección no enlazada desde la home, o haber existido como drop temporal ya retirado. Queda como **pendiente de verificación** para otro frente o una segunda lectura (búsqueda interna del sitio, Instagram @f4t3.co).

---

## 6. Efecto de espera (hipótesis argumentada)

**Todo lo de esta sección es INFERIDO.** No hay datos de comportamiento de clientes (ventas, conversión, encuestas) en fuentes públicas; la hipótesis se apoya solo en la arquitectura de precios observada.

### 6.1. La hipótesis

**INFERIDO:** Sí, la promo permanente entrena al cliente a esperar — pero no a esperar "la siguiente promo", sino a esperar **el momento en que su carrito sea lo bastante grande** o a que aparezca **un extra temporal** (Buen Fin, MSI, drop). El riesgo no es que el cliente no compre; es que compre solo cuando puede activar el mejor escalón, y que el precio sin descuento pierda toda credibilidad.

### 6.2. Argumentos a favor (desde lo observado)

1. **El descuento no tiene fecha de fin.** El 6X1 y la escalera −10/−20/−30% no llevan contador ni vigencia en lo observado. Un cliente que ve "60% OFF" en todos los hoodies, siempre, aprende que el precio real es $760, no $1,899. El tachado deja de ser una oferta y pasa a ser decoración. Cuando todo está siempre en oferta, la oferta deja de ser un motivo para comprar hoy.
2. **El mejor precio exige volumen o espera.** El precio mínimo por pieza ($216.50 en playeras, $419 en longsleeve, $532 en hoodie) solo se alcanza con 6 piezas. Un cliente que quiere 1 playera y sabe que 6 cuestan lo mismo tiene dos opciones racionales: buscar 5 personas/diseños para completar el pack, o esperar a tener 6 ganas de comprar. Ambas son espera.
3. **El Buen Fin añade un extra fechado sobre una base ya descontada.** El MSI hasta 12 meses "termina el 17 de noviembre" es el único elemento con urgencia real observado. **INFERIDO:** la tienda lo sabe: la urgencia no la pone el descuento (permanente) sino el financiamiento y el calendario. El cliente que ya conoce el 6X1 no corre por el 6X1; corre —si corre— por los 12 MSI.
4. **La política de cambios castiga comprar en promo.** "No aplica a productos en promoción": como todo está en promoción, el cliente que compra pierde el cambio voluntario en la práctica. **INFERIDO:** esto puede reforzar la espera ("mejor pienso bien el pedido, porque no lo puedo cambiar") y empuja a pedidos grandes y meditados en lugar de compras impulsivas de 1 pieza.
5. **El ancla 2.5× es tan uniforme que se vuelve legible.** Cuando todos los tachados son exactamente 2.5× el precio de venta, el cliente atento detecta el patrón y descuenta mentalmente el tachado. El ancla funciona la primera vez; en la segunda visita, el cliente ya compara contra $599/$760, no contra $1,499/$1,899.

### 6.3. Argumentos en contra (lo que mitiga la espera)

1. **El 6X1 no se puede "esperar mejor".** No hay un 7X1 anunciado ni una escalera mayor que 6 piezas en lo observado. El cliente no puede esperar un mejor trato en playeras que 6 por $1,299: ya está en el máximo. La espera solo tiene sentido si se espera un drop nuevo, no un mejor precio.
2. **Los New Arrivals rotan.** La home destaca "NEW ARRIVALS · FW26" y varios productos llevan badge "NEW ARRIVAL". **INFERIDO:** la novedad (diseño nuevo, re-stock) es el gatillo de compra, no el precio. El cliente vuelve por el diseño, y el precio por volumen es el cierre.
3. **El envío gratis por 5+ piezas es inmediato.** No hay que esperar a una fecha: el beneficio por volumen está disponible hoy. La fricción es armar el carrito, no el calendario.

### 6.4. Conclusión de la hipótesis

**INFERIDO.** El efecto de espera más probable en F4T3 no es "espero al Buen Fin" (el Buen Fin no mejora visiblemente el precio base), sino **"espero a tener un pedido grande"** y **"el precio sin descuento no existe en mi cabeza"**. La tienda compensa esa espera con rotación de diseños (FW26, New Arrivals) y con urgencia prestada (MSI hasta el 17 nov, alta demanda, demoras de envío). Para un competidor o para replicar el modelo, la lección es: si el descuento es permanente, la urgencia tiene que venir de otro lado (novedad, stock, financiamiento, fecha), porque el precio ya no la genera.

---

## 7. Comparación con tiendas comparables (datos públicos)

Comparación orientativa, no auditoría de mercado. Las tiendas citadas son de posicionamiento distinto; se usan solo como referencia de precio unitario de playera/hoodie en México.

| Referencia (fuente pública, 13 nov 2026) | Producto | Precio unitario |
|---|---|---|
| F4T3 (este informe) | Playera, precio unitario listado | $1,299 — pero **$216.50 efectivo en 6X1** |
| F4T3 (este informe) | Hoodie All My Fears | $760 (tachado $1,899) |
| Zara México — zara.com/mx (resultado de búsqueda) | Playera Fruit of the Loom (licencia) | $349 |
| D.Franklin MX — mx.dfranklincreation.com (resultado de búsqueda) | Workshop Anthracite T-Shirt | $550 |
| StayPositive — staypositiveclo.com (resultado de búsqueda) | Playera "Reza por mi" | $480 (tachado $599) |
| Machine Garage / Fasthouse — machinegarage.com.mx (resultado de búsqueda) | Fallen Tee Black | $750 |
| True Religion México — truereligion.mx (resultado de búsqueda) | Jeans Geno Big T Slim | $2,331.60 (tachado $7,772, 70% OFF) |

**Lectura (INFERIDO):**

- El **precio unitario listado** de F4T3 ($1,299) está por encima de todas las referencias de playera ($349–$750). Nadie que compare 1 vs. 1 elegiría F4T3 por precio.
- El **precio efectivo en pack** ($216.50) está por debajo de todas las referencias. La propuesta de valor de F4T3 solo existe si el cliente compra 6.
- El patrón de tachado profundo no es exclusivo de F4T3: True Religion muestra 70% OFF con tachado $7,772 → $2,331.60. **INFERIDO:** en streetwear/moda MX el precio tachado alto es una convención del sector, no una rareza de F4T3. Lo distintivo de F4T3 es combinarlo con volumen (6X1 + escalera) como mecanismo principal, no como liquidación.
- **NO VERIFICADO:** no se compararon costos de envío, calidad de tela (F4T3 declara algodón 100% mexicano 250 gsm en playeras; las referencias no se contrastaron en ficha), ni precios de jeans/gorras de F4T3 por falta de precio absoluto observado.

---

## 8. Lista final: observado / inferido / no verificado

### OBSERVADO (13 nov 2026, con URL)

1. Home: "PLAYERAS 6X1", "HASTA 80% OFF EN TODO LO DEMÁS", "HASTA 12 MESES SIN INTERESES TERMINA EL 17 DE NOVIEMBRE", sello Buen Fin 13–17 nov. — https://www.f4t3.co/
2. Playera Not All Angels Tee: $1,299; 1 playera $1,299, 6 playeras $1,299 ("LLEVAS 6 Y PAGAS SOLO 1"), combina diseños y tallas. — https://www.f4t3.co/products/not-all-angels-luxury-tee-black
3. Longsleeve Destino Studios: $599, tachado $1,499, 60% OFF; 2 pzas $539, 4 pzas $479, 6 pzas $419; envío gratis con 5+ piezas. — https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black
4. Hoodie All My Fears: $760, tachado $1,899, 60% OFF; 2 pzas $684, 4 pzas $608, 6 pzas $532. — https://www.f4t3.co/products/all-my-fears-hoodie-black
5. Zip Hoodie Cathedral: $840, tachado $2,099, 60% OFF; 2 pzas $756, 4 pzas $672, 6 pzas $588. — https://www.f4t3.co/products/cathedral-zip-hoodie-vantablack
6. Crop tees: precio uniforme $315, tachado $899, 65% OFF, $221 llevando 6 o más. — https://www.f4t3.co/collections/crop-tees
7. Colección Sudaderas: 24 productos, todos con badge 60% OFF. — https://www.f4t3.co/collections/hoodies
8. Colección Jeans: badges 50% OFF en casi todos los productos. — https://www.f4t3.co/collections/jeans
9. Colección Buen Fin: "HASTA 80% OFF", "ENTRE MÁS LLEVAS, MENOS PAGAS + HASTA 30% EXTRA ADICIONAL". — https://www.f4t3.co/collections/buen-fin
10. Colección Playeras: 24 productos, todos con badge 6X1. — https://www.f4t3.co/collections/t-shirts
11. Envío Estándar $179, gratis > $1,999 de subtotal tras descuentos; Premium $299, nunca gratis; entrega 4–10 días hábiles tras 48 h de confirmación. — fichas de producto citadas en §2.
12. Cambios 30 días naturales; no aplica a productos en promoción; devoluciones voluntarias con crédito en tienda. — fichas de producto.
13. Mención "incluido el 2X1" en el texto de envío, sin oferta 2X1 visible. — fichas de producto.
14. Reclamo "MÁS DE 168,783 PERSONAS USAN FATE™" en home y fichas (cifra de la tienda, no verificada externamente). — https://www.f4t3.co/
15. Relación tachado/venta = 2.50× en los 3 productos con ficha completa (cálculo sobre precios observados).

### INFERIDO (hipótesis argumentadas, no hechos)

1. El precio real de F4T3 es el precio con descuento por volumen; el tachado es ancla y el unitario es precio de referencia, no precio de transacción típico.
2. El "HASTA 80% OFF" probablemente se refiere al 6X1 (−83.3% efectivo), no a un 80% directo en un producto.
3. El Buen Fin en F4T3 es re-etiquetado de la promo estructural + MSI; no se observó rebaja adicional por producto.
4. La tienda gana por volumen con margen protegido por el ancla (sin acceso a costos, no se afirma el margen).
5. El efecto de espera principal es "espero a armar un pedido grande" y la pérdida de credibilidad del precio sin descuento; la urgencia la aportan novedad, stock y MSI, no el descuento.
6. Una Mystery Box encajaría con el modelo (liquidación por volumen sin tocar el precio visible), pero no hay evidencia de que exista.
7. La mención del 2X1 en envíos es probablemente texto heredado de una promo pasada o de una categoría no revisada.
8. El umbral de envío gratis ($1,999 / 5+ piezas) está calibrado para forzar carritos multi-pieza.

### NO VERIFICADO

1. **Mystery Box:** no localizada en home, colecciones ni fichas revisadas; sin precio, contenido ni condiciones. Búsqueda `site:f4t3.co Mystery Box` sin resultados.
2. **Summer-sale:** mencionada en la brief de la WO como colección de promo permanente; no observada en esta sesión (sin banner, enlace ni colección vista).
3. **3x1 y 2x1 como ofertas activas:** no vistos en lo revisado.
4. **Precios absolutos de jeans, gorras, sin mangas, polos y jackets:** badges vistos (50% OFF en jeans) pero sin precio de venta ni tachado en lo leído; la colección de Gorras no devolvió productos en la lectura.
5. **Precio unitario de todas las playeras:** solo se abrió la ficha de una ($1,299); el resto solo muestra el badge 6X1.
6. **Descuento extra en checkout durante el Buen Fin** (cupón, MSI aplicado, "30% extra adicional" como algo distinto de la escalera): no se llegó al checkout.
7. **Frecuencia histórica de las promos** (¿cuánto llevan el 6X1 y la escalera? ¿hubo épocas sin descuento?): una sola lectura no lo mide; haría falta serie temporal (Wayback, capturas, Instagram).
8. **Cifra "168,783 personas"** y cualquier dato de ventas, conversión o comportamiento de clientes.
9. **Costos, márgenes y origen del inventario** (nada en fuentes públicas lo revela).
10. **Cuatro fichas de producto intentadas al final de la sesión (jeans, crop, Cathedral Tee) no se pudieron abrir: el servicio de lectura devolvió 429 (límite de peticiones) a las ~19:08 UTC del 13 nov 2026.** Esos precios quedan en esta lista por esa causa técnica, no porque no existan.

---

## 9. Fuentes consultadas y límites

### Fuentes consultadas (13 nov 2026)

- https://www.f4t3.co/ — home (crawleada 13 nov 2026, 19:07 UTC)
- https://www.f4t3.co/collections/t-shirts — Playeras de manga corta
- https://www.f4t3.co/collections/buen-fin — Buen Fin
- https://www.f4t3.co/collections/hoodies — Sudaderas
- https://www.f4t3.co/collections/jeans — Jeans
- https://www.f4t3.co/collections/crop-tees — Playeras cortas
- https://www.f4t3.co/collections/gorras-caps — Gorras (sin productos visibles en la lectura)
- https://www.f4t3.co/products/not-all-angels-luxury-tee-black
- https://www.f4t3.co/products/destino-studios-striped-longsleeve-ivory-w-black
- https://www.f4t3.co/products/all-my-fears-hoodie-black
- https://www.f4t3.co/products/cathedral-zip-hoodie-vantablack
- Búsquedas web: `F4T3 f4t3.co tienda México streetwear precios`; `site:f4t3.co Mystery Box` (sin resultados); `f4t3.co 3x1 2x1 promoción buen fin` (sin resultados sobre F4T3); `"f4t3.co" mystery box OR "Mystery Box" OR summer sale` (sin resultados sobre F4T3); `"f4t3" "6X1" playeras 1299 hoodie precio` (sin resultados directos).
- Precios comparables: resultados de búsqueda de Zara México, D.Franklin MX, StayPositive, Machine Garage y True Religion México (ver §7; son referencias de búsqueda, no lecturas de ficha).

### Límites de lo verificado

- **Una sola lectura, un solo día** (13 nov 2026, primer día del Buen Fin). Los precios pueden cambiar; el Buen Fin puede alterar precios después del 17 nov. No hay serie temporal.
- **Sin navegador en vivo ni checkout:** no se verificaron descuentos en carrito/checkout, cupones, MSI aplicado, ni disponibilidad real de tallas más allá de lo listado en las fichas abiertas.
- **Cobertura parcial del catálogo:** 4 fichas de producto con precio absoluto y 6 colecciones; sin mangas, polos, jackets y gorras quedaron sin precio observado. Al final de la sesión el servicio de lectura devolvió errores 429 y no se pudieron abrir 4 fichas adicionales.
- **Sin datos de demanda:** no hay ventas, tráfico, conversión ni comportamiento de clientes en fuentes públicas; la sección de efecto de espera es hipótesis, no medición.
- **Sin acceso a costos ni a interior de la empresa:** nada de lo afirmado sobre márgenes o inventario es verificable desde fuera.
- **No se extrajeron datos personales** ni se contactó a nadie. Nada se publicó.

---

## Nota de verificación global (coordinador de fase, 13 nov 2026)

Corrección a la sección 5 (Mystery Box): este frente reportó la Mystery Box como "no localizada". La verificación global encontró que **sí existe como extra del checkout**: la política de envío vigente (9 nov 2026) dice textualmente que "El seguro de envío, los stickers, la Mystery Box y los regalos no cuentan para el envío gratis" (F1.6), y el frente de stack encontró el asset `fate-mystery-gift.js` en el tema (F1.2). Lo que sigue **NO VERIFICADO** es su página de producto, precio, contenido, tallas y disponibilidad — nada de eso se encontró en esta fase.
