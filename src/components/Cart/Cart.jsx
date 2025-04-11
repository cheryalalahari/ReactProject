import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  const removeFromCart = (id) => {
    const updated = cartItems.filter(pet => pet.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price) || 49.99;
    return `$${numericPrice.toFixed(2)}`;
  };

  const totalPrice = cartItems.reduce((acc, pet) => acc + (parseFloat(pet.price) || 49.99), 0);

 

  const navigate = useNavigate(); // ⬅️ Inside the Cart component

const handleCheckout = () => {
  setCartItems([]);
  localStorage.removeItem('cart');
  navigate('/confirmation'); // ⬅️ Navigate to confirmation page
};


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((pet) => (
              <div key={pet.id} className="pet-card">
                <img src={pet.image} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p className="price">{formatPrice(pet.price)}</p>
                <button onClick={() => removeFromCart(pet.id)} className="remove-btn">Remove</button>
              </div>
            ))}
          </div>
          <div className="total-price">
            Total: <strong>{formatPrice(totalPrice)}</strong>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
