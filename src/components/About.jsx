import React from 'react';  
import './About.css';  
import profileImage from '../assets/profile.jpeg';  // Import your profile photo  

const About = () => {  
  return (  
    <section id="about" className="about">  
      <div className="about-content">  
        
        {/* Profile Photo */}
        <div className="profile-image-container">  
          <img src={profileImage} alt="Profile" className="profile-image" />  
        </div>  

        <h2>About Me</h2>  
        <p>  
          I am <span className="highlight">Indhu Anandhan</span>, a passionate <strong>Full Stack Developer</strong> with expertise in the <strong>MERN stack</strong>.  
          I am a <strong>2025 pass-out</strong> student, currently pursuing my <strong>BTech(CSE)</strong> at <strong>RK Valley, Idupulapaya</strong>.  
          I am dedicated to building efficient, scalable, and creative web applications.  
          My goal is to contribute to real-world projects and grow as a developer.  
          I have a strong foundation in <strong>React.js, Node.js, Express.js, and MongoDB</strong>.  
          I enjoy solving complex problems and exploring new technologies.  
          My interests include <strong>backend development</strong> and creating interactive web experiences.  
          I am eager to collaborate with innovative teams to create impactful solutions.  
        </p>  

        <h3>Family Background</h3>  
        <p>  
          I come from a humble and hardworking family.  
          My <strong>father is a farmer</strong> who works diligently in the fields.  
          My <strong>mother is a housewife</strong> who takes care of our home and supports the family.  
          I have a <strong>sister studying BTech 3rd year CSE</strong>, who shares my passion for technology.  
          Their support motivates me to excel in my career.  
          Growing up in a hardworking family has taught me the value of dedication and perseverance.  
          I strive to make my family proud through my achievements.  
          Their encouragement inspires me to constantly learn and grow.  
          I am grateful for their unconditional support and love.  
        </p>  

        <h3>Interests & Goals</h3>  
        <p>  
          I am deeply interested in <strong>full-stack web development</strong>.  
          I enjoy building interactive and user-friendly applications.  
          My focus is on mastering <strong>MERN stack</strong> technologies.  
          I aim to contribute to large-scale, impactful projects.  
          I am fascinated by the evolving tech landscape.  
          I regularly practice coding and problem-solving to improve my skills.  
          I aspire to become a successful <strong>Full Stack Developer</strong>.  
          My goal is to work with innovative companies and build creative solutions.  
          I am committed to continuous learning and self-improvement.  
          I look forward to making a meaningful impact in the tech industry.  
        </p>  
      </div>  
    </section>  
  );  
};  

export default About;  
