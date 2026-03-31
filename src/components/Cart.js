import "../css/Cart.css";

const Cart = ({ cart }) => {
  if (!cart) return null;

  const savings = cart.total - cart.discountedTotal;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-summary-row">
        
        <div className="cart-summary-left">
          <span className="cart-summary-products">
            🛒 {cart.totalProducts} Products
          </span>
          <span className="cart-summary-qty">Total Qty: {cart.totalQuantity}</span>
        </div>

        <div className="cart-summary-right">
          {savings > 0 && (
            <span className="original-total">
              ${cart.total.toFixed(2)}
            </span>
          )}

          <span className="cart-summary-price">
            Grand Total: ${cart.discountedTotal.toFixed(2)}
          </span>

          {savings > 0 && (
            <div className="savings-badge">
              You saved ${savings.toFixed(2)}!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Cart;