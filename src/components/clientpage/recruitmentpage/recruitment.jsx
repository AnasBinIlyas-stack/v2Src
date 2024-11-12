import React from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import NftMarquee from "../../marquee/marquee";
import RecruitmentBanner from "./eoasBanner/recruitmentBanner";
import Recruitmentlands from "./wildlands/recruitmentlands";
import Recruitmentsaga from "./saga/recruitmentsaga";

const Recruitment = () => {
  return (
    <div>
      <Navbar />
      <RecruitmentBanner />
      <NftMarquee
        innertext={"launches soon - Ranking system - launches soon"}
      />
      <Recruitmentlands />
      <Recruitmentsaga />
      {/* <Footer /> */}
    </div>
  );
};

export default Recruitment;
