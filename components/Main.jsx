import React from "react";

const Main = () => {
  return (
    <div>
      <div className="pb-[20px] pl-[24px]">
        Home &gt; Booking History &gt; Flight &gt; STFL17121182045413{" "}
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
              <p className="text-[#5A6573] text-[13px]">
                Round Trip . 25 Mar - 4 Apr 2023 . 1 Stop
              </p>
            </div>
          </div>
          {/* time info */}
          <div className="text-[#1882FF] text-[12px] font-[475] bg-[#E8F3FF] w-[64px] h-[26px] rounded-[32px] text-center flex items-center justify-center">
            33h 20m
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
