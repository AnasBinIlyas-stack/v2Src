import React from "react";
import "./gamefi.scss";
import Cardcomp from "../../cardcomp/cardcomp";

const Gamefi = () => {
  return (
    <div>
      <div className="gamefi">
        <Cardcomp
          heading={"Gamefi your full experience"}
          para={
            "Welcome to our Guild Forum, the central hub for adventurers seeking camaraderie and conquest. Here, players forge bonds and strategize for battle within their private guilds, scheduling epic clashes and recruiting new allies to their cause. But it's not just about the thrill of victory – it's about the rewards earned through Prestation Points, a token of recognition for your prowess in battle and dedication to the guild. With these points, you can choose drop packages for Guild vs. Guild battles or acquire unique NFTs, unlocking new realms of power and prestige. Gather your comrades and embark on a journey filled with triumph and glory. The battlefield beckons – will you heed the call and forge your legend?"
          }
        />
      </div>
    </div>
  );
};

export default Gamefi;
