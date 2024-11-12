import React, { useState } from "react";
import "./dropdown.scss";
import { DownOutlined } from "@ant-design/icons";
import DropdownS from "./Dropdown";
import { useSelector } from "react-redux";

const DDown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible((prev) => !prev);
  };

  const user = useSelector((state) => state.data.userData);
  
  return (
    <>
      <div
        className="drop-down h-12 p-2 bg-opacity-20 bg-violet-100 rounded-lg d-flex justify-content-center flex-column justify-content-center align-items-end g-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="d-flex w-100 justify-content-center align-items-center gap-4 ">
          <img className="w-9 h-9 rounded-circle" style={{ width: "48px", height: "48px", objectFit: "cover" }} src={user?.profilePicture} alt="User" />
          <div
            className="text-white fs-6 font-normal"
            style={{ fontFamily: "Inter" }}
          >
            {user?.username}
          </div>
          <span onClick={handleToggleDropdown} className="text-white" style={{ cursor: "pointer" }}>
            <DownOutlined style={{ color: "#white" }} />
          </span>
        </div>
        {dropdownVisible && <DropdownS />}
      </div>
    </>
  );
};
export default DDown;
