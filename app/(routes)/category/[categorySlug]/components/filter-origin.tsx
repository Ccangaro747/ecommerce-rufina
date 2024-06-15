"use client"
import React, { useEffect, useState } from 'react';

interface Product {
  name: string;
  // Añade aquí las demás propiedades de un producto
}

const FilterOrigin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=*&filters[category][slug][$eq]=otono-invierno')
      .then(response => response.json())
      .then(data => Array.isArray(data) ? setProducts(data) : setProducts([]))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {Array.isArray(products) && products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          {/* Renderiza aquí las demás propiedades de un producto */}
        </div>
      ))}
    </div>
  );
};

export default FilterOrigin;