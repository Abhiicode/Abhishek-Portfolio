import React from "react";
import Achievement from "./Achievement";
import Contact from "./Contact";
import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Footer from "./Footer";
import NavBar from "./NavBar";

const WholePage = () => {
  return (
    <div className="home">
      <div className="home__bg">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default WholePage;
