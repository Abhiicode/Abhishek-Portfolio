import React from "react";
import "../Styles/Projects.css";
const ProjectBox = (props) => {
  return (
    <div className="col__3">
      <div className="project__box pointer relative">
        <div className="project__box__img pointer relative">
          <div className="project__img__box">
            <img src={props.img} alt="projectImage" className="project__img" />
          </div>
          <div className="mask__effect"></div>
        </div>
        <div className="project__meta absolute">
          <h2 className="project__text ProjectTitle">{props.title}</h2>
          <h6 className="project__text ProjectDesc">{props.desc}</h6>
          <a href={props.deployLink} className="project__btn" target="_blank">
            Link
          </a>
          <br />
          <a href={props.githubRepo} className="project__btn2" target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
