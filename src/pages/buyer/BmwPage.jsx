import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bmwModels} from '../../data/bmwModels';  // Import the models array
import '../../styles/BmwPage.css';

const BmwPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [filteredModels, setFilteredModels] = useState(bmwModels);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = bmwModels.filter(car =>
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
      <div className="pagination">
        {currentPage > 1 && <button onClick={handlePrevPage} className="pagination-btn">Prev</button>}
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && <button onClick={handleNextPage} className="pagination-btn">Next</button>}
      </div>
    );
  };

  return (
    <div className="bmw-page">
      <h1>BMW Models</h1>
      <input
        type="text"
        placeholder="Search for a model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="car-list">
        {currentCars.length > 0 ? (
          currentCars.map(car => (
            <div key={car.id} className="car-item">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
              <p className="car-description">{car.description}</p>
              <p className="bmw-car-price">Starting from ${car.price.toLocaleString()}</p>
              <Link to={`/cars/bmw/${car.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">Car not available yet, check back soon!</p>
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default BmwPage;
