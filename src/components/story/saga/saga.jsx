import React from "react";
import Cardcomp from "../../cardcomp/cardcomp";
import "./saga.scss";
function Saga() {
  return (
    <section className="saga-sec">
      <div className="inner">
        <Cardcomp
          heading={"4D audio book monthly release"}
          subheading={"The Original Saga Of Elements of a Soul Begins "}
          para={
            "When a young seeker wakes up in his dream, he soon comes to realize that reality is stranger than fiction. It is the year 2137, and he feels stuck in a rat race not built for him. Struggling to find his place in society, he joins the quarterfinals of a free-for-all deathmatch augmented reality game, but when he meets a great rival, the mystery he thought was private, seems to spread worldwide.  ARC ZERO. is our web-exclusive novel series with the innovative way of our new way of storytelling, the 4D audio experience. Are you curious what it can sound like? Dont worry, click on the button below. "
          }
        />
      </div>
    </section>
  );
}

export default Saga;
