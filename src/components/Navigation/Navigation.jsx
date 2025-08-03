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
          <button className="navigation__auth-button" onClick={onLogout}>
            Cerrar sesión
          </button>
        ) : (
          <>
            <button className="navigation__auth-button" onClick={onLoginClick}>
              Login
            </button>
            <button
              className="navigation__auth-button"
              onClick={onRegisterClick}
            >
              Registrarse
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
