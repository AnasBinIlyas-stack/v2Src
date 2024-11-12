import React from "react";
import Navbar from "../../navbar/navbar";
import NftMarquee from "../../marquee/marquee";
import DiscordCards from "./loreCards/discordCards";
import Discordbanner from "./storybanner/discordbanner";
import Footer from "../../footer/footer";

const Discordpage = () => {
  return (
    <div>
      <Navbar />
      <Discordbanner />
      <NftMarquee innertext={"Community backed gameplay"} />
      <DiscordCards />
      {/* <Footer /> */}
    </div>
  );
};

export default Discordpage;
