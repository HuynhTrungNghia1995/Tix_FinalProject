import React from "react";
import FilmInfoBottom from "../../../components/FilmInfoBottom";
import FilmInfoTop from "../../../components/FilmInfoTop";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ScrollTopArrow from "../../../components/ScrollTopArrow";
import "./style.css";
export default function FilmDetail() {
  return (
    <div className="film-detail">
      <NavbarHome />
      <FilmInfoTop />
      <FilmInfoBottom />
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}
