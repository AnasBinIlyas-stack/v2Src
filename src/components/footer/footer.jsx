import React from "react";
import "./footer.scss";
import { NavLink, useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <section className="footer-sec">
      <div className="inner">
        <div className="footer-top">
          <img
            src="/assets/icons/logo.svg"
            alt="..."
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
            className="footer-icon"
          />
          <div className="pages">
            <NavLink to="/home" className="text-white text-inter">
              HOME
            </NavLink>
            <NavLink to="/eoas_game" className="text-white text-inter">
              EOAS GAME
            </NavLink>
            <NavLink to="/story" className="text-white text-inter">
              STORY
            </NavLink>
            <NavLink to="/lore" className="text-white text-inter">
              LORE
            </NavLink>
            <NavLink to="/mining" className="text-white text-inter">
              MINING
            </NavLink>
            <NavLink to="/ecosystem" className="text-white text-inter">
              ECOSYSTEM
            </NavLink>
            <NavLink
              to="https://elementsofasoul.gitbook.io/elements-of-a-soul"
              className="text-white text-inter"
              target="_blank"
            >
              DOCS
            </NavLink>
            {/* <NavLink to="/merchandise" className="text-white text-inter">
              Merchandise
            </NavLink>
            <NavLink to="/marketplace" className="text-white text-inter">
              MARKETPLACE
            </NavLink> */}
          </div>
          <div className="social-icons">
            <a href="https://discord.com/invite/eoas" target="_blank">
              <img src="/assets/icons/footericons/discord.svg" alt="" />
            </a>
            <a href="https://x.com/ElementsofaSoul" target="_blank">
              <img src="/assets/icons/footericons/twitter.svg" alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrNASt96lwJv-VsjKJTBApg"
              target="_blank"
            >
              <img src="/assets/icons/footericons/youtube.svg" alt="" />
            </a>
            {/* <a href="https://www.tiktok.com/@elementsofasoul" target="_blank">
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
            </a> */}
            <a
              href="https://m.facebook.com/elementsofasoul369/"
              target="_blank"
            >
              <img src="/assets/icons/footericons/facebook.svg" alt="" />
            </a>
            {/* <a href="https://kick.com/elementsofasoul" target="_blank">
              <img src="/assets/icons/footericons/kick.svg" alt="" />
            </a>
             */}
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

export default Footer;
