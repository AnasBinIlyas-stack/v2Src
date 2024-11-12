import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import chev from "../../assets/icons/chev.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./gamingslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "./effect-carousel.css";
import "./gamingslider.scss";
import Heading from "../heading/heading.jsx";
function Gamingslider() {
  gsap.registerPlugin(ScrollTrigger);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const webRef = useRef(null);
  const webHeadRef = useRef(null);
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance = document.querySelector(".myGSwiper").swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, []);

  const handlePrevClick = () => {
    const swiperInstance = document.querySelector(".myGSwiper").swiper;
    swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    const swiperInstance = document.querySelector(".myGSwiper").swiper;
    swiperInstance.slideNext();
  };

  useEffect(() => {
    const container = webRef.current;
    const header = webHeadRef.current;

    gsap.set(header, { y: "-90%", opacity: "0.3" });

    gsap.to(header, {
      y: "0%",
      opacity: "1",
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "30% 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const swiperParameters = {
    modules: [A11y, Navigation, Pagination, EffectCarousel, Autoplay],
    slidesPerView: 1,
    navigation: { enabled: false },
    pagination: { clickable: true, enabled: true },
    loop: true,
    autoplay: {
      delay: 2500, // Delay between transitions (in milliseconds)
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
    breakpoints: {
      768: {
        navigation: { enabled: true },
        slidesPerView: 5,
      },
    },
    effect: "carousel",
    centeredSlides: true,
  };

  return (
    <section className="gamingslider-sec" ref={webRef}>
      <div ref={webHeadRef}>
        <Heading
          mainhead={"Revolutionizing the web3"}
          secondhead={"Revolutionizing the web3 gaming industry"}
          para={
            "Redefines Web3 hamming by integrating real-time mining and NFT ownership into an immersive MMORPG experience, setting a new benchmark for earning while playing."
          }
          class={"text-bit"}
        />
      </div>

      <Swiper {...swiperParameters} className="myGSwiper">
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/1.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/2.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/3.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/4.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/5.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/6.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="/assets/images/gamingslider/7.webp"
          />
        </SwiperSlide>
      </Swiper>

      <div className="d-flex justify-content-center gap-4  swiper-btn">
        <img
          src={chev}
          alt="chev"
          ref={prevRef}
          className="custom-prev-button"
          onClick={handlePrevClick}
        />
        <img
          src={chev}
          alt="chev"
          ref={nextRef}
          className="custom-next-button"
          onClick={handleNextClick}
        />
      </div>
    </section>
  );
}

export default Gamingslider;
