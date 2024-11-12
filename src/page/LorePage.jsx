import React from "react";
import SecondColHeading from "../components/mining/SecondColHeading";
import Hero from "../components/home/hero";
import Image from "../components/eaosgame/Image";
import Avenger from "../components/home/Avenger";
import SmallImagesCard from "../components/land/SmallImagesCard";

const LorePage = () => {
  const firstImage =
    "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/land/fifteenImages/12.jpg";

  const cards = [
    { id: 1, image: firstImage },
    { id: 2, image: firstImage },
    { id: 3, image: firstImage },
    { id: 4, image: firstImage },
    { id: 5, image: firstImage },
    { id: 6, image: firstImage },
    { id: 7, image: firstImage },
    { id: 8, image: firstImage },
    { id: 9, image: firstImage },
    { id: 10, image: firstImage },
  ];
  return (
    <>
      <SecondColHeading firstV="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0826+(1)(1).mp4" />

      <Hero
        bgvideo={
          "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0826+(1)(1).mp4"
        }
        btnicons={"true"}
        secondh1="h1 Title"
        firsth2="h2 title"
        p={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btn1={"Button"}
        btnclassName={"px-28  btn-primary"}
        pclassName={"text-white mt-2   max-w-96"}
        btnicon={"true"}
        smallvideo={
          "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
        }
        flexrowreverse="flex-row-reverse"
      />
      <Image rowreverse="true" />
      <Hero
        bgvideo={
          "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
        }
      >
        <SmallImagesCard cards={cards} />
      </Hero>
      <Avenger />
    </>
  );
};

export default LorePage;
