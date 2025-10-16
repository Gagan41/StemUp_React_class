import React, { useState } from "react";
import "./styles.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>🛍️ Shop Store</h1>
      <div className="cart">🛒 Cart: {cartCount}</div>
    </header>
  );
};

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div
      className="product-card"
      style={{
        backgroundColor: product.available ? "#000" : "#f8d7da",
        opacity: product.available ? 1 : 0.6,
      }}
    >
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        disabled={!product.available}
      >
        {product.available ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

const ShopApp = () => {
  const [cartCount, setCartCount] = useState(0);

  const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", price: 500, available: true },
    { id: 2, name: "Jeans", price: 1200, available: true },
    { id: 3, name: "Sneakers", price: 2500, available: true },
    { id: 4, name: "Cap", price: 300, available: false },
  ]);

  const handleAddToCart = (id) => {
  setCartCount(cartCount + 1);
  console.log("Added product with id:", id);
};


  const toggleAvailability = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, available: !p.available } : p
      )
    );
  };

  return (
    <div className="shop-container">
      <Header cartCount={cartCount} />

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} onAddToCart={handleAddToCart} />
            <button
              className="toggle-btn"
              onClick={() => toggleAvailability(product.id)}
            >
              Toggle Availability
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopApp;
