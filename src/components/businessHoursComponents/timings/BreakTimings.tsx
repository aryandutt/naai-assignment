"use client";
import { TimeInput } from "@nextui-org/date-input";
import { Plus } from "lucide-react";
import React from "react";
import { Time } from "@internationalized/date";

const BreakTimings = () => {
  return (
    <div className="p-2 bg-gray-100 flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-semibold text-base">Add Break</h1>
        <Plus />
      </div>
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <h1 className="font-semibold">Close</h1>
          <TimeInput variant="bordered" size="lg" defaultValue={new Time(8)} />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <h1 className="font-semibold">Open</h1>
          <TimeInput size="lg" variant="bordered" defaultValue={new Time(17)} />
        </div>
      </div>
    </div>
  );
};

export default BreakTimings;
