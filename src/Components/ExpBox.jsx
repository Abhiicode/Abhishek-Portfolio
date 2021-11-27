import React from "react";

const ExpBox = (props) => {
  return (
    <div className="col__3">
      <div className="service__box pointer">
        <div className="icon">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
            <line x1="2" y1="20" x2="2" y2="20"></line>
          </svg>
        </div>
        <div className="service__meta">
          <h1 className="service__text">{props.Title}</h1>
          <p className="p service__text p__color">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpBox;
