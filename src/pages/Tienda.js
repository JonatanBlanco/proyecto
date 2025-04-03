import React from 'react';
import './Tienda.css'; // Asegúrate de que este archivo CSS exista

// Importa las imágenes si son locales
import imagen1 from './assets/imagen1.jpg'; // Cambia la ruta según tu estructura de carpetas
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';
import imagen6 from './assets/imagen6.jpg';

export const Tienda = () => {
  const productos = [
    { id: 1, nombre: 'Comida para perros', precio: '$20', imagen: imagen1 },
    { id: 2, nombre: 'Juguete para gatos', precio: '$15', imagen: imagen2 },
    { id: 3, nombre: 'Cama para mascotas', precio: '$50', imagen: imagen3 },
    { id: 4, nombre: 'Collar para perros', precio: '$10', imagen: imagen4 },
    { id: 5, nombre: 'Rascador para gatos', precio: '$25', imagen: imagen5 },
    { id: 6, nombre: 'Transportadora para mascotas', precio: '$40', imagen: imagen6 },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="tienda">
      <h2>Tienda</h2>
      <div className="grid-container">
        {productos.map(producto => (
          <div className="grid-item" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};