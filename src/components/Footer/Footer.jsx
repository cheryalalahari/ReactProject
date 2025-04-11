import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2025 Bark & Buy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
