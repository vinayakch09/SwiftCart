export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header-content">
      <div className="checkout-header-left-section">
        <a href="/">
          {/* --- NEW LOGO START (Embedded SVG - Dark Version) --- */}
          <svg className="logo" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '50px', width: 'auto'}}>
            <g transform="translate(10, 10)">
              {/* Changed stroke to black for visibility on white header */}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h18.64a2 2 0 0 0 2-1.61L33 6H9" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="27" r="2.5" fill="black"/>
              <circle cx="28" cy="27" r="2.5" fill="black"/>
            </g>
            {/* Changed fill to black */}
            <text x="50" y="38" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="28" fill="black">
              Swift Cart
            </text>
          </svg>
          {/* --- NEW LOGO END --- */}

          <img className="mobile-logo" src="images/mobile-logo.png" alt="Swift Cart" />
        </a>
      </div>

      <div className="checkout-header-middle-section">
        Checkout (<a className="return-to-home-link"
          href="/">{totalQuantity} items</a>)
      </div>

      <div className="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png" alt="Secure Checkout" />
      </div>
    </div>
  );
}