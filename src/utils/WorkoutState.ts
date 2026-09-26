import { IData } from "@/type/data.type";

export const getWorkoutStats = (plan: IData[]) => {
  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return {
    totalExercises,
    totalMinutes,
    totalCalories,
  };
};