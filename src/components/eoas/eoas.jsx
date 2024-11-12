import React from "react";
import SoulQuest from "./soulQuest/soulQuest";
import Revolutionizing from "./revolutionizing/revolutionizing";
import Canon from "./canon/canon";
import Gamefi from "./gamefi/gamefi";
import Attack from "./attack/attack";
import Rampage from "./rampage/rampage";
import EoasBanner from "./eoasBanner/eoasBanner";
import Flatlands from "./flatlands/flatlands";
import Wildlands from "./wildlands/wildlands";
import NftMarquee from "../marquee/marquee";
import "./eoas.scss";
import Flats from "./flats/flats";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
const Eoas = () => {
  return (
    <div className="eoas-sec">
      <Navbar />
      <EoasBanner />
      <NftMarquee
        innertext={
          "The mystical journey 'Elements of a Soul,'/  you master magical realms, MMORPG adventure and mine Bitcoin. In an RPG adventure based blockchain technology."
        }
        display={"none"}
      />
      <Flats />
      {/* <Flatlands /> */}
      <Rampage />
      <Wildlands />
      <SoulQuest />
      <Revolutionizing />
      <Canon />
      <Attack />
      <Gamefi />
    </div>
  );
};

export default Eoas;
