import React, { useState, useEffect } from 'react';
import '../css/dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {console.log(data);setProducts(data);});
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product List</h1>
      <div className="dashboard-list">
        {products.map(product => (
          <div className="dashboard-item" key={product.id}>
            <p><img src={product.image} alt="#"/></p>
            <h3 className="dashboard-item-title">{product.title}</h3>
            <p className="dashboard-item-description">{product.description}</p>
            <p className="dashboard-item-price">Price: ${product.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
