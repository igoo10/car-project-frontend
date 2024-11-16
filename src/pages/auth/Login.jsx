// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Auth.css'; // External CSS for styling

const Login = () => {
  const [userType, setUserType] = useState('buyer'); // State to manage selected user type

  return (
    <div className="auth-container">
      <h2>Login to Your Account</h2>

      {/* Login as Buyer / Seller Selection */}
      <div className="user-type-selector">
        <button 
          className={`user-type-button ${userType === 'buyer' ? 'active' : ''}`} 
          onClick={() => setUserType('buyer')}
        >
          Login as Buyer
        </button>
        <button 
          className={`user-type-button ${userType === 'seller' ? 'active' : ''}`} 
          onClick={() => setUserType('seller')}
        >
          Login as Seller
        </button>
      </div>

      <form className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p className="auth-text">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>
      </form>
    </div>
  );
};

export default Login;
