import React from "react";
import FirstV from "../components/eaosgame/FirstV";
import VideoCarousel from "../components/eaosgame/VideoCarousel";
import Image from "../components/eaosgame/Image";
import Cards from "../components/home/Cards";
// import FifthSection from "../components/eaosgame/FifthSection";

import Hero from "../components/home/hero";

const EoasGame = () => {
  return (
    <>
      <>
        <Hero
          lightLayer
          eoasGBanner
          bgThumbnail=""
          bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/buildings.mp4"
          firsth4="Shape the Game’s Future with Land Ownership"
          firsth5="Earn, Build, and Control Your Assets"
          eoasG={true}
          backShadow
        />

        <VideoCarousel backShadow />
        <Image
          lightLayer
          layer
          bgThumbnail="https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio14.png"
          backShadow
          firsth4="Battle for Wealth and Glory"
          firsth5="Master Timing, Outsmart Rivals, Seize Rewards"
          para="In Element of Soul, combat is all about precision and strategy. Dodge, strike, and outmaneuver your opponents in fast-paced PVP battles where every move counts. Outsmart invaders, defend your resources, or raid enemy territories for high-stakes rewards. Skill and strategy define the victor—are you ready to rise to the challenge?"
        />
        <Cards
          bgh4
          firsth4="Character Classes"
          n1="Warrior"
          n2="Mage"
          n3="Gunner"
          n4="Ranger"
          warrior="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/warrior.mp4"
          Mage="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mage.mp4"
          Ranger="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ranger.mp4"
          Gunner="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/gunner.mp4"
          backShadow
        />

        {/* <FifthSection/> */}
        <Hero
          layer
          bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/walktthrough+landscape.mp4"
          bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/lastSecImg.jpg"
          firsth4={"Shape the Future, Control Assets, Earn Rewards"}
          firsth5={"Own Land, Earn Bitcoin, and Rule the Economy"}
          p={
            "OLand ownership in Element of Soul gives you the power to shape the game’s future. Develop your land, earn passive Bitcoin income, and command vital in-game resources. With full control over your assets, every land token unlocks 3 years of Bitcoin mining potential and the tools to build your empire."
          }
          ecoSystem={"Go to ECOSYSTEM "}
          btnclassName={"xs:px-10 lg:px-28  mt-0 pt-0 btn-primary"}
          pclassName={"text-white mt-2 max-w-96"}
          btnicon={"true"}
          smallvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/firstCarousell.mp4"
          eoasG={true}
          eoasShadow
        />
      </>
    </>
  );
};

export default EoasGame;
