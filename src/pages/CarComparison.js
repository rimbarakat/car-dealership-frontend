import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import { getCar } from "../api/car.details";

function CompareCars() {
  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");

  const { data, isLoading, error } = useQuery("getCars", getCars);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const carOptions = data.data.map((car) => (
    <option value={car.id} key={car.id}>
      {car.model} ({car.year})
    </option>
  ));

  return (
    <div>
      <h1>Compare Cars</h1>
      <div>
        <label htmlFor="car1">Select Car 1:</label>
        <select
          id="car1"
          value={car1}
          onChange={(e) => setCar1(e.target.value)}
        >
          <option value="">Select a car</option>
          {carOptions}
        </select>
      </div>
      <div>
        <label htmlFor="car2">Select Car 2:</label>
        <select
          id="car2"
          value={car2}
          onChange={(e) => setCar2(e.target.value)}
        >
          <option value="">Select a car</option>
          {carOptions}
        </select>
      </div>
      <button disabled={!car1 || !car2}>Compare</button>
    </div>
  );
}

export default CompareCars;


