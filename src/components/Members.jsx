import React from "react";
import LeadMembers from "../Data";
import CoreMembers from "../Data";

const Members = () => {
  return (
    <>
      <div>
        <p className="text-3xl font-Lato font-medium text-center p-[2rem]">
          Lead Members
        </p>

        <div className="grid grid-cols-3 p-[2rem]">
          {LeadMembers.LeadMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center gap-2">
              <img src={member.src} alt="" />
              <p className="text-xl font-Lato">{member.title}</p>
              <p className="text-lg font-Lato px-[2rem]">{member.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-3xl font-Lato font-medium text-center p-[2rem]">
          Core Team Members
        </p>
        <div className="grid grid-cols-3 p-[2rem]">
          {CoreMembers.CoreMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center gap-2">
              <img src={member.src} alt="" />
              <p className="text-xl font-Lato">{member.title}</p>
              <p className="text-lg font-Lato px-[2rem]">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
