import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import "./index.css";
import Profile from "./components/Profile/Profile";

function App() {
  // --- Estado global --- //
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedStatus = localStorage.getItem("isLoggedIn");
    return savedStatus === "true";
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [pokemons, setPokemons] = useState([]);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // --- Funciones --- //
  function handleLogin({ email, password }) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    localStorage.setItem("isLoggedIn", "true");
  }

  function handleRegister({ firstName, lastName, email, password }) {
    const newUser = { firstName, lastName, email };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);
    setIsRegisterOpen(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setIsLoginOpen(true);
  }

  function handleRemoveFavorite(name) {
    const updated = favorites.filter(f => f !== name);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  // pokémones completos favoritos:
  const favoritePokemonsObjects = pokemons.filter(p => favorites.includes(p.name));

  return (
    <>
      <Header />
      <Navigation
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              onRequestLogin={() => setIsLoginOpen(true)}
              favorites={favorites}
              setFavorites={setFavorites}
              pokemons={pokemons}
              setPokemons={setPokemons}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              favorites={favoritePokemonsObjects}
              onRemoveFavorite={handleRemoveFavorite}
              onLogout={handleLogout}
            />
          }
        />
      </Routes>
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onOpenLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
}

export default App;
