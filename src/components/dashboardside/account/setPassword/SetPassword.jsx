import React, { useState } from "react";
import bgImg from "../../../../assets/account/backImg.webp";
import "../signin/signin.scss";
import eyeCloseImg from "../../../../assets/icons/eyeopen.svg";
import eyeOpenImg from "../../../../assets/icons/eyeClose.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const email = location?.state?.email;

  const handleSubmit = () => {
    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    } else if (!confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Confirm Password is required" });
      return;
    } else if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    } else {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/api/auth/user/reset-password`,
          {
            email: email,
            password: password,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Password Changed Successfully");
          navigate("/auth/signin");
          setPassword("");
          setConfirmPassword("");
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            err?.response?.data?.message || "failed to change Password"
          );
        });
    }
  };
  return (
    <>
      <section className="account">
        <img src="../../../../assets/icons/logo.svg" alt="" className="logo" />
        <img src={bgImg} alt="" className="bg_img" />
        <div className="container">
          <div className="form-wrapper">
            <h3>
              SET A
              <br /> PASSWORD
            </h3>
            <div className="flex-col gap-4">
              <div className="inputs">
                <input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Enter New Password"
                  label="password"
                  name="password"
                  value={password}
                  errorMessage={errors.password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: "" });
                  }}
                />

                <button onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? (
                    <>
                      <img src={eyeOpenImg} alt="eye" className="eye" />
                    </>
                  ) : (
                    <>
                      <>
                        <img src={eyeCloseImg} alt="eye" className="eye" />
                      </>
                    </>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-danger small mt-n3">{errors.password}</p>
              )}
              <div className="inputs">
                <input
                  type={!showPasswordTwo ? "password" : "text"}
                  placeholder="Confirm Password"
                  label="password"
                  name="password"
                  value={confirmPassword}
                  errorMessage={errors.confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors({ ...errors, confirmPassword: "" });
                  }}
                />

                <button onClick={() => setShowPasswordTwo(!showPasswordTwo)}>
                  {!showPasswordTwo ? (
                    <>
                      <>
                        <img src={eyeOpenImg} alt="eye" />
                      </>
                    </>
                  ) : (
                    <>
                      <img src={eyeCloseImg} alt="eye" />
                    </>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-danger small mt-n3">
                  {errors.confirmPassword}
                </p>
              )}
              <button className="btn_primary" onClick={() => handleSubmit()}>
                Confirm
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SetPassword;
