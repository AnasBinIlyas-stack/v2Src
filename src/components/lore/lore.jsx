import React from "react";
import LoreBanner from "./banner/loreBanner";
import LoreCards from "./loreCards/loreCards";
import NftMarquee from "../marquee/marquee";
import "./lore.scss";
import Loresaga from "./loresaga/loresaga";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
const Lore = () => {
  return (
    <div className="lore-sec">
      <Navbar />
      <LoreBanner />
      <NftMarquee innertext={"Awaken the Epic Saga"} />
      <LoreCards />
      <Loresaga />
    </div>
  );
};

export default Lore;
