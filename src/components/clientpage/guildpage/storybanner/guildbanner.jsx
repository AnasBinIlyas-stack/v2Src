import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./storybanner.scss";
function Guildbanner() {
  gsap.registerPlugin(ScrollTrigger);

  const bannerRef = useRef(null);
  const bullRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const container = bannerRef.current;
    const bull = bullRef.current;
    const heading = headingRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(bull, { scale: "1.6" });
      gsap.set(heading, { scale: "0" });

      // Animation
      gsap.to(bull, {
        scale: "1",
        duration: 1.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(heading, {
        scale: "1",
        duration: 1.3,
        delay: 0.3,
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
    <section className="guildbanner" ref={bannerRef}>
      <div className="inner">
        <div className="headings">
          {/* <img
            src="/assets/images/storybanner.webp"
            alt="..."
            className="banner-img"
            ref={bullRef}
          /> */}
          <div ref={headingRef}>
            <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
              EOAS Guilds
            </h1>
            <h5 className="fw-normal text-inter text-bit text-center">
              Collaborate together, get the rewards
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guildbanner;
