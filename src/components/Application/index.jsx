import React from "react";
import "./style.css";
import Slider from "react-slick";

export default function Application() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  return (
    <section
      id="application"
      className="application"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/backapp.jpg"
        })`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left">
            <h1>
              Ứng dụng tiện lợi dành cho <br />
              người yêu điện ảnh
            </h1>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="btn d-block">App miễn phí - Tải về ngay</button>
            <span className="d-block">
              TIX có hai phiên bản <a href="#header">iOS</a> &amp;
              <a href="#header">Android</a>
            </span>
          </div>
          <div className="col-lg-6 right p-0">
            <div className="phone w-50 mx-auto">
              <img
                className="d-block w-100"
                src="./images/mobile.png"
                alt="mobile"
              />
              <Slider {...settings} className="slick__slider">
                <div className="item">
                  <img src="./images/slide1.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide2.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide3.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide4.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide5.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide6.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide7.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide8.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide9.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide10.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide11.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide12.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide13.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide14.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide15.jpg" alt="slide" />
                </div>
                <div className="item">
                  <img src="./images/slide16.jpg" alt="slide" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
