import React from "react";
import "./latestcolbanner.scss";
function Latestcolbanner() {
  return (
    <section className="collectionbanner-sec">
      <div className="banner-inner">
        <div className="headings">
          <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
            LATEST COLLECTIONS
          </h1>
          <img
            src="/assets/images/latestcollectionbanner.webp"
            alt="..."
            className="banner-img"
          />
          <img
            src="/assets/images/latestcolbanner.webp"
            alt="..."
            className="mobbanner-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Latestcolbanner;
