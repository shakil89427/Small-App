import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Interface.css";
import pad from "../../../images/feature/iphone-ipad.jpg";

const Interface = () => {
  return (
    <div className="interface">
      <h1 className="fw-light">An Interface For Lifestyle</h1>
      <p>
        Small Apps makes it easy to stay on top of your Life Style. No late
        tasks. No gimmicks.
      </p>
      <Container>
        <Row className="pt-5">
          <Col className="my-auto" sm={12} md={6} lg={6}>
            <img className="img-fluid" src={pad} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Row className="interface-right p-5">
              <Col className="p-3" sm={12} md={6} lg={6}>
                <i className="far fa-bookmark"></i>
                <h5 className="fw-light">Easy Prototyping</h5>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Curabitur aliquet quam id dui
                </p>
              </Col>
              <Col className="p-3" sm={12} md={6} lg={6}>
                <i className="fas fa-wave-square"></i>
                <h5 className="fw-light">Sensor Bridge</h5>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Curabitur aliquet quam id dui
                </p>
              </Col>
              <Col className="p-3" sm={12} md={6} lg={6}>
                <i className="fas fa-signal"></i>
                <h5 className="fw-light">Strategist</h5>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Curabitur aliquet quam id dui
                </p>
              </Col>
              <Col className="p-3" sm={12} md={6} lg={6}>
                <i className="fas fa-sliders-h"></i>
                <h5 className="fw-light">Art Direction</h5>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Curabitur aliquet quam id dui
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Interface;
