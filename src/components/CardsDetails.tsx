import { oswald } from "@/lib/fonts";
import { IData } from "@/type/data.type";
import { Bookmark, CalendarPlus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ICardsDetails {
  data: IData;
}

const CardsDetails = ({ data }: ICardsDetails) => {
  return (
    <div className="flex gap-9 object-contain mx-auto w-full max-w-[1120px]  rounded-2xl justify-between py-9">
      <div className=" h-[700px]">
        <Image
          className="rounded-2xl h-full"
          src={data.image}
          alt={data.name}
          width={600}
          height={600}
        />
      </div>
      <div className="space-y-6">
        <h3 className={`${oswald.className} text-3xl font-bold`}>{data.name}</h3>
        <p className="text-[#9CA3AF]">
        {data.description}
        </p>
        <div className="flex gap-2">
          {data.muscleGroups.map((muscle: string) => (
            <p className="bg-[#CCFF00] text-sm font-semibold rounded-[8px] px-3 text-black" key={muscle}>
              {muscle}
            </p>
          ))}
        </div>
        <div className="rounded-xl   shadow-sm">
          <table className="w-full rounded-2xl bg-[#232834]">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-7 text-gray-500">EQUIPMENT</td>
                <td className="py-3 px-7 text-right font-medium">
                  {data.equipment}
                </td>
              </tr>

              <tr className="border-b  border-gray-700">
                <td className="py-3 px-7 text-gray-500">DIFFICULTY</td>
                <td className="py-3 px-7 text-right font-medium">
                  {data.difficulty}
                </td>
              </tr>

              <tr className="border-b  border-gray-700">
                <td className="py-3 px-7 text-gray-500">SETS</td>
                <td className="py-3 px-7 text-right font-medium">{data.sets}</td>
              </tr>

              <tr className="border-b  border-gray-700">
                <td className="py-3 px-7 text-gray-500">REPS</td>
                <td className="py-3 px-7 text-right font-medium">{data.reps}</td>
              </tr>
              <tr className="border-b  border-gray-700">
                <td className="py-3 px-7 text-gray-500">DURATION</td>
                <td className="py-3 px-7 text-right font-medium">{data.duration} min</td>
              </tr>
              <tr className="border-b  border-gray-700">
                <td className="py-3 px-7 text-gray-500">CALORIES</td>
                <td className="py-3 px-7 text-right font-medium">
                  {data.caloriesBurned} kcal
                </td>
              </tr>
              <tr>
                <td className="py-3 px-7 text-gray-500">RATING</td>
                <td className="py-3 px-7 text-right font-medium">{data.rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="py-5 space-y-5">
            <p className={`${oswald.className} font-bold text-[20px]`}>INSTRUCTIONS</p>
            <ol>
              {data.instructions.map((instruction: string, ind: number) => (
                <li key={ind} className="text-[#D1D5DB]">
                  <span>{ind + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex gap-2">
            <button className="flex gap-2 py-2 font-bold bg-[#CCFF00] px-8  rounded-2xl text-black">
              <CalendarPlus /> Add to today's plan
            </button>
             
            <button className="flex border font-bold py-2 px-5 gap-2 rounded-2xl">
              <Bookmark />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
