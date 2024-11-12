import React from "react";
import "./register.scss";
function Register() {
  return (
    <section className="register-sec">
      <div className="inner">
        <h3 className="secondary-text textexpansiva-bold fw-bold">
          SUBSCRIBE TO EDAS
        </h3>
        {/* <h5 className="text-bit fw-medium">
          Join the adventure and sign-up today to get notified when we launch!
          Don't wory, we won't send you daily emails.
        </h5> */}
        <div className="register-card">
          <div className="name-div">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email*" />
          <textarea placeholder="Message"></textarea>
          <button>Register</button>
        </div>
      </div>
    </section>
  );
}

export default Register;
