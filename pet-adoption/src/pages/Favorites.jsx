import { usePets } from "../context/PetContext.jsx";
import { useFavorites } from "../context/FavoriteContext.jsx";
import PetCard from "../components/PetCard.jsx";

function Favorites() {
  const { pets } = usePets();
  const { favorites } = useFavorites();

  const favoritePets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <div className="page-container">
      <h2>Your Favorites</h2>
      {favoritePets.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="pets-grid">
          {favoritePets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;