import React from "react";
import "./style.css";

export default function NavbarHome() {
  return (
    <header id="header" className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand ml-3 col-sm-10 col-md-2 col-lg-3 col-xl-4"
          href="#header"
        >
          <img src="./images/logo.png" target="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler col-sm-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse col-md-10 col-lg-9 col-xl-8"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav item-left col-md-7">
            <li className="nav-item">
              <a className="nav-link" href="#intro-film">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#header">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#header">
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#application">
                Ứng dụng
              </a>
            </li>
          </ul>
          <ul className="navbar-nav item-right col-md-5">
            <li className="nav-item login border-right">
              <a className="nav-link d-flex" href="#header">
                <i className="fa fa-user-circle user-icon" />
                <span className="mt-1 ml-1 px-1">Login</span>
              </a>
            </li>
            <li className="nav-item dropdown city-drop pl-1">
              <a
                className="nav-link dropdown-toggle"
                href="#header"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-map-marker mr-1 pt-1" />
                <span className>Hồ Chí Minh</span>
              </a>
              <div
                className="dropdown-menu mt-2 ml-4"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#header">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#header">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#header">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#header">
                  Hải Phòng
                </a>
                <a className="dropdown-item" href="#header">
                  Biên Hoà
                </a>
                <a className="dropdown-item" href="#header">
                  Nhà Trang
                </a>
                <a className="dropdown-item" href="#header">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#header">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#header">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#header">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#header">
                  Vũng Tàu
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
