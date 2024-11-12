import React from "react";
import playButton from "../../assets/icons/play-button.svg";
import pauseButton from "../../assets/icons/pause-button.svg";
import sliderIcon from "../../assets/icons/slider.svg";

const AudioV1 = () => {
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

  const arctogglePlayPause = () => {
    pauseOtherAudio(arcaudioRef.current);
    if (arcisPlaying) {
      arcaudioRef.current.pause();
    } else {
      arcaudioRef.current.play();
    }
    setArcisPlaying(!arcisPlaying);
  };

  const archandleSeek = (event) => {
    const newTime =
      (event.nativeEvent.offsetX / event.target.clientWidth) * arcduration;
    arcaudioRef.current.currentTime = newTime;
    setArccurrentTime(newTime);
  };
  const warformatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  const arcformatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default AudioV1;
