import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "./effect-carousel.css";
import "./MySwiper.css";
import axios from "axios";

export default function MySwiper({ selectedAudio, setSelectedAudio, selectedButtonRef }) {
  const [audios, setAudios] = useState([]);
  const buttonRefs = useRef([]);

  const swiperParameters = {
    loop: true,
    breakpoints: {
      768: { initialSlide: 1 },
    },
    effect: "carousel",
    centeredSlides: true,
    modules: [A11y, Navigation, Pagination, EffectCarousel],
    slidesPerView: 3.5,
    navigation: { enabled: true },
    pagination: { clickable: true, enabled: true },
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/audio/all-FU`;
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setAudios(response.data.filter((audio) => audio.isPurchased));
    }).catch((error) => {
      console.error('Error fetching audio:', error);
    });
  }, []);

  const handlePlayClick = (audio, index) => {
    setSelectedAudio(audio._id);
    selectedButtonRef.current = buttonRefs.current[index];
  };

  return (
    <>
      <Swiper {...swiperParameters}>
        {audios.map((audio, index) => (
          <SwiperSlide key={audio._id} className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src={audio.audioImageUrl}
              alt="audio"
            />
            <div className="play-btn">
              <button
                className="mixedcolor-btn"
                ref={el => buttonRefs.current[index] = el}
                onClick={() => handlePlayClick(audio, index)}
              >
                <img src="/assets/icons/play.svg" alt="" /> Play
              </button>
            </div>
          </SwiperSlide>
        ))}
        {audios.map((audio, index) => (
          <SwiperSlide key={audio._id} className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src={audio.audioImageUrl}
              alt="audio"
            />
            <div className="play-btn">
              <button
                className="mixedcolor-btn"
                ref={el => buttonRefs.current[index] = el}
                onClick={() => handlePlayClick(audio, index)}
              >
                <img src="/assets/icons/play.svg" alt="" /> Play
              </button>
            </div>
          </SwiperSlide>
        ))}
        {audios.map((audio, index) => (
          <SwiperSlide key={audio._id} className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src={audio.audioImageUrl}
              alt="audio"
            />
            <div className="play-btn">
              <button
                className="mixedcolor-btn"
                ref={el => buttonRefs.current[index] = el}
                onClick={() => handlePlayClick(audio, index)}
              >
                <img src="/assets/icons/play.svg" alt="" /> Play
              </button>
            </div>
          </SwiperSlide>
        ))}
        {audios.map((audio, index) => (
          <SwiperSlide key={audio._id} className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src={audio.audioImageUrl}
              alt="audio"
            />
            <div className="play-btn">
              <button
                className="mixedcolor-btn"
                ref={el => buttonRefs.current[index] = el}
                onClick={() => handlePlayClick(audio, index)}
              >
                <img src="/assets/icons/play.svg" alt="" /> Play
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
