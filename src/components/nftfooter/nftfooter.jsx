import React from "react";
import "./nftfooter.scss";
import { NavLink, useNavigate } from "react-router-dom";
function NftFooter() {
  const navigate = useNavigate();
  return (
    <section className="nftfooter-sec">
      <div className="inner">
        <div className="footer-top">
          <img
            src="/assets/icons/logo.svg"
            alt="..."
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <div className="pages">
            <NavLink to="/" className="text-white text-inter">
              HOME
            </NavLink>
            <NavLink to="/nftmarketplace" className="text-white text-inter">
              MARKETPLACE
            </NavLink>
            <NavLink to="/auction" className="text-white text-inter">
              AUCTION
            </NavLink>
            <NavLink to="/staking" className="text-white text-inter">
              STAKING
            </NavLink>
          </div>
          <div className="social-icons">
            <a href="https://x.com/ElementsofaSoul" target="_blank">
              <img src="/assets/icons/footericons/twitter.svg" alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrNASt96lwJv-VsjKJTBApg"
              target="_blank"
            >
              <img src="/assets/icons/footericons/youtube.svg" alt="" />
            </a>
            <a href="https://www.tiktok.com/@elementsofasoul" target="_blank">
              <img src="/assets/icons/footericons/tiktok.svg" alt="" />
            </a>
            <a href="https://www.twitch.tv/elementsofasoul" target="_blank">
              <img src="/assets/icons/footericons/twitch.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/elementsofasoul/"
              target="_blank"
            >
              <img src="/assets/icons/footericons/insta.svg" alt="" />
            </a>
            <a
              href="https://m.facebook.com/elementsofasoul369/"
              target="_blank"
            >
              <img src="/assets/icons/footericons/facebook.svg" alt="" />
            </a>
            <a href="https://kick.com/elementsofasoul" target="_blank">
              <img src="/assets/icons/footericons/kick.svg" alt="" />
            </a>
            <a href="https://discord.com/invite/eoas" target="_blank">
              <img src="/assets/icons/footericons/discord.svg" alt="" />
            </a>
            <a href="https://soundcloud.com/elements-of-a-soul" target="_blank">
              <img src="/assets/icons/footericons/cloud.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <h4 className="text-white text-inter">
            @2024 ELEMENTOFASOUL. All rights reserved.
          </h4>
          <span>|</span>
          <a href="#">Terms & Conditions </a>
          <span>|</span>
          <a href="#">Privacy Policy </a>
        </div>
      </div>
    </section>
  );
}

export default NftFooter;
