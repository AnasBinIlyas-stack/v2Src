import React from "react";
import "./merchandisecommunity.scss";
import Cardcomp from "../../cardcomp/cardcomp";
function Merchandisecommunity() {
  return (
    <section className="merchandisecommunity-sec">
      <div className="inner">
        <Cardcomp
          heading={"Join the Community"}
          para={
            "Becoming an owner of 'Elements of a Soul' merchandise is more than just a purchase; it's an initiation into a community of like-minded adventurers. Share your stories, showcase your gear, and be part of exclusive events that bring the game's lore to life."
          }
          question={"Ready to Equip?"}
          secondpara={
            "Explore our collection and find the gear that aligns with your soul. Every item is a portal to the realms you cherish, a token of your bravery, and a testament to the adventures yet to come."
          }
          author={"Dive deeper. Wear your adventure."}
          btntext={"> Experience saga"}
        />
      </div>
    </section>
  );
}

export default Merchandisecommunity;
