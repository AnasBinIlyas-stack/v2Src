import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./elementTrader.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
import { Autoplay } from "swiper/modules";
function ElementTrader() {
  gsap.registerPlugin(ScrollTrigger);

  const traderRef = useRef(null);
  const lefttraderRef = useRef(null);
  const righttraderRef = useRef(null);
  const tradeheadRef = useRef(null);

  useEffect(() => {
    const tradeContainer = traderRef.current;
    const leftCard = lefttraderRef.current;
    const rightCard = righttraderRef.current;
    const tradehead = tradeheadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });
      gsap.set(tradehead, { y: "200%" });

      // Animation
      gsap.to(tradehead, {
        y: "0",
        duration: 1,
        scrollTrigger: {
          trigger: tradeContainer,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(leftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: tradeContainer,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(rightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: tradeContainer,
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
    <section className="elementtrader-sec">
      <div ref={tradeheadRef}>
        <Heading
          mainhead={"Element Traders"}
          secondhead={"Element Traders"}
          para={"Empowering Collaboration"}
          class={"text-bit"}
        />
      </div>
      <div className="inner" ref={traderRef}>
        <div className="left" ref={lefttraderRef}>
          <p className="text-white text-inter fw-normal">
            Introducing our exclusive Private NFT Marketplace for 'Elements of a
            Soul.' This cutting-edge platform offers a secure and personalized
            space for players to buy, sell, and trade their unique in-game
            assets with fellow adventurers. With strict access controls and
            dedicated support, our Private NFT Marketplace ensures a premium
            experience for those seeking to expand their collection and engage
            in the vibrant economy of our world. Join us and unleash the full
            potential of your digital treasures in a marketplace tailored to
            your needs.
          </p>
          <Secondarybtn
            btntext={"> GO TO NFT MARKETPLACE"}
            path={"/nftmarketplace"}
          />
        </div>
        <div className="right" ref={righttraderRef}>
          {/* <Slider {...settings}>
            <img src="/assets/images/trader/1.webp" alt="..." />
            <img src="/assets/images/trader/2.webp" alt="..." />
            <img src="/assets/images/trader/3.webp" alt="..." />
            <img src="/assets/images/trader/4.webp" alt="..." />
            <img src="/assets/images/trader/5.webp" alt="..." />
            <img src="/assets/images/trader/6.webp" alt="..." />
            <img src="/assets/images/trader/7.webp" alt="..." />
            <img src="/assets/images/trader/8.webp" alt="..." />
          </Slider> */}
          <img src="/assets/images/elementtrader.webp" alt="" />
        </div>{" "}
      </div>
      <div className="back-div lefttrader"></div>
      <div className="back-div righttrader"></div>
    </section>
  );
}

export default ElementTrader;
