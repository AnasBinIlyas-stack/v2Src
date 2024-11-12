import React from "react";
import Sharedvalues from "./sharedvalues/sharedvalues";
import Bht from "./bht/bht";
import Miningbanner from "./miningbanner/miningbanner";
import NftMarquee from "../marquee/marquee";
import Backedgaming from "./backedgaming/backedgaming";
import "./mining.scss";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Mining() {
  return (
    <div className="mining-sec">
      <Navbar />
      <Miningbanner />
      <NftMarquee innertext={"Earn bitcoin while you conquer"} />
      <Bht />
      <Backedgaming />
      <Sharedvalues />
    </div>
  );
}

export default Mining;
