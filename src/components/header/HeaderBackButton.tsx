import { HeaderBackButtonProps } from "@/types";
import { ChevronLeft } from "lucide-react";
import React from "react";

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({ name }) => {
  return (
    <div className="flex gap-1 items-center">
      <ChevronLeft size={"2em"} />
      <div className="font-bold text-xl">{name}</div>
    </div>
  );
};

export default HeaderBackButton;
