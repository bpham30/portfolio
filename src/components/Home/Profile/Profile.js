import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile () {
  return (
    <div id='about' className="profile-container">
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
            <a target="_blank" rel ="noopener noreferrer" href="https://www.linkedin.com/in/bpham15/">
              <button className="btn primary-btn"> Hire Me </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href ="https://drive.google.com/file/d/1-n55pOIG4Vuwkww4sYnPDfEYRHZ9uFfj/view?usp=sharing">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
      </div>
    </div>
    </div>
  );
}
