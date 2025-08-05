import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation({
  isLoggedIn,
  onLogout,
  onLoginClick,
  onRegisterClick,
}) {
  return (
    <nav className="navigation">
      <div className="navigation__left">
        <NavLink to="/" className="navigation__link">
          Pokédex
        </NavLink>
        <NavLink to="/about" className="navigation__link">
          Acerca
        </NavLink>
      </div>

      <div className="navigation__right">
        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className="navigation__link">
              Perfil
            </NavLink>
            <button onClick={onLogout} className="navigation__auth-button">
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button onClick={onLoginClick} className="navigation__auth-button">
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="navigation__auth-button"
            >
              Registrarse
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
