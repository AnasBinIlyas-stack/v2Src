import React, { useEffect, useRef } from "react";
import "./Dao.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../heading/heading";
function Dao() {
  gsap.registerPlugin(ScrollTrigger);
  const daoRef = useRef(null);
  const daoHeadRef = useRef(null);
  const leftimgRef = useRef(null);
  const rightimgRef = useRef(null);
  useEffect(() => {
    const container = daoRef.current;
    const header = daoHeadRef.current;
    const left = leftimgRef.current;
    const right = rightimgRef.current;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.set(header, { y: "-90%", opacity: "0" });
      gsap.set(left, { x: "200%" });
      gsap.set(right, { x: "-200%" });
      gsap.to(header, {
        y: "0%",
        opacity: "1",
        duration: 1,
        delay: 2,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(left, {
        x: "0%",
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(right, {
        x: "0%",
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return (
    <section className="dao-sec">
      <div ref={daoRef}>
        <div className="inner">
          <div>
            <Heading
              mainhead={"Blockchain"}
              secondhead={"Blockchain-Driven DAO of Element of a Soul"}
              para={"Player Empowerment: Enter the World of Elements of a Soul"}
              class={"text-bit"}
            />
          </div>
          <div className="left">
            <h5 className="text-white text-inter fw-normal">
              Elements of a Soul,' a gaming revolution where your voice powers
              the journey. As a decentralized autonomous organization (DAD), we
              offer you governance tokens, putting decision-making into the
              hands of our community. Engage in our world not just as a player,
              but as a stakeholder with the power to vote on key aspects of the
              game's future. With staking, NFTS, utility tokens, and hashrate
              tokens, your contributions and successes in-game are rewarded with
              real influence and potential earnings. Your engagement drives the
              ecosystem, allowing you to forge the path ahead for all players.
              This is gaming on the blockchain, where your actions, decisions,
              and investments shape the world of 'Elements of a Soul'
            </h5>
          </div>
        </div>
        <div className="daoled-div">
          <img
            ref={daoHeadRef}
            src="/assets/images/daoled.webp"
            alt="..."
            className="daoled-img"
          />
        </div>
        <img
          ref={leftimgRef}
          src="/assets/images/daoleft.webp"
          alt="..."
          className="daoleft-img"
        />
        <img
          ref={rightimgRef}
          src="/assets/images/daoright.webp"
          alt="..."
          className="daoright-img"
        />

        <div className="layer"></div>
        <img
          src="/assets/images/daotop.webp"
          alt="..."
          className="daotop-img"
        />
        <img
          src="/assets/images/daobottom.webp"
          alt="..."
          className="daobottom-img"
        />
      </div>
    </section>
  );
}

export default Dao;
