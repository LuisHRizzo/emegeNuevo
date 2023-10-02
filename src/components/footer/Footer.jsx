import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiRegistered } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row >
          <Col className="rows" xs={6} md={3} >
            <span style={{ fontWeight: "bold" }}>Direccion</span>
            <p>Av. San Pedrito 715</p>
            <p>CABA, CP1406, Argentina</p>
          </Col>
          <Col className="rows" xs={6} md={3}>
            <span style={{ fontWeight: "bold" }}>Telefono</span>
            <p>+54 9 11 6936-7404</p>
            <p> </p>
          </Col>
          <Col className="rows" xs={6} md={3}>
            <span style={{ fontWeight: "bold" }}>Email</span>
            <p>ventas@emegegroup.com.ar</p>
            <p> </p>
          </Col>
          <Col className="rows" xs={6} md={3}>
            <span style={{ fontWeight: "bold" }}>2023 EMEGE GROUP SRL <BiRegistered /></span>
            <p>Made entirely with <DiMongodb /> <SiExpress /> <DiReact /><DiNodejsSmall /></p>
            <p> </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
