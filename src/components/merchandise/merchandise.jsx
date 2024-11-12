import React from "react";
import "./merchandise.scss";
import Merchandisebanner from "./merchandisebanner/merchandisebanner";
import NftMarquee from "../marquee/marquee";
import Saga from "../story/saga/saga";
import Merchandisecommunity from "./merchandisecommunity/merchandisecommunity";
import Merchandisesoul from "./merchandisesoul/merchandisesoul";
import Merchandisecollection from "./merchandisecollection/merchandisecollection";
import Gear from "./gear/gear";
import Systainable from "./systainable/systainable";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
function Merchandise() {
  return (
    <section className="merchandise-sec">
      <Navbar />
      <Merchandisebanner />
      <NftMarquee innertext={"Embark on an Epic Adventure"} />
      <div className="merchandise-content">
        <Merchandisesoul />
        <Merchandisecollection />
        <Gear />
        <Systainable />
        <Merchandisecommunity />
        <img
          src="/assets/images/merchandiesleft.webp"
          alt="..."
          className="left-back"
        />
        <img
          src="/assets/images/merchandiseright.webp"
          alt="..."
          className="right-back"
        />
      </div>
    </section>
  );
}

export default Merchandise;
