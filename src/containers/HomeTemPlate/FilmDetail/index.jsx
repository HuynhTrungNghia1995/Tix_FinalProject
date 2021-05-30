import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import FilmInfoBottom from "../../../components/FilmInfoBottom";
import FilmInfoTop from "../../../components/FilmInfoTop";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ScrollTopArrow from "../../../components/ScrollTopArrow";
import { fetchShowtimeFilm } from "../../AdminTemplate/ShowTimesManagement/modules/action";
import "./style.css";
export default function FilmDetail() {
  // const { film, filmList, idx } = useLocation().state;
  const dispatch = useDispatch();
  const dataPass = useLocation().state;
  const { film, filmList, idx } = dataPass;
  useEffect(() => {
    dispatch(fetchShowtimeFilm(film.maPhim));
  }, []);
  const showTimesFilm = useSelector((state) => state.fetchShowtimeReducer);
  return (
    <div className="film-detail">
      <NavbarHome />
      <div className="filmDetailContent">
        <FilmInfoTop film={film} filmList={filmList} idx={idx} />
        <FilmInfoBottom film={film} showTimesFilm={showTimesFilm.data} />
      </div>
      <Footer />
      <ScrollTopArrow />
    </div>
  );
}
