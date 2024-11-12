import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./flatlands.scss";

const Flatlands = () => {
  gsap.registerPlugin(ScrollTrigger);
  const hashHeadRef = useRef(null);

  const ecotokenRef = useRef(null);
  const istRef = useRef(null);
  const secRef = useRef(null);
  const trdRef = useRef(null);
  const fthRef = useRef(null);
  const fvthRef = useRef(null);
  const sxthRef = useRef(null);
  const svthRef = useRef(null);

  useEffect(() => {
    const container = ecotokenRef.current;
    const ist = istRef.current;
    const sec = secRef.current;
    const trd = trdRef.current;
    const fth = fthRef.current;
    const fvth = fvthRef.current;
    const sxth = sxthRef.current;
    const svth = svthRef.current;
    const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(ist, { x: "200%" });
      gsap.set(sec, { x: "-200%" });
      gsap.set(trd, { x: "200%" });
      gsap.set(fth, { x: "-200%" });
      gsap.set(fvth, { x: "200%" });
      gsap.set(sxth, { x: "-200%" });
      gsap.set(svth, { x: "200%" });
      gsap.set(header, { y: "-90%", opacity: "0.3" });

      // Animation
      gsap.to(ist, {
        x: "0",
        duration: 1.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sec, {
        x: "0",
        duration: 1.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(trd, {
        x: "0",
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fth, {
        x: "0",
        duration: 1.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fvth, {
        x: "0",
        duration: 1.7,
        delay: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sxth, {
        x: "0",
        duration: 1.7,
        delay: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(svth, {
        x: "0",
        duration: 1.7,
        delay: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
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
      <div className="flatlands">
        <div className="content" ref={ecotokenRef}>
          <div className="top" ref={hashHeadRef}>
            <h3 className="secondary-text fw-bold text-center textexpansiva-bold  ">
              Unveiling the flatlands
            </h3>
            <p className="text-gold  font-italic large  fw-normal text-inter">
              Step into the enchanting realm of the Flatlands, where the
              ordinary transcends into the extraordinary. This mystical hub
              pulsates with ancient energies, beckoning adventurers to unlock
              its secrets and claim their destiny.
            </p>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src="/assets/images/EOAS/flatlands-robot.webp"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="right">
              <div className="challenge" ref={istRef}>
                <h4 className="fw-bold textexpansiva-bold text-white">
                  Harvest the Essence
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  Traverse the ethereal landscape and uncover hidden treasures
                  scattered amidst the mystical terrain. Each discovery holds
                  the promise of untold riches, waiting to be unearthed by those
                  brave enough to venture forth.
                </p>
              </div>

              <div className="gather " ref={secRef}>
                <h4 className="fw-bold textexpansiva-bold  text-end text-white">
                  Ascend to Greatness
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  Within the Flatlands, the very fabric of reality bends to your
                  will. Enhance your abilities and master arcane skills that
                  will shape your legend for eons to come.
                </p>
              </div>

              <div className="challenge" ref={trdRef}>
                <h4 className="fw-bold textexpansiva-bold   text-white">
                  Forge Your Empire
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  From humble beginnings, rise to greatness as you nurture your
                  city to prosperity. Complete sacred quests and harness the
                  latent power of the land to fuel your ascent.
                </p>
              </div>

              <div className="gather" ref={fthRef}>
                <h4 className="fw-bold textexpansiva-bold  text-end text-white">
                  Gather the Elements
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  Delve into the depths of the Flatlands and gather the
                  elemental essences that pulse beneath its surface. These
                  precious artifacts hold the key to unlocking your true
                  potential.
                </p>
              </div>

              <div className="challenge" ref={fvthRef}>
                <h4 className="fw-bold textexpansiva-bold   text-white">
                  Unite in Brotherhood
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  As you traverse the wilds and conquer the unknown, forge bonds
                  with fellow adventurers within the Guild Hall. Together, you
                  shall weave a tapestry of legend that echoes throughout the
                  ages.
                </p>
              </div>

              <div className="gather" ref={sxthRef}>
                <h4 className="fw-bold textexpansiva-bold text-end  text-white">
                  Commune with Spirits
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  Amidst the ancient groves and forgotten ruins, commune with
                  the spirits of old and unravel the mysteries of the past.
                  Their whispers shall guide your path and illuminate the
                  darkness that shrouds your destiny.
                </p>
              </div>

              <div className="challenge" ref={svthRef}>
                <h4 className="fw-bold textexpansiva-bold   text-white">
                  Embrace the Unknown
                </h4>
                <p className="fw-normal text-inter  font-italic large  text-white">
                  In the heart of the Flatlands, survival is not guaranteed.
                  Embrace the challenges that lie ahead, for it is through
                  adversity that heroes are forged and legends are born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flatlands;
