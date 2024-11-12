import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../heading/heading";
import "./wildlands.scss";

const Wildlands = () => {
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
      <div className="wildlands">
        <div className="top">
          <Heading
            mainhead={"The Heart of competition"}
            secondhead={"The Heart of competition Wildlands"}
            para={
              "In 'Elements of a Soul,' the Wildlands beckon as the ultimate proving ground for daring adventurers. This untamed expanse is not only a battleground for intense PVP showdowns but also teems with formidable creatures and untold riches."
            }
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
                Challenge Rivals
              </h4>
              <p className="text-white font-italic fw-normal text-inter">
                Test your skills against fellow players in adrenaline-pumping
                PVP battles, vying for precious loot and glory in combat.
              </p>
            </div>

            <div className="second" ref={boxSecRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Conquer Creatures
              </h4>
              <p className="text-white font-italic fw-normal text-inter">
                Venture deep into the Wildlands to face off against powerful
                creatures that roam its depths. Defeat them, and you may uncover
                valuable resources or rare NFT treasures with real-world value.
              </p>
            </div>

            <div className="third" ref={boxTrdRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Ascend in Difficulty
              </h4>
              <p className="text-white font-italic fw-normal text-inter">
                The Wildlands are tiered into 10 escalating levels, each
                presenting unique challenges and rewards. Brave souls can push
                their limits, daring to venture into higher-level domains for
                greater glory.
              </p>
            </div>

            <div className="forth" ref={frthBoxRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Strategize and Triumph
              </h4>
              <p className="text-white font-italic fw-normal text-inter">
                Every encounter in the Wildlands demands courage, cunning, and
                resilience. Plan your moves wisely, for victory in this dynamic
                ecosystem rewards not just strength, but also strategy and
                skill.
              </p>
            </div>

            <div className="fifth" ref={fvthBoxRef}>
              <h4 className="textexpansiva-bold text-white fw-bold">
                Forge Your Legend
              </h4>
              <p className="text-white font-italic fw-normal text-inter">
                Amidst the echoing call to arms, carve your saga of triumph
                across the boundless expanse of the Wildlands. Embrace the
                challenge, and let your valor and strategy lead you to
                ascendancy in this grand odyssey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wildlands;
