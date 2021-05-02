import React from "react";
import Application from "../../../components/Application";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";

export default function Home(props) {
  return (
    <div>
      <NavbarHome />
      <Application />
      <Footer />
    </div>
  );
}
