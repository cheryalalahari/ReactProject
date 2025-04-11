import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter(pet => pet.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="empty-msg">No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} />
              <h3>{pet.name}</h3>
              <button onClick={() => removeFromFavorites(pet.id)} className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
