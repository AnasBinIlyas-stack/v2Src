import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./launchingcards.scss";
import Secondarybtn from "../secondarybtn/secondarybtn";
import Heading from "../heading/heading";
function Launchingcards() {
  gsap.registerPlugin(ScrollTrigger);
  const openDiscord = () => {
    window.open("https://discord.com/invite/eoas", "_blank", "noreferrer");
  };
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const left2CardRef = useRef(null);
  const rightCardRef = useRef(null);
  const right2CardRef = useRef(null);
  const webHeadRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const leftCard = leftCardRef.current;
    const left2Card = left2CardRef.current;
    const rightCard = rightCardRef.current;
    const right2Card = right2CardRef.current;
    const header = webHeadRef.current;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(left2Card, { x: "-400%" });
      gsap.set(rightCard, { x: "200%" });
      gsap.set(right2Card, { x: "400%" });
      gsap.set(header, { y: "-90%", opacity: "0.3" });
      // Animation
      gsap.to(leftCard, {
        x: "0%",
        duration: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "0% 100%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(left2Card, {
        x: "0%",
        duration: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "0% 100%",
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
      gsap.to(rightCard, {
        x: "0%",
        duration: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "0% 100%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(right2Card, {
        x: "0%",
        duration: 0.4,
        scrollTrigger: {
          trigger: container,
          start: "0% 100%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);
  return (
    <section className="launching-sec" ref={containerRef}>
      <div className="inner">
        <div ref={webHeadRef}>
          <Heading
            mainhead={"Revolutionizing the web3"}
            secondhead={"Revolutionizing the web3 gaming industry"}
            para={
              "Redefines Web3 hamming by integrating real-time mining and NFT ownership into an immersive MMORPG experience, setting a new benchmark for earning while playing."
            }
            class={"text-bit"}
          />
        </div>
        <div className="launching-cards">
          <div className="launch-card" ref={leftCardRef}>
            <h4 className="text-white fw-bold textexpansiva-bold">Game</h4>
            <img
              src="/assets/images/launching cards/1.webp"
              alt="..."
              className="main-img"
            />
            <p className="text-white large">
              Explore MMORPG Adventures with a vast open world created for
              players, own landscape and battle. Level up your land, character,
              skills and robot’s. Collect gaming items like gear, resources,
              vehicles, robots and engage in quests. A true game that recognize
              your time and skill with real-world value.
            </p>
            <div className="soon-div">
              <div>
                <img src="/assets/icons/window.svg" alt="..." />
                <p className="small">Launching Soon</p>
              </div>
              <div>
                <img src="/assets/icons/launch.svg" alt="..." />
                <p className="small">Launching Soon</p>
              </div>
            </div>
          </div>
          <div className="launch-card" ref={left2CardRef}>
            <h4 className="text-white fw-bold textexpansiva-bold">Bitcoin</h4>
            <img
              src="/assets/images/launching cards/2.webp"
              alt="..."
              className="main-img"
            />
            <p className="text-white large">
              The game, that’s generating passive income for you as a gamer. 3
              years Bitcoin mining power earnings, guaranteed. Win or lose
              Bitcoin mining power, by multiplayer events. Are you ready for the
              next in-game Bitcoin drops?
            </p>
            <div className="soon-div">
              <div>
                <img src="/assets/icons/window.svg" alt="..." />
                <p className="small">Launching Soon</p>
              </div>
              <div>
                <img src="/assets/icons/launch.svg" alt="..." />
                <p className="small">Launching Soon</p>
              </div>
            </div>
          </div>
          <div className="launch-card" ref={rightCardRef}>
            <h4 className="text-white fw-bold textexpansiva-bold">Story</h4>
            <img
              src="/assets/images/launching cards/3.webp"
              alt="..."
              className="main-img"
            />
            <p className="text-white large">
              Elements of a Soul (EOAS), is created with a passion for
              storytelling. EOAS offers immersive 4D audio story lore’s,
              complete novel series, audio books and on top of that limited
              edition books. Get ready to get yourself completely drawn in by
              the story.
            </p>
            <div className="soon-div">
              <div>
                <img src="/assets/icons/window.svg" alt="..." />
                <p className="small text-inter">Launching Soon</p>
              </div>
              <div>
                <img src="/assets/icons/launch.svg" alt="..." />
                <p className="small text-inter">Launching Soon</p>
              </div>
            </div>
          </div>
          <div className="launch-card" ref={right2CardRef}>
            <h4 className="text-white fw-bold textexpansiva-bold">Community</h4>
            <img
              src="/assets/images/launching cards/4.webp"
              alt="..."
              className="main-img"
            />
            <p className="text-white large">
              Collaboration between the community and land. Its key in elements
              of a soul for both to work together to optimize the returns and
              unlock features. The community and the landholders are
              sophistically woven together. Creating an immersive experience for
              all users gamer or not a gamer.
            </p>
            <div className="soon-div">
              <div>
                <img src="/assets/icons/window.svg" alt="..." />
                <p className="small text-inter">Launching Soon</p>
              </div>
              <div>
                <img src="/assets/icons/launch.svg" alt="..." />
                <p className="small text-inter">Launching Soon</p>
              </div>
            </div>
          </div>
        </div>
        <Secondarybtn
          btntext={"> Join Discord community"}
          onClick={openDiscord}
        />
      </div>
      <div className="back-div launchingleft"></div>
    </section>
  );
}

export default Launchingcards;
