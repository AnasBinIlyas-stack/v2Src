import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hashcraft.scss";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
function Hashcraft() {
  gsap.registerPlugin(ScrollTrigger);

  const gamingRef = useRef(null);
  const leftDetRef = useRef(null);
  const rightImgdRef = useRef(null);
  const hashHeadRef = useRef(null);

  useEffect(() => {
    const container = gamingRef.current;
    const leftCard = leftDetRef.current;
    const rightCard = rightImgdRef.current;
    const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });
      gsap.set(header, { y: "-90%", opacity: "0.3" });

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
    <section className="hashcraft-sec" ref={gamingRef}>
      <div ref={hashHeadRef}>
        <Heading
          mainhead={"Where Gaming Meets Bitcoin"}
          secondhead={"Where Gaming Meets Bitcoin"}
          para={"Unleash Your Adventure, Mine Your Fortune"}
          class={"text-bit"}
        />
      </div>
      <div className="inner">
        <div className="right" ref={leftDetRef}>
          {/* <h4 className="text-white text-expansiva fw-bold">
            Introducing HashCraft: Earn Bitcoin While You Play
          </h4> */}
          <p className="text-white text-inter fw-normal">
            Bitcoin mining intergrated in to the game play, earn passive income
            and have fun in the same time. Bitcoin miners get rewards in
            bitcoin, for verifying transaction on the Bitcoin network. <br />{" "}
            <br /> The amount of bitcoin you will receive is depending on your
            mining power. Miners make sure the network is secure and
            decentralized.
          </p>
          <Secondarybtn btntext={"> Play and earn BTC"} />
        </div>
        <div className="left" ref={rightImgdRef}>
          <img src="/assets/images/earnbitcoin.webp" alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Hashcraft;
