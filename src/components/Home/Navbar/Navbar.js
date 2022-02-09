import React, {useRef} from "react";
import './Navbar.css';

const Navbar = () =>{
    const Link = useRef(null);
    const executeScroll = (letter) =>
    letter.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <nav className="navbar navbar-dark bg-transparent fixed-top">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">BANG PHAM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BANG PHAM</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1-n55pOIG4Vuwkww4sYnPDfEYRHZ9uFfj/view?usp=sharing">RESUME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
