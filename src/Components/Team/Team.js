import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import feature1 from "../../images/team/featured-person-01.jpg";
import feature2 from "../../images/team/featured-person-02.jpg";
import design1 from "../../images/team/design-team-01.jpg";
import design2 from "../../images/team/design-team-02.jpg";
import design3 from "../../images/team/design-team-03.jpg";
import marketing1 from "../../images/team/marketing-team-01.jpg";
import marketing2 from "../../images/team/marketing-team-02.jpg";
import marketing3 from "../../images/team/marketing-team-03.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <div className="py-5 text-center">
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, beatae
          atque dolorum impedit
        </p>
      </div>
      <Container>
        <Row>
          <Col className="team-feature my-2" sm={12} md={6} lg={6}>
            <div className="">
              <img src={feature1} alt="" />
              <h2>Elon Musk</h2>
              <h6>Founder & CEO</h6>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Proin eget tortor risus. Nulla
                porttitor accumsan tincidunt.
              </p>
              <p className="text-center">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </p>
            </div>
          </Col>
          <Col className="team-feature my-2" sm={12} md={6} lg={6}>
            <div className="">
              <img src={feature2} alt="" />
              <h2>Sergey Brin</h2>
              <h6>Founder & CEO</h6>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Proin eget tortor risus. Nulla
                porttitor accumsan tincidunt.
              </p>
              <p className="text-center">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="py-5 text-center">
        <h1>Design Team</h1>
        <p>
          Small Apps makes it easy to stay on top of your Life Style. No late
          tasks. No gimmicks.
        </p>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={design1} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={design2} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={design3} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="py-5 text-center">
        <h1>Marketing Team</h1>
        <p>
          Small Apps makes it easy to stay on top of your Life Style. No late
          tasks. No gimmicks.
        </p>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={marketing1} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={marketing2} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="">
              <img className="img-fluid" src={marketing3} alt="" />
              <h5>Jonathon Andrew</h5>
              <p>Head Of Marketing</p>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Vivamus suscipit tortor eget felis porttitor
                volutpat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="team-bottom text-center">
        <h1>We are hunting Genius Developers</h1>
        <p className="w-75 mx-auto">
          Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Pellentesque in ipsum id orci porta
          dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus.
        </p>
        <button>JOIN OUR TEAM</button>
      </div>
    </div>
  );
};

export default Team;
