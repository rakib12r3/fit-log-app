"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IData } from "@/type/data.type";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IAddToPlanBtn {
  data: IData;
}

const SaveFotLater = ({ data }: IAddToPlanBtn) => {
  const { saved, setSaved } = useContext(WorkoutContext);

  const handleSaveForLater = () => {
    // setSaved([...saved, data]);
    // console.log("Save for later btn trigerd", saved);
    const alreadyAdded = saved.filter((item) => item.id === data.id);
    if (alreadyAdded.length > 0) {
          toast.error("This workout is already in today's plan!");
          return;
        }
        setSaved([...saved, data]);
        toast.success("Workout added to today's plan!");
  };
  return (
    <div>
      <button
        onClick={() => handleSaveForLater()}
        className="flex border font-bold py-2 px-5 gap-2 rounded-2xl active:scale-95 transition-transform cursor-pointer"
      >
        <Bookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveFotLater;
