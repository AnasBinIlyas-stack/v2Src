import React from "react";
import Stakingbanner from "./skaingbanner/stakingbanner";
import Stakingcards from "./stakingcards/stakingcards";
import MapComponent from "../../../map/MapComponent";

function Staking() {
  return (
    <div>
      {/* <MapComponent /> */}
      <Stakingbanner />
      <Stakingcards />
    </div>
  );
}

export default Staking;
