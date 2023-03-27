import React from "react";
import "../css/dashboard.css";
import ProductItem from "../components/product-item/product-item";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import {Link} from "react-router-dom";
function Dashboard() {
  const { data, error, isLoading } = useQuery("getCars", getCars);
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
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product List</h1>
      <div className="dashboard-list">
        {data.data.map((product) => (

          <ProductItem
            id={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
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
