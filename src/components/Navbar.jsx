import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import './Navbar.css';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  const closeMenu = () => {  
    setIsOpen(false);  // Close the menu after clicking a link  
  };  

  return (  
    <nav className="navbar">  
      <div className="navbar-logo">  
        <h1>My Portfolio</h1>  
      </div>  

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>  
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>  
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>  
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>  
        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>  
        <li><Link to="/certificates" onClick={closeMenu}>Certificates</Link></li>  
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>  
      </ul>  

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>  
        <div></div>  
        <div></div>  
        <div></div>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;  
