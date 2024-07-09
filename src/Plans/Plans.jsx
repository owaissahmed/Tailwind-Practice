import React from "react";
import { CgProfile } from "react-icons/cg";

export default function Plans() {
  return (
    <div className="my-[30px] md:my-[70px] flex flex-wrap  md:flex justify-evenly items-center">
      <div className="md:my-[0px] my-[30px] py-[10px] shadow-2xl rounded-lg h-[370px] w-[300px] mx-auto hover:scale-105 duration-500 flex flex-wrap items-center justify-center">
        <CgProfile className="text-5xl text-[#2699fb]" />
        <p className="text-2xl font-bold text-center w-[300px]">
          Web Development
        </p>
        <p className="text-2xl font-bold text-center w-[300px]">$ 149</p>
        <p className="text-center px-3 ">Lorem ipsum dolor sit amet</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>
        <button className="bg-[#2699fb] font-bold py-2 px-8 rounded text-white md:mt-3 mt-4">
          Notify Me
        </button>
      </div>
      <div className="md:my-[0px] my-[30px] py-[10px] shadow-2xl rounded-lg h-[370px] w-[300px] mx-auto hover:scale-105 duration-500 flex flex-wrap items-center justify-center">
        <CgProfile className="text-5xl text-[#2699fb]" />
        <p className="text-2xl font-bold text-center w-[300px]">
          Graphic Designing
        </p>
        <p className="text-2xl font-bold text-center w-[300px]">$ 149</p>
        <p className="text-center px-3 ">Lorem ipsum dolor sit amet</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>
        <button className="bg-[#2699fb] font-bold py-2 px-8 rounded text-white md:mt-3 mt-4">
          Notify Me
        </button>
      </div>
      <div className="md:my-[0px] my-[30px] py-[10px] shadow-2xl rounded-lg h-[370px] w-[300px] mx-auto hover:scale-105 duration-500 flex flex-wrap items-center justify-center">
        <CgProfile className="text-5xl text-[#2699fb]" />
        <p className="text-2xl font-bold text-center w-[300px]">
          App Development
        </p>
        <p className="text-2xl font-bold text-center w-[300px]">$ 149</p>
        <p className="text-center px-3 ">Lorem ipsum dolor sit amet</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>
        <button className="bg-[#2699fb] font-bold py-2 px-8 rounded text-white md:mt-3 mt-4">
          Notify Me
        </button>
      </div>
    </div>
  );
}
