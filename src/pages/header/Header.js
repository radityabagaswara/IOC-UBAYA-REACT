import React from "react";
import "./Header.css";
import $ from "jquery";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";
import { Carousel } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <Carousel
          className="carousel-header"
          style={{ background: "rgba(0,0,0,1)" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ opacity: "0.8" }}
              src={slider1}
              alt="First slide"
            />
            <div className="car-heading">
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <p>Aute et et duis dolore non culpa culpa laborum id tempor.</p>
              <div className="btn btn-primary">CTA Button</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ opacity: "0.8" }}
              src={slider2}
              alt="Third slide"
            />
            <div className="car-heading">
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <p>
                Aute cillum ullamco elit enim magna aliquip consectetur
                incididunt consequat deserunt.
              </p>
              <div className="btn btn-primary">CTA Button</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ opacity: "0.8" }}
              src={slider3}
              alt="Third slide"
            />
            <div className="car-heading">
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <p>Elit labore in fugiat eiusmod sit et commodo eiusmod.</p>
              <div className="btn btn-primary">CTA Button</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
