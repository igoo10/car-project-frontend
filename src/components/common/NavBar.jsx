import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
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
            <li><Link to="/">Home</Link></li>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              {location.pathname !== '/login' && location.pathname !== '/signup' && (
                <>
                  <li><a href="#about">About</a></li>
                  <li><a href="#location">Location</a></li>
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
            <>
              <Link to="/login" className="auth-button">Login</Link>
              <Link to="/signup" className="auth-button">Sign Up</Link>
            </>
          )}
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} />
            {cart?.length > 0 && (
              <span className="notification">{cart.length}</span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
