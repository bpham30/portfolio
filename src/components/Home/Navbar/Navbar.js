import React, {useRef} from "react";
import './Navbar.css';

const Navbar = () =>{
    const Link = useRef(null);
    const executeScroll = (letter) =>
    letter.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <nav class="navbar navbar-dark bg-transparent fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">BANG PHAM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BANG PHAM</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">ABOUT ME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">RESUME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
