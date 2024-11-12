import React, { useState } from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";

const FirstV = ({ layer }) => {
  const [data, setData] = useState();
  return (
    <div className="relative">
      <video
        src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/mining+vid.mp4 "
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover max-h-[1024px] h-full"
        style={{
          backgroundImage: `url(${"https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio18.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {layer && (
        <div className="w-full top-0 left-0 h-full bg-shadow absolute z-0"></div>
      )}
      <BlackSectionFooter />
    </div>
  );
};

export default FirstV;
