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
        <div className="grid grid-cols-3 gap-3 ml-[12px]">
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
        <div className="grid grid-cols-3 gap-3 ml-[12px] mt-[16px]">
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
      </div>
    </div>
  );
};

export default Destination;
