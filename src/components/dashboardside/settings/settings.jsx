import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AccountSetting from "./AccountSetting";
import PasswordSetting from "./PassSetting";
import acc from "../../../assets/icons/accountS.svg";
import pass from "../../../assets/icons/passwordS.svg";
import "./setting.scss";
import DDown from "./DDown";
import axios from "axios";
import { toast } from "react-toastify";

// Define the form validation schema using zod

const schema = z.object({
  profilePicture: z.any().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  newPassword: z.string().optional(),
  repeatPassword: z.string().optional(),
});

const Setting = () => {
  const [activeTab, setActiveTab] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      profilePicture: "",
      username: "",
      password: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth/user/get-user`;
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      setUser(res.data.user);
      setValue("email", res.data.user.email);
      setValue("profilePicture", res.data.user.profilePicture);
      setValue("username", res.data.user.username);
    }).catch((err) => {
      toast.error(err?.response?.data?.message || "An error occurred fetching your data");
    });
  }, [setValue]);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="dashside-content">
      <div className="noti">
        <DDown />
      </div>
      {/* <div className="d-flex justify-content-center align-items-center w-12 h-12">
          <div className="d-flex flex-column justify-content-start align-items-start w-75 h-75">
            <img src={noti} alt="noti" width={30} height={30} />
          </div>
        </div> */}

      <h3 className="textexpansiva-bold ">Settings</h3>
      <div className="main-container">
        <div className="sidebar">
          <div className="menu">
            <div
              className={`menu-item cursor-pointer ${activeTab === "account" ? "active" : ""
                }`}
              onClick={() => setActiveTab("account")}
            >
              <div className="text">
                {" "}
                <img src={acc} alt="" /> Account settings
              </div>
            </div>
            <div
              className={`menu-item cursor-pointer ${activeTab === "password" ? "active" : ""
                }`}
              onClick={() => setActiveTab("password")}
            >
              <div className="text">
                <img src={pass} alt="" /> Password settings
              </div>
            </div>
          </div>
        </div>
        <div className="content-area">
          {activeTab === "account" && (
            <AccountSetting loading={loading} setLoading={setLoading} fileInputRef={fileInputRef} watch={watch} register={register} user={user} setValue={setValue} handleSubmit={handleSubmit}/>
          )}
          {activeTab === "password" && (
            <PasswordSetting
              register={register}
              errors={errors}
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
              setLoading={setLoading}
              loading={loading}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
