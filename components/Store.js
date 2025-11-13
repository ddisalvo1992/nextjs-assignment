'use client';

import { useState, useEffect } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ margin: '10px' }}>
      <h3>Product Store</h3>

      <input
        type="text"
        placeholder="Search for a product..."
        style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
            <th style={{ border: '1Gqggpx solid #ddd', padding: '8px' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${product.price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
