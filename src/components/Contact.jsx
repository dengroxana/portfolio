import React from "react";
import "./Contact.css"
function Contact() {
  return (
    <div id="Contact">
      <h2>Contact</h2>
      <div className="contact">
        <form>
          <div className="bar">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            
            
          />
          <br/>
          <p>Email:</p>
          <input
            type="text"
            name="email"
         
          />
          <br/>
          <p>Message:</p>
          <input
            type="text"
            name="message"
           
          />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
