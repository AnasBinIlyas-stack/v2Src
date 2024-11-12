import React, { useState } from "react";
import { Carousel } from "antd";
import SwiperImgData from "./SwiperImgData";
import BlackSectionFooter from "../shared/BlackSectionFooter";

const SwiperImg = ({ slidesData, btnMining, videoUrl, bgThumb, layer }) => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

  // Function to handle slide change
  const handleAfterChange = (current) => {
    setActiveSlide(current);
  };

  return (
    <div className="relative w-full h-full  sm:py-10 lg:py-0 overflow-hidden flex items-center">
      {/* Background video based on active slide */}
      {videoUrl
        ? slidesData[activeSlide]?.videoUrl && (
            <video
              src={slidesData[activeSlide].videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              style={{
                backgroundImage: `url(${bgThumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )
        : slidesData[activeSlide]?.bgImgUrl && (
            <img
              src={slidesData[activeSlide].bgImgUrl}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          )}
      {layer && (
        <div className="w-full top-0 left-0 h-full bg-shadow absolute"></div>
      )}
      <Carousel
        arrows={false}
        dotPosition="right"
        infinite={true}
        afterChange={handleAfterChange} // Set active slide on change
        // className="xs:mt-2 sm:mt-3 3xl:mt-28 z-20 m-auto"
        className="z-20 m-auto"
        autoplay={false}
        autoplaySpeed={100}
        loop={true}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="flex lg:h-full items-center justify-center min-h-[400px] xs:min-h-[300px] sm:min-h-[350px] sm:flex-row lg:min-h-[500px]"
          >
            {btnMining ? (
              <SwiperImgData
                imgUrl={slide.imgUrl}
                h2Title={slide.h2Title}
                h1Title={slide.h1Title}
                text={slide.text}
                para={slide.para}
                bgImgUrl={slide.bgImgUrl}
                btnEco
              />
            ) : (
              <SwiperImgData
                imgUrl={slide.imgUrl}
                h2Title={slide.h2Title}
                h1Title={slide.h1Title}
                text={slide.text}
                para={slide.para}
                btntext={slide.btntext}
                btnlink={slide.btnlink}
              />
            )}
          </div>
        ))}
      </Carousel>
      <BlackSectionFooter />
    </div>
  );
};

export default SwiperImg;
