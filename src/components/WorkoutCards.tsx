import { oswald } from "@/lib/fonts";
import { IData } from "@/type/data.type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkoutCards {
  data: IData;
}

const WorkoutCards = ({ data }: IWorkoutCards) => {
  return (
    <div>
      <Link href={`/workout/${data.id}`}>
        <div className="hover:border border-amber-400 transition rounded-2xl overflow-hidden bg-[#20242E]">
          <Image
            src={data.image}
            alt={data.name}
            width={300}
            height={200}
            className="relative  max-h-[200px] w-full object-cover"
          />
          <div className="pl-6 space-y-3 py-5">
            <div className="flex gap-3 ">
              {data.muscleGroups.map((muscle: string, ind: number) => (
                <span
                  key={ind}
                  className="border rounded-2xl px-[10px] text-xs py-[2px] text-black font-semibold bg-[#C2F800]"
                >
                  {muscle}
                </span>
              ))}
            </div>
            <h4 className={`${oswald.className} text-[20px] font-semibold`}>
              {data.name}
            </h4>
            <p>{data.equipment}</p>
            <div className="flex text-xs">
              <p className="flex">
                <Clock className="text-[#C2F800] " size={16} />
                {data.duration} min
              </p>
              <p className="flex">
                <Flame className="text-[#C2F800] " size={16} />
                {data.caloriesBurned} kcal
              </p>
              <p className="flex">
                <Star className="text-[#C2F800] " size={16} />
                {data.rating}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCards;
