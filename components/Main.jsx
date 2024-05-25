import React from "react";

const Main = () => {
  return (
    <div>
      <div className="pb-[20px] pl-[24px]">
        Home &gt; Booking History &gt; Flight &gt; STFL17121182045413{" "}
      </div>
      <div className="bg-[#FFFFFF] h-[611px] ml-[24px] rounded-[8px]">
        {/* second section */}
        <div className="flex justify-between p-[16px]">
          {/* destination info */}
          <div className="flex items-center">
            <div className="mr-[16px] bg-[#1882FF] text-[#FFFFFF] w-8 h-8 rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <h5>DAC → JFK</h5>
              <p>Round Trip . 25 Mar - 4 Apr 2023 . 1 Stop</p>
            </div>
          </div>
          {/* time info */}
          <div>33h 20m</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
