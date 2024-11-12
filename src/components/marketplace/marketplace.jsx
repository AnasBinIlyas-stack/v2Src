import React from "react";
import Marketplacebanner from "./marketplacebanner/marketplacebanner";
import NftMarquee from "../marquee/marquee";
import Marketplacecontent from "./marketplacecontent/marketplacecontent";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Marketplace() {
  return (
    <section>
      <Navbar />
      <Marketplacebanner />
      <NftMarquee innertext={"Embark on an Epic Adventure"} />
      <Marketplacecontent />
    </section>
  );
}

export default Marketplace;
