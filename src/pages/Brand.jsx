import React from "react";
import { AiDekho, BrandMonkey, Connecting, IDS, Pay } from "../assets/Index";

const Brand = () => {
  return (
    <>
      <span className=" flex justify-between items-center p-[4rem]">
        <img src={Connecting} alt="" className="w-[145px]" />
        <img src={AiDekho} alt="" className="w-[260px] h-[68px]" />
        <img src={BrandMonkey} alt="" className="w-[165px] h-[117px]" />
        <img src={Pay} alt="" className="w-[198px] h-[149px]" />
        <img src={IDS} alt="" className=" w-[150px] " />
      </span>
    </>
  );
};

export default Brand;
