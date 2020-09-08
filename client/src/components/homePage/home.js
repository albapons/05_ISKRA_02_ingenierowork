import React from "react";
import HomeHeader from "./home_header";
import HomeMethodology from "./home_methodology";
import HomeEspeciales from "./home_especiales";
import Sponsors from "../utils/sponsors";

export default function home() {
  return (
    <div>
      <HomeHeader />
      <HomeMethodology />
      <HomeEspeciales />
      <Sponsors />
    </div>
  );
}
