import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./canon.scss";
import Heading from "../../../heading/heading";
import Secondarybtn from "../../../secondarybtn/secondarybtn";

const Maincanon = () => {
  gsap.registerPlugin(ScrollTrigger);

  const canonRef = useRef(null);
  const leftCanonRef = useRef(null);
  const rightCanonRef = useRef(null);
  const hashHeadCanonRef = useRef(null);

  useEffect(() => {
    const container = canonRef.current;
    const leftCard = leftCanonRef.current;
    const rightCard = rightCanonRef.current;
    const header = hashHeadCanonRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { scale: "0" });
      gsap.set(rightCard, { x: "200%" });
      gsap.set(header, { y: "-90%", opacity: "0.3" });

      // Animation
      gsap.to(leftCard, {
        scale: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(header, {
        y: "0%",
        opacity: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);
  return (
    <div>
      <div className="canon" ref={canonRef}>
        <div className="top" ref={hashHeadCanonRef}>
          <Heading
            mainhead={"Community"}
            secondhead={"Community forged with gameplay"}
            // para={
            //   "The Game lore is the foundation of the world of EOAS; The players will shape it"
            // }
            class={"text-bit"}
          />
        </div>
        <div className="content">
          <div className="bottom">
            <div className="right" ref={rightCanonRef}>
              {/* <img
                src="/assets/images/cannon.webp"
                alt="..."
                className="cannon-sword"
              />
              <h4 className="fw-bold text-white textexpansiva-bold">
                The Saga of the White Canon Guild
              </h4> */}
              <p className="fw-normal text-white font-italic">
                The community is ingeniously woven into the gameplay. The
                community has the only privilege to create robots. Robots
                provide a huge value for the game players. They are assisting
                with battle’s, protection, transportation and many more.
              </p>
              <p className="text-bit fw-normal font-italic mt-42">
                as community member you will benefit from the full game economy.
              </p>
              <div className="mt-42">
                <Secondarybtn
                  btntext={"> Community forged with gameplay"}
                  // path={"/lore"}
                />
              </div>
            </div>
            <div className="left" ref={leftCanonRef}>
              <video autoPlay loop playsInline muted>
                <source src="/assets/videos/EOS2.mp4" type="video/mp4" />
              </video>
              {/* <img src="/assets/images/EOAS/cannon.webp" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="back-div cannon-left"></div>
        <div className="back-div cannon-right"></div>
      </div>
    </div>
  );
};

export default Maincanon;
