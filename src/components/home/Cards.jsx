import React from "react";
import Button from "../shared/button";
import BlackSectionFooter from "../shared/BlackSectionFooter";
import { useNavigate } from "react-router-dom";

const Cards = ({
  img,
  twovideoitems,
  firsth4,
  secondh4,
  n1,
  n2,
  n3,
  n4,
  warrior,
  Mage,
  Gunner,
  Ranger,
  backShadow,
  bgh4,
  characterPage,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navigate("/character");
    }, 800);
  };
  return (
    <>
      <div className="card_main relative bg-[#000818] min-h-dvh pt-40 pb-40">
        {/* <video
          src={
            "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
          }
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
        /> */}
        <div className="container relative flex items-center justify-center h-full">
          <div className="inner z-20 relative flex flex-col gap-4 items-center justify-center">
            {bgh4 && (
              <h1 className="color-mixture absolute top-[-20px] opacity-10">
                {bgh4}
              </h1>
            )}
            <h4 className="color-mixture">{firsth4}</h4>
            <h5 className="text-[#FAB863] max-w-[724px] text-center pb-10">
              {secondh4}{" "}
            </h5>
            <div
              className={`cards grid-cols-1 sm:grid-cols-2 grid lg10:grid-cols-4  justify-items-center gap-4  sm:flex-row pb-[49px] sm:gap-10 flex-wrap lg:flex-nowrap items-center justify-center`}
            >
              {/* first card */}
              {img ? (
                <div className="">
                  <div className="card hover:shadow-2xl  inline-flex bg-black  md:w-[300px] sm:h-[480px] lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  w-[300px] h-[528px]  flex-col justify-center items-center rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                    <img
                      src={warrior}
                      alt=""
                      className="w-full h-full max-h-[324px] max-w-[210px] object-cover border-none"
                      // style={{
                      //   backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio36.png")`,
                      //   backgroundSize: "cover",
                      //   backgroundPosition: "center",
                      // }}
                    />
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="card hover:shadow-2xl inline-flex bg-black  w-[300px] h-[480px] md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[300px]  lg:h-[428px] xl:h-[528px] flex-col justify-center items-center py-0 rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                    <video
                      src={warrior}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover border-none"
                      style={{
                        backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio36.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                  <h4 className="color-mixture text-center mt-7">{n1}</h4>
                </div>
              )}
              {/* second card */}
              {img ? (
                <div className="">
                  <div className="card hover:shadow-2xl  inline-flex bg-black w-[300px] h-[480px] md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  flex-col justify-center items-center  rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                    <img
                      src={Mage}
                      alt=""
                      className="w-full h-full max-w-[317px] max-h-[256px] object-cover border-none"
                      // style={{
                      //   backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio21.png")`,
                      //   backgroundSize: "cover",
                      //   backgroundPosition: "center",
                      // }}
                    />
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="card hover:shadow-2xl  inline-flex bg-white w-[300px] h-[480px] md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                    <video
                      src={Mage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover border-none"
                      style={{
                        backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio21.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                  <h4 className="color-mixture text-center mt-7">{n2}</h4>
                </div>
              )}
              {/* third card */}
              {twovideoitems ? (
                <></>
              ) : (
                <>
                  {img ? (
                    <div className="">
                      <div className="card hover:shadow-2xl  inline-flex bg-black w-[300px] h-[480px] md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  flex-col justify-center items-center  rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                        <img
                          src={Gunner}
                          alt=""
                          className=" w-full h-full max-w-[311px] max-h-[323px]  object-cover border-none"
                          // style={{
                          //   backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio21.png")`,
                          //   backgroundSize: "cover",
                          //   backgroundPosition: "center",
                          // }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="card hover:shadow-2xl  inline-flex bg-white  md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  w-[300px] h-[528px]  flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                        <video
                          src={Gunner}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute top-0 left-0 w-full h-full object-cover border-none"
                          // style={{
                          //   backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio21.png")`,
                          //   backgroundSize: "cover",
                          //   backgroundPosition: "center",
                          // }}
                        />
                      </div>
                      <h4 className="color-mixture text-center mt-7">{n3}</h4>
                    </div>
                  )}

                  {/* fourth card */}
                  {img ? (
                    <div className="">
                      <div className="card hover:shadow-2xl  inline-flex  bg-black  md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  w-[300px] h-[528px]  flex-col justify-center items-center  rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                        <img
                          src={Ranger}
                          alt=""
                          className="w-full h-full max-w-[232px] max-h-[361px]  object-cover border-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="card hover:shadow-2xl inline-flex  md:w-[300px] sm:h-[480px]  lg:w-[230px] xl:w-[318px]  lg:h-[428px] xl:h-[528px]  w-[300px] h-[528px]  flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-2xl relative overflow-hidden shadow-[0px_9px_22px_0px_rgba(190,37,246,0.22)]">
                        <video
                          src={Ranger}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute top-0 left-0 w-full h-full object-cover border-none"
                          style={{
                            backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio21.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>
                      <h4 className="color-mixture text-center mt-7">{n4}</h4>
                    </div>
                  )}
                </>
              )}
            </div>
            {characterPage ? (
              <a
                target="_blank"
                href="https://elementsofasoul.gitbook.io/elements-of-a-soul/eoas-mmorpg-game/gameplay-and-mechanics"
              >
                <Button
                  text={characterPage}
                  className="px-24 bg-white btn-primary "
                  icon="true"
                  onClick={handleClick}
                />
              </a>
            ) : (
              <Button
                text="Go to character page"
                className="xs:px-8 md:px-24 bg-white btn-primary "
                icon="true"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
        {backShadow && <BlackSectionFooter />}
        {/* shadows */}
        <div className="xs:hidden sm:block right-shadow absolute right-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
        <div className="xs:hidden sm:block left-shadow absolute left-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
      </div>
    </>
  );
};

export default Cards;
