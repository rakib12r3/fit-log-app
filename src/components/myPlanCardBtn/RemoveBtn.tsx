"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IData } from "@/type/data.type";
import { X } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface IMarkAsDoneBtn {
  item: IData;
}

const RemoveBtn = ({ item }: IMarkAsDoneBtn) => {
  const { setSaved,setPlan ,activeTab} = useContext(WorkoutContext);

  const removeItem = (id: number) => {
    if(activeTab === "Today's Plan"){
      setPlan((prev) => prev.filter((item) => item.id !== id));
      toast.info(`Remove From Today's Plan`);
    }else{
       setSaved((prev) => prev.filter((item) => item.id !== id));
      toast.info(`Remove From Saved List`);
    }
  };

  return (
    <button
      onClick={() => removeItem(item.id)}
      className="text-[#737b8a] p-1 cursor-pointer transition active:scale-95"
    >
      <X size={25} />
    </button>
  );
};

export default RemoveBtn;
