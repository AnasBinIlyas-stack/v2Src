import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./collaboration.scss";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
function Collaboration() {
  gsap.registerPlugin(ScrollTrigger);

  const potentialRef = useRef(null);
  const leftpotentialRef = useRef(null);
  const rightpotentialRef = useRef(null);
  const potentialHeadRef = useRef(null);

  useEffect(() => {
    const container = potentialRef.current;
    const leftPotentialCard = leftpotentialRef.current;
    const rightPotentialCard = rightpotentialRef.current;
    const potentialHead = potentialHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftPotentialCard, { x: "-200%" });
      gsap.set(rightPotentialCard, { x: "200%" });
      gsap.set(potentialHead, { y: "200%" });

      // Animation

      gsap.to(potentialHead, {
        y: "0",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(leftPotentialCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightPotentialCard, {
        x: "0%",
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
    <section className="collaboration-sec">
      <div ref={potentialHeadRef}>
        <Heading
          mainhead={"Investment meet "}
          secondhead={`Unlock the Potential of Land Ownership in Elements of a Soul`}
          para={"Empower Your Gameplay, Maximize Your Returns"}
          class={"text-bit"}
        />
      </div>
      <div className="content" ref={potentialRef}>
        <div className="inner">
          <div className="right" ref={rightpotentialRef}>
            <p className="text-white text-inter fw-normal">
              Here's how it works: as a landowner, you have the privilege of
              inviting players to explore and engage with the resources on your
              land. And here's the exciting part — for every adventure they
              embark on, every loot they gather, you reap the benefits. When you
              sell the loot extracted from your land, these active gamers
              receive a generous 20% share of its value as a token of
              appreciation for their efforts. <br /> It's a win-win scenario:
              you leverage the collective power of a vibrant gaming community to
              enhance your gameplay experience, while active gamers earn rewards
              for their contributions.
            </p>
            <Secondarybtn btntext={"> economic alchemy"} />
          </div>
          <div className="left" ref={leftpotentialRef}>
            <img src="/assets/images/alchemy.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaboration;
