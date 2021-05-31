import React from "react";
import AccountTicketsBooked from "../../../components/AccountTicketsBooked";
import Footer from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";

import "./style.css";

export default function UserAccountInfo() {
  return (
    <div class="userAccountInfo">
      <NavbarHome />
      <AccountTicketsBooked />
      <Footer />
    </div>
  );
}
