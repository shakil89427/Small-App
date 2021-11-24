import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="fw-light mt-5 text-center">Contact Us</h1>
      <p className="fw-light mb-5 w-50 text-center mx-auto">
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Cras ultricies ligula sed magna dictum porta.
      </p>
      <Container>
        <Row className="text-center">
          <Col className="mb-5" sm={12} md={6} lg={6}>
            <h1>
              <i class="fas fa-mobile-alt"></i>
            </h1>
            <h3 className="fw-light">(00) 789 456 7890 (USA)</h3>
            <h3 className="fw-light">(88) 016 725 0455 (UK)</h3>
          </Col>
          <Col className="mb-5" sm={12} md={6} lg={6}>
            <h1>
              <i class="fas fa-map-marked-alt"></i>
            </h1>
            <h3 className="fw-light">36. St Michael’s St, Oxford OX1, UK</h3>
            <h3 className="fw-light">123, Pennsylvania, USA</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="fw-light mt-5 text-center">Drop us a mail</h1>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <input className="contact-input" placeholder="Name" type="text" />
          </Col>
          <Col sm={12} md={12} lg={6}>
            <input
              className="contact-input"
              placeholder="Your Email Address"
              type="email"
            />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <input
              className="contact-input"
              placeholder="Subject"
              type="text"
            />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <textarea
              className="contact-input"
              placeholder="Your Message"
              rows="8"
            ></textarea>
          </Col>
        </Row>
        <button className="contact-btn">SUBMIT</button>
      </Container>
    </div>
  );
};

export default Contact;
