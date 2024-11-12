import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./merchandisebanner.scss";
function Merchandisebanner() {
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
    <section className="merchandisebanner-sec" ref={merchandisebannerRef}>
      <div className="inner">
        <div className="headings">
          <img
            src="/assets/images/merchandise/banner2.webp"
            alt="..."
            className="banner-img"
            ref={merchandisebullRef}
          />
          <div ref={merchandiseheadingRef}>
            <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
              Elements of a Soul Merchandise
            </h1>
            <h5 className="fw-normal text-inter text-bit text-center">
              Welcome to the Official Merchandise of 'Elements
              <br className="d-sm-block d-none" /> of a Soul' - Where Gaming
              Meets Exclusive Fashion
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Merchandisebanner;
