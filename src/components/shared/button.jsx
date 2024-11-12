import React from "react";
import loader from "../../assets/icons/loading.svg";
import Icon from "../../assets/images/arrowicon.png";

const Button = ({
  text,
  img,
  className,
  onClick,
  minHeight,
  maxHeight,
  minWidth,
  height,
  width,
  disabled,
  imgClass,
  loading = false,
  maxWidth,
  padding,
  icon,
}) => {
  const buttonStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth: maxWidth,
    height: height,
    width: width,
    padding: padding,
  };
  if (loading) {
    disabled = true;
  }
  return (
    <div className="mybtn">
      <button
        className={className}
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
      >
        {loading ? (
          <>
            <span className="flex justify-center  items-center gap-2">
              {text}
              <img src={loader} alt="" className="w-5 rotate-360 invert" />
            </span>
          </>
        ) : (
          <span className="flex items-center gap-2">
            {img && <img src={img} alt="Button Image" className={imgClass} />}
            {icon && <img src={Icon} alt="Button Image" className={imgClass} />}
            <span className="">{text}</span>
          </span>
        )}
      </button>
    </div>
  );
};
export default Button;
