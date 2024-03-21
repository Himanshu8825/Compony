import React from "react";
import { MdHomeFilled, MdCall } from "react-icons/md";
import { FaAddressCard, FaMobileScreenButton } from "react-icons/fa6";
import {
  AboutMe,
  Brand,
  ContactUS,
  FaQ,
  Process,
  Project,
  Rating,
  Services,
} from "../Index";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-evenly items-baseline mt-[2rem] bg_img h-[500px] relative overflow-x-hidden">
        <span className="navbar backdrop-filter backdrop-blur-xl shadow-xl rounded-xl font-Lato border border-[#ffffff36] ">
          <span className="flex items-center  gap-2 px-4  m-2 py-1 bg-primary  rounded-lg hover:opacity-80">
            <MdHomeFilled />
            <p>Home</p>
          </span>
          <span className="flex items-center  gap-2 px-4  m-2 py-1 ">
            <FaAddressCard />
            <p>About</p>
          </span>
          <span className="flex items-center  gap-2 px-4   m-2 py-1 ">
            <FaAddressCard />
            <p>Services</p>
          </span>
          <span className="flex items-center  gap-2 px-4   m-2 py-1 ">
            <FaMobileScreenButton />
            <p>PortFolio</p>
          </span>
          <span className="flex items-center  gap-2 px-4   m-2 py-1">
            <FaMobileScreenButton />
            <p>TestMonials</p>
          </span>
          <span className="flex items-center  gap-2 px-4   m-2 py-1 ">
            <FaMobileScreenButton />
            <p>Contact</p>
          </span>
        </span>

        <span className="font-Lato">
          <p className="text-[3rem] text-center font-semibold">
            Transform Your Technology , <br /> Accelerate Your Growth
          </p>
          <p className="text-lg">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate t
          </p>
          <span className="flex justify-center mt-8">
            <span className=" button flex items-center px-6 py-3 text-lg gap-2 rounded-xl shadow-md shadow-[#8000cf81]">
              <MdCall />
              <button>Book a Discovery Call</button>
            </span>
          </span>
        </span>
        <div className="w-[200px] h-[200px] text-start absolute -right-[6rem]  bottom-6 border-[40px] border-primary rounded-full "></div>
      </div>

      <section>
        <Brand />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Rating />
      </section>
      <section>
        <FaQ />
      </section>
      <section>
        <ContactUS />
      </section>
    </>
  );
};

export default Header;
