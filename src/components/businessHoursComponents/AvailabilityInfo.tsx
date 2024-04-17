import React from "react";
import Timings from "./timings/Timings";
import BreakTimings from "./timings/BreakTimings";

const AvailabilityInfo = () => {
  return (
    <div className="p-3 flex flex-col gap-4">
      <h1 className="text-lg font-bold">Availability Info</h1>
      <div className="p-2 bg-gray-100">
        <p className="font-medium text-xs">
          You can edit availability configuration for each day later in profile
          setting when you are done completing the setup
        </p>
      </div>
      <Timings />
      <BreakTimings />
    </div>
  );
};

export default AvailabilityInfo;
