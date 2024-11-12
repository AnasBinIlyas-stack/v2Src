import React from "react";

import "./btn.scss";
import { useLocation, useNavigate } from "react-router-dom";
function Secondarybtn(props) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="secondarybtn-sec">
      <button
        class="button button--nina button--text-thick button--text-upper button--size-s"
        data-text={props.btntext}
        onClick={async () => {
          if (location.pathname === "/nftmarketplace/createnft") {
            await props.handleCreateNft();
          }
          if (location.pathname === "/auction") {
            await props.handleCreateAuctionNft();
          }
          if (props.path) {
            navigate(props.path);
          } else if (props.onClick) {
            props.onClick();
          }
        }}
      >
        {[...props.btntext].map((singleText, index) => (
          <span key={index} className="singletext">
            {singleText === " " ? "\u00A0" : singleText}
          </span>
        ))}
      </button>
    </section>
  );
}

export default Secondarybtn;
