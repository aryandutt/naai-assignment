"use client";
import { dayNames } from "@/util";
import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import DayCard from "../cards/DayCard";

const SelectWorkingDays = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  return (
    <div className="px-4 flex flex-col gap-2">
      <h1 className="text-sm font-medium">Select Working Days</h1>
      <Select
        placeholder="(0) Selected"
        selectionMode="multiple"
        className="w-full my-2"
        renderValue={() => {
          return `(${selectedDays.length}) Selected`;
        }}
        onSelectionChange={(newSelection) => {
          const newSelectedDays = Array.from(newSelection)
            .map((ind) => parseInt(ind as string))
            .sort((a, b) => a - b)
            .map((day) => dayNames[day]);
          setSelectedDays(newSelectedDays);
        }}
        variant="bordered"
      >
        {dayNames.map((day, id) => (
          <SelectItem key={id} value={day}>
            {day}
          </SelectItem>
        ))}
      </Select>
      <h1 className="text-sm font-light">This is a hint text to help user</h1>
      <div className="flex flex-wrap gap-2">
        {selectedDays.map((day, id) => {
          return (
            <DayCard key={id} day={day} setSelectedDays={setSelectedDays} />
          );
        })}
      </div>
    </div>
  );
};

export default SelectWorkingDays;
