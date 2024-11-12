import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./wildlands.scss";
import Heading from "../../../heading/heading";

const Recruitmentlands = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heartBoxRef = useRef(null);
  const heartRef = useRef(null);
  const boxOneRef = useRef(null);
  const boxSecRef = useRef(null);
  const boxTrdRef = useRef(null);
  const frthBoxRef = useRef(null);
  const fvthBoxRef = useRef(null);

  useEffect(() => {
    const container = heartBoxRef.current;
    const heart = heartRef.current;
    const ist = boxOneRef.current;
    const sec = boxSecRef.current;
    const trd = boxTrdRef.current;
    const frth = frthBoxRef.current;
    const fvth = fvthBoxRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(heart, { scale: "1.3" });
      gsap.set(ist, { x: "200%" });
      gsap.set(sec, { x: "-200%" });
      gsap.set(trd, { x: "200%" });
      gsap.set(frth, { x: "-200%" });
      gsap.set(fvth, { x: "200%" });

      // Animation
      gsap.to(heart, {
        scale: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(ist, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sec, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(trd, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(frth, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fvth, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
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
      <div className="recruitmentlands">
        <div className="top">
          <Heading
            // mainhead={"The Heart of competition"}
            secondhead={"Here's How It Works"}
            class={"text-bit"}
          />
        </div>
        <div className="content">
          <div className="bottom" ref={heartBoxRef}>
            <img
              src="/assets/images/EOAS/heart.webp"
              alt="..."
              ref={heartRef}
            />
            <div className="ist" ref={boxOneRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                A Win-Win Scenario
              </h4>
            </div>
            <div className="second" ref={boxSecRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Track Player Progress
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitmentlands;
