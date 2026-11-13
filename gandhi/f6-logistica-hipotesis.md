# F6 — Logística como hipótesis: Librerías Gandhi

- **Sitio:** Librerías Gandhi — https://gandhi.com.mx/
- **Frente:** F6 (Logística como hipótesis) — Fase 2, WO-E-LARPING
- **Fecha de investigación:** 13 nov 2026
- **Método:** búsqueda web y lectura de texto (`browser.search` / `browser.open`). Sin navegador en vivo, sin compra de prueba, sin checkout, sin contacto con la tienda. Nada se publicó ni se contactó.
- **Contraste en la WO:** Gandhi es la librería gigante omnichannel mexicana; El Sótano es la cadena mediana de referencia.

## Leyenda (obligatoria en todo el informe)

- **OBSERVADO:** texto literal o dato visible en una fuente consultada el 13 nov 2026, con URL.
- **INFERIDO:** conclusión razonable a partir de lo observado; se marca como tal y puede estar equivocada.
- **HIPÓTESIS:** afirmación propia del frente F6, con falsador explícito (H1–H3, §8).
- **NO VERIFICADO:** no se encontró en las fuentes consultadas o la lectura falló; no se afirma.
- **MODELO PROPIO:** las cifras del §7 son un modelo ilustrativo construido por F6 con supuestos declarados y rangos amplios. **NO son cifras de Gandhi.** No deben citarse como costos, tiempos ni tarifas de Gandhi.

---

## 1. Disponibilidad por SKU

### OBSERVADO

- Gandhi declara en su página de mayoreo: "Te ofrecemos más de 5,000,000 de libros, ebooks y audiolibros" y "MÁS DE 5 MILLONES DE TITULOS".
  - Fuente: https://www.gandhi.com.mx/mayoreo
- El caso VTEX (proveedor, no Gandhi directamente) cifra el surtido físico en "entre 35,000 y 40,000 SKUs por tienda, además de más de 4.5 millones de ebooks".
  - Fuente: https://www.vtex.com/es-mx/casos-de-clientes/librerias-gandhi-mantiene-su-liderazgo-digital-con-estrategias-omnichannel-para-miles-de-clientes/
- La cobertura de Onebeat (otro proveedor) habla de "más de 75.000 referencias que había que gestionar" en una versión del caso, y de "más de 100,000 SKUs en distintos puntos de venta" en una nota de prensa sobre la misma implantación. Las dos cifras no coinciden entre sí (ver §1.1).
  - Fuentes: https://onebeat.co/es/case-studies/gandhi/ ; https://www.periodismoyambiente.com.mx/2025/08/02/librerias-gandhi-maximiza-la-eficiencia-operativa-con-machine-learning-y-algoritmos-de-ultima-generacion/
- En fichas de producto indexadas por el buscador, el campo de disponibilidad es binario, sin conteo: `Availability: instock`. Ejemplos consultados vía índice (no se abrió cada ficha en vivo):
  - *The Cloudy Sky of the Mind* — $35 MXN — instock — https://www.gandhi.com.mx/the-cloudy-sky-of-the-mind--the-mystery-of-human-emotions-and-social-connections-9798230310938/p
  - *Panoramic Pop-ups Space Book* — Precio Gandhi $199 (tachado $300) — https://www.gandhi.com.mx/panoramic-pop-ups-space-9781645173045/p
  - *Tree Of Manifesting Dreams (Advent Calendar)* — $249 (tachado $800) — https://www.gandhi.com.mx/tree-of-manifesting-dreams--advent-calendar--9781647225902/p
  - *Wind Up Racing Cars* — $469 — https://www.gandhi.com.mx/wind-up-racing-cars-9781409507819/p
- **No se observó ningún conteo de stock por SKU** ("quedan N unidades", "stock en sucursal X: N") en ninguna página leída. La disponibilidad visible es `instock` / no visible, no cuantitativa.
- **No se observó** en las fuentes consultadas un selector público de "disponibilidad por sucursal" en la ficha de producto. Lo que sí está documentado es la vía interna: con VTEX Sales App, "si un cliente no encuentra un libro en tienda, el vendedor puede consultarlo en la aplicación, confirmar su disponibilidad en otra sucursal o en el almacén central y cerrar la venta en el momento" (caso VTEX, fuente anterior). Es decir, la consulta inter-sucursal existe como herramienta de vendedor, no —según lo observado— como widget público de stock por tienda.

### OBSERVADO (ruptura de stock en prensa, no en gandhi.com.mx)

- *Grandeza* (AMLO): "las unidades se terminaron muy pronto, incluso recibieron un segundo lote, pero también se agotó. En El Sótano también está agotado… es posible todavía encontrar algunas unidades en Gandhi Bellas Artes y en Miguel Ángel de Quevedo" y "cuando se trata de un Best Seller… es posible que [el sistema] registre la existencia de algún ejemplar, cuando en realidad no hay disponibles, debido a que las ventas son muy activas".
  - Fuente: https://www.debate.com.mx/politica/grandeza-de-amlo-enreda-a-adan-augusto-y-abre-debate-20251213-0066.html
- Contexto general del sector (Milenio): "Con frecuencia, al visitar una librería física, en busca de un título, recibimos respuestas como estas: 'está agotado', 'hace mucho ya no nos surte esa editorial', 'se lo puedo pedir de otra sucursal', etcétera" y "Ninguna librería mexicana, cuya vocación sea el interés general, tiene disponibles todas las novedades que se publican en un año".
  - Fuente: https://www.milenio.com/cultura/laberinto/las-librerias-un-espacio-en-transformacion
- Un conteo histórico (oct 2015, LJA.MX, muestra de 40 libros breves): "Gandhi: 20 libros disponibles y suman mil 717 pesos" frente a "El Sótano: 29 libros disponibles". Dato viejo, muestra pequeña y no comparable; se cita solo como evidencia de que la disponibilidad parcial por título es el estado normal del sector, no como cifra vigente.
  - Fuente: https://www.lja.mx/page/5607/?option=com_adsmanager&page=show_category&catid=0&text_search&order=3&expand=1&Itemid=27

### OBSERVADO (efecto Onebeat sobre disponibilidad — cifras de proveedor, con inconsistencia interna)

- Onebeat / nota de prensa: "reducir 32% sus excedentes de inventario y aumentar la disponibilidad promedio de SKUs del 62% al 86%, en tan sólo seis meses" (titular/resumen).
- El mismo artículo, párrafos después: "En solo seis meses… Gandhi logró reducir en un 36% sus excedentes de inventario y aumentar la disponibilidad promedio de SKU´s del 62% al 86%. Además, el valor total del inventario en tiendas disminuyó en un 8%".
  - Fuente única para ambas cifras: https://www.periodismoyambiente.com.mx/2025/08/02/librerias-gandhi-maximiza-la-eficiencia-operativa-con-machine-learning-y-algoritmos-de-ultima-generacion/
- **INFERIDO:** la mejora de disponibilidad 62% → 86% es la cifra repetida dos veces y es la más citable; el porcentaje de reducción de excedente es inconsistente dentro de la misma fuente (32% vs 36%), por lo que **no se adopta ninguna de las dos como hecho**; se reporta la discrepancia.

### INFERIDO

- Gandhi opera con inventario unificado (VTEX OMS + Sales App + Onebeat) y "pasillo infinito": el stock que el cliente ve no es el de una tienda, es el de la red + almacén central. La ruptura de un título en una sucursal no equivale a ruptura en el canal online.
- La disponibilidad real por SKU es alta en fondo editorial de rotación y frágil en best sellers de lanzamiento (segundo lote agotado, sistema que marca existencia fantasma por velocidad de venta).

### NO VERIFICADO

- Conteos de stock por SKU, umbral de "últimas unidades", tiempo de reposición por título, y si existe un selector público de stock por sucursal en el checkout actual (no se pudo hacer compra de prueba; ver § "Sin verificar").

---

## 2. Salida de excedente: outlet, remate, liquidación, promociones por evento

### OBSERVADO

- **Concepto "Oportunidades" (saldos):** la sucursal histórica de Miguel Ángel de Quevedo 134 "estaba dedicada, en los últimos años, a la venta de libros de Oportunidades, que incluye los saldos de películas y otros artículos" (El Sol de México).
  - Fuente: https://oem.com.mx/elsoldemexico/cultura/cierra-gandhi-de-miguel-angel-de-quevedo-oportunidades-chimalistac-23672018
- **Cierre de esa sucursal:** "La librería Gandhi de la sucursal de Miguel Ángel de Quevedo cerrará sus puertas después de casi 50 años de servicio… El concepto de Oportunidades será fortalecido en todas nuestras librerías" (mensaje de la librería citado en la nota). "Gandhi continúa con 43 sucursales distribuidas en todo el país además de los puntos de venta en tiendas de autoservicio" (misma nota, cifra de ese momento).
- El Universal, sobre el mismo cierre: la Gandhi Oportunidades "ya no era una librería muy rentable… un análisis realizado a las 44 sucursales de la cadena les mostró la necesidad de cerrarla… dejó de ser atractiva aún con remates que ofrecía, ya no parecían suculentos títulos a pesar de los precios"; "de alguna manera habíamos empezado nosotros con rangos de precios, nos parecía que era atractivo, pero con el tiempo lo quitamos porque era complicado mantenerlos; también de alguna manera ese espacio de oportunidades que tenía saldos lo complementamos con cosas de novedades que conseguías en cualquier librería; fueron cosas que no funcionaron" (Mauricio Achar, citado). La sucursal "cerrará… el 16 de agosto" (año no visible en el extracto consultado; ver NO VERIFICADO). Cinco sucursales más seguían cerradas en ese momento (tres en Puebla, la de la Ibero y Playa del Carmen).
  - Fuente: https://www.eluniversal.com.mx/cultura/letras/doloroso-pero-necesario-cierre-de-la-vieja-gandhi/
- **Promociones por evento (no liquidación):** Gandhi usa descuentos por fondo editorial y por temporada, no un outlet permanente visible en la web:
  - Día de la Mujer 2024 (1–31 mar 2024): 10% en fondos de Akal, Siglo XXI, Sexto Piso, SP Distribuciones y en sellos Seix Barral / Tusquets / Booket; 10% en oráculos y decoración seleccionados; válido en físicas y en gandhi.com.mx; "no aplica para Librerías Gandhi en Kioskos, Palacio de Hierro y Walmart Supercenters"; "los descuentos no aplican sobre promociones vigentes" ni "en libros marcados con precio único en la Ley de Fomento para la Lectura y el Libro".
    - Fuente: https://www.merca20.com/dia-de-la-mujer-2024-librerias-gandhi-tiene-estas-promociones-para-lectoras/
  - Regreso a clases 2024 (agosto): 20% en libretas y escritura (Moleskine, Paperblanks, Stabilo), 20% en mochilas seleccionadas (Herschel, Ruz), 10% en libros seleccionados (Planeta, Siglo XXI), 10% en diccionarios Larousse; "hasta agotar existencias"; mismas exclusiones de kioscos y departamentales.
    - Fuente: https://www.merca20.com/termo-tipo-stanley-al-estilo-librerias-gandhi-por-solo-240-pesos-o-menos/
  - Descuentos por volumen en mayoreo: "Otorgamos descuentos de acuerdo a la frecuencia y volumen de compra" (página de mayoreo, fuente §1).
- **Buen Fin 2026:** Gandhi figura en listas de tiendas participantes del Buen Fin 2026 (13–17 nov 2026). No se encontró en las fuentes consultadas la oferta concreta de Gandhi para esta edición (porcentaje, títulos, envío).
  - Fuentes: https://cazaofertas.com.mx/el-buen-fin/tiendas-participantes-el-buen-fin-2026/ ; https://segurointeligente.mx/blog/buen-fin-2026-fechas/
- **Catálogo vigente nov 2026:** ShopFully lista folleto de Gandhi vigente 1–30 nov 2026 (evento "LEE 210 Quien es el culpable"), sin detalle de descuentos de liquidación en el extracto.
  - Fuente: https://www.shopfully.mx/guadalajara/folleto/librerias-gandhi
- **Precio único del libro:** es una restricción legal citada por Gandhi en sus promociones (los descuentos no aplican a libros con precio único según la Ley de Fomento para la Lectura y el Libro). Esto limita la palanca de descuento en el libro nuevo.

### INFERIDO

- La salida de excedente de Gandhi es **estructural y distribuida** (concepto Oportunidades / saldos dentro de todas las librerías tras el cierre de Quevedo 134), no un outlet web separado con URL propia observable. El remate no salvó a la sucursal más débil: el problema era de surtido y tráfico, no solo de precio.
- La palanca promocional principal es el descuento por fondo editorial / temporada (10–20% en los ejemplos observados) y el precio tachado en ficha online (ej.: $300 → $199; $800 → $249), no la liquidación general.

### NO VERIFICADO

- Año exacto del cierre de Quevedo 134 (el extracto no muestra el año; el contexto —5 sucursales cerradas, pandemia— sugiere 2020, pero no se afirma).
- Si existe hoy una sección "Oportunidades" / "Saldos" navegable en gandhi.com.mx, su URL, su profundidad de descuento y su rotación.
- Oferta concreta de Gandhi para el Buen Fin 2026.

---

## 3. Mensajerías nombradas por la tienda

### OBSERVADO

- Gandhi (mayoreo) dice literalmente: "Tenemos distintas alianzas con empresas de mensajería lo cual nos permite ofrecerte las mejores tarifas." **No nombra ninguna empresa.**
  - Fuente: https://www.gandhi.com.mx/mayoreo
- En **ninguna** fuente de gandhi.com.mx consultada el 13 nov 2026 aparece el nombre de una mensajería (DHL, Estafeta, FedEx, UPS, Correos de México, etc.) asociado a un envío de Gandhi.

### Regla aplicada

- **NO se atribuye a Gandhi ninguna mensajería.** En particular: el dato "Nuestros envíos se hacen por DHL" que aparece en búsquedas generales corresponde a Dportenis (https://midp.v9prodauth.dportenis.mx/politica-entregas), no a Gandhi, y no se usa aquí. Atribuirlo sería un error de contaminación entre tiendas.
- Tampoco se atribuyen a Gandhi los costos/tiempos de otras tiendas que aparecen en los mismos resultados de búsqueda.

### NO VERIFICADO

- Nombre(s) de la(s) mensajería(s) que Gandhi usa para el canal B2C, si hay mensajería distinta por zona, y si el cliente puede elegir mensajería en checkout. Requiere compra de prueba o lectura de la página de ayuda de envíos (ver § "Sin verificar").

---

## 4. Costos y tiempos de envío publicados

### OBSERVADO — canal B2C (gandhi.com.mx)

- **"Envío gratis siempre a todo México."** Este rótulo aparece en el encabezado de múltiples fichas de producto indexadas (libros físicos y ebooks; ej. $35, $86, $146, $199, $249, $469, $801, $1,297, $1,712). Se reproduce como texto observado en el índice del buscador.
  - Ejemplos: https://www.gandhi.com.mx/the-cloudy-sky-of-the-mind--the-mystery-of-human-emotions-and-social-connections-9798230310938/p ; https://www.gandhi.com.mx/panoramic-pop-ups-space-9781645173045/p ; https://www.gandhi.com.mx/wind-up-racing-cars-9781409507819/p
- **Cautela (INFERIDO, importante):** el rótulo aparece también en fichas de ebooks (producto digital, sin envío físico), lo que sugiere que es un banner genérico del sitio y no una tarifa verificada por producto. **No se pudo verificar en checkout** si el envío gratis aplica sin mínimo de compra, si excluye zonas extendidas, peso o títulos de importación, ni cuál es el tiempo asociado. No se afirma como tarifa universal; se reporta como rótulo observado.
- **No se encontró** en las fuentes consultadas una tabla de costos de envío B2C por zona/peso, ni un mínimo de compra para envío gratis en el canal minorista. El mínimo de $10,000 MXN que sí aparece es del canal **mayoreo**, no del minorista (ver abajo).

### OBSERVADO — canal mayoreo (B2B, no confundir con B2C)

- "Envíos a todo el país y el extranjero con tarifas preferenciales."
- "Entregas nacionales de 4 a 6 días." Y en FAQ: "Una vez que autorices la cotización y realices el pago correspondiente los libros llegarán al lugar que indiques de 4 a 6 días hábiles."
- "¿Existen envíos a toda la república mexicana y el extranjero? Claro, entregamos en cualquier parte del mundo."
- Mínimo de compra mayoreo: "a partir de $10,000 pesos." Formas de pago: transferencias, depósitos y todas las tarjetas bancarias. Crédito: "Sí, dependiendo de la compra específica y el historial de compra."
- Fuente única de este bloque: https://www.gandhi.com.mx/mayoreo
- **INFERIDO:** el plazo 4–6 días hábiles es el único tiempo de entrega publicado con fuente de Gandhi y corresponde al flujo de mayoreo (cotización → autorización → pago → envío). Extrapolarlo tal cual al pedido B2C de un libro sería una inferencia sin respaldo; se marca como tal.

### NO VERIFICADO

- Tiempo de entrega B2C (¿mismo día / 24–48 h en CDMX? ¿2–5 días nacional?), costo de envío B2C cuando no aplica el rótulo de gratis, zonas extendidas, envíos internacionales B2C (costo y plazo), y seguimiento / guía.

---

## 5. Política de devoluciones / cambios

### OBSERVADO

- **Físico (condiciones de uso, gandhi.com.mx):** "Una vez entregado un pedido total o parcialmente no hay cambios ni devoluciones."
  - Fuente: https://www.gandhi.com.mx/ayuda/politica/condiciones (líneas leídas 0–168 el 13 nov 2026; el resto de la página quedó sin leer por 429 — ver § "Sin verificar").
- **Digital (misma página):** "Una vez descargado el libro, no hay devoluciones y no hay cambios de formato. Los libros digitales y otros productos digitales en Gandhi se entregan 'tal cual' y Gandhi no se hace responsable de su contenido o falta de contenido, formato o presentación."
- **Excepción digital:** "Librerías Gandhi podrá rembolsar al usuario el pago facturado a su tarjeta de crédito, débito o a su cuenta de PayPal, en caso de que se agote la licencia para la reproducción de Libros Digitales, en cuyo caso, procederá la cancelación dentro de las 96 horas posteriores a la solicitud de cancelación de Libros Digitales. Para poder solicitar su cancelación, el usuario declara y comprueba que no ha realizado la descarga en ningún dispositivo… Si se ha realizado la descarga… Librerías Gandhi no está en obligación de realizar ningún tipo de cancelación o devolución."
- **Programa Página 1 (lealtad):** existe un programa de puntos ("Puntos Gandhi") con tarjetas Morada / Amarilla ($5,001–$15,000 en 12 meses) / Blanca (>$15,000 en 12 meses); los beneficios y canales elegibles los define Gandhi y pueden cambiar sin aviso. No es una política de devoluciones; se menciona solo porque aparece en la misma página de términos y afecta a la recompra.
  - Fuente: https://www.gandhi.com.mx/ayuda/politica/terminos

### INFERIDO

- La política escrita es **dura para el estándar de e-commerce general**: entregado = sin cambios ni devoluciones (físico) y descargado = sin devolución (digital). Es coherente con el libro como producto de precio único y con el riesgo de copia, y es un contraste fuerte con tiendas de moda/electrónica (30 días, devolución gratis).
- Es probable que en tienda física operen criterios prácticos no escritos (defecto de impresión, libro dañado, error de envío) — pero eso es **HIPÓTESIS**, no está en el texto leído, y no se afirma.

### NO VERIFICADO

- El resto de la página de condiciones (líneas 169–542) quedó sin leer por el 429: puede contener excepciones (defecto, daño en tránsito, error de envío, cancelación antes del envío) que maticen la frase "no hay cambios ni devoluciones". **La frase citada es literal, pero su contexto completo no está verificado.**
- Plazo y canal para reclamar un libro dañado/defectuoso, quién paga la devolución en ese caso, y si la política en tienda física difiere de la online.

---

## 6. Red de sucursales y pickup en tienda

### OBSERVADO — tamaño de la red (cifras que cambian según fecha y fuente)

| Fuente | Cifra | Fecha / contexto |
|---|---|---|
| Gandhi mayoreo (sitio propio) | "MÁS DE 40 LIBRERÍAS EN TODO EL PAÍS" | Página vigente, leída 13 nov 2026 — https://www.gandhi.com.mx/mayoreo |
| VTEX (caso de éxito) | "más de 50 tiendas físicas" | Caso publicado por VTEX, leído 13 nov 2026 — https://www.vtex.com/es-mx/casos-de-clientes/librerias-gandhi-mantiene-su-liderazgo-digital-con-estrategias-omnichannel-para-miles-de-clientes/ |
| Onebeat (caso) | 44 librerías físicas + 250 quioscos en Walmart | Caso Onebeat — https://onebeat.co/es/case-studies/gandhi/ |
| Nota Onebeat (2025) | 50 tiendas físicas + 320 quioscos en autoservicio | https://www.periodismoyambiente.com.mx/2025/08/02/librerias-gandhi-maximiza-la-eficiencia-operativa-con-machine-learning-y-algoritmos-de-ultima-generacion/ |
| El Sol / El Universal (cierre Quevedo) | 43–44 sucursales en ese momento | Cierre de Quevedo 134 — https://oem.com.mx/elsoldemexico/cultura/cierra-gandhi-de-miguel-angel-de-quevedo-oportunidades-chimalistac-23672018 |
| Merca2.0 (2024) | "más de 40 sucursales en todo el país" | https://www.merca20.com/dia-de-la-mujer-2024-librerias-gandhi-tiene-estas-promociones-para-lectoras/ |

- **INFERIDO:** la horquilla realista es **40–50+ librerías propias** más **250–320 quioscos** en Walmart / autoservicio (la alianza Walmart —1,500 títulos en 105 tiendas Walmart en su momento— está documentada en https://vanguardia.com.mx/dinero/2662135-walmart-firma-alianza-con-librerias-gandhi-frvg2662135). Las diferencias se explican por fecha (aperturas/cierres) y por si se cuentan quioscos. No se adopta una cifra única como hecho; se reporta el rango.
- Ejemplos de sucursales documentadas en el Sistema de Información Cultural (SIC, Secretaría de Cultura): Mauricio Achar (Miguel Ángel de Quevedo 121, CDMX), Del Valle (Av. Universidad 767), Plaza Oasis (Miguel Ángel de Quevedo 222), Galerías Mérida, Galerías Aguascalientes, Metepec, Patio Santa Fe, Aeropuerto T2, Pavilion Plaza Tijuana, Carranza (San Luis Potosí).
  - Fuente ejemplo: https://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=1844 (Galerías Mérida)

### OBSERVADO — pickup en tienda (el dato logístico más fuerte del caso)

- VTEX: "El 70% de los clientes que realizan pedidos opta por recoger en tienda, mientras que el 30% elige envío a domicilio. Ocho de cada diez compradores que regresan a la librería terminan adquiriendo un producto adicional".
  - Fuente: caso VTEX (misma URL anterior).
- VTEX: la omnicanalidad permite "fusionar compras realizadas en el sitio web, en tienda o por teléfono en un solo carrito y pago" y "sincronizar precios y promociones en tiendas físicas con datos de VTEX ecommerce".
- **Cautela:** el 70/30 es una cifra del caso de éxito de VTEX (proveedor), no una cifra publicada por Gandhi en su web de ayuda. Se cita con su fuente y no como dato auditado de Gandhi.
- La tarjeta de regalo "es aceptada en ambos canales" (físico y online) — evidencia menor de integración omnicanal. Fuente: https://www.gandhi.com.mx/mayoreo

### INFERIDO

- El pickup es el centro logístico de Gandhi: 7 de cada 10 pedidos online se recogen en tienda, y el 80% de los que vuelven compran algo más. La tienda no es solo punto de entrega: es el mecanismo de venta adicional y de absorción del costo de última milla.
- La red de 40–50 tiendas + quioscos convierte el "envío gratis" (si es real y general) en un costo internalizable: el flete se sustituye por un desplazamiento del cliente que además genera compra incremental.
- Para un dropshipper sin tiendas, este es el punto de mayor desventaja estructural frente a Gandhi: no hay pickup que subsidie el envío ni venta adicional que lo compense.

### NO VERIFICADO

- Tiempo de preparación del pedido para pickup (¿horas? ¿24 h?), plazo máximo para recogerlo, si el pickup tiene costo, y si todas las sucursales ofrecen pickup o solo algunas.
- Número vigente exacto de sucursales a 13 nov 2026 (la web propia dice ">40"; VTEX dice ">50").

---

## 7. Modelo propio de costos logísticos por pedido — NO son cifras de Gandhi

> **Advertencia explícita:** todo este §7 es un modelo ilustrativo construido por F6 para la WO-E-LARPING. Los rangos son supuestos de trabajo, amplios y redondeados, pensados para un dropshipping mexicano sin inventario ni tiendas. **Ninguna cifra de este §7 proviene de Gandhi ni debe atribuirse a Gandhi.** Si una cifra de aquí coincide con una real, es casualidad.

### Supuestos declarados

1. Producto tipo: libro físico de ~0.4–0.8 kg, valor de venta $250–$450 MXN (precio típico de novedad/best seller en Gandhi según fichas observadas: $199–$469).
2. Pedido tipo: 1–2 libros por pedido (el libro es compra unitaria; el ticket no se infla con carrito grande como en moda).
3. Origen: un solo almacén / proveedor central (sin red de tiendas que absorba última milla).
4. Destinos: CDMX/Área Metropolitana, ciudad media (Guadalajara, Monterrey, Puebla, Mérida), resto del país / zona extendida.
5. Sin economías de escala de Gandhi (sin 40–50 tiendas, sin alianzas de volumen, sin quioscos).
6. Rangos en MXN, 2026, antes de IVA donde aplique; redondeados a múltiplos de $5–$10 para no fingir precisión.
7. La devolución se modela aparte porque la política observada de Gandhi es "sin cambios ni devoluciones" una vez entregado; un dropshipper que copie esa política ahorra costo de inversa pero paga en conversión y confianza.

### Tabla del modelo (por pedido)

| Componente | CDMX / AM | Ciudad media | Resto / zona extendida | Notas del supuesto |
|---|---|---|---|---|
| Picking + packing (mano de obra + insumos: caja, protección, etiqueta) | $15–$30 | $15–$30 | $20–$40 | Un libro necesita protección de esquinas; el empaque no es una bolsa. |
| Flete última milla / paquetería estándar (1–2 libros) | $45–$80 | $60–$110 | $90–$180 | Rango amplio; zona extendida puede duplicar. Sin tarifa negociada de volumen. |
| **Subtotal fulfillment + envío** | **$60–$110** | **$75–$140** | **$110–$220** | Suma de las dos filas anteriores. |
| Pickup en tienda (si existiera) | $0 flete; $10–$25 costo de preparación y resguardo en tienda | — | — | El cliente paga el desplazamiento; la tienda paga preparación y espacio. |
| Gestión de incidencia (daño, pérdida, reenvío) — provisionado por pedido | $5–$15 | $5–$15 | $10–$25 | Tasa de incidencia supuesta 2–5% de pedidos; costo medio por incidencia $250–$500. |
| Devolución inversa (si se ofrece; Gandhi no la ofrece según lo leído) | $50–$120 por devolución efectiva | $60–$140 | $90–$180 | Solo se incurre en el % de pedidos devueltos (supuesto 3–8%); el costo por pedido vendido es el prorrateo, no la cifra bruta. |
| **Costo logístico total por pedido entregado (sin inversa)** | **$65–$125** | **$80–$155** | **$120–$245** | Fulfillment + flete + provisión de incidencia. |
| **Costo logístico total por pedido (con inversa prorrateada, 5% devolución)** | **$70–$135** | **$85–$165** | **$130–$260** | Suma anterior + 5% × costo de inversa. |

### Lectura del modelo (INFERIDO, no OBSERVADO)

- Con un ticket de $250–$450 y un margen bruto típico del libro (limitado además por el precio único), un costo logístico de $65–$260 por pedido es **entre ~15% y ~70%+ del precio de venta** según destino y ticket. El envío gratis sin mínimo es, en este modelo, insostenible para un operador sin tiendas ni volumen, salvo que el ticket medio suba (2+ libros, cross-sell) o el envío se cobre / se condicione a un mínimo.
- El pickup es la única vía que lleva el flete a ~$0: por eso el 70% de pickup de Gandhi (§6) es la pieza que hace viable su "envío gratis siempre" como rótulo. Sin pickup, el rótulo no se sostiene.
- La política "sin devoluciones" de Gandhi (§5) tiene un valor logístico directo: elimina el costo de inversa prorrateado (~$5–$15 por pedido en el modelo). Un dropshipper nuevo probablemente no puede copiarla sin pagarla en desconfianza y en conversión.
- Sensibilidad: el factor que más mueve el modelo no es el packing ($15–$40) sino la zona de destino (el flete se triplica entre CDMX y zona extendida) y el ticket (1 libro vs 2 libros diluye el flete a la mitad por unidad).

---

## 8. Hipótesis H1–H3 (con falsadores)

### H1 — El pickup, no el flete barato, es la ventaja logística de Gandhi

- **Enunciado:** la rentabilidad logística de Gandhi depende de que ~7 de cada 10 pedidos se recojan en tienda (y generen compra adicional en el 80% de los retornos), no de una tarifa de paquetería especialmente baja.
- **Falsador:** si una compra de prueba en gandhi.com.mx muestra que (a) el pickup es minoritario en el checkout actual, o (b) el envío a domicilio es gratis sin mínimo y con entrega en 24–48 h en CDMX sin requerir pickup, o (c) el ticket medio online es de 1 libro y no hay venta adicional en tienda, H1 queda debilitada o refutada.
- **Implicación para la WO:** un dropshipping sin tiendas no puede replicar la ventaja; debe competir con ticket mayor, envío condicionado o nicho donde el cliente pague el envío.

### H2 — El "envío gratis siempre" es un rótulo de captación, no una tarifa universal verificada

- **Enunciado:** el rótulo "Envío gratis siempre a todo México" que aparece en las fichas es un banner genérico del sitio (aparece incluso en ebooks) y no garantiza envío físico gratis sin mínimo, sin exclusiones de zona/peso/importación, en el checkout real.
- **Falsador:** una compra de prueba (o una captura del checkout con CP de CDMX, de ciudad media y de zona extendida) que muestre envío $0 en los tres casos, sin mínimo, refuta H2. Inversamente, si el checkout cobra envío, pide mínimo o excluye zonas, H2 se confirma.
- **Implicación para la WO:** no copiar el rótulo como promesa en la tienda propia sin verificar el costo real; prometer envío gratis sin modelo es la forma más rápida de quemar margen en libros.

### H3 — La política "sin cambios ni devoluciones" es sostenible para Gandhi por marca y por precio único, pero no es copiable por un entrante

- **Enunciado:** Gandhi puede sostener "una vez entregado no hay cambios ni devoluciones" porque el cliente confía en la marca, el producto es estandarizado (ISBN) y el precio único limita la disputa por precio; un dropshipper nuevo con la misma política perderá conversión y recibirá disputas/contracargos en proporción mayor.
- **Falsador:** si se documenta que Gandhi en la práctica acepta cambios/devoluciones en tienda por insatisfacción (no solo defecto) de forma rutinaria, o si un entrante con política idéntica mide una tasa de disputa igual o menor que con política flexible, H3 se refuta.
- **Implicación para la WO:** la tienda propia debe ofrecer una inversa acotada y explícita (ej.: defecto/daño/error, plazo corto, reposición antes que reembolso) y presupuestarla (§7), en lugar de copiar la letra de Gandhi.

---

## 9. Implicaciones para el dropshipping (lectura F6)

1. **No competir en envío gratis contra Gandhi.** Su envío gratis (si es real) está subsidiado por pickup + venta adicional en tienda. Sin tiendas, el subsidio sale del margen.
2. **Ticket y cross-sell antes que flete.** El libro solo no diluye el flete; el modelo §7 solo se vuelve cómodo con 2+ unidades o con productos de mayor ticket/margen (papelería, bundles, ediciones).
3. **Disponibilidad como promesa, no como stock.** Gandhi promete disponibilidad de red (pasillo infinito) sin mostrar conteos. Un dropshipper puede prometer lo mismo solo si el proveedor confirma stock en tiempo real; si no, la promesa es la del sistema que marca existencia fantasma en best sellers (§1).
4. **Excedente con regla, no con remate permanente.** El caso Oportunidades muestra que el remate sin surtido ni tráfico no salva una ubicación. Para el dropshipper: liquidar lento con bundle/descuento por fondo, no con una sección de saldos que se vuelve el surtido.
5. **Devolución acotada y presupuestada.** Copiar "sin devoluciones" sin marca es arriesgado; ofrecer inversa ilimitada sin presupuesto también. La vía es la intermedia del H3, con su costo en el modelo.

---

## Fuentes

- https://www.gandhi.com.mx/mayoreo — página de mayoreo de Gandhi (leída completa, 13 nov 2026): >5M títulos, tarifas preferenciales, 4–6 días nacionales, mínimo mayoreo $10,000, >40 librerías.
- https://www.gandhi.com.mx/ayuda/politica/condiciones — Condiciones y Políticas de uso (leídas líneas 0–168; resto sin leer por 429 — ver "Sin verificar"): sin cambios ni devoluciones una vez entregado; digital sin devolución tras descarga; reembolso digital solo por licencia agotada, 96 h.
- https://www.gandhi.com.mx/ayuda/politica/terminos — Términos Página 1 (vía índice de búsqueda): programa de puntos, tarjetas Morada/Amarilla/Blanca.
- https://www.vtex.com/es-mx/casos-de-clientes/librerias-gandhi-mantiene-su-liderazgo-digital-con-estrategias-omnichannel-para-miles-de-clientes/ — caso VTEX (leído completo): >50 tiendas, 35,000–40,000 SKUs/tienda, 4.5M ebooks, OMS + Sales App, pasillo infinito, 70% pickup / 30% domicilio, 8/10 recompran algo más.
- https://onebeat.co/es/case-studies/gandhi/ — caso Onebeat: 44 tiendas, 250 quioscos Walmart, >75,000 referencias, Buffer Dinámico.
- https://www.periodismoyambiente.com.mx/2025/08/02/librerias-gandhi-maximiza-la-eficiencia-operativa-con-machine-learning-y-algoritmos-de-ultima-generacion/ — nota Onebeat 2025: disponibilidad 62%→86% en 6 meses; excedentes −32% (resumen) vs −36% (cuerpo) — inconsistencia reportada; inventario total −8%; 50 tiendas, 320 quioscos, >100,000 SKUs.
- https://www.gandhi.com.mx/the-cloudy-sky-of-the-mind--the-mystery-of-human-emotions-and-social-connections-9798230310938/p ; https://www.gandhi.com.mx/panoramic-pop-ups-space-9781645173045/p ; https://www.gandhi.com.mx/tree-of-manifesting-dreams--advent-calendar--9781647225902/p ; https://www.gandhi.com.mx/wind-up-racing-cars-9781409507819/p — fichas de producto (vía índice): rótulo "Envío gratis siempre a todo México", `Availability: instock`, precios $35–$1,712.
- https://www.debate.com.mx/politica/grandeza-de-amlo-enreda-a-adan-augusto-y-abre-debate-20251213-0066.html — *Grandeza* agotado, segundo lote agotado, existencia fantasma en sistema.
- https://www.milenio.com/cultura/laberinto/las-librerias-un-espacio-en-transformacion — contexto sectorial: "está agotado", "se lo puedo pedir de otra sucursal"; ninguna librería generalista tiene todas las novedades.
- https://oem.com.mx/elsoldemexico/cultura/cierra-gandhi-de-miguel-angel-de-quevedo-oportunidades-chimalistac-23672018 — cierre Quevedo 134, concepto Oportunidades/saldos, 43 sucursales entonces.
- https://www.eluniversal.com.mx/cultura/letras/doloroso-pero-necesario-cierre-de-la-vieja-gandhi/ — mismo cierre: remates que dejaron de ser atractivos, rangos de precios abandonados por complejos, 44 sucursales analizadas.
- https://www.merca20.com/dia-de-la-mujer-2024-librerias-gandhi-tiene-estas-promociones-para-lectoras/ — Día de la Mujer 2024: 10% por fondo, exclusiones, precio único.
- https://www.merca20.com/termo-tipo-stanley-al-estilo-librerias-gandhi-por-solo-240-pesos-o-menos/ — regreso a clases 2024: 20%/10%, hasta agotar existencias.
- https://cazaofertas.com.mx/el-buen-fin/tiendas-participantes-el-buen-fin-2026/ ; https://segurointeligente.mx/blog/buen-fin-2026-fechas/ — Gandhi participante Buen Fin 2026 (13–17 nov 2026), sin oferta concreta localizada.
- https://www.shopfully.mx/guadalajara/folleto/librerias-gandhi — folleto Gandhi 1–30 nov 2026.
- https://sic.cultura.gob.mx/ficha.php?table=libreria&table_id=1844 — SIC, sucursal Galerías Mérida (ejemplo de red documentada).
- https://vanguardia.com.mx/dinero/2662135-walmart-firma-alianza-con-librerias-gandhi-frvg2662135 — alianza Walmart: 1,500 títulos, 105 tiendas Walmart.
- https://www.lja.mx/page/5607/?option=com_adsmanager&page=show_category&catid=0&text_search&order=3&expand=1&Itemid=27 — conteo histórico oct 2015 (40 libros: Gandhi 20 disponibles).

---

## Sin verificar

- **Página de condiciones, líneas 169–542** (https://www.gandhi.com.mx/ayuda/politica/condiciones): la segunda lectura con `browser.open` devolvió **429** ("You have exceeded the maximum number of requests allowed within a given time frame") y, por regla de la WO, **no se reintentó**. Quedó sin leer el resto de la política: posibles excepciones por defecto, daño en tránsito, error de envío o cancelación antes del envío que podrían matizar la frase "no hay cambios ni devoluciones". La frase citada es literal de las líneas leídas; su contexto completo no está verificado.
- **Página de ayuda de envíos B2C** (costos por zona, tiempos por destino, seguimiento, zonas extendidas, envío internacional B2C): no se localizó una URL de ayuda de envíos de gandhi.com.mx en las búsquedas del 13 nov 2026; no se verificó en checkout (no hay compra de prueba en este frente).
- **Mensajería(s) usada(s) por Gandhi en B2C:** ninguna fuente de Gandhi las nombra; no se atribuye ninguna.
- **Tiempo de entrega B2C** (CDMX, ciudad media, resto del país) y **tiempo de preparación de pickup** (horas/días, plazo para recoger, costo): no publicados en las fuentes consultadas.
- **Oferta concreta de Gandhi para el Buen Fin 2026** (13–17 nov 2026): solo consta su participación en listas; no el descuento ni las condiciones.
- **Sección "Oportunidades" / "Saldos" vigente en gandhi.com.mx** (URL, profundidad de descuento, rotación) y **año exacto del cierre de Quevedo 134**.
- **Número vigente exacto de sucursales a 13 nov 2026:** la web propia dice ">40" y VTEX ">50"; no se adopta cifra única.
- **Conteos de stock por SKU y selector público de stock por sucursal:** no observados; requieren navegación en vivo / compra de prueba (fuera del alcance de este frente, que no tiene navegador en vivo).
- **Reducción de excedentes Onebeat:** 32% vs 36% en la misma fuente; ninguna de las dos se adopta como hecho.

---

## Resumen ejecutivo

- Gandhi es una red omnicanal (40–50+ librerías, 250–320 quioscos, >5M títulos) con inventario unificado por VTEX OMS/Sales App y Onebeat: disponibilidad media de SKU del 62% al 86% según el proveedor, pero sin conteos públicos de stock por SKU y con rupturas reales en best sellers.
- El dato logístico central es el pickup: el 70% de los pedidos online se recogen en tienda (caso VTEX) y 8 de cada 10 que vuelven compran algo más; esa es la ventaja que subsidia el envío, no una tarifa de flete barata.
- Envíos: el único plazo publicado por Gandhi es 4–6 días hábiles (mayoreo); en fichas B2C aparece el rótulo "Envío gratis siempre a todo México", también en ebooks, por lo que se reporta como banner no verificado en checkout, sin tabla de costos por zona.
- Gandhi no nombra ninguna mensajería en sus fuentes; no se le atribuye ninguna, y el "DHL" que aparece en búsquedas es de Dportenis, no de Gandhi.
- Su política escrita es dura —entregado, sin cambios ni devoluciones; descargado, sin devolución digital—, con la excepción de licencia agotada en 96 h; el resto de la página quedó sin leer por un 429 no reintentado.
- El excedente se canaliza por el concepto Oportunidades/saldos distribuido en todas las librerías tras el cierre de la histórica Quevedo 134, y la promoción es por fondo editorial y temporada (10–20%), limitada por el precio único del libro.
- Modelo propio (no cifras de Gandhi): un pedido de 1–2 libros cuesta $65–$260 MXN en logística según destino, es decir, del ~15% a más del 70% de un ticket de $250–$450; sin tiendas ni pickup, el envío gratis sin mínimo no se sostiene.
