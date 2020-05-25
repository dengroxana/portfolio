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
        <div className="row">
          <div className="p1">
            <img src={p1} alt=""></img>

            <p>
              WYD App<span className="divider"></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              nostrum quisquam ullam eveniet id accusamus eligendi illo error
              earum ab esse delectus, quaerat minima, voluptate, dolorum tempore
              ducimus aliquid tempora?
            </p>

            <br />
            <button className="button-link">
              <a
                href="http://wydapp.surge.sh/"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </button>
            <button className="button-link">
              <a
                href="https://github.com/dengroxana/wyd-app"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div className="p2">
            <img src={p2} alt=""></img>

            <p>
              Breaking News<span className="divider"></span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              possimus quos ea hic! Quae, tempore nostrum vero voluptates
              accusamus dolores, est porro voluptatibus, atque eveniet
              quibusdam? Facere dignissimos consequatur ipsa!
            </p>

            <br />
            <button className="button-link">
              <a
                href="https://breaking-news.netlify.app/"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </button>
            <button className="button-link">
              <a
                href="https://github.com/dengroxana/breaking-news"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="p3">
            <img src={p3} alt=""></img>

            <p>
              Sharky's NJ<span className="divider"></span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              ipsa sint dolorum, illum magnam sapiente cupiditate. A velit unde
              dolorum sunt laborum perferendis ex optio inventore
              necessitatibus, rerum eius delectus!
            </p>

            <br />
            <button className="button-link">
              <a
                href="https://sharkysnj.netlify.app/"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </button>
            <button className="button-link">
              <a
                href="https://github.com/dengroxana/sharkys-wings-nj"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
          <div class="p4">
            <img src={p4} alt=""></img>

            <p>
              Hangry Helper<span className="divider"></span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              eaque consectetur architecto ut, quidem amet aut in accusantium
              doloremque, ex et delectus nam laboriosam ullam nisi nobis.
              Nostrum, exercitationem rerum!
            </p>

            <br />
            <button className="button-link">
              <a
                href="https://hangry-helper.netlify.app/"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </button>
            <button className="button-link">
              <a
                href="https://github.com/dengroxana/hangry-helper"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
