import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import demo1 from "../../../images/feature/feature-new-01.jpg";
import demo2 from "../../../images/feature/feature-new-02.jpg";
import man from "../../../images/testimonial/feature-testimonial-thumb.jpg";

const Demo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <img className="img-fluid" src={demo1} alt="" />
          </Col>
          <Col className="p-5 my-auto" sm={12} md={12} lg={6}>
            <h1 className="fw-light">
              Increase your productivity with Small Apps
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <img src={man} alt="" /> Jonathon Andrew{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-5 my-auto" sm={12} md={12} lg={6}>
            <h1 className="fw-light">
              Increase your productivity with Small Apps
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <img src={man} alt="" /> Jonathon Andrew{" "}
            </p>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <img className="img-fluid" src={demo2} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Demo;
