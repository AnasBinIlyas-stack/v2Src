// AccountSetting.js
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AccountSetting = ({ loading, fileInputRef, watch, register, user, setValue, handleSubmit, setLoading }) => {
  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("profilePicture", file);
    }
  };

  const submitUserData = (data) => {
    delete data.password;
    delete data.newPassword;
    delete data.repeatPassword;
    delete data.username;

    if (!data.profilePicture) {
      toast.error("Please select a profile picture");
      return;
    }

    if (data.profilePicture === user?.profilePicture) {
      toast.error("No changes made");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth/user/update-user-profile`;

    axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      toast.success(res.data.message);
    }).catch((err) => {
      toast.error(err?.response?.data?.message || "An error occurred updating your profile");
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="account-setting">
      <form className="form" onSubmit={handleSubmit(submitUserData)}>
        <div className="image position-relative">
          <label
            style={{
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
          <div className="d-flex justify-content-center align-items-center overflow-hidden">
            <img
              src={(watch("profilePicture") === user?.profilePicture) ? watch("profilePicture") : URL.createObjectURL(watch("profilePicture"))}
              alt="gallery"
              width={50}
              height={70}
              style={{
                objectFit: "cover",
                height: "160px",
                width: "160px",
                cursor: "pointer",
              }}
              onClick={() => fileInputRef.current.click()}
            />
          </div>
        </div>
        <div className="bottom gap-5 pt-5">
          <div className="input-group">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="input-field"
              placeholder="John Doe"
              {...register("username")}
              disabled
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="test123@gmail.com"
              value={watch("email") || ""}
              disabled
            />
          </div>
        </div>
        <div className="btn d-flex justify-content-end ">
          <button
            type="submit"
            className="bgg w-25 mt-4 center text-white textexpansiva-bold"
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

export default AccountSetting;
