import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/CarDetails.css";

const CarDetails = ({ addToCart, cart, cars }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [car, setCar] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const fetchCarDetails = () => {
      const carDetails = cars.find((model) => model.id === parseInt(id));
      setCar(carDetails);
    };

    fetchCarDetails();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(car);
    setIsAddedToCart(true);
  };

  if (!car) return <p>Loading car details...</p>;

  return (
    <div className="car-details">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Shopping
      </button>
      
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Starting from ${car.price.toLocaleString()}</p>
      <button
        onClick={handleAddToCart}
        className="add-to-cart-btn"
        disabled={isAddedToCart}
      >
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default CarDetails;
