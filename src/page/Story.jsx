import React from "react";
import Hero from "../components/home/hero";
import Cards from "../components/home/Cards";
import Banner from "../components/story/Banner";

const Story = () => {
  return (
    <>
      <Banner video />
      <Hero
        layer
        bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/storySecondSectioBg.png"
        // btnicons={"true"}
        firsth4="Storytelling Reimagined"
        firsth5="A Visionary Tale That Immerses You Fully"
        p="Step into a world where narrative meets innovation. Element of Soul merges captivating storytelling with cutting-edge 4D audio, handcrafted by JM Roque da Silva-Jura Tenshi. Every chapter pulls you deeper into the mysteries of humanity, making your adventure truly unforgettable. "
        soundBtn={"Go to SOUNDCLOUD"}
        btnclassName={"xs:px-4 md:px-28 btn-primary"}
        pclassName={"text-white mt-2"}
        btnicon={true}
        flexrowreverse="flex-row-reverse"
        rowreverse={true}
        backShadow
      />
      <Hero
        // bgvideo={firstSlider}
        bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/story3erSectionBgFigma.png"
        btnicons={false}
        firsth4="A Glimmer of Hope in a Dying World"
        firsth5="AI, Blockchain, and Ancient Wisdom Unite to Rebuild Civilization"
        p="In a world shattered by war and nature’s fury, humanity teeters on the edge of extinction. Cities crumble, tensions rise, and society hangs by a thread. But from this chaos, hope flickers. With the help of AI, ancient knowledge, and blockchain technology, the remnants of civilization fight to rebuild. Element of Soul weaves this epic struggle into its novels and audiobooks, drawing you deeper into a world on the brink of rebirth."
        pclassName="text-white mt-2"
        btnicon={false}
        smallimage="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/thirdSecRImg.png"
        backShadow
        glimer
      />
      <Cards
        bgh4="CREATURES"
        firsth4="Creatures"
        img={true}
        secondh4="Forge Your Legacy: Shape Your Character and Hunt Legendary Creatures"
        warrior="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-10.gif "
        Mage="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-1.gif "
        Gunner="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-9.gif "
        Ranger="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Untitled-5.gif"
      />
    </>
  );
};
export default Story;
