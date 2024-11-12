import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./soulGeneration.scss";
import Heading from "../../heading/heading";
import Secondarybtn from "../../secondarybtn/secondarybtn";
import playButton from "../../../assets/icons/play-button.svg";
import pauseButton from "../../../assets/icons/pause-button.svg";
import sliderIcon from "../../../assets/icons/slider.svg";

const SoulGeneration = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const eoasRef = useRef(null);
  const leftEoasRef = useRef(null);
  const rightEoasRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  useEffect(() => {
    const audio = audioRef.current;
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.currentTime = 23;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("Autoplay failed: ", error);
      });
    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const handleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Animation

  useEffect(() => {
    const container = eoasRef.current;
    const leftCard = leftEoasRef.current;
    const rightCard = rightEoasRef.current;
    // const header = hashHeadRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(leftCard, { x: "-200%" });
      gsap.set(rightCard, { x: "200%" });
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
  return (
    <div>
      <div className="soul-generation">
        <div className="content" ref={eoasRef}>
          <div ref={leftEoasRef} style={{ width: "100%" }}>
            <Heading
              mainhead={"Generation5"}
              secondhead={"Introducing the elements of a soul Generation5"}
            />
            <div className="video-sec">
              <video autoPlay loop playsInline muted>
                <source src="/assets/videos/embark.mp4" type="video/mp4" />
              </video>

              {/* Audio */}
              <div className="audio-strip">
                <img
                  src={isPlaying ? pauseButton : playButton}
                  alt="Play/Pause"
                  onClick={togglePlayPause}
                  style={{ cursor: "pointer" }}
                />
                <div className="inner-line" onClick={handleSeek}>
                  <div
                    className="progress"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <img src={sliderIcon} alt="Slider" />
                  </div>
                </div>
                <p className="fw-normal">
                  {formatTime(currentTime)}/{formatTime(duration)}
                </p>
                <audio ref={audioRef} src="/assets/sounds/war.mp3"></audio>
              </div>
              <a
                className="audio-link"
                href="https://soundcloud.com/elements-of-a-soul/the-war"
                target="_blank"
              >
                Jyro Tenshi - Element of a Soul: ARC ZERO. THE WAR
              </a>
            </div>
          </div>

          <h4
            className="mt-4 fw-bold secondary-text textexpansiva-bold text-center"
            ref={rightEoasRef}
          >
            Element of the Soul Generation 5
          </h4>
          <p
            className="mt-3 fw-normal text-white text-inter text-center"
            ref={rightEoasRef}
          >
            In the wake of a devastating global war, humanity is scattered and
            reeling, trying to reclaim a future from the ruins. The world, a mix
            of broken drones, rogue AI, and a shattered society, is under the
            thumb of a sinister hidden government—until a mysterious artificial
            entity sparks a rebellion. As political unrest and environmental
            catastrophes unfold, survivors rally against the oppressive new
            world order, embracing a revolution that blends ancient wisdom with
            cutting-edge technology. Amidst the chaos, an innovative discovery
            in the Milagro Mountains holds the promise of a new energy source,
            potentially transforming the desperate fight for freedom and the
            very fabric of society. In this turbulent era, characters confront
            the limits of technology and the depth of their own spirits,
            navigating a path fraught with danger, intrigue, and the possibility
            of a new dawn for mankind.
          </p>
          {/* <Secondarybtn btntext={"> Explore stories"} /> */}
        </div>
      </div>
    </div>
  );
};

export default SoulGeneration;
