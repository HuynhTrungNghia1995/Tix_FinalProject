import React, { useState } from "react";
import "./style.css";
export default function DetailScheduleFilm(props) {
  const showTimesFilm = props.showTimesFilm;
  console.log(showTimesFilm);
  const [notExistFilmOfDay, setnotExistFilmOfDay] = useState(false);
  const clickButtonDay = (index) => {
    console.log(notExistFilmOfDay);
    return () => {
      if (index % 3 == 1) {
        setnotExistFilmOfDay(true);
      } else setnotExistFilmOfDay(false);
    };
  };
  const renderDay = (i, date, dayOfWeek) => {
    return (
      <li className="detail__listOfDay--item nav-item">
        <a
          className={i == 0 ? "nav-link active" : "nav-link"}
          onClick={clickButtonDay(i)}
          data-toggle="tab"
          role="tab"
          aria-selected="true"
        >
          <p className="dayOfWeek">
            {dayOfWeek != 0 ? `Thứ ${dayOfWeek + 1}` : "Chủ Nhật"}
          </p>
          <p className="date">{date}</p>
        </a>
      </li>
    );
  };
  const renderListOfDays = () => {
    const startDay = new Date(Date.now());
    let i = 0;
    let result = [];
    while (i < 14) {
      result.push(renderDay(i, startDay.getDate(), startDay.getDay()));
      startDay.setDate(startDay.getDate() + 1);
      i++;
    }
    return result;
  };
  const renderHeThongRap = () => {
    return showTimesFilm?.heThongRapChieu.map((cumRap, index) => {
      return (
        <div
          className={index == 0 ? "logo__wrapper active" : "logo__wrapper"}
          data-toggle="tab"
          role="tab"
          data-target={"#" + cumRap.maHeThongRap}
          aria-selected="true"
        >
          <div className="logo__detail">
            <img
              className="theaterList__image"
              src={cumRap.logo}
              alt={cumRap.tenHeThongRap}
            />
            <span className="tenHeThong">{cumRap.tenHeThongRap}</span>
            <span className="arrow" />
          </div>
        </div>
      );
    });
  };
  const xuLyLichChieu = (cumRap) => {
    if (cumRap.cumRapChieu.length == 0)
      return (
        <div className="alert alert-info">
          Hiện không có lịch chiếu trên hệ thống rạp này
        </div>
      );
    else if (notExistFilmOfDay)
      return (
        <div className="alert alert-danger">
          Hiện ngày này không có lịch chiếu
        </div>
      );

    return cumRap.cumRapChieu.map((rap, index) => {
      const subName = rap.tenCumRap.split("-");
      return (
        <div className="wrapper__collapse ">
          <div
            className="main__collapse"
            data-toggle="collapse"
            data-target={"#" + cumRap.maHeThongRap + rap.maCumRap}
          >
            <div className="cinema__details--item">
              <img
                className="theaterList__image"
                src="/images/bhd-star-bitexco-15379552241200.jpg"
                alt="cgv"
              />
              <div className="wrapInfo">
                <span className="chiNhanh">
                  <span className="tenRap CGV">{subName[0]}</span> -{" "}
                  {subName[1]}
                </span>
              </div>
            </div>
          </div>
          <div className="collapse" id={cumRap.maHeThongRap + rap.maCumRap}>
            <div className="pt-3 row content__collapse stack">
              <div className="col-12" style={{ padding: "0 15px" }}>
                2D Digital
              </div>
              <div className="col-12">
                <button className="btn btn-time">
                  <span className="start">8:10</span> ~ 10:20
                </button>
                <button className="btn btn-time">
                  <span className="start">13:10</span> ~ 15:20
                </button>

                <button className="btn btn-time">
                  <span className="start">16:10</span> ~ 20:30
                </button>
                <button className="btn btn-time">
                  <span className="start">20:10</span> ~ 22:10
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderLichChieuChiNhanh = () => {
    return showTimesFilm?.heThongRapChieu.map((cumRap, index) => {
      return (
        <div
          className={index == 0 ? "tab-pane fade active show" : "tab-pane fade"}
          id={cumRap.maHeThongRap}
        >
          {xuLyLichChieu(cumRap)}
        </div>
      );
    });
  };
  return (
    <div className="detailContentScheduleFilm">
      <div className="detailSchedule">
        <ul className="nav nav-tabs" id="tabListOfDay" role="tablist">
          {renderListOfDays()}
        </ul>

        <div className="nav detail__theater" role="tablist">
          {renderHeThongRap()}
        </div>

        <div className="detail__showList tab-content">
          {renderLichChieuChiNhanh()}
        </div>
      </div>
    </div>
  );
}
