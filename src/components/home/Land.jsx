import React from "react";
import Button from "../shared/button";
import CardComp from "./cardComp";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import EcoCards from "../ecosystem/EcoCards";
import { useNavigate } from "react-router-dom";

const Land = ({
  ecocard,
  firsth4,
  firsth5,
  para,
  para2,
  para3,
  para4,
  para5,
  para6,
  backShadow,
  landPage,
  homePage,
  bgvideo,
  bgThumbnail,
  layer,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000818] swiper_slider land relative xs:h-full sm:h-dvh flex items-center justify-center">
      {bgvideo && (
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            backgroundImage: `url(${bgThumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      )}
      <div className="containe z-30 relative">
        <div className="inner px-5 py-[116px] xs:mb-10 xl:mb-0 flex items-center justify-between lg10:flex-row xs:flex-col gap-8">
          <div
            className={`${
              landPage
                ? "xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[455px]"
                : "lg:max-w-[528px] "
            } ${
              homePage
                ? "xs:max-w-[350px] sm:max-w-[400px] lg:max-w-[400px] lg10:max-w-[518px]"
                : "max-w-[708px]"
            } left flex flex-col gap-5 items-center lg:items-start`}
          >
            <h4 className="color-mixture text-center lg:text-left">
              {firsth4}
            </h4>
            <h5 className="text-[#FAB863] text-center lg:text-left">
              {firsth5}
            </h5>
            <p className="pb-4 text-white text-center lg:text-left">{para}</p>
            {para2 && (
              <p className="pb-4 text-white text-center lg:text-left">
                {para2}
              </p>
            )}
            {para3 && (
              <p className="pb-4 text-white text-center lg:text-left">
                {para3}
              </p>
            )}
            {para4 && (
              <p className="text-white text-center lg:text-left">{para4}</p>
            )}
            {para5 && (
              <p className="text-white text-center lg:text-left">{para5}</p>
            )}
            {para6 && (
              <p className="pb-4 text-white text-center lg:text-left">
                {para6}
              </p>
            )}
            <a
              target="_blank"
              href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-tokenomics"
            >
              <Button
                text="Go to Tokenomics"
                className="px-10 lg:px-28 bg-white btn-primary"
                icon="true"
              />
            </a>
          </div>
          {ecocard ? (
            <div className="right flex flex-wrap gap-2 w-full lg10:w-[600px] 3xl:w-[840px] items-center justify-center">
              {Array(1)
                .fill()
                .map((_, index) => (
                  <EcoCards key={index} />
                ))}
            </div>
          ) : (
            <div className="right flex flex-wrap gap-2 w-full lg10:w-[600px] 3xl:w-[840px] items-center justify-center">
              {Array(1)
                .fill()
                .map((_, index) => (
                  <CardComp key={index} />
                ))}
            </div>
          )}
        </div>
      </div>
      {layer && (
        <div className="w-full top-0 left-0 h-full bg-shadow z-10 absolute"></div>
      )}
      {backShadow && <BlackSectionFooter />}
      {/* Shadows */}
      {/* <div className="right-shadow absolute right-0 top-12 bg-[#AD1AAF] opacity-50 blur-[229.17px] w-[480px] h-[773px] z-0"></div>
      <div className="left-shadow absolute left-0 top-12 bg-[#AD1AAF] opacity-50 blur-[229.17px] w-[480px] h-[773px] z-0"></div> */}
    </div>
  );
};

export default Land;
