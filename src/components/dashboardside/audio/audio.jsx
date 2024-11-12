import React, { useState, useRef } from "react";
import "./audio.scss";
import MySwiper from "./slider/MySwiper";
import Audiobook from "../audiobook/audiobook";
import AudioPlayer from "../../../utils/audioPlayer";
import DDown from "../settings/DDown";
// import Merchandise2 from "../merchandise2/merchandise2";

const Audio = () => {
  const [selectedAudio, setSelectedAudio] = useState("");
  const selectedButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="dashside-content">
        <div className="noti">
          <DDown />
        </div>
        <div className="audio">
          <h2 className="text-white textexpansiva-bold text-uppercase">
            Audio
          </h2>
          <div className="top">
            <h2 className="text-white textexpansiva-bold text-uppercase">
              4d audio experience
            </h2>
            <p className="extra-small text-center">
              Experience a new way of storytelling, catching and intriguing.
              designed with a deep love and passion for storytelling and audio.
              The subscription not only gives you access to monthly release of
              the 4D audioexperience. Also, it is your gate to exclusive content
              and giveaways. The subscription can be canceled anytime!
            </p>
          </div>
          <div className="slider-sec">
            <MySwiper setSelectedAudio={setSelectedAudio} selectedButtonRef={selectedButtonRef} isPlaying={isPlaying}/>
            <div className="back-shadow"></div>
          </div>
          <div className="explore">
            <Audiobook fromAudio={true} selectedAudio={selectedAudio} setSelectedAudio={setSelectedAudio} selectedButtonRef={selectedButtonRef} isPlaying={isPlaying}/>
          </div>
          {selectedAudio && selectedButtonRef?.current && (
            <div className="w-100">
              <AudioPlayer audioId={selectedAudio} buttonRef={selectedButtonRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Audio;
