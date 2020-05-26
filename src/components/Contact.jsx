import React from "react";
import resume from "../assets/rdeng-resume-v2.pdf";
import { Link } from "react-router-dom";
import "./Contact.css";
import Coffee from "../assets/coffee.jpg";
import Beans from "../assets/beans.jpg";

function Contact() {
  return (
    <div id="Contact">
      <div className="contact-img">
        <img src={Coffee} alt="" />
        <img src={Beans} alt="" />
      </div>
      <div className="contact-container">
        <h2>Contact</h2>
        <button>
          <Link to={resume} target="_blank">
            Resume
          </Link>
        </button>
        <br />
        <button>
          <a href="mailto:roxanadeng@gmail.com">Email</a>
        </button>
          <br />
        <button>
          <a
            href="https://github.com/dengroxana"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </button>
        <br />
        <button>
          <a
            href="https://www.linkedin.com/in/roxanadeng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
