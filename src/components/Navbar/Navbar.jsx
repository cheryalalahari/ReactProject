import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css'; // Optional if you have custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={logo}
          alt="Bark & Buy Logo"
          className="navbar-logo"
        />
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
