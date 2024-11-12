import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";

import VideosSection from "../story/VideosSection";

const Banner = ({ video, storyBanner }) => {
  return (
    <>
      <div className="relative text-center xs:h-[50dvh] sm:h-dvh w-full flex items-center justify-center">
        <video
          src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/book+banner1.mp4 "
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
          style={{
            backgroundImage: `url(${"https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio5.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container  relative  h-full">
          <div className="flex justify-end absolute bottom-28">
            <VideosSection
              storySmallV
              smallV1="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/storyC1figma.png"
              smallV2="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/storyC2figma.png"
              smallV3="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/storyC3figma.png"
              smallV4="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/story/storyC4figma.png"
            />
          </div>
        </div>
        <BlackSectionFooter />
      </div>
    </>
  );
};

export default Banner;
