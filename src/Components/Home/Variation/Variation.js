import React from "react";
import { Container } from "react-bootstrap";
import "./Variation.css";

const Variation = () => {
  return (
    <div className="variation">
      <h1>It's time to change your mind</h1>
      <p>Download over 2 million humans .Get Small Apps free forever!</p>
      <p>We say you won’t look back.</p>
      <Container className="variation-btns text-center d-flex justify-content-center flex-wrap">
        <button>
          <i className="fab fa-apple"></i>IPHONE
        </button>
        <button>
          <i className="fab fa-android"></i>ANDROID
        </button>
        <button>
          <i className="fab fa-windows"></i>WINDOWS
        </button>
      </Container>
    </div>
  );
};

export default Variation;
