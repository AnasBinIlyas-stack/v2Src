import React, { useEffect, useState } from "react";
import "./cardcomp.scss";
import Secondarybtn from "../secondarybtn/secondarybtn";
function Cardcomp(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.btntext && props.btntext);
  }, []);
  console.log(text);

  return (
    <section className="cardcomp-sec">
      <div className="d-flex flex-column " style={{ rowGap: "5px" }}>
        <h3 className="secondary-text textexpansiva-bold text-center">
          {props.heading}
        </h3>
        {props.subheading ? (
          <h5 className="text-white text-inter text-center">
            {props.subheading}
          </h5>
        ) : (
          ""
        )}
      </div>
      <div className="paras">
        <div className="d-flex flex-column">
          <p className="text-white text-inter fw-normal text-center">
            {props.para}
          </p>
          {props.bottompara ? (
            <p className="text-white text-inter fw-normal text-center">
              {props.bottompara}
            </p>
          ) : (
            ""
          )}
        </div>
        {props.question ? (
          <h5 className="text-white text-inter fw-normal text-center font-italic">
            {props.question}
          </h5>
        ) : (
          ""
        )}
        {props.secondpara ? (
          <p className="text-white text-inter fw-normal text-center">
            {props.secondpara}
          </p>
        ) : (
          ""
        )}
        {props.author ? (
          <h5 className="text-white text-inter fw-normal text-center font-italic">
            {props.author}
          </h5>
        ) : (
          ""
        )}
      </div>
      {text && <Secondarybtn onClick={props.onClick} btntext={props.btntext} />}
    </section>
  );
}

export default Cardcomp;
