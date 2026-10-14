import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext.jsx";

function PetCard({ pet }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(pet.id);

  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p><strong>Species:</strong> {pet.species}</p>
      <p><strong>Age:</strong> {pet.age} years old</p>
      <p>{pet.description}</p>
      <div className="card-actions">
        <Link to={`/pets/${pet.id}`}>View Details</Link>
        <button
          className={favorited ? "btn-favorited" : "btn-unfavorited"}
          onClick={() => toggleFavorite(pet.id)}
        >
          {favorited ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default PetCard;