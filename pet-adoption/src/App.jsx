import { Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import { PetProvider } from "./context/PetContext.jsx";
import { FavoriteProvider } from "./context/FavoriteContext.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import PetDetail from "./pages/PetDetail.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/:id" element={<PetDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PetProvider>
        <FavoriteProvider>
          <AppContent />
        </FavoriteProvider>
      </PetProvider>
    </ThemeProvider>
  );
}

export default App;