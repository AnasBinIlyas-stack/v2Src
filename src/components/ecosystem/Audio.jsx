import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import CustomAudioPlayer from "./customAudio";
import VideosSection from "../story/VideosSection";

const Audio = ({ layer }) => {
  return (
    <>
      <div className="relative text-center xs:h-full sm:h-dvh w-full flex items-center justify-center">
        <video
          src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/0829(5).mp4 "
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
          style={{
            backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/Video2.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container  relative  h-full z-10">
          <div className="flex flex-col justify-center h-[70vh] items-center w-full gap-12">
            <h4 className="text-white color-mixture">
              Shape the Future of Gaming with EOAS
            </h4>
            <h5 className="text-[#FAB863]">
              Earn Bitcoin, Develop the Game, benefit from the economy’s and
              control your assets
            </h5>
          </div>
          <div className="flex justify-end ">
            <VideosSection
              videoCount={3}
              small1="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoCard1.png"
              small2="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoCard2.png"
              small3="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoCard3.png"
            />
          </div>
        </div>

        <div className="w-full top-0 left-0 h-full bg-LightShadow absolute z-0"></div>

        <BlackSectionFooter />
      </div>
    </>
  );
};

export default Audio;
