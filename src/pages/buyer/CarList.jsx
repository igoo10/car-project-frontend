import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CarList.css'; // Ensure to include your CSS for styling

const CarList = ({ cars }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of cars per page
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Filter cars based on the search term
      const filtered = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(filtered);
      setCurrentPage(1); // Reset to first page on search
    }, 300); // Adjust delay for debouncing as needed

    return () => clearTimeout(timeoutId); // Cleanup on unmount or when searchTerm changes
  }, [searchTerm, cars]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  // Get current cars for the current page
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
        pageNumbers.push('...');
      }
    }

    return (
      <div className="page-numbers">
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(number)}
            className={`page-number ${currentPage === number ? 'active' : ''}`}
            disabled={number === '...'}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="car-list-container">
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="car-list">
        {currentCars.length > 0 ? (
          currentCars.map(car => (
            <div key={car.id} className="car-item">
              <Link to={`/cars/${car.id}`}>
                <img src={car.image} alt={car.name} className="car-image" />
                <h3>{car.name}</h3>
                <p>Price: ${car.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">Car not available yet, check back soon!</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
          &#8592; Previous
        </button>
        
        {renderPagination()}

        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination-button">
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default CarList;
