import React from "react";
import "../css/dashboard.css";
import ProductItem from "../components/product-item/product-item";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import {Link} from "react-router-dom";
import { useState } from "react";


function Dashboard() {
  const { data, error, isLoading } = useQuery("getCars", getCars);
  const [searchTerm,setSearchTerm]=useState('');
  const handleEdit = (id) => {
    // handle edit action
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = (id, event) => {
    // handle delete action
    console.log(`Delete product with id: ${id}`);
    
  };

  if (error) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const filteredData = data.data.filter((product) =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product List</h1>
      <div className="dashboard-search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}/>
      </div>
      <div className="dashboard-list">
        {filteredData.map((product) => (

          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.model}
            description={data.description}
            price={product.price}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;
