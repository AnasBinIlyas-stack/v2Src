import React from "react";
import card1 from "../../assets/images/pic1.png";
import card2 from "../../assets/images/pic2.png";
import card3 from "../../assets/images/pic3.png";
import card4 from "../../assets/images/pic4.png";
import card5 from "../../assets/images/pic5.png";

const CardComp = () => {
  const cardData = [
    {
      heading: "Land 1",
      Image: card1,
    },
    {
      heading: "Land 2",
      Image: card2,
    },
    {
      heading: "Land 3",
      Image: card3,
    },
    {
      heading: "Land 4",
      Image: card4,
    },
    {
      heading: "Land 5",
      Image: card5,
    },
  ];
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card xs:w-[200px] 3xl:w-[225px] 3xl:h-[153px] 2xl:h-[133px]"
        >
          <img src={card.Image} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </>
  );
};

export default CardComp;
