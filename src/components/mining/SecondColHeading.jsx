import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import Button from "../shared/button";

const SecondColHeading = ({
  para,
  btn,
  backShadow,
  h1,
  h2,
  p2,
  btnclassName,
  firstImg,
  firstV,
  h700,
  layer,
  bgThumbnail,
  landPage,
}) => {
  return (
    <>
      <div
        className={`relative text-center xs:h-full sm:h-dvh w-full flex items-center justify-center ${
          h700 ? "max-h-[700px]" : ""
        }    
           
          `}
        style={
          firstV
            ? {
                backgroundImage: `url(${bgThumbnail})`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        {firstV ? (
          <video
            src={firstV}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover border-none"
          />
        ) : (
          <img
            src={firstImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover border-none"
          />
        )}
        <div className="container relative z-30">
          <div className=" flex flex-col justify-center items-center gap-8 w-full xs:my-24 sm:my-0">
            <h4 className="color-mixture">{h1} </h4>
            <h5 className="text-[#FAB863]"> {h2}</h5>

            <p className="text-white text-[16px] font-normal max-w-[100%] md:max-w-[1028px]  text-center mt-2">
              {para}
            </p>
            <p className="text-white text-[16px] font-normal max-w-[100%] md:max-w-[1028px]  text-center mt-2">
              {p2}
            </p>
            {btn && (
              <Button text={btn} className={btnclassName} icon={btnicon} />
              // <Button
              //   text="Button"
              //   className="btn-secondary px-24 mt-8 "
              //   icon="true"
              // />
            )}
          </div>
        </div>
        <BlackSectionFooter />
        {layer && (
          <div className="w-full top-0 left-0 h-full bg-shadow absolute z-10 "></div>
        )}
      </div>
    </>
  );
};

export default SecondColHeading;
