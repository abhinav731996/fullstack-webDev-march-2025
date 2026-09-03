import React from "react";
import { Container, Nav } from "react-bootstrap";

const CategoriesBar = () => {
  return (
    <div>

      <Nav className="bg-dark p-2">
      <Container className="d-flex justify-content-evenly">
        <Nav.Link className="text-white">Electronics</Nav.Link>
        <Nav.Link className="text-white">Clothing</Nav.Link>
        <Nav.Link className="text-white">Shoes</Nav.Link>
        <Nav.Link className="text-white">Mobiles</Nav.Link>
      </Container>
      </Nav>
    </div>
  );
};

export default CategoriesBar;
