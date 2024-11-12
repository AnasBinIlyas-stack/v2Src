import React from "react";
import "./nftDetail.scss";
import Secondarybtn from "../../../secondarybtn/secondarybtn";
import { Link } from "react-router-dom";

const NftDetail = () => {
  const valueFields = [
    { label: "Physical Items listed", value: "2,000" },
    { label: "Digital Item Listed", value: "3,000" },
    { label: "Vol SOL", value: "2.5 SOL" },
    { label: "Native SLP Token", value: "100" },
    { label: "Num Of Item Sold", value: "150" },
    {
      label: "Amount",
      value: "2.5 SOL",
      icon: "/assets/icons/ethereum.svg",
    },
  ];

  return (
    <div>
      <div className="nft-detail d-flex align-items-center justify-content-center flex-column gap-117">
        <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
          NFT DETAILS
        </h1>
        <div className="nft-content d-flex gap-100">
          <div className="close">
            <img src="/assets/icons/close.svg" alt="" />
          </div>
          <div className="left-content d-flex flex-column align-items-center justify-content-center gap-72">
            <img
              src="/assets/images/nftmarketplace/plot.png"
              alt=""
              className="img-fluid"
            />
            <Secondarybtn btntext="> BUY" />
          </div>
          <div className="right-content d-flex flex-column gap-36">
            <h1 className="h1-small text-white fw-bold">PLAYER PLOT</h1>
            <div className="value-fields">
              {valueFields.map((field, index) => (
                <div
                  className="field d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <p className="small text-white fw-light">{field.label}</p>
                  <p className="small text-white fw-bold d-flex align-items-center">
                    {field.value}{" "}
                    <img
                      src={field.icon}
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </p>
                </div>
              ))}
            </div>
            <div className="description d-flex flex-column gap-8">
              <h4 className="text-white fw-bold">Description</h4>
              <p className="small text-white fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
                id augue quis at et duis lacus posuere. Venenatis dolor in justo
                pulvinar urna, faucibus purus pretiurhoncus. Maecenas nunc eu
                nisl condimentum consectetur adipiscing rutrum tortoreuismod.
                Nunc mattis quam proin mauris. In risus porta egestas semper ac
                nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Arcu, id augue quis at et duis lacus posuere. Venenatis dolor in
                justo pulvinar urna, faucibus purus pretiumrhoncus. Maecenas
                nunc eu nisl condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetail;
