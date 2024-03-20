import React from "react";
import {
  Arrow,
  BrandMokeyCard,
  ConnectionCard,
  WomenCard,
} from "../assets/Index";

const Project = () => {
  return (
    <>
      <span>
        <span className="flex justify-center p-4">
          <p className=" text-xl font-mountain translate-x-[10rem] rotate-[-29deg] translate-y-4 ">
            Our Recent Work
          </p>
          <img src={Arrow} alt="" />
          <p className="text-3xl font-Lato translate-y-10 ">
            Projects We Delievered
          </p>
        </span>
        <span className="flex justify-center  gap-4">
          <img src={ConnectionCard} alt="" className="w-[420px] " />
          <img src={BrandMokeyCard} alt="" className="w-[420px] " />
          <img src={WomenCard} alt="" className="w-[420px] " />
        </span>
        <span className="flex justify-center  ">
          <button className="text-lg px-6 py-2 toggle rounded-xl m-[2rem] shadow-lg shadow-[#8000cf81] ">
            View Project
          </button>
        </span>
      </span>
    </>
  );
};

export default Project;
