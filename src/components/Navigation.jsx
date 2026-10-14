import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

function Navigation() {
  const { favoritesCount } = useFavorites();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Pet Adoption Center</Link>
      </div>
      <div className="nav-links">
        <Link to="/">All Pets</Link>
        <Link to="/favorites">Favorites ({favoritesCount})</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          Theme: {theme === "light" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;