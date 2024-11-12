import React from "react";
import SecondColHeading from "../components/mining/SecondColHeading";
import Cards from "../components/home/Cards";
import Land from "../components/home/Land";
import Hero from "../components/home/hero";

import SmallImagesCard from "../components/land/SmallImagesCard";
import FlipCards from "../components/land/FlipCards";
import CustomerCards from "../components/land/CustomerCards";

const LandPage = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/12.jpg",
    },
    {
      id: 2,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/13.jpg",
    },
    {
      id: 3,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/14.jpg",
    },
    {
      id: 4,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/15.jpg",
    },
    {
      id: 5,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/16.jpg",
    },
    {
      id: 6,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/17.jpg",
    },
    {
      id: 7,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/18.jpg",
    },
    {
      id: 8,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/19.jpg",
    },
    {
      id: 9,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/20.jpg",
    },
    {
      id: 10,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/21.jpg",
    },
    {
      id: 11,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/22.jpg",
    },
    {
      id: 12,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/23.jpg",
    },
    {
      id: 13,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/24.jpg",
    },
    {
      id: 14,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/25.jpg",
    },
    {
      id: 15,
      image:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/26.png",
    },
  ];

  return (
    <>
      <SecondColHeading
        landPage
        bgThumbnail="https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio11.png"
        //  https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/buildings.mp4"
        firstV="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0830.mp4 "
      />
      <CustomerCards boxShadow />
      <FlipCards bgThumbnail />
      <Land
        backShadow
        landPage
        firsth4="Turn Your Land into a Bitcoin Machine"
        firsth5="Earn, Trade, and Build Your Own Economy"
        para="Your land is your power. Harvest resources, generate passive Bitcoin, and trade valuable assets on the marketplace. 
        Invite others to manage or explore your land while you sit back and watch your profits grow. In Element of Soul, every plot is a goldmine waiting to be unlocked."
      />
      <Hero
        boxShadow
        // bgvideo={
        //   "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
        // }
      >
        <SmallImagesCard cards={cards} />
      </Hero>
      <Hero
        layer
        h700
        bgThumbnail={
          "https://drive.google.com/file/d/1Ph_N6ygyVTgJHHyBgdM_VjPGGb_QAFu3/view?usp=drive_link"
        }
        bgImg="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/LastSecBgLand.jpg"
        // bgvideo={
        //   "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
        // }
        btnicons={"true"}
        firsth4="Explore a Vast Open World Built by Players"
        firsth5="Every Building and Resource Has a Function, built on Collaboration"
        p={
          "In a soul’s wide open world, player-owned and game lands combine for an immersive experience. Each building and resource has a unique function, allowing upgrades and storage. In EOAS, collaborate by using your buildings to store others' resources for extra income."
        }
        landOwner={"GO TO LAND OWNERSHIP"}
        btnclassName={"xs:px-12 md:px-24 btn-primary"}
        pclassName={"text-white mt-2 max-w-96"}
        btnicon={"true"}
        smallvideo={
          "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0911.mp4"
        }
        smallThumb="https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/Video4.png"
        landPage
      />
    </>
  );
};

export default LandPage;
