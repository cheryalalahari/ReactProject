import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();

        const formatted = data.slice(0, 20).map((pet) => {
          const fallbackImage = "https://via.placeholder.com/250x200?text=No+Image";
          let imageUrl = fallbackImage;

          if (pet.image?.url) {
            imageUrl = pet.image.url;
          } else if (pet.reference_image_id) {
            imageUrl = `https://cdn2.thedogapi.com/images/${pet.reference_image_id}.jpg`;
          }

          return {
            id: pet.id,
            name: pet.name,
            image: imageUrl,
            breed: pet.breed_group || "Unknown",
          };
        });

        setPets(formatted);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  const handleAddToFavorites = (pet) => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!existing.find((p) => p.id === pet.id)) {
      existing.push(pet);
      localStorage.setItem("favorites", JSON.stringify(existing));
      alert(`${pet.name} added to favorites!`);
    } else {
      alert(`${pet.name} is already in favorites.`);
    }
  };

  const handleAddToCart = (pet) => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (!existing.find((p) => p.id === pet.id)) {
      const updatedPet = {
        ...pet,
        price: 49.99, // ✅ Add a default price if not already there
      };
  
      existing.push(updatedPet);
      localStorage.setItem("cart", JSON.stringify(existing));
      alert(`${pet.name} added to cart!`);
    } else {
      alert(`${pet.name} is already in cart.`);
    }
  };
  

  return (
    <div className="home-container">
      <h2 className="title">Adopt a Friend 🐾</h2>
      <div className="pet-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <div className="icon-buttons">
              <button className="icon-button" onClick={() => handleAddToFavorites(pet)} title="Add to Favorites">❤️</button>
              <button className="icon-button" onClick={() => handleAddToCart(pet)} title="Add to Cart">🛒</button>
            </div>
            <img
              src={pet.image}
              alt={pet.name}
              className="pet-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/250x200?text=No+Image";
              }}
            />
            <h3 className="pet-name">{pet.name}</h3>
            <button className="details-button" onClick={() => navigate(`/pet/${pet.id}`)}>See Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
