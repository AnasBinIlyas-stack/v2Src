import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ecotoken.scss";
import Heading from "../../heading/heading";
function Ecotoken() {
  gsap.registerPlugin(ScrollTrigger);

  const ecotokenRef = useRef(null);
  const istEcoRef = useRef(null);
  const secEcoRef = useRef(null);
  const trdEcoRef = useRef(null);
  const fthEcoRef = useRef(null);
  const fvthEcoRef = useRef(null);
  const brainEcoRef = useRef(null);

  useEffect(() => {
    const container = ecotokenRef.current;
    const ist = istEcoRef.current;
    const sec = secEcoRef.current;
    const trd = trdEcoRef.current;
    const fth = fthEcoRef.current;
    const fvth = fvthEcoRef.current;
    const heart = brainEcoRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(heart, { scale: ".3" });

      gsap.set(ist, { x: "200%" });
      gsap.set(sec, { x: "200%" });
      gsap.set(trd, { x: "200%" });
      gsap.set(fth, { x: "200%" });
      gsap.set(fvth, { x: "200%" });

      // Animation
      gsap.to(heart, {
        scale: "1",
        duration: 1.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(ist, {
        x: "0",
        duration: 1.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sec, {
        x: "0",
        duration: 1.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(trd, {
        x: "0",
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fth, {
        x: "0",
        duration: 1.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fvth, {
        x: "0",
        duration: 1.7,
        delay: 0.4,
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
    <section className="ecotoken-sec">
      <Heading mainhead={"Token"} secondhead={"Token"} />
      <div className="inner" ref={ecotokenRef}>
        <div className="back-img" ref={brainEcoRef}>
          <img
            src="/assets/images/ecotokenback.webp"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="outer ist" ref={istEcoRef}>
          <img src="/assets/images/ecotoken/1.webp" alt="..." />
          <div className=" main-div">
            <div className="top">
              <h4 className="text-white textexpansiva-bold fw-bold">
                Battle Hash Tokens
              </h4>
              <h5 className="text-white text-inter fw-normal">
                GameFi Bitcoin Mining Hashrate
              </h5>
            </div>
            <p className="text-white text-inter fw-normal">
              In "Elements of a Soul," the Hashrate Token is your entry pass and
              reward system for twice-weekly 50-player loot battles. Each token
              represents 1 Gh/s of real Bitcoin mining power for three years,
              blending real-world value with your gaming experience.
            </p>
          </div>
        </div>
        <div className="outer second" ref={secEcoRef}>
          <img src="/assets/images/ecotoken/2.webp" alt="..." />
          <div className=" main-div">
            <div className="top">
              <h4 className="text-white textexpansiva-bold fw-bold">
                Utility Tokens
              </h4>
              <h5 className="text-white text-inter fw-normal">
                The Currency of Adventure
              </h5>
            </div>
            <p className="text-white text-inter fw-normal">
              In "Elements of a Soul," the Utility Token lets you acquire
              Hashrate Tokens, premium NFTs, and trade within the community. It
              turns your quests and victories into tangible rewards, unlocking
              the game's vast potential.
            </p>
          </div>
        </div>
        <div className="outer third " ref={trdEcoRef}>
          <img src="/assets/images/ecotoken/3.webp" alt="..." />
          <div className="main-div">
            <div className="top">
              <h4 className="text-white textexpansiva-bold fw-bold">
                Helper Tokens
              </h4>
              <h5 className="text-white text-inter fw-normal">
                The Mark of a True Guardian
              </h5>
            </div>
            <p className="text-white text-inter fw-normal">
              Helper Tokens are special rewards given to players who actively
              assist others in the game, like guiding newcomers or sharing
              advice on forums. These rare tokens are a mark of your commitment
              and a badge of honor within the community.
            </p>
          </div>
        </div>
        <div className="outer forth " ref={fthEcoRef}>
          <img src="/assets/images/ecotoken/4.webp" alt="..." />
          <div className="main-div">
            <div className="top">
              <h4 className="text-white textexpansiva-bold fw-bold">
                Governance Tokens
              </h4>
              <h5 className="text-white text-inter fw-normal">
                Power To The Community
              </h5>
            </div>
            <p className="text-white text-inter fw-normal">
              Join a blockchain-driven adventure where your choices shape the
              game. Gear up, team up, and impact the world with every action and
              strategy. Play your part in crafting an epic story—your legacy
              awaits!
            </p>
          </div>
        </div>
        <div className="outer fifth " ref={fvthEcoRef}>
          <img src="/assets/images/ecotoken/5.webp" alt="..." />
          <div className="main-div">
            <div className="top">
              <h4 className="text-white textexpansiva-bold fw-bold">
                Guild Tokens
              </h4>
              <h5 className="text-white text-inter fw-normal">
                The Foundation of a True Unity
              </h5>
            </div>
            <p className="text-white text-inter fw-normal">
              Guild Tokens are rare awards given for exceptional teamwork and
              support within the game. Earn these prestigious tokens by helping
              newcomers and sharing knowledge on community platforms, showcasing
              your dedication to the collective success of all players.
            </p>
          </div>
        </div>

        {/* <img
          src="/assets/images/ecotoken.webp"
          alt="..."
          className="animated-img"
        />
        <img
          src="/assets/images/ecotokensword.webp"
          alt="..."
          className="sword-img"
        /> */}
      </div>
      <div className="left-back back-div"></div>
      <div className="right-back back-div"></div>
    </section>
  );
}

export default Ecotoken;
