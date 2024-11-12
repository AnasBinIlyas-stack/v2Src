import React, { useEffect, useRef, useState } from "react";
// import Secondarybtn from "../../secondarybtn/secondarybtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./loreCards.scss";
import playButton from "../../../../assets/icons/play-button.svg";
import pauseButton from "../../../../assets/icons/pause-button.svg";
import sliderIcon from "../../../../assets/icons/slider.svg";
import legion from "../../../../assets/videos/legion.mp4";
import { Link } from "react-router-dom";
import { DiscordGate } from "../discordgate";

const DiscordCards = () => {
  gsap.registerPlugin(ScrollTrigger);
  // Audio
  const [warisPlaying, setWarisPlaying] = useState(false);
  const [warcurrentTime, setWarcurrentTime] = useState(0);
  const [warduration, setWarduration] = useState(0);
  const waraudioRef = useRef(null);
  // Audio2
  const [arcisPlaying, setArcisPlaying] = useState(false); // Initial state set to false
  const [arccurrentTime, setArccurrentTime] = useState(0);
  const [arcduration, setArcduration] = useState(0);
  const arcaudioRef = useRef(null);

  const pauseOtherAudio = (currentAudioRef) => {
    if (currentAudioRef !== waraudioRef.current && waraudioRef.current) {
      waraudioRef.current.pause();
      setWarisPlaying(false);
    }
    if (currentAudioRef !== arcaudioRef.current && arcaudioRef.current) {
      arcaudioRef.current.pause();
      setArcisPlaying(false);
    }
  };

  const arctogglePlayPause = () => {
    pauseOtherAudio(arcaudioRef.current);
    if (arcisPlaying) {
      arcaudioRef.current.pause();
    } else {
      arcaudioRef.current.play();
    }
    setArcisPlaying(!arcisPlaying);
  };

  const arcformatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
      }${seconds}`;
  };

  const wartogglePlayPause = () => {
    pauseOtherAudio(waraudioRef.current);
    if (warisPlaying) {
      waraudioRef.current.pause();
    } else {
      waraudioRef.current.play();
    }
    setWarisPlaying(!warisPlaying);
  };

  const warformatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
      }${seconds}`;
  };
  const istmarketplaceRef = useRef(null);
  const secondmarketplaceRef = useRef(null);
  const thirdmarketplaceRef = useRef(null);
  const forthmarketplaceRef = useRef(null);
  const istleftmarketplaceRef = useRef(null);
  const istrightmarketplaceRef = useRef(null);
  const secondrightmarketplaceRef = useRef(null);
  const secondleftmarketplaceRef = useRef(null);
  const thirdrightmarketplaceRef = useRef(null);
  const thirdleftmarketplaceRef = useRef(null);
  const forthrightmarketplaceRef = useRef(null);
  const forthleftmarketplaceRef = useRef(null);

  useEffect(() => {
    const istcontainer = istmarketplaceRef.current;
    const secondcontainer = secondmarketplaceRef.current;
    const thirdcontainer = thirdmarketplaceRef.current;
    const forthcontainer = forthmarketplaceRef.current;
    const istleftCard = istleftmarketplaceRef.current;
    const istrightCard = istrightmarketplaceRef.current;
    const secondleftCard = secondleftmarketplaceRef.current;
    const secondrightCard = secondrightmarketplaceRef.current;
    const thirdleftCard = thirdleftmarketplaceRef.current;
    const thirdrightCard = thirdrightmarketplaceRef.current;
    const forthleftCard = forthleftmarketplaceRef.current;
    const forthrightCard = forthrightmarketplaceRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(istleftCard, { x: "200%" });
      gsap.set(istrightCard, { x: "200%" });
      gsap.set(secondleftCard, { x: "-200%" });
      gsap.set(secondrightCard, { x: "200%" });
      gsap.set(thirdleftCard, { x: "-200%" });
      gsap.set(thirdrightCard, { x: "200%" });
      gsap.set(forthleftCard, { x: "200%" });
      gsap.set(forthrightCard, { x: "-200%" });
      // Animation
      gsap.to(istleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: istcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(istrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: istcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(thirdleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: thirdcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(thirdrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: thirdcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(secondleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: secondcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(secondrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: secondcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(forthleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: forthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(forthrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: forthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);

  const warhandleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * warduration;
    waraudioRef.current.currentTime = newTime;
    setWarcurrentTime(newTime);
  };

  return (
    <div>
      <div className="discord-cards">
        <div className="content collaborate " ref={istmarketplaceRef}>
          <div className="left">
            <img
              src="/assets/images/LORE/img3.webp"
              alt=""
              className="img-fluid lore-last"
            />
          </div>
          <div className="right" ref={istrightmarketplaceRef}>
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              Collaborate and earn together
            </h4>
            <p className="text-white text-center fw-normal text-inter">
              The community is ingeniously woven into the gameplay. The
              community has the only privilege to create robots. Robots provide
              a huge value for the game players. They are assisting with
              battle’s, protection, transportation and many more.
            </p>
            <div className="discord-icons">
              <img src="/assets/images/Client-pages/discordicon2.webp" alt="" />
              <DiscordGate>
                <Link className="hero-btn" to="/guildpage">
                  Join Discord Community
                </Link>
              </DiscordGate>
              <img src="/assets/images/Client-pages/discordicon2.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="content " ref={secondmarketplaceRef}>
          <div className="right" ref={secondrightmarketplaceRef}>
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              Craft unique items
            </h4>
            <p className="text-white fw-normal text-inter">
              To create a robot you need a combination of parts, the parts are
              nft’s and can be combined together, to craft a robot nft. This can
              be sold for Bitcoin on the marketplace, to a nft land owner.
              Community members can collaborate to gather the parts to create a
              robot. Craft the robot, sell it for Bitcoin and split the returns
              between the collaborators. All secured by blockchain smart
              contracts
            </p>
          </div>
          <div className="left" ref={secondleftmarketplaceRef}>
            <img
              src="/assets/images/LORE/img2.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="content" ref={forthmarketplaceRef}>
          <div className="left">
            <img
              src="/assets/images/Client-pages/privilege.webp"
              alt=""
              className="img-fluid lore-last"
            />
          </div>
          <div className="right">
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              Unlock Privileges
            </h4>
            <p className="text-white fw-normal text-inter">
              Crafting robot’s is for the privileged Active members, and can be
              unlocked through community ranks. The crafting is secured by a
              smart contract, making sure every participant receives their fair
              share This system empowers collaboration between the members of
              the community to have fun, earn passive income in Bitcoin, utility
              tokens and nft assets
            </p>
          </div>
        </div>
        <div className="content collaborate pb-5" ref={istmarketplaceRef}>
          <div className="left" ref={istleftmarketplaceRef}>
            <img
              src="/assets/images/LORE/img3.webp"
              alt=""
              className="img-fluid lore-last"
            />
          </div>
          <div className="right" ref={istrightmarketplaceRef}>
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              Stake Your Avatar and Earn Passive Income
            </h4>
            <p className="text-white text-center fw-normal text-inter">
              Community owned structures, they provide work and income for the
              community, simply by just staking your free nft avatar. You will
              receive passive income in the form of btc, utility tokens or
              nft’s. all secured by blockchain smart contract’s. <br /> <br />
              Start or join a guild and explorer the world with your fellow
              companions. Exploring the world give you a small change to
              encounter un discovered nft landplots, with a lot of effort and
              engagement you and your team have the change to become the owners
              of rare limited edition landplots !
            </p>
          </div>
        </div>
        <img
          src="/assets/images/loreleft.webp"
          alt="..."
          className="loreleft"
        />
        <img
          src="/assets/images/loreright.webp"
          alt="..."
          className="loreright"
        />
      </div>
    </div>
  );
};

export default DiscordCards;
