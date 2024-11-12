/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/home/hero";
import Cards from "../components/home/Cards";
import Land from "../components/home/Land";
import Avenger from "../components/home/Avenger";
import SwiperImg from "../components/mining/SwiperImg";

const HomePage = () => {
  const slidesData = [
    {
      bgThumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio18.png",
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining+banner.mp4",
      // imgUrl:
      //   "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mageSecSwiper.png",
      h2Title: "Earn Bitcoin While You Gaming",
      h1Title: "Bitcoin Mining Meets Epic MMORPG Gameplay",
      text: "Turn your gaming sessions into real-world rewards. Element of Soul guarantees 3 years of Bitcoin mining power as you play. Engage in multiplayer events to boost or reduce your mining power—every choice impacts your earnings. Are you ready for the next Bitcoin drop?",
      para: "",
      btntext: "go to Mining",
      btnlink: "/mining",
    },
    {
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0830.mp4",
      // imgUrl:
      //   "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/slideimage1.png",
      h2Title: "Shape Your Own MMORPG Legacy",
      h1Title: "Collect, Battle, Evolve earn",
      text: "Players explore a vast open world, create their own landscape, and engage in battle in MMORPG Adventures. Level up your land, character, skills, and robots. Collect gaming items like gear, resources, vehicles, and robots, and engage in quests.",
      btntext: "go to game",
      btnlink: "/eoasgame",
    },
    {
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/book+vid.mp4",
      // imgUrl:
      //   "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ranger.png",
      h2Title: "True power to gamers",
      h1Title: "Rich lore narratives in 4D audio",
      text: "Elements of a Soul (EOAS) is created with a passion for storytelling. EOAS offers immersive 4D audio story lore, complete novel series, audio books, and on top of that, limited edition books. Prepare to immerse yourself completely in the story",
      btntext: "go to story",
      btnlink: "/story",
    },
    {
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/community+vid.mp4",
      // imgUrl:
      //   "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/warrior.png",
      h2Title: "The soul of storytelling",
      h1Title: "Stake, earn, create and win",
      text: "Our community is part of the game, so both gamers and non-gamers benefit. Just by staking your free NFT avatar, you can join the economy and earn. You can also help create valuable game items and possibly find rare NFTs. Join now to get a free NFT avatar and more exciting prizes.",
      btntext: "go to character",
      btnlink: "/character",
      btnlink: "/character",
    },
  ];
  return (
    <>
      <Hero
        homeBanner
        layer
        bgThumbnail="https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/Video1.png"
        bgvideo={
          "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0826+(1)(1).mp4"
        }
        // flexrowreverse={"flex-row-reverse"}
        firsth1={"Evolve Beyond Gaming"}
        secondh2={"A New Era of Blockchain Adventure"}
        p={
          "Dive into a world where adventure, ownership, and real-world rewards collide. Element of Soul redefines MMORPGs—claim land, battle for glory, and mine Bitcoin as you explore an expansive universe driven by your choices. "
        }
        discordBtn={"Join Our Discord"}
        // btn2={"Button"}
        btnclassName={"px-9 btn-primary"}
        pclassName={"text-white text-[18px] line-height: 23px;"}
        f1className={"font-semibold"}
        backShadow
      />
      {/* <Hero backShadow> */}
      <div className="xs:h-full sm:h-lvh">
        <SwiperImg videoUrl slidesData={slidesData} btn={true} layer />
      </div>
      {/* </Hero> */}

      <Cards
        bgh4="Character classes"
        fi
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
      <Land
        layer
        bgThumb="https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio35.png"
        bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/walktthrough+landscape.mp4"
        homePage
        backShadow
        firsth4="Unlock Exclusive Landowner Benefits"
        firsth5="Earn Bitcoin, Shape the Economy, Invite Others"
        para="As a landowner in Element of Soul, you hold the key to major rewards. Earn a share of the economy’s turnover, mine Bitcoin passively, and control vital resources. Bring community members to your land, grow together, and play a pivotal role in shaping the game’s future."
      />
      <Avenger />
    </>
  );
};

export default HomePage;
