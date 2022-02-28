import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="justify-content-end">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Link to="/mynotes"> Minhas anotações</Link>
            </Nav.Link>
            <NavDropdown title="TiTi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Minha conta
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Desconectar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
