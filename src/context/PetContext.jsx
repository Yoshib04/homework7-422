import { createContext, useContext, useState } from "react";
import { initialPets } from "../data/pets.js";

const PetContext = createContext(null);

export function PetProvider({ children }) {
  const [pets] = useState(initialPets);

  const getPetById = (id) => {
    return pets.find((p) => p.id === Number(id));
  };

  return (
    <PetContext.Provider value={{ pets, getPetById }}>
      {children}
    </PetContext.Provider>
  );
}

export function usePets() {
  const ctx = useContext(PetContext);
  if (ctx === null) {
    throw new Error("usePets must be used within a PetProvider");
  }
  return ctx;
}