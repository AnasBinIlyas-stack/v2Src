import React from "react";
import Button from "../shared/button";
import { useNavigate } from "react-router-dom";

const SwiperImgData = ({
  imgUrl,
  h2Title,
  h1Title,
  text,
  btnMining,
  btnEco,
  btntext,
  btnlink,
  para,
}) => {
  const navigate = useNavigate();

  const Mining = () => {
    navigate(btnlink);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(btnlink);
    }, 500);
  };

  const Eco = () => {
    navigate("/ecosystem");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative z-10 container h-full ">
      <div className="inner flex items-center justify-between xs:flex-col xs:items-center lg:flex-row xs:gap-8 h-full">
        {/* Image on the left */}
        {imgUrl ? (
          <div className="left flex-shrink-0 xs:w-[210px] lg:max-w-[400px] lg:w-auto">
            <img
              src={imgUrl}
              alt={h1Title}
              className="object-contain  h-auto"
            />
          </div>
        ) : (
          <div className="h-auto lg:w-[400px]"></div> // Empty space when no imgUrl
        )}

        {/* Text content */}
        <div className="right flex-1 max-w-[616px] flex items-center justify-center">
          <div className="flex flex-col gap-5 xs:items-center xs:text-center lg:text-left lg:items-start">
            <h4 className="color-mixture text-2xl ">{h2Title}</h4>
            <h5 className="text-[#FAB863] text-xl ">{h1Title}</h5>
            <p className="pb-4 text-white text-sm lg:text-base">{text}</p>
            <p className="pb-4 text-white text-sm lg:text-base">{para}</p>
            <div className="flex flex-col xs:w-64 lg:w-auto gap-4 lg:flex-row">
              {btnMining && (
                <Button
                  text={"Go to mining page"}
                  className="py-3 btn-secondary px-12 lg:px-24 capitalize textexpansiva-bold w-full lg:w-auto"
                  icon="true"
                  onClick={Mining}
                />
              )}
              {btnEco && (
                <Button
                  text={"Go to economy page"}
                  className="py-3 btn-secondary px-12 lg:px-24 capitalize textexpansiva-bold w-full lg:w-auto"
                  icon="true"
                  onClick={Eco}
                />
              )}
              {btntext && (
                <Button
                  text={btntext}
                  className="py-3 rounded-[500px] border-2 border-solid  border-sky-600 px-12 lg:px-24 capitalize textexpansiva-bold w-full lg:w-auto"
                  icon="true"
                  onClick={Mining}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperImgData;
