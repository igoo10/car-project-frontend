// src/pages/buyer/CarListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarListings = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars/listings');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car listings', error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="car-listings">
      <h2>Available Cars</h2>
      {cars.map((car) => (
        <div key={car._id} className="car-item">
          <h3>{car.carMake} {car.carModel}</h3>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <p>{car.description}</p>
          {/* Add image handling if images are uploaded */}
        </div>
      ))}
    </div>
  );
};

export default CarListings;
