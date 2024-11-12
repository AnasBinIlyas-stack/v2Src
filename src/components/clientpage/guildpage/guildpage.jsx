import React from "react";
import Navbar from "../../navbar/navbar";
import Guildbanner from "./storybanner/guildbanner";
import NftMarquee from "../../marquee/marquee";
import Guildwildlands from "./wildlands/guildwildlands";
import Guildgamefi from "./gamefi/guildgamefi";
import Footer from "../../footer/footer";

const Guildpage = () => {
  return (
    <div>
      <Navbar />
      <Guildbanner />
      <NftMarquee innertext={"Launching soon"} />
      <Guildwildlands />
      <Guildgamefi />
      {/* <Footer /> */}
    </div>
  );
};

export default Guildpage;
