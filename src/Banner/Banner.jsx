import React from "react";
import { ReactTyped } from "react-typed";
export default function Banner() {
  return (
    <div className=" bg-[#2699fb] w-full  py-[80px] text-center">
      <div className="max-w-[1240px] my-[80px] font-bold  mx-auto">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn With Us</div>
        <div className="text-white text-3xl md:text-[80px] md:p-[24px]">
          Grow With Us
        </div>
        <div className="text-[20px] md:text-[50px] text-white md:p-[24px]">
          Learn
          <ReactTyped
            className="pl-3"
            strings={["Web Development", "Graphic Designing"]}
            typeSpeed={100}
            backSpeed={60}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
