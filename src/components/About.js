import React from "react";
import { scrollToView } from "./NavBar";
import Slide from "react-reveal/Slide";

class About extends React.Component {
  render() {
    return (
      <Slide bottom>
        <div id="about" className="aboutMeWrapper">
          <video
            className="backgroundFix"
            autoPlay
            muted
            loop
            src="/vids/aboutShowcase.mp4"
          ></video>
          <div className="aboutMeDesc">
            <header>
              <h1>
                About <span className="accent">Me</span>
                <span className="primary">.</span>
              </h1>
            </header>
            <div>
              <p className="descText">
                I'm a <span className="primary">Full-Stack</span> developer with
                a strong sense for aesthetics and interaction.
              </p>
              <p className="descText">
                I have{" "}
                <span className="primary">
                  {new Date().getFullYear() - 2018}+ Years
                </span>{" "}
                of experience building <span className="primary">Stable</span>{" "}
                and
                <span className="primary"> Maintainable</span> websites in
                fast-paced, collaborative environments. I'm Proficient at{" "}
                <span className="primary">Creating</span> user interfaces and a{" "}
                <span className="primary">Team Player </span>
                versed in <span className="primary">Scrum</span> &{" "}
                <span className="primary">Agile</span>.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  window.open("./files/emmanuel-lucius.pdf");
                }}
              >
                Download CV
              </button>
              <button onClick={() => scrollToView("resume")}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default About;
