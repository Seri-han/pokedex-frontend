import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedStatus = localStorage.getItem("isLoggedIn");
    return savedStatus === "true";
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ya no inicia con !isLoggedIn

function handleRequestLogin() {
  setIsLoginOpen(true);
}

  function handleLogin({ email, password }) {
    console.log("Login con", email, password);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    localStorage.setItem("isLoggedIn", "true");
  }

  function handleRegister({ email, password }) {
    console.log("Registro con", email, password);
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setIsLoginOpen(true);
  }

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
<Route path="/" element={<Main isLoggedIn={isLoggedIn} onRequestLogin={handleRequestLogin} />} />        <Route path="/about" element={<About />} />
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
