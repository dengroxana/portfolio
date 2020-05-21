import React from "react";
import resume from "../rdeng-resume-v2.pdf"
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <footer>
       
        <a href="https://github.com/dengroxana" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="divider">|</span>
        <a href="https://www.linkedin.com/in/roxanadeng/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a><span className="divider">|</span>
        <Link to={resume} target="_blank">Resume</Link>

      </footer>
    </div>
  );
}

export default Footer;
