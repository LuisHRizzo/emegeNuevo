import React from "react";
import { useState } from "react";
import "./bannerHome.css";

const normal = ' '
const panel = ' open '
const active = ' open-active '

const BannerHome = () => {
    const [panelStile, setPanelStyle] = React.useState(false);
    const [transition, setTransition] = React.useState(false);

    const handleClick = () => {
        setPanelStyle((prevState) => !prevState)
      }
    const toggleActive = () => setTransition(!transition)

  return (
    <div className="panels">
      <div className={"panel panel1 " + panelStile ? " " : panel}
      onClick={handleClick} 
      /* onTransitionEnd={toggleActive} */>
        <p>Te Damos</p>
        <p>Gestion</p>
        <p> </p>
      </div>
      <div className={"panel panel2 "+ panelStile? normal:panel + transition? normal:active}
      onClick={handleClick} 
      onTransitionEnd={toggleActive}>
        <p>Creamos</p>
        <p>Software</p>
        <p> </p>
      </div>
      <div className={"panel panel3 "+ panelStile? normal:panel + transition? normal:active}
      onClick={handleClick} 
      onTransitionEnd={toggleActive}>
        <p>Brindamos</p>
        <p>Ciberseguridad</p>
        <p> </p>
      </div>
      <div className={"panel panel4 "+ panelStile? normal:panel + transition? normal:active}
      onClick={handleClick} 
      onTransitionEnd={toggleActive}>
        <p>Traemos</p>
        <p>Productos</p>
        <p> </p>
      </div>
    </div>
  );
};

export default BannerHome;
