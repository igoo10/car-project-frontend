// About.jsx
import React from 'react';
import '../../styles/About.css';
import { FaMoneyBillWave, FaShieldAlt, FaUserTie } from 'react-icons/fa'; // Importing icons

const About = () => {
  return (
    <>
      <div className="about">
        <h2 className="about-header">Why Choose Us</h2>
        <div className="card-container">
          <div className="card">
            <FaMoneyBillWave className="icon" />
            <h3>Best Price</h3>
            <p>We offer the most competitive prices without compromising on quality.</p>
          </div>
          <div className="card">
            <FaShieldAlt className="icon" />
            <h3>Fast and Safe</h3>
            <p>Enjoy a fast and secure car-buying experience with our trusted services.</p>
          </div>
          <div className="card">
            <FaUserTie className="icon" />
            <h3>Experienced Drivers</h3>
            <p>Our drivers have years of experience to ensure your safety and comfort.</p>
          </div>
        </div>
        
      

      </div>
    </>
  );
};

export default About;
