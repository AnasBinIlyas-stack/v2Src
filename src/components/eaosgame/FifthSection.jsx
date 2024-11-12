import React from "react";
import Button from "../shared/button";

const FifthSection = () => {
  return (
    <>
      <div className="relative bg-[#655c5c80]">
        <img src="" alt="" className="absolute left-0 top-0 object-cover" />
        <div className="relative container">
          <div className="inner py-[103px] flex  items-center lg10:justify-between  xs:flex-col lg10:flex-row  xs:gap-8">
            <div className="left flex flex-col gap-5 max-w-[420px] xs:items-center xs:text-center  lg10:items-start">
              <h2 className="text-white">H2 title</h2>
              <h1 className="text-white">H1 title</h1>
              <p className="pb-4 text-white lg:text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button
                text="Button"
                className="px-11 bg-white py-3 max-w-[154px]"
              />
            </div>
            <div className="right flex justify-center items-center">
              <video
                src=""
                autoPlay
                muted
                loop
                className="max-w-[679px] w-full object-cover h-full max-h-[382px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
