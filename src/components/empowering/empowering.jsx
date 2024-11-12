import React, { useEffect, useRef } from "react";
import "./empowering.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../heading/heading";
import Slider from "react-slick";
function Empowering() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    Autoplay: true,
  };

  gsap.registerPlugin(ScrollTrigger);

  const ownRef = useRef(null);
  const leftOwnRef = useRef(null);
  const rightOwnRef = useRef(null);
  const hashOwnRef = useRef(null);

  useEffect(() => {
    const container = ownRef.current;
    const leftCard = leftOwnRef.current;
    const rightCard = rightOwnRef.current;
    const header = hashOwnRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-250%" });
      gsap.set(rightCard, { x: "250%" });
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
    <section className="empowering-sec">
      <Heading
        mainhead={"Real ownership"}
        secondhead={"Real ownership to the community"}
        para={"That’s what we call real play 2 earn"}
        class={"text-bit"}
        ref={hashOwnRef}
      />
      <div className="top-back back-div"></div>
      <div className="inner" ref={ownRef}>
        <div className="left" ref={rightOwnRef}>
          <img src="/assets/icons/empower.webp" alt="" />
          {/* <h4 className="text-white textexpansiva-bold fw-bold">
            Empowering Gamers
          </h4> */}
          <h5 className="text-white text-inter fw-normal">
            "In 'Elements of a Soul,' your gaming achievements aren't just
            pixels on a screen; they're real assets you own, thanks to
            blockchain technology. Every enemy vanquished, every piece of gear
            crafted, and every special item you discover is yours, stored
            securely in your digital wallet. These aren't just virtual items;
            they're verified on the blockchain, proving they're uniquely yours,
            as real as owning a book on your shelf.
            <br />
            Empowerment through governance: Shape the destiny of our virtual
            realm with community-driven decision-making. Your voice, your
            choices, define the future of Elements of a Soul."
          </h5>
        </div>
        <div className="right" ref={leftOwnRef}>
          <Slider {...settings}>
            <img src="/assets/images/empowering/2.webp" alt="..." />
            <img src="/assets/images/empowering/1.webp" alt="..." />
          </Slider>
        </div>
        <div className="left-back back-div"></div>
      </div>
    </section>
  );
}

export default Empowering;
