import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpeg";
import Laptop from "../assets/laptop.jpg";
import Keyboard from "../assets/keyboard.jpg";
import Ducks from "../assets/ducks.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="About-Me">
      <h2>About Me</h2>
      <div className="about">
        <div className="about-container">
          <img src={avatar} className="avatar" alt=""></img>
          <div className="About-Me">
            <p>
              I am a detailed oriented <b>Front-End Developer</b> who previously
              served as a medical billing specialist in the healthcare industry.
              Whether de-bugging code or responding to complex insurance issues,
              I take a methodical, process-oriented approach in breaking down
              obscure problems into comprehensible solutions. I seek the
              opportunity to join a collaborative organization that places
              strong emphasis on mentorship so I can grow as both a developer
              and a professional.
            </p>
            <button>
              <Link to="/projects">Projects</Link>
            </button>
          </div>
        </div>
        <div className="about-img">
          <img src={Laptop} alt="" />
          <img src={Ducks} alt="" />
          <img src={Keyboard} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
