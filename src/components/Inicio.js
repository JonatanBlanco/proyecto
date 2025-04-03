import React from 'react';
import imagenInicio from '../assets/imagenInicio.png'; // Asegúrate de que la imagen esté en la carpeta correcta

export const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="texto-inicio">
        <h2>Inicio de la aplicación</h2>
        <p>
          Bienvenido a ZOOMARKET, tu tienda de confianza para productos de mascotas. Aquí encontrarás todo lo que necesitas para cuidar de tu amigo peludo.
        </p>
        <p>
          Explora nuestras categorías y descubre las mejores ofertas para consentir a tu mascota.
        </p>
      </div>
      <img src={imagenInicio} alt="Inicio" className="imagen-inicio" />
    </div>
  );
};