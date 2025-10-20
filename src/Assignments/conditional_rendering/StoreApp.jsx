import React, { useState, useEffect } from "react";

export default function StoreApp() {
  const [products, setProducts] = useState([
    { id: 1, name: "Classic Kurta", price: 899, available: true, qty: 5 },
    { id: 2, name: "Designer Saree", price: 2499, available: true, qty: 2 },
    { id: 3, name: "Summer T-shirt", price: 499, available: false, qty: 0 },
    { id: 4, name: "Premium Jacket", price: 3899, available: true, qty: 1 },
  ]);

  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart(productId) {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newQty = Math.max(0, p.qty - 1);
          return { ...p, qty: newQty, available: newQty > 0 };
        }
        return p;
      })
    );
    setCartCount((c) => c + 1);
  }

  useEffect(() => {
    const css = `
      .store-root { font-family: Arial, Helvetica, sans-serif; max-width: 1000px; margin: 20px auto; padding: 16px; }
      .header { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
      .store-name { font-size: 1.6rem; font-weight:700; }
      .cart-badge { background:#1f6feb; color:white; padding:6px 10px; border-radius:999px; }
      .products-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:12px; }
      .card { background: white; border-radius:8px; padding:12px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
      .product-unavailable { background: #fff1f1; }
      .product-available { background: #f7fff7; }
      .product-title { font-size:1.05rem; font-weight:600; margin-bottom:6px; }
      .price { font-weight:700; margin-bottom:8px; }
      .offer { font-size:0.9rem; color:#b45bff; margin-bottom:8px; }
      .btn { padding:8px 10px; border-radius:6px; cursor:pointer; border:none; }
      .btn-add { background:#1f6feb; color:white; }
      .out-of-stock { color:#b00020; font-weight:700; }
      .qty { font-size:0.85rem; color:#333; margin-left:6px; }
      .footer { margin-top:14px; font-size:0.95rem; color:#555; }
    `;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="store-root">
      <Header storeName="Ecom App" cartCount={cartCount} />

      <ProductList products={products} addToCart={handleAddToCart} />

      <div className="footer">
        Total products: {products.length} • In cart: {cartCount}
      </div>
    </div>
  );
}

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="store-name">{storeName}</div>
      <div className="cart-badge">🛒 {cartCount}</div>
    </header>
  );
}
function ProductList({ products, addToCart }) {
  return (
    <section>
      <div style={{ marginBottom: 10, color: "#333" }}>
        Browse our collection — items shown regardless of stock; action buttons
        reflect availability.
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function ProductItem({ product, addToCart }) {
  const wrapperClass = product.available
    ? "product-available"
    : "product-unavailable";

  return (
    <Card className={wrapperClass}>
      <div>
        <div className="product-title">{product.name}</div>
        <div className="price">₹{product.price}</div>

        {product.price > 1000 && (
          <div className="offer">Special Offer Available!</div>
        )}

        {product.available ? (
          <div>
            <button
              className="btn btn-add"
              onClick={() => addToCart(product.id)}
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
            <span className="qty">Qty: {product.qty}</span>
          </div>
        ) : (
          <div className="out-of-stock">Out of Stock</div>
        )}
      </div>
    </Card>
  );
}
