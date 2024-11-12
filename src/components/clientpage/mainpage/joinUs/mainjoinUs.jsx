import React from "react";
import "./joinUs.scss";
import Heading from "../../../heading/heading";
import Secondarybtn from "../../../secondarybtn/secondarybtn";
function MainjoinUs() {
  const openDiscord = () => {
    window.open("https://discord.com/invite/eoas", "_blank", "noreferrer");
  };
  return (
    <section className="joinus-sec">
      <div className="inner">
        <div className="top">
          <img
            src="/assets/images/Client-pages/main-join.png"
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
              The community is ingeniously woven into the gameplay.Community
              members can collaborate to gather the parts to create a robot.
              Craft the robot, sell it for Bitcoin and split the returns between
              the collaborators.
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

export default MainjoinUs;
