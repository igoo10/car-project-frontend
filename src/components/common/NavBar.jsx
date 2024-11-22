import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/NavBar.css';

const Navbar = ({ cart }) => {
  const location = useLocation();
  const isSellCarPage = location.pathname === '/sell-car';

  return (
    <nav className="navbar">
      {/* Show logo only if not on CarBrands page */}
      {location.pathname !== '/car-brands' && (
        <Link to="/" className="logo">
          <div>DriveMart</div>
        </Link>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <ul className="nav-links">
          {/* Only show "Home" centered when on the /sell-car page */}
          {isSellCarPage ? (
            <li>
              <Link to="/" className="nav-icon">
                <FaHome />
                <span className="tooltip">Home</span>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/" className="nav-icon">
                  <FaHome />
                  <span className="tooltip">Home</span>
                </Link>
              </li>
              {location.pathname !== '/login' && location.pathname !== '/signup' && (
                <>
                  <li>
                    <a href="#about" className="nav-icon">
                      <FaInfoCircle />
                      <span className="tooltip">About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="#location" className="nav-icon">
                      <FaMapMarkerAlt />
                      <span className="tooltip">Our Location</span>
                    </a>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </div>

      {/* Hide the right section (including cart icon) on the /sell-car page */}
      {!isSellCarPage && (
        <div className="right-section">
          {location.pathname === '/' && (
            <div className="auth-dropdown">
              <button className="auth-button">Account</button>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          )}
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} />
            {cart?.length > 0 && (
              <span className={`notification ${cart.length > 0 ? 'show' : ''}`}>
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
