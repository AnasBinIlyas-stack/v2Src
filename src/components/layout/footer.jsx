import React from "react";
import "../../style/page/_footer.scss";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/footer-icons/logo.svg";
import twitter from "../../assets/icons/footer-icons/twitter.svg";
import yt from "../../assets/icons/footer-icons/mdi_youtube.svg";
import fb from "../../assets/icons/footer-icons/facebook.svg";
import cloud from "../../assets/icons/footer-icons/cloud.svg";
import discord from "../../assets/icons/footer-icons/discord.svg";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTopSmooth();
  };

  return (
    <section className="footer-sec ">
      <div className="inner container pb-4">
        <div className="footer-top">
          <img
            src={logo}
            alt="..."
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigation("/")}
            className="footer-icon"
          />
          <div className="pages">
            <NavLink
              to="/"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              HOME
            </NavLink>
            <NavLink
              to="/eoasgame"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              EOAS GAME
            </NavLink>
            <NavLink
              to="/story"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              STORY
            </NavLink>
            {/* <NavLink
              to="/lore"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              LORE
            </NavLink> */}
            <NavLink
              to="/mining"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              MINING
            </NavLink>
            <NavLink
              to="/ecosystem"
              className="text-white text-inter"
              onClick={scrollToTopSmooth}
            >
              ECOSYSTEM
            </NavLink>
            <NavLink
              to="https://elementsofasoul.gitbook.io/elements-of-a-soul"
              className="text-white text-inter"
              target="_blank"
            >
              DOCS
            </NavLink>
          </div>
          <div className="social-icons">
            <a href="https://discord.com/invite/eoas" target="_blank">
              <img src={discord} alt="" />
            </a>
            <a href="https://x.com/ElementsofaSoul" target="_blank">
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrNASt96lwJv-VsjKJTBApg"
              target="_blank"
            >
              <img src={yt} alt="" />
            </a>
            <a
              href="https://m.facebook.com/elementsofasoul369/"
              target="_blank"
            >
              <img src={fb} alt="" />
            </a>
            <a href="https://soundcloud.com/elements-of-a-soul" target="_blank">
              <img src={cloud} alt="" />
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
};

export default Footer;
