import React from "react";
import "./Projects.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

function Projects() {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="p1">
          <img src={p1} alt=""></img>
          <div class="overlay">
            <div class="text">WYD App</div>
          </div><br/>
            <a href="http://wydapp.surge.sh/" alt="" target="_blank" rel="noopener noreferrer">
              Site
            </a><span className="divider"></span><a href="https://github.com/dengroxana/wyd-app" alt="" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
        </div>
        <div className="p2">
          <img src={p2} alt=""></img>
          <div class="overlay">
            <div class="text">Breaking News</div>
          </div>
          <br/>
          <a href="https://breaking-news.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">
              Site
            </a><span className="divider"></span><a href="https://github.com/dengroxana/breaking-news" alt="" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
        </div>
        <div className="p3">
          <img src={p3} alt=""></img>
          <div class="overlay">
            <div class="text">Sharky's NJ</div>
          </div>
          <br/>
          <a href="https://sharkysnj.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">
              Site
            </a><span className="divider"></span><a href="https://github.com/dengroxana/sharkys-wings-nj" alt="" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
        </div>
        <div class="p4">
          <img src={p4} alt=""></img>
          <div class="overlay">
            <div class="text">Hangry Helper</div>
          </div>
          <br/>
          <a href="https://hangry-helper.netlify.app/" alt="" target="_blank" rel="noopener noreferrer">
              Site
            </a><span className="divider"></span><a href="https://github.com/dengroxana/hangry-helper" alt="" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

