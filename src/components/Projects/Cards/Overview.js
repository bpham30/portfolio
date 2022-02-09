import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CardContext } from './context';
import './Overview.css'

export default function Overview(props) {

    const { active, setActive } = useContext(CardContext);
    const transition = {
        type: "tween",
    }

    const switchToOpen = () => {
        setActive("open");
    }

    let animate = {};
    if (active === "overview")
        animate = { x: 0};
    else if(active === "open")
        animate = {x: -290};
  return (
    <motion.div id={props.id} className='overview-container' animate={animate} transition={transition} >
        <div className="title-container">
            <h1 className='title'>{props.title}</h1>
            <button onClick={switchToOpen}className='btn card-btn'>Overview</button>
        </div>
    </motion.div>
  );
}
