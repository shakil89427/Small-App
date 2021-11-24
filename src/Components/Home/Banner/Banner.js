import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/mobile.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner ">
        <Container>
          <Row className="text-center">
            <Col className="py-3 my-auto text-white" sm={12} md={6} lg={6}>
              <h1 className="fw-bolder">Showcase your app</h1>
              <h1 className="fw-bolder">with Small Apps</h1>
              <p>
                Besides its beautiful design. Laapp is an incredibly rich core
                framework for you to showcase your App.
              </p>
              <button className="banner-btn">DOWNLOAD NOW</button>
            </Col>
            <Col className="py-5" sm={12} md={6} lg={6}>
              <img className="img-fluid" src={logo} alt="" />
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L120,96C240,128,480,192,720,192C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container className="bottom-banner mx-auto text-center p-3">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <i className="fs-2 mb-4 text-info fas fa-coffee"></i>
            <h5 className="fw-light">Themes Made Easy</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              non, recusandae tempore ipsam dignissimos molestias.
            </p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <i className="fs-2 mb-4 text-info fas fa-sun"></i>
            <h5 className="fw-light">Powerful Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              non, recusandae tempore ipsam dignissimos molestias.
            </p>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <i className="fs-2 mb-4 text-info fas fa-cloud"></i>
            <h5 className="fw-light">Creative Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              non, recusandae tempore ipsam dignissimos molestias.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
