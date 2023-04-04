import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCar } from "../api/car.details";
import RequestTestDrive from './schedule.js'
import Dashboard from "./dashboard";
import '../css/cardetails.css'
import ProductItem from "../components/product-item/product-item";

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

      <div>
      <div className="NavBack">
        <a href="javascript:history.back()" class="back-link">《 BACK TO LISTINGS</a>
      </div>

      <div className="container">
        <div className="pic-div">
          <img className="Pic" src={data.image}></img>
        </div>       

        {/* BEGGINNIG OF TABLE */}
         <table className="Table">    
            <tr>

        {/* BEGGINNIG OF LEFT SIDE */}
        
        <td className="left">

        <div className="PriceBox">
          <h className="PriceH">{data.model}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{data.price}</h>
        </div>
        <div className="Line1"></div>

      <div className="table-div">
        <table className="infotable">
          <tr>
            <td className="cell">Year</td>
            <td className="cell">Mileage</td>
            <td className="cell">Engine</td>
            <td className="cell">Gearbox</td>
            <td className="cell">Drive</td>
            <td className="cell">Fuel type</td>
          </tr>
          <tr>
            <td className="cell">{data.year}</td>
            <td className="cell">{data.mileage} km</td>
            <td className="cell">{data.engineShort}</td>
            <td className="cell">{data.engineShort}</td>
            <td className="cell">{data.gearBoxShort}</td>
            <td className="cell">{data.driveShort} </td>
          </tr>
        </table>
      </div>

      <div className="Line2"></div>

      <div>
        <p className="About">About This Car</p>
        <p className="desc">{data.description}</p>
      </div>

      <div className="Line3"></div>

      <p className="detailz">Car Details</p>
      <div className="detailzinfo">
        <p><strong>Model:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;{data.model}</p>
        <p><strong>Year:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&#8196;&#8202;{data.year}</p>  
        <p><strong>Color:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8194;&#8200;{data.color}</p>  
        <p><strong>Mileage:</strong>&emsp;&emsp;&#8197;&#8197;&#8201;&#8239;&#8202;&#8202;&#8202;&#8194;&#8194;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;&#8202;{data.mileage} km</p>   
        <p><strong>Engine:</strong>&emsp;&emsp;&emsp;&emsp;&#8199;&#8201;{data.engine}</p>   
        <p><strong>Fuel Type:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8202;&#8202;{data.fuelType}</p>  
        <p><strong>Gear Box:</strong>&emsp;&emsp;&emsp;&#8239;&#8239;&#8239;&#8239;&#8239;&#8202;{data.gearBox}</p>   
        <p><strong>Drive:</strong>&emsp;&emsp;&emsp;&emsp;&#8194;&#8194;&#8198;&#8202;&#8202;&#8239;&#8239;&#8202;{data.drive}</p>   
        </div>
        </td>
        {/* END OF LEFT SIDE */} 


        {/* BEGGINING OF RIGHT SIDE */}   
        <td className="right">
          
          <div className="mobile-menu">
            
            <RequestTestDrive />
          
          </div>  
        
        </td>
        {/* END OF RIGHT SIDE */}        
            
        </tr>
        </table> 
      {/* END OF TABLE */}

      </div>
      <div className="morefeatured">
          <h>More availabe</h>
      </div>
        <div className="MoreCars">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </div>
      
      
      </div>

  </div>
   
  );
}

export default CarDetails;

