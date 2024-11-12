import React, { useEffect, useRef } from "react";
import "./eoasBanner.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EoasBanner = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // const eoasRef = useRef(null);
  // const leftEoasRef = useRef(null);
  // const rightEoasRef = useRef(null);
  // const hashHeadRef = useRef(null);

  // useEffect(() => {
  //   const container = eoasRef.current;
  //   const leftCard = leftEoasRef.current;
  //   const rightCard = rightEoasRef.current;
  //   // const header = hashHeadRef.current;

  //   const mm = gsap.matchMedia();

  //   mm.add("(min-width: 768px)", () => {
  //     // Initial position of the cards
  //     gsap.set(leftCard, { x: "-200%" });
  //     gsap.set(rightCard, { x: "200%" });
  //     // gsap.set(header, { y: "-90%", opacity: "0.3" });

  //     // Animation
  //     gsap.to(leftCard, {
  //       x: "0%",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "40% 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     gsap.to(rightCard, {
  //       x: "0%",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "40% 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });
  //   });

  //   return () => {
  //     mm.revert(); // Clean up the matchMedia
  //   };
  // }, []);
  return (
    <div>
      <div className="eoas-banner">
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
            {/* <img
              src="/assets/images/eos-banner.webp"
              alt=""
              className="img-fluid girl"
            /> */}
            {/* <img
              src="/assets/images/EOAS/right-sword.png"
              alt=""
              className="img-fluid right-sword"
            /> */}
          </div>
          <div className="right">
            <h1 className="textexpansiva-bold secondary-text fw-bold">
              EOAS MMORPG
            </h1>
            <div>
              <h5 className="text-bit text-center font-italic fw-semibold">
                The Heart of 'Elements of a Soul' Gameplay
              </h5>
              <h5 className="text-bit text-center font-italic fw-semibold">
                Experience the next era of web3 gaming with EOAS
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EoasBanner;
