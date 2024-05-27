import { BlueLocationIcon } from "@/utils/icons/UseIcons";
import React from "react";

const DestinationEndPoint = () => {
  return (
    <div className="flex items-center pt-[5px] pl-[16px]">
      {/* location icon */}
      <div>
        <BlueLocationIcon />
      </div>
      {/* route details */}
      <div className="flex justify-between items-center leading-[1.125rem] rounded-[6px] bg-[#F5F7FA] w-full h-[40px] mr-[16px] pt-[10px] pl-[16px] pb-[12px] pr-[16px]">
        <h5 className="font-[475] text-[#1A2B3D] text-[13px]">
          Destination at New York
        </h5>
        <h6 className="text-[#5A6573] font-[400] text-[13px]">
          <span className="font-[475]">Terminal 4: </span>John F Kennedy
          International Airport
        </h6>
      </div>
    </div>
  );
};

export default DestinationEndPoint;
