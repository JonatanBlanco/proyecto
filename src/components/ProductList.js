import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;