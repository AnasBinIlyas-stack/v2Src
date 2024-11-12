import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./bht.scss";
import Heading from "../../heading/heading";
function Bht() {
  gsap.registerPlugin(ScrollTrigger);

  const exRef = useRef(null);
  const leftExRef = useRef(null);
  const rightExRef = useRef(null);
  const hashHeadExRef = useRef(null);

  useEffect(() => {
    const container = exRef.current;
    const leftCard = leftExRef.current;
    const rightCard = rightExRef.current;
    const header = hashHeadExRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });
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
        duration: 2,
        delay: 2,
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
    <section className="bht-sec" ref={exRef}>
      <div ref={hashHeadExRef}>
        <Heading
          mainhead={"Unlock the Potential"}
          secondhead={"Unlock the Potential of Blockchain with BHT"}
        />
      </div>

      <div className="inner">
        <div className="left" ref={leftExRef}>
          <p className="text-white text-inter fw-normal">
            The Hashrate Token serves a dual function and purpose within the
            game, acting as both an entry ticket and a reward mechanism for
            players engaging in the loot battles. These battles occur twice
            weekly at set times and feature 50 competitors in each round.
            Participation is exclusive to those who purchase entry using the
            Hashrate Token, emphasizing the token's importance in the game's
            economy.
          </p>
          <h4 className="text-white textexpansiva-bold fw-bold">
            Functionality of BHT Token
          </h4>
          <div>
            <p className="text-white text-inter fw-normal">
              Potential Gains from Mining Hashrate: Players have the opportunity
              to win a share of the 80% of Hashrate Tokens allocated to the top
              20 performers in each round. This winning pool offers a direct
              incentive, as Hashrate Tokens are tied to the game's mining
              capabilities, enhancing the players' potential earnings and
              investment returns.
            </p>
            <p className="text-white text-inter fw-normal">
              The BHT token is a revolutionary digital asset that leverages the
              security and potential of Bitcoin mining to offer users a unique
              and valuable experience. Integrating cutting-edge blockchain
              technology, BHT provides a stable and promising investment
              opportunity that contributes directly to the ecosystem's growth.
            </p>
          </div>
          <p className="text-inter fw-normal" style={{ color: "#FAB863" }}>
            ⦁ Token will be burned after 3 years, because of the depreciation of
            the hardware. Hashrate tokens can always be purchased for a market
            conform value.
          </p>
        </div>
        <div className="right" ref={rightExRef}>
          <img src="/assets/images/bht.webp" alt="..." />
          <p className="text-white text-inter fw-normal">
            The BHT token operates on a robust platform where each token is
            backed by real Bitcoin mining power. By holding BHT tokens, you
            essentially own a part of the hashing power contributed by a network
            of global mining operations. This direct linkage to Bitcoin mining
            activities ensures that BHT is not just another digital asset; it's
            a stake in the thriving, ever-expanding world of cryptocurrency
            mining.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bht;
