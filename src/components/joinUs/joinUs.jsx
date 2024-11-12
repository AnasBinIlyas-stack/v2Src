import React from "react";
import "./joinUs.scss";
import Heading from "../heading/heading";
import Secondarybtn from "../secondarybtn/secondarybtn";
function JoinUs() {
  const openDiscord = () => {
    window.open("https://discord.com/invite/eoas", "_blank", "noreferrer");
  };
  return (
    <section className="joinus-sec">
      <div className="inner">
        <div className="top">
          <img
            src="/assets/images/joinus.webp"
            alt="..."
            className="main-img"
          />
          <img
            src="/assets/images/joinusdiscord.webp"
            alt="..."
            className="discord-img"
          />
        </div>
        <div className="bottom">
          <Heading
            mainhead={"Join Us On Discord"}
            secondhead={`Join Us On Discord`}
            para={"Real ownership to the community"}
            class={"text-bit"}
          />
          <div>
            <h5 className="text-white text-inter fw-normal text-center font-italic">
              Text Collaboration between the community and land owners. Is key
              in EOAS, collaborating together to optimize the returns, unlock
              features and rare items. The community and the gamers are
              sophistically woven together. Creating an immersive experience for
              all user’s gamer or not a gamer. Enjoy free nft’s, win prizes,
              craft robots and earn income.
            </h5>
            <h5 className="text-white text-inter fw-normal text-center font-italic">
              This all start form the base in our Discord, want te part? Join
              our dedicated community on Discord!
            </h5>
          </div>
          <Secondarybtn
            btntext={"> Join Discord community"}
            onClick={openDiscord}
          />
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
