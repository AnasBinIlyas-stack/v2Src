import React from "react";
import Hero from "../components/home/hero";
import Cards from "../components/home/Cards";
import SwiperImg from "../components/mining/SwiperImg";
import CharacterCards from "../components/character/CharacterCards";

const CharacterPage = () => {
  const slidesData = [
    {
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterSwiper.png",
      videoUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0826+(1)(1).mp4",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterLeft.png",
      h2Title: "Unleash the Gunner: Precision Perfected",
      h1Title: "Crush Enemies Before They Blink",
      text: "Swift, lethal, and always two steps ahead. The Gunner's long-range strikes leave no room for error—pick off enemies from a distance, then vanish before they know what hit them. The battlefield is yours to control, with unmatched accuracy and speed.",
      para: "",
    },
    {
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterSwiper.png",
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mageSecSwiper.png",
      h2Title: "Master the Elements: Become a Mage",
      h1Title: "Control Fire, Ice, and Lightning",
      text: "Mystical forces, harnessing the elements and arcane knowledge to shape the battlefield. With the ability to control fire, ice, lightning, and other powerful spells, Mages dominate from a distance, using devastating attacks to obliterate enemies or manipulate the environment. ",
    },
    {
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterSwiper.png",
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ranger.png",
      h2Title: "Unleash Deadly Accuracy: Ranger",
      h1Title: "Master Long-Range Combat",
      text: "A master of precision, speed, and survival, excelling in ranged combat and tactical maneuvering. With unparalleled accuracy and the ability to strike from a distance, Rangers specialize in bows, crossbows, and traps to outsmart theirenemies",
    },
    {
      bgImgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterSwiper.png",
      videoUrl:
        "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
      imgUrl:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/warrior.png",
      h2Title: "Warriors: Unstoppable Frontline Force",
      h1Title: "Masters of Close Combat",
      text: "Warriors are fearless, heavily armed fighters, excelling in both offense and defense. With unmatched power and resilience, they dominate the frontlines in every battle.",
    },
  ];
  return (
    <>
      {/* <TranslateCards /> */}
      <CharacterCards
        secondh4="meet the characters"
        secondh5="Four Paths, One Destiny — The Choice Is Yours"
      />
      <div className="xs:h-full sm:h-lvh">
        <SwiperImg slidesData={slidesData} btn={"Button"} />
      </div>

      <Hero
        layer
        bgvideo="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/firstCarousell.mp4"
        // btnicons={true}
        firsth4="Create. Customize. Conquer"
        firsth5="Choose Your Skills, Customize with Skins, and Control Your NFTs "
        p="Sculpt your legend with total freedom. Equip killer skins, rare gear, and powerful weapons to stand out. From armor to NFT items, you own everything. Ready to take command? Build a character that dominates every battle and every marketplace."
        pclassName={"text-white mt-2  "}
        // smallimage="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/character/characterThirdRightShoes.png"
        characterPage
        smallimageLegs
      />
      <Cards
        // bgh4="Battle"
        img="true"
        firsth4="Battle Monsters, Control Your Fate"
        secondh4="Battle Legendary Creatures and Unleash the Power of Your Hero"
        warrior="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-10.gif"
        Mage="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-1.gif "
        Ranger="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-5.gif"
        Gunner="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-9.gif"
        characterPage="goto game play"
      />
    </>
  );
};

export default CharacterPage;
