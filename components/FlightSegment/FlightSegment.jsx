import {
  AlerttIcon,
  DubaiAirlinesIcon,
  FlightIcon,
} from "@/utils/icons/UseIcons";
import React from "react";

const FlightSegment = () => {
  return (
    <div className="flex mt-[12px] ml-[20px]">
      {/* flight segment */}
      <div className="flex flex-col items-center">
        {/* airlines image */}
        <div>
          <DubaiAirlinesIcon />
        </div>
        {/* path image */}
        <div className="border-l-2 border-gray-300 h-[53px] mb-[9px]"></div>
        {/* airlines image */}
        <div>
          <FlightIcon />
        </div>
        {/* path image */}
        <div className="border-l-[2px] border-gray-300 h-[53px] mt-[9px]"></div>
      </div>

      <div className="flex-1">
        {/* flight time */}
        <div className="flex justify-between w-[1120px] ml-[12px]">
          <div>
            <div className="font-bold">DAC - DXB</div>
            <div className="text-sm text-gray-600">12 hr 20 min</div>
          </div>
          <div>
            <div className="text-lg font-bold">07:30 PM</div>
            <div className="text-sm text-gray-600">28 Mar, Friday</div>
          </div>
          <div>
            <div className="text-lg font-bold">08:50 AM</div>
            <div className="text-sm text-gray-600">29 Mar, Saturday</div>
          </div>
        </div>
        {/* airlines details */}
        <div className="flex justify-between w-[680px] text-sm text-gray-600 mt-4 ml-[12px]">
          <div>
            <div className="font-semibold">Turkish Airlines</div>
            <div>Flight no: TUR467</div>
          </div>
          <div>
            <div>Airbus Industrie 737-800-738</div>
            <div>
              Class: <span className="font-semibold">ECONOMY-Y (O)</span>
            </div>
          </div>
        </div>
        {/* alert information */}
        <div className="flex items-center leading-[1.125rem] border-[#FFE1C2] border-[1px] rounded-[6px] bg-[#FFEEDB] h-[52px] mt-[16px] mr-[16px] ml-[12px] pt-[10px] pl-[16px] pb-[12px] pr-[16px]">
          <div className="mr-[8px]">
            <AlerttIcon />
          </div>
          <h5 className="font-[400] text-[#1A2B3D] text-[12px] w-[712px]">
            Technical stoppage at Malpensa International Airport (Milano).
            Before booking this flight please check your visa requirements as
            per your nationality
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FlightSegment;
