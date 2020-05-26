import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Projects from "./Projects";
import Landing from "./Landing";
import Contact from "./Contact";
import Skills from "./Skills";

function Main() {
  return (
    <div>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/about-me" exact>
        <AboutMe />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
      {/* <Route path="/skills" exact>
        <Skills />
      </Route> */}
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default Main;
