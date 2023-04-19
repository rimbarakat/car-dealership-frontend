import React from "react";
import "../css/dashboard.css";
import ProductItem from "../components/product-item/product-item";
import { useQuery } from "react-query";
import { getCars } from "../api/cars.service";
import {Link} from "react-router-dom";
import { useState } from "react";
import { deleteCar } from "../api/car.delete";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import { isAdmin } from "../utils";


  function Dashboard() {
  const { data, error, isLoading, refetch } = useQuery("getCars", getCars);
  const [searchTerm,setSearchTerm]=useState('');
  const [selectedYear, setSelectedYear] = useState([]);
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const navigate = useNavigate();

  const deleteCarMutation = useMutation(deleteCar, {
    onError: (error) => {
        console.log(error);
    },
    onSuccess: (data) => {
      refetch();
      navigate("/dashboard");
    },
  });
  const handleEdit = (id) => {
    navigate(`/editcar/${id}`);
  };

  const handleCreateCar = () => {
    navigate(`/createcar`);
  };
  const handleCompareClick= () => {
    navigate(`/compare`);
  };

  const handleDelete = (id, event) => {
    deleteCarMutation.mutate(id);  
  };

  if (error) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const filteredData = data.data.filter((product) =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
    && product.year.includes(selectedYear)
    && (maxPrice ? product.price_int <= maxPrice : true)
    && (minPrice ? product.price_int >= minPrice : true)
  );
  const yearOptions = [];
    for (let i = 2000; i <= 2023; i++) {
      yearOptions.push(i);}


  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Our rides</h1>
        <div style={{ display: 'flex' }}>
        <div className="dashboard-search" style={{ marginRight: '16px' }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="dashboard-select" style={{ marginRight: '16px' }}>
          <p className="yearFilter">Year:</p>
          <select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
            <option value="">All Years</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="dashboard-price">
          <p className="priceFilter" style={{ marginRight: '8px' }}>Price:</p>
          <input
            type="number"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            placeholder="Min"
            style={{ marginRight: '16px', width: '120px' }}
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            placeholder="Max"
            style={{width: '120px'}}

          />
        </div>
        <div className="compare-add-but">
          {isAdmin() ? (
            <>
              <button
                className="addcar-button"
                style={{width: '120px' }}
                onClick={(event) => handleCreateCar(event)}
              >
                + Add Car
              </button>
  
            </>
          ): (
            <>
              <button className="addcar-button" 
              style={{width: '120px', height: '49px', marginRight: '1rem'}}
              onClick={(event) => handleCompareClick(event)} 
              >
                Compare
                </button>
            </>
          )}
        </div>
      </div>
      
      <div className="dashboard-list">
        {filteredData.map((product) => (

          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.model}
            description={product.description}
            price={product.price}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isSold={product.isSold}
            isAvailable={product.isAvailable}
            year={product.year}
          />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;