import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaAddressCard, FaMobileScreenButton } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Toggle = ({ setShowNav }) => {
  return (
    <>
      <div className=" flex flex-col w-[40px] gap-4 items-center justify-center  p-6 navbar backdrop-filter backdrop-blur-lg   rounded-3xl font-Lato border border-[#ffffff36]">
        <IoIosArrowDroprightCircle
          className="text-xl"
          onClick={() => setShowNav(true)}
        />
        <MdHomeFilled className="text-2xl" />
        <FaAddressCard className="text-2xl" />
        <FaAddressCard className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
      </div>
    </>
  );
};

export default Toggle;
