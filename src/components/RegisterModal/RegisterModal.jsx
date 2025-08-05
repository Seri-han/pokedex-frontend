import React, { useState, useEffect } from 'react';
import './RegisterModal.css';

export default function RegisterModal({ isOpen, onClose, onRegister, onOpenLogin }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

   useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);


  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  function validate() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.nombre.trim() || formData.nombre.length < 2) {
      newErrors.nombre = 'Nombre debe tener al menos 2 letras';
    }
    if (!formData.apellido.trim() || formData.apellido.length < 2) {
      newErrors.apellido = 'Apellido debe tener al menos 2 letras';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Contraseña debe tener mínimo 8 caracteres, incluir una mayúscula y un número';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
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
      onRegister({
        firstName: formData.nombre,
        lastName: formData.apellido,
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
      setErrors({});
    }
  }

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>×</button>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit} className="modal__form" noValidate>
          <label>
            Nombre
            {errors.nombre && <div className="error-message">{errors.nombre}</div>}
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Apellido
            {errors.apellido && <div className="error-message">{errors.apellido}</div>}
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
          </label>
          <label>
            Correo electrónico
            {errors.email && <div className="error-message">{errors.email}</div>}
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Contraseña
            {errors.password && <div className="error-message">{errors.password}</div>}
            <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={8} />
          </label>
          <label>
            Confirmar contraseña
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength={8} />
          </label>
          <button type="submit" className="modal__submit-btn">Registrarse</button>
        </form>
        <p className="modal__footer-text">
          ¿Ya tienes cuenta?{' '}
          <button className="modal__link-btn" onClick={() => {
            onClose();
            onOpenLogin();
          }}>
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </div>
  );
}
