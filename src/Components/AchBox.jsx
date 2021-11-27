import React from "react";
import "../Styles/Achievement.css";
const AchBox = (props) => {
  return (
    <div className="col__3">
      <div className="project__box pointer relative">
        <div className="project__box__img pointer relative">
          <div className="project__img__box">
            <img src={props.img} alt="" className="project__img" />
          </div>
          <div className="mask__effect"></div>
        </div>
        <div className="Blog__meta absolute">
          <h5 className="project__text">{props.title}</h5>
          <h4 className="project__text">{props.desc}</h4>
          <a href={props.hlink} target={"_blank"} className="blog project__btn btn">
            click to get the profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default AchBox;
