import React from "react";
import Miningbanner from "../../mining/miningbanner/miningbanner";
import Mintednftbanner from "./mintednftbanner/mintednftbanner";
import Mintednftcards from "./mintednftcards/mintednftcards";

function Mintednfts() {
  return (
    <div>
      <Mintednftbanner />
      <Mintednftcards />
    </div>
  );
}

export default Mintednfts;
