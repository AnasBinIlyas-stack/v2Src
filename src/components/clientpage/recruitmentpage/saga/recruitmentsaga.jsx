import React from "react";
import "./saga.scss";
import Cardcomp from "../../../cardcomp/cardcomp";
function Recruitmentsaga() {
  return (
    <section className="recruitment-saga">
      <div className="inner">
        <Cardcomp
          heading={"Join Us On Discord"}
          subheading={"The Original Saga Of Elements of a Soul Begins "}
          para={
            "Exciting new features coming soon! Be part of the legend in Elements of a Soul! "
          }
          btntext={"> Join Discord community"}
        />
      </div>
    </section>
  );
}

export default Recruitmentsaga;
