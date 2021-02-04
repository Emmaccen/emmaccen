import React from "react";
import { scrollToView } from "./NavBar";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerWrapper">
        <div>
          <div className="footerContents">
            <div className="footerLinks">
              <ul className="footerTexts">
                <li onClick={() => scrollToView("about")}>About</li>
                <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
                <li onClick={() => scrollToView("resume")}>Resume</li>
              </ul>
            </div>
            <div className="footerSocials">
              <a href="https://twitter.com/Emmaccen">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-oriola-a31168185/">
                <span className="icon icon-linkedin"></span>
              </a>
              <a href="https://www.instagram.com/emmaccen/">
                <span className="icon icon-instagram"></span>
              </a>
              <a href="https://github.com/Emmaccen">
                <span className="icon icon-github2"></span>
              </a>
              <a href="https://stackoverflow.com/users/11299893/emmaccen">
                <span className="icon icon-stackoverflow"></span>
              </a>
              <a href="mailto:lucius.emmanuel.e@gmail.com">
                <span className="icon icon-mail4"></span>
              </a>
            </div>
            <div className="footerTexts">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
