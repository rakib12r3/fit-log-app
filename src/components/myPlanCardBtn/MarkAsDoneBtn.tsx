'use client';
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IData } from "@/type/data.type";
import { Check } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IMarkAsDoneBtn{
  item:IData;
}

const MarkAsDoneBtn = ({item}:IMarkAsDoneBtn) => {
  const { setPlan } = useContext(WorkoutContext);
  const removeItem = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    toast.success(`Workout logged-nice work`);
  };


  return (
    <button
      onClick={() => removeItem(item.id)}
      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] text-black text-sm font-bold active:scale-95 cursor-pointer"
    >
      <Check size={15} />
      Mark as Done
    </button>
  );
};

export default MarkAsDoneBtn;
