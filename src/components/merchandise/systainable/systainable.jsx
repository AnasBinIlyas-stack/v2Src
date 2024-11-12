import React, { useEffect, useRef } from "react";
import "./systainable.scss";
import Heading from "../../heading/heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Systainable() {
  gsap.registerPlugin(ScrollTrigger);

  const systainableRef = useRef(null);
  const leftSystainableRef = useRef(null);
  const rightSystainableRef = useRef(null);
  // const hashHeadRef = useRef(null);

  useEffect(() => {
    const container = systainableRef.current;
    const leftCard = leftSystainableRef.current;
    const rightCard = rightSystainableRef.current;
    // const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });
      // gsap.set(header, { y: "-90%", opacity: "0.3" });

      // Animation
      gsap.to(leftCard, {
        x: "0%",
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
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);
  return (
    <section className="systainable-sec">
      <div ref={leftSystainableRef}>
        <Heading
          mainhead={"Sustainable and Ethically"}
          secondhead={"Sustainable and Ethically Sourced"}
        />
      </div>
      <div ref={systainableRef}>
        <div className="inner" ref={rightSystainableRef}>
          <img src="/assets/images/merchandise/systainable.webp" alt="" />
          <p className="text-white text-inter fw-normal text-center">
            Dive into the world of 'Elements of a Soul', an unparalleled AAA
            mobile action RPG that blends the adrenaline-pumping thrill of web3
            gaming with the innovative mechanics of crypto game achievements. As
            adventurers in the astral realms of 2137, you've mastered the art of
            combat, explored the vast open worlds, and left your mark in the
            heart-pounding PvP battle royales. Now, it's time to bring a piece
            of that adventure into your world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Systainable;
