import React from "react";
import { AiDekho, BrandMonkey, Connecting, IDS, Pay } from "../assets/Index";

const Brand = () => {
  return (
    <div className="brand-container">
      <div className=" flex justify-between items-center p-[4rem] scrolling-wrapper">
        <img src={Connecting} alt="" className="w-[145px] brand-image" />
        <img src={AiDekho} alt="" className="w-[260px] h-[68px] brand-image" />
        <img
          src={BrandMonkey}
          alt=""
          className="w-[165px] h-[117px] brand-image"
        />
        <img src={Pay} alt="" className="w-[198px] h-[149px] brand-image" />
        <img src={IDS} alt="" className="w-[150px] brand-image" />
        <img src={Connecting} alt="" className="w-[145px] brand-image" />
        <img src={AiDekho} alt="" className="w-[260px] h-[68px] brand-image" />
        <img
          src={BrandMonkey}
          alt=""
          className="w-[165px] h-[117px] brand-image"
        />
        <img src={Pay} alt="" className="w-[198px] h-[149px] brand-image" />
        <img src={IDS} alt="" className="w-[150px] brand-image" />
      </div>
    </div>
  );
};

export default Brand;
