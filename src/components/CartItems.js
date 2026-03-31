import { useState } from "react";
import "../css/CartItems.css";
import Accordion from "./Accordion";

const CartItems = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(
    products.map((p) => ({ ...p }))
  );

  const handleQuantityChange = (id, delta) => {
    setCartProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          const newTotal = newQty * item.price;
          
          const newDiscountedTotal = newTotal * (1 - item.discountPercentage / 100);
          return { 
            ...item, 
            quantity: newQty, 
            total: newTotal,
            discountedTotal: newDiscountedTotal
          };
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  if (!cartProducts || cartProducts.length === 0) return null;

  return (
    <ul className="cart-items" role="list" aria-label="Cart Products">
      {cartProducts.map((product) => (
        <li key={product.id} className="cart-item" role="listitem">
          <Accordion title={product.title}>
            <div className="cart-item-flex">
              <div className="cart-item-img-col">
                <img src={product.thumbnail} alt={product.title} className="cart-item-img" loading="lazy" />
              </div>
              <div className="cart-item-details-col">
                <div className="cart-item-qty-row">
                  <button
                    className="cart-qty-btn"
                    aria-label={`Decrease quantity of ${product.title}`}
                    onClick={() => handleQuantityChange(product.id, -1)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="cart-item-qty-count">{product.quantity}</span>
                  <button
                    className="cart-qty-btn"
                    aria-label={`Increase quantity of ${product.title}`}
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </button>
                  <span className="cart-item-price">${product.price.toFixed(2)}</span>
                  <button
                    className="cart-remove-btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    &times;
                  </button>
                </div>

                <div className="cart-item-total-row">
                  <span style={{ textDecoration: "line-through", color: "gray", marginRight: "10px" }}>
                    ${product.total.toFixed(2)}
                  </span>
                  
                  <span className="cart-item-total" style={{ fontWeight: "bold", color: "#2ecc71" }}>
                    Total: ${product.discountedTotal.toFixed(2)}
                  </span>
                  
                  <span style={{ marginLeft: "8px", fontSize: "0.8rem", color: "#e74c3c" }}>
                    ({product.discountPercentage}% off)
                  </span>
                </div>
              </div>
            </div>
          </Accordion>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;