// src/components/Footer.jsx
import React from "react";
import "../../styles/Footer.css"; // Import your footer styles
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DriveMart. All rights reserved.</p>
      <p>Contact us: DriveMartHelp@gmail.com</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
