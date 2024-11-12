import React, { useEffect } from "react";
import "./marquee.scss";
import Marquee from "react-fast-marquee";

function NftMarquee({ innertext, display = "" }) {
  useEffect(() => {
    console.log(display);
    const marqueeSec = document.querySelector(".marquee-sec");
    const images = marqueeSec.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
      images[i].style.display = display;
    }
  }, [display]);

  return (
    <section className="marquee-sec text-white">
      <div className="ist-marquee">
        <Marquee direction="right">
          <div className="marquee-inner">
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="second-marquee">
        <Marquee>
          <div className="marquee-inner">
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/icons/dot.svg" alt="" />
              <h2>{innertext}</h2>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default NftMarquee;
