import React from "react";
import NftMarquee from "./marquee/marquee";
import Navbar from "../../navbar/navbar";
import NftFooter from "../../nftfooter/nftfooter";
import Mainbanner from "./storybanner/mainbanner";
import MainjoinUs from "./joinUs/mainjoinUs";
import Maincanon from "./canon/maincanon";
import Mainecotoken from "./ecotoken/mainecotoken";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Mainbanner />
      <NftMarquee innertext={"EOAS-Guild"} />
      <Maincanon />
      <MainjoinUs />
      <Mainecotoken />
      {/* <NftFooter /> */}
    </div>
  );
};

export default Mainpage;
