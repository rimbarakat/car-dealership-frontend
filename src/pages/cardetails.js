import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";

function CarDetails() {

  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["getCars", id], getCars);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="product-details">
      <h1>{data.data.title}</h1>
      <img src={data.data.image} alt={data.data.title} />
      <p>{data.data.description}</p>
      <p>Price: ${data.data.price}</p>
    </div>
  );
}

export default CarDetails;
