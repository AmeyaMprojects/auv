import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="footer-content">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;