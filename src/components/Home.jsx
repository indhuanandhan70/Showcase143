import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import './Navbar.css';  
import { FaBars, FaTimes } from 'react-icons/fa';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleNavbar = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <nav className="navbar">  
      <div className="navbar-logo">  
        <h1>My Portfolio</h1>  
      </div>  
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>  
        <Link to="/">Home</Link>  
        <Link to="/about">About</Link>  
        <Link to="/skills">Skills</Link>  
        <Link to="/projects">Projects</Link>  
        <Link to="/certificates">Certificates</Link>  
       
      </div>  

      <div className="hamburger" onClick={toggleNavbar}>  
        {isOpen ? <FaTimes /> : <FaBars />}  
      </div>  
    </nav>  
  );  
};  

export default Navbar;  
