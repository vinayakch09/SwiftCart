import { Link } from 'react-router';
import './header.css';

export function Header({ cart }) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            
            {/* --- NEW LOGO START (Embedded directly) --- */}
            <svg className="logo" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '50px', width: 'auto'}}>
               <g transform="translate(10, 10)">
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h18.64a2 2 0 0 0 2-1.61L33 6H9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="27" r="2.5" fill="white"/>
                <circle cx="28" cy="27" r="2.5" fill="white"/>
              </g>
              <text x="50" y="38" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="28" fill="white">
                Swift Cart
              </text>
            </svg>
            {/* --- NEW LOGO END --- */}

            <img className="mobile-logo"
              src="images/mobile-logo-white.png" 
              alt="Swift Cart" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" alt="Search"/>
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" alt="Cart"/>
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}