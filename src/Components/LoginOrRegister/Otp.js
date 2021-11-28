import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";

const Otp = () => {
  const { user, auth, RecaptchaVerifier, signWithPhone } = useAuth();
  const [number, setNumber] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (user.displayName) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [user]);

  const captcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
        },
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    captcha();
    const phoneNumber = "+88" + number;
    const appVerifier = window.recaptchaVerifier;
    signWithPhone(phoneNumber, name, appVerifier);
  };

  return (
    <div className="container text-center my-5">
      <h1 className="text-center fw-light my-5">Register With Number</h1>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input
          className="login-input w-50"
          disabled={status}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="Enter Your Number"
          required
        />
        <br />
        <input
          className="login-input w-50"
          disabled={status}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          required
        />
        <br />
        {user.displayName ? (
          <Link to="/home">
            <button className="success-btn w-25">
              Signup Success Back To Home
            </button>
          </Link>
        ) : (
          <button className="login-btn w-25" type="submit">
            Send OTP
          </button>
        )}
      </form>
    </div>
  );
};

export default Otp;
