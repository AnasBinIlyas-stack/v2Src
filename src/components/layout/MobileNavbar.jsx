import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import MiningImage from "../../assets/images/newImgs/mining.svg";
import StoryImage from "../../assets/images/newImgs/story.svg";
import GameImage from "../../assets/images/newImgs/eoasgame.svg";
import EcoImage from "../../assets/images/newImgs/ecosystem.svg";
import DocsImage from "../../assets/images/newImgs/docs.svg";
import DiscordImage from "../../assets/images/newImgs/discord.svg";
import characterImage from "../../assets/images/newImgs/character.svg";
import LandImage from "../../assets/images/newImgs/land.svg";
import Logo from "../../assets/images/mainlogo.png";

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
    link: "https://elementsofasoul.gitbook.io/elements-of-a-soul",
    target: "_blank",
    imagePath: DocsImage,
  },
  {
    id: 7,
    title: "discord",
    link: "/discord",
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

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="lg:hidden flex w-full items-center justify-between px-4 py-2">
        <NavLink to="/" onClick={onClose}>
          <img src={Logo} alt="Logo" className="w-[100px] h-auto" />
        </NavLink>
        <Button
          onClick={showDrawer}
          className="text-white font-semibold bg-transparent z-50"
        >
          {open ? <RxCross1 size={20} /> : <GiHamburgerMenu size={20} />}
        </Button>
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        bodyStyle={{ backgroundColor: "#1A1A1A" }} // Adjust the background color as needed
        className=""
      >
        <div className="flex justify-center py-4 z-10 ">
          <NavLink to="/" onClick={onClose}>
            <img src={Logo} alt="Logo" className="w-[100px] h-auto" />
          </NavLink>
        </div>
        <div className="flex flex-col items-center space-y-6 py-8 z-10">
          {navlinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              target={item.target || "_self"}
              onClick={onClose} // Close drawer on link click
              className="flex items-center gap-3 text-white text-lg"
            >
              <img src={item.imagePath} alt={item.title} className="w-6 h-6" />
              <span className="uppercase">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
