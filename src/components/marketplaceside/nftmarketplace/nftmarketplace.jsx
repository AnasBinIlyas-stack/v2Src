import React from "react";
import "./nftmarketplace.scss";
import Nftmarketbanner from "./nftmarketbanner/nftmarketbanner";
import NftMarquee from "../../marquee/marquee";
import Mainnftcards from "./mainnftcards/mainnftcards";
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
