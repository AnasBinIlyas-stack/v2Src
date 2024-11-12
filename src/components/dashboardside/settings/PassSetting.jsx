import React from "react";
import eyeclose from "../../../assets/icons/eyeClose.svg";
import eyeopen from "../../../assets/icons/eyeopen.svg";
import "./setting.scss";
import { toast } from "react-toastify";
import axios from "axios";

const PasswordSetting = ({
  register,
  errors,
  showPassword,
  handlePasswordToggle,
  setLoading,
  loading,
  handleSubmit,
}) => {
  const submitPasswordChange = (data) => {
    if(data.password === "" || data.newPassword === "" || data.repeatPassword === "") {
      toast.error("All fields are required");
      return;
    }
    if(data.newPassword !== data.repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }
    delete data.repeatPassword;
    delete data.profilePicture;
    delete data.username;
    setLoading(true);
    
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth/user/update-user-password`;

    axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      toast.success(res.data.message);
    }).catch((err) => {
      toast.error(err?.response?.data?.message || "An error occurred updating your password");
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="password-setting">
      <form className="form mt-3" onSubmit={handleSubmit(submitPasswordChange)}>
        <div className="top pt-5">
          <div className="input-group">
            <p className="p">Current Password</p>
            <label className="label " htmlFor="old-password">
              Password
            </label>
            <input
              id="old-password"
              type={showPassword ? "password" : "text"}
              className="input-field pe-3"
              placeholder="Old Password"
              {...register("password")}
            />
            <div onClick={handlePasswordToggle} className="toggle-icon">
              <img
                src={showPassword ? eyeclose : eyeopen}
                alt="toggle"
                width={22}
                height={22}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "1.85rem",
                  bottom: "1.7rem",
                }}
              />
            </div>
          </div>
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.password?.message}
          </p>
        </div>
        <p className="p pt-5">Change Password</p>
        <div className="bottom">
          <div className="input-group">
            <label className="label" htmlFor="new-password">
              New Password
            </label>
            <input
              id="new-password"
              type={showPassword ? "password" : "text"}
              className="input-field pe-3"
              placeholder="New Password"
              {...register("newPassword")}
            />
            <div onClick={handlePasswordToggle} className="toggle-icon">
              <img
                src={showPassword ? eyeclose : eyeopen}
                alt="toggle"
                width={22}
                height={22}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "1.85rem",
                  bottom: "1.3rem",
                }}
              />
            </div>
          </div>
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.newPassword?.message}
          </p>
          <div className="input-group">
            <label className="label" htmlFor="repeat-password">
              Repeat Password
            </label>
            <input
              id="repeat-password"
              type={showPassword ? "password": "text"}
              className="input-field"
              placeholder="Repeat Password"
              {...register("repeatPassword")}
            />
            <div onClick={handlePasswordToggle} className="toggle-icon">
              <img
                src={showPassword ? eyeclose : eyeopen}
                alt="toggle"
                width={22}
                height={22}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "1.85rem",
                  bottom: "1.3rem",
                }}
              />
            </div>
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.repeatPassword?.message}
            </p>
          </div>
        </div>
        <div className="btn d-flex justify-content-end ">
          <button
            type="submit"
            className="bgg w-25 mt-4 center text-white"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner-border" role="status" style={{ width: "20px", height: "20px" }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordSetting;
