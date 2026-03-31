import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import CartItems from "./CartItems";

const API_BASE_URL = process.env.REACT_APP_CART_API_URL;
const API_URL = `${API_BASE_URL}/carts/1`;


const CartData = () => {
    const [cart, setCart] = useState(null);
    const [initialCart, setInitialCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                setCart(data);
                setInitialCart(JSON.parse(JSON.stringify(data)));
                setLoading(false);
            })
            .catch(err => {
                setError("Failed to load cart data.");
                setLoading(false);
            });
    }, []);

    const handleReset = () => {
        if (initialCart) {
            setCart(initialCart);
        }
    };

    const isEmpty = cart && Array.isArray(cart.products) && cart.products.length === 0;
    return (
        <>
            <Cart cart={cart} />
            {isEmpty ? (
                <div style={{ textAlign: 'center', color: '#888', margin: '2rem 0', fontWeight: 500 }}>
                    Your cart is empty.
                </div>
            ) : (
                cart && <CartItems products={cart.products} />
            )}
            <hr className="cart-reset-divider" />
            <button className="cart-reset-btn" onClick={handleReset} aria-label="Reset cart">Reset Cart</button>
        </>
    );
};

export default CartData;
