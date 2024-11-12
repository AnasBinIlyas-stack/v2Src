import React, { useEffect, useRef } from "react";
import "./pvpslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import chev from "../../assets/icons/chev.svg";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import EffectCarousel from "../effectcarousel/effect-carousel.esm.js";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "../effectcarousel/effect-carousel.css";

function Pvpslider() {
  const prevRefs = useRef(null);
  const nextRefs = useRef(null);

  useEffect(() => {
    if (prevRefs.current && nextRefs.current) {
      const swiperInstance = document.querySelector(".myGSwipers").swiper;
      swiperInstance.params.navigation.prevEl = prevRefs.current;
      swiperInstance.params.navigation.nextEl = nextRefs.current;
      swiperInstance.navigation.update();
    }
  }, []);

  const handlePrevClick = () => {
    const swiperInstance = document.querySelector(".myGSwipers").swiper;
    swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    const swiperInstance = document.querySelector(".myGSwipers").swiper;
    swiperInstance.slideNext();
  };

  const swiperParameters = {
    modules: [A11y, Navigation, Pagination, Autoplay, EffectCarousel],
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
        slidesPerView: 4,
      },
    },
    effect: "carousel",
    centeredSlides: true,
  };

  return (
    <section className="pvpslider-sec">
      <div className="inner">
        <Swiper {...swiperParameters} className="myGSwipers">
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/1.webp"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/2.webp"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/3.webp"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/4.webp"
              alt="Slide 4"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/5.webp"
              alt="Slide 5"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/6.webp"
              alt="Slide 6"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-cf25">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
              src="/assets/images/pvp/7.webp"
              alt="Slide 7"
            />
          </SwiperSlide>
        </Swiper>

        <div className="d-flex justify-content-center gap-4 swiper-btn">
          <img
            src={chev}
            alt="chev"
            ref={prevRefs}
            className="custom-prev-button"
            onClick={handlePrevClick}
          />
          <img
            src={chev}
            alt="chev"
            ref={nextRefs}
            className="custom-next-button"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
}

export default Pvpslider;
