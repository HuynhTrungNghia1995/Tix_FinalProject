import { Link, NavLink } from "react-router-dom";
import React, { Fragment, useState } from "react";
import "./style.css";
import { Avatar, Button } from "@material-ui/core";

export default function NavbarHome() {
  const user = JSON.parse(localStorage.getItem("User"));
  const [render, setRender] = useState(false);

  const renderStatus = () => {
    if (user) {
      return (
        <Fragment>
          <li className="nav-item border-right user">
            <div className="nav-link d-flex">
              <Avatar src="https://i.pravatar.cc/32" alt="avatar" />
              <span className="mt-1 ml-1 px-1">{user.hoTen}</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link d-flex">
              <Button
                className="logout"
                onClick={() => {
                  localStorage.clear();
                  setRender(true);
                }}
              >
                Đăng Xuất
              </Button>
            </div>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item border-right">
            <NavLink className="nav-link d-flex" to="/login">
              <i className="fa fa-user-circle user-icon" />
              <span className="mt-1 ml-1 px-1">Đăng Nhập</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex" to="/register">
              <span className="mt-1 ml-1 px-1">Đăng Ký</span>
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <header id="header" className="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link
          className="navbar-brand ml-3 col-5 col-md-2 col-lg-3 col-xl-4"
          to="/"
        >
          <img src="./images/logo.png" target="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler col-1 mr-3"
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
              <a className="nav-link" href="#schedule">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#application">
                Ứng dụng
              </a>
            </li>
          </ul>
          <ul
            className="navbar-nav item-right col-md-5"
            style={{ justifyContent: "center" }}
          >
            {renderStatus()}
          </ul>
        </div>
      </nav>
    </header>
  );
}
