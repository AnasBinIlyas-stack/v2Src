import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./revolutionizing.scss";
import Heading from "../../heading/heading";

const Revolutionizing = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mechanismRef = useRef(null);
  const leftMechanismRef = useRef(null);
  const rightMechanismRef = useRef(null);
  // const hashHeadRef = useRef(null);

  useEffect(() => {
    const container = mechanismRef.current;
    const leftCard = leftMechanismRef.current;
    const rightCard = rightMechanismRef.current;
    // const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-150%" });
      gsap.set(rightCard, { x: "150%" });
      // gsap.set(header, { y: "-90%", opacity: "0.3" });

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
  // Array of objects representing the bottom content
  const bottomContentData = [
    {
      title: "CHARACTER CUSTOMIZATION",
      description:
        "Tailor your character's appearance and abilities to suit your playstyle and preferences.",
    },
    {
      title: "CLASS SYSTEM",
      description:
        "Choose from a variety of classes, each with its own unique strengths, weaknesses, and abilities.",
    },
    {
      title: "SKILL TREES",
      description:
        "Progress through skill trees 10 unlock new abilities, spells, and passive bonuses, allowing for deeper customization and specialization",
    },
    {
      title: "ABILITIES AND SPELLS",
      description:
        "Master a diverse array of abilities and spells, ranging from powerful attacks in supportive huffs and crowd control effects",
    },
    {
      title: "BATTLECHIPS & INFINITIES",
      description: "Undisclosed Information...",
    },
    {
      title: "COMBAT MECHANICS",
      description:
        "Engage combat in fast-paced encounters, utilizing dodges, blocks, and parries to outmaneuver your foes and strike with precision.",
    },
    {
      title: "COMBO SYSTEM",
      description:
        "Tailor your character's appearance and abilities to suit your playstyle and preferences.",
    },
    // {
    //   img: "/assets/images/EOAS/shield.webp",
    // },
    {
      title: "RESOURCE MANAGEMENT",
      description:
        "Manage resources such as mana, stamina, and cooldowns to ensure you always have access to your most powerful abilities when you need them",
    },
    {
      title: "STATUS EFFECTS",
      description:
        "Inflict status effects such as poison, burn, and stun on enemies to gain strategic advantages in combat.",
    },
    {
      title: "LEVELING SYSTEM",
      description:
        "Earn experience points and level up your character to increase your base stats and unlock new abilities and upgrades.",
    },
    {
      title: "EQUIPMENT AND GEAR",
      description:
        "Acquire and equip a wide range of weapons, armor, and accessories to enhance your character's abilities and effectiveness in battle",
    },
    {
      title: "TALENT SYSTEM",
      description:
        "Invest talent points into passive bonuses and enhancements to further customize and optimize your character build.",
    },
    {
      title: "FACTION ALLEGIANCE",
      description:
        "Align yourself with one of the game's factions, gaining access to unique faction- specific abilities, quests, and rewards",
    },
    {
      title: "CHARACTER PROGRESSION",
      description:
        "Embark on a journey of growth and development as you progress through the game, becoming increasingly powerful and skilled with each challenge you overcome",
    },
  ];

  return (
    <div>
      <div className="revolutionizing" ref={mechanismRef}>
        <div className="top" ref={leftMechanismRef}>
          <img src="/assets/images/EOAS/resolving.webp" alt="" />
          <Heading
            secondhead={"Revolutionizing Game Mechanics"}
            para={
              "It’s simple; we love games. It’s like stepping a portal into another reality."
            }
            class={"text-bit"}
          />
        </div>
        <div className="content" ref={rightMechanismRef}>
          <div className="bottom">
            {bottomContentData.map((item, index) => (
              <div className="bottom-content" key={index}>
                {/* {item.img ? (
                  <img src={item.img} alt="" className="img-fluid" />
                ) : (
                  ""
                )} */}
                {item.title ? (
                  <p className="large textexpansiva-bold text-pink fw-bold font-italic text-center">
                    {item.title}
                  </p>
                ) : (
                  ""
                )}
                {item.description ? (
                  <p className="small text-inter text-white fw-normal text-center">
                    {item.description}
                  </p>
                ) : (
                  " "
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionizing;
