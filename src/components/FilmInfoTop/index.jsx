import React from "react";
import "./style.css";
export default function FilmInfoTop() {
  return (
    <div className="detailMainTop">
      <div className="styleBlur">
        <img
          src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16190592773054.jpg"
          alt=""
          className="posterLandscapeFilm"
        />
      </div>
      <div
        className="styleGradient"
        style={{
          background:
            "linear-gradient(to top, rgb(10, 32, 41), transparent 100%",
        }}
      ></div>
      <div className="detailMainInfo">
        <div className="col-sm-3 col-xs-4 filmPosterTop">
          <div
            className="row posterMain"
            style={{
              backgroundImage:
                "url('https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg'), url('./images/default-film.webp",
            }}
          >
            {" "}
            <button className="playTrailerDetail showHover">
              <img src="./images/play-video.png" alt="" />
            </button>
          </div>
        </div>
        <div className="col-sm-5 infoMain">
          <div>
            <span className="detailMainInfo1">30.4.2021</span>
            <br></br>
          </div>
          <div className="parentInfo2">
            <span className="detailMainInfo2">
              <span className="ageType ageType-general">P</span>
              <span>Trạng Tí Phiêu Lưu Ký</span>
            </span>
          </div>
          <div>
            <span className="detailMainInfo1">
              100 phút - 0 IMDb - 2D/Digital
            </span>
            <br />
          </div>
        </div>
        <div className="col-sm-2 circleStar">
          <div className="c100 p62" id="circlePercent">
            <div className="circleBorder"></div>
            <span>6.2</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>

          <div className="row star" id="starMain" style={{ marginTop: 10 }}>
            <img className="smallStar" src="./images/star1.png" alt="" />
            <img className="smallStar" src="./images/star1.png" alt="" />
            <img className="smallStar" src="./images/star1.png" alt="" />
            <img className="halfStar" src="./images/star1.2.png" alt="" />
          </div>
          <div className="row star">
            <span className="detailMainInfo1" style={{ marginTop: 10 }}>
              160 người đánh giá
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
