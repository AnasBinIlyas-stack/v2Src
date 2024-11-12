import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./rampage.scss";
import Secondarybtn from "../../secondarybtn/secondarybtn";
import Heading from "../../heading/heading";

const Rampage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rampageRef = useRef(null);
  const leftRampageRef = useRef(null);
  const rightRampageRef = useRef(null);
  const hashHeadRampageRef = useRef(null);

  useEffect(() => {
    const container = rampageRef.current;
    const leftCard = leftRampageRef.current;
    const rightCard = rightRampageRef.current;
    const header = hashHeadRampageRef.current;

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
    <div>
      <div className="rampage" ref={rampageRef}>
        <div className="top" ref={hashHeadRampageRef}>
          <Heading
            mainhead={"The Complete Rampage"}
            secondhead={"The Complete Rampage Element Of A LootBattle​"}
            para={
              "In our action-packed Loot Battle, 50 players converge on the flatlands, a small, volatile terrain teeming with coveted loot."
            }
            class={"text-bit"}
          />
        </div>
        <div className="content">
          <div className="bottom">
            <div className="left" ref={leftRampageRef}>
              {/* <img
                src="/assets/images/EOAS/rampage.webp"
                alt=""
                className="img-fluid"
              /> */}
              <video
                muted
                autoPlay
                loop
                playsInline
                src="/assets/videos/rampage-video.mp4"
              ></video>
            </div>
            <div className="right" ref={rightRampageRef}>
              <h4 className="fw-bold textexpansiva-bold text-white">
                Your mission:
              </h4>
              <p className="fw-normal text-inter font-italic text-white">
                amass as many treasures as possible while dodging rival players
                and deadly traps.
              </p>
              <h4 className="fw-bold textexpansiva-bold text-white">
                Strategize and Survive:
              </h4>
              <p className="fw-normal text-inter font-italic text-white">
                To secure your plunder, you must deposit it in the randomly
                stationed banks scattered across the map. But beware, every
                confrontation carries the risk of losing it all. With respawn
                times of just 60 seconds, redemption is within reach, allowing
                you to re-enter the fray and stake your claim once more. <br />{" "}
                This is no ordinary battle; it's a test of skill, strategy,
                gear and nerve. Will you rise to the challenge and emerge
                victorious, or will the flatlands claim you as yet another
                casualty? The choice is yours in 'Elements of a
                Soul's' adrenaline-fueled Loot Battle, beckoning adventurers to
                test their mettle and claim their fortune. Will you emerge
                victorious, or will your dreams be dashed upon the unforgiving
                shores of the flatlands? The choice is yours, but remember, in
                'Elements of a Soul,' only the strong survive.
              </p>
              {/* <Secondarybtn btntext={"> Secure your digital artifact"} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rampage;
