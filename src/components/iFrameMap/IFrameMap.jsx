import React from 'react'
import Iframe from 'react-iframe'
import { Container, Row } from 'react-bootstrap'


const IFrameMap = () => {
  return (
    <Container>
        <Row className='formButton'>
        <h1>Donde encontrarnos</h1>
        </Row>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.6045709305417!2d-58.46571859999999!3d-34.63943179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc980537af793%3A0xf87d9d7b72d5c41e!2sAv.%20San%20Pedrito%20715%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1674760383969!5m2!1ses!2sar"
            width="100%"
            height="500px"
            id=""
            className=""
            display="block"
            position="relative"/>
    </Container>
  )
}

export default IFrameMap