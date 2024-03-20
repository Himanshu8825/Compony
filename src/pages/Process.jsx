import React from "react";
import { One, Two, Three, Four, Five, Six, Arrow2 } from "../assets/Index";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Process = () => {
  return (
    <>
      <div className="flex flex-col  scrolll mb-[4rem] brand-container">
        <p className="text-3xl font-Lato text-center p-[4rem]">Process</p>
        <span className="flex gap-[4rem] m-4 w-full scrolling-wrapper">
          <span className="w-full">
            <span className="flex items-center justify-center space-x-4">
              <img
                src={One}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
              <img src={Arrow2} alt="" className="w-[100px] brand-image" />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">Proven Expertise</p>
              <p className="text-md font-Lato">
                With a seasoned team of creative minds
              </p>
            </span>
          </span>
          <span className="w-full">
            <span className="flex items-center justify-center space-x-4">
              <img
                src={Two}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
              <img src={Arrow2} alt="" className="w-[100px] brand-image" />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">Proven Expertise</p>
              <p className="text-md font-Lato">
                With a seasoned team of creative minds
              </p>
            </span>
          </span>
          <span className="w-full">
            <span className="flex items-center justify-center">
              <img
                src={Three}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
              <img src={Arrow2} alt="" className="w-[100px] ml-0 brand-image" />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">
                Client - Centric Approach
              </p>
              <p className="text-md font-Lato">Client - Centric Approach</p>
            </span>
          </span>
          <span className="w-full">
            <span className="flex items-center justify-center">
              <img
                src={Four}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
              <img src={Arrow2} alt="" className="w-[100px] brand-image" />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">
                Innovative Approach
              </p>
              <p className="text-md font-Lato">
                We bring fresh perspectives to every project.
              </p>
            </span>
          </span>
          <span className="w-full">
            <span className="flex items-center">
              <img
                src={Five}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
              <img src={Arrow2} alt="" className="w-[100px] brand-image" />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">Timely Delivery</p>
              <p className="text-md font-Lato">We value your time.</p>
            </span>
          </span>
          <span className="w-full">
            <span className="flex items-center justify-center">
              <img
                src={Six}
                alt=""
                className="w-[142px] h-[282px] brand-image"
              />
            </span>
            <span>
              <p className="text-3xl font-Lato -mt-[4rem]">
                Tailored Solutions
              </p>
              <p className="text-md font-Lato">No one-size-fits-all here</p>
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default Process;
