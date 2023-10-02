import React, { useState, useEffect } from "react";
import { Pagination, Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom';


const ProductList = ({ filtro }) => {
  const { marca } = useParams();
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8;
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Realizar la solicitud GET a la API
    if (marca) {
        // Realizar la solicitud GET a la API
        axios
          .get("http://localhost:3000/api/products")
          .then((response) => {
            const data = response.data;
            if (typeof data === "object" && Array.isArray(data.products)) {
              // Si data es un objeto con una propiedad "products" que es una matriz
              setProductos(data.products);
              setLoading(false);
            } else if (Array.isArray(data)) {
              // Si data es directamente una matriz, configurar productos directamente
              setProductos(data);
              setLoading(false);
            } else {
              console.error("Los datos de la API no son válidos:", data);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
      console.log(marca)
    }, [marca]);

  // Función para filtrar productos por nombre y categoría
  const filteredProductos = productos.filter(
    (producto) =>
      (producto.name.toLowerCase().includes(searchText.toLowerCase()) ||
      producto.category.toLowerCase().includes(searchText.toLowerCase())) &&
      (producto.brand && producto.brand.toLowerCase() === marca.toLowerCase())
  );

  // Función para paginar los productos
  const productosPaginados = filteredProductos.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  // Función para abrir el modal y mostrar los detalles del producto
  const openModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setPaginaActual(1); // Volver a la primera página al realizar una nueva búsqueda
  };

  return (
    <div className="d-flex align-content-center flex-wrap justify-content-center m-5" >
      <h2>Lista de Productos</h2>
      <Form.Control
        type="text"
        placeholder="Buscar por nombre o categoría"
        value={searchText}
        onChange={handleSearchChange}
      />
      {/* Renderizar la lista de productos */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="d-flex flex-column align-content-center flex-wrap justify-content-evenly mt-2">
          {/* Lista de productos */}
          <div className="card-container d-flex align-content-center flex-wrap justify-content-evenly ">
            {productosPaginados.map((producto) => (
              <Card key={producto._id} style={{ width: "18rem" }} className="mb-3">
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>Precio: {producto.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => openModal(producto)}
                  >
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          {/* Paginación */}
          <div className="d-flex justify-content-center mt-5">
          <Pagination >
            {Array.from({
              length: Math.ceil(filteredProductos.length / productosPorPagina),
            }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === paginaActual}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
          </div>
        </div>
      )}

      {/* Modal para ver detalles del producto */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ maxWidth: "100%" }}
              />
              <h3>{selectedProduct.name}</h3>
              <p>Categoría: {selectedProduct.category}</p>
              <p>Descripción: {selectedProduct.description}</p>
              <p>Costo: {selectedProduct.price}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
