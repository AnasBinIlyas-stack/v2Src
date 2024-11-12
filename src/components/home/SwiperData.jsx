import React from "react";
import Button from "../shared/button";

const SwiperData = ({ videoUrl, h2Title, h1Title, text }) => {
  return (
    <div className="relative swiper_slider bg-[#707070]">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full max-h-[603px] h-full object-cover"
      />
      <div className="relative  z-10 container">
        <div className="inner py-[103px] flex items-center lg10:justify-between xs:flex-col lg10:flex-row xs:gap-8">
          <div className="left text-white"> </div>
          <div className="right flex flex-col gap-5 max-w-[420px] xs:items-center xs:text-center lg10:text-start lg10:items-start">
            <h2 className="text-white">{h2Title}</h2>
            <h1 className="text-white">{h1Title}</h1>
            <p className="pb-4 text-white lg:text-start">{text}</p>
            <Button
              text="Button"
              className="px-11 bg-white py-3 max-w-[154px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperData;
