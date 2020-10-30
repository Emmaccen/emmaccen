import React from "react";
import $ from "jquery";

/*Smooth scroll to a view when a nav link is selected and is on that same page*/
function scrollToView(element) {
  $("#openNav").fadeOut();
  document.getElementById(element).scrollIntoView({
    behavior: "smooth",
  });
}

class NavBar extends React.Component {
  openNav() {
    $("#openNav").fadeToggle();
  }

  render() {
    return (
      <nav className="navWrapper">
        <div className="menuWrapper">
          <div className="logo">
            <img
              onClick={() => window.location.reload(true)}
              src="/images/logo.svg"
              alt="logo"
            ></img>
            <span
              onClick={() => this.openNav()}
              title="Open Menu"
              className="icon icon-list openNav"
            ></span>
          </div>
          <div className="menuLinks">
            <ul id="openNav">
              <li onClick={() => scrollToView("home")}>Home</li>
              <li onClick={() => scrollToView("about")}>About</li>
              <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
              <li onClick={() => scrollToView("services")}>Services</li>
              <li onClick={() => scrollToView("resume")}>Resume</li>
              <li onClick={() => scrollToView("blogs")}>Blogs</li>
              <li onClick={() => scrollToView("contact")}>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export { NavBar };
export { scrollToView };
