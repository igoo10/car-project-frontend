// src/pages/seller/SellCarForm.js
import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/SellCarForm.css";

const SellCarForm = () => {
/*   const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    year: "",
    price: "",
    description: "",
    mileage: "",
    condition: "",
    fuelType: "",
    transmission: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);  
      const response = await axios.post("http://localhost:5000/api/sellers/sell", formData); // Send data to server
      console.log(response)
      toast.success("Car listing submitted successfully!");
    } catch (error) {
      console.log(error.response)
      toast.error("Error submitting car listing");
      console.error("Error submitting car listing:", error);
    }
  };

  return (
    <div className="sell-car-form-container">
      <h2>List Your Car for Sale</h2>
      <form className="sell-car-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Car Details</h3>
          <div className="form-group">
            <label>Car Make</label>
            <input
              type="text"
              name="carMake"
              placeholder="e.g., Toyota"
              required
            />
          </div>
          <div className="form-group">
            <label>Car Model</label>
            <input
              type="text"
              name="carModel"
              placeholder="e.g., Corolla"
              required
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              name="year"
              placeholder="e.g., 2020"
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price in USD"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <div className="form-group">
            <label>Mileage</label>
            <input type="number" name="mileage" placeholder="e.g., 50000" />
          </div>
          <div className="form-group">
            <label>Condition</label>
            <select name="condition">
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          <div className="form-group">
            <label>Fuel Type</label>
            <select name="fuelType">
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="form-group">
            <label>Transmission</label>
            <select name="transmission">
              <option value="">Select</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Description & Images</h3>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Provide a detailed description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Upload Images</label>
            <input type="file" multiple name="images"  />
          </div>
        </div>

        <button type="submit" className="submit-button">
          List Car for Sale
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SellCarForm;
