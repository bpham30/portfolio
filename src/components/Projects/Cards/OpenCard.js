import React, { useContext } from 'react';
import './OpenCard.css';
import { motion } from 'framer-motion';
import { CardContext } from './context';
import htmlImg from "../../../assets/Cards/html.png"
import cssImg from "../../../assets/Cards/css.png"
import jsImg from "../../../assets/Cards/js.png"

export default function OpenCard(props) {
    const {active, setActive} = useContext(CardContext);

    const transition = {
        type: "tween",
    }

    let animate = {};
    if (active === "overview")
        animate = { x: 0};
    else if(active === "open")
        animate = {x: -290};

        
  return (
      <motion.div className='open-card-container' animate={animate} transition={transition}>
        <div className="info-container">
            <div className="inbox-container">
                <div className="accessory">
                    <img src={props.icon}/>
                </div>
                <div className="accessory">
                    <img src={htmlImg}/>
                </div>
                <div className="accessory">
                    <img src={cssImg}/>
                </div>
                <div className="accessory">
                    <img src={jsImg}/>
                </div>
            </div>
            <p className='description'>{props.desc}</p>
            <button className='btn card-btn'>Open</button>
        </div>
      </motion.div>
  );
}
