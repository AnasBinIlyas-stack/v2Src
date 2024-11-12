import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./attack.scss";
import Heading from "../../heading/heading";

const Attack = () => {
  gsap.registerPlugin(ScrollTrigger);

  const attackRef = useRef(null);
  const leftAttackRef = useRef(null);
  const rightAttackRef = useRef(null);
  const hashHeadAttackRef = useRef(null);

  useEffect(() => {
    const container = attackRef.current;
    const leftCard = leftAttackRef.current;
    const rightCard = rightAttackRef.current;
    const header = hashHeadAttackRef.current;

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
    <div>
      <div className="Attack" ref={attackRef}>
        <div className="top" ref={hashHeadAttackRef}>
          <Heading
            mainhead={"Element Attacks and Soul "}
            secondhead={"Element Attacks and Soul Powers​"}
            para={"Experience Elemental Mastery: Unleash the Fury!"}
            class={"text-bit"}
          />
        </div>
        <div className="content">
          <div className="bottom">
            <div className="left" ref={leftAttackRef}>
              <p className="text-white font-italic fw-normal">
                In our arsenal of weapon special attacks, the power of elemental
                forces awaits your command. From the scorching flames of Pyro's
                Inferno to the icy grip of Frostbite Strike, each attack is a
                symphony of power and precision.
              </p>
              <h4 className="text-expansiva text-white fw-bold">
                Attack the Elements:
              </h4>
              <p className="text-white font-italic fw-normal">
                <span className="fw-bold pink">Warrior:</span> Feel the earth
                tremble beneath your feet with the earth-shattering might of
                Starfall Strike.
              </p>
              <p className="text-white font-italic fw-normal">
                <span className="fw-bold pink">Mage:</span> Embrace the arcane
                with the mysterious energy of Arcane Vortex Strike, weaving
                spells that defy comprehension.
              </p>
              <p className="text-white font-italic fw-normal">
                <span className="fw-bold pink">Ranger:</span> Let loose a volley
                of arrows guided by the precision of the winds, striking your
                foes with deadly accuracy.
              </p>
              <p className="text-white font-italic fw-normal">
                <span className="fw-bold pink">Gunner:</span> Unleash a barrage
                of bullets infused with elemental fury, raining destruction upon
                your enemies.
              </p>
              <p className="text-white font-italic fw-normal">
                Every strike tells a tale of battle, strategy, and ultimate
                triumph. Join us on a journey where your weapon becomes more
                than just a tool—it becomes the ancient language of victory
                itself.
              </p>
            </div>
            <div className="right" ref={rightAttackRef}>
              <img
                src="/assets/images/EOAS/element.webp"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <img
          src="/assets/images/attackleft.webp"
          alt="..."
          className="attack-left"
        />
        <img
          src="/assets/images/attackright.webp"
          alt="..."
          className="attack-right"
        />
      </div>
    </div>
  );
};

export default Attack;
