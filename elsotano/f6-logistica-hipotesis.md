# F6 — Logística como hipótesis · El Sótano (elsotano.com)

- **Frente:** F6 — Logística como hipótesis
- **Sitio:** El Sótano — https://www.elsotano.com/ (librería, cadena mediana mexicana)
- **Fecha de investigación:** 13 de noviembre de 2026
- **Fase:** WO-E-LARPING, Fase 2 (reverse engineering de e-commerce mexicanos)
- **Método:** lectura de texto con `browser.open` y `browser.search` (búsqueda web y lectura de texto; sin navegador en vivo, sin compra, sin contacto con la tienda).
- **Contraste del frente:** Gandhi es el gigante omnichannel; El Sótano es la cadena mediana con red física propia y venta online.

## Convención de evidencia (se usa en todo el documento)

- **OBSERVADO:** visto directamente en una fuente leída en esta sesión, con URL y fecha.
- **INFERIDO:** conclusión razonable a partir de lo observado, marcada como tal.
- **HIPÓTESIS:** conjetura propia del frente F6, con falsador explícito (H1–H3).
- **NO VERIFICADO:** buscado y no encontrado, o presente solo en fuente de terceros sin corroboración primaria.
- **MODELO PROPIO:** cifras construidas por este frente con supuestos declarados y rangos amplios. **NO son cifras de El Sótano.** No deben citarse como datos de la tienda.

---

## 1. Disponibilidad por SKU

### OBSERVADO
- La página principal de https://www.elsotano.com/ estaba activa y se leyó el 13 nov 2026 (crawl 20:01 UTC). Muestra portadas de catálogo (al menos 14 cubiertas visibles en la lectura de texto, ISBN visibles en las URLs de imagen, p. ej. 9786073948579, 9786073826082) y un flujo de compra en 4 pasos: "Encuentra tu libro favorito / Agrégalo a tu carrito / Realiza el pago / Recibe tus productos".
- El paso 2 dice literalmente: "Inicia el proceso de compra con todos tus productos que tenemos disponibles" — la tienda comunica disponibilidad en el flujo, pero la lectura de texto de la home **no expone conteos de stock, niveles por sucursal ni etiquetas "agotado"**.
- El brief de la WO (contexto entregado al frente, no verificado por mí en esta sesión) indica "fichas con precio MXN y stock, rastreo 1–2 días". Lo registro como contexto del encargo, **no como observación propia**.

### NO VERIFICADO
- **No se pudo leer ninguna ficha de producto individual.** Las búsquedas (`elsotano.com` + "agotado" / "En stock" / "Disponible") no devolvieron ninguna URL de ficha de elsotano.com; los resultados fueron de otras tiendas (Amazon, FCE, UNAM, etc.). La home solo expone URLs de imágenes de portada (`/sotano_covers/...`), no enlaces de producto legibles por el lector de texto.
- Por tanto: **sin conteo de SKUs, sin muestra de "agotado", sin stock por sucursal, sin precio de ficha observado directamente** en esta sesión. No se afirma que el sitio no los tenga; se afirma que este frente no pudo leerlos con las herramientas disponibles.
- Tampoco se observó un buscador de disponibilidad por sucursal ("consulta existencias en tienda X") ni lista de espera / aviso de reposición.

### INFERIDO
- Que la home hable de "productos que tenemos disponibles" y que el catálogo se presente por portadas con ISBN sugiere un catálogo centralizado online (no un escaparate por sucursal). **INFERIDO, no verificado:** el inventario online probablemente se surte desde un almacén central y no desde el stock de cada sucursal en tiempo real.

### Implicación para el dropshipping (HIPÓTESIS de trabajo, ver §8)
- Una librería con catálogo amplio y sin stock visible por sucursal depende de un almacén central + reposición editorial. Para un clon dropshipping, el equivalente es: catálogo centralizado, sin promesa de stock por punto de venta, y gestión de "agotado" como estado de ficha, no como conteo público.

---

## 2. Salida de excedente (outlet / remate / liquidación / promos por evento)

### OBSERVADO
- **No existe (en lo leído) una sección de outlet, remate o liquidación.** Ninguna búsqueda devolvió una página de elsotano.com con esos términos; los resultados de "outlet / remate / liquidación" remiten a la página de cupones de Picodi (tercero) o a otras tiendas.
- **Promociones por evento observadas en tercero (Picodi, 13 nov 2026):** 30% OFF en títulos seleccionados ("El Sótano de los Independientes"), 20% off en editorial Sexto Piso, 10% en Ediciones Fiscales ISEF, manuales de inglés desde $100 MXN, y "Vista previa: promociones del Buen Fin 2026 en El Sotano" con vencimiento 17/11/26. El Buen Fin 2026 corre del viernes 13 al martes 17 de noviembre de 2026 (verificado en prensa: El Economista, Diario Presente, Heraldo de México Oaxaca).
- Banner de aniversario visible en la home el 13 nov 2026 (`20261109155120_aniversario libros_hh.webp`) y banners de preventa ("mensajes en tazas de café preventa") y de autoras (Isabel Allende). **OBSERVADO:** la tienda usa aniversarios, preventas y eventos comerciales como palancas promocionales, no una sección permanente de liquidación.
- Descuentos frecuentes: una nota de prensa (Revista Mundo Empresarial / Baja News, 11 nov 2024) describe a El Sótano con "descuentos frecuentes". Es fuente secundaria de 2024, no evidencia de una mecánica actual.

### NO VERIFICADO
- No se encontró: sección "Outlet" / "Remates" / "Liquidación" en elsotano.com; porcentaje de descuento de liquidación; cadencia de remates; destino del excedente (devolución a editorial, saldo, donación, destrucción). **En librería, el excedente típicamente se devuelve a la editorial (consignación), pero eso es conocimiento del sector, NO un dato observado de El Sótano.**

### INFERIDO
- El patrón observado (descuentos por editorial y por selección curada + Buen Fin + aniversario + preventa) es consistente con **promoción por curaduría editorial y calendario comercial**, no con liquidación de inventario. Para el clon dropshipping: la "salida de excedente" no es un problema de almacén propio (no hay inventario), sino de **rotación de oferta**: lo que en El Sótano es un 30% por editorial, en dropshipping es un cambio de catálogo / proveedor.

---

## 3. Mensajerías nombradas por la tienda

### OBSERVADO — con advertencia de fuente
- La **única fuente que nombra mensajerías** es la página de cupones de Picodi (https://www.picodi.com/mx/el-sotano, leída 13 nov 2026): **Estafeta** (terrestre y express, cobertura nacional), **FedEx** (terrestre y express, cobertura nacional) y **Borzo** (express, cobertura CDMX). Horario de entrega indicado: lunes a viernes 10:00–18:00 h. Tarifa: "variable según distancia y peso del paquete" (sin montos).
- **ADVERTENCIA EXPLÍCITA:** Picodi es un agregador de cupones de terceros, **no elsotano.com**. Su texto parece reproducir/parafrasear las políticas de la tienda, pero **este frente no pudo corroborarlo en una página primaria de elsotano.com** (no se localizó página de ayuda / términos / envíos en el dominio mediante búsqueda ni lectura). Por tanto, estas tres mensajerías se reportan como **NO VERIFICADO en fuente primaria** y **no deben atribuirse como hecho confirmado de El Sótano**.
- **OBSERVADO en fuente primaria (home de elsotano.com):** "Tenemos envíos nacionales e internacionales, además de recolección en algunas de nuestras sucursales." No nombra ninguna mensajería.

### NO VERIFICADO
- Ninguna mensajería confirmada en elsotano.com. No se observó: DHL, UPS, Correos de México, 99minutos, iVoy, ni mensajería propia. **No se atribuye ninguna.**
- No se observó quién paga la guía en envíos internacionales ni qué operador cubre el tramo internacional.

### INFERIDO
- Si el listado de Picodi fuera fiel (hipótesis de trabajo, no hecho), la mezcla Estafeta + FedEx (nacional, terrestre/express) + Borzo (última milla express solo CDMX) es una arquitectura típica de cadena mediana: **dos carriers nacionales + un courier urbano para la zona metropolitana**. Es un patrón plausible y barato de replicar en dropshipping (carrier nacional + courier local), pero su confirmación queda pendiente.

---

## 4. Costos y tiempos de envío publicados

### OBSERVADO
- **Envío gratis en compras superiores a $450 MXN** — publicado en Picodi (tercero, 13 nov 2026) como oferta vigente ("En curso"). **NO VERIFICADO en fuente primaria.** Es el único umbral de envío gratis encontrado.
- **Tarifas variables según distancia y peso** — según Picodi; sin tabla de precios, sin montos por zona, sin costo base publicado en ninguna fuente leída.
- **Envíos nacionales e internacionales** — OBSERVADO en la home de elsotano.com (13 nov 2026).
- **Horario de entrega lun–vie 10:00–18:00 h** — según Picodi (tercero).
- **Rastreo 1–2 días** — mencionado en el brief de la WO como verificado previamente; **no re-verificado por este frente en esta sesión** (no se leyó ninguna página de rastreo ni confirmación de pedido).

### NO VERIFICADO
- Costo de envío en MXN para ningún destino, peso o carrier. No hay tabla tarifaria pública localizada.
- Tiempo de entrega en días (estándar / express) para ningún destino. Ninguna fuente leída publica "X a Y días hábiles" para El Sótano.
- Costo o condiciones del envío internacional (países, recargo, aduana).
- Tiempo de preparación del pedido (pick/pack) antes del despacho.
- El umbral de $450 MXN para envío gratis no está confirmado en elsotano.com; si Picodi estuviera desactualizado, el umbral real podría ser otro.

### INFERIDO
- Un umbral de envío gratis de ~$450 MXN con ticket medio de libro en $250–$400 MXN implica que **el envío gratis se alcanza típicamente con 2 libros**, es decir, funciona como incentivo de cesta (AOV), no como beneficio universal. **INFERIDO a partir del umbral de tercero + precios típicos del sector; no es un dato de la tienda.**

---

## 5. Política de devoluciones / cambios

### OBSERVADO — con advertencia de fuente
Toda esta sección proviene de Picodi (tercero, leída 13 nov 2026), que reproduce una "Política de Quejas y Devoluciones" atribuida a Librerías El Sótano. **NO VERIFICADO en fuente primaria (elsotano.com).** Se reporta como texto de tercero, útil como hipótesis de la política real:

- **Reembolso:** únicamente a la cuenta del titular del pedido, tras solicitud por escrito; proceso de **10 a 15 días hábiles**; el reflejo depende del banco emisor.
- **Cancelaciones:** posibles **antes del envío**, contactando a ventas@elsotano.com. Si el pedido ya se envió, se reembolsa el monto de los productos **excluyendo los gastos de envío**.
- **Devoluciones por defectos o daños:** notificar dentro de los **5 días hábiles** posteriores a la recepción; la tienda proporciona **guía de mensajería sin costo extra**; se envía reposición o se reembolsa si no hay disponibilidad.
- **Devoluciones por error de compra:** se aceptan dentro de los **5 días hábiles** posteriores a la recepción, con evaluación del producto (sin daños físicos); **el cliente asume el costo de la guía** de devolución.
- **Restricciones:** no hay reembolso si la tienda considera que el daño fue por mal uso o por no seguir el proceso; los reembolsos parciales no proceden en cuentas de cheques (se usan como saldo a favor); la tienda no se responsabiliza por datos personales u objetos olvidados en mercancía devuelta.
- **Contacto de la política:** ventas@elsotano.com; atención general: atencionaclientes@elsotano.com, tel. gratuito 800 276 8266 (ambos OBSERVADOS también en Picodi; el 800 276 8266 **sí está OBSERVADO en la home de elsotano.com**).

### INFERIDO
- Ventana de devolución corta (5 días hábiles) + reembolso lento (10–15 días hábiles) + guía pagada por el cliente en error de compra = **política restrictiva, típica de librería** (producto de bajo margen, alto riesgo de "lectura y devolución"). El costo de devolución recae mayormente en el cliente salvo defecto. **INFERIDO del texto de tercero; válido solo si ese texto es fiel.**
- Para un clon dropshipping, esta asimetría (5 días para reclamar, 10–15 para reembolsar) es un riesgo de confianza: el estándar de marketplaces es más laxo, así que copiarla sin más puede costar conversión.

### NO VERIFICADO
- Texto oficial de la política en elsotano.com (términos y condiciones / ayuda). No localizado.
- Tasa real de devoluciones, motivos más frecuentes, ni si existe cambio en sucursal física para compras online.

---

## 6. Red de sucursales y pickup en tienda

### OBSERVADO (sucursales con dirección confirmada en fuentes leídas)
| Sucursal | Dirección observada | Fuente |
|---|---|---|
| Casa Matriz — Coyoacán (CDMX) | Av. Miguel Ángel de Quevedo 209, Col. Romero de Terreros, CP 04310, Coyoacán | SIC Cultura (ficha table_id=693); home elsotano.com |
| Roma / Insurgentes (CDMX) | Av. Insurgentes Centro 222-Loc A, Cuauhtémoc; también registrada como Insurgentes Sur 214, Col. Roma Nte., CP 06700 | Búsqueda de lugares; SIC (table_id=2400) |
| Puebla | Calle 43 Oriente núm. 13, Col. Huexotitla, CP 72530, Puebla | SIC Cultura (table_id=1976) |
| Guadalajara / Zapopan (Jal.) | Av. Guadalupe 1294, Zapopan | Búsqueda de lugares |
| Querétaro | Av. Corregidora Nte. 350, Santiago de Querétaro | Búsqueda de lugares |

- Teléfonos observados: Casa Matriz 55 5339 1300; línea gratuita 800 276 8266 (home elsotano.com).
- Horarios observados (fichas de lugares): Coyoacán lun–sáb 9:00–22:00, dom 10:00–21:00; Puebla lun–sáb 9:00–21:00, dom 10:00–20:00; Querétaro lun–sáb 9:00–21:00, dom 9:00–20:00.
- **Pickup en tienda: OBSERVADO en la home de elsotano.com** ("recolección en algunas de nuestras sucursales"). Según Picodi (tercero): **sin costo adicional**, fecha sujeta a disponibilidad y confirmación de la sucursal destino, y **disponible solo en sucursales Coyoacán e Infantil y Juvenil** — esto último **NO VERIFICADO en fuente primaria** y sorprendente (solo 2 de toda la red), por lo que se marca con especial cautela.
- La razón social observada es **Librería del Sótano Coyoacán, S.A. de C.V.** (Picodi; aviso de privacidad de MAPorrúa, empresa relacionada).

### NO VERIFICADO
- **Número total de sucursales.** El brief de la WO dice "15+ sucursales"; este frente confirmó 5 ubicaciones con dirección (Coyoacán, Roma/Insurgentes, Puebla, Guadalajara/Zapopan, Querétaro) y menciones de presencia en CDMX, Guadalajara y Querétaro. **El total "15+" no fue verificado** (no se localizó un directorio completo de sucursales en elsotano.com ni conteo oficial). No se afirma ni se niega.
- Lista completa de sucursales con pickup habilitado; tiempo de preparación del pedido para pickup; plazo máximo para recoger.
- Existencia y ubicación de la sucursal "Infantil y Juvenil" (mencionada solo por Picodi).
- Si el stock online y el de sucursal están integrados (ship-from-store) o separados.

### INFERIDO
- Red concentrada en CDMX + 3–4 ciudades del interior (Puebla, Guadalajara, Querétaro). **INFERIDO:** la cobertura física es metropolitana/regional, no nacional densa; por eso el envío nacional depende de carriers y no de la red de tiendas. El pickup restringido (si es real) sugiere que el fulfillment online **no** es ship-from-store generalizado, sino centralizado con 1–2 puntos de recogida.
- Reseñas de empleados en Indeed (14 ene 2026, 2 dic 2025) mencionan área de **almacén**, rol de **recolector** ("nueva lista de libros por recoger… se preparaban para su envío") y trabajo de **paquetería y sistema de datos**. **INFERIDO (fuente secundaria, testimonios laborales):** existe una operación de almacén + picking + packing dedicada a venta en línea, separada del piso de venta.

---

## 7. Modelo propio de costos logísticos por pedido — NO son cifras de El Sótano

**Advertencia: todo este apartado es un MODELO PROPIO del frente F6, construido con supuestos declarados y rangos amplios para razonar sobre un clon dropshipping. Ninguna cifra aquí proviene de El Sótano ni debe citarse como suya. Los rangos usan órdenes de magnitud típicos del mercado mexicano de paquetería para un libro (2026) como supuestos de trabajo, no como datos observados.**

### Supuestos declarados
- **S1. Pedido tipo:** 1–2 libros, peso volumétrico 0.5–1.5 kg, valor del pedido $300–$600 MXN (ticket con 1–2 libros a precio de librería).
- **S2. Origen:** un solo punto de despacho (almacén central o proveedor), sin ship-from-store.
- **S3. Carriers:** un carrier nacional terrestre/express + un courier urbano CDMX (arquitectura inferida en §3, no verificada).
- **S4. Empaque:** sobre rígido / caja pequeña + protección; material reutilizable no considerado.
- **S5. Mano de obra:** picking + packing + etiquetado por pedido, a costo laboral de almacén en CDMX.
- **S6. Devoluciones:** tasa supuesta 2–5% de pedidos (libros: baja, pero no nula; defecto/daño y error de compra).
- **S7. Envío gratis:** umbral de referencia $450 MXN (dato de tercero no verificado; se usa solo como escenario).
- **S8. Sin inventario propio** (dropshipping): el costo de almacenaje y merma es $0 para el clon; a cambio, el proveedor cobra manejo/dropship fee o lo absorbe en el precio mayorista.

### Tabla del modelo (MXN por pedido, rangos amplios)

| Concepto | Rango bajo | Rango alto | Notas del supuesto |
|---|---|---|---|
| Flete nacional terrestre (0.5–1.5 kg) | $90 | $180 | Supuesto de mercado; varía por zona (CDMX/centro vs. norte/sureste) |
| Flete nacional express | $180 | $350 | Solo si se ofrece; la mayoría de pedidos no lo necesita |
| Última milla urbana CDMX (courier) | $60 | $120 | Alternativa al carrier para zona metropolitana |
| Empaque (caja/sobre + protección) | $10 | $25 | Libro = empaque barato; el daño por mal empaque es el costo oculto |
| Pick / pack / etiquetado (mano de obra) | $15 | $30 | ~5–10 min por pedido a costo de almacén |
| **Subtotal fulfillment por pedido (terrestre)** | **$115** | **$235** | Sin contar devoluciones ni envío gratis absorbido |
| Gestión de devolución (guía de retorno + reproceso, por pedido devuelto) | $120 | $260 | Guía de retorno + revisión + reingreso; a tasa 2–5% prorratea $2.40–$13 por pedido vendido |
| Costo logístico prorrateado por pedido vendido (incl. devoluciones) | **~$118** | **~$248** | Suma del subtotal + prorrateo de devoluciones |
| Pickup en tienda (si existiera punto propio) | $0 | $15 | Solo costo de preparación; sin flete |

### Lectura del modelo (INFERIDO del modelo, no de la tienda)
- Con ticket de $300–$600 y costo logístico de ~$118–$248 por pedido, **el flete representa del ~20% al ~60% del valor del pedido**. Por eso el umbral de envío gratis (~$450) tiene sentido económico: por debajo de él, el cliente paga el flete o la tienda pierde el margen; por encima, el margen de 2 libros absorbe el envío.
- **El envío gratis no es gratis:** a ticket $450–$600 con costo logístico ~$150–$200, la tienda necesita un margen bruto sobre libros de al menos ~30–40% para no perder por pedido. En dropshipping sin inventario, ese margen debe salir del diferencial mayorista–retail, no de un descuento por volumen de compra.
- **El express es un lujo, no el estándar:** duplicar el flete por 1 día menos solo se justifica en preventas, regalos o urgencia; el estándar debe ser terrestre 2–5 días.
- **La devolución es el costo oculto mayor:** un solo retorno ($120–$260) equivale al margen de 1–2 pedidos. La ventana corta de 5 días y la guía a cargo del cliente en error de compra (política de tercero, §5) son coherentes con proteger ese margen.
- **Pickup es el arbitraje logístico más barato:** costo ~$0–$15 vs. $115–$235 a domicilio. Para un clon dropshipping sin tiendas, el equivalente es punto de entrega aliado (locker / papelería / café) o "recoge con proveedor local".

### Sensibilidad (qué mueve el costo)
1. **Zona de destino** (norte/sureste vs. centro): ±40–60% del flete. El modelo de precio único nacional solo funciona con ticket alto o con flete cobrado al cliente.
2. **Peso / nº de libros por pedido:** el 2º libro casi no suma flete (mismo paquete) — el incentivo correcto es "agrega otro libro, el envío no sube".
3. **Tasa de devolución:** pasar de 2% a 5% suma ~$4–$8 por pedido vendido; pasar a 10% (típico de moda, no de libros) lo duplica y rompe el modelo.
4. **Envío gratis sin umbral:** absorber $115–$235 por pedido exige margen bruto >40% o ticket >$700; con libros, inviable salvo suscripción o membresía.

---

## 8. Hipótesis H1–H3 (con falsadores)

### H1 — Fulfillment centralizado, no ship-from-store
- **Enunciado:** El Sótano despacha los pedidos online desde un almacén central (con equipo de picking/packing propio), y las sucursales son puntos de venta, no nodos de fulfillment; el pickup online está restringido a 1–2 sucursales (Coyoacán e Infantil y Juvenil).
- **Base:** home ("recolección en algunas sucursales"); Picodi (pickup solo 2 sucursales, no verificado en primaria); testimonios de empleados (almacén, recolector, paquetería).
- **Falsador:** encontrar en elsotano.com (o en un checkout real) pickup disponible en ≥5 sucursales, o un selector "enviar desde sucursal X", o una vacante / comunicado que describa ship-from-store. Si el pickup es amplio, H1 cae y el modelo pasa a red distribuida.

### H2 — El envío gratis de $450 MXN es un incentivo de cesta (2 libros), no un beneficio general
- **Enunciado:** El umbral de envío gratis está calibrado para que el cliente típico agregue un 2º libro; por debajo del umbral, el flete lo paga el cliente y la tienda no absorbe logística.
- **Base:** umbral $450 (tercero, no verificado) + ticket típico de 1 libro $250–$400 + modelo §7 (flete 20–60% del pedido).
- **Falsador:** (a) que el umbral real en elsotano.com sea distinto (p. ej. $299 o $999) o no exista; (b) que el ticket medio observado en fichas sea muy distinto (p. ej. libros de $150 o de $800). Cualquiera de los dos recalibra el modelo; si no hay envío gratis, H2 cae y el clon debe cobrar flete siempre o subir el ticket vía bundles.

### H3 — La política restrictiva de devoluciones (5 días / reembolso 10–15 días / guía a cargo del cliente en error de compra) es el mecanismo que hace viable el margen en libros
- **Enunciado:** Con márgenes de librería y flete caro en relación al ticket, El Sótano traslada el costo de la devolución no imputable a defecto al cliente y ralentiza el reembolso; copiar una política laxa de marketplace (30 días, devolución gratis) destruiría el margen del clon dropshipping.
- **Base:** texto de Picodi (§5, no verificado en primaria) + modelo §7 (un retorno = margen de 1–2 pedidos).
- **Falsador:** (a) que la política oficial en elsotano.com resulte ser laxa (≥15–30 días, devolución gratis por cualquier motivo); (b) que la tasa real de devoluciones en libros sea <1% (entonces la restricción sería irrelevante y copiarla solo costaría conversión). Si (a) se confirma, H3 cae y el clon puede permitirse una política más generosa como ventaja competitiva.

---

## 9. Qué robar para el clon dropshipping (y qué no)

**Robar (INFERIDO del frente):**
1. **Umbral de envío gratis calibrado a 2 unidades** (~$450 en libros): convierte el flete en incentivo de cesta, no en costo hundido.
2. **Arquitectura 2 carriers nacionales + 1 courier urbano:** cobertura nacional con terrestre barato + express solo CDMX; no pagar express nacional como estándar.
3. **Pickup como arbitraje:** aunque el clon no tenga tiendas, un punto de entrega aliado (locker/papelería) replica el ahorro de $115–$235 → $0–$15 por pedido.
4. **Promoción por curaduría (editorial/selección/evento) en vez de liquidación permanente:** protege margen y evita educar al cliente a esperar remates.
5. **Ventana de devolución corta y costo de retorno al cliente en error de compra:** protege el margen donde el flete pesa 20–60% del ticket.

**No robar (o robar con cautela):**
1. **Reembolso en 10–15 días hábiles:** en un clon nuevo sin reputación, es un freno de confianza; mejor 3–5 días y comunicarlo como ventaja.
2. **Pickup restringido a 2 sucursales sin explicarlo:** si el clon ofrece un solo punto de entrega, que sea visible y con horario claro, no una sorpresa en checkout.
3. **No publicar tiempos de entrega en días:** El Sótano (en lo leído) no publica un plazo en días; el clon debe publicar el suyo (p. ej. "2–5 días hábiles") porque sin reputación el silencio se lee como riesgo.

---

## Fuentes

- https://www.elsotano.com/ — home, leída 13 nov 2026 (crawl 20:01 UTC). Envíos nacionales e internacionales; recolección en algunas sucursales; tel. 800 276 8266; banners de aniversario, preventa e Isabel Allende; flujo de compra en 4 pasos.
- https://www.picodi.com/mx/el-sotano — página de cupones, leída 13 nov 2026. **Fuente de terceros, no primaria.** Origen de: envío gratis >$450 MXN; mensajerías Estafeta / FedEx / Borzo; pickup sin costo en Coyoacán e Infantil y Juvenil; política de devoluciones (5 días hábiles; reembolso 10–15 días hábiles; ventas@elsotano.com); promos 30% / 20% Sexto Piso / 10% ISEF / manuales desde $100; Buen Fin 2026 (vence 17/11/26).
- http://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=693 — Casa Matriz Coyoacán, Miguel Ángel de Quevedo 209, CP 04310.
- https://sic.gob.mx/ficha.php?table=libreria&table_id=2400 — Sucursal Insurgentes, Insurgentes Sur 214, Roma Nte., CP 06700.
- https://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=1976 — Sucursal Puebla, Calle 43 Oriente 13, CP 72530.
- https://www.elsotano.com/ (fichas de lugares en resultados de búsqueda) — Guadalajara/Zapopan Av. Guadalupe 1294; Querétaro Av. Corregidora Nte. 350; Roma Av. Insurgentes Centro 222-Loc A; horarios por sucursal.
- https://www.eleconomista.com.mx/empresas/buen-2026-inicia-registrar-negocio-premios-habra-sorteo-sat-20261102-841771.html — Buen Fin 2026, 13–17 nov 2026, 5 días, edición 16.
- https://revistamundoempresarial.com/conoce-las-cinco-librerias-mas-populares-de-mexico/ — El Sótano, +50 años, descuentos frecuentes (2024).
- https://mx.indeed.com/cmp/Librer%C3%ADas-El-S%C3%B3tano-2/reviews — testimonios de empleados: almacén, recolector, preparación de envíos y paquetería (ene 2026, dic 2025).
- https://maporrua.com.mx/aviso-de-privacidad-y-seguridad/ — razón social Librería del Sótano Coyoacán, S.A. de C.V.; domicilio Quevedo 209.

**Notas de método:**
- No se recibió ningún 429 del servicio de lectura en esta sesión; ningún intento de lectura se abortó por límite de tasa.
- No se realizó ninguna compra, registro, ni contacto con la tienda. Nada se publicó.
- Las búsquedas `site:elsotano.com envíos` no devolvieron resultados; las páginas de ayuda/términos de elsotano.com no fueron localizables por búsqueda web en esta sesión.

---

## Sin verificar

1. **Fichas de producto:** ningún precio MXN, stock, conteo de SKUs ni etiqueta "agotado" leído directamente en elsotano.com (no se obtuvo URL de ficha; la home solo expone portadas). El "rastreo 1–2 días" del brief no fue re-verificado.
2. **Mensajerías:** Estafeta, FedEx y Borzo aparecen solo en Picodi (tercero). Ninguna mensajería confirmada en elsotano.com. No se verificó DHL, UPS, Correos de México ni mensajería propia.
3. **Costos y tiempos de envío:** ninguna tarifa en MXN ni plazo en días publicado y localizado; el umbral de envío gratis de $450 MXN es solo de tercero.
4. **Política de devoluciones:** texto completo solo en Picodi; no localizado el texto oficial en elsotano.com.
5. **Número total de sucursales:** "15+" del brief no verificado; 5 ubicaciones confirmadas con dirección. Lista completa de sucursales y cuáles ofrecen pickup, sin verificar.
6. **Pickup:** "solo Coyoacán e Infantil y Juvenil" es solo de tercero; la ubicación y existencia de la sucursal "Infantil y Juvenil" no se confirmó; tampoco el plazo para recoger ni el tiempo de preparación.
7. **Salida de excedente:** no se encontró sección de outlet/remate/liquidación ni destino del excedente (devolución a editorial, saldo, donación). No se verificó si existe.
8. **Envío internacional:** confirmado que existe (home), pero sin países, costos, plazos ni operador.
9. **Tasa real de devoluciones, ticket medio y costo real de flete:** no hay datos públicos; el modelo del §7 es propio, con supuestos declarados, no cifras de la tienda.
10. **Integración stock online–sucursal (ship-from-store):** sin evidencia a favor ni en contra.

---

## Resumen ejecutivo

- El Sótano vende online con envíos nacionales e internacionales y recolección en algunas sucursales (home oficial, 13 nov 2026), pero no publica en lo legible ninguna tarifa, plazo en días ni mensajería en su propio dominio.
- Las únicas cifras logísticas encontradas (envío gratis >$450 MXN; Estafeta, FedEx y Borzo; devoluciones a 5 días hábiles y reembolso en 10–15 días; pickup solo en Coyoacán e Infantil y Juvenil) vienen de Picodi, un tercero sin corroboración primaria: se reportan como no verificadas, no como hechos de la tienda.
- La red física confirmada es de 5 ubicaciones con dirección (Coyoacán, Roma/Insurgentes, Puebla, Guadalajara/Zapopan, Querétaro); el total "15+ sucursales" del brief no se verificó, y no hay sección de outlet, remate o liquidación: la salida de excedente parece ser promoción por editorial, evento (Buen Fin 13–17 nov, aniversario) y preventa.
- Testimonios de empleados confirman operación de almacén con picking/packing para venta en línea, lo que sostiene la hipótesis de fulfillment centralizado (H1) frente a ship-from-store.
- El modelo propio (no cifras de El Sótano) estima $118–$248 MXN de costo logístico por pedido vendido: el flete pesa 20–60% de un ticket de $300–$600, por lo que el envío gratis solo es viable como incentivo de cesta de 2 libros y la devolución (un retorno = margen de 1–2 pedidos) es el costo oculto a proteger.
- Para el clon dropshipping, lo robable es: umbral de envío gratis a 2 unidades, 2 carriers nacionales + courier urbano, pickup/punto aliado como arbitraje, promo por curaduría y devolución restrictiva en error de compra; lo no robable es el reembolso lento (10–15 días) y el silencio sobre plazos de entrega.
- Quedó sin verificar casi todo lo cuantitativo: fichas y stock por SKU, tarifas y plazos reales, mensajerías en fuente primaria, texto oficial de devoluciones, total de sucursales y destino del excedente — la verificación pendiente es un checkout real o la página de ayuda/términos de elsotano.com.
