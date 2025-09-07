import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import logo from "../assets/img/LOGO SECUNDARIO.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Links Izquierda */}
        <ul className="navbar-links left-links">
          <li><Link to="/shop" className="nav-btn">SHOP</Link></li>
          <li><Link to="/about" className="nav-btn">ABOUT</Link></li>
        </ul>
        
        {/* LOGO CENTRADO */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Links Derecha */}
        <ul className="navbar-links right-links">
          <li><Link to="/login" className="nav-btn">LOGIN</Link></li>
          <li><Link to="/cart" className="icon-link">🛒</Link></li>
          <li><Link to="/games" className="icon-link">🎮</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;