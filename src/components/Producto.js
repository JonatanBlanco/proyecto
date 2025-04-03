// components/Producto.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL

const Producto = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL

  // Aquí puedes obtener los detalles del producto según el ID
  // Por simplicidad, vamos a simular los detalles del producto
  const productos = [
    { id: 1, nombre: 'Comida para perros', descripcion: 'Comida nutritiva para perros.', precio: '$20' },
    { id: 2, nombre: 'Juguete para gatos', descripcion: 'Juguete divertido para gatos.', precio: '$15' },
    { id: 3, nombre: 'Cama para mascotas', descripcion: 'Cama cómoda para mascotas.', precio: '$50' },
    { id: 4, nombre: 'Collar para perros', descripcion: 'Collar resistente para perros.', precio: '$10' },
    { id: 5, nombre: 'Rascador para gatos', descripcion: 'Rascador para gatos.', precio: '$25' },
    { id: 6, nombre: 'Transportadora para mascotas', descripcion: 'Transportadora segura para mascotas.', precio: '$40' },
  ];

  const producto = productos.find(p => p.id === parseInt(id)); // Encuentra el producto por ID

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
      {/* Aquí puedes agregar más detalles o imágenes del producto */}
    </div>
  );
};

export default Producto;