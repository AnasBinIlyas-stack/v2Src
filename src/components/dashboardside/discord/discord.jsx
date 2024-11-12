import React from "react";
import "./discord.scss";
import Secondarybtn from "../../secondarybtn/secondarybtn";
import DDown from "../settings/DDown";

const Discord = () => {
  const handleConnect = () => {
    window.open("https://discord.com/oauth2/authorize?client_id=1286285727885168680&response_type=code&redirect_uri=https%3A%2F%2Felement-of-soul-git-staging-octalooptechnologies-projects.vercel.app%2Fdiscord%2Fauth&scope=identify+guilds+email+guilds.join+messages.read", "_blank");
  };

  return (
    <div className="dashside-content">
      <div className="noti">
        <DDown />
      </div>
      <div className="discord">
        <h1 className="secondary-text textexpansiva-bold  text-center">
          Connect Your Account to Discord
        </h1>
        <h5 className="text-gold font-italic">
          Link your account for updates and features.
        </h5>
        <div className="connect-btn mt-24">
          <Secondarybtn btntext={"> Connect"} onClick={handleConnect} />
        </div>
        <div className="back-shadow"></div>
        <div className="back-center-shadow"></div>
      </div>
    </div>
  );
};

export default Discord;
