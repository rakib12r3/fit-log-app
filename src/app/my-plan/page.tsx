"use client";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { oswald } from "@/lib/fonts";

import { getWorkoutStats } from "@/utils/WorkoutState";
import { getWorkoutStatsForSaved } from "@/utils/WorkoutStateForSave";
import TodaysPlan from "@/components/shared/TodaysPlan";
import SavedPlans from "@/components/shared/SavedPlan";
// import SortDropdown from "@/components/shared/SortDropDown";

export default function App() {
  const [activeTab, setActiveTab] = useState("Saved");
  const { plan, saved } = useContext(WorkoutContext);
  const [sortBy, setSortBy] = useState<
  "duration" | "caloriesBurned" | "rating"
>("duration");

  const plansData = getWorkoutStats(plan);
  const savedData = getWorkoutStatsForSaved(saved);
  // console.log(sortBy, 'from sortby');
  // .......................................

  const sortedPlan = [...plan].sort((a, b) => {
    return Number(b[sortBy]) - Number(a[sortBy]);
  });

  const sortedSaved = [...saved].sort((a, b) => {
    return Number(b[sortBy]) - Number(a[sortBy]);
  });

  // ------------------------------------

  return (
    <>
      <div className=" mx-auto w-full max-w-[1120px]">
        <h1>
          To day's Plan: {plan.length} | saved: {saved.length}
        </h1>
        {/* Title */}
        <div className="mb-8">
          <h1 className={`${oswald.className} text-4xl text-white mb-2`}>
            MY PLAN
          </h1>
          <p className="text-sm md:text-base text-[#616876]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* 3 Stats Card */}
        <div className="bg-[#10141d] border border-[#1a202c] rounded-2xl p-6 md:p-8 mb-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1a202c]">
          <div className="pb-4 md:pb-0 md:pr-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Exercises
            </span>
            <span className="text-5xl font-black text-[#ccff00]">
              {activeTab === "Today's Plan"
                ? plansData.totalExercises
                : savedData.totalExercises}
            </span>
          </div>
          <div className="py-4 md:py-0 md:px-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Minutes
            </span>
            <span className="text-5xl font-black text-white">
              {activeTab === "Today's Plan"
                ? plansData.totalMinutes
                : savedData.totalMinutes}
            </span>
          </div>
          <div className="pt-4 md:pt-0 md:pl-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Calories
            </span>
            <span className="text-5xl font-black text-white">
              {activeTab === "Today's Plan"
                ? plansData.totalCalories
                : savedData.totalCalories}
            </span>
          </div>
        </div>

        {/* Control Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 w-full">
          {/* Tabs */}
          <div className="bg-[#10141d] p-1 rounded-xl border border-[#1a202c] inline-flex self-start">
            {/* Today's Plan */}
            <div
              onClick={() => setActiveTab("Today's Plan")}
              className={`px-5 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                activeTab === "Today's Plan"
                  ? "bg-[#1e2534] text-white"
                  : "text-[#818898] hover:text-white"
              }`}
            >
              Today's Plan
            </div>

            {/* Saved */}
            <div
              onClick={() => setActiveTab("Saved")}
              className={`px-5 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                activeTab === "Saved"
                  ? "bg-[#1e2534] text-white"
                  : "text-[#818898] hover:text-white"
              }`}
            >
              Saved
            </div>
          </div>

          {/* Sort By */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "caloriesBurned" | "rating",
                )
              }
              className="select select-success"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
            {/* <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as "duration"| "calories" | "rating" )}
              defaultValue="Pick a Runtime"
              className="select select-success"
            >
              <option disabled>Pick a Runtime</option>
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"rating"}>Rating</option>
            </select> */}
          </div>
        </div>

        {/* ========================= */}
        {/* TAB CONTENT */}
        {/* ========================= */}

        <div className="w-full ">
          <div className="w-full">
            {/* {activeTab === "Today's Plan" && <TodaysPlan plan={plan} />} */}
            {activeTab === "Today's Plan" && <TodaysPlan plan={sortedPlan} />}

            {/* {activeTab === "Saved" && <SavedPlans saved={saved} />} */}
            {activeTab === "Saved" && <SavedPlans saved={sortedSaved} />}
          </div>
        </div>
      </div>
    </>
  );
}
