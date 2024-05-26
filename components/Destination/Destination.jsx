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
        <div class="border-l-2 border-gray-300 h-[19px] mb-[9px]"></div>
        {/* airlines image */}
        <div>
          <FlightIcon />
        </div>
        {/* path image */}
        <div class="border-l-[2px] border-gray-300 h-[19px] mt-[9px]"></div>
      </div>

      <div>
        {/* flight time */}
        <div className="flex justify-between w-[1100px] ml-[12px]">
          <div>
            <div class="font-bold">DAC - DXB</div>
            <div class="text-sm text-gray-600">12 hr 20 min</div>
          </div>
          <div>
            <div class="text-lg font-bold">07:30 PM</div>
            <div class="text-sm text-gray-600">28 Mar, Friday</div>
          </div>
          <div>
            <div class="text-lg font-bold">08:50 AM</div>
            <div class="text-sm text-gray-600">29 Mar, Saturday</div>
          </div>
        </div>
        {/* airlines details */}
        <div class="flex justify-between w-[680px] text-sm text-gray-600 mt-4 ml-[16px]">
          <div>
            <div class="font-semibold">Turkish Airlines</div>
            <div>Flight no: TUR467</div>
          </div>
          <div>
            <div>Airbus Industrie 737-800-738</div>
            <div>
              Class: <span class="font-semibold">ECONOMY-Y (O)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
