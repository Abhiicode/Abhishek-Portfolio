import React, { useState } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import logo from "./../img/logo.png";
import NavBar from "./NavBar";
const Home = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const homeRef = (node) => {
    if (!node) return;
    console.log(node);
    let img = 2;
    setInterval(() => {
      node.style.backgroundImage = `url("src/img/background${img}.jpg")`;
      if (img == 7) {
        img = 1;
      } else {
        img++;
      }
    }, 6000);
  };
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="home">
        <div className="home__bg" ref={homeRef}>
          <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <NavBar />

            {/* Toggle Menu */}
            <div className="toggle__menu">
              <svg
                onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-justify white pointer"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            {show ? (
              <div className="sideNavbar">
                <ul className="sidebar d__flex">
                  <li className="sideNavbar">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="sideNavbar">
                    <Link to="about">About</Link>
                  </li>
                  <li className="sideNavbar">
                    <Link to="exp">Experience</Link>
                  </li>
                  <li className="sideNavbar">
                    <Link to="projects">Projects</Link>
                  </li>
                  <li className="sideNavbar">
                    <Link to="achievement">Achievements</Link>
                  </li>
                  <li className="sideNavbar">
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="container">
            <div className="home__content">
              <div className="home__meta">
                <h1 className="home__text pz__10">Welcome To My Portfolio</h1>
                <h2 className="home__text pz__10">Hey, I'm Abhishek Jha</h2>
                <h3 className="home__text sweet">MERN DEVELOPER</h3>
                <h4 className="home__text pz__10">ECE Undergrad</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
