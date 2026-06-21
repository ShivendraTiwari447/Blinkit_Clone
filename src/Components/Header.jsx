import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      
      {/* Left */}
      <div className="left">
        
        <Link to="/">
          <img
            src="https://iconlogovector.com/uploads/images/2024/10/sm-6713c3a1293ec-Blinkit.webp"
            alt="Blinkit Logo"
            className="logo"
          />
        </Link>

        <div className="location">
          <p className="city">Lucknow, India</p>
          <p className="subtext">Delivery in 10 mins</p>
        </div>

      </div>

      {/* Center Search */}
      <div className="center">

        <input
          type="text"
          placeholder="Search for groceries, fruits, drinks..."
          className="search-input"
        />

        <button className="search-btn">
          🔍
        </button>

      </div>

      {/* Right */}
      <div className="right">

        <Link to="/login" className="nav-link">
          Login
        </Link>

        <Link to="/register" className="nav-link">
          Register
        </Link>

        <Link to="/cart" className="cart-link">
          Cart 🛒
        </Link>

      </div>

    </header>
  );
}

export default Header;