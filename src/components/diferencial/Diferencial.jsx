import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './diferencial.css';
import img1 from './about12@2x.jpg';
import {TbBulb} from "react-icons/tb";
import {IconContext} from "react-icons";
import {LuBrainCircuit, LuPuzzle, LuHeadphones} from "react-icons/lu";

const Diferencial = () => {
  return (
    <Container fluid className='diferencial'>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col lg={5}>
                <div className='container-fluid'>
                    <img src={img1} className="img-fluid rounded shadow-lg d-flex ms-auto"/>
                </div>
            </Col>
            <Col lg={5} xs={11} className='mt-3'>
            <h4 style={{color: "#9e9e9e" }}>¿QUE NOS DIFERENCIA DEL RESTO?</h4>
            <h2>Nosotros nos preocupamos para que usted no tenga que hacerlo.</h2>
            <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                <IconContext.Provider value={{color: 'yellow', size: 42}}>
                <TbBulb/>
                </IconContext.Provider>
                <div className='m-3'>
                <span style={{fontWeight: "bold"}}>Creatividad</span>
                <p>Nos acompaña un gran equipo de diseñadores y creativos</p>
                </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                <IconContext.Provider value={{color: 'pink', size: 42}}>
                <LuBrainCircuit/>
                </IconContext.Provider>
                <div className='m-3'>
                    <span style={{fontWeight: "bold"}}>Pensamiento Innovador</span>
                    <p>Nuestros especialistas estan al corriente de las tendencias.</p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                <IconContext.Provider value={{color: 'green', size: 42}}>
                <LuPuzzle/>
                </IconContext.Provider>
                <div className='m-3'>
                    <span style={{fontWeight: "bold"}}>Soluciones Rapidas</span>
                    <p>A veces el cliente no puede permitirse esperar. Por suerte, nosotros sabemos eso.</p>
                </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                <IconContext.Provider value={{color: 'brown', size: 42}}>
                <LuHeadphones/>
                </IconContext.Provider>
                <div className='m-3'>
                    <span style={{fontWeight: "bold"}}>Soporte de primera</span>
                    <p>Nuestras soluciones y proyectos cuentan con soporte de sus implementadores.</p>
                </div>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Diferencial