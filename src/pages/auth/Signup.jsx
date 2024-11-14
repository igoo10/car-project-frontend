// src/pages/Signup.js
import React, { useState } from 'react';
import '../../styles/Auth.css'; // External CSS for styling

const Signup = () => {
  const [userType, setUserType] = useState('buyer'); // Track selected user type (buyer/seller)

  return (
    <div className="auth-container">
      <h2>{userType === 'seller' ? 'Join as a Car Seller' : 'Create Your Buyer Account'}</h2>

      {/* Signup as Buyer / Seller Selection */}
      <div className="user-type-selector">
        <button
          className={`user-type-button ${userType === 'buyer' ? 'active' : ''}`}
          onClick={() => setUserType('buyer')}
        >
          Sign Up as Buyer
        </button>
        <button
          className={`user-type-button ${userType === 'seller' ? 'active' : ''}`}
          onClick={() => setUserType('seller')}
        >
          Sign Up as Seller
        </button>
      </div>

      <form className="auth-form">
        {/* Common Fields for Both Buyer and Seller */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
        </div>

        {/* Conditional Fields for Seller */}
        {userType === 'seller' && (
          <>
            <div className="form-group">
              <label>Dealership Name</label>
              <input type="text" placeholder="Enter your dealership's name" required />
            </div>
            <div className="form-group">
              <label>Business Address</label>
              <input type="text" placeholder="Enter business address" required />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter contact number" required />
            </div>
            <div className="form-group">
              <label>Website (if any)</label>
              <input type="url" placeholder="Enter dealership website URL" />
            </div>
            <div className="form-group">
              <label>License/Registration Number</label>
              <input type="text" placeholder="Enter license number" required />
            </div>
            <div className="form-group">
              <label>Upload Dealership Logo</label>
              <input type="file" />
            </div>
          </>
        )}

        <button type="submit" className="auth-button">Sign Up</button>
        <p className="auth-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
