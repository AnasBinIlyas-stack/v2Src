import React from "react";
import Button from "../shared/button";
import BlackSectionFooter from "../shared/BlackSectionFooter";

const Cards = () => {
  return (
    <>
      <div className="card_main relative xs:h-full sm:h-dvh ">
        <video
          src={
            "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
          }
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover border-none"
        />
        <div className="container relative flex items-center justify-center  h-full">
          <div className="inner   flex flex-col gap-5 items-center justify-center  ">
            <h2 className="text-white color-mixture">h2 title</h2>
            <h1 className="text-white color-mixture">h1 title</h1>
            <div className="cards flex gap-4 pb-[49px]">
              <div className="card hover:shadow-2xl  inline-flex bg-white w-[318px] h-[528px] flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-md relative overflow-hidden">
                <video
                  src={
                    "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover border-none"
                />
              </div>
              <div className="card hover:shadow-2xl inline-flex bg-white w-[318px] h-[528px] flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-md relative overflow-hidden">
                <video
                  src={
                    "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover border-none"
                />
              </div>
              <div className="card hover:shadow-2xl inline-flex bg-white w-[318px] h-[528px] flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-md relative">
                <video
                  src={
                    "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover border-none"
                />
              </div>
              <div className="card hover:shadow-2xl inline-flex bg-white w-[318px] h-[528px] flex-col justify-center items-center   pl-2.5 pr-[11px] py-0 rounded-md relative overflow-hidden">
                <video
                  src={
                    "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover border-none"
                />
              </div>
            </div>
            <Button
              text="Button"
              className="px-24 bg-white btn-primary "
              icon="true"
            />
          </div>
        </div>
        <BlackSectionFooter />
      </div>
    </>
  );
};

export default Cards;
