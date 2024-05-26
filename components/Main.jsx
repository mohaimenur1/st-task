import React from "react";
import DepartureDetails from "./DepartureDetails/DepartureDetails";
import FlightSegment from "./FlightSegment/FlightSegment";
import Destination from "./Destination/Destination";
import DestinationEndPoint from "./DestinationEndPoint/DestinationEndPoint";
import Layover from "./Layover/Layover";
import { DotIcon } from "@/utils/icons/UseIcons";

const Main = () => {
  return (
    <div>
      <div className="pb-[20px] pl-[24px]">
        <div className="text-[#5A6573]">
          <span className="text-[13px] mr-[6px]">Home</span>{" "}
          <span className="text-[13px] mr-[6px]">&gt;</span>{" "}
          <span className="text-[13px] mr-[6px]">Booking History</span>{" "}
          <span className="text-[13px] mr-[6px]">&gt;</span>{" "}
          <span className="text-[13px] mr-[6px]">Flight</span>{" "}
          <span className="text-[13px] mr-[6px]">&gt;</span>{" "}
          <span className="text-[#1882FF] text-[13px] font-[475]">
            STFL17121182045413
          </span>{" "}
        </div>
      </div>
      <div className="bg-[#FFFFFF] h-[611px] ml-[24px] rounded-[8px]">
        {/* second section */}
        <div className="flex justify-between items-center p-[16px] border-b-2 border-[#F5F7FA]">
          {/* destination info */}
          <div className="flex items-center">
            <div className="mr-[16px] bg-[#1882FF] text-[#FFFFFF] w-8 h-8 rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <h5 className="font-[600] text-[18px]">DAC → JFK</h5>
              <p className="text-[#5A6573] text-[13px] flex items-center ">
                <span className="mr-[7.5px]">Round Trip</span>{" "}
                <span className="mr-[7.5px]">
                  <DotIcon />
                </span>{" "}
                <span className="mr-[7.5px]">25 Mar - 4 Apr 2023</span>{" "}
                <span className="mr-[7.5px]">
                  <DotIcon />
                </span>{" "}
                <span>1 Stop</span>
              </p>
            </div>
          </div>
          {/* time info */}
          <div className="text-[#1882FF] text-[12px] font-[475] bg-[#E8F3FF] w-[64px] h-[26px] rounded-[32px] text-center flex items-center justify-center">
            33h 20m
          </div>
        </div>
        {/* departure section */}
        <DepartureDetails />
        <FlightSegment />
        <Layover />
        <Destination />
        <DestinationEndPoint />
      </div>
    </div>
  );
};

export default Main;
