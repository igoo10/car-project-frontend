import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../styles/Home.css';

const cars = [
  { id: 1, name: 'Tesla Model S', price: 79999, image: '/images/tesla-model-s.jpg' },
  { id: 2, name: 'Ford Mustang', price: 55999, image: '/images/ford-mustang.jpg' },
  { id: 3, name: 'Chevrolet Camaro', price: 42999, image: '/images/chevy-camaro.jpg' },
  // Add more cars as needed
];

const Home = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [sortOption, setSortOption] = useState('name');

const sortedCars = [...filteredCars].sort((a, b) => {
  if (sortOption === 'price') {
    return a.price - b.price;
  }
  return a.name.localeCompare(b.name);
});

<select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-select">
  <option value="name">Sort by Name</option>
  <option value="price">Sort by Price</option>
</select>


  return (
    <div className="home">
      <h1>Available Cars</h1>
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="car-list">
        {filteredCars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>Price: ${car.price}</p>
            <div className="car-actions">
              <Link to={`/car/${car.id}`} className="details-button">View Details</Link>
              <button onClick={() => addToCart(car)} className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
