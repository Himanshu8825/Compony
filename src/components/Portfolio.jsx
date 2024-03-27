import React, { useState } from "react";
import {
  ConnectionCard,
  Brand_Img,
  AiDekho_Img,
  Bibin_Babu,
  Women_Img,
} from "../assets/Index";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Website");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <p className="text-3xl font-Lato font-semibold text-center p-[2rem]">
          Our Recent Project
        </p>
        <div className="flex justify-center gap-[2rem] font-Lato text-xl cursor-pointer mb-[4rem]">
          <p
            className={`px-4 py-1.5 rounded-xl shadow-black shadow-lg${
              activeTab === "Website"
                ? "px-4 py-1.5 rounded-xl border-b-2 border-b-primary"
                : ""
            }`}
            onClick={() => handleTabClick("Website")}
          >
            Website
          </p>
          <p
            className={`px-4 py-1.5 rounded-xl ${
              activeTab === "Mobile Apps"
                ? " px-4 py-1.5 rounded-xl border-b-2 border-b-primary"
                : ""
            }`}
            onClick={() => handleTabClick("Mobile Apps")}
          >
            Mobile Apps
          </p>
        </div>

        {/* Render content based on the active tab */}
        {activeTab === "Website" && (
          <div>
            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="border-8 border-primary rounded-lg  mb-8 sm:mb-0 sm:mr-8 ">
                <img
                  src={ConnectionCard}
                  alt=""
                  className="w-full h-auto sm:w-[400px] translate-x-[1.2rem] -translate-y-[1.2rem]  "
                />
              </div>

              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="w-full md:order-1 order-2 sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
              <div className="md:order-2 order-1 border-8 border-primary rounded-lg   mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Brand_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px] translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="border-8 border-primary rounded-lg   mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={AiDekho_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px]  translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>

              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
              <div className="border-8 border-primary rounded-lg  mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Bibin_Babu}
                  alt=""
                  className="w-full h-auto sm:w-[400px]  translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="border-8 border-primary rounded-lg  z-40 mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Women_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px] translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>

              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Mobile Apps" && (
          <div>
            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="border-8 border-primary rounded-lg   mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={AiDekho_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px]  translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>

              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Mobile App
                </p>
                <p className="text-lg font-Lato py-4">
                  In mobile app development, Lorem ipsum is a placeholder text
                  commonly used to demonstrate the visual form of a mobile
                  application or a user interface without relying on meaningful
                  content. Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="w-full md:order-1 order-2 sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
              <div className="md:order-2 order-1 border-8 border-primary rounded-lg   mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Brand_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px] translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="border-8 border-primary rounded-lg  z-40 mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Women_Img}
                  alt=""
                  className="w-full h-auto sm:w-[400px] translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>

              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
            </div>

            <div className="sm:flex items-center justify-evenly p-[2rem]">
              <div className="w-full sm:w-[40%] text-center sm:text-left">
                <p className="text-xl font-Lato font-semibold">
                  AI Tools Marketplace Website (aidekho.io)
                </p>
                <p className="text-lg font-Lato py-4">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a.
                </p>
                <button className="text-lg font-Lato px-8 py-1.5 button rounded-lg border mt-4">
                  Live Preview
                </button>
              </div>
              <div className="border-8 border-primary rounded-lg  mb-8 sm:mb-0 sm:mr-8">
                <img
                  src={Bibin_Babu}
                  alt=""
                  className="w-full h-auto sm:w-[400px]  translate-x-[1.2rem] -translate-y-[1.2rem] "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
