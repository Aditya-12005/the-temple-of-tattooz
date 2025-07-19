import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="nav-links-scroll">
        <div className="nav-links">
          <Link to="/team"></Link>
          <span className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
            Book Now!
          </span>
          <a href="https://www.instagram.com/the_temple_of_tattooz/?hl=en"><img src="/instaIcon.svg" alt="Instagram" className='social-icon'/></a>
          <a href="https://www.facebook.com/TheTattooTemple1629/"><img src="/fbIcon.svg" alt="Facebook" className='social-icon'/></a>
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <p>Phone: <a href="tel:+918200646165">+91 8200646165</a></p>
          <p>Email: <a href="mailto:thetempleoftattoo@gmail.com">thetempleoftattoo@gmail.com</a></p>
          <p>Address: Gujarat, India</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
