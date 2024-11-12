import React from "react";
import "./alltopnftbanner.scss";
function Alltopnftbanner() {
  return (
    <section className="topnftbanner-sec">
      <div className="banner-inner">
        <div className="headings">
          <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
            TOP NFTs
          </h1>
          <img
            src="/assets/images/topnftbanner.webp"
            alt="..."
            className="banner-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Alltopnftbanner;
