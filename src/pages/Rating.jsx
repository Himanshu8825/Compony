import React from "react";
import { User, Review } from "../assets/Index";

const Rating = () => {
  return (
    <>
      <span>
        <p className="text-3xl font-Lato text-center p-4">
          Hear what our customers say
        </p>
        <span className="flex justify-between items-center p-[2rem]">
          <div className="Rating w-[32%] rounded-xl border border-primary">
            <span className="flex   ">
              <span className="m-4">
                <img src={User} alt="" />
              </span>
              <span className="mt-4">
                <p className=" font-Lato font-semibold text-md">Jane Cooper</p>
                <p className="font-Lato text-slate-500 font-semibold">
                  unpexel
                </p>
                <img src={Review} alt="" />
              </span>
            </span>
            <p className="m-4 text-lg font-Lato">
              Amet aliquam, volutpat nisl, duis sed at. Vehicula proin
              consectetur risus dictumst nec amet consequat at tempus. Ornare
              dapibus nunc fames nibh morbi viverra eu sed mattis.{" "}
            </p>
          </div>
          <div className="Rating w-[32%] rounded-xl border border-primary">
            <span className="flex   ">
              <span className="m-4">
                <img src={User} alt="" />
              </span>
              <span className="mt-4">
                <p className=" font-Lato font-semibold text-md">Jane Cooper</p>
                <p className="font-Lato text-slate-500 font-semibold">
                  unpexel
                </p>
                <img src={Review} alt="" />
              </span>
            </span>
            <p className="m-4 text-lg font-Lato">
              Amet aliquam, volutpat nisl, duis sed at. Vehicula proin
              consectetur risus dictumst nec amet consequat at tempus. Ornare
              dapibus nunc fames nibh morbi viverra eu sed mattis.{" "}
            </p>
          </div>
          <div className="Rating w-[32%] rounded-xl border border-primary">
            <span className="flex   ">
              <span className="m-4">
                <img src={User} alt="" />
              </span>
              <span className="mt-4">
                <p className=" font-Lato font-semibold text-md">Jane Cooper</p>
                <p className="font-Lato text-slate-500 font-semibold">
                  unpexel
                </p>
                <img src={Review} alt="" />
              </span>
            </span>
            <p className="m-4 text-lg font-Lato">
              Amet aliquam, volutpat nisl, duis sed at. Vehicula proin
              consectetur risus dictumst nec amet consequat at tempus. Ornare
              dapibus nunc fames nibh morbi viverra eu sed mattis.{" "}
            </p>
          </div>
        </span>
      </span>
    </>
  );
};

export default Rating;
