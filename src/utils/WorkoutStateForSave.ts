import { IData } from "@/type/data.type";

export const getWorkoutStatsForSaved = (saved: IData[]) => {
  const totalExercises = saved.length;

  const totalMinutes = saved.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = saved.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return {
    totalExercises,
    totalMinutes,
    totalCalories,
  };
};