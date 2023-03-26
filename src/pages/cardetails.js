/*import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCar } from "../api/cars.service";

function ProductDetails() {
  const { id } = useParams();
  const { data: car, error, isLoading } = useQuery(["getCar", id], getCar);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="product-details">
      <h1>{car.title}</h1>
      <img src={car.image} alt={car.title} />
      <p>{car.description}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
}

export default ProductDetails;*/
