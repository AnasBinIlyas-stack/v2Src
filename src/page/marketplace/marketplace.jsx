import React from "react";
import Marketplacebanner from "./marketplacebanner/marketplacebanner";
import Marketplacecontent from "./marketplacecontent/marketplacecontent";
import NftMarquee from "./marquee/marquee";

function Marketplace() {
  return (
    <section className="bg-black">
      {/* <Navbar /> */}
      <Marketplacebanner />
      <NftMarquee innertext={"Embark on an Epic Adventure"} />
      <Marketplacecontent />
    </section>
  );
}

export default Marketplace;
