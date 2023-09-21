import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './punta-punta.png'
import img2 from './caru-out-2.jpg'
import img3 from './Community-Manager.jpg'

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
              <Col xs={6}>
              <img className="img-fluid rounded shadow-lg d-flex ms-auto" src={img1}  />
              </Col>
              <Col xs={6}>
              <img className="img-fluid rounded shadow-lg mb-5" src={img2} />
              <img className="img-fluid rounded shadow-lg d-flex col-11" src={img3} />
              </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <h2 className='mb-3'>Gestion de Proyectos</h2>
              <p>Somos especialistas en sistemas de seguridad electrónica, ya que somos representantes oficiales de la marca Dahua y nos especializamos en la integración de software a medida.</p>
          <h2 className="mb-3">Outsourcing</h2>
          <ul>
            <li><i></i>DevOps.</li>
            <li><i></i>Community Manager.</li>
            <li><i></i>Diseño Gráfico.</li>
            <li><i></i>Personal de testeo.</li>
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

function ModalGestion() {
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

export default ModalGestion