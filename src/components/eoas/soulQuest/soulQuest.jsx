import React, { useEffect, useRef } from "react";
import "./soulQuest.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
const SoulQuest = () => {
  gsap.registerPlugin(ScrollTrigger);

  const soulRef = useRef(null);
  const leftSoulRef = useRef(null);
  const rightSoulRef = useRef(null);
  const centerSoulRef = useRef(null);
  // const hashHeadRef = useRef(null);

  useEffect(() => {
    const container = soulRef.current;
    const leftCard = leftSoulRef.current;
    const rightCard = rightSoulRef.current;
    const centerCard = centerSoulRef.current;
    // const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { y: "100%" });
      gsap.set(rightCard, { y: "100%" });
      // gsap.set(header, { y: "-90%", opacity: "0.3" });

      // Animation
      gsap.to(leftCard, {
        y: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(centerCard, {
        y: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightCard, {
        y: "0%",
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

  Aos.init();

  return (
    <div>
      <div className="soul-quest">
        <div className="content" ref={soulRef}>
          <div ref={leftSoulRef}>
            <img
              src="/assets/images/EOAS/diamond.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <h3 className="fw-bold textexpansiva-bold">Soul Quests</h3>
          <p
            className="text-white font-italic text-inter  text-center fw-normal"
            // ref={rightSoulRef}
          >
            Unfold in a dynamic virtual world, initiating with the player's
            arrival in Nova City, eager to become an outlaw. Amidst learning the
            city's ropes and engaging in tutorials, a mysterious shockwave
            prompts a series of quests leading the player into the wild lands to
            combat chaos spawns, rogue outlaws, and the elusive Legion. As
            battles escalate, the player discovers deeper secrets, battles
            formidable foes, and seeks to uncover the source of the shockwave.
            With each victory, new challenges emerge, pushing the player deeper
            into a sprawling adventure of discovery, combat, and alliance.
          </p>
        </div>
        <div className="back-div soul-left"></div>
        <div className="back-div soul-right"></div>
      </div>
    </div>
  );
};

export default SoulQuest;
