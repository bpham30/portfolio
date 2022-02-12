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
    const switchToClose = () => {
        setActive("overview");
    }
    let animate = {};
    if (active === "overview")
        animate = { x: 0};
    else if(active === "open")
        animate = {x: -290};

        
  return (
      <motion.div id={props.openid}className='open-card-container' animate={animate} transition={transition}>
          
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
            <div className='open-options' animate={animate} transition={transition} ></div>
            {
                
            }
            <button className='btn card-btn' href="/">Open</button>
            <button onClick={switchToClose} className='btn card-btn-close'>Close</button>
        </div>
        <div className="card-img">
        <img src={props.img} />
        </div>
      </motion.div>
  );
}
