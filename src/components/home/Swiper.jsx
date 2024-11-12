import React from "react";
import { Carousel } from "antd";
import SwiperData from "./SwiperData";

const slidesData = [
  {
    videoUrl:
      "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    h2Title: "First H2 Title",
    h1Title: "First H1 Title",
    text: "First section content text goes here.",
  },
  {
    videoUrl:
      "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    h2Title: "Second H2 Title",
    h1Title: "Second H1 Title",
    text: "Second section content text goes here.",
  },
  {
    videoUrl:
      "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    h2Title: "Third H2 Title",
    h1Title: "Third H1 Title",
    text: "Third section content text goes here.",
  },
  {
    videoUrl:
      "https://qazibucket-dest.s3.us-east-2.amazonaws.com/octaloop/serviceVideo.mp4",
    h2Title: "Fourth H2 Title",
    h1Title: "Fourth H1 Title",
    text: "Fourth section content text goes here.",
  },
];

const Swiper = () => (
  <Carousel arrows dotPosition="right" infinite={false}>
    {slidesData.map((slide, index) => (
      <div key={index} >
        <SwiperData
          videoUrl={slide.videoUrl}
          h2Title={slide.h2Title}
          h1Title={slide.h1Title}
          text={slide.text}
         
        />
      </div>
    ))}
  </Carousel>
);

export default Swiper;
