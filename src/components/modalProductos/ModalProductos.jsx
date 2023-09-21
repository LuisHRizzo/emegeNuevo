import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './camara.png'
import img2 from './productos.png'
import img3 from './reco-facial.png'
import img4 from './Dahua-camera.jpg'
import img5 from './logo_aktis.png'
import { Link as Anchor } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Gestion de proyectos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row md={12} className='align-items-center'>
              <Col md={5}>
              <img className="img-fluid rounded shadow-lg d-flex ms-auto" src={img1}  />
              <img className="img-fluid rounded shadow-lg d-flex ms-auto" src={img2}  />
              </Col>
              <Col md={7}>
              <img className="img-fluid rounded shadow-lg mb-5" src={img3} />
              <img className="img-fluid rounded shadow-lg d-flex col-11" src={img4} />
              </Col>
              <Col md={12} className='mt-3'>
              <img className="img-fluid rounded shadow-lg d-flex col-11" src={img5} />
              </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <h2 className='mb-3'>Equipos Dahua</h2> 
          <ul>
            <li><i></i>Representante oficial DAHUA, Camaras, Reconocimiento facial, LPR..</li>
            <li><i></i>Equipamiento de telecomunicaciones..</li>
            <li><i></i>Equipos de Computo</li>
            <li><i></i>UPS</li>
          </ul> 
          <h2 className='mb-3'>Software</h2>
          <ul>
            <li><i></i>Cylance/Blackberry.</li>
            <li><i></i>Smartfence</li>
            <li><i></i>CoreImpact Pro.</li>
            <li><i></i>Fortinet</li>
            <li><i></i>Tenable</li>
            <li><i></i>Manage Engine</li>
          </ul>
          <Anchor to='https://aktis.com.ar/'>
          <Button>Conozca mas sobre AKTIS</Button>
          </Anchor>
          <h2 className='mb-3'>Materiales y Soluciones de Trazabilidad</h2> 
          <ul>
            <li><i></i>Cables.</li>
            <li><i></i>Ferreteria para montajes de soluciones</li>
            <li><i></i>Trazabilidad mediante QR Bicapa inviolable.</li>
            <li><i></i>RFID.</li>
            <li><i></i>Sistemas de Seguridad Documental Holografica</li>
          </ul>
            </Col>
          </Row>
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalProductos() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Conozca Más
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalProductos