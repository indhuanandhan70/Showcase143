import React from 'react';  
import './Home.css';  
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';  
import { useNavigate } from 'react-router-dom';  
import profileImage from '../assets/profile.jpeg'; 

const Home = () => {  
  const navigate = useNavigate();  

  const openLink = (url) => {  
    window.open(url, '_blank', 'noopener,noreferrer');  
  };  

  // Your Google Drive resume download link  
  const resumeLink = "https://drive.google.com/uc?export=download&id=1bDFqctixkOhmxCKQ-WQZYt2t5j-JidCl";  

  return (  
    
    <section id="home" className="home"> 
       <div className="profile-image-container">  
              <img src={profileImage} alt="Profile" className="profile-image" />  
            </div>  
      <div className="home-content">  
        <h1>Hi, I'm <span className="highlight">GOPAL INDHU</span></h1>  
        <p className="description">  
          A passionate <span className="role">Full Stack Developer</span> specializing in the <strong>MERN stack</strong>.  
          I love building beautiful and scalable web applications.  
        </p>  

        <div className="btn-container">  
          <button onClick={() => navigate('/projects')} className="btn">View Projects</button>  
          <a href={resumeLink} className="btn btn-outline" download>Download Resume</a>  
        </div>  

        <div className="social-icons">  
          <button onClick={() => openLink('https://github.com/indhuanandhan70')} title="GitHub">  
            <FaGithub />  
          </button>  
          <button onClick={() => openLink('https://www.linkedin.com/in/indhu-anandhan-1179882b8/recent-activity/all/')} title="LinkedIn">  
            <FaLinkedin />  
          </button>  
          <button onClick={() => openLink('mailto:indhuanandhan70@gmail.com')} title="Email">  
            <FaEnvelope />  
          </button>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Home;  
