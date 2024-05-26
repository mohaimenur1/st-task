import { LocationIcon } from "@/utils/icons/UseIcons";
import React from "react";

const Layover = () => {
  return (
    <div className="flex items-center pt-[2px] pl-[16px]">
      {/* location icon */}
      <div>
        <LocationIcon />
      </div>
      {/* route details */}
      <div className="flex justify-between items-center leading-[1.125rem] rounded-[6px] bg-[#F5F7FA] w-full h-[40px] mr-[16px] pt-[10px] pl-[16px] pb-[12px] pr-[16px]">
        <h5 className="font-[400] text-[#1A2B3D] ">
          Layover at Dubai: 12 hr 20 min
        </h5>
        <h6 className="text-[#5A6573] font-[400]">
          Dubai International Airport
        </h6>
      </div>
    </div>
  );
};

export default Layover;
