import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./economyheart.scss";
function Economyheart() {
  gsap.registerPlugin(ScrollTrigger);

  const heartBoxRef = useRef(null);
  const heartRef = useRef(null);
  const boxOneRef = useRef(null);
  const boxSecRef = useRef(null);

  useEffect(() => {
    const container = heartBoxRef.current;
    const heart = heartRef.current;
    const ist = boxOneRef.current;
    const sec = boxSecRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(heart, { scale: "1.3" });
      gsap.set(ist, { x: "200%" });
      gsap.set(sec, { x: "-200%" });

      // Animation
      gsap.to(heart, {
        scale: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(ist, {
        x: "0",
        duration: 1.3,
        delay: ".4",
        scrollTrigger: {
          trigger: container,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sec, {
        x: "0",
        duration: 1.3,
        delay: ".4",
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
    <section className="economyheart-sec" ref={heartBoxRef}>
      <div className="main">
        <img
          src="/assets/images/ecobrain.webp"
          alt="..."
          className="brain-img"
        />
        <div className="ist" ref={boxOneRef}>
          <h4 className="text-white textexpansiva-bold fw-bold text-center">
            Conquer Creatures
          </h4>
          <p className="text-white text-inter fw-normal text-center">
            In this crypto game, the power is in your hands. As part of our DAO,
            you're not just playing; you're shaping the destiny of Elements of a
            Soul. Your engagement and decisions fuel the ecosystem, fostering a
            vibrant community where every action has a real impact. <br />
            By staking NFT plots, you earn a share of the staking rewards from
            our utility token, making your journey in our MMORPG not just
            thrilling but rewarding. Our unique governance token system ensures
            your voice is heard, allowing you to influence game development.
            Unused tokens? No worry, they're automatically burned, ensuring the
            value and balance of our ecosystem. <br /> Our game gear, all minted
            as NFTs with a randomized burning mechanism, adds an exhilarating
            layer of strategy and rarity. As you delve deeper, you'll discover
            Helper Tokens, rare assets earned through camaraderie and support
            within our community forums. <br /> Elements of a Soul is more than
            a blockchain game; it's an invitation to earn Bitcoin, mine within a
            rich, evolving universe, and be part of a community that values
            contribution, strategy, and, most importantly, fun. <br /> Join us
            as we embark on this journey, blending the thrill of MMORPGs with
            the innovative potential of gamefi, crypto games, and Bitcoin
            mining. <br /> Elements of a Soul is not just a game; it's the
            future of web3 gaming, where every player's dream can become a
            reality.
          </p>
        </div>
        <div className="second" ref={boxSecRef}>
          <h4 className="text-white textexpansiva-bold fw-bold text-center ">
            DAO
          </h4>
          <h5 className="text-white text-inter fw-normal text-center">
            Decentralized Autonomous Organization
          </h5>
          <p className="text-white text-inter fw-normal text-center">
            Welcome to Elements of a Soul, where the future of gaming and
            blockchain technology merges into an unparalleled adventure. At the
            heart of our AAA mobile action RPG is a groundbreaking Decentralized
            Autonomous Organization (DAO) that redefines player involvement and
            ownership in the web3 gaming era.
          </p>
        </div>
      </div>
      <div className="left-back back-div"></div>
      <div className="right-back back-div"></div>
    </section>
  );
}

export default Economyheart;
