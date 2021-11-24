import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo-alt.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <NavLink to="/home">
            <img className="me-3" src={logo} alt="" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Link to="/home" className="header-link">
              Home
            </Link>
            <Link to="/team" className="header-link">
              Team
            </Link>
            <Link to="/career" className="header-link">
              Career
            </Link>
            <Link to="/contact" className="header-link">
              Contact
            </Link>

            <Link to="/login">
              <button className="header-btn">Login</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
