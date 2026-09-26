"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IData } from "@/type/data.type";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";

interface IAddToPlanBtn{
  data:IData;
}

const AddToPlanBtn = ({ data }:IAddToPlanBtn) => {

  const {plan, setPlan} = useContext(WorkoutContext);
  
  const handleAddToPlan = () => {
    setPlan([...plan, data])
    console.log("Add to plan btn trigerd", plan);
  };
  return (
    <div>
      <button
        onClick={() => handleAddToPlan()}
        className="flex gap-2 py-2 font-bold bg-[#CCFF00] px-8  rounded-2xl text-black"
      >
        <CalendarPlus /> Add to today's plan
      </button>
    </div>
  );
};

export default AddToPlanBtn;
