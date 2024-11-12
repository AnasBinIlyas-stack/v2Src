import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./author.scss";
import Secondarybtn from "../../secondarybtn/secondarybtn";
function Author() {
  gsap.registerPlugin(ScrollTrigger);

  const authorRef = useRef(null);
  const leftAuthorRef = useRef(null);
  const rightAuthorRef = useRef(null);

  useEffect(() => {
    const container = authorRef.current;
    const leftCard = leftAuthorRef.current;
    const rightCard = rightAuthorRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });

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
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);
  return (
    <section className="author-sec" ref={authorRef}>
      <div className="inner">
        <div className="content">
          <div className="left" ref={leftAuthorRef}>
            <img src="/assets/images/author.webp" alt="..." />
          </div>
          <div className="right" ref={rightAuthorRef}>
            <h4 className="secondaryhead-text text-inter fw-normal">
              The Author
            </h4>
            <h5 className="text-bit textexpansiva-bold fw-bold">
              J.M. Roque da Silva A.K.A. Jyro Tenshi
            </h5>
            <p className="text-white text-inter fw-normal">
              In the verdant lands of the Netherlands, under the expansive skies
              of 1992, J.M. Roque da Silva took his first breath in the historic
              heart of Rotterdam. Born amidst the tumult of a home soon cloven
              by separation, he was a soul unfettered by the chaos that swirled
              around his cradle. His spirit, alight with an unquenchable
              curiosity, dared to delve into the abyss of life's grandest
              mysteries. <br /> After dedicating four years to the rigorous
              discipline and brotherhood of the Air Assault Red Berets, he hung
              up his uniform, a warrior in search of enlightenment beyond the
              battlefield. As the calendar marked the waning days of 2011, da
              Silva embarked on a quest that would span the corners of the Earth
              and the depths of the human psyche. He sought wisdom in the
              whispered secrets of the occult, the sacred texts of religions,
              the crumbling relics of ancient civilizations, the mystic insights
              of the Gnostics, the Rosicrucian mysteries of ancient Kemet, and
              the spiritual tapestries of Asia. <br /> This odyssey of the soul
              was not a mere accumulation of knowledge, but a pilgrimage towards
              a profound synthesis of divine-human understanding. His magnum
              opus, "The Elements of a Soul," emerged as a beacon of
              spirituality, untainted by dogma, crafted with the purest essence
              of his enlightenment. Through this, J.M. Roque da Silva aspired to
              weave a tapestry of spiritual wisdom, offering a path to those who
              seek the light of truth in the shadows of existence.
            </p>
          </div>
        </div>
        {/* <Secondarybtn btntext={"> DISCOVER 2137"} /> */}
      </div>
      <div className="back-div author-left"></div>
      <div className="back-div author-right"></div>
    </section>
  );
}

export default Author;
