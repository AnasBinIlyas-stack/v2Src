import React, { useEffect, useRef } from "react";
import "./merchandisesoul.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Merchandisesoul() {
  gsap.registerPlugin(ScrollTrigger);

  const merchandRef = useRef(null);
  const leftMerchandRef = useRef(null);
  const rightMerchandRef = useRef(null);
  // const hashHeadRef = useRef(null);

  useEffect(() => {
    const container = merchandRef.current;
    const leftCard = leftMerchandRef.current;
    const rightCard = rightMerchandRef.current;
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
    <section className="merchandisesoul-sec">
      <div className="inner" ref={merchandRef}>
        <img
          src="/assets/images/merchandise/merchandisesoul.png"
          alt=""
          ref={leftMerchandRef}
        />
        <p
          className="text-white text-inter fw-normal text-center"
          ref={rightMerchandRef}
        >
          Dive into the world of 'Elements of a Soul', an unparalleled AAA
          mobile action RPG that blends the adrenaline-pumping thrill of web3
          gaming with the innovative mechanics of crypto game achievements. As
          adventurers in the astral realms of 2137, you've mastered the art of
          combat, explored the vast open worlds, and left your mark in the
          heart-pounding PvP battle royales. Now, it's time to bring a piece of
          that adventure into your world.
        </p>
      </div>
    </section>
  );
}

export default Merchandisesoul;
