import React from "react";
import { ServiceImg1 } from "../assets/Index";

const Services = () => {
  return (
    <>
      <div>
        <p className="text-4xl font-Lato text-center pb-4">Services</p>
        <div className="w-full flex justify-center items-center">
          <div className="w-[70%] ">
            <div className="flex justify-between items-center">
              <p className="text-lg px-4 py-2 uppercase font-Lato  rounded-xl toggle border m-4">
                UI/UX Designing
              </p>
              <p className="text-lg px-4 py-2 uppercase font-Lato  rounded-xl  m-4 shadow-white">
                Web development
              </p>
              <p className="text-lg px-4 py-2 uppercase font-Lato  rounded-xl  m-4 shadow-white">
                mobile development
              </p>
            </div>
            <div className="flex m-8 shadow-2xl">
              <img src={ServiceImg1} alt="" className="  " />
              <span className=" flex justify-center items-center">
                <p className="text-lg font-Lato p-6 -ml-[6rem]">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before the final copy
                  is available. In publishing and graphic design, Lorem ipsum is
                  Lo
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
