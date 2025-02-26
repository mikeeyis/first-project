import { Link } from "react-router-dom";
import { useState } from "react"; // Add this import
import "../css/Navbar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle state for demo
    // Replace with real login/logout logic later
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <button
          className={`nav-link login-btn ${isLoggedIn ? "logged-in" : ""}`}
          onClick={handleLoginLogout}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;