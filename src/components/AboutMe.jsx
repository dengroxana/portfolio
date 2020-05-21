import React from "react";
import avatar from "../avatar.jpeg"
import "./AboutMe.css"

function AboutMe() {
  return (
    <div id="About-Me">
      <h2>About Me</h2>
      <div className="about">
      <div className="About-Me">
      <p>
        I am a detailed oriented Front-End Developer who previously served as a
        medical billing specialist in the healthcare industry. Whether
        de-bugging code or responding to complex insurance issues, I take a
        methodical, process-oriented approach in breaking down obscure problems
        into comprehensible solutions. I seek the opportunity to join a
        collaborative organization that places strong emphasis on mentorship so
        I can grow as both a developer and a professional.
      </p>
      </div>
      <img src={avatar} className="avatar" alt=""></img>
      </div>
    </div>
  );
}

export default AboutMe;
