/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarImage from "../../assets/images/navbar.png";
import MiningImage from "../../assets/images/newImgs/mining.svg";
import StoryImage from "../../assets/images/newImgs/story.svg";
import LoreImage from "../../assets/images/newImgs/lore.svg";
import GameImage from "../../assets/images/newImgs//eoasgame.svg";
import EcoImage from "../../assets/images/newImgs/ecosystem.svg";
import DocsImage from "../../assets/images/newImgs/docs.svg";
import DiscordImage from "../../assets/images/newImgs/discord.svg";
import characterImage from "../../assets/images/newImgs/character.svg";
import LandImage from "../../assets/images/newImgs/land.svg";
import UserIcon from "../../assets/images/usericon.png";
import Arrowbelow from "../../assets/images/arrowbelow.png";
import Logo from "../../assets/images/mainlogo.png";
import { NavLink } from "react-router-dom";
import Button from "../shared/button";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navlinks = [
    {
      id: 1,
      title: "mining",
      link: "/mining",
      imagePath: MiningImage,
    },
    {
      id: 2,
      title: "story",
      link: "/story",
      imagePath: StoryImage,
    },
    // {
    //   id: 3,
    //   title: "Lore",
    //   link: "/lore",
    //   imagePath: LoreImage,
    // },
    {
      id: 4,
      title: "eoas game",
      link: "/eoasgame",
      imagePath: GameImage,
    },
    {
      id: 5,
      title: "ecosystem",
      link: "/ecosystem",
      imagePath: EcoImage,
    },
    {
      id: 6,
      title: "docs",
      target: "_blank",
      link: "https://elementsofasoul.gitbook.io/elements-of-a-soul",
      //  <NavLink
      //       to="https://elementsofasoul.gitbook.io/elements-of-a-soul"
      //       className="text-white text-inter"
      //       target="_blank"
      //     >
      //       DOCS
      //     </NavLink>,
      imagePath: DocsImage,
    },
    {
      id: 7,
      title: "discord",
      target: "_blank",
      link: "https://discord.com/invite/eoas",
      imagePath: DiscordImage,
    },
    {
      id: 8,
      title: "character",
      link: "/character",
      imagePath: characterImage,
    },
    {
      id: 9,
      title: "land",
      link: "/land",
      imagePath: LandImage,
    },
  ];
  return (
    <nav className="navbar-sec absolute top-4 w-full left-0 z-50 overflow-x-hidden-hidden">
      <div className="desktop-nav container  items-center  flex  gap-20">
        <NavLink to="/" className="w-[129px] h-[70px]">
          <img
            src={Logo}
            alt=""
            className="h-full min-w-32 w-full object-cover"
          />
        </NavLink>
        <div className="xl:ps-32 h-[98px]  relative flex items-center justify-between lg:gap-1 2xl:gap-10">
          <ul className="flex items-center justify-center lg:gap-6 lg10:gap-8 z-10">
            {navlinks.map((data) => (
              <NavLink
                to={data.link}
                key={data.id}
                className={"flex flex-col gap-0 items-center cursor-pointer"}
                target={data.target ? "_blank" : "_self"}
              >
                <img src={data.imagePath} alt="" className="" />
                <p className="uppercase text-[11px] min-w-14 text-center text-white">
                  {data.title}
                </p>
              </NavLink>
            ))}
          </ul>
          <div className="ps-5 relative z-20">
            <button
              onClick={toggleDropdown}
              className="p-3 flex justify-center items-center gap-1 rounded-[398px] w-[106px] border-solid border-2 border-fuchsia-500"
            >
              <img src={UserIcon} alt="User Icon" className="w-[35px]" />
              <img src={Arrowbelow} alt="Arrow Icon" className="w-[20px]" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute top-full mt-2 w-[180px] bg-fuchsia-900/70 rounded-[15px] border-2 border-fuchsia-600 flex flex-col items-center z-50
              "
                // style={{ backgroundColor: "rgba(207, 16, 210, 0.1)" }}
              >
                <div className="w-full outline-none border-none h-px opacity-30 bg-gradient-to-r from-black via-black to-black"></div>
                <div className="w-full h-px mt-[54px] opacity-30 bg-gradient-to-r from-black via-black to-black"></div>

                <div className="w-full h-[54px] flex items-center justify-center px-6 py-4">
                  <div className="text-white text-base font-semibold font-['Inter']">
                    Connect Wallet
                  </div>
                </div>
                <div className="w-full h-[54px] flex items-center justify-center py-4">
                  <div className="text-white text-base font-semibold font-['Inter']">
                    Log In
                  </div>
                </div>
                <div className="w-full h-[54px] flex items-center justify-center py-4">
                  <div className="text-white text-base font-semibold font-['Inter']">
                    Sign Up
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="absolute top-0 -left-8 w-screen h-full  ">
            <img src={NavbarImage} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
