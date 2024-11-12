import React from "react";
import BlackSectionFooter from "../shared/BlackSectionFooter";

const FlipCards = ({ bgThumbnail, backShadow }) => {
  return (
    <div className="cards bg-[#000818] flex flex-col justify-center items-center gap-4 xs:pt-28 sm:pt-80 pb-10 overflow-hidden">
      <div className="flex xs:flex-col xs:gap-16 sm:gap-20 lg10:gap-0 xl:gap-0 2xl:gap-20 lg10:flex-row">
        <div className="flex w-full max-w-[690px] lg10:translate-x-10 sm:translate-x-0 xs:flex-wrap sm:flex-nowrap xs:flex-col sm:flex-row xs:translate-x-0 xs:justify-center xs:gap-5 sm:gap-6">
          {/* First Card */}
          <div className="gap-0 origin-bottom-left -skew-y-12 transform xs:translate-x-0 sm:translate-x-10">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/dodeca.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio16.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="min-w-[143.84px] color-mixture">
              Pyroclast Essence
            </h5>
          </div>
          {/* Second Card */}
          <div className="gap-0 origin-bottom-left -skew-y-12 transform xs:translate-x-0 sm:-translate-x-5">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/sphere.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio24.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="w-[143.84px] color-mixture">Quantum Qubit</h5>
          </div>
          {/* Third Card */}
          <div className="gap-0 origin-bottom-left -skew-y-12 transform xs:translate-x-0 sm:-translate-x-20">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/icosa.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio16.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="w-[143.84px] color-mixture">Bitonium</h5>
          </div>
        </div>

        <div className="flex w-full max-w-[690px] lg10:-translate-x-10 sm:translate-x-0 xs:flex-wrap sm:flex-nowrap xs:flex-col sm:flex-row xs:translate-x-0 xs:justify-center xs:gap-5 sm:gap-6">
          {/* Fourth Card */}
          <div className="gap-0 origin-bottom-right skew-y-12 z-20 xs:translate-x-0 sm:translate-x-10 ">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/tetrea.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio25.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="min-w-[143.84px] color-mixture text-right">
              Harmonic Crystals
            </h5>
          </div>

          {/* Fifth Card */}
          <div className="gap-0 origin-bottom-right skew-y-12 z-10 xs:translate-x-0 sm:-translate-x-5">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/octahe.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio20.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="min-w-[143.84px] color-mixture text-right">
              Time Capsule
            </h5>
          </div>

          {/* Sixth Card */}
          <div className="gap-0 origin-bottom-right skew-y-12 z-0 xs:translate-x-0 sm:-translate-x-20">
            <div className="xs:w-[200px] xs:h-[300px] lg10:w-[180px] xl:w-[219px] 2xl:w-[249px] xl:h-[460px] lg10:h-[380px] sm:w-[210px] sm:h-[420px]  border-2 border-solid border-[#D10ED1] bg-black rounded-2xl flex flex-col items-start">
              <video
                src="https://elemetofsoul.s3.us-east-1.amazonaws.com/videos/cube.mp4"
                autoPlay
                muted
                playsInline
                className="w-full m-auto bg-cover"
                style={{
                  backgroundImage: `url("https://elemetofsoul.s3.us-east-1.amazonaws.com/Images/images/vedio16.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h5 className="min-w-[143.84px] color-mixture text-right">
              Eco Spheres
            </h5>
          </div>
        </div>
      </div>
      <div className="text-center pt-12 xs:px-2  sm:px-0">
        <h4 className="color-mixture pb-6">
          6 Resources, Infinite Possibilities
        </h4>
        <h5 className="text-[#FAB863]">
          Each Resource Brings Its Own Special Function to Boost Your Gameplay
        </h5>
      </div>

      {backShadow && <BlackSectionFooter />}
    </div>
  );
};

export default FlipCards;
