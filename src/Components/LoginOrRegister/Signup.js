import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import signup from "../../images/Login/sign-up.jpg";
import logo from "../../images/logo.png";
import useAuth from "../AuthProvider/useAuth";
import "./Common.css";

const Login = () => {
  const { user, register } = useAuth();
  const [userData, setUserData] = useState();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (user.email) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [user]);

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const oldData = { ...userData };
    oldData[name] = value;
    setUserData(oldData);
  };

  const registerWithData = (e) => {
    e.preventDefault();
    if (userData.password.length < 6) {
      return alert("please type minimum 6 character long password");
    }
    register(userData);
    e.target.reset();
  };

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
          <form onSubmit={registerWithData}>
            <input
              disabled={status}
              onChange={getData}
              name="displayName"
              className="login-input"
              placeholder="Enter Your Name"
              required
              type="text"
            />
            <input
              disabled={status}
              onChange={getData}
              name="email"
              className="login-input"
              placeholder="Enter Your Email"
              required
              type="email"
            />
            <br />
            <input
              disabled={status}
              onChange={getData}
              name="password"
              className="login-input"
              placeholder="Enter Your Password"
              required
              type="password"
            />
            {user.displayName ? (
              <Link to="/home">
                <button className="success-btn">
                  Signup Success Back To Home
                </button>
              </Link>
            ) : (
              <>
                <button type="submit" className="login-btn">
                  SIGN UP
                </button>
                <p>-----------OR-----------</p>
                <Link to="/otp">
                  <button className="login-btn mt-0">WITH NUMBER</button>
                </Link>
                <p className="fw-light m-0">
                  By clicking “Sign Up” I agree to Terms of Conditions.
                </p>
                <p className="fw-light m-0">
                  Anready have an account?
                  <Link className="text-decoration-none" to="/login">
                    Sign In
                  </Link>
                </p>
              </>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
