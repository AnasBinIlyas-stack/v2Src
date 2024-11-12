import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hash from "../../assets/icons/backedgaming/hash.webp";
import cooling from "../../assets/icons/backedgaming/cooling.webp";
import energy from "../../assets/icons/backedgaming/energy.webp";
import optimize from "../../assets/icons/backedgaming/optimizeddesign.webp";
import backedImg from "../../assets/images/mining/backedgaming.webp";
function Backedgaming() {
  gsap.registerPlugin(ScrollTrigger);

  const webRef = useRef(null);
  const istimgRef = useRef(null);
  const secondimgRef = useRef(null);
  const thirdimgRef = useRef(null);
  const forthimgRef = useRef(null);

  useEffect(() => {
    const container = webRef.current;
    const istimg = istimgRef.current;
    const secondimg = secondimgRef.current;
    const thirdimg = thirdimgRef.current;
    const forthimg = forthimgRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Animations for screens wider than 768px
      gsap.set(istimg, { y: "90%", opacity: "0.3" });
      gsap.to(istimg, {
        y: "0%",
        opacity: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(secondimg, { y: "90%", opacity: "0.3" });
      gsap.to(secondimg, {
        y: "0%",
        opacity: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(thirdimg, { y: "90%", opacity: "0.3" });
      gsap.to(thirdimg, {
        y: "0%",
        opacity: "1",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "30% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(forthimg, { y: "90%", opacity: "0.3" });
      gsap.to(forthimg, {
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
    <section className="backedgaming-sec" ref={webRef}>
      <div className="inner">
        <div className="top xs:pt-16">
          <div className="ist" ref={istimgRef}>
            <img src={hash} alt="..." />
            <h5 className="text-white text-[22px] textexpansiva-bold fw-bold">
              Unstoppable Mining Power
            </h5>
            <p className="text-white text-[16px] text-inter fw-normal">
              Harness the brute force of Antminer S21 Hydro for extreme Bitcoin
              mining performance. Precision-engineered for those who demand the
              best.
            </p>
          </div>
          <div className="second">
            <img src={backedImg} alt="" />
          </div>
          <div className="ist" ref={secondimgRef}>
            <img src={optimize} alt="..." />
            <h4 className="text-white textexpansiva-bold fw-bold">
              Engineered for Efficiency
            </h4>
            <p className="text-white text-inter fw-normal">
              Smart design, smarter results. Optimized for airflow and
              performance, ensuring your rig stays ahead of the game.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="ist" ref={thirdimgRef}>
            <img src={cooling} alt="..." />
            <h4 className="text-white textexpansiva-bold fw-bold">
              Next-Level Cooling
            </h4>
            <p className="text-white text-inter fw-normal">
              Our advanced cooling tech keeps your mining operation running cool
              under pressure—high performance, low impact.
            </p>
          </div>
          <div className="ist" ref={forthimgRef}>
            <img src={energy} alt="..." />
            <h4 className="text-white textexpansiva-bold fw-bold">
              Powered by Clean Energy
            </h4>
            <p className="text-white text-inter fw-normal">
              100% sustainable. Zero compromise. Mine Bitcoin with eco-conscious
              energy that fuels both profit and planet.
            </p>
          </div>
        </div>
      </div>
      <div className="left-back back-div"></div>
      <div className="right-back back-div"></div>
    </section>
  );
}

export default Backedgaming;
