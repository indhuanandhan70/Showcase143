import React from 'react';  
import './Skills.css';  
import { FaPython, FaGitAlt, FaGithub, FaJs, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';  
import { SiPostman, SiMongodb, SiExpress, SiCss3 } from 'react-icons/si';  

const Skills = () => {  
  return (  
    <section id="skills" className="skills">  
      <h2 className="skills-title">Skills & Technologies</h2>  
      <div className="skills-container">  

        {/* Skill Cards */}
        <div className="skill-card">  
          <FaPython className="skill-icon python" />  
          <p>Python with DSA</p>  
        </div>  

        <div className="skill-card">  
          <FaGitAlt className="skill-icon git" />  
          <p>Git</p>  
        </div>  

        <div className="skill-card">  
          <FaGithub className="skill-icon github" />  
          <p>GitHub</p>  
        </div>  

        <div className="skill-card">  
          <SiPostman className="skill-icon postman" />  
          <p>Postman</p>  
        </div>  

        <div className="skill-card">  
          <FaReact className="skill-icon react" />  
          <p>React.js</p>  
        </div>  

        <div className="skill-card">  
          <FaNodeJs className="skill-icon nodejs" />  
          <p>Node.js</p>  
        </div>  

        <div className="skill-card">  
          <SiExpress className="skill-icon express" />  
          <p>Express.js</p>  
        </div>  

        <div className="skill-card">  
          <SiMongodb className="skill-icon mongodb" />  
          <p>MongoDB</p>  
        </div>  

        <div className="skill-card">  
          <FaJs className="skill-icon javascript" />  
          <p>JavaScript</p>  
        </div>  

        <div className="skill-card">  
          <FaHtml5 className="skill-icon html" />  
          <p>HTML5</p>  
        </div>  

        <div className="skill-card">  
          <SiCss3 className="skill-icon css" />  
          <p>CSS3</p>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Skills;  
