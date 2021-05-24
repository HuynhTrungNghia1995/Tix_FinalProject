import React from "react";
import { useLocation, useParams } from "react-router";
import FilmInfoBottom from "../../../components/FilmInfoBottom";
import FilmInfoTop from "../../../components/FilmInfoTop";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ScrollTopArrow from "../../../components/ScrollTopArrow";
import "./style.css";
export default function FilmDetail() {
  // const { film, filmList, idx } = useLocation().state;
  const dataPass = useLocation().state;
  const { film, filmList, idx } = dataPass;

  return (
    <div className="film-detail">
      <NavbarHome />
      <div className="filmDetailContent">
        <FilmInfoTop film={film} filmList={filmList} idx={idx} />
        <FilmInfoBottom film={film} />
      </div>
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}
