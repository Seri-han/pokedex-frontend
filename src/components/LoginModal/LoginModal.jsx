import React, { useState } from "react";
import "./loginModal.css";

export default function LoginModal({ isOpen, onClose, onLogin, onOpenRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  function validate() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    return newErrors;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onLogin({ email: formData.email, password: formData.password });
      setFormData({ email: "", password: "" });
    }
  }

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>
          ×
        </button>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="modal__form" noValidate>
          <label>
            Correo electrónico
            {errors.email && <div className="error-message">{errors.email}</div>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </label>
          <label>
            Contraseña
            {errors.password && <div className="error-message">{errors.password}</div>}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              maxLength={20}
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
