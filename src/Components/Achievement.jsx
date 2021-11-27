import React, { useState } from "react";
import "../Styles/Achievement.css";
import AchBox from "./AchBox";
import ach1 from "../img/ach1.png";
import ach2 from "../img/ach2.jpg";
import ach3 from "../img/ach3.jpg";
import ach4 from "../img/ach4.jpg";
import ach5 from "../img/ach5.jpg";
import ach6 from "../img/ach6.jpg";
const Achievement = () => {
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
      <div
        className="blog component__space"
        id="Blog"
        style={{ backgroundColor: "#2B2B2B" }}
      >
        <div className="heading">
          <h1 className="heading">Achievements</h1>
          <p className="heading p__color">
            Here are some achievements where I put myself in front,
          </p>
          <p className="heading p__color">
            explored a lot & looking forward to continue my journey in
            competetive programming soon.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <AchBox
              img={ach1}
              title={"Codechef"}
              desc={
                "3 star coder at codechef July-2021 | looking forward to continue with competetive programming soon"
              }
              hlink={"https://www.codechef.com/users/abhi_pro_123"}
            />
            <AchBox
              img={ach2}
              title={"GFG 11 Week Workshop"}
              desc={
                "secured under top 27 rank twice in a contest held by gfg in it's 11 week workshop of dsa"
              }
              hlink={
                "https://www.linkedin.com/posts/abhishek-2020_11-weeks-workshop-on-data-structures-and-activity-6803874273380327424-AXhA"
              }
            />
            <AchBox
              img={ach3}
              title={"Pepcoding Hackathon"}
              desc={
                "Won a virtual hackathon held by gfg for the LRC Drive competed with 400+ students and submissions"
              }
              hlink={
                "https://docs.google.com/spreadsheets/d/1eauDOuC-4oLOTXT4g_7JSYkWJedh-V0dLLMgWX4_Rs0/edit#gid=206169870"
              }
            />
            {change ? (
              <>
                <AchBox
                  img={ach4}
                  title={"Leetcode"}
                  desc={
                    "I've been solving dsa problems on leetcode since more than 4 months and till now I've solved 300+ quality questions"
                  }
                  hlink={"https://leetcode.com/astareadytocode/"}
                />
                <AchBox
                  img={ach5}
                  title={"GFG | Portal Rankings"}
                  desc={
                    "My rankings on gfg portal increased exponetially I secured under top-5 in my college and top-50 in my university(GGSIPU) rankings."
                  }
                  hlink={"https://leetcode.com/astareadytocode/"}
                />
                <AchBox
                  img={ach6}
                  title={"Sports zone | HMRITM Fest"}
                  desc={
                    "Secured the 1st position in the sports zone a platform organized during HMRITM fest & Won 700 Rs in cash"
                  }
                  hlink={""}
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
export default Achievement;
