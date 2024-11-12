/* eslint-disable no-unused-vars */

import React from "react";
import FirstV from "../components/eaosgame/FirstV";
import SecondColHeading from "../components/mining/SecondColHeading";
import Hero from "../components/home/hero";
import Backedgaming from "../components/mining/BackedBaming";
import dashImg from "../assets/images/mining/dashboard.png";
const Mining = () => {
  const slidesData = [
    {
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining+vid.mp4 ",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/slideimage1.png",
      h2Title: "Test Your Skills, Win Big with Loot Battle’s",
      h1Title: "Dominate the Battlefield",
      text: "Compete in nerve-wracking multiplayer battles. Battle Hash Token (BHT) is your ticket to enter. The best players win even more mining power! Defeat opponents, collect NFTs, and strengthen your future battles. ",
      para: "",
    },
    // {
    //   videoUrl:
    //     "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    //   imgUrl: Image2,
    //   h2Title: "Second H2 Title",
    //   h1Title: "Second H1 Title",
    //   text: "Second section content text goes here.",
    // },
    // {
    //   videoUrl:
    //     "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    //   imgUrl: Image,
    //   h2Title: "Third H2 Title",
    //   h1Title: "Third H1 Title",
    //   text: "Third section content text goes here.",
    // },
    // {
    //   videoUrl:
    //     "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    //   imgUrl: Image2,
    //   h2Title: "Fourth H2 Title",
    //   h1Title: "Fourth H1 Title",
    //   text: "Fourth section content text goes here.",
    // },
  ];
  return (
    <>
      <FirstV backShadow layer />
      <SecondColHeading
        layer
        h700
        firstImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining/mining2.png"
        backShadow
        h1="Start Earning Bitcoin, Effortlessly"
        h2="Unlock Mining Power with Every Land Plot"
        para="Own land, mine Bitcoin. Each plot grants between 6 and 12 TH/s of mining power, generating passive income over 3 years. With Battle Hash Tokens (BHT), you can participate in multiplayer events, boosting your rewards. Add your wallet, automate payouts, and watch your earnings grow—straight to your Bitcoin wallet."
      />
      <Hero
        lightLayer
        bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining+vid.mp4 "
        bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining/mining3.png"
        backShadow
        btnMining
        btnclassName={"xs:px-4 md:px-28 btn-primary"}
        btnicons={true}
        miningBtn="Go to LOOT BATTLE"
        // btn1="Go to LOOT BATTLE"
        firsth4="Design Your Character and Dominate the Game"
        firsth5="Choose
        Your Skills, Customize with Skins, and Control Your NFTs withComplete
        Freedom"
        p="Create your character and choose the skillset; collect
        skins, weapons, armor, potions, unique items, and many more. You, the
        gamer, have complete control over NFTS." // btn1={"Button"}
        // btnclassName={"px-28  btn-primary"}
        pclassName={"text-white mt-2"}
        flexrowreverse="flex-row-reverse"
        rowreverse
        // smallimage={AdminImage}
      >
        {/* <SwiperImg
          slidesData={slidesData}
          btnMining
          btnclassName={"px-28 btn-primary"}
        /> 
         <div className="h-lvh">
        <SwiperImg videoUrl slidesData={slidesData} btn={true} layer />
      </div>*/}
      </Hero>

      <SecondColHeading
        h700
        firstImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining/mining4.png"
        h1="Own Land, Earn Bitcoin"
        h2="3 years Bitcoin mining power earnings, guaranteed "
        // para="BHT (Battle Hash Token) allows players to participate in multiplayer events; players can win or lose BHT tokens to each other. 1 BHT equals 1 Gh/s of bitcoin mining power for a period of 3 years; after 3 years, the tokens are removed from circulation by a dedicated burning mechanism."
        // p2="For payouts, you can easily add your bitcoin wallet and select automated payments, or manual payments. The earnings will be paid directly to your wallet.  "
        btn={false}
        backShadow
      />
      <Hero
        mining
        layer
        h895
        bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining/mining5.png"
        bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/firstCarousell.mp4"
        btnicons={false}
        firsth4="Take Full Control of Your Mining"
        firsth5="Seamless Control, Real-Time Insights"
        p="Get total mastery over your mining operation with our powerful dashboard. From tracking your Bitcoin flow to forecasting future earnings, it’s all at your fingertips. Instant updates, easy management, and complete control—no fuss, just results."
        // btn1={"Button"}
        btnclassName={"xs:px-4 md:px-28 btn-primary"}
        pclassName="text-white mt-2"
        smallimage={dashImg}
        backShadow
      />
      <Backedgaming />
    </>
  );
};

export default Mining;
