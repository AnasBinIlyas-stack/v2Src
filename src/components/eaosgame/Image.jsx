/* eslint-disable no-unused-vars */
import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";

0;
const Image = ({
  bgThumbnail,
  ecoImg,
  rowreverse,
  firsth4,
  firsth5,
  para,
  lightLayer,
  layer,
}) => {
  return (
    <>
      <div className="img_main bg-black relative">
        <img
          src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoThirsdSection.png"
          className="absolute top-0 left-0 opacity-60 w-full h-full object-cover border-none"
          alt=""
        />
        <div className="container relative z-50">
          <div
            className={`inner_img xs:pb-20 xs:flex-col xs:items-center xs:text-center sm:flex-row md:py-44 lg10:py-80 flex sm:justify-center sm:items-stretch   ${
              rowreverse ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`left overflow-hidden max-h-[558px] max-w-[543px] xs:min-h-52 xs:mt-20 xs:mb-5 sm:m-0 min-h-96  ${
                rowreverse ? "rounded-r-xl" : "rounded-l-xl"
              }  `}
              // style={
              //   bgThumbnail
              //     ? {
              //         backgroundImage: `url(${bgThumbnail})`,
              //         backgroundSize: "cover",
              //       }
              //     : {}
              // }
            >
              {/* <img
                src={cardImage}
                className="max-w-[408px]  h-full w-full object-cover"
                alt="img"
              /> */}
              {ecoImg ? (
                <img
                  src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoThirdInnerLeft.png"
                  alt=""
                  className="max-w-[408px]  h-full w-full object-cover"
                  style={{
                    backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/ecoThirdInnerLeft.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onPlay={(e) => (e.target.style.backgroundImage = "none")}
                />
              ) : (
                <video
                  src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/gameplay+mechanics.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-[408px]  h-full w-full object-cover"
                  style={{
                    backgroundImage: `url(${bgThumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onPlay={(e) => (e.target.style.backgroundImage = "none")}
                />
              )}
            </div>
            <div
              style={{ backgroundColor: "rgba(130, 70, 206, 0.30)" }}
              className={`right max-w-[650px] max-h-[558px]  min-h-96 w-full px-10 py-8 flex flex-col xs:justify-center lg:justify-start lg:text-start gap-5 ${
                rowreverse ? "rounded-l-xl" : "rounded-r-xl"
              } `}
            >
              <h4 className="color-mixture">{firsth4} </h4>
              <h5 className="text-[#FAB863]">{firsth5}</h5>
              <p className="text-white mt-4">{para}</p>
            </div>
          </div>
          THE ROLE OF NFT’s IN ELEMENTS OF A SOUL
        </div>
        {lightLayer && (
          <div className="w-full top-0 left-0 h-full bg-LightShadow  absolute z-0"></div>
        )}
        {layer && (
          <div className="w-full top-0 left-0 h-full bg-shadow absolute z-0"></div>
        )}
        <BlackSectionFooter />
      </div>
    </>
  );
};

export default Image;
