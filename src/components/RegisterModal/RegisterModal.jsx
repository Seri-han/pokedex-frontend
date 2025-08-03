import React, { useState } from 'react';
import './RegisterModal.css';

export default function RegisterModal({ isOpen, onClose, onRegister, onOpenLogin }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    onRegister({
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      password: formData.password
    });

    onClose();
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  if (!isOpen) return null;


  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>×</button>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <label>
            Nombre
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={8} />
          </label>
          <label>
            Confirmar contraseña
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength={8} />
          </label>
          <button type="submit" className="modal__submit-btn">Registrarse</button>
        </form>
        <p className="modal__footer-text">
          ¿Ya tienes cuenta? <button className="modal__link-btn" onClick={() => {
            onClose();
            onOpenLogin();
          }}>Inicia sesión aquí</button>
        </p>
      </div>
    </div>
  );
}
