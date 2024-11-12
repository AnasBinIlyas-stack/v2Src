import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sharedvalues.scss";
import Heading from "../../heading/heading";
function Sharedvalues() {
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
    <section className="sharedvalues-sec" ref={containerRef}>
      <Heading
        mainhead={"A Partnership Built"}
        secondhead={"A Partnership Built on Shared Values"}
        para={"High-end Sustainability Meets Professionality"}
        class={"text-bit"}
      />
      <div className="inner">
        <div className="left" ref={leftCardRef}>
          <video autoPlay loop playsInline>
            <source
              src="/assets/videos/check 2.mp4"
              type="video/mp4"
              className="lejoin-img"
            />
          </video>
        </div>
        <div className="right" ref={rightCardRef}>
          <p className="text-white text-inter fw-normal">
            The essence of our partnership lies in a shared vision: to make
            Bitcoin mining asset to create a real 2 earn game. We understand
            that the future of cryptocurrency depends on responsible practices,
            and together with Compute Nordic, we're making this future a
            reality. Our collaboration is more than just a business venture;
            it's a commitment to ethical mining and security to our clients,
            ensuring a positive impact on both the environment and our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sharedvalues;
