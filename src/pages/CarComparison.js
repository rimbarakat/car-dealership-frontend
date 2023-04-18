import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import { getCar } from "../api/car.details";
import { useMutation } from "react-query";
import ComparisonItem from "../components/comparison-item/comparison-item";
function CompareCars() {
  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");
  const [car1Data, setCar1Data] = useState(null);
  const [car2Data, setCar2Data] = useState(null);

  const { data, isLoading, error } = useQuery("getCars", getCars);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  
  const handleCompareClick=()=>{
    const car1Data_ = data.data.find(car => car._id === car1);
    const car2Data_ = data.data.find(car => car._id === car2); 
    setCar1Data(car1Data_);
    setCar2Data(car2Data_);
  }

  const carOptions = data.data.map((car) => (
    <option value={car._id} key={car._id}>
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
      <button disabled={!car1 || !car2} onClick={handleCompareClick}>Compare</button>
      {car1Data && car2Data && (
        <div>
          <h2>{car1Data.model} ({car1Data.year}) vs {car2Data.model} ({car2Data.year})</h2>
          <ComparisonItem
            key={car1Data._id}
            id={car1Data._id}
            image={car1Data.image}
            title={car1Data.model}
            description={car1Data.description}
            price={car1Data.price}
            isSold={car1Data.isSold}
            isAvailable={car1Data.isAvailable}
            year={car1Data.year}
          />
          <ComparisonItem
            key={car2Data._id}
            id={car2Data._id}
            image={car2Data.image}
            title={car2Data.model}
            description={car2Data.description}
            price={car2Data.price}
            isSold={car2Data.isSold}
            isAvailable={car2Data.isAvailable}
            year={car2Data.year}
          />
          
        </div>
      )}
    </div>
  );
}

export default CompareCars;


