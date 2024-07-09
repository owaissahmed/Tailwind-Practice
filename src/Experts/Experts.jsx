import React from "react";
import Laptop from "../Images/Laptop.png";
export default function Experts() {
  return (
    <div className="w-full mx-auto py-[10px] h-auto md:flex items-center justify-evenly">
      <div className="py-5">
        <img className=" mx-auto md:h-[350px] h-[250px]" src={Laptop} />
      </div>
      <div className="  md:w-[600px] ">
        <p className="text-[#00df9a] text-center md:text-left font-bold my-2  text-2xl">
          Learn From Experts
        </p>
        <p className="px-1 md:px-0 text-xl my-2 text-center md:text-left ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          beatae illum repellat corrupti non pariatur, rem a saepe, placeat quia
          nostrum expedita, quo voluptatibus nam quam accusamus animi veniam ad
        </p>
        <div className="md:block flex items-center justify-evenly">
          <button className="bg-black font-bold py-2 px-8 rounded text-white mt-4 mb-2 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
