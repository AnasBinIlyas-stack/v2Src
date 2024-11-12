import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./merchandisecollection.scss";
import Heading from "../../heading/heading";
function Merchandisecollection() {
  gsap.registerPlugin(ScrollTrigger);

  const merColRef = useRef(null);
  const leftmerColRef = useRef(null);
  const rightmerColRef = useRef(null);
  const hashHeadmerColRef = useRef(null);

  useEffect(() => {
    const container = merColRef.current;
    const leftCard = leftmerColRef.current;
    const rightCard = rightmerColRef.current;
    const header = hashHeadmerColRef.current;

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
    <section className="merchandisecollection-sec" ref={merColRef}>
      <div ref={hashHeadmerColRef}>
        <Heading
          mainhead={"merColclusive Collection"}
          secondhead={"merColclusive Collection"}
          para={"merColclusive Collection"}
          class={"text-bit"}
        />
      </div>
      <div className="inner">
        <div className="left" ref={leftmerColRef}>
          <img src="/assets/images/merchandise/collection.webp" alt="" />
        </div>
        <div className="right" ref={rightmerColRef}>
          <h4 className="text-white fw-bold textexpansiva-bold">
            Heroic Tees and Hoodies
          </h4>
          <p className="text-white fw-normal text-inter font-italic">
            Hoodies: Emblazoned with the iconic symbols of the warrior, range,
            and magic-based classes, our clothing line lets you show off your
            allegiance in style. Whether you're a frontline warrior or a shadowy
            rogue, we've got something that speaks to your soul.
          </p>
          <h4 className="text-white fw-bold textexpansiva-bold">
            Astral Accessories
          </h4>
          <p className="text-white fw-normal text-inter font-italic">
            From enchanted keychains to astral projection backpacks, our
            accessories merge functionality with the magic of the game. Perfect
            for those who carry the spirit of exploration in their hearts and
            the courage to face the unknown.
          </p>
          <h4 className="text-white fw-bold textexpansiva-bold">
            Limited Edition Artifacts
          </h4>
          <p className="text-white fw-normal text-inter font-italic">
            Own a piece of history with our limited edition collectibles,
            including replica weapons, character figurines, and artwork directly
            inspired by the breathtaking landscapes of Nova. Each piece is a
            gateway to the realms you've tirelessly explored.
          </p>
          <h4 className="text-white fw-bold textexpansiva-bold">
            Astral Accessories
          </h4>
          <p className="text-white fw-normal text-inter font-italic">
            From enchanted keychains to astral projection backpacks, our
            accessories merge functionality with the magic of the game. Perfect
            for those who carry the spirit of exploration in their hearts and
            the courage to face the unknown.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Merchandisecollection;
