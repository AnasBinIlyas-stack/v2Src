import React from "react";
import "./nftmarketplace.scss";
import Nftmarketbanner from "./nftmarketbanner/nftmarketbanner";
import Mainnftcards from "./mainnftcards/mainnftcards";
import NftMarquee from "../../marketplace/marquee/marquee";
function Nftmarketplace() {
  return (
    <section className="nftmarketplace-sec">
      <Nftmarketbanner />
      <NftMarquee innertext={"ALERT Gaming earn you Bitcoin rewards ALERT"} />
      <Mainnftcards />
    </section>
  );
}

export default Nftmarketplace;
