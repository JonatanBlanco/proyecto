import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 },
];

const Home = () => {
  return (
    <div>
      <h2>Productos</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;