import React, { useState, useEffect } from "react";
import "../css/dashboard.css";
import ProductItem from "../components/product-item/product-item";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
function Dashboard() {
  const { data: products, error, isLoading } = useQuery("getCars", getCars);
  
  if (error) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product List</h1>
      <div className="dashboard-list">
        {products.map((product) => (
          <ProductItem
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
