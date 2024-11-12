import React from "react";

import BlackSectionFooter from "../shared/BlackSectionFooter";
import Gif1 from "../../assets/images/character/gif1.gif";
import Gif2 from "../../assets/images/character/gif2.gif";
import Gif3 from "../../assets/images/character/gif3.gif";
import Gif4 from "../../assets/images/character/gif4.gif";

const TranslateCards = () => {
  return (
    <>
      <div className="card_main relative  h-dvh ">
        <video
          src={
            "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
          }
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
        />
        <div className="container relative flex items-center justify-center h-full">
          <div className="inner   flex flex-col gap-5 items-center justify-center ">
            
            <div className={`cards relative flex gap-4 `}>
            <div className="">
                  <div className="card  hover:shadow-2xl  inline-flex bg-black w-[318px] h-[528px] flex-col justify-center items-center   p-20 rounded-md relative overflow-hidden">
                    <img
                      src={Gif1}
                      alt=""
                      className=" w-full h-full object-cover border-none"
                    />
                  </div>
                  <p className="text-white color-mixture text-[36px] text-center mt-2 font-semibold">
                    Text-1
                  </p>
                </div>
                <div className="character-rotate-card">
                  <div className="card hover:shadow-2xl  inline-flex bg-black w-[318px] h-[528px] flex-col justify-center items-center   p-20 rounded-md relative overflow-hidden">
                    <img
                      src={Gif2}
                      alt=""
                      className=" w-full h-full object-cover border-none"
                    />
                  </div>
                  <p className="text-white color-mixture text-[36px] text-center mt-2 font-semibold">
                    Text-2
                  </p>
                </div>
                <div className="character-rotate-card">
                  <div className="card hover:shadow-2xl  inline-flex bg-black w-[318px] h-[528px] flex-col justify-center items-center   p-20 rounded-md relative overflow-hidden">
                    <img
                      src={Gif3}
                      alt=""
                      className=" w-full h-full object-cover border-none"
                    />
                  </div>
                  <p className="text-white color-mixture text-[36px] text-center mt-2 font-semibold">
                    Text-3
                  </p>
                </div>
                <div className="character-rotate-card">
                  <div className="card hover:shadow-2xl  inline-flex bg-black w-[318px] h-[528px] flex-col justify-center items-center   p-20 rounded-md relative overflow-hidden">
                    <img
                      src={Gif4}
                      alt=""
                      className=" w-full h-full object-cover border-none"
                    />
                  </div>
                  <p className="text-white color-mixture text-[36px] text-center mt-2 font-semibold">
                    Text-4
                  </p>
                </div>

                
            </div>
           
          </div>
        </div>
        <BlackSectionFooter />
      </div>
    </>
  );
};

export default TranslateCards;
