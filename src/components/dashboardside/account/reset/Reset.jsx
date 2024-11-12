import React, { useState } from "react";
import bgImg from "../../../../assets/account/backImg.webp";
import "../signin/signin.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email === "") {
      setError("email is required");
    } else {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/auth/user/verify-email`, {
          email: email,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/auth/verify", { state: { email: email, Boolean: true } });
          toast.success(res.data.message || "otp sent to your email");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message);
        });
    }
  };
  return (
    <>
      <section className="account ">
        <img src="../../../../assets/icons/logo.svg" alt="" className="logo" />
        <img src={bgImg} alt="" className="bg_img" />
        <div className="container">
          <div className="form-wrapper">
            <h3>
              RESET <br />
              PASSWORD
            </h3>
            <div className="flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="btn_secondary  mt_60"
                onClick={() => navigate("/auth/signin")}
              >
                Go Back
              </button>
              <button className="btn_primary" onClick={() => handleSubmit()}>
                Verify                
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;
