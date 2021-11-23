import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo-alt.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer text-center">
      <Container>
        <Row className="py-5">
          <Col className="pb-3" sm={12} md={12} lg={3}>
            <img src={logo} alt="" />
            <p>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </p>
          </Col>
          <Col sm={12} md={12} lg={9}>
            <Row>
              <Col sm={6} md={4} lg={4}>
                <h5>PRODUCT</h5>
                <p>Teams</p>
                <p>Blogs</p>
                <p>FAQs</p>
              </Col>
              <Col sm={6} md={4} lg={4}>
                <h5>RESOURCES</h5>
                <p>Singup</p>
                <p>Login</p>
                <p>Blog</p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <h5>COMPANY</h5>
                <p>About</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="m-0 py-2 bg-dark">
        Copyright © 2021. Developed by Shakil Ahmed
      </p>
    </div>
  );
};

export default Footer;
