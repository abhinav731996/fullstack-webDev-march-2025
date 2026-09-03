import React, { useContext } from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/Store";

const Header = () => {
  const { cart,wishlist} = useContext(StoreContext);
  

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/auth/login");
  };
  
  return (
    <div>
      <Navbar bg="light" className="p-2">
        <Container className="d-flex justif-content-between gap-3 p-3">
          <Navbar.Brand as={Link} to="/">
            E-Shop
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/wishlist" className="position-relative">
              Wishlist
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {wishlist.length}
              </Badge>
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="position-relative">
              Cart
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cart.length}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              My Account
            </Nav.Link>

            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
          </Nav>

          <Button onClick={logout}>Logout</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
