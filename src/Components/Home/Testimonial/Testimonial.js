import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man from "../../../images/testimonial/feature-testimonial-thumb.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className="testimonial-box bg-info mx-3 text-center m-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            maxime repudiandae alias culpa. Temporibus voluptatum recusandae
            corporis, quia voluptas eius error dolorum eos deleniti officia quam
            debitis optio est veritatis cum cupiditate deserunt dolorem nihil
            atque numquam voluptates delectus animi?
          </p>
          <img className="img-fluid mx-auto" src={man} alt="" />
          <p>Abraham Linkon</p>
        </div>
        <div className="testimonial-box bg-info m-3 text-center m-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            maxime repudiandae alias culpa. Temporibus voluptatum recusandae
            corporis, quia voluptas eius error dolorum eos deleniti officia quam
            debitis optio est veritatis cum cupiditate deserunt dolorem nihil
            atque numquam voluptates delectus animi?
          </p>
          <img className="img-fluid mx-auto" src={man} alt="" />
          <p>Abraham Linkon</p>
        </div>
        <div className="testimonial-box bg-info m-3 text-center m-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            maxime repudiandae alias culpa. Temporibus voluptatum recusandae
            corporis, quia voluptas eius error dolorum eos deleniti officia quam
            debitis optio est veritatis cum cupiditate deserunt dolorem nihil
            atque numquam voluptates delectus animi?
          </p>
          <img className="img-fluid mx-auto" src={man} alt="" />
          <p>Abraham Linkon</p>
        </div>
      </Slider>
    </Container>
  );
};

export default Testimonial;
