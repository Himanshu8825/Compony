import React, { useState } from "react";
import { ServiceImg1 } from "../assets/Index";

const Services = () => {
  const [activeTab, setActiveTab] = useState("ui-ux");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    "ui-ux": {
      title: "UI/UX Designing",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is Lo",
      image: ServiceImg1,
    },
    "web-dev": {
      title: "Web Development",
      description: "Web development data goes here.",
      image: ServiceImg1,
    },
    "mobile-dev": {
      title: "Mobile Development",
      description: "Mobile development data goes here.",
      image: ServiceImg1,
    },
  };

  return (
    <>
      <span>
        <p className="text-4xl font-Lato text-center p-4">Services</p>
        <span className="w-full flex justify-center items-center">
          <span className="ss:w-[70%] w-full">
            <span className="flex ss:flex-row flex-col justify-between items-center cursor-pointer">
              <p
                onClick={() => handleTabClick("ui-ux")}
                className={`text-lg font-Lato  ${
                  activeTab === "ui-ux"
                    ? "text-lg px-4 py-2 uppercase font-Lato rounded-xl toggle border m-4"
                    : ""
                }`}
              >
                UI/UX Designing
              </p>
              <p
                onClick={() => handleTabClick("web-dev")}
                className={`text-lg font-Lato${
                  activeTab === "web-dev"
                    ? "text-lg px-4 py-2 uppercase font-Lato rounded-xl toggle border m-4 "
                    : ""
                }`}
              >
                Web Development
              </p>
              <p
                onClick={() => handleTabClick("mobile-dev")}
                className={`text-lg font-Lato ${
                  activeTab === "mobile-dev"
                    ? "text-lg px-4 py-2 uppercase font-Lato rounded-xl toggle border m-4"
                    : ""
                }`}
              >
                Mobile Development
              </p>
            </span>
            <span className="flex ss:flex-row flex-col m-8 shadow-2xl">
              <img
                src={tabContent[activeTab].image}
                alt=""
                className="w-full"
              />
              <span className="flex justify-center items-center">
                <p className="text-lg font-Lato ss:p-6 ss:-ml-[6rem]">
                  {tabContent[activeTab].description}
                </p>
              </span>
            </span>
          </span>
        </span>
      </span>
    </>
  );
};

export default Services;
