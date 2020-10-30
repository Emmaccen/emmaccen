import React from "react";
import projectsData from "../data/projects";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function Projects(props) {
  const icon = props.techIcon ? (
    <span className={`${props.techIcon}`}></span>
  ) : (
    <img src={props.techIconImg} alt="figma"></img>
  );

  return (
    <Fade bottom>
      <div className="projectCover">
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className="backgroundFix project"
        ></div>
        <div className="overlay">
          <a
            title={props.linkHover}
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={`primary ${props.linkIcon}`}></span>
          </a>
          <h2 className="accent">{props.name}</h2>
          <p className="portfolioDesc">{props.desc}</p>
          <div className="centered">
            <button>
              <a rel="noopener noreferrer" target="_blank" href={props.url}>
                Explore
              </a>
            </button>
          </div>
          <div className="projectType flex-justify-sb">
            <p>
              {icon}
              {props.technology}
            </p>
            <p>
              <span className={`${props.typeIcon}`}></span>
              {props.type}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      current: [],
    };
  }
  componentWillMount() {
    this.setState({
      projectsData,
      current: projectsData,
    });
  }
  filter(e, tab) {
    const activeTab = () => {
      const tab = document.getElementsByClassName("portfolioTab");
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("currentTab");
      }
      e.target.classList.add("currentTab");
    };
    if (tab === "all") {
      this.setState({
        current: projectsData,
      });
      activeTab();
    } else {
      const current = this.state.projectsData.filter((items) => {
        // console.log(items.type === tab)
        return items.type === tab;
      });
      this.setState({
        current,
      });
      activeTab();
    }
  }

  render() {
    const works = this.state.current.map((project) => {
      return (
        <Projects
          name={project.name}
          image={project.image}
          desc={project.desc}
          url={project.url}
          linkHover={project.linkHover}
          link={project.link}
          linkIcon={project.linkIcon}
          type={project.type}
          typeIcon={project.typeIcon}
          techIcon={project.techIcon}
          technology={project.technology}
          techIconImg={project.techIconImg}
          key={project.name}
        />
      );
    });
    return (
      <div id="portfolio" className="portfolioWrapper">
        <div className="centered">
          <Slide left>
            <header>
              <h1>
                My <span className="accent">Portfolio</span>
                <span className="primary">.</span>
              </h1>
              <p className="descText">
                Explore some of my projects, built with love and passion. Some
                stable and maintained, others still in developement stage.
              </p>
            </header>
          </Slide>
        </div>
        <div className="portfolioTabs">
          <span
            onClick={(e) => this.filter(e, "all")}
            className="currentTab portfolioTab"
          >
            All
          </span>
          <span onClick={(e) => this.filter(e, "Web")} className="portfolioTab">
            Web
          </span>
          <span
            onClick={(e) => this.filter(e, "UI | UX")}
            className="portfolioTab"
          >
            UI/UX
          </span>
          <span
            onClick={(e) => this.filter(e, "Mobile App")}
            className="portfolioTab"
          >
            Mobile
          </span>
        </div>
        <div className="container projects">{works}</div>
      </div>
    );
  }
}

export default Portfolio;
