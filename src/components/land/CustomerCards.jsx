import React from "react";
// import Pyroclast1 from "../../assets/videos/background/landBg.mp4";
// import Pyroclast2 from "../../assets/videos/background/homeBg.mp4";
// import Pyroclast3 from "../../assets/videos/landpage/cardV.mp4";
// import Pyroclast4 from "../../assets/videos/landpage/v1.mp4";
// import Pyroclast5 from "../../assets/videos/landpage/v1.mp4";
import Button from "../shared/button";
import BlackSectionFooter from "../shared/BlackSectionFooter";

const CustomerCards = ({ boxShadow }) => {
  const videos = [
    {
      h: "Bitvarian",
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Tier_05.mp4",
      thumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio29.png",
    },
    {
      h: "Etherian",
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/turntable+tier+1.mp4 ",
      thumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio30.png",
    },
    {
      h: "Hashburn",
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Tier_04+v2.mp4 ",
      thumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio28.png",
    },
    {
      h: "Solarian",
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Tier_03+V2.mp4",
      thumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio27.png",
    },
    {
      h: "Satoshian",
      video:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/Tier_02+V2.mp4",
      thumb:
        "https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio26.png",
    },
  ];

  return (
    <div className="cards xs:text-center xs:px-2 sm:px-0 sm:text-start relative bg-slate-900 flex flex-col justify-center items-center gap-4 py-40 overflow-hidden">
      <h4 className="color-mixture pb-12 z-40">
        Discover 5 Lands, Each with Exclusive Rewards
      </h4>
      <h5 className="text-[#FAB863] pb-20 z-40">
        Every Land Brings Its Own Resources and Passive Bitcoin Earnings
      </h5>
      <div className="flex gap-7 flex-wrap justify-center">
        {videos.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="w-[241px] min-h-[401px] bg-black rounded-2xl flex flex-col items-start">
              <video
                src={item.video}
                autoPlay
                muted
                playsInline
                loop
                className=" w-full h-full object-cover bg-black rounded-2xl"
                style={{
                  backgroundImage: `url(${item.thumb})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="w-[207px] color-mixture text-center m-auto">
              {item.h}
            </h5>
          </div>
        ))}
      </div>
      <Button
        text="GO TO MARKETPLACE"
        className="xs:px-12 sm:px-24 bg-white btn-primary mt-16"
        icon="true"
      />
      <BlackSectionFooter />
      {/* shadows */}
      {boxShadow && (
        <>
          <div className="right-shadow xs:hidden sm:flex absolute right-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
          <div className="left-shadow xs:hidden sm:flex absolute left-0 top-12 bg-[#AD1AAF] opacity-50  filter blur-[229.17px] w-[480px] h-[773px] z-0 overflow-hidden"></div>
        </>
      )}
    </div>
  );
};

export default CustomerCards;
