import React from "react";
import { NavBar, scrollToView } from "./NavBar";

class Landing extends React.Component {
  render() {
    return (
      <div id="home" className="homepageWrapper backgroundFix">
        <NavBar />
        <div className="jumbotron">
          <div>
            <h3 className="hello emphasise">Hello !</h3>
            <p className="f-2">
              I'm <span className="name emphasise">Lucius Emmanuel.</span>
            </p>
            <p>A Decorated Frontend Developer. I Bring Your Ideas To Life.</p>
          </div>
          <div className="centered">
            <div>
              <button
                onClick={() => scrollToView("portfolio")}
                style={{ minWidth: "110px" }}
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToView("contact")}
                style={{ minWidth: "110px" }}
              >
                HIRE ME
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
