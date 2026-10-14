import { usePets } from "../context/PetContext.jsx";
import PetCard from "../components/PetCard.jsx";

function Home() {
  const { pets } = usePets();

  return (
    <div className="page-container">
      <h2>Available Pets</h2>
      <div className="pets-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Home;