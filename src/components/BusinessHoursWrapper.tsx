import React from "react";
import Header from "./header/Header";
import SelectWorkingDays from "./businessHoursComponents/SelectWorkingDays";
import AvailabilityInfo from "./businessHoursComponents/AvailabilityInfo";
import Slot from "./businessHoursComponents/Slot";
import ActionButton from "./buttons/ActionButton";

const BusinessHoursWrapper = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl mx-3 my-4">Business hours details</h1>
        <SelectWorkingDays />
        <AvailabilityInfo />
        <Slot />
        <ActionButton text="Continue" />
      </div>
    </>
  );
};

export default BusinessHoursWrapper;
