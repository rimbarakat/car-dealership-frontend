import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/register.css";
import { useQuery } from "react-query";
import { editCar } from "../api/edit.car";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { getCar } from '../api/car.details';



function CarEditForm() {
    const { id } = useParams();
  const [color, setColor] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [mileage, setMileage] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [price_int, setPriceInt] = useState('');
  const [engine, setEngine] = useState('');
  const [engineShort, setEngineShort] = useState('');
  const [drive, setDrive] = useState('');
  const [driveShort, setDriveShort] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [fuelTypeShort, setFuelTypeShort] = useState('');
  const [gearBox, setGearBox] = useState('');
  const [gearBoxShort, setGearBoxShort] = useState('');
  const [image, setImage] = useState('');
  const [isAvailable, setIsAvailable] = useState();
  const [isSold, setIsSold] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { data, err, isLoading, refetch } = useQuery(["getCar", id], getCar);
  useEffect(() => {
    if (data) {
      setColor(data.color);
      setModel(data.model);
      setDescription(data.description);
      setMileage(data.mileage);
      setYear(data.year);
      setPrice(data.price);
      setPriceInt(data.price_int);
      setEngine(data.engine);
      setEngineShort(data.engineShort);
      setDrive(data.drive);
      setDriveShort(data.driveShort);
      setFuelType(data.fuelType);
      setFuelTypeShort(data.fuelTypeShort);
      setGearBox(data.gearBox);
      setGearBoxShort(data.gearBoxShort);
      setImage(data.image);
      setIsAvailable(data.isAvailable);
      setIsSold(data.isSold);
    }
  }, [data]);
  const editCarMutation = useMutation(editCar, {
    onError: (error) => {
      setError("Car not editted"); 
    },
    onSuccess: (data) => {
      refetch();
      navigate("/dashboard");
    },
  });


  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMileageChange = (event) => {
    setMileage(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePriceIntChange = (event) => {
    setPriceInt(event.target.value);
  };

  const handleEngineChange = (event) => {
    setEngine(event.target.value);
  };

  const handleEngineShortChange = (event) => {
    setEngineShort(event.target.value);
  };

  const handleDriveChange = (event) => {
    setDrive(event.target.value);
  };

  const handleDriveShortChange = (event) => {
    setDriveShort(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setFuelType(event.target.value);
  };

  const handleFuelTypeShortChange = (event) => {
    setFuelTypeShort(event.target.value);
  };

  const handleGearBoxChange = (event) => {
    setGearBox(event.target.value);
  };

  const handleGearBoxShortChange = (event) => {
    setGearBoxShort(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleIsAvailableChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleIsSoldChange = (event) => {
    console.log("Checked:", event.target.checked);
    setIsSold(event.target.checked);
  };

  const handleCreateListing = (event) => {
    event.preventDefault();
    // Validate input values
    if (!color || !model || !description || !mileage || !year || !price || !engine || !drive || !fuelType || !gearBox || !image) {
      setError('Please fill out all required fields.');
      return;
    }
  
    const price_int = parseFloat(price.replace(',', '')); // convert price string to float
  
    const newCarListing = {
      id,
      color,
      model,
      description,
      mileage,
      year,
      price,
      price_int,
      engine,
      engineShort,
      drive,
      driveShort,
      fuelType,
      fuelTypeShort,
      gearBox,
      gearBoxShort,
      image,
      isAvailable,
      isSold,
    };
    
    editCarMutation.mutate(newCarListing);
   };
  return (
    <div className="register-page">
      <h2>Edit Car</h2>
      <h6><h6 className='form-mini-title'>Car id:</h6> {id}</h6>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleCreateListing}>
        <div className="form-field">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={handleColorChange}
            
          />
        </div>
        <div className="form-field">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            value={model}
            
            onChange={handleModelChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            value={mileage}
            onChange={handleMileageChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={handleYearChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Engine:</label>
          <input
            type="text"
            id="engine"
            value={engine}
            onChange={handleEngineChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Engine Short:</label>
          <input
            type="text"
            id="engineShort"
            value={engineShort}
            onChange={handleEngineShortChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Drive:</label>
          <input
            type="text"
            id="drive"
            value={drive}
            onChange={handleDriveChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Drive Short:</label>
          <input
            type="text"
            id="driveShort"
            value={driveShort}
            onChange={handleDriveShortChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Fuel Type:</label>
          <input
            type="text"
            id="fuelType"
            value={fuelType}
            onChange={handleFuelTypeChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Fuel Type Short:</label>
          <input
            type="text"
            id="fuelTypeShort"
            value={fuelTypeShort}
            onChange={handleFuelTypeShortChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Gearbox:</label>
          <input
            type="text"
            id="gearBox"
            value={gearBox}
            onChange={handleGearBoxChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Gearbox Short:</label>
          <input
            type="text"
            id="gearBoxShort"
            value={gearBoxShort}
            onChange={handleGearBoxShortChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Image:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Is Sold:</label>
          <input
            type="checkbox"
            id="issold"
            value={isSold}
            onClick={handleIsSoldChange}
            defaultChecked={isSold}
          />
        </div>
        <div className="form-field">
          <label htmlFor="isAvailable">Is Available:</label>
          <input
            type="checkbox"
            id="isAvailable"
            value={isAvailable}
            onClick={handleIsAvailableChange}
            defaultChecked={isAvailable}
          />
        </div>
        <button type="submit" onClick={handleCreateListing}>Edit Listing</button>
      </form>
    </div>
  );
}

export default CarEditForm;
