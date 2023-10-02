import { React } from "react";
import "./bannerMarket.css";
import { Link as Anchor , useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const marcas = [
  {
    nombre: "DAHUA",
    imagen:
      "https://brandlogos.net/wp-content/uploads/2022/02/dahua_technology-logo-brandlogo.net_.png",
  },
  {
    nombre: "Seagate",
    imagen:
      "https://www.liblogo.com/img-logo/se1490i26d--logo-image-center--us.png",
  },
  {
    nombre: "Western Digital",
    imagen:
      "https://logowik.com/content/uploads/images/western-digital-new-20228501.jpg",
  },
  {
    nombre: "kingston",
    imagen:
      "https://www.logotypes101.com/logos/387/26A5ACC294A37E1612E23675B8C19FE2/kingstontotem.png",
  },
  {
    nombre: "Imou",
    imagen:
      "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/a/AmazonStores/ATVPDKIKX0DER/6a07c0262b0abe19758e80511a1c6294.w400.h400.jpg",
  },
  {
    nombre: "DX control",
    imagen: "https://artelectronica.com.ar/wp-content/uploads/DxControl.jpg",
  },
  {
    nombre: "Streamax",
    imagen:
      "https://canacar.com.mx/app/uploads/2022/01/lQDPDhr6Ti5_-0HNAljNAliwFjPHp7STB9oBx1fZ1MAKAA_600_600-300x300.jpg",
  },
  {
    nombre: "Cygnus",
    imagen: "https://cygnus.la/wp-content/uploads/2019/11/logo_cygnus.png",
  },
  {
    nombre: "ZKTeco",
    imagen:
      "https://logovectorseek.com/wp-content/uploads/2020/04/zkteco-logo-vector.png",
  },
  {
    nombre: "Sudvision",
    imagen:
      "https://assets.website-files.com/5d829b7202676c7a8984bd44/5da06f778f0394e406031886_sudvision-logo.png",
  },
  {
    nombre: "Uniglove",
    imagen:
      "https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg",
  },
  {
    nombre: "Luber",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_631214-MLA31022535732_062019-O.webp",
  },
  {
    nombre: "Net Quality",
    imagen: "https://www.netquality.com.ar/images/net-quality-blanco.png",
  },
  {
    nombre: "Furukawa",
    imagen:
      "https://www.cordobadigital.net/wp-content/uploads/2021/05/logo-furukawa.jpg",
  },
  {
    nombre: "Signotel",
    imagen: "https://www.mg-seguridad.com.ar/imagenes/productos/Caja.jpg",
    anchor: "/signotel",
  },
  {
    nombre: "Commscope",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/05/Commscope-Logo.png",
  },
  {
    nombre: "TP-Link",
    imagen: "https://cdn.kibrispdr.org/data/977/tp-link-logo-png-42.png",
  },
  {
    nombre: "Lyonn",
    imagen:
      "https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_28-10-2022-02-10-51-28985_2.jpeg",
  },
  {
    nombre: "Ubiquity",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ubiquiti_Logo.png/640px-Ubiquiti_Logo.png",
  },
  {
    nombre: "Marshall",
    imagen:
      "https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg",
  },
  {
    nombre: "Hipcam",
    imagen:
      "https://scontent.fros8-1.fna.fbcdn.net/v/t39.30808-6/274288276_1972085722971782_3082499772172865287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=LPpEQZ6dRlAAX94toMS&_nc_ht=scontent.fros8-1.fna&oh=00_AfDJvTDZQ6tCMsn3ReNEtKZGy051PmsHB0Y9oYr4h9haJA&oe=651B69F5",
  },
];

const BannerMarket = () => {
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleMarcaClick = (marca) => {
    // Cuando se hace clic en una marca, navega a ProductList con la marca en la URL
    navigate(`/marcas/${marca}`);
  };

  return (
    <Container>
      <div className="d-flex align-content-center flex-wrap justify-content-evenly">
        {marcas.map((card, index) => (
          <div
            key={`${card.nombre}-${index}`}
            className="card bg-light text-black align-self-center m-3"
          >
            <Anchor to={`/marcas/${card.nombre}`}>
              <img
                src={card.imagen}
                className="card-img"
                style={{ width: "300px", height: "225px" }}
                alt={card.nombre}
                onClick={() => handleMarcaClick(card.nombre)}
              />
              <div className="card-img-overlay">
                <h5 className="card-title cardTitleName">{card.nombre}</h5>
              </div>
            </Anchor>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BannerMarket;
