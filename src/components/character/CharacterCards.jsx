import React from "react";
import Button from "../shared/button";
import BlackSectionFooter from "../shared/BlackSectionFooter";
// import Gif1 from "../../assets/images/character/gif1.gif";
// import Gif2 from "../../assets/images/character/gif2.gif";
// import Gif3 from "../../assets/images/character/gif3.gif";
// import Gif4 from "../../assets/images/character/gif4.gif";

const CharacterCards = ({ firsth4, firsth5, secondh4, secondh5 }) => {
  return (
    <>
      <div className="card_main relative bg-[#000818]  min-h-dvh">
        {/* <video
          src={
            "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
          }
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
        />  */}
        <div className="container z-10 relative flex items-center justify-center h-full pt-40 pb-20 ">
          <div className="inner flex flex-col gap-5 items-center justify-center mb-20">
            <h4 className="color-mixture">{firsth4}</h4>
            <h5 className="text-[#FAB863] max-w-[600px] text-center">
              {firsth5}
            </h5>
            <div
              className={`class="cards grid-cols-1 sm:grid-cols-2 grid lg10:grid-cols-4  justify-items-center gap-4  sm:flex-row pb-[49px] sm:gap-10 flex-wrap lg:flex-nowrap items-center justify-center"`}
            >
              <div className="lg10:mt-32">
                <div className="card hover:shadow-2xl  inline-flex bg-black xs:w-[300px] sm:w-[318px] lg:w-[250px] 3xl:w-[290px] xs:h-[400px]   lg:h-[480px] lg10:h-[528px]  flex-col justify-center items-center rounded-md relative overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/warrior.mp4"
                    alt=""
                    className="w-full h-[350px] object-cover border-none"
                  />
                </div>
                <p className="text-white color-mixture text-[24px] text-center mt-2 font-semibold">
                  Warrior
                </p>
              </div>
              <div className="">
                <div className="card hover:shadow-2xl inline-flex bg-black xs:w-[300px] sm:w-[318px] lg:w-[250px] 3xl:w-[290px] xs:h-[400px]   lg:h-[480px] lg10:h-[528px]  flex-col justify-center items-center rounded-md relative overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mage.mp4"
                    alt=""
                    className=" w-full h-[380px] object-cover border-none"
                  />
                </div>
                <p className="text-white color-mixture text-[24px] text-center mt-2 font-semibold">
                  Mage
                </p>
              </div>
              <div className="">
                <div className="card hover:shadow-2xl  inline-flex bg-black xs:w-[300px] sm:w-[318px] lg:w-[250px] 3xl:w-[290px] xs:h-[400px]   lg:h-[480px] lg10:h-[528px]  flex-col justify-center items-center rounded-md relative overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/gunner.mp4"
                    alt=""
                    className="w-full h-[380px] object-cover border-none"
                  />
                </div>
                <p className="text-white color-mixture text-[24px] text-center mt-2 font-semibold">
                  Gunner
                </p>
              </div>
              <div className="lg10:mt-32">
                <div className="card hover:shadow-2xl  inline-flex bg-black   xs:w-[300px] sm:w-[318px] lg:w-[250px] 3xl:w-[290px] xs:h-[400px]   lg:h-[480px] lg10:h-[528px]  flex-col justify-center object-cover items-center  rounded-md relative  ">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ranger.mp4"
                    alt=""
                    className="w-full h-[380px] object-cover border-none"
                  />
                </div>
                <p className="text-white color-mixture text-[24px] text-center mt-2 font-semibold">
                  Ranger
                </p>
              </div>

              <div className="absolute left-0 bottom-36 xs:hidden lg10:flex w-full gap-4 flex flex-col items-center justify-center">
                <h4 className="text-white color-mixture">{secondh4}</h4>
                <h5 className="text-[#FAB863] max-w-[600px] text-center">
                  {secondh5}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <BlackSectionFooter />
        {/* shadows */}
        <div className="right-shadow xs:hidden sm:flex absolute right-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
        <div className="left-shadow xs:hidden sm:flex absolute left-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
      </div>
    </>
  );
};

export default CharacterCards;
// height: 450px;
// width: 238px;
