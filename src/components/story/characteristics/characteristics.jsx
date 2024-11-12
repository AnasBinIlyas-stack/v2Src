import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./characteristics.scss";
function Characteristics() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });

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
    <section className="characteristics-sec" ref={containerRef}>
      <div className="inner">
        <div className="top">
          <img
            src="/assets/images/characteristics/1.webp"
            alt="..."
            ref={leftCardRef}
          />
          <img src="/assets/images/characteristics/2.webp" alt="..." />
          <img
            src="/assets/images/characteristics/3.webp"
            alt="..."
            ref={rightCardRef}
          />
        </div>
        <h5 className="text-inter fw-normal text-center">
          Solve the mystery with Nanoko, Roku and Kendrick in the utopia of
          Rotterdam
        </h5>
        <p className="text-inter text-white fw-normal text-center">
          In the throes of his relentless quest to break freefrom the monotonous
          chains of academia's ratrace, Roku, our intrepid hero, laborscarve
          apath toward sustenance and liberation. It is inthis fervent pursuit
          that a confidant, closer thanashadow in the night, whispers of an
          enigmashroudedthe invisible veils of our realm-anenigma that clings to
          Roku's soul, an unyieldingspecter in the corners of his mind. As fate
          weavesits unpredictable tapestry, Roku finds himselfbestowed with an
          invitation ofmonumentalprestige:place amongtheeliteinthequarterfinals
          of the global championship, a fierceAugmented Reality free-for-all
          deathmatch thatcrowns champions among mortals. Yet, as hestands on the
          precipice of glory, the mystic taleswhisperedin the. twilight hours
          besiege hisconsciousness with vivid, lucid dreams, ensnaringhim in a
          labyrinth of contemplation and doubt,thus hindering his preparation
          for the imminentbattle that could immortalize his name amongstthe
          stars.
        </p>
      </div>
    </section>
  );
}

export default Characteristics;
