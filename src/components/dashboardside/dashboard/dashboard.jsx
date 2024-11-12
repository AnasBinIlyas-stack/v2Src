import React from "react";
import "./dashboard.scss";
import BitcoinChart from "../bitcoinChart/bitcoinChart";
import Merchandise2 from "../merchandise2/merchandise2";
import { useSelector } from "react-redux";
import DDown from "../settings/DDown";
function Dashboard() {
  const nftItems = [
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "+19,30%",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "+19,30%",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "+19,30%",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "+19,30%",
    },
  ];
  const isLoggedIn = useSelector((state) => state.data.login); // Access the login state

  console.log(isLoggedIn, "islogged in");
  const renderNFTItems = () => {
    return nftItems.map((item, index) => (
      <div className="inner-content" key={index}>
        <div className="left-content">
          <img src={item.imgSrc} alt="NFT" />
        </div>
        <div className="right-content">
          <p className="extra-small text-white fw-semibold">
            <span className="pink fw-normal">By</span> {item.by}
          </p>
          <div className="d-flex justify-content-between">
            <p className="extra-small text-white fw-normal">
              <img src="/assets/images/dashboard/diamond.png" alt="Diamond" />
              {item.value}
            </p>
            <p className="extra-small light-green fw-normal">{item.change}</p>
          </div>
        </div>
      </div>
    ));
  };

  const renderDiscordChats = () => {
    return nftItems.map((item, index) => (
      <div className="inner-content hide-border" key={index}>
        <div className="left-content">
          <img src={item.imgSrc} alt="Chat" />
        </div>
        <div className="right-content">
          <p className="extra-small text-white fw-semibold">Players Plot</p>
          <p className="extra-small fw-normal">Lorem ipsum.</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="dashside-content">
      <div className="noti pb-3">
        <DDown />
      </div>
      <div className="dashboard-side">
        <section className="left-side">
          <div className="left-top">
            <div className="left">
              <div className="ist">
                <div className="detail">
                  <img
                    src="/assets/icons/dashboardicons/level.svg"
                    alt="Level Icon"
                  />
                  <div>
                    <h2 className="text-white">37</h2>
                    <p className="extra-small">Game Progress</p>
                  </div>
                  <div className="launching-soon">
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                  </div>
                </div>
                <div className="detail">
                  <img
                    src="/assets/icons/dashboardicons/nftgathered.svg"
                    alt="NFT Gathered Icon"
                  />
                  <div>
                    <h2 className="text-white">55</h2>
                    <p className="extra-small">NFT’s Gathered</p>
                  </div>
                  <div className="launching-soon">
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                  </div>
                </div>
                <div className="detail">
                  <img
                    src="/assets/icons/dashboardicons/loot.svg"
                    alt="Loot Icon"
                  />
                  <div>
                    <h2 className="text-white">55</h2>
                    <p className="extra-small">Loot Battle’s won</p>
                  </div>
                  <div className="launching-soon">
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                    <img src="/assets/icons/fill.svg" alt="Fill Icon" />
                    <p>Launching Soon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle">
              <BitcoinChart />
            </div>
          </div>
          <div className="left-bottom">
            <Merchandise2 head="EOAS" head2="View all" />
            <button className="view-btn">View all</button>
          </div>
        </section>
        <div className="right-side">
          <div className="right-side-content">
            <div className="right-side-inner">
              <p className="large text-white fw-semibold">Trending NFT’s</p>
              {renderNFTItems()}
              <button className="view-btn">See More</button>
            </div>
          </div>
          <div className="right-side-content">
            <div className="right-side-inner">
              <p className="large text-white fw-semibold">Discord Chats</p>
              {renderDiscordChats()}
              <div className="start-chatting">
                <input type="text" placeholder="Start Chatting" />
                <button className="send-btn">
                  <img src="/assets/icons/send.svg" alt="Send Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
