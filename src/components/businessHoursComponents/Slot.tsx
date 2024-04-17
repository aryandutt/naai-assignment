"use client";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { timeSlots } from "@/util";

const Slot = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
  };
  return (
    <div className="p-2 flex gap-3">
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-semibold">No of slots available</h1>
        <Select
          selectionMode="single"
          className="w-full my-1"
          color="primary"
          variant="bordered"
          onChange={handleChange}
          placeholder={selectedValue.toString()}
          value={selectedValue}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <SelectItem key={i} value={i}>
              {i}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-semibold">Slot duration</h1>
        <Select
          placeholder="15 min"
          selectionMode="single"
          className="w-full my-1"
          color="primary"
          variant="bordered"
        >
          {timeSlots.map((slot, id) => (
            <SelectItem key={id} value={slot}>
              {slot}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Slot;
