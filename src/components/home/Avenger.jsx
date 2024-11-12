// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../shared/button";
import Logo from "../../assets/images/avengerlogo.png";

const Avenger = () => {
  return (
    <>
      <div className="avenger bg-black h-dvh flex items-center justify-center relative">
        <div className="container">
          <div className="xs:py-0 lg10:pt-10 lg:py-12 w-full flex flex-col items-center justify-center gap-4 ">
            <div className="z-40 w-full h-full max-w-[852px]  max-h-[323px]">
              <img
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/ecosystem/avengerNew.png"
                alt=""
                className="object-cover h-full w-full"
              />
              {/* <img
                src={Logo}
                alt=""
                className="absolute w-[93px] h-[89px] left-[44%] bottom-6"
              /> */}
            </div>
            <h4 className="color-mixture">Join Us On Discord</h4>
            <h5 className="text-[#FAB863]">
              Your Gateway to Exclusive Benefits
            </h5>
            <p className="text-white text-center mb-8 max-w-[483px]">
              Connect, collaborate, and stay ahead. Be part of the conversation
              that shapes Element of Soul.
            </p>
            <div className="xs:w-[260px] lg:w-[475px] h-[62px] rounded-[500px] flex justify-center items-center  bg-gradient-to-r from-fuchsia-600 to-sky-400 border-none">
              <a target="_blank" href="https://discord.com/invite/eoas">
                <Button
                  text="Go to Discord"
                  className="xs:w-[256px] lg:w-[471px] h-[58px] rounded-[500px]  bg-black"
                  icon="true"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Shadow Div */}
        <div className="xs:hidden md:block right-shadow absolute right-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
        <div className="xs:hidden md:block left-shadow absolute left-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
      </div>
    </>
  );
};

export default Avenger;
