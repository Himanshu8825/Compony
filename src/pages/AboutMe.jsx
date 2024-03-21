import React from "react";
import { AboutMeBG } from "../assets/Index";

const AboutMe = () => {
  return (
    <>
      <div>
        <p className="text-4xl text-white font-medium font-Lato text-center  ">
          About Us
        </p>
        <span className="flex  ">
          <span className="w-[70%] flex flex-col justify-center items-center p-[4rem]">
            <p className="p-6 text-lg font-Lato">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </p>
            <button className="button px-6 py-3 text-lg font-Lato rounded-xl mx-auto  shadow-md shadow-[#8000cf81] ">
              View Team Members
            </button>
          </span>
          <span className="w-[40%] flex justify-center items-center  ">
            <img src={AboutMeBG} alt="" className="h-[458px]" />
          </span>
        </span>
      </div>
    </>
  );
};

export default AboutMe;
