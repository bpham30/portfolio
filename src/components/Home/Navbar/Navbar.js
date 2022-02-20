import React from "react";
import './Navbar.css';
import resume from '../../../assets/Home/resume.pdf'
import $ from 'jquery'

const Navbar = () =>{


    const handleLink = () => {
      $(".navbar-collapse").removeClass("show")
    }

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="#about">Bang Pham</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="#about" onClick={handleLink}>About Me <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#project" onClick={handleLink}>Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#gallery" onClick={handleLink}>Artwork</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact" onClick={handleLink}>Contact</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
