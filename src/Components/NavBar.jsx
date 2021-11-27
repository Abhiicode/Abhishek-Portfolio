import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const NavBar = () => {
  return (
    <div className="navigation pxy__30">
      <ul className="navbar d__flex">
        <li className="nav__items mx__15">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__items pmx__15">
          <Link to="about">About</Link>
        </li>
        <li className="nav__items mx__15">
          <Link to="exp">Experience</Link>
        </li>
        <li className="nav__items mx__15">
          <Link to="projects">Projects</Link>
        </li>
        <li className="nav__items px__15">
          <Link to="achievements">Achievements</Link>
        </li>
        <li className="nav__items px__15" id="contu">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
