import {React} from "react";
import { useState } from "react";
import "./bannerHome.css";
import ModalGestion from '../modalGestion/ModalGestion.jsx'
import ModalSoftware from "../modalSoftware/ModalSoftware.jsx";
import ModalCiberseguridad from "../modalCiberseguridad/ModalCiberseguridad.jsx";
import ModalProductos from "../modalProductos/ModalProductos.jsx";

const normal = ' '
const panel = ' open '

function Panel({ initialClass, p1t,  p2t, p3t}) {
  const [panelStyle, setPanelStyle] = useState(false);

  const handleClick = () => {
    setPanelStyle((prevState) => !prevState);
  };

  const panelClassName = `panel ${initialClass} ${!panelStyle ? normal : panel}`;

  return (
    <div className={panelClassName} onClick={handleClick}>
        <p>{p1t}</p>
        <p>{p2t}</p>
        <p>{p3t}</p>
    </div>
  );
}

const BannerHome = () => {
    const [panelStile, setPanelStyle] = useState(false);
    const [transition, setTransition] = useState(false);

  return (
    <div className="panels mt-5">
      <Panel initialClass="panel1" p1t="te damos" p2t="gestion" p3t={<ModalGestion/>} />
      <Panel initialClass="panel2" p1t="creamos" p2t="software" p3t={<ModalSoftware/>} />
      <Panel initialClass="panel3" p1t="Brindamos" p2t="Ciberseguridad" p3t={<ModalCiberseguridad/>} />
      <Panel initialClass="panel4" p1t="Traemos" p2t="Productos" p3t={<ModalProductos/>} />

    </div>
  );
};

export default BannerHome;

