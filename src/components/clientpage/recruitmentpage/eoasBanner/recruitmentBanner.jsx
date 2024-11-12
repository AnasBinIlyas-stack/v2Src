import React, { useEffect, useRef } from "react";
import "./eoasBanner.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RecruitmentBanner = () => {
  return (
    <div>
      <div className="recruitment-banner">
        <div className="content">
          <div className="left">
            <div className="left-inner">
              <img
                src="/assets/images/EOAS/banner1.webp"
                alt=""
                className="left-sword"
              />
              <img
                src="/assets/images/EOAS/banner2.webp"
                alt=""
                className="right-sword"
              />
            </div>
          </div>
          <div className="right">
            <h1 className="textexpansiva-bold text-center secondary-text fw-bold">
              Recruit your partner
            </h1>
            <div>
              <h5 className="text-bit text-center font-italic fw-semibold">
                collaborate and benefit together
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentBanner;
