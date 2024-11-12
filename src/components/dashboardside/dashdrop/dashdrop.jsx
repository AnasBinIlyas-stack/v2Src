import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import "./dashdrop.scss";
function Dashdrop({
  onClick,
  categories,
  setCategories,
  dropData,
  title,
  refCustom,
}) {
  return (
    <section
      className="dashboardDropdown-sec "
      onClick={onClick}
      ref={refCustom}
    >
      <div className="drop-main">
        <h5 className="text-white text-inter">{title}</h5>
        {categories ? (
          <Icon icon="mingcute:up-line" style={{ color: "white" }} />
        ) : (
          <Icon icon="mingcute:down-line" style={{ color: "white" }} />
        )}
        {categories ? (
          title == "Categories" ? (
            <div className="drop-options">
              {dropData.map((item, index) => {
                return (
                  <h5 className="text-white text-inter fw-normal">{item}</h5>
                );
              })}
            </div>
          ) : (
            <div className="drop-options">
              {dropData.map((item, index) => {
                return (
                  <h5 className="text-white text-inter fw-normal">
                    Last {item}
                  </h5>
                );
              })}
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Dashdrop;
