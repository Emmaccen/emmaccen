import React from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Blogs from "./Blogs";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import { Notification } from "./Notification";

class FullPage extends React.Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Blogs />
        <Resume />
        <Contact />
        <Footer />
        <Notification />
      </div>
    );
  }
}

export default FullPage;
