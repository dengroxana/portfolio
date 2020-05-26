import React from "react";
import { Link } from "react-router-dom";
import Code from "../assets/code.jpg";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="hello-holder">
        <span className="hello">Hello, my name is </span>
        <h1 className="name">
          Roxana<span className="blink">|</span>
        </h1>
        <button>
          <Link to="/about-me">About Me</Link>
        </button>
      </div>
      <div className="img-holder">
        <img src={Code} alt="" className="landing-img" />
      </div>
    </div>
  );
}
export default Landing;
