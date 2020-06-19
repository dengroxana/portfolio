import React from "react";
import resume from "../assets/rdeng-resume-v2.pdf";
import { Link } from "react-router-dom";
import "./Contact.css";
import Coffee from "../assets/coffee.jpg";
import Beans from "../assets/beans.jpg";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div id="Contact">
        <div className="email-form">
          <form
            action="mailto:roxanadeng@gmail.com"
            method="post"
            onSubmit={this.handleSubmit}
            encType="text/plain"
          >
            <label>
              <p>Name</p>
            </label>
            <span className="down"></span>
            <br />
            <br />
            <input
              type="text"
              name="Name"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>{" "}
            <br />
            <br />
            <label>
              <p>Email</p>
            </label>
            <span className="down"></span>
            <br />
            <br />
            <input type="email" name="Email"></input>
            <br />
            <br />
            <label>
              <p>Message</p>
            </label>
            <span className="down"></span>
            <br />
            <br />
            <textarea name="Message" rows="10" cols="30"></textarea>
            <br />
            <button className="submit">Send</button>
          </form>
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
        <div className="contact-img">
          <img src={Coffee} alt="" />
          <img src={Beans} alt="" />
        </div>
      </div>
    );
  }
}
export default Contact;
