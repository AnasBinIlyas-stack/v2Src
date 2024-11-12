import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../heading/heading";
import "./flats.scss";
function Flats() {
  gsap.registerPlugin(ScrollTrigger);

  const brainBoxRef = useRef(null);
  const brainFlatRef = useRef(null);
  const flatOneRef = useRef(null);
  const flatSecRef = useRef(null);
  const flatTrdRef = useRef(null);
  const flatFrthRef = useRef(null);
  const flatFvthRef = useRef(null);
  const flatSixthRef = useRef(null);
  const flatSeventhRef = useRef(null);
  const flatheadRef = useRef(null);
  useEffect(() => {
    const container = brainBoxRef.current;
    const heart = brainFlatRef.current;
    const ist = flatOneRef.current;
    const sec = flatSecRef.current;
    const trd = flatTrdRef.current;
    const frth = flatFrthRef.current;
    const fvth = flatFvthRef.current;
    const sixth = flatSixthRef.current;
    const seventh = flatSeventhRef.current;
    const head = flatheadRef.current;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(heart, { scale: "1.3" });
      gsap.set(ist, { x: "200%" });
      gsap.set(sec, { x: "-200%" });
      gsap.set(trd, { x: "200%" });
      gsap.set(frth, { x: "-200%" });
      gsap.set(fvth, { x: "200%" });
      gsap.set(sixth, { x: "-200%" });
      gsap.set(seventh, { x: "200%" });
      gsap.set(head, { y: "-90%", opacity: "0.3" });
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
      gsap.to(sixth, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(seventh, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(head, {
        y: "0%",
        opacity: "1",
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
    <div>
      <div className="flats" ref={brainBoxRef}>
        <div className="top">
          <Heading
            mainhead={"Unveiling the flatlands"}
            secondhead={"Unveiling the flatlands"}
            para={
              "Step into the enchanting realm of the Flatlands, where the ordinary transcends into the extraordinary. This mystical hub pulsates with ancient energies, beckoning adventurers to unlock its secrets and claim their destiny."
            }
            class={"text-bit"}
          />
        </div>
        <div className="content">
          <div className="bottom">
            <img
              src="/assets/images/EOAS/flats.webp"
              alt="..."
              ref={brainFlatRef}
            />

            <div className="ist" ref={flatOneRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Harvest the Essence
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                Traverse the ethereal landscape and uncover hidden treasures
                scattered amidst the mystical terrain. Each discovery holds the
                promise of untold riches, waiting to be unearthed by those brave
                enough to venture forth.
              </p>
            </div>

            <div className="second" ref={flatSecRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Gather the Elements
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                Delve into the depths of the Flatlands and gather the elemental
                essences that pulse beneath its surface. These precious
                artifacts hold the key to unlocking your true potential.
              </p>
            </div>

            <div className="third" ref={flatTrdRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Ascend to Greatness
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                Within the Flatlands, the very fabric of reality bends to your
                will. Enhance your abilities and master arcane skills that will
                shape your legend for eons to come.
              </p>
            </div>

            <div className="forth" ref={flatFrthRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Unite in Brotherhood
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                As you traverse the wilds and conquer the unknown, forge bonds
                with fellow adventurers within the Guild Hall. Together, you
                shall weave a tapestry of legend that echoes throughout the
                ages.
              </p>
            </div>

            <div className="fifth" ref={flatFvthRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Forge Your Empire
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                From humble beginnings, rise to greatness as you nurture your
                city to prosperity. Complete sacred quests and harness the
                latent power of the land to fuel your ascent.
              </p>
            </div>

            <div className="sixth" ref={flatSixthRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Commune with Spirits
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                Amidst the ancient groves and forgotten ruins, commune with the
                spirits of old and unravel the mysteries of the past. Their
                whispers shall guide your path and illuminate the darkness that
                shrouds your destiny.
              </p>
            </div>

            <div className="seventh" ref={flatSeventhRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Embrace the Unknown
              </h4>
              <p className="text-white font-italic fw-normal text-inter small">
                In the heart of the Flatlands, survival is not guaranteed.
                Embrace the challenges that lie ahead, for it is through
                adversity that heroes are forged and legends are born.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flats;
