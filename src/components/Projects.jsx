import React from 'react';  
import './Projects.css';  

const Projects = () => {  
  const projects = [  
    {  
      title: "Human Activity Tracker",  
      description: "A MERN stack project for tracking human activities with real-time monitoring.",  
      link: "https://github.com/indhuanandhan70/HumanActivityTracker"  
    },  
    {  
      title: "YouCan - Online Learning Platform",  
      description: "An online learning platform featuring coding videos and a chatbot for IT career preparation.",  
      link: "https://github.com/indhuanandhan70/portfolio123"  
    },  
    {  
      title: "Homely Hub",  
      description: "A MERN stack project for property listings and management with user authentication.",  
      link: "https://github.com/indhuanandhan70/Homely-Hub"  
    }  
  ];  

  return (  
    <section id="projects" className="projects">  
      <div className="projects-container">  
        <h2>My Projects</h2>  
        <div className="project-list">  
          {projects.map((project, index) => (  
            <div key={index} className="project-card">  
              <h3>{project.title}</h3>  
              <p>{project.description}</p>  
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Projects;  
