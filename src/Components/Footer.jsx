import React from "react";
import footerImg from "../img/logo (1).png";
const Footer = () => {
  const d = new Date();
  const currYear = d.getFullYear();
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img
        src={footerImg}
        alt=""
        className="footer__img pointer"
        style={{ width: "200px", height: "150px" }}
      />
      
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "18px", opacity: "0.75" }}
      >
        Copyright © {currYear} Abhishek Jha. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
