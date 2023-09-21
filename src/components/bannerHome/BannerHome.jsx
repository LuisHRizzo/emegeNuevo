import {React} from "react";
import { useState } from "react";
import "./bannerHome.css";

const normal = ' '
const panel = ' open '
const active = ' open-active '

function Panel({ initialClass, p1t,  p2t}) {
  const [panelStyle, setPanelStyle] = useState(false);

  const handleClick = () => {
    setPanelStyle((prevState) => !prevState);
  };

  const panelClassName = `panel ${initialClass} ${!panelStyle ? normal : panel}`;

  return (
    <div className={panelClassName} onClick={handleClick}>
        <p>{p1t}</p>
        <p>{p2t}</p>
    </div>
  );
}

const BannerHome = () => {
    const [panelStile, setPanelStyle] = useState(false);
    const [transition, setTransition] = useState(false);

    const handleClick = (event) => {
      event.stopPropagation();
        setPanelStyle((prevState) => !prevState)
      }
    const toggleActive = () => setTransition(!transition)
      console.log(panelStile);
  return (
    <div className="panels">
      <Panel initialClass="panel1" p1t="te damos" p2t="gestion"/>
      <Panel initialClass="panel2" p1t="creamos" p2t="software" />
      <Panel initialClass="panel3" p1t="Brindamos" p2t="Ciberseguridad" />
      <Panel initialClass="panel4" p1t="Traemos" p2t="Productos" />
{/* 
      <div className={"panel panel3 "+ (panelStile? normal:panel)}
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
      </div> */}
    </div>
  );
};

export default BannerHome;



{/* <div className={"panel panel1 " + (panelStile ? normal : panel)}
onClick={handleClick} 
>
  <p>Te Damos</p>
  <p>Gestion</p>
  <p> </p>
</div>
<div className={"panel panel2 " + (panelStile ? normal : panel)}
onClick={handleClick} 
onTransitionEnd={toggleActive}>
  <p>Creamos</p>
  <p>Software</p>
  <p> </p>
</div> */}