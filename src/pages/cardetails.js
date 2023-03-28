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
    <a href="javascript:history.back()"> 《 BACK TO LISTINGS</a>
    </div>


    <div className='Title'>
      <h> {data.description} {data.year}</h>
    </div>
        
    <div> <img className="Pic" src={data.image}></img> </div>
      
      <div>
      <h className="PriceH">$259,000</h>
      <p className="PriceP">From $2,463.71 /month</p>
      <div></div>
      <div></div>
      </div>
      
    <div className="PriceBox"></div>

    <div className="Line1"></div>
    <div className="Infoo"> <p> Year &emsp;&emsp;&emsp; Mileage &emsp;&emsp;&emsp; Engine &emsp;&emsp;&emsp; Gearbox &emsp;&emsp;&emsp; Drive &emsp;&emsp;&emsp; Fuel type</p></div>
    <div className="Infoo"> <p> {data.year} &emsp;&emsp;&ensp; 3,000 km &emsp;&emsp;&ensp; 6 Cylinder &emsp;&ensp;  Manual &emsp;&emsp;&emsp;&ensp;&nbsp;Lhd &emsp;&emsp;&emsp;&ensp;&nbsp;&nbsp;Petrol</p></div>
    <div className="Line2"></div>

  </div>
   
  );
}

export default CarDetails;


