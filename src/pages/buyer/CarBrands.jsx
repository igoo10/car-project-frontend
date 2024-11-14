// CarBrands.js
import React from 'react';
import '../../styles/CarBrands.css';
import nobgbenz2 from '../../assets/nobgbenz2.png';
import audilogo from '../../assets/audilogo.png';
import bmwlogo from '../../assets/bmw.png';
import lexuslogo from '../../assets/lexuslogo.png';
import toyotalogo from '../../assets/toyotalogo.png';
import teslalogo from '../../assets/teslalogo.png';
import hondalogo from '../../assets/hondalogo.png';
import ferrarilogo from '../../assets/ferrarilogo.png';
import lambologo from '../../assets/lambologo.png';
import benzlogo from '../../assets/benzlogo.png';
import otherlogo from '../../assets/otherlogo.png';
import { Link } from 'react-router-dom';

const CarBrands = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          {/* <a className="navbar-brand" href="#">
            <img src="/Gomycode classes/assets/icons/Screenshot (142).png" alt="Logo" />
          </a> */}
          {/* <div className="navbar-toggle" onClick={() => toggleNavbar()}>☰</div> */}
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#logo-container">MODELS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PRICING</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
      <section className="hero-section">
  <div className="hero-container">
    <div className="hero-content">
      <h2 className="hero-title">NEW ARRIVAL</h2>
      <p className="hero-subtitle">Experience the Future of Driving</p>
      <p className="hero-description">
        Discover our latest collection of state-of-the-art vehicles designed for performance,
        luxury, and innovation. Drive into the future with our new arrivals.
      </p>
      <p className="hero-subtitle">No be Chise!, We no dey sell nonsense</p>

    </div>
    
  </div>
</section>


<section id="logo-container">
<div className="logo-item">
        <Link to="/benzpage">
        <img src={benzlogo} alt="Benz Logo" style={{ width: '70%' }} />
        </Link>
      </div>

      <div className="logo-item">
        <Link to="/toyotapage">
        <img src={toyotalogo} alt="Toyota Logo" style={{ width: '70%' }} />
        </Link>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={bmwlogo} alt="BMW Logo" style={{ width: '50%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={lexuslogo} alt="Lexus Logo" style={{ width: '90%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={lambologo} alt="Lambo Logo" style={{ width: '90%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={hondalogo} alt="Honda Logo" style={{ width: '80%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={audilogo} alt="Audi Logo" style={{ width: '80%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={teslalogo} alt="Tesla Logo" style={{ width: '110%' }} />
        </a>
      </div>

      <div className="logo-item">
        <a href="#">
          <img src={ferrarilogo} alt="Ferrari Logo" style={{ width: '110%' }} />
        </a>
      </div>
      <div className="logo-item">
        <Link to="/cars" className="other-logo-link">
        <img src={otherlogo} alt="Other Logo" style={{ width: '110%' }} />
        </Link>
      </div>


    </section>
      </main>
    </div>
  );
};

export default CarBrands;
