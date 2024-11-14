// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/LandingPage.css';
import About from './About.jsx';
import nobgbenz2 from '../../assets/nobgbenz2.png';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="text-section">
          <h4 className="subheading">Effortless</h4>
          <h1 className="main-heading">AutoBazaar</h1>
          <p className="description">
            Discover top-quality cars at unbeatable prices. Your dream car is just a click away!
          </p>
          <div className="buttons">
            <Link to="/car-brands">
              <button className="btn btn-start">Shop Now</button>
            </Link>
            <Link to="/seller-home">
              <button className="btn btn-book">Sell</button>
            </Link>
          </div>
        </div>
        <div className="image-section">
          <img
            src={nobgbenz2}
            alt="Car"
            className="car-image"
          />
        </div>
      </div>

      {/* About Section with ID */}
      <div id="about" className="about-section">
        <About />
      </div>

      {/* Location Section with ID */}
      <div id="location" className="location-section">
        <h2 className="locations-header">Our Locations</h2>
        <div className="locations-container">
          <div className="card location-card card-lagos">
            <div className="card-body">
              <h5 className="card-title">LAGOS</h5>
              <p className="card-text">
                No 14, Victoria Island Ozumba Mbadiwe Road, Victoria Island
              </p>
            </div>
          </div>
          <div className="card location-card card-abj">
            <div className="card-body">
              <h5 className="card-title">ABUJA</h5>
              <p className="card-text">Obafemi Awolowo Road, Garki</p>
            </div>
          </div>
          <div className="card location-card card-benin">
            <div className="card-body">
              <h5 className="card-title">BENIN CITY</h5>
              <p className="card-text">Akpakpava Rd, Benin City, Edo State</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
