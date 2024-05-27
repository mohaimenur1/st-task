import {
  AlerttIcon,
  DubaiAirlinesIcon,
  FlightIcon,
} from "@/utils/icons/UseIcons";
import React from "react";

const Destination = () => {
  return (
    <div className="flex pt-[15px] ml-[20px]">
      {/* flight segment */}
      <div className="flex flex-col items-center">
        {/* airlines image */}
        <div>
          <DubaiAirlinesIcon />
        </div>
        {/* path image */}
        <div className="border-l-2 border-gray-300 h-[19px] mb-[9px]"></div>
        {/* airlines image */}
        <div>
          <FlightIcon />
        </div>
        {/* path image */}
        <div className="border-l-[2px] border-gray-300 h-[19px] mt-[9px]"></div>
      </div>

      <div className="flex-1">
        {/* flight time */}
        <div class="grid grid-cols-3 gap-3 ml-[12px]">
          <div>
            <div className="font-[600] text-[16px]">DAC - DXB</div>
            <div className="font-[400] text-[14px] text-gray-600">
              12 hr 20 min
            </div>
          </div>
          <div>
            <div className="font-[600] text-[16px]">07:30 PM</div>
            <div className="font-[400] text-[14px] text-gray-600">
              28 Mar, Friday
            </div>
          </div>
          <div>
            <div className="font-[600] text-[16px]">08:50 AM</div>
            <div className="font-[400] text-[14px] text-gray-600">
              29 Mar, Saturday
            </div>
          </div>
        </div>
        {/* airlines details */}
        <div className="grid grid-cols-3 gap-3 ml-[12px] mt-[16px]">
          <div>
            <div className="font-[475] text-[#3E4957] text-[14px]">
              Turkish Airlines
            </div>
            <div className="text-[#5A6573] text-[14px] font-[400]">
              Flight no: TUR467
            </div>
          </div>
          <div>
            <div className="text-[#5A6573] font-[400] text-[14px]">
              Airbus Industrie 737-800-738
            </div>
            <div className="text-[#4d79a2] text-[14px] font=[400]">
              Class:{" "}
              <span className="font-[475] text-[14px] text-[#5A6573]">
                ECONOMY-Y (O)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
