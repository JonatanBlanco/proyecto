import React from 'react';

// Definición de los componentes
export const Home = () => <h2>Home</h2>;
export const Productos = () => <h2>Productos</h2>;
export const Categorias = () => <h2>Categorías</h2>;
export const Ofertas = () => <h2>Ofertas y Promociones</h2>;
export const Blog = () => <h2>Blog</h2>;
export const Contactos = () => <h2>Contactos</h2>;
export const Inicio = () => <h2>Inicio de la aplicación</h2>;
export const Explora = () => <h2>Explora nuestros productos</h2>;
export const ListaCategorias = () => <h2>Lista de categorías</h2>;
export const Descuentos = () => <h2>Descuentos especiales</h2>;
export const Articulos = () => <h2>Artículos y noticias</h2>;
export const InfoContacto = () => <h2>Información de contacto</h2>;

// Definición del componente Tienda
export const Tienda = () => {
  const productos = [
    { id: 1, nombre: 'Comida para perros', precio: '$20' },
    { id: 2, nombre: 'Juguete para gatos', precio: '$15' },
    { id: 3, nombre: 'Cama para mascotas', precio: '$50' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="tienda">
      <h2>Tienda</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};