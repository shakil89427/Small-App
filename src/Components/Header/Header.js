import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo-alt.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img className="me-3" src={logo} alt="" />
          <p className="fs-6 d-inline">
            <small>Welcome, Shakil Ahmed</small>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <div className="d-flex justify-content-center align-items-center">
              <Link to="home" className="text-decoration-none text-white me-2">
                Home
              </Link>
              <Link to="home" className="text-decoration-none text-white me-2">
                Team
              </Link>
              <Link to="home" className="text-decoration-none text-white me-2">
                Career
              </Link>
              <Link to="home" className="text-decoration-none text-white me-2">
                Blog
              </Link>

              <Link to="home" className="text-decoration-none text-white me-2">
                Login
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
