import { ActionButtonProps } from "@/types";
import React from "react";

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <div className="p-3 w-full">
      <button className="bg-gray-600 rounded-lg flex justify-center items-center p-3 w-full">
        <h1 className="font-semibold text-lg text-slate-100">{text}</h1>
      </button>
    </div>
  );
};

export default ActionButton;
