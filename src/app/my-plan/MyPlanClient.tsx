"use client";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { oswald } from "@/lib/fonts";
import { getWorkoutStats } from "@/utils/WorkoutState";
import { getWorkoutStatsForSaved } from "@/utils/WorkoutStateForSave";
import TodaysPlan from "@/components/shared/TodaysPlan";
import SavedPlans from "@/components/shared/SavedPlan";


export default function MyPlanClient() {
  const [activeTab, setActiveTab] = useState("Today's Plan");

  const { plan, saved  } = useContext(WorkoutContext);

  const [sortBy, setSortBy] = useState<
    "duration" | "caloriesBurned" | "rating"
  >("duration");

  const plansData = getWorkoutStats(plan);

  const savedData = getWorkoutStatsForSaved(saved);

  // Sort Today's Plan
  const sortedPlan = [...plan].sort((a, b) => {
    return Number(b[sortBy]) - Number(a[sortBy]);
  });

  // Sort Saved Plans
  const sortedSaved = [...saved].sort((a, b) => {
    return Number(b[sortBy]) - Number(a[sortBy]);
  });

  
  return (
    <>
      <div
        className="
          mx-auto
          w-full
          max-w-[1120px]
          px-4
          sm:px-6
          lg:px-0
          my-6
          sm:my-7
        "
      >
        {/* ========================= */}
        {/* Title */}
        {/* ========================= */}

        <div className="mb-6 sm:mb-8">
          <h1
            className={`
              ${oswald.className}
              text-3xl
              sm:text-4xl
              text-white
              mb-2
            `}
          >
            MY PLAN
          </h1>

          <p className="text-sm sm:text-base text-[#616876]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ========================= */}
        {/* Stats */}
        {/* ========================= */}

        <div
          className="
            bg-[#10141d]
            border
            border-[#1a202c]
            rounded-2xl
            p-5
            sm:p-6
            md:p-8
            mb-7
            sm:mb-8
            grid
            grid-cols-1
            sm:grid-cols-3
            divide-y
            sm:divide-y-0
            sm:divide-x
            divide-[#1a202c]
          "
        >
          {/* Exercises */}
          <div className="pb-5 sm:pb-0 sm:pr-6 md:pr-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Exercises
            </span>

            <span className="text-4xl sm:text-5xl font-black text-[#ccff00]">
              {activeTab === "Today's Plan"
                ? plansData.totalExercises
                : savedData.totalExercises}
            </span>
          </div>

          {/* Minutes */}
          <div className="py-5 sm:py-0 sm:px-6 md:px-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Minutes
            </span>

            <span className="text-4xl sm:text-5xl font-black text-white">
              {activeTab === "Today's Plan"
                ? plansData.totalMinutes
                : savedData.totalMinutes}
            </span>
          </div>

          {/* Calories */}
          <div className="pt-5 sm:pt-0 sm:pl-6 md:pl-8">
            <span className="text-xs font-medium text-[#616876] block mb-2">
              Calories
            </span>

            <span className="text-4xl sm:text-5xl font-black text-white">
              {activeTab === "Today's Plan"
                ? plansData.totalCalories
                : savedData.totalCalories}
            </span>
          </div>
        </div>

        {/* ========================= */}
        {/* Control Row */}
        {/* ========================= */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
            mb-6
            w-full
          "
        >
          {/* Tabs */}
          <div
            className="
              bg-[#10141d]
              p-1
              rounded-xl
              border
              border-[#1a202c]
              inline-flex
              self-start
              w-full
              sm:w-auto
            "
          >
            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("Today's Plan")}
              className={`
                flex-1
                sm:flex-none
                text-center
                px-4
                sm:px-5
                py-2
                text-sm
                font-medium
                rounded-lg
                cursor-pointer
                transition-colors
                whitespace-nowrap
                ${
                  activeTab === "Today's Plan"
                    ? "bg-[#1e2534] text-[#C2F800]"
                    : "text-[#818898] hover:text-white"
                }
              `}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("Saved")}
              className={`
                flex-1
                sm:flex-none
                text-center
                px-4
                sm:px-5
                py-2
                text-sm
                font-medium
                rounded-lg
                cursor-pointer
                transition-colors
                whitespace-nowrap
                ${
                  activeTab === "Saved"
                    ? "bg-[#1e2534] text-[#C2F800]"
                    : "text-[#818898] hover:text-white"
                }
              `}
            >
              Saved
            </button>
          </div>

          {/* Sort By */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-2
              w-full
              md:w-auto
            "
          >
            <label className="font-semibold text-sm whitespace-nowrap">
              Sort by
            </label>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "duration"
                    | "caloriesBurned"
                    | "rating"
                )
              }
              className="
                select
                select-success
                w-full
                sm:w-[250px]
                md:w-[300px]
              "
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* ========================= */}
        {/* Tab Content */}
        {/* ========================= */}

        <div className="w-full">
          {activeTab === "Today's Plan" && (
            <TodaysPlan plan={sortedPlan} />
          )}

          {activeTab === "Saved" && (
            <SavedPlans saved={sortedSaved} />
          )}
        </div>
      </div>
    </>
  );

}

