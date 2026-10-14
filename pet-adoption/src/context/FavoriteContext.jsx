import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("pet_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pet_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (petId) => {
    const id = Number(petId);
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (petId) => {
    return favorites.includes(Number(petId));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        favoritesCount: favorites.length,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (ctx === null) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return ctx;
}