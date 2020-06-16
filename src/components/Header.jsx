import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


function Header() {
  return (
    <div className="header">
       
        
        
      <nav>
        
       
      <Link to="/">Home</Link>
        <span className="divider"></span>
        <Link to="/about-me">About Me</Link>
        <span className="divider"></span>
        <Link to="/projects">Projects</Link>
        <span className="divider"></span>
        {/* <Link to="/skills">Skills</Link>
        <span className="divider"></span> */}
        <Link to="/contact">Contact</Link>
      
        
      </nav>
    </div>
  );
}

export default Header;
