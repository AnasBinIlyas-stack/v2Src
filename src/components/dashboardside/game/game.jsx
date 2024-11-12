import React from "react";
import "./game.scss";
import { div } from "three/webgpu";
function Game() {
  return (
    <>
      <div className="dashside-content">
        <section className="game-sec">
          <p className="large textexpansiva-bold text-capitalize text-white">
            BACK
          </p>
          <div className="game-inner">
            <h1 className="textexpansiva-bold text-capitalize text-white">
              LAUNCHING SOON
            </h1>
            <img
              src="/assets/images/dashboard/gamecardinner.webp"
              alt="..."
              className="card-img"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Game;
