// src/pages/seller/SellerHome.js
import React from 'react';
import '../../styles/SellerHome.css'; // External CSS for styling
import { useNavigate } from 'react-router-dom';

const SellerHome = () => {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate('/sell-car'); // Change to your "sell car" page route
  };

  return (
    <div className="seller-home">
      <header className="seller-header">
        <h1>Welcome to DriveMart Seller Platform</h1>
        <p>Join thousands of trusted car dealers and reach potential buyers instantly!</p>
      </header>

      <section className="benefits">
        <h2>Why Sell with Us?</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>Wide Reach</h3>
            <p>Showcase your car to thousands of buyers across the country.</p>
          </div>
          <div className="benefit-card">
            <h3>Trusted Platform</h3>
            <p>Sell on a trusted platform with verified buyers and secure transactions.</p>
          </div>
          <div className="benefit-card">
            <h3>Efficient Process</h3>
            <p>Easy listing and management tools for your vehicles.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <button className="cta-button" onClick={handleSellClick}>
          Sell Your Car Now
        </button>
      </section>
    </div>
  );
};

export default SellerHome;
