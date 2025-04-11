import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PetDetails.css';

const PetDetails = () => {
  const { breedId } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        if (!response.ok) throw new Error('Failed to fetch pet data');
        const data = await response.json();
        const selected = data.find(b => b.id === parseInt(breedId));
        if (!selected) {
          setError('Pet not found');
        } else {
          const petData = {
            id: selected.id,
            name: selected.name,
            image: selected.image?.url || `https://cdn2.thedogapi.com/images/${selected.reference_image_id}.jpg`,
            breed: selected.breed_group || 'Unknown',
            temperament: selected.temperament,
            life_span: selected.life_span,
            bred_for: selected.bred_for,
            price: Math.floor(Math.random() * 50 + 50), // Random price between 50-100
          };
          setPet(petData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [breedId]);

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    if (!existing.find(p => p.id === pet.id)) {
      existing.push(pet);
      localStorage.setItem('cart', JSON.stringify(existing));
      alert(`${pet.name} added to cart!`);
    } else {
      alert(`${pet.name} is already in cart.`);
    }
  };

  const addToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!existing.find(p => p.id === pet.id)) {
      existing.push(pet);
      localStorage.setItem('favorites', JSON.stringify(existing));
      alert(`${pet.name} added to favorites!`);
    } else {
      alert(`${pet.name} is already in favorites.`);
    }
  };

  if (loading) return <p>Loading pet details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="pet-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="pet-details-card">
        <img src={pet.image} alt={pet.name} />
        <div className="pet-info">
          <h2>{pet.name}</h2>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Temperament:</strong> {pet.temperament || 'N/A'}</p>
          <p><strong>Bred for:</strong> {pet.bred_for || 'N/A'}</p>
          <p><strong>Life span:</strong> {pet.life_span || 'N/A'}</p>
          <p className="price"><strong>Price:</strong> ${pet.price.toFixed(2)}</p>
          <div className="buttons">
            <button className="wishlist-btn" onClick={addToFavorites}>❤️ Wishlist</button>
            <button className="cart-btn" onClick={addToCart}>🛒 Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
