import React from "react";
import "./heading.scss";
function Heading(props) {
  return (
    <section className="heading-sec">
      {props.mainhead ? (
        <h1 className="textexpansiva-bold">{props.mainhead}</h1>
      ) : (
        ""
      )}
      <h3
        className="textexpansiva-bold"
        style={{ marginTop: props.mainhead ? "-32px" : "0" }}
      >
        {props.secondhead}
      </h3>

      {props.para ? (
        <p className={`${props.class} text-inter fw-medium heading-para`}>
          {props.para}
        </p>
      ) : (
        ""
      )}
    </section>
  );
}

export default Heading;
