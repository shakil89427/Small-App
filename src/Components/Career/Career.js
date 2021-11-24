import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import thumb from "../../images/thumbs/promo-video-thumbnail.jpg";
import gallery1 from "../../images/gallery/gallery-01.jpg";
import gallery2 from "../../images/gallery/gallery-02.jpg";
import gallery3 from "../../images/gallery/gallery-03.jpg";
import "./Career.css";

const Career = () => {
  return (
    <div>
      <div className="mt-5 text-center">
        <h1 className="fw-light">Career</h1>
        <p className="w-50 mx-auto">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis
          at tellus. magna dictum porta.
        </p>
      </div>
      <Container>
        <Row className="my-5">
          <Col className="text-center my-auto py-5" sm={12} md={6} lg={6}>
            <h1 className="fw-light">Who we're looking for</h1>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. eget tortor risus. Vivamus magna justo, lacinia eget
              consectetur sed,convallis at tellus. Vivamus suscipit tortor eget
              felis porttitor volutpat.Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Praesent sapien massa, convallis
            </p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img className="rounded img-fluid" src={thumb} alt="" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="my-5">
          <Col className="p-0" sm={12} md={4} lg={4}>
            <img className="img-fluid" src={gallery1} alt="" />
          </Col>
          <Col className="p-0" sm={12} md={4} lg={4}>
            <img className="img-fluid" src={gallery2} alt="" />
          </Col>
          <Col className="p-0" sm={12} md={4} lg={4}>
            <img className="img-fluid" src={gallery3} alt="" />
          </Col>
        </Row>
      </Container>
      <h1 className="fw-light text-center">Some amenities for you to enjoy</h1>
      <Container>
        <Row className="enjoy text-center mt-5">
          <Col sm={12} md={6} lg={3}>
            <i class="far fa-clock"></i>
            <h5 className="fw-light">Flexible hours</h5>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              rutrum congue leo eget malesuada.
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <i class="fas fa-filter"></i>
            <h5 className="fw-light">Free Snacks & Drinks</h5>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              rutrum congue leo eget malesuada.
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <i class="fas fa-headset"></i>
            <h5 className="fw-light">Gaming</h5>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              rutrum congue leo eget malesuada.
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <i class="fas fa-hammer"></i>
            <h5 className="fw-light">4 Working Days</h5>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              rutrum congue leo eget malesuada.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="fw-light text-center my-5">Job Opening</h1>
        <div className="job border-bottom mb-5 w-75 mx-auto pb-3 d-flex justify-content-between">
          <span>
            <h4 className="fw-light">Andriod Developer</h4>
            <h6 className="fw-light">Hamburg, Germany</h6>
          </span>
          <button>VIEW DETAILS</button>
        </div>
        <div className="job border-bottom mb-5 w-75 mx-auto pb-3 d-flex justify-content-between">
          <span>
            <h4 className="fw-light">DevOps Engineer</h4>
            <h6 className="fw-light">London, United Kingdom</h6>
          </span>
          <button>VIEW DETAILS</button>
        </div>
        <div className="job border-bottom mb-5 w-75 mx-auto pb-3 d-flex justify-content-between">
          <span>
            <h4 className="fw-light">Operations Associate</h4>
            <h6 className="fw-light">New Jersey , USA</h6>
          </span>
          <button>VIEW DETAILS</button>
        </div>
        <div className="job border-bottom mb-5 w-75 mx-auto pb-3 d-flex justify-content-between">
          <span>
            <h4 className="fw-light">Compliance Officer</h4>
            <h6 className="fw-light">New Jersey , USA</h6>
          </span>
          <button>VIEW DETAILS</button>
        </div>
      </Container>
    </div>
  );
};

export default Career;
