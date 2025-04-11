import React from 'react'
import { Link } from 'react-router-dom'

const PetCard = ({ pet, onAddFavorite }) => {
  return (
    <div className="pet-card">
      <img
        src={pet.image_link}
        alt={pet.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3>{pet.name}</h3>
      <p>Breed Group: {pet.breed}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
        <Link to={`/pet/${pet.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
          View Details
        </Link>
        <button onClick={() => onAddFavorite(pet)} style={{ cursor: 'pointer' }}>
          ❤️ Favorite
        </button>
      </div>
    </div>
  )
}

export default PetCard
