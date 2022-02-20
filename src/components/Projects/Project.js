import React, { useEffect, useState } from "react";
import "./Project.css";
import Cards from "./Cards/Cards";
import handImg from "../../assets/Cards/todo.png";
import calcImg from "../../assets/Cards/calc.png";
import reactImg from "../../assets/Cards/react.png";
import vueImg from "../../assets/Cards/vue.png";
import Overview from "./Cards/Overview";
import webImg from "../../assets/Cards/webImg.png";
import Gallery from "./Gallery/Gallery";

export default function Project() {
  return (
    <div id="project" className="projects-container">
      <div className="projects-title">
        <h1>CODING PROJECTS</h1>
      </div>

      <div className="project-cards">
        <div className="row">
          <div className="col-md-6 card-outer">
            <Cards
              className="todo-card-parent"
              img={handImg}
              title="to-do list"
              icon={vueImg}
              desc={
                "Simple to-do list application where users can input and complete their tasks. Coded with Vue.js, HTML, CSS, and JavaScript"
              }
              id={""}
            />
          </div>
          <div className="col-md-6 card-outer">
            <Cards
              className="calc-card-parent"
              img={calcImg}
              title="calculator"
              icon={vueImg}
              desc={
                "Simple calculator app where users can compute basic math operations. Coded with Vue.js, HTML, CSS, and JavaScript"
              }
              id={"calc-overview"}
              openid={"calc-open"}
              btnid={"overview-btn"}
            />
          </div>
          <div className="col-md-6 card-outer">
            <Cards
              className="web-card-parent"
              img={webImg}
              title="responsive portfolio"
              icon={reactImg}
              desc={
                "Rsponsive portfolio web application for personal and business use. Coded with React.js, HTML, CSS, and JavaScript"
              }
              id={"web-overview"}
              openid={"web-open"}
              btnid={"overview-btn-web"}
            />
          </div>
        </div>
      </div>
      <div className="gallery-parent">
        <Gallery />
        
      </div>
    </div>
  );
}
