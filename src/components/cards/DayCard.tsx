import { DayCardProps } from "@/types";
import { X } from "lucide-react";
import React from "react";

const DayCard: React.FC<DayCardProps> = ({ day, setSelectedDays }) => {
    const onCrossClick = () => {
        setSelectedDays((prev) => prev.filter((d) => d !== day));
    }
  return (
    <div className="bg-gray-100 p-2 flex gap-1 justify-center items-center">
      <div className="text-xs font-semibold">{day}</div>
      <button onClick={onCrossClick}>
        <X size={"1em"} />
      </button>
    </div>
  );
};

export default DayCard;
