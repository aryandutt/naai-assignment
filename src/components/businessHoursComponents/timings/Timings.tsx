"use client";
import React from "react";
import { TimeInput } from "@nextui-org/date-input";
import { Time } from "@internationalized/date";

const Timings = () => {
  return (
    <div className="flex gap-3">
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="font-semibold">Open</h1>
        <TimeInput variant="bordered" size="lg" defaultValue={new Time(8)} />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="font-semibold">Close</h1>
        <TimeInput size="lg" variant="bordered" defaultValue={new Time(17)} />
      </div>
    </div>
  );
};

export default Timings;
