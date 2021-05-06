import React from "react";
import "./style.css";

export default function Carousel() {
  return (
    <section id="slider" className="slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ul className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/carousel-1.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block" />
          </div>
          <div className="carousel-item">
            <img
              src="./images/carousel-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <i className="fa fa-play" />
            </div>
            <div className="carousel-caption d-none d-md-block" />
          </div>
          <div className="carousel-item">
            <img
              src="./images/carousel-3.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <i className="fa fa-play" />
            </div>
            <div className="carousel-caption d-none d-md-block" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
