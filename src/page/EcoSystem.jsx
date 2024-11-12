import React from "react";
import Audio from "../components/ecosystem/Audio";
import SecondColHeading from "../components/mining/SecondColHeading";
import Swiper from "../components/home/Swiper";
import Hero from "../components/home/hero";
import SwiperImg from "../components/mining/SwiperImg";
import Image from "../components/eaosgame/Image";
import Land from "../components/home/Land";

const EcoSystem = () => {
  const slidesData = [
    {
      // videoUrl: firstV,
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/swiper/ecoFirstSwiper.png",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/eco4Swiper.png",
      h2Title: "start earning bitcoins passively ",
      h1Title:
        "Each land plot generates between 6 and 12 th/s of bitcoin mining power.",
      text: "BHT (Battle Hash Token) allows players to participate in multiplayer events; players can win or lose BHT tokens to each other. 1 BHT equals 1 Gh/s of bitcoin mining power for a period of 3 years; after 3 years, the tokens are removed from circulation by a dedicated burning mechanism.",
      para: "For payouts, you can easily add your bitcoin wallet and select automated payments, or manual payments. The earnings will be paid directly to your wallet.",
      btntext: "go to ecosystem",
    },
    {
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      bgImgUrl:
        " https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/swiper/ecoSecondSwiper.png",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/eco2swiper.png",
      h2Title: "The DAO",
      h1Title: "Decentralized Autonomous Organization",
      text: "Blockchain is an open public notebook that anyone can see and add to. Each page is a block holding digital agreements. These pages form a chain that can't be altered or erased, making it secure and reliable.",
      btntext: "go to dao",
    },
    {
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/swiper/ecoThirdSwiper.png",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/eco3Swiper.png",
      h2Title: "Blockchain",
      h1Title: "The Digital Notebook",
      text: "Smart Contracts are digital agreements that run automatically on the blockchain, ensuring everything happens as programmed—no middlemen required. ",
      btntext: "go to blockchain",
    },
    {
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/swiper/ecoFourthSwiper.png",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/eco4Swiper.png",
      h2Title: "Smart Contracts",
      h1Title: "Digital Agreements on Blockchain",
      text: "The 'EOAS' DAO offers gamers unique benefits: vote on and shape the game's future, control its economy, earn rewards, and make passive Bitcoin through battles with BTC mining power. Own in-game assets as NFTs (digital collectibles).",
      btntext: "go to nft",
    },
  ];
  return (
    <>
      <Audio />
      <SecondColHeading
        layer
        h700
        firstImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoSecondSec.png"
        h1="Difficult processes made easy"
        h2="Thanks to Blockchain you are in full control"
      />
      <Image
        ecoImg
        backShadow
        firsth4="Blockchain, Simplified"
        firsth5="Full Control with Just a Few Clicks"
        para="Take charge effortlessly. With Element of Soul's intuitive interface, integrating blockchain is as simple as it gets. Just a few clicks, and you're shaping the game, earning from the economy, and owning your in-game assets—all in your hands."
      />
      <div className="xs:h-full sm:h-lvh">
        <SwiperImg slidesData={slidesData} btn={true} layer />
      </div>

      <Land
        ecocard="ecocard"
        firsth4="The Heart of the Economy"
        firsth5="Multiple Tokens, Each with a Unique Role"
        para="Governance Tokens: Shape the future—vote on game development and burn tokens after decisions are made."
        para2="Battle Hash Tokens (BHT): Boost your Bitcoin mining power by competing in events. Burned after 3 years to maintain value."
        para3="Utility Tokens (EOS): Power your in-game activities. Earn revenue, share with players, and burn tokens to sustain the economy."
        para4="Reward Tokens:"
        para5="SHT: Earn through gameplay, craft rare NFTs, and burn after use."
        para6="SGT: Unlock rewards through guilds, craft NFTs, and burn to keep the ecosystem thriving."
      />
    </>
  );
};

export default EcoSystem;
