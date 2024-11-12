import React from "react";
import "./movie.scss";
function Movie() {
  return (
    <section className="movie-sec">
      <p className="large textexpansiva-bold text-capitalize text-white">
        BACK
      </p>
      <div className="movie-inner">
        <h1 className="textexpansiva-bold text-capitalize text-white">
          COMING SOON
        </h1>
        <button className="movie-btn">
          <h4 className="textexpansiva-bold text-capitalize text-white">
            PLAY
          </h4>
          <img src="/assets/icons/play.svg" alt="..." className="play-btn" />
        </button>
      </div>
    </section>
  );
}

export default Movie;
