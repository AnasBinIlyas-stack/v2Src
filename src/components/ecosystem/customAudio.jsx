import React, { useRef, useState } from "react";

const CustomAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <audio ref={audioRef} src="https://example.com/audio.mp3" />

      <div className="flex items-center justify-between bg-[rgba(130,70,206,0.11)] border border-[#8246CE] rounded-[97px] p-4 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[12.95px]">
        <button
          className="text-white bg-[#8246CE] px-4 py-2 rounded-full focus:outline-none"
          onClick={togglePlayPause}
        >
          {isPlaying ? "Pause" : " "}
        </button>

        <input
          type="range"
          className="w-full mx-4"
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="w-16"
          onChange={(e) => (audioRef.current.volume = e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
