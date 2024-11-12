import React from "react";
import "./hero.scss";
import Secondarybtn from "../secondarybtn/secondarybtn";
import { useNavigate } from "react-router-dom";
function Hero() {
  return (
    <section className="hero-sec">
      <div className="inner">
        <div className="left">
          <h1 className="fw-bold textexpansiva-bold text-white">
            Earn in game <br /> <span>bitcoin Drops</span>
          </h1>
          <h5 className="fw-normal text-inter text-bit ist">
            Explore MMORPG Adventures, Real-Time Bitcoin Mining, and Experience
            Immersive Storytelling.
          </h5>
          <div className="d-flex align-items-center second">
            <img src="/assets/icons/gift.svg" alt="" />
            <p className="fw-normal text-inter text-bit ">
              Join giveaways and contests, win from a{" "}
              <span className="text-white">$20,000</span> prize pool
            </p>
          </div>
          <a
            className="hero-btn"
            href="https://discord.com/oauth2/authorize?client_id=1286285727885168680&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=identify+guilds+email+guilds.join+messages.read"
            target="_blank" rel="noreferrer"
          >
            Join Discord Now
          </a>
        </div>
        <div className="right">
          <img src="/assets/images/updatedhero.webp" alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Hero;
