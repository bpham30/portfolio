import React from "react";
import "./Gallery.css";
import Img1 from "../../../assets/Gallery/images/1.png";
import Img2 from "../../../assets/Gallery/images/2.png";
import Img3 from "../../../assets/Gallery/images/3.png";
import Img4 from "../../../assets/Gallery/images/4.png";
import Img5 from "../../../assets/Gallery/images/5.png";
import Img6 from "../../../assets/Gallery/images/6.png";
import Img7 from "../../../assets/Gallery/images/7.png";
import Img8 from "../../../assets/Gallery/images/8.png";

export default function () {
  return (
    <div  className="gallery-container">
      <div id="gallery" className="gallery-title">
        <h1>ART GALLERY</h1>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-90" src={Img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-90" src={Img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img4} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img5} alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img6} alt="Sixth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img7} alt="Seventh slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img8} alt="Eighth slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="gallery-options">
          <h3> Click the button below to see more of my artwork! 👇</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/drive/folders/1HhH_PsqSUZ57w5gitCxqu_4N9WIqgzL7?usp=sharing"
          >
            <button className="btn highlighted-btn">  View More! </button>
          </a>
        </div>
    </div>
  );
}
