import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import signup from "../../images/Login/sign-up.jpg";
import logo from "../../images/logo.png";
import "./Common.css";

const Login = () => {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col className="text-center" sm={12} md={6} lg={6}>
          <img className="img-fluid rounded" src={signup} alt="" />
        </Col>
        <Col className="border rounded text-center" sm={12} md={6} lg={6}>
          <h1 className="mt-5">
            <img src={logo} alt="" />
          </h1>
          <h3 className="fw-light mt-5 pb-3 border-bottom w-75 mx-auto">
            Sign Up for New Account
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="login-input"
              placeholder="Enter Your Name"
              required
              type="text"
            />
            <input
              className="login-input"
              placeholder="Enter Your Email"
              required
              type="email"
            />
            <br />
            <input
              className="login-input"
              placeholder="Enter Your Password"
              required
              type="password"
            />
            <button type="submit" className="login-btn">
              SIGN UP
            </button>
          </form>
          <p className="fw-light m-0">
            By clicking “Sign Up” I agree to Terms of Conditions.
          </p>
          <p className="fw-light m-0">
            Anready have an account?
            <Link className="text-decoration-none" to="/login">
              Sign In
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
