import { Dispatch, SetStateAction } from "react";

export interface HeaderBackButtonProps{
    name: string;
}

export interface DayCardProps{
    day: string;
    setSelectedDays: Dispatch<SetStateAction<string[]>>
}

export interface ActionButtonProps{
    text: string;
}