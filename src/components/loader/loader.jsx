import React from "react";
import "./loader.scss";
function Loader() {
  return (
    <section className="loader-sec">
      <div className="inner">
        <div className="left">
          <h1 className="fw-bold textexpansiva-bold text-white">
            ELEMENTS OF A SOUL
          </h1>
        </div>
        <div className="right">
          <img src="/assets/images/loader.webp" alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Loader;
