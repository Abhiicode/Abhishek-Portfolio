import React from "react";
import contactImg from "../img/myimg2.jpg";
import "../Styles/Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact component__space" id="Contact">
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Hire Me.</h1>
                <p className="hire__text white">
                  I am available for Internship / Full Time SDE opportunities.
                  Connect with me via phone:
                </p>
                <p className="hire__text white">
                  <strong>+91 7703862552</strong> or email{" "}
                  <strong>abhiabhii2000@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <form method="post" action="mailto:abhiabhii2000@gmail.com">
                  <input
                    type="text"
                    className="contact name"
                    placeholder="Your name *"
                  />
                  <input
                    type="text"
                    className="contact email"
                    placeholder="Your Email *"
                  />
                  <input
                    type="text"
                    className="contact subject"
                    placeholder="Write a Subject"
                  />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write Your message"
                  ></textarea>
                  <button className="btn contact pointer" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col__2">
            <img src={contactImg} alt="" className="contact__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
