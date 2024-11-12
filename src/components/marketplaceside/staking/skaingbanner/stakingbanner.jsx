import React from "react";
import "./stakingbanner.scss";
import Secondarybtn from "../../../secondarybtn/secondarybtn";
function Stakingbanner() {
  return (
    <section className="stakingbanner-sec">
      <div className="banner-inner">
        <h1 className="text-center textexpansiva-bold secondary-text">
          STAKING
        </h1>
        <div className="images-div">
          <img src="/assets/images/Staking/1.webp" alt="" />
          <img src="/assets/images/Staking/2.webp" alt="" />
          <img src="/assets/images/Staking/3.webp" alt="" />
        </div>
        <Secondarybtn
          btntext="> START STAKING"
          path={"/nftmarketplace/createnft"}
        />
      </div>
    </section>
  );
}

export default Stakingbanner;
