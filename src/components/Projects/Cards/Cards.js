import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import "./Cards.css";
import OpenCard from "./OpenCard";
import Overview from "./Overview";
import { CardContext } from "./context";
import { motion } from "framer-motion";

export default function Cards(props) {
  const [active, setActive] = useState("overview");

  const contextValue = { active, setActive };
  let animate = {};
  if (active === "open") animate = { opacity: 1 };
  else if (active === "overview") animate = { opacity: 0 };

  return (
    <CardContext.Provider value={contextValue}>
      <div className="card-container">
        <motion.div
          className="card-overlay"
          initial={{ opacity: 0 }}
          animate={animate}
          transition={{ type: "tween" }}
        >

        </motion.div>
        <div className="card-wrapper">
          <Overview title={props.title} id= {props.id } btnid={props.btnid}/>
          <OpenCard icon={props.icon} desc={props.desc} openid = {props.openid} img={props.img} />
        </div>
      </div>
      
    </CardContext.Provider>
  );
}
