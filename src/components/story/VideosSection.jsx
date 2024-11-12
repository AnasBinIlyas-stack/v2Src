/* eslint-disable no-unused-vars */
import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";
// import smallV from "../../assets/videos/eoasGame/imageGame.mp4";
// import firstSlider from "../../assets/videos/background/mainBg.mp4";
const VideosSection = ({
  storySmallV,
  Showbackground,
  Showshadow,
  smallV1,
  smallV2,
  smallV3,
  smallV4,
  small1,
  small2,
  small3,
  video,
}) => {
  return (
    <div className="relative text-center h-full">
      {Showbackground && (
        <video
          src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining+vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="relative z-10 container flex items-end justify-center  h-full ">
        {storySmallV ? (
          <div className="flex items-center justify-center xl:gap-10 w-full xs:hidden sm:flex md:gap-2">
            <div className="flex-1 flex-wrap justify-center sm:h-[120px]  md:h-[140px] lg:h-[200px] rounded-xl overflow-hidden ">
              {video ? (
                <video
                  src={smallV1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" w-full h-full object-cover border-none"
                />
              ) : (
                <img
                  src={smallV1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 sm:h-[120px]  md:h-[140px] lg:h-[200px] rounded-xl overflow-hidden">
              {video ? (
                <video
                  src={smallV2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" w-full h-full object-cover border-none"
                />
              ) : (
                <img
                  src={smallV2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 sm:h-[120px] lg:sm:h-[120px]  md:h-[140px] lg:h-[200px] lg10:w-[355px] sm:w-[300px]  rounded-xl overflow-hidden">
              {video ? (
                <video
                  src={smallV3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover border-none"
                />
              ) : (
                <img
                  src={smallV3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 sm:h-[120px]  md:h-[140px] lg:h-[200px] lg10:w-[355px] sm:w-[300px]  rounded-xl overflow-hidden">
              {video ? (
                <video
                  src={smallV4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" w-full h-full object-cover border-none"
                />
              ) : (
                <img
                  src={smallV4}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-10 w-full ">
            <div className="flex-1 sm:h-[120px]  md:h-[140px] lg:h-[200px] rounded-xl overflow-hidden ">
              {/* <video
                src={smallV}
                autoPlay
                loop
                muted
                playsInline
                className=" w-full h-full object-cover border-none"
              /> */}
              <img
                src={small1}
                alt=""
                className="w-full h-full object-cover border-none"
              />
            </div>
            <div className="flex-1 sm:h-[120px]  md:h-[140px] lg:h-[200px] rounded-xl overflow-hidden">
              {/* <video
                src={smallV}
                autoPlay
                loop
                muted
                playsInline
                className=" w-full h-full object-cover border-none"
              /> */}
              <img
                src={small2}
                alt=""
                className="w-full h-full object-cover border-none"
              />
            </div>
            <div className="flex-1 sm:h-[120px]  md:h-[140px] lg:h-[200px] rounded-xl overflow-hidden">
              {/* <video
                src={smallV}
                autoPlay
                loop
                muted
                playsInline
                className=" w-full h-full object-cover border-none"
              /> */}
              <img
                src={small3}
                alt=""
                className="w-full h-full object-cover border-none"
              />
            </div>
          </div>
        )}
      </div>
      {Showshadow && <BlackSectionFooter />}
    </div>
  );
};

export default VideosSection;
