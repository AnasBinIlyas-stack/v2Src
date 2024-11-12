import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./loreBanner.scss";

const LoreBanner = () => {
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
    <div>
      <div className="lore-banner" ref={bannerRef}>
        <div className="content">
          <img
            src="/assets/images/LORE/banner-logo.webp"
            alt=""
            ref={bullRef}
          />
          <div className="dive" ref={rightCardRef}>
            <h1 className="secondary-text textexpansiva-bold fw-bold">
              DIVE INTO THE LORE
            </h1>
            <h6 className="text-bit text-center text-expansiva fw-semibold">
              4D Elements of a Soul Lore is the new way of storytelling Designed
              with the Hydrasyth Explorer and SH-4D
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoreBanner;
