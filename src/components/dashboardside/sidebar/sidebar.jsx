import React from "react";
import "./sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch } from "react-redux";
import { setLogin, setUserData } from "../../redux/dataSlice";
import { toast } from "react-toastify";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLogin(false));
    dispatch(setUserData({}));
    toast.success("Logged out successfully");
    navigate("/");
  }

  return (
    <section className="sidebar-sec">
      <div className="top">
        <img
          src="/assets/icons/logo.svg"
          alt="..."
          className="dashboard-logo"
        />
      </div>
      <div className="center">
        <NavLink to="/dashboard">
          <Icon
            icon="akar-icons:dashboard"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Dashboard</p>
        </NavLink>
        <NavLink to="/game">
          <Icon
            icon="mingcute:game-2-line"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Game</p>
        </NavLink>
        <NavLink to="/dashmining">
          <Icon
            icon="hugeicons:mining-03"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Mining</p>
        </NavLink>
        <NavLink to="/discord">
          <Icon
            icon="ri:discord-line"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Discord</p>
        </NavLink>
        <NavLink to="/book">
          <Icon
            icon="mage:book"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Book</p>
        </NavLink>
        <NavLink to="/audio">
          <Icon
            icon="hugeicons:file-audio"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Audio</p>
        </NavLink>
        <NavLink to="/merchandise2">
          <Icon
            icon="mage:dashboard-3"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Merchandise</p>
        </NavLink>
        <NavLink to="/movie">
          <Icon
            icon="fluent:movies-and-tv-24-regular"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Movie</p>
        </NavLink>
        <NavLink to="/assets">
          <Icon
            icon="fluent:movies-and-tv-24-regular"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Asset’s</p>
        </NavLink>
        <NavLink to="/settings">
          <Icon
            icon="fluent:settings-24-regular"
            width="22"
            height="22"
            style={{ color: "white" }}
          />
          <p className="text-inter text-white fw-medium">Settings</p>
        </NavLink>
      </div>
      <div className="bottom" onClick={handleLogout}>
        <Icon
          icon="uiw:logout"
          width="20"
          height="20"
          style={{ color: "white" }}
        />
        <p className="text-inter text-white fw-medium">Logout</p>
      </div>
    </section>
  );
}

export default Sidebar;
