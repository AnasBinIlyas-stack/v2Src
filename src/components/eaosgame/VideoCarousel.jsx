/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Button from "../shared/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import { Autoplay } from "swiper/modules";

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

  const videoSources = [
    {
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/firstCarousell.mp4",
      title: "Novarian: A World Shaped by Players",
      subtitle: "Build Your Land, Master Your Skills, Conquer Your Enemies",
      description:
        "In Novarian, the world is yours to shape. Level up your land, dominate fierce PVE battles, and claim powerful resources. Whether you’re crafting rare items, perfecting your strategy, or rising through the ranks, every decision propels you toward greater rewards and influence. The future is yours to build—are you ready to take control?",
    },
    {
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/secondCarousel.mp4",
      title: "A Battlefield of Chaos and Opportunity",
      subtitle:
        "Kill Players, ClaimResources, and Discover Mysteries in This Brutal PVP and PVE Arena",
      description:
        "The Wildlands are large PVP and PVE biomes offering world events with regional chaos creatures and intense battles against other Outlaws. Kill other players and claim their resources or discover the mysteries of Nova and collect rare items and unique lore based abilities. Take on powerful religinal bosses for legendary rewards. Go for it alone or join forces with a team.",
    },
    {
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/eoasgame/thirdCarousel.mp4",
      title: "Join the Ultimate Chaos: Win Bitcoin and NFTs",
      subtitle:
        "Gather Loot, Outrun Your Enemies, Secure your items Race to the Moving Bank Before You're Taken Down",
      description:
        "The chaotic multiplayer event allows players to win or lose bitcoin mining power, collect NFT's, and gain experience points. NFTs and bitcoin are falling from the sky in a heavy meteor shower. Before someone kills and loots you, gather as much as you can and store it in the bank The funny part is that thebank moves randomly across the map.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index), // Update current slide index
  };

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="land bg-black relative">
      <div className="container">
        <div className="inner py-[98px] flex items-center lg10:justify-between xs:flex-col lg10:flex-row xs:gap-8">
          {/* Left side text that changes based on the current slide */}
          <div className="left z-50 flex flex-col gap-5 max-w-[420px] xs:items-center xs:text-center sm:text-start lg10:items-start">
            <h4 className="color-mixture">
              {videoSources[currentSlide].title}
            </h4>
            <h5 className="text-[#FAB863]">
              {videoSources[currentSlide].subtitle}
            </h5>
            <p className="pb-4 text-white lg:text-start">
              {videoSources[currentSlide].description}
            </p>
            <a
              target="_blank"
              href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-mmorpg-game/game-locations"
            >
              <Button
                text="Go to Game Locations"
                className="px-8 btn-primary"
                icon="true"
              />
            </a>
          </div>

          {/* Right side video carousel */}
          <div className="right xs:max-w-[300px] sm:max-w-[400px] md:max-w-[596px] xs:max-h-[600px] md:max-h-[796px] h-full">
            <Slider ref={sliderRef} {...settings}>
              {videoSources.map((data, index) => (
                <div
                  key={index}
                  className="video_carousel mt-10 flex items-center bg-slate-950 justify-center !max-h-[596px] rounded-3xl h-full w-full"
                >
                  {data.video ? (
                    <video
                      className="w-full !max-h-[396px] mt-24 h-full object-cover rounded-3xl"
                      src={data.video}
                      autoPlay
                      muted
                      loop={false} // Disable looping to allow autoplay to the next slide
                      playsInline
                      onEnded={handleVideoEnd} // Trigger the next slide on video end
                    />
                  ) : (
                    <img src={data.image} className="w-full h-full" alt="" />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <BlackSectionFooter />
      <div className="right-shadow xs:hidden sm:flex absolute right-0 top-12 bg-[#AD1AAF] opacity-50 filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
      <div className="left-shadow xs:hidden sm:flex absolute left-0 top-12 bg-[#AD1AAF] opacity-50 filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
    </div>
  );
};

export default VideoCarousel;
