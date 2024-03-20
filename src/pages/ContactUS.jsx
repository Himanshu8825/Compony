import React from "react";
import { Contact } from "../assets/Index";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiNewWindow } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUS = () => {
  return (
    <>
      <div>
        <p className="text-4xl font-Lato text-center p-[2rem]">Let’s Connect</p>

        <div className="flex ml-[2rem] items-center ">
          <img src={Contact} alt="" />
          <div className=" contact   p-[2rem] rounded-3xl font-Roboto w-[50%] h-[50%]">
            <form action="" className="flex flex-col gap-2 text-white">
              <label htmlFor="firstName">
                First Name <sup className="text-red-700">*</sup>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                />
              </label>

              <span className="flex flex-col items-start">
                <label htmlFor="email" className="">
                  Email Address <sup className="text-red-700">*</sup>
                </label>
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                  />
                  <MdOutlineEmail className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl text-gray-600" />
                </div>
              </span>

              <span className="flex flex-col relative">
                <label htmlFor="mobile" className="">
                  Your Contact Number <sup className="text-red-700">*</sup>
                </label>
                <div className="relative w-[50%]">
                  <input
                    type="mobile"
                    placeholder="Contact Number"
                    id="mobile"
                    className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                  />
                  <MdOutlinePhoneInTalk className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl text-gray-600" />
                </div>
              </span>

              <label htmlFor="message">Message</label>
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  cols=""
                  rows="1"
                  placeholder="Hi! Please write your message here."
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none resize-none"
                ></textarea>
                <TfiNewWindow className="absolute bottom-0 right-0 transform rotate-90 mr-2 mb-4 text-xl text-gray-600" />
              </div>
            </form>
          </div>
        </div>

        <span className="flex items-center flex-col gap-1 mb-4">
          <p className="text-3xl">Fuel Your Brand’s Goals with Us</p>
          <span className=" flex items-center gap-2 px-8 py-3 toggle m-4 rounded-xl shadow-lg shadow-[#8000cf81]">
            <FaPhoneAlt />
            <button className="text-xl font-Lato">Book a Discovery Call</button>
          </span>
        </span>
      </div>
    </>
  );
};

export default ContactUS;
