import React, { useState } from 'react';  
import './Navbar.css';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  // ✅ Toggle menu function
  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  // ✅ Close menu when a link is clicked
  const closeMenu = () => {  
    setIsOpen(false);  
  };  

  return (  
    <nav className="navbar">  
      <div className="navbar-logo">  
        <h1>My Portfolio</h1>  
      </div>  

      <ul className={`nav-links ${isOpen ? 'open' : ''}`} onClick={closeMenu}>  
        <li><a href="#about">About</a></li>  
        <li><a href="#projects">Projects</a></li>  
        <li><a href="#skills">Skills</a></li>  
        <li><a href="#certificates">Certificates</a></li>  
        <li><a href="#contact">Contact</a></li>  
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
