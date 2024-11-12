import Image from "../../assets/images/blackshadebox.png";

const BlackSectionFooter = () => {
  return (
    <div
      className="absolute z-50 -bottom-10 w-full h-20  bg-black right-2"
      style={{ boxShadow: "0 0 20px 20px" }}
    >
      {/* <img src={Image} alt="" /> */}
    </div>
  );
};

export default BlackSectionFooter;
