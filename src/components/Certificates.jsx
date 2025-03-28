import React from 'react';  
import './Certificates.css';  
import mernInternship from '../assets/certificates/mern-internship.jpg';  
import pythonCert from '../assets/certificates/python-greatlearning.jpg';  

const Certificates = () => {  
  return (  
    <section id="certificates" className="certificates">  
      <h2 className="certificates-title">Certificates</h2>  

      <div className="certificates-container">  

        {/* MERN Stack Internship Certificate */}
        <div className="certificate-card">  
          <img src={mernInternship} alt="MERN Stack Internship" className="certificate-image" />  
          <div className="certificate-info">  
            <h3>3-Month MERN Stack Internship</h3>  
            <p>Successfully completed a 3-month intensive MERN stack internship at WSA.  
              Gained hands-on experience in building full-stack applications using MongoDB,  
              Express.js, React.js, and Node.js.</p>  
          </div>  
        </div>  

        {/* Python GreatLearning Certificate */}
        <div className="certificate-card">  
          <img src={pythonCert} alt="Python Certificate" className="certificate-image" />  
          <div className="certificate-info">  
            <h3>Python Certification - GreatLearning</h3>  
            <p>Completed Python course from GreatLearning with a focus on data structures,  
              algorithms, and problem-solving skills. Gained practical knowledge of Python  
              programming fundamentals and advanced concepts.</p>  
          </div>  
        </div>  

      </div>  
    </section>  
  );  
};  

export default Certificates;  
