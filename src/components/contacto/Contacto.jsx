import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'; 
import './contacto.css'


const Contacto = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Realizar una solicitud POST al backend para enviar el correo utilizando Axios
        const response = await axios.post('http://localhost:3000/api/send-email', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          // Éxito: el correo se envió correctamente
          alert('Correo enviado con éxito');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          // Error al enviar el correo
          alert('Error al enviar el correo');
        }
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el correo');
      }
    };
  
    return (
      <Container className='contacto'>
        <h2 className='tituloContacto'>Contacto</h2>
        <Row className='form'>
          <Col xl={12} xs={12}>          
        <Form onSubmit={handleSubmit}className='form'>
          <Form.Group controlId="name" className='innerForm'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email" className='innerForm'>
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="message" className='innerForm'>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='formButton'>
            Enviar Correo
          </Button>
        </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Contacto;