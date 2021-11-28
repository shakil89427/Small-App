import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../../images/Login/login.jpg";
import logo from "../../images/logo.png";
import useAuth from "../AuthProvider/useAuth";
import "./Common.css";

const Login = () => {
  const { user, signInUsingGoogle, emailsign } = useAuth();
  const [userData, setUserData] = useState();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (user.displayName) {
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

  const loginWithData = (e) => {
    e.preventDefault();
    emailsign(userData);
    e.target.reset();
  };
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col className="text-center" sm={12} md={6} lg={6}>
          <img className="img-fluid rounded" src={login} alt="" />
        </Col>
        <Col className="border rounded text-center" sm={12} md={6} lg={6}>
          <h1 className="mt-5">
            <img src={logo} alt="" />
          </h1>
          <h3 className="fw-light mt-5 pb-3 border-bottom w-75 mx-auto">
            Sign in to To Your Account
          </h3>
          <form onSubmit={loginWithData}>
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
            {user.email ? (
              <Link to="/home">
                <button className="success-btn">
                  Login Success Back To Home
                </button>
              </Link>
            ) : (
              <>
                <button type="submit" className="login-btn">
                  SIGN IN
                </button>
                <p>-----------OR-----------</p>
                <button onClick={signInUsingGoogle} className="login-btn mt-0">
                  GOOGLE SIGN IN
                </button>
                <p className="fw-light m-0">
                  Don't Have an account?{" "}
                  <Link className="text-decoration-none" to="/signup">
                    Sign Up
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
