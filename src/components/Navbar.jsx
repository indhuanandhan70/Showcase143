import React, { useState } from 'react';  
import './Navbar.css';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  // ✅ Toggle menu function
  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  // ✅ Close menu and scroll smoothly when a link is clicked
  const handleNavClick = (id) => {  
    const section = document.getElementById(id);  
    if (section) {  
      section.scrollIntoView({ behavior: 'smooth' });  
    }  
    setIsOpen(false);  // Close the menu after navigation
  };  

  return (  
    <nav className="navbar">  
      <div className="navbar-logo">  
        <h1>My Portfolio</h1>  
      </div>  

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>  
        <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>  
        <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>  
        <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>  
        <li><a href="#certificates" onClick={() => handleNavClick('certificates')}>Certificates</a></li>  
        <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>  
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
