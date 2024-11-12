import React, { useRef } from "react";
import Button from "../shared/button";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import bgI from "../../assets/images/mining/dashboard.png";
import { useNavigate } from "react-router-dom";
const Hero = ({
  bgvideo,
  flexrowreverse,
  firsth1,
  secondh2,
  firsth4,
  secondh4,
  thirdh4,
  firsth5,
  p,
  btn1,
  btn2,
  btnclassName,
  pclassName,
  f1className,
  smallvideo,
  smallimage,
  smallimageLegs,
  btnicon,
  children,
  eoasG,
  landPage,
  backShadow,
  eoasShadow,
  rowreverse,
  btnicons,
  miningBtn,
  soundBtn,
  glimer,
  characterPage,
  bgThumbnail,
  boxShadow,
  landOwner,
  bgImg,
  h700,
  layer,
  smallThumb,
  homeBanner,
  lightLayer,
  ecoSystem,
  mining,
  eoasGBanner,
  discordBtn,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Navigate to the /ecosystem route after a short delay for the scroll
    setTimeout(() => navigate("/ecosystem"), 300);
  };

  return (
    <>
      <div
        className={`relative bg-[#000818] text-center xs:h-full py-10 2xl:h-dvh overflow-hidden ${
          h700 ? "max-h-[700px]" : ""
        }`}
      >
        {/* Background Video */}
        {bgImg ? (
          <img
            src={bgImg}
            className="absolute top-0 left-0 w-full h-full object-cover border-none"
            style={{
              backgroundImage: `url(${bgThumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <video
            src={bgvideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover border-none"
            style={{
              backgroundImage: `url(${bgThumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Content */}
        {children ? (
          <div className="z-10 relative flex items-center justify-center h-full">
            {children}
          </div>
        ) : (
          <div className="relative z-10 container h-full">
            <div
              className={`inner flex flex-col justify-center text-center lg:flex-row gap-8 lg:gap-[165px] xs:pt-24 xs:pb-12 lg-pt-0 ${
                homeBanner && "xs:justify-center"
              } justify-between items-center w-full h-full ${flexrowreverse} ${
                rowreverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Section - Text Content */}
              <div
                className={`left ${
                  smallimage ? "max-w-[510px]" : "max-w-[682px]"
                } ${soundBtn ? "max-w-[515px]" : "max-w-[682px]"} ${
                  glimer ? "!max-w-[515px]" : "max-w-[682px]"
                } ${eoasG ? "lg10:ps-28 w-full max-w-full" : ""} ${
                  eoasGBanner ? "m-auto  text-center max-w-[520px]" : ""
                }  ${landPage && "!max-w-[470px] !gap-1"} ${
                  characterPage ? "max-w-[511px]" : ""
                } flex flex-col items-start lg:items-start xs:items-center gap-4 text-left lg:text-left xs:text-center`}
              >
                {firsth1 && (
                  <h4 className="xs:pt-5 sm:pt-0 color-mixture text-3xl lg:text-6xl">
                    {firsth1}
                  </h4>
                )}
                {secondh2 && (
                  <h5
                    className={`${f1className} text-2xl pt-20 lg:text-4xl text-[#FAB863]`}
                  >
                    {secondh2}
                  </h5>
                )}
                {firsth4 && (
                  <h4 className="color-mixture text-[16px] lg:text-[20px] ">
                    {firsth4}
                  </h4>
                )}
                {secondh4 && (
                  <h4 className="text-[16px] lg:text-[20px] color-mixture">
                    {secondh4}
                  </h4>
                )}
                {thirdh4 && <h4 className="color-mixture">{thirdh4}</h4>}
                {firsth5 && (
                  <h5
                    className={`text-[#FAB863]  ${eoasGBanner ? "m-auto" : ""}`}
                  >
                    {firsth5}
                  </h5>
                )}
                {p && (
                  <p className={`${pclassName} pb-8 text-sm lg:text-base`}>
                    {p}
                  </p>
                )}
                {/* Buttons */}
                <div
                  className={`${
                    eoasG ? "pt-0" : "pt-6"
                  } btns flex flex-col lg:flex-row items-center gap-4 pt-6 `}
                >
                  {miningBtn && (
                    <a
                      target="_blank"
                      href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-mmorpg-game/gameplay-and-mechanics/loot-battle-mechanics"
                    >
                      <Button
                        text={miningBtn}
                        className={`w-full lg:w-auto ${btnclassName}`}
                        icon={btnicons}
                      />
                    </a>
                  )}
                  {soundBtn && (
                    <a
                      target="_blank"
                      href="https://soundcloud.com/elements-of-a-soul"
                    >
                      <Button
                        text={soundBtn}
                        className={`w-full lg:w-auto ${btnclassName}`}
                        icon={btnicons}
                      />
                    </a>
                  )}
                  {characterPage && (
                    <a
                      target="_blank"
                      href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-mmorpg-game/gameplay-and-mechanics"
                    >
                      <Button
                        text={characterPage}
                        className={`w-full lg:w-auto ${btnclassName}`}
                        icon={btnicons}
                      />
                    </a>
                  )}
                  {landOwner && (
                    <a
                      target="_blank"
                      href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-mmorpg-game/land-ownership/benefits-of-land-ownership"
                    >
                      <Button
                        text={landOwner}
                        className={`w-full lg:w-auto ${btnclassName}`}
                        icon={btnicons}
                      />
                    </a>
                  )}
                  {discordBtn && (
                    <a target="_blank" href="https://discord.com/invite/eoas">
                      <Button
                        text={discordBtn}
                        className={`w-full lg:w-auto ${btnclassName}`}
                        icon={btnicons}
                      />
                    </a>
                  )}
                  {btn1 && (
                    <Button
                      text={btn1}
                      className={`w-full lg:w-auto ${btnclassName}`}
                      icon={btnicon}
                    />
                  )}
                  {ecoSystem && (
                    <Button
                      text={ecoSystem}
                      className={`w-full lg:w-auto ${btnclassName}`}
                      icon={btnicon}
                      onClick={handleClick}
                    />
                  )}
                  {btn2 && (
                    <Button
                      text={btn2}
                      className={`w-full lg:w-auto ${btnclassName}`}
                      icon={btnicon}
                    />
                  )}
                </div>
              </div>

              {/* Right Section - Video/Image */}
              <div
                className={`right xs:max-w-[422px] ms:max-w-auto w-full lg:w-auto xl:w-full rounded-2xl flex justify-center items-center ${
                  eoasG
                    ? "xs:mb-24 mg:mb-0 w-[597px] max-h-[314px] flex justify-start items-center"
                    : ""
                }
                 ${eoasGBanner ? "hidden" : ""}
                ${
                  mining
                    ? "max-w-[589px] max-h-[366px] min-w-[330px] rounded-3xl"
                    : ""
                }
                ${characterPage ? "max-w-[392px]  max-h-[392px]" : " "} 
                ${
                  glimer
                    ? "w-full xs:max-w-[350px] md:max-w-[498px] h-full xs:max-h-[350px] lg:max-h-[498px] xs:mb-16 lg:pb-0 object-cover"
                    : "max-w-[682px]"
                } `}
              >
                {smallvideo && (
                  <video
                    src={smallvideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-2xl h-full max-h-80 lg:max-h-[498px] object-cover"
                    style={{
                      backgroundImage: `url(${smallThumb})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}

                {smallimage && (
                  <img
                    src={smallimage}
                    alt=""
                    className={`w-full rounded-2xl lg:w-[392px] h-full max-h-80 lg:max-h-[392px] object-cover 
                      ${
                        smallimageLegs
                          ? "xs:hidden lg10:flex lg10:min-w-[300px] xs:max-w-[200px] xs:max-h-[200px] sm:max-w-[300px] sm:max-h-[300px] lg:h-full lg:w-full  object-cover"
                          : ""
                      }
                      ${
                        mining
                          ? "h-full w-full  max-w-[589px] max-h-[366px] min-w-[340px] min-h-[200px] object-cover rounded-3xl"
                          : ""
                      }`}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div> */}

        {backShadow && <BlackSectionFooter />}
        {eoasShadow && (
          <div className=" ">
            <div
              className="absolute z-50 bottom-0 w-full h-28  bg-black"
              style={{ boxShadow: "0 0 20px 20px" }}
            />
          </div>
        )}
        {/* layer */}
        {layer && (
          <div className="w-full top-0 left-0 h-full bg-shadow absolute z-0"></div>
        )}
        {lightLayer && (
          <div className="w-full top-0 left-0 h-full bg-LightShadow  absolute z-0"></div>
        )}
        {/* shadows */}
        {boxShadow && (
          <>
            <div className="right-shadow xs:hidden sm:flex absolute right-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
            <div className="left-shadow xs:hidden sm:flex absolute left-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Hero;
