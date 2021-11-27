import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";
import Project1 from "D:/personalProjects/Portfolio/src/img/portfolio-4.jpg";
import Project2 from "D:/personalProjects/Portfolio/src/img/portfolio-2.jpg";
import Project3 from "D:/personalProjects/Portfolio/src/img/portfolio-3.jpg";
import Project4 from "D:/personalProjects/Portfolio/src/img/portfolio-5.jpg";
import Project5 from "D:/personalProjects/Portfolio/src/img/portfolio-7.jpg";
import Project6 from "D:/personalProjects/Portfolio/src/img/portfolio-8.jpg";
import Project7 from "D:/personalProjects/Portfolio/src/img/portfolio-a.jpeg";
import Project8 from "D:/personalProjects/Portfolio/src/img/portfolio-b.jpg";
import Project9 from "D:/personalProjects/Portfolio/src/img/portfolio-c.jpeg";
import ProjectBox from "./ProjectBox";
const Projects = () => {
  const [change, setChange] = useState(false);
  const [btn, setBtn] = useState("View More");
  const handleClick = () => {
    setChange(!change);
    if (change) {
      setBtn("View More");
    } else if (!change) {
      setBtn("View Less");
    }
  };

  return (
    <>
      <div className="project component__space" id="Portfolio">
        <div className="heading">
          <h1 className="heading">My Latest Project</h1>
          <p className="heading p__color">
            There are lot of other projects but these are my features projects
          </p>
          <p className="heading p__color">make sure to check my github repo.</p>
        </div>
        <div className="container">
          <div className="row">
            <ProjectBox
              img={Project1}
              title={"Travel Companion Application"}
              desc={
                "Build and Deploy an advanced TravelCompanion Application using Google Maps With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions"
              }
              githubRepo={"https://github.com/Abhiicode/TravelApp"}
              deployLink={"https://travel4lyf.netlify.app/"}
            />
            <ProjectBox
              img={Project2}
              title={"Virtual Operating System"}
              desc={
                "A basic User interface of virtual operating application which consist plenty of apps. It is designed to build applications that run on desktop and mobile devices with a single codebase"
              }
              githubRepo={"https://github.com/Abhiicode/VirtualOS"}
              deployLink={"https://github.com/Abhiicode/VirtualOS"}
            />
            <ProjectBox
              img={Project3}
              title={"Flexo Video Chat Application"}
              desc={
                "This is a video calling application where users can call other user and will also have the capabiltiy to mute their mic and audio."
              }
              githubRepo={""}
              deployLink={""}
            />
            {change ? (
              <>
                <ProjectBox
                  img={Project4}
                  title={"City Hospital Chatter App"}
                  desc={
                    "This is an application where a group of doctors can make their private and secured room and share their thoughts,images & much more. I used stream chat to create the chat user interface and react for the frontend part"
                  }
                  deployLink={"https://city-hospital-chatter.netlify.app/"}
                  githubRepo={
                    "https://github.com/Abhiicode/City-Hospital-Chatter"
                  }
                />
                <ProjectBox
                  img={Project5}
                  title={"Trending Movies Application"}
                  desc={
                    "It’s a productive app where you can check the trending movies list which are coming from the api we are using in our app with some basic functionality like add movie in your favourite list"
                  }
                  githubRepo={
                    "https://github.com/Abhiicode/Trending-Movie-Application-React"
                  }
                  deployLink={"https://trendingmov.netlify.app/"}
                />
                <ProjectBox
                  img={Project6}
                  title={"Pizza Delivery React App"}
                  desc={
                    "It's a delivery app where user can place their orders for yummy pizzas! and keep an track of what they ordered yet. Technologies I used in this project is react and tailwind css to store the data I used local storage with form validation using REDUX"
                  }
                  githubRepo={"https://github.com/Abhiicode/Pizza-Delivery-App"}
                  deployLink={"https://bestdelhipizza.netlify.app/"}
                />
                <ProjectBox
                  img={Project7}
                  title={"Xiaomi Website Clone"}
                  desc={
                    "This is a learning project where I used webscrapping to collect the data and making the API on my own after collecting the data in api. I created a simillar looking website using that api and considering all into single page application the UI looks good I used React and local storage to save the data from the users"
                  }
                  githubRepo={"https://github.com/Abhiicode/Xiamoi-Clone"}
                  deployLink={"https://xiamoiclone.netlify.app/"}
                />
                <ProjectBox
                  img={Project8}
                  title={"Crypto Currency Marketlist"}
                  desc={
                    "This is a updated list of current price list of different cryptos in market right now, I fetched the data from the API using axios and converted that list into single page application using react with better desiging and interface user can easily checout the current data in terms of their selected money type(Country Wise)"
                  }
                  githubRepo={"https://github.com/Abhiicode/Crypto-Price-List"}
                  deployLink={"https://cryptooprice.netlify.app/"}
                />

                <ProjectBox
                  img={Project9}
                  title={"Notes Tracker"}
                  desc={
                    "This is kind of personal project where I can keep the daily tasks I've to do and what task need what kind of resources, tech stack used - React & Bootstrap"
                  }
                  githubRepo={"https://notetrackerapplication.netlify.app/"}
                  deployLink={"https://github.com/Abhiicode/NoteTracker"}
                />
              </>
            ) : null}

            <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
              <button className="view__more pointer btn" onClick={handleClick}>
                {btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
