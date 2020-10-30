import React from "react";
import Fade from "react-reveal/Fade";

class Services extends React.Component {
  render() {
    return (
      <div id="services" className="backgroundFix centered servicesContainer">
        <div className="servicesContent">
          <Fade bottom>
            <header className="centered">
              <h1>
                My <span className="accent">Services</span>
                <span className="primary">.</span>
              </h1>
            </header>
          </Fade>
          <div className="services">
            <Fade bottom>
              <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-network"></span>
                  <h1 className="serviceTitle">Web Design</h1>
                  <p>
                    Development of fully responsive and interactive web pages
                    using industry-standard tools
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-round-brush"></span>
                  <h1 className="serviceTitle">UI | UX</h1>
                  <p>User Interface Designs in Figma or AdobeXD.</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-database"></span>
                  <h1 className="serviceTitle">Database</h1>
                  <p>
                    Creation and management of Firebase or MongoDB, Express.Js
                    and Node databases
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
