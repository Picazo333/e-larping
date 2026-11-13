/* Carrito del lado del cliente — sin dependencias.
   El carrito vive en localStorage; el servidor lo valora de nuevo en
   POST /api/cart y en POST /api/orders (el precio del cliente nunca manda). */
const CART_KEY = "carrito_v1";
const fmt = (c) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(c / 100);

function leerCarrito() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; }
}
function guardarCarrito(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); actualizarContador(); }
function agregar(variantId, qty = 1) {
  const items = leerCarrito();
  const ex = items.find((i) => i.variant_id === Number(variantId));
  if (ex) ex.qty += qty; else items.push({ variant_id: Number(variantId), qty });
  guardarCarrito(items);
}
function quitar(variantId) { guardarCarrito(leerCarrito().filter((i) => i.variant_id !== Number(variantId))); }
function actualizarContador() {
  const n = leerCarrito().reduce((a, i) => a + i.qty, 0);
  document.querySelectorAll("[data-contador-carrito]").forEach((el) => { el.textContent = n ? `Carrito (${n})` : "Carrito"; });
}
async function valorar() {
  const items = leerCarrito();
  if (!items.length) return null;
  const r = await fetch("/api/cart", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ items }) });
  if (!r.ok) throw new Error("No se pudo valorar el carrito (" + r.status + ")");
  return r.json();
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-agregar]");
  if (b) { agregar(b.dataset.agregar, 1); b.textContent = "Agregado ✓"; setTimeout(() => { b.textContent = "Agregar al carrito"; }, 1200); }
  const q = e.target.closest("[data-quitar]");
  if (q) { quitar(q.dataset.quitar); location.reload(); }
});
actualizarContador();
