import React from "react";

import './Header.css'


function Header() {
  return (
    <div className="header">
        <div className="bar">
            <div className="red">

            </div>
            <div className="yellow">

            </div>
            <div className="green">

            </div>
        </div>
        <h1>Roxana Deng<span className="blink">|</span></h1>
      <nav>
        <a href="#About-Me">About Me</a>
        <span className="divider">|</span>
        <a href="#Projects">Projects</a>
        <span className="divider">|</span>
        <a href="#Contact">Contact</a>
      
        
      </nav>
    </div>
  );
}

export default Header;
