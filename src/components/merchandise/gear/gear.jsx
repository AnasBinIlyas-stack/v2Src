import React, { useEffect, useRef } from "react";
import "./gear.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../heading/heading";
function Gear() {
  gsap.registerPlugin(ScrollTrigger);

  const gearRef = useRef(null);
  const leftgearRef = useRef(null);
  const rightgearRef = useRef(null);
  const HeadgearRef = useRef(null);

  useEffect(() => {
    const container = gearRef.current;
    const leftCard = leftgearRef.current;
    const rightCard = rightgearRef.current;
    const header = HeadgearRef.current;

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
    <section className="gear-sec">
      <div ref={HeadgearRef}>
        <Heading
          mainhead={"Blockchain-Enhanced Gear"}
          secondhead={"Blockchain-Enhanced Gear"}
          para={"Beyond the Game"}
          class={"text-bit"}
        />
      </div>
      <div className="inner" ref={gearRef}>
        <div className="left" ref={leftgearRef}>
          <p className="text-white fw-normal text-inter font-italic">
            In a fusion of fashion and technology, our merchandise is not just
            wearable; it's interactive. Integrated with blockchain technology,
            selected items in our collection offer unique in-game benefits. From
            exclusive skins to bonus hashrate for your in-game bitcoin mining
            endeavors, each purchase bridges your journey between the physical
            and astral realms.
          </p>
        </div>
        <div className="right" ref={rightgearRef}>
          <img src="/assets/images/merchandise/gear.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gear;
