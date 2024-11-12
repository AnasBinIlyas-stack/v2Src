import React, { useState } from "react";
import bgImg from "../../../../assets/account/backImg.webp";
import "../signin/signin.scss";
import eyeCloseImg from "../../../../assets/icons/eyeopen.svg";
import eyeOpenImg from "../../../../assets/icons/eyeClose.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  console.log(process.env.REACT_APP_BASE_URL);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    console.log(formData);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/user/signup`, {
        username: formData.userName,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data?.message || "signup success");
        navigate("/auth/verify", { state: { email: formData.email } });
        setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
        toast.error(err.response?.data?.message);
      });
  };

  return (
    <>
      <section className="account">
        <img src="../../../../assets/icons/logo.svg" alt="" className="logo" />
        <img src={bgImg} alt="" className="bg_img" />
        <div className="container">
          <div className="form-wrapper">
            <h3>SIGN UP</h3>
            <div className="flex-col gap-7">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={formData?.userName}
                errorMessage={errors.userName}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData?.email}
                errorMessage={errors.email}
                onChange={(e) => handleChange(e)}
              />
              <div className="inputs gap_32">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  label="Password"
                  name="password"
                  value={formData?.password}
                  errorMessage={errors.password}
                  onChange={(e) => handleChange(e)}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="pe-3"
                >
                  {showPassword ? (
                    <img src={eyeCloseImg} alt="eye" />
                  ) : (
                    <img src={eyeOpenImg} alt="eye" />
                  )}
                </button>
              </div>
              <div className="inputs gap_32">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  label="confirmPassword"
                  name="confirmPassword"
                  value={formData?.confirmPassword}
                  errorMessage={errors.confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="pe-3"
                >
                  {showConfirmPassword ? (
                    <img src={eyeCloseImg} alt="eye" />
                  ) : (
                    <img src={eyeOpenImg} alt="eye" />
                  )}
                </button>
              </div>
              <button
                className="btn_primary mt_60"
                onClick={() => handleSubmit()}
              >
                Sign Up
              </button>
            </div>
            <div className="pt-2">
              <p className="font-semibold text-center text-white ">
                Already have an account?
                <span
                  className="cursor-pointer text-blue-600"
                  onClick={() => navigate("/auth/signin")}
                >
                  {" "}
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
