import React from 'react';
import "./Project.css"
import Cards from './Cards/Cards'

export default function Project() {
  return (
      <div id ='projects'className='projects-container'>
        <div className="projects-title">
          <h1>PROJECTS</h1>
          <h5>Here is what I have created:</h5>
        </div>
        <div className="project-cards-container">
          <Cards/>
        </div>
      </div>

  )
}
