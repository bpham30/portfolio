import React, {useRef} from "react";
import './Navbar.css';

const Navbar = () =>{
    const Link = useRef(null);
    const executeScroll = (letter) =>
    letter.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="navbar-container">
      <div className="navbar-parent">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="navbar-brand" href="#profileDiv" src="./logo.png"/> 
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <a className="nav-link" href="#profileDiv">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#homeDiv">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.google.com/document/d/1YGUCKekvJDnlv5bO-MQFmHsnYs8QNeUi/edit?usp=sharing&ouid=103085667741888858416&rtpof=true&sd=true">
                  RESUME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
