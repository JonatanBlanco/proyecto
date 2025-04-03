// components/Auth/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import './Auth.css'; // Asegúrate de que este archivo exista

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Email:', email);
    console.log('Password:', password);
    // Lógica de autenticación aquí
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="register-link">
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
};

export default Login;