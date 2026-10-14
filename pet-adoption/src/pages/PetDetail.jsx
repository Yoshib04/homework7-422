import { useParams, Link } from "react-router-dom";
import { usePets } from "../context/PetContext.jsx";
import { useFavorites } from "../context/FavoriteContext.jsx";

function PetDetail() {
  const { id } = useParams();
  const { getPetById } = usePets();
  const { isFavorite, toggleFavorite } = useFavorites();

  const pet = getPetById(id);

  if (!pet) {
    return (
      <div className="page-container">
        <h2>Pet not found.</h2>
        <Link to="/">Back to pets</Link>
      </div>
    );
  }

  const favorited = isFavorite(pet.id);

  return (
    <div className="page-container">
      <div className="detail-card">
        <h2>{pet.name}</h2>
        <p><strong>Species:</strong> {pet.species}</p>
        <p><strong>Age:</strong> {pet.age} years old</p>
        <p><strong>Description:</strong> {pet.description}</p>
        <div className="card-actions">
          <button
            className={favorited ? "btn-favorited" : "btn-unfavorited"}
            onClick={() => toggleFavorite(pet.id)}
          >
            {favorited ? "Favorited" : "Favorite"}
          </button>
          <Link to="/">Back to all pets</Link>
        </div>
      </div>
    </div>
  );
}

export default PetDetail;