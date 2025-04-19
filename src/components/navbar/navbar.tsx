import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">F2B</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-buttons">
          <button className="btn signup">Signup</button>
          <button className="btn login">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


