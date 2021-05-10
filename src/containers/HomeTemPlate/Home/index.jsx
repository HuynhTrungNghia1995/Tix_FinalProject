import React from "react";
import Application from "../../../components/Application";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import IntroFilm from "../../../components/IntroFilm";
import NavbarHome from "../../../components/NavbarHome";
import "./style.css";
import Schedule from "../../../components/Schedule";
import News from "../../../components/News";

export default function Home(props) {
  const handleBackToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="home">
      <NavbarHome />
      <Carousel />
      <IntroFilm />
      <Schedule />
      <News />
      <Application />
      <Footer />
      <span onClick={handleBackToTop} id="backtotop" className="backtotop">
        <i class="fa fa-angle-up"></i>
      </span>
    </div>
  );
}
