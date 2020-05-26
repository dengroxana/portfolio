import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <Link to="/">Home</Link>
        <span className="divider"></span>
        <Link to="/about-me">About Me</Link>
        <span className="divider"></span>
        <Link to="/projects">Projects</Link>
        <span className="divider"></span>
        {/* <Link to="/skills">Skills</Link>
        <span className="divider"></span> */}
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
}

export default Footer;
