"use client";

import React from "react";
import MyPlansCard from "@/components/MyPlansCard";
import { IData } from "@/type/data.type";

interface ITodaysPlanProps {
  plan: IData[];
}

const TodaysPlan = ({ plan }: ITodaysPlanProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {plan.length > 0 ? (
        plan.map((item: IData) => (
          <MyPlansCard key={item.id} item={item} showDone={true} />
        ))
      ) : (
        <div className="w-full">
          <div className="border border-dashed border-[#1a202c] rounded-2xl bg-[#0a0d13]/40 min-h-[285px] px-4 flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase mb-2">
              NOTHING HERE YET
            </h2>

            <p className="text-sm text-[#616876] max-w-sm mb-6 text-center">
              Browse the library and add a lift to get today moving.
            </p>

            <button className="bg-[#ccff00] text-black font-extrabold text-sm px-6 py-3 rounded-full hover:bg-[#b8e600] transition-transform active:scale-95 shadow-md shadow-[#ccff00]/10">
              Go to workouts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodaysPlan;