import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Projects from "./Projects";
import Landing from "./Landing";

function Main() {
  return (
    <div>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/about-me" exact>
        <AboutMe />
        <Projects />
      </Route>

      <Footer />
    </div>
  );
}

export default Main;
