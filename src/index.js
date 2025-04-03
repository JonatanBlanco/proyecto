import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usar 'react-dom/client' para React 18+
import App from './App';
import './index.css'; // Asegúrate de que este archivo exista
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si estás usando reportWebVitals, asegúrate de que esté configurado correctamente
reportWebVitals();