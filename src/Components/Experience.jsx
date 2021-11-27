import React from "react";
import "../Styles/Experience.css";
import ExpBox from "./ExpBox";
import "../Styles/Projects.css";
const Experience = () => {
  return (
    <>
      <div
        className="service component__space"
        style={{ backgroundColor: "#2B2B2B" }}
      >
        <div className="heading">
          <h1 className="heading">Work Experiences</h1>
          <p className="heading p__color">
            Here is a collections of my work experiences what I've done yet
          </p>
          <p className="heading p__color">
            but majority have suffered alternation
          </p>
        </div>

        <div className="container">
          <div className="row">
            <ExpBox
              Title={"Clever Deals | Web Developer Intern"}
              para={
                "Implemented Websites, Web Application landing page from concept through deployment & assesed UX/UI Design for technical feasibility collaborate with product team members to implement new feature developments"
              }
            />
            <ExpBox
              Title={"IJRAR | Research Intern"}
              para={
                "Working closely with a professor learned new scientific techniques attended virtual labs meetings and worked on different types of research paper while going through lots of blogs and articles. This was an unique experience in my early years of college I'll be joining them in future"
              }
            />
            <ExpBox
              Title={"Pepcoding | Student Trainee"}
              para={
                "Working on my dsa and development skills till now solved around 300+ questions on NADOS & Leetcode also participated in multiple hackathons where we've been assigned a project to complete in next 24/48 hours. I'm currently enrolled in this training program"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
