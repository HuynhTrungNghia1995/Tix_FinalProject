import React from "react";
import Application from "../../../components/Application";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import IntroFilm from "../../../components/IntroFilm";
import NavbarHome from "../../../components/NavbarHome";
import "./style.css";
import Schedule from "../../../components/Schedule";
// import ScrollTopArrow from "../../../components/ScrollTopArrow";
import News from "../../../components/News";

export default function Home(props) {
  return (
    <div className="home">
      <NavbarHome />
      <Carousel />
      <IntroFilm />
      <Schedule />
      <News />
      <Application />
      <Footer />
      {/* <ScrollTopArrow /> */}
    </div>
  );
}
