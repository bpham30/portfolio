import React from 'react';
import './Overview.css'

export default function Overview() {
  return (
    <div className='overview-container'>
        <div className="title-container">
            <h1 className='title'>to-do</h1>
            <h1 className='title'>list</h1>
            <button className='btn card-btn'>Overview</button>
        </div>
    </div>
  );
}
