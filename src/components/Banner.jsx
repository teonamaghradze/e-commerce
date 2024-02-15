import React from "react";
import { coverWomen } from "../assets/index";
import { coverMen } from "../assets/index";

function Banner() {
  const data = [coverMen, coverWomen];

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div>
        <div className="w-[400vw] h-full flex ">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="coverimage"
            loading="priority"
          />

          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="coverimage"
            loading="priority"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
