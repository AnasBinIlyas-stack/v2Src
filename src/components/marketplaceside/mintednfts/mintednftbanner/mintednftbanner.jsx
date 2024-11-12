import React from "react";
import "./mintednftbanner.scss";
function Mintednftbanner() {
  return (
    <section className="mintednftbanner-sec">
      <div className="banner-inner">
        <div className="headings">
          <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
            MINTED NFTS
          </h1>
          <img
            src="/assets/images/mintednftbanner.webp"
            alt="..."
            className="banner-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Mintednftbanner;
