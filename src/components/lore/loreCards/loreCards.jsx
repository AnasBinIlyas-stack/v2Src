import React, { useEffect, useRef, useState } from "react";
import Secondarybtn from "../../secondarybtn/secondarybtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./loreCards.scss";
import playButton from "../../../assets/icons/play-button.svg";
import pauseButton from "../../../assets/icons/pause-button.svg";
import sliderIcon from "../../../assets/icons/slider.svg";
import legion from "../../../assets/videos/legion.mp4";

const LoreCards = () => {
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
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
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
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
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
  useEffect(() => {
    const audio = waraudioRef.current;
    const warupdateCurrentTime = () => setWarcurrentTime(audio.currentTime);
    const warupdateDuration = () => setWarduration(audio.duration);

    audio.addEventListener("timeupdate", warupdateCurrentTime);
    audio.addEventListener("loadedmetadata", warupdateDuration);
    audio.currentTime = 23;

    audio
      .play()
      .then(() => {
        setWarisPlaying(true);
      })
      .catch((error) => {
        console.error("Autoplay failed: ", error);
      });
    return () => {
      audio.removeEventListener("timeupdate", warupdateCurrentTime);
      audio.removeEventListener("loadedmetadata", warupdateDuration);
    };
  }, []);
  useEffect(() => {
    const audio = arcaudioRef.current;
    const arcupdateCurrentTime = () => setArccurrentTime(audio.currentTime);
    const arcupdateDuration = () => setArcduration(audio.duration);
    audio.currentTime = 23;
    audio.addEventListener("timeupdate", arcupdateCurrentTime);
    audio.addEventListener("loadedmetadata", arcupdateDuration);

    return () => {
      audio.removeEventListener("timeupdate", arcupdateCurrentTime);
      audio.removeEventListener("loadedmetadata", arcupdateDuration);
    };
  }, []);
  const archandleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * arcduration;
    arcaudioRef.current.currentTime = newTime;
    setArccurrentTime(newTime);
  };
  const warhandleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * warduration;
    waraudioRef.current.currentTime = newTime;
    setWarcurrentTime(newTime);
  };

  return (
    <div>
      <div className="lore-cards">
        <div className="content" ref={istmarketplaceRef}>
          <div className="left" ref={istleftmarketplaceRef}>
            <video muted autoPlay loop playsInline src={legion}></video>
            {/* <img
              src="/assets/images/lejoin.webp"
              alt=""
              className="lejoin-img"
            /> */}
          </div>
          <div className="right" ref={istrightmarketplaceRef}>
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              THE LEGION
            </h4>
            <h5 className="text-bit fw-normal text-inter">
              Where there is light, there will be darkness
            </h5>
            <p className="text-white fw-normal text-inter">
              In the twilight of an era, the veil was lifted to unveil a truth
              as old as time itself: the shadowy tendrils of governance that
              manipulated the fate of nations belonged to none other than the
              Brotherhood of the Legion. These were not mere mortals, but beings
              who walked amongst us cloaked in the conviction of their own
              supremacy, champions of a doctrine that ordained them as the
              rightful sovereigns over all creation. For eons, they wove their
              intricate tapestries of dominion in secret, their eyes set upon a
              singular, audacious goal-to enshroud the entire globe under their
              unyielding rule. And so, in the year of our Lord 2033, their
              ambitions crystallized into stark reality. The world's bastions of
              power-its leaders, its innovators, the luminaries that guided the
              course of human progress-all revealed as disciples of this ancient
              fraternity. Their ascension marked not just a new chapter, but the
              beginning of a new epoch, where shadows reigned supreme.
            </p>
          </div>
        </div>
        <div className="content" ref={secondmarketplaceRef}>
          <div className="right" ref={secondrightmarketplaceRef}>
            <h4 className="secondary-text fw-bold textexpansiva-bold">
              THE WAR
            </h4>
            <h5 className="text-bit fw-normal text-inter">Weekly 4D Stories</h5>
            <p className="text-white fw-normal text-inter">
              In an era where distractions lay siege to our focus, sprawling
              across the vast digital landscapes that command our daily lives,
              this author embarks upon a noble quest. With a vision that
              transcends the confines of time, their aim is to ignite a flame of
              motivation, not just within the hearts of those who walk the earth
              today but also within the souls of the generations yet to tread
              its paths. Delving deep into the annals of society's evolution,
              this sage has dedicated countless hours to understanding the
              intricate tapestry of human development. From this well of
              knowledge, a revolutionary concept was born: transforming the
              humble audiobook into a remarkable odyssey. This is not merely an
              auditory journey; it is an immersive, four-dimensional audio
              experience that elevates storytelling to uncharted realms. In
              doing so, the author beckons us to listen, learn, and leap forward
              into our collective future, armed with the wisdom of the past.
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
        <div className="audio-main">
          <div className="audio-strip">
            <img
              src={arcisPlaying ? pauseButton : playButton}
              alt="Play/Pause"
              onClick={arctogglePlayPause}
              style={{ cursor: "pointer" }}
            />
            <div className="inner-line" onClick={archandleSeek}>
              <div
                className="progress"
                style={{ width: `${(arccurrentTime / arcduration) * 100}%` }}
              >
                <img src={sliderIcon} alt="Slider" />
              </div>
            </div>
            <p className="fw-normal">
              {arcformatTime(arccurrentTime)}/{arcformatTime(arcduration)}
            </p>
            <audio ref={arcaudioRef} src="/assets/sounds/war.mp3"></audio>
          </div>
          <a
            className="audio-link"
            href="https://soundcloud.com/elements-of-a-soul/the-war"
            target="_blank"
          >
            Jyro Tenshi - Element of a Soul: ARC ZERO. THE WAR
          </a>
        </div>
        <div className="content" ref={thirdmarketplaceRef}>
          <div className="left" ref={thirdleftmarketplaceRef}>
            <img
              src="/assets/images/LORE/pistol.png"
              alt=""
              className="pistol"
            />
          </div>
          <div className="right" ref={thirdrightmarketplaceRef}>
            <h5 className="text-white fw-normal text-inter">
              ARC ZERO: Sophisa’s Ember
            </h5>
            <p className="text-white fw-normal text-inter">
              Embark on a legendary odyssey in "Elements of a Soul" an episode
              that unveils the genesis of the Outlaws. Journey with Sophia and
              Alexander through the saga of 2026, a pivotal chapter in the
              annals of EOAS. Register now for an enlightening revelation,
              discovering why this narrative is crucial to the lore's heart.
            </p>
          </div>
        </div>
        <div className="content" ref={forthmarketplaceRef}>
          <div className="left">
            <img
              src="/assets/images/LORE/img3.webp"
              alt=""
              className="img-fluid lore-last"
            />
          </div>
          <div className="right">
            <h4 className="secondary-text fw-bold textexpansiva-bold">2086</h4>
            <h5 className="text-bit fw-normal text-inter">
              There is Power within Shadow
            </h5>
            <p className="text-white fw-normal text-inter">
              In the year 2086, the annals of history were violently rewritten
              as the United Faction, guardians of global peace, faced an
              unforeseen onslaught from the nefarious Brotherhood of The Legion.
              This dark chapter begs exploration into the shadowed corridors of
              time-what preludes whispered of this calamity, and by what means
              did the Legion amass an arsenal of such devastating might?
              Questions swirl like autumn leaves in a tempest, probing the
              origins of this newfound power. Were there unseen hands, cloaked
              in the veils of secrecy, bolstering their terrifying ascent to
              power? <br /> The world found itself besieged, teetering on the
              brink of desolation under the relentless advance of the Legion's
              android armies-machinations of war, forged in the crucible of
              malevolence, their strength unparalleled. Yet, amidst the echoes
              of chaos, the United Faction harbored a glimmer of hope: the
              Cleaners. These elite warriors, endowed with abilities that
              transcended the bounds of the mundane, emerged as beacons of
              resistance. Their prowess and unyielding spirit stood as the last
              bastion against the dark tide, heralding an epic saga of valor and
              resilience.
            </p>
          </div>
        </div>
        <div className="audio-main" style={{ width: "100%" }}>
          <div className="audio-strip">
            <img
              src={warisPlaying ? pauseButton : playButton}
              style={{ cursor: "pointer" }}
              alt="Play/Pause"
              onClick={wartogglePlayPause}
            />
            <div className="inner-line" onClick={warhandleSeek}>
              <div
                className="progress"
                style={{ width: `${(warcurrentTime / warduration) * 100}%` }}
              >
                <img src={sliderIcon} alt="Slider" />
              </div>
            </div>
            <p className="fw-normal">
              {warformatTime(warcurrentTime)}/{warformatTime(warduration)}
            </p>
            <audio ref={waraudioRef} src="/assets/sounds/lore.mp3"></audio>
          </div>
          <a
            className="audio-link"
            href="https://soundcloud.com/elements-of-a-soul/arc-zero-2086"
            target="_blank"
          >
            Jyro Tenshi - Element of a Soul: ARC ZERO. 2086
          </a>
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

export default LoreCards;
