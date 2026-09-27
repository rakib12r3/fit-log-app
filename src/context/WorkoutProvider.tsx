"use client";
import { IData } from "@/type/data.type";
import { createContext, ReactNode, useState } from "react";
import React from "react";

interface IWorkoutContext {
  plan: IData[];
  setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
  setSaved: React.Dispatch<React.SetStateAction<IData[]>>;
  saved: IData[];
  activeTab:string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export const WorkoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  setSaved: () => {},
  saved: [],
  activeTab:"",
  setActiveTab: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IData[]>([]);
  const [saved, setSaved] = useState<IData[]>([]);
    const [activeTab, setActiveTab] = useState("Today's Plan");
  

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    activeTab,
    setActiveTab
  };

  return (
    <div>
      <WorkoutContext.Provider value={sharedData}>
        {children}
      </WorkoutContext.Provider>
    </div>
  );
};

export default WorkoutProvider;
