-- Migración 0001 — esquema inicial (D1 / SQLite).
-- Aplicar con: wrangler d1 migrations apply <DB> --local  (o --remote)
-- Tablas: productos, variantes, movimientos de inventario, pedidos,
-- items de pedido, carritos, entregas de webhooks, cola de correo.

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  handle TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  vendor TEXT NOT NULL DEFAULT '',
  product_type TEXT NOT NULL DEFAULT '',
  tags TEXT NOT NULL DEFAULT '',
  price_cents INTEGER NOT NULL,
  compare_at_price_cents INTEGER,
  image TEXT,
  stock INTEGER NOT NULL DEFAULT 0,
  low_stock_threshold INTEGER NOT NULL DEFAULT 3,
  promo_type TEXT,
  promo_value INTEGER,
  promo_label TEXT,
  promo_starts_at TEXT,
  promo_ends_at TEXT,
  volume_tiers_json TEXT NOT NULL DEFAULT '[]',
  sort_order INTEGER NOT NULL DEFAULT 0,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS variants (
  id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  sku TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  price_cents_override INTEGER,
  stock INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_variants_product ON variants(product_id);

CREATE TABLE IF NOT EXISTS inventory_movements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  variant_id INTEGER NOT NULL REFERENCES variants(id),
  delta INTEGER NOT NULL,
  reason TEXT NOT NULL, -- 'order' | 'restock' | 'adjustment' | 'seed'
  order_id TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_movements_variant ON inventory_movements(variant_id);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  order_number TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL DEFAULT '',
  customer_email TEXT NOT NULL,
  fulfillment_type TEXT NOT NULL, -- 'shipping' | 'pickup'
  pickup_point TEXT,
  shipping_address TEXT,
  subtotal_cents INTEGER NOT NULL,
  shipping_cents INTEGER NOT NULL,
  total_cents INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'MXN',
  payment_status TEXT NOT NULL DEFAULT 'pending',
  payment_reference TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL REFERENCES orders(id),
  variant_id INTEGER NOT NULL,
  sku TEXT NOT NULL,
  product_handle TEXT NOT NULL,
  product_title TEXT NOT NULL,
  variant_title TEXT NOT NULL,
  qty INTEGER NOT NULL,
  unit_cents INTEGER NOT NULL,
  line_total_cents INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_items_order ON order_items(order_id);

CREATE TABLE IF NOT EXISTS carts (
  id TEXT PRIMARY KEY,
  items_json TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS webhook_deliveries (
  id TEXT PRIMARY KEY,
  event TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  target_url TEXT,
  status TEXT NOT NULL, -- 'delivered' | 'failed' | 'no_endpoint'
  http_status INTEGER,
  attempts INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_webhooks_event ON webhook_deliveries(event);

CREATE TABLE IF NOT EXISTS email_outbox (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL, -- 'order_confirmation' | 'inventory_low' | ...
  recipient TEXT NOT NULL,
  subject TEXT NOT NULL,
  body_text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'queued', -- 'queued' | 'sent' | 'failed'
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_outbox_status ON email_outbox(status);
