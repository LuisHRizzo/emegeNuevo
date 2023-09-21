import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './code1.jpg'
import img2 from './placa_desarrollo.jpg'
import img3 from './code2.jpg'
import img4 from './motherboard.jpg'

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
          Desarrollos de Software y Hardware
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row md={12} className='align-items-center'>
              <Col xs={6}>
              <img className="img-fluid rounded shadow-lg d-flex ms-auto" src={img1}  />
              <img className="img-fluid rounded shadow-lg d-flex col-10 ms-auto" src={img2}  />
              </Col>
              <Col xs={6}>
              <img className="img-fluid rounded shadow-lg mb-5" src={img3} />
              <img className="img-fluid rounded shadow-lg d-flex col-11" src={img4} />
              </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <h2 className='mb-3'>Desarrollos de Software</h2>
              <h3 className='mb-3'>Páginas y aplicaciones Web</h3>
              <p>Desarrollamos paginas web responsive, siguiendo las tendencias del diseño actual y utilizando frameworks actuales como bootstrap 5, Angular y React. Tambien nos encargamos del posicionamiento Web, de los certificados y los dominios de su solución.</p>
              <p>Las app moviles pueden ser publicadas en Google Play y en Apple Store</p>
          <h2 className="mb-3">Desarrollos de Hardware</h2>
          <h3 className='mb-3'>Desarrollamos: </h3>
          <ul>
            <li><i></i>Equipos.</li>
            <li><i></i>Soluciones de electronica.</li>
            <li><i></i>Robotica.</li>
            <li><i></i>Automatización industrial.</li>
            <li><i></i>IoT</li>
            <li><i></i>Etc.</li>
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

function ModalSoftware() {
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

export default ModalSoftware