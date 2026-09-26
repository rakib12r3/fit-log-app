"use client";
import { IData } from "@/type/data.type";
import { createContext, ReactNode, useState } from "react";
import React from "react";

interface IWorkoutContext {
  plan: IData[];
  setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
  setSaved: React.Dispatch<React.SetStateAction<IData[]>>;

  saved: IData[];
  
}
export const WorkoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  setSaved: () => {},
  saved: [],
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IData[]>([]);
  const [saved, setSaved] = useState<IData[]>([]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
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
