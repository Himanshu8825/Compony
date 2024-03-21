import React from "react";
import { FaPlay } from "react-icons/fa";

const FaQ = () => {
  return (
    <>
      <span>
        <p className="text-3xl font-Lato font-medium text-center p-4">
          Frequently Asked Questions
        </p>

        <span className="w-full flex justify-center items-center">
          <span className="ss:w-[70%] w-full  border border-primary rounded-xl m-[2rem]">
            <span className="flex gap-2  items-center px-4 py-3 query m-[1.5rem] rounded-xl">
              <FaPlay className="text-white mb-0 ss:text-base text-xl " />
              <p className="ss:text-lg text-sm font-Lato">
                How do you ensure your designs align with our brand's identity?
              </p>
            </span>
            <span className="flex gap-2  items-center px-4 py-3 query m-[1.5rem] rounded-xl">
              <FaPlay className="text-white mb-0  ss:text-base text-xl " />
              <p className="ss:text-lg text-sm font-Lato">
                Can you build a dynamic website with CMS integration?
              </p>
            </span>
            <span className="flex gap-2  items-center px-4 py-3 query m-[1.5rem] rounded-xl">
              <FaPlay className="text-white mb-0 ss:text-base text-xl " />
              <p className="ss:text-lg text-sm font-Lato">
                Can You do the APIs integration with the Website and Mobile App
                ?
              </p>
            </span>
            <span className="flex gap-2  items-center px-4 py-3 query m-[1.5rem] rounded-xl">
              <FaPlay className="text-white mb-0 ss:text-base text-xl" />
              <p className="ss:text-lg text-sm font-Lato">
                How do you ensure your designs align with our brand's identity?
              </p>
            </span>
            <span className="flex gap-2  items-center px-4 py-3 query m-[1.5rem] rounded-xl">
              <FaPlay className="text-white mb-0 ss:text-base text-xl " />
              <p className="ss:text-lg text-sm font-Lato">
                How do you ensure your designs align with our brand's identity?
              </p>
            </span>
          </span>
        </span>
      </span>
    </>
  );
};

export default FaQ;
