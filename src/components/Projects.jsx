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
              <span className="title">WYD App</span>
              <span className="divider"></span>
              Inspired by real-life events, this web app randomly generates
              activities for you to do. Users are able to choose from nine
              different activity categories. Once submitted, a corresponding gif
              is also generated using the category keyword. Built using vanilla
              JavaScript, CSS, the <a href="https://www.boredapi.com/">
                Bored
              </a>{" "}
              and <a href="https://developers.giphy.com/">GIPHY</a> API.
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
              <span className="title">Breaking News</span>
              <span className="divider"></span>
              This web app shows the top trending news articles in the US.
              There's also an option to search for specific articles using
              keywords. Above the search bar displays the current weather in
              NYC. Clicking on a single article will redirect users to a link
              for the source. Built using React, CSS, the{" "}
              <a href="https://openweathermap.org/">OpenWeather</a> and{" "}
              <a href="https://newsapi.org/">News</a> API.
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
              <span className="title">Sharky's NJ</span>
              <span className="divider"></span>
              For this project, my developer team and I had the opportunity to
              collaborate with a team of UX/UI designers to remodel an existing{" "}
              <a href="https://www.sharkyswingsnj.com/east/indexs.php">
                website
              </a>
              . Built using React and CSS.
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
              <span className="title">Hangry Helper</span>
              <span className="divider"></span>
              This project features full CRUD and authentication. Users can
              create accounts and edit lists of their favorite restaurants.
              Refer back to your list when you need help deciding what to eat!
              Built using React and Ruby on Rails.
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
