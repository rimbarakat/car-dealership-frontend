import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCar } from "../api/car.details";
import '../css/cardetails.css'

function CarDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["getCar", id], getCar);
  console.log(data);
  
  if (error) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
  <div>
    <div className="NavBack">
    <a href="javascript:history.back()" class="back-link">《 BACK TO LISTINGS</a>
    </div>


    <div className='Title'>
      <h> {data.model} {data.year}</h>
    </div>
        
    <div> <img className="Pic" src={data.image}></img> </div>
      
    <div className="PriceBox">
      <h className="PriceH">$259,000</h>
      <p className="PriceP">From $2,463.71 /month</p>
      </div>
      {/* <div></div>
      <div></div> */}
      
      
    

    <div className="Line1"></div>
    <div className="Infoo"> <p> Year &emsp;&emsp;&emsp; Mileage &emsp;&emsp;&emsp; Engine &emsp;&emsp;&emsp; Gearbox &emsp;&emsp;&emsp; Drive &emsp;&emsp;&emsp; Fuel type</p></div>
    <div className="Infoo"> <p> {data.year} &emsp;&emsp;&ensp; 3,000 km &emsp;&emsp;&ensp; 6 Cylinder &emsp;&ensp;  Manual &emsp;&emsp;&emsp;&ensp;&nbsp;Lhd &emsp;&emsp;&emsp;&ensp;&nbsp;&nbsp;Petrol</p></div>
    <div className="Line2"></div>

    <div>
      <p className="About">About This Car</p>
      <p className="desc"> {data.description} </p></div>
      <div className="Line3"></div>
      <p className="detailz">Car Details</p>
        <div className="detailzinfo">
        <p>Model:&emsp;&emsp;&emsp;&emsp;&emsp;<strong>{data.model}</strong></p>
        <p>Year:&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&#8196;<strong>{data.year}</strong></p>  
        <p>Color:&emsp;&emsp;&emsp;&emsp;&#8199;&#8194;&#8200;<strong>{data.color}</strong></p>  
        <p>Mileage:{data.mileage}</p>  
        <p>Engine:{data.engine}</p>  
        <p>Fuel Type:{data.fueltype}</p>  
        <p>Gear Box:{data.gearbox}</p>  
        <p>Drive:{data.drive}</p>  
        </div>
  </div>
   
  );
}

export default CarDetails;


