import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
function Ownership() {
  gsap.registerPlugin(ScrollTrigger);

  const eownershipRef = useRef(null);
  const leftDetRef = useRef(null);
  const rightImgdRef = useRef(null);

  useEffect(() => {
    const container = eownershipRef.current;
    const leftCard = leftDetRef.current;
    const rightCard = rightImgdRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });

      // Animation
      gsap.to(leftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightCard, {
        x: "0%",
        duration: 1,
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
    <section className="generation-sec" ref={eownershipRef}>
      <Heading
        mainhead={"Investment meet"}
        secondhead={`A Blockchain Mmorpg advenure`}
        para={"Empower Your Gameplay, Maximize Your Returns"}
        class={"text-bit"}
      />
      <div className="inner">
        <div
          className="right"
          ref={rightImgdRef}
          style={{ mixBlendMode: "plus-lighter" }}
        >
          {/* <img src="/assets/images/generation.webp" alt="..." /> */}
          <video autoPlay loop playsInline muted>
            <source src="/assets/videos/EOS2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="left" ref={leftDetRef}>
          <p className="text-white text-inter fw-normal">
            PVE and PVP MMORPG elements of a soul. A wide large open world
            created out of player owned landscapes, community owned landscapes
            and gameplay landscapes.  level up your structures, character,
            skills and robot’s. collect gaming items like gear, resources,
            weapons, battle chips, robots and many more. <br /> Craft your
            valuable items, engage in quests.
            {""} Comprehensive balanced gaming mechanics, sophisticated economy
            fully controlled by the players. Secure and in full control of your
            assets thanks to blockchain. Created with a passion for gaming,
            cryptocurrency and storytelling.
          </p>
          <Secondarybtn btntext={"> EOAS GAME"} path={"/eoas_game"} />
        </div>
      </div>
    </section>
  );
}

export default Ownership;
