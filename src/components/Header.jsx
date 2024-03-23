import React from "react";
import { MdCall } from "react-icons/md";

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
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full flex  items-baseline mt-[4rem]  ss:ml-[4rem] ml-0 ss:gap-[6rem] gap-0 bg_img  ss:h-[500px] h-auto relative overflow-x-hidden">
        <div className="w-[600px] h-[200px]  absolute -z-50 right-1/2 "></div>
        <span className="ss:block  hidden">
          <Navbar />
        </span>

        <span className="font-Lato">
          <p className="ss:w-[800px] ss:text-[3rem] text-[2rem] text-center font-semibold">
            Transform Your Technology , Accelerate Your Growth
          </p>
          <p className="text-center px-4 mt-4">
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
        <div className="hidden ss:block w-[200px] h-[200px] text-start absolute -right-[3rem]  bottom-6 border-[40px] border-primary rounded-full "></div>
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
