import React from 'react';
import './Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <h1>🎉 Order Confirmed!</h1>
      <p>Thank you for your purchase. Your furry friends will be with you soon 🐶🐾</p>
      <a href="/" className="back-home-btn">Back to Home</a>
    </div>
  );
};

export default Confirmation;
