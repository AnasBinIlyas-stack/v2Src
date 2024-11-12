import React from "react";

const SmallImagesCard = ({ cards }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 container ">
      {/* <h2 className="color-mixture">H2 Title</h2>
      <h1 className="color-mixture">H1 Title</h1> */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[243px] h-[243px]  rounded-xl overflow-hidden"
          >
            <img
              src={card.image}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallImagesCard;
