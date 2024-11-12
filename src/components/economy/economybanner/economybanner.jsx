import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./economybanner.scss";
function Economybanner() {
  gsap.registerPlugin(ScrollTrigger);

  const bannerRef = useRef(null);
  const bullRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const container = bannerRef.current;
    const bull = bullRef.current;
    const rightCard = rightCardRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(bull, { scale: "1.6" });
      gsap.set(rightCard, { scale: "0" });

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

      gsap.to(rightCard, {
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
    <section className="economybanner-sec" ref={bannerRef}>
      <div className="inner">
        <img
          src="/assets/images/economybanner.webp"
          alt="..."
          className="img-fluid banner-img"
          ref={bullRef}
        />
        <div className="headings  " ref={rightCardRef}>
          <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
            Welcome to the Ecosystem of " Elements of a Soul "
          </h1>
          <h5 className="fw-normal text-inter text-bit text-center">
            Unveiling the Future of Web3 Gaming <br /> P2E Gaming of the new
            generation
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Economybanner;
