import React, { useState } from "react";
// import logo from "../../assets/images/logo.svg";
import eyeCloseImg from "../../../../assets/icons/eyeopen.svg";
import eyeOpenImg from "../../../../assets/icons/eyeClose.svg";
// import Checkbox from "../../components/shared/checkbox";
import { useNavigate } from "react-router-dom";
// import Button from "../../components/shared/button";
import "./signin.scss";
import bgImg from "../../../../assets/account/backImg.webp";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLogin, setUserData } from '../../../redux/dataSlice'; // Adjust the import based on your file structure



const SignInPage = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.email === "") newErrors.email = "Email is required.";
    if (formData.password === "") newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async () => {
    setLoading(true);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    } else {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/auth/user/signin`, {
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          localStorage.setItem("token", res?.data?.token);
          toast.success(res?.data?.message || "Sign in Successful");
          console.log(res?.data);
          dispatch(setUserData(res?.data?.user));
          dispatch(setLogin(true));
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Error Signing Up");
        }).finally(() => {
          setLoading(false);
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
            <h3>SIGN IN</h3>
            <div className="flex-col gap-7">
              <input
                type="email"
                placeholder="Enter your email"
                label="Email"
                name="email"
                value={formData?.email}
                errorMessage={errors.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-danger small mt-1">{errors.email}</p>
              )}
              <div className="inputs gap_32">
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter your password"
                  label="Password"
                  name="password"
                  value={formData?.password}
                  errorMessage={errors.password}
                  onChange={handleChange}
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="pe-3"
                >
                  {showPassword ? (
                    <>
                      <img src={eyeOpenImg} alt="eye" />
                    </>
                  ) : (
                    <>
                      <img src={eyeCloseImg} alt="eye" />
                    </>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className=" text-danger small mt-1">{errors.password}</p>
              )}
              <div className="remember" onClick={() => navigate("/auth/reset")}>
                <p className="cursor-pointer text-blue-600">Forgot Password?</p>
              </div>
              <button className="btn_primary mt_60" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <div className="spinner-border" role="status" style={{ width: "20px", height: "20px" }}>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Log in"
                )}
              </button>

              <div>
                <p className="font-semibold text-center text-white">
                  Don't have an account?
                  <span
                    className="cursor-pointer text-blue-600"
                    onClick={() => navigate("/auth/signup")}
                  >
                    {" "}
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
