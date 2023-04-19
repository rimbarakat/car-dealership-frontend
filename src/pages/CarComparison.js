import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import { getCar } from "../api/car.details";
import { useMutation } from "react-query";
import ComparisonItem from "../components/comparison-item/comparison-item";
import '../css/carcomp.css'

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
      <h1 className="tit">Compare Cars</h1>


      <table className="Tablec">    
        <tr>


      <td className="leftc">
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

      </td>

      <td className="middlec">

      <button disabled={!car1 || !car2} onClick={handleCompareClick}>Compare</button>
      </td>

      
      <td className="rightc">

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

      </td>

      </tr>
      </table> 


      {car1Data && car2Data && (
        <div>
          <h2>{car1Data.model} ({car1Data.year}) vs {car2Data.model} ({car2Data.year})</h2>

        <table className="Tablecar">    
        <tr>
        <td className="leftcar">

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
            color={car1Data.color}
            milage={car1Data.milage}
            engine={car1Data.engine}
            gearBox={car1Data.gearBox}
            fuelType={car1Data.fuelType}
            drive={car1Data.drive}
          />

        <p><strong>Model:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;{car1Data.model}</p>
        <p><strong>Year:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&#8196;&#8202;{car1Data.year}</p>  
        <p><strong>Color:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8194;&#8200;{car1Data.color}</p>  
        <p><strong>Mileage:</strong>&emsp;&emsp;&#8197;&#8197;&#8201;&#8239;&#8202;&#8202;&#8202;&#8194;&#8194;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;{car1Data.mileage} km</p>
        <p><strong>Engine:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8201;{car1Data.engine}</p>   
        <p><strong>Fuel Type:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8202;&#8202;{car1Data.fuelType}</p>  
        <p><strong>Gear Box:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8239;&#8239;&#8239;&#8202;{car1Data.gearBox}</p>   
        <p><strong>Drive:</strong>&emsp;&emsp;&emsp;&emsp;&#8194;&#8194;&#8198;&#8202;&#8202;&#8239;&#8239;&#8202;{car1Data.drive}</p>    
        <p >About This Car</p>
        <p >{car1Data.description}</p>
          </td>
        
        <td></td>

        <td className="rightcar">
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
            color={car2Data.color}
            milage={car2Data.milage}
            engine={car2Data.engine}
            gearBox={car2Data.gearBox}
            fuelType={car2Data.fuelType}
            drive={car2Data.drive}
          />

        <p><strong>Model:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;{car2Data.model}</p>
        <p><strong>Year:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&#8196;&#8202;{car2Data.year}</p>  
        <p><strong>Color:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8194;&#8200;{car2Data.color}</p>  
        <p><strong>Mileage:</strong>&emsp;&emsp;&#8197;&#8197;&#8201;&#8239;&#8202;&#8202;&#8202;&#8194;&#8194;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;{car2Data.mileage} km</p>   
        <p><strong>Engine:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8201;{car2Data.engine}</p>   
        <p><strong>Fuel Type:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8202;&#8202;{car2Data.fuelType}</p>  
        <p><strong>Gear Box:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8239;&#8239;&#8239;&#8202;{car2Data.gearBox}</p>   
        <p><strong>Drive:</strong>&emsp;&emsp;&emsp;&emsp;&#8194;&#8194;&#8198;&#8202;&#8202;&#8239;&#8239;&#8202;{car2Data.drive}</p>    
        <p >About This Car</p>
        <p >{car2Data.description}</p>
          
          </td>
        </tr>
        </table> 

        </div>
      )}
    </div>
  );
}

export default CompareCars;


