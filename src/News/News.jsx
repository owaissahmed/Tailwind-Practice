import React from "react";

export default function News() {
  return (
    <div className="bg-[#2699fb] max-w-full h-[300px] md:flex justify-around items-center">
      <div>
        <p className="md:text-3xl text-2xl text-center font-bold text-white pt-8 md:py-1">
          Want to learn latest I.T skills?
        </p>
        <p className="text-white text-center md:text-left">
          Sign up our newsletter and stay up to date.
        </p>
      </div>
      <div className="md:mt-14 mt-6 text-center md:text-left">
        <input
          className="bg-white w-[300px] font-bold p-2 rounded focus:outline-none text-black mr-3"
          type="email"
          placeholder="Enter Email"
          name=""
          id=""
        />
       
        <button className="bg-black font-bold py-2 px-8 rounded text-white md:mt-0 mt-4">
          Notify Me
        </button>
        <p className="text-white mt-4 px-[6px]">
          We care protect about the protection of your data. Read our{" "}
          <span className="text-black md:block ">privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
