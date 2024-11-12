import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./marketplacebanner.scss";
function Marketplacebanner() {
  gsap.registerPlugin(ScrollTrigger);

  const merchandisebannerRef = useRef(null);
  const merchandisebullRef = useRef(null);
  const merchandiseheadingRef = useRef(null);

  useEffect(() => {
    const merchnadisecontainer = merchandisebannerRef.current;
    const bull = merchandisebullRef.current;
    const heading = merchandiseheadingRef.current;

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
          trigger: merchnadisecontainer,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(heading, {
        scale: "1",
        duration: 1.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: merchnadisecontainer,
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
    <section className="marketplacebanner-sec" ref={merchandisebannerRef}>
      <div className="inner">
        <div className="headings">
          <img
            src="/assets/images/marketplace/banner.webp"
            alt="..."
            className="banner-img"
            ref={merchandisebullRef}
          />
          <div ref={merchandiseheadingRef}>
            <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
              THE ROLE OF NFT’s IN ELEMENTS OF A SOUL
            </h1>
            <h5 className="fw-normal text-inter text-bit text-center">
              In the captivating world of “ Element of a Soul” NFT staking
              stands as a testament to innovation, engagement, and empowerment.
              Our Unique system allows players to not only participate in the
              game’s evolving narrative but also to secure a stake in its future
              and earn substantial rewards. Here’s how it works, simplified for
              clarity and appeal.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketplacebanner;
