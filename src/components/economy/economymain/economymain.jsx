import React from "react";
import Economydao from "../economydao/economydao";
import Economycard from "../economycard/economycard";
import Bridging from "../bridging/bridging";
import Ecotoken from "../ecotoken/ecotoken";
import NftMarquee from "../../marquee/marquee";
import Economybanner from "../economybanner/economybanner";
import Economyheart from "../economyheart/economyheart";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";

function Economymain() {
  return (
    <div>
      <Navbar />
      <Economybanner />
      <NftMarquee innertext={"Unveil the sectrets "} />
      <Economyheart />
      {/* <Economydao /> */}
      <Ecotoken />
      <Economycard />
      <Bridging />
    </div>
  );
}

export default Economymain;
