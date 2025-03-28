import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './components/Home';  
import About from './components/About';  
import Projects from './components/Projects';  

import Navbar from './components/Navbar';  

import Skills from './components/Skills';
import Certificates from './components/Certificates';

 

const App = () => {  
  return (  
    <Router>  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/projects" element={<Projects />} />  
       
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<Skills />} />
        

      </Routes>  
      
    </Router>  
  );  
};  

export default App;  
