import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-pic-wrap">
            <div className="profile-picture">
        </div>
        <div className="profile-details">


          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Bang!</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Comp Sci Major",
                    1000,
                    "Web Developer",
                    1000,
                    "Graphic Designer",
                    1000,
                    "Amazon Seller",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                based in Atlanta, GA.
              </span>
            </span>
          </div>
        </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="https://docs.google.com/document/d/1YGUCKekvJDnlv5bO-MQFmHsnYs8QNeUi/edit?usp=sharing&ouid=103085667741888858416&rtpof=true&sd=true">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
      </div>
    </div>
    </div>
  );
}
