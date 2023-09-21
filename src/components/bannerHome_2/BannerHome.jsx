import React from "react";
import "./bannerHome.css";
import Carousel from "react-bootstrap/Carousel";
import Imagen1 from "./carrousel_1.jpg";
import Imagen2 from "./carrousel_2.jpg";
import Imagen3 from "./carrousel_3.jpg";
import Container from "react-bootstrap/Container";

const BannerHome = () => {
  return (
    <Container fluid>
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img className="carrousel_image" src={Imagen1} alt="First slide" />
          <Carousel.Caption>
            <h2 className="carrouselCaption">
              Desarrollos de Software y Hardware{" "}
            </h2>
            <h4>
              Desarrollamos paginas web responsive, siguiendo las tendencias del
              diseño actual y utilizando frameworks actuales como bootstrap 5,
              Angular y React. Tambien nos encargamos del posicionamiento Web,
              de los certificados y los dominios de su solución. Las app moviles
              pueden ser publicadas en Google Play y en Apple Store
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img className="carrousel_image" src={Imagen2} alt="second slide" />
          <Carousel.Caption>
            <h2 className="carrouselCaption">Ciberseguridad</h2>
            <h4>
              La ciberseguridad es la práctica de defender las computadoras, los
              servidores, los dispositivos móviles, los sistemas electrónicos,
              las redes y los datos de ataques maliciosos.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img className="carrousel_image" src={Imagen3} alt="third slide" />
          <Carousel.Caption>
            <h2 className="carrouselCaption">Gestion de Proyectos</h2>
            <h4>
              ¿Estás pensando en incorporar tecnología o realizar alguna mejora
              o innovación en tu empresa? Emege Group es una empresa
              especializada en solucionar sus necesidades con soluciones de
              punta a punta, llave en mano
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default BannerHome;
