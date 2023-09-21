import React from 'react'
import './hero.css'
import { Link as Anchor } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from '../navbar/logo_emege.png'

const Hero = () => {
  return (
    <>
    <Container>
      <Row className='d-flex flex-reverse'>
        <Col xs={12} md={4} className='d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center just'>
            <h1>EMEGE GROUP SRL</h1>
          </div>
          <h3>Traemos SOLUCIONES</h3>
          <h5>Contanos como podemos ayudarte</h5>
          <Anchor to='/contacto'>
          <Button variant="primary" size="lg">
          Contactenos
        </Button>{' '}
          </Anchor>
        </Col>
        <Col xs={12} md={8} >
          <img className='img-fluid' src={Logo} alt="" />
        </Col>
      </Row>
    </Container>   
    </>
  )
}

export default Hero