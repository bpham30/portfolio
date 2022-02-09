import React, { useEffect, useState } from 'react';
import "./Project.css"
import Cards from './Cards/Cards'
import handImg from '../../assets/Cards/todo.png'
import calcImg from '../../assets/Cards/calc.png'
import reactImg from "../../assets/Cards/react.png"
import vueImg from "../../assets/Cards/vue.png"
import Overview from './Cards/Overview';


export default function Project() {
  


  return (
      <div id ='projects'className='projects-container'>
        <div className="projects-title">
          <h1>PROJECTS</h1>
          <h5>Here is what I have created:</h5>
        </div>
      
          <Cards className='todo-card-parent' 
          img={handImg} title ="to-do list"
          icon ={vueImg}
          desc= {"Simple to-do list application where users can input and complete their tasks. Coded with Vue.js, HTML, CSS, and JavaScript"}
          id = {''}
          />

          <Cards className='calc-card-parent' 
          img={calcImg} title="calculator"
          icon ={vueImg}
          desc= {"Simple iPhone style calculator application where users can compute basic math operations. Coded with Vue.js, HTML, CSS, and JavaScript"}
          id = {'calc-overview'} openid={'calc-open'}
          />
          


      </div>

  )
}
