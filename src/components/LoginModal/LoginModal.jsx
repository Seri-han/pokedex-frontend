import React, { useState } from "react";
import "./loginModal.css";

export default function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onOpenRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  }

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>
          ×
        </button>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <label>
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              min={5}
              placeholder="ejemplo@correo.com"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              min={8}
              max={20}
              placeholder="pikachu"
            />
          </label>
          <button type="submit" className="modal__submit-btn">
            Entrar
          </button>
        </form>
        <p className="modal__footer-text">
          ¿No tienes cuenta?{" "}
          <button
            className="modal__link-btn"
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}
