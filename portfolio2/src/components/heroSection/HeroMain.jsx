import React from "react";
import HeroText from "./heroText";
import HeroPic from "./HeroPic";

function heroMain() {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col m-auto justify-around items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
}

export default heroMain;
