import React from "react";
import "./gamefi.scss";
import Cardcomp from "../../../cardcomp/cardcomp";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Guildgamefi = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const accessToken = localStorage.getItem("user_access_token");
    axios.post(
      `${process.env.REACT_APP_BASE_URL}/discord/joinServer`,
      {
        guild_id: "1286621565433417748",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => {
        toast.success(res.data.message || "Joined the server successfully");
        navigate("/discord/discordinner");
      }).catch((err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");
      });
  };
  return (
    <div>
      <div className="guildgamefi">
        <Cardcomp
          heading={"Join Us On Discord"}
          para={
            "Exciting new features coming soon! Be part of the legend in Elements of a Soul!"
          }
          btntext={"> Join Discord community"}
          onClick={handleClick}
        />
        <div className="skeleton">
          <img src="/assets/images/Client-pages/brainskeleton.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Guildgamefi;
