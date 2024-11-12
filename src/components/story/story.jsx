import React from "react";
import Storybanner from "./storybanner/storybanner";
import NftMarquee from "../marquee/marquee";
import Saga from "./saga/saga";
import Characteristics from "./characteristics/characteristics";
import Author from "./author/author";
import SoulGeneration from "./soulGeneration/soulGeneration";
import "./story.scss";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
function Story() {
  return (
    <section className="story-sec">
      <Navbar />
      <Storybanner />
      <NftMarquee innertext={"Embark on an Epic Adventure"} />
      <SoulGeneration />
      <Author />
      <Characteristics />
      <Saga />
    </section>
  );
}

export default Story;
