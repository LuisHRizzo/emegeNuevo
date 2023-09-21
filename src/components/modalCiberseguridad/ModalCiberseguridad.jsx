import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './owasp.png'
import img2 from './cylance-logo.png'
import img3 from './caruOut4.jpg'
import img4 from './manage-engine.png'
import img5 from './Smartfense_logo.png'

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
          Servicios de Ciberseguridad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container  className='d-flex flex-column justify-content-center align-items-center' >
          <Container md={12} className='d-flex flex-column justify-content-center align-items-center'>
            <Row><h1 className='mb-3'>Ciberseguridad</h1></Row>
            <Row><p>La ciberseguridad es la práctica de defender las computadoras, los servidores, los dispositivos móviles, los sistemas electrónicos, las redes y los datos de ataques maliciosos.</p></Row>
          </Container>
          <Row className='mt-5'>
            <Col xs={12} md={6}>
              <Row md={12}  className='d-flex justify-content-center align-items-center'>
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
              <h2 className='mb-3'>Servicios de Ciberseguridad</h2>
              <p className='mb-3'>El SOC administrado permite a nuestros clientes obtener las capacidades de un centro de
              operaciones de seguridad moderno sin el costo y el esfuerzo de administrar uno.</p>
              <p className='mb-3'>SOC se enfoca principalmente en la detección de amenazas potenciales dentro de las redes
              corporativas, que van desde piratas informáticos y malware hasta empleados que consciente o
              intencionalmente buscan acceso a información confidencial que no está destinada a sus ojos.</p>
              <Row>
                <Col xl={6}>
              <ul>
                <li><i></i>Managed Security Service Provider (MSSP)</li>
                <li><i></i>Evaluación de Madurez de Ciberseguridad</li>
                <li><i></i>Análisis de deficiencias y Certificación ISO 27001</li>
                <li><i></i>Evaluación de Madurez DevSecOps</li>
              </ul>
                </Col>
                <Col xl={6}>
                  <li><i></i>Penetration Testing</li>
                  <li><i></i>Analisis de deficiencias PCI DSS & PCI PA-DSS</li>
                  <li><i></i>Penetration Testing</li>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='mt-5'>
          <Col xs={12} md={6}>
              <h2 className='mb-3'>Capacitacion empresarial</h2>
              <h4 className='mb-3'>El factor humano es un pilar fundamental en la seguridad.</h4>
              <p className='mb-3'>Las medidas de seguridad que toman las organizaciones suelen enfocarse en herramientas
              técnicas y no en las personas.</p>
              <p className='mb-3'>Por ello, los ciberdelincuentes prefieren destinar sus ataques a los usuarios, aprovechando los
              comportamientos humanos inseguros, saltando así cualquier barrera de seguridad basada en software o
              hardware.</p>
              <Row>
                <Col xl={6}>
              <ul>
                <li><i></i>Concientizacion mediante plataforma SAAS</li>
                <li><i></i>Simulacion de Phishing y Ramsomware</li>
                <li><i></i>Adopcion de hábitos seguros.</li>
                <li><i></i>Seguimiento de capacitaciones de los empleados mediante la plataforma.</li>
              </ul>
                </Col>
                <Col xl={6}>
                  <li><i></i>Auditorias de Impacto, medicion de la eficacia de las capacitaciones, encuestas.</li>
                  <li><i></i>Gamificación como metodo de enseñanza.</li>
                  <li><i></i>Generacion de Contenido personalizado</li>
                  <li><i></i>Informes periodicos.</li>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} className='d-flex flex-column justify-content-center align-items-center'>
            <img className="img-fluid rounded shadow-lg d-flex ms-auto" src={img5}  />

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

function ModalCiberseguridad() {
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

export default ModalCiberseguridad