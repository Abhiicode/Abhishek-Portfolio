import React from "react";
import "../Styles/About.css";
import aboutImg from "../img/myimg1.jpg";
import resume from "../img/resume.pdf";
const About = () => {
  //Up To top button
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <>
      <div
        className="about component__space"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={aboutImg} alt="aboutImg" className="about__img" />
            </div>

            <div className="col__2">
              <h1 className="about__heading">About Me</h1>
              <div className="about__meta">
                <p className="about__text p__color">
                  I am a final year electrical and communication engineering
                  student. I started coding after my second year and this was my
                  first time when I was doing such things & after that I have
                  always been a passionate about Programming and have taken
                  forward this passion into the field of Problem Solving.
                </p>
                <p className="about__text p__color">
                  A MERN Stack developer who can build what you can think of
                  that's what I do in real life well for now I'm enjoying doing
                  programming and looking forward to grab Internships/Full Time
                  opportunities. Well I love interacting new people try to
                  figure out their problems or mistakes and come up with an
                  efficient algorithm/solution to solve that apart
                </p>
                <p className="about__text p__color">
                  I always look to explore new fields and work hard to excel in
                  them. I am open to all kinds of internship opportunities as I
                  believe that experience is the best way to learn.
                </p>
                <div className="about__button d__flex align__items__center">
                  <a href={resume} download="AbhishekResume" target="_blank">
                    <button className="about btn pointer">Resume</button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-2020/"
                    target="_blank"
                  >
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Button */}
        <div className="up__to__top__btn">
          <a href="#" className="bottom__to__top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-up white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
