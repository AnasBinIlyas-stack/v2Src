import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./generation.scss";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
function Generation() {
  gsap.registerPlugin(ScrollTrigger);

  const embarkRef = useRef(null);
  const leftDetRef = useRef(null);
  const rightImgdRef = useRef(null);

  useEffect(() => {
    const container = embarkRef.current;
    const leftCard = leftDetRef.current;
    const rightCard = rightImgdRef.current;

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
          start: "50% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightCard, {
        x: "0%",
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
    <section className="generation-sec" ref={embarkRef}>
      <Heading
        mainhead={"Embark on an Epic Journey"}
        secondhead={`Epic Story telling & 4D Audio In Elements of a Soul`}
        para={"Unveiling the Storytelling Magic of Elements of a Soul "}
        class={"text-bit"}
      />
      <div className="inner">
        <div className="right" ref={rightImgdRef}>
          {/* <img src="/assets/images/generation.webp" alt="..." /> */}
          <video autoPlay loop playsInline muted>
            <source src="/assets/videos/embark.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="left" ref={leftDetRef}>
          <p className="text-white text-inter fw-normal">
            Immerse yourself in captivating 4D audio lore, audiobooks, and
            complete novel series crafted by passionate storytellers, Forming
            the diverse blend of our game. <br />
            In a future world torn apart by war and ravaged by nature's fury,
            humanity faces its darkest hour. Cities lie in ruins, political
            tensions run high, and societies are on the brink of collapse. Amid
            this chaos, a glimmer of hope emerges as the remnants of
            civilization turn to artificial intelligence (AI) and blockchain
            technology to rebuild. unlike any other.
          </p>
          <div className="d-flex gap-4">
            {" "}
            <Secondarybtn btntext={"> Story"} path={"/story"} />
            <Secondarybtn btntext={"> Lore "} path={"/lore"} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Generation;
