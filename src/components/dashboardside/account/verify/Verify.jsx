import React, { useState } from "react";
import bgImg from "../../../../assets/account/backImg.webp";
import "../signin/signin.scss";
import eyeCloseImg from "../../../../assets/icons/eyeopen.svg";
import eyeOpenImg from "../../../../assets/icons/eyeClose.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;
  const fromReset = location?.state?.Boolean;

  const handleSubmit = () => {
    console.log(email, code);
    if (fromReset) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/api/auth/user/verify-resetcode`,
          {
            email: email,
            otp: code,
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Code Recieved successfully");
          navigate("/auth/setpassword", { state: { email } });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.data?.message || "error Verifying Code");
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/auth/user/verify-code`, {
          email: email,
          otp: code,
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Sign Up Complete");
          navigate("/auth/signin");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.data?.message || "error Verifying Code");
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
            <h3>Verify Code</h3>
            <div className="flex-col gap-4">
              <div className="inputs">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Code"
                  label="Code"
                  name="code"
                  value={code}
                  errorMessage={errors}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setErrors("");
                  }}
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
              <div className="notRecieve">
                <p className="font-semibold text-center text-white">
                  Didn't receive a code ?
                  <span className="cursor-pointer text-blue-600">
                    {" "}
                    Resend Email
                  </span>
                </p>
              </div>
              <button
                className="btn_secondary  mt_60"
                onClick={() => navigate("/auth/signup")}
              >
                Go Back
              </button>
              <button onClick={() => handleSubmit()} className="btn_primary">
                {" "}
                Send
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
