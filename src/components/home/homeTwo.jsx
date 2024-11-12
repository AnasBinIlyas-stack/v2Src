import React, { useEffect, useState } from "react";
import Hero from "../hero/hero";
import NftMarquee from "../marquee/marquee";
import Gamingslider from "../gamingslider/gamingslider";
import Launchingcards from "../launchingcards/launchingcards";
import Empowering from "../empowering/empowering";
import Generation from "../generation/generation";
import Hashcraft from "../hashcraft/hashcraft";
import Pvpslider from "../pvpslider/pvpslider";
import Collaboration from "../collaboration/collaboration";
import ElementTrader from "../elementtrader/elementTrader";
import Dao from "../Dao/Dao";
import Register from "../register/register";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import JoinUs from "../joinUs/joinUs";
import Ownership from "../ownership/ownership";

function HomeTwo() {
  return (
    <div className="home-sec">
      <Navbar />
      <Hero />
      <NftMarquee innertext={"ALERT Gaming earn you Bitcoin rewards ALERT"} />
      {/* <Gamingslider /> */}
      <Launchingcards />
      <Ownership />
      <Hashcraft />
      {/* <Pvpslider /> */}
      <Generation />
      {/* <Empowering />
      <Collaboration />
      <ElementTrader />
      <Dao /> */}
      {/* <Register /> */}
      <JoinUs />
    </div>
  );
}

export default HomeTwo;
