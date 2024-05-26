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

      <div>
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
        <div className="flex justify-between w-[680px] text-sm text-gray-600 mt-4 ml-[16px]">
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
