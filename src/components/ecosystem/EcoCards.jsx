import React from "react";

const EcoCards = () => {
  const cardData = [
    {
      heading: "Land 1",
      Image: "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/m1.png",
    },
    {
      heading: "Land 2",
      Image: "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/m2.png",
    },
    {
      heading: "Land 3",
      Image: "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/m3.png",
    },
    {
      heading: "Land 4",
      Image: "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/m4.png",
    },
  ];
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card w-[35%] flex justify-center items-center "
        >
          <img src={card.Image} alt="" className=" w-[210px] object-cover" />
        </div>
      ))}
    </>
  );
};

export default EcoCards;
