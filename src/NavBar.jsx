import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/ja" className="nav-link">
        <img 
          src="/java.png" 
          alt="Java FSD Icon" 
          style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
        />
        Java FSD
      </Link>
      <Link to="/js" className="nav-link">
        <img 
          src="/jsmern.png" 
          alt="JS MERN FSD Icon" 
          style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
        />
        JS MERN FSD
      </Link>
      <Link to="/" className="nav-link">
        <img 
          src="/python.png" 
          alt="Python FSD Icon" 
          style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
        />
        Python FSD
      </Link>
      <Link to="/ai" className="nav-link">
        <img 
          src="/ai.png" 
          alt="Python AI Icon" 
          style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
        />
        Python AI
      </Link>
      <Link to="/en" className="nav-link">
        <img 
          src="/enquiry.png" 
          alt="Enquiry Icon" 
          style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
        />
        Enquiry
      </Link>
    </nav>
  );
}

export default NavBar;
