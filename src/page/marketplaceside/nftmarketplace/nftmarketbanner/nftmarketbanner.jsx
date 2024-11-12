import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./nftmarketbanner.scss";
import { Link } from "react-router-dom";

function Nftmarketbanner() {


  gsap.registerPlugin(ScrollTrigger);

  const merchandisebannerRef = useRef(null);
  const merchandisebullRef = useRef(null);
  const merchandiseheadingRef = useRef(null);
  const merchandisebtnRef = useRef(null);

  useEffect(() => {
    const merchnadisecontainer = merchandisebannerRef.current;
    const bull = merchandisebullRef.current;
    const heading = merchandiseheadingRef.current;
    const btn = merchandisebtnRef.current;

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

      gsap.to(btn, {
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
    <section className="nftmarketbanner-sec" ref={merchandisebannerRef}>
      <div className="inner">
     

        <div className="headings">
          <img
            src="/assets/images/nftmarketplace/banner.webp"
            alt="..."
            className="banner-img"
            ref={merchandisebullRef}
          />
          <div ref={merchandiseheadingRef} className="banner-content">
            <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
              WELCOME TO THE NFT <br />
              MARTKETPLACE
            </h1>
            <h5 className="fw-normal text-inter text-bit text-center">
              Discover Collections, get Equipment, or find Assets to build your
              own unique Experiences.
            </h5>
          </div>
          <Link to="/nftmarketplace/createnft" className="text-decoration-none">
            <button className="banner-btn" data-text={"> Create"}>
              <span> {">"}</span>
              <span>{"\u00A0"} </span>
              <span> {"C"}</span>
              <span> {"r"}</span>
              <span> {"e"}</span>
              <span> {"a"}</span>
              <span> {"t"}</span>
              <span> {"e"}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Nftmarketbanner;
