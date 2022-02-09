import React from 'react';
import './OpenCard.css';
import reactImg from "../../../assets/Cards/react.png"
import vueImg from "../../../assets/Cards/vue.png"
import boostrap from "../../../assets/Cards/bootstrap.png"
import langImg from "../../../assets/Cards/htmlcssjs.png"

export default function OpenCard() {
  return (
      <div className='open-card-container'>
        <div className="info-container">
            <div className="inbox-container">
                <div className="accessory">
                    <img src={vueImg}/>
                </div>
                <div className="accessory">
                    <img src={langImg}/>
                </div>
            </div>
            <p>This app is coded with vue</p>
            <button className='btn card-btn'>Open</button>
        </div>
      </div>
  );
}
