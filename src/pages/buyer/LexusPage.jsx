import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lexusModels } from '../../data/lexusModels'; // Import the models array
import '../../styles/LexusPage.css';

const LexusPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [filteredModels, setFilteredModels] = useState(lexusModels);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = lexusModels.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredModels(filtered);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = filteredModels.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageClick = (page) => setCurrentPage(page);
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

    return (
      <div className="lexus-pagination">
        {currentPage > 1 && <button onClick={handlePrevPage} className="lexus-pagination-btn">Prev</button>}
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`lexus-pagination-btn ${currentPage === number ? 'lexus-active' : ''}`}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && <button onClick={handleNextPage} className="lexus-pagination-btn">Next</button>}
      </div>
    );
  };

  return (
    <div className="lexus-page">
      <h1 className="lexus-title">Lexus Models</h1>
      <input
        type="text"
        placeholder="Search for a model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="lexus-search-bar"
      />

      <div className="lexus-car-list">
        {currentCars.length > 0 ? (
          currentCars.map(car => (
            <div key={car.id} className="lexus-car-item">
              <img src={car.image} alt={car.name} className="lexus-car-image" />
              <h3 className="lexus-car-name">{car.name}</h3>
              <p className="lexus-car-description">{car.description}</p>
              <p className="lexus-car-price">Starting from ${car.price.toLocaleString()}</p>
              <Link to={`/cars/lexus/${car.id}`} className="lexus-view-details-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="lexus-no-results">Car not available yet, check back soon!</p>
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default LexusPage;
