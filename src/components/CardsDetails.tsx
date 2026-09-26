import { oswald } from "@/lib/fonts";
import { IData } from "@/type/data.type";
import Image from "next/image";
import React from "react";

import AddToPlanBtn from "./cardDetails/AddToPlanBtn";
import SaveFotLater from "./cardDetails/SaveLaterBtn";

interface ICardsDetails {
  data: IData;
}

const CardsDetails = ({ data }: ICardsDetails) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        gap-9
        object-contain
        mx-auto
        w-full
        max-w-[1120px]
        px-4
        sm:px-6
        lg:px-0
        rounded-2xl
        justify-between
        py-6
        sm:py-8
        lg:py-9
      "
    >
      {/* Image */}
      <div className="w-full lg:w-auto h-auto lg:h-[720px]">
        <Image
          className="rounded-2xl w-full lg:w-auto h-auto lg:h-full"
          src={data.image}
          alt={data.name}
          width={600}
          height={700}
        />
      </div>

      {/* Details */}
      <div className="w-full lg:w-auto space-y-6">
        <h3 className={`${oswald.className} text-2xl sm:text-3xl font-bold`}>
          {data.name}
        </h3>

        <p className="text-[#9CA3AF] text-sm sm:text-base">
          {data.description}
        </p>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {data.muscleGroups.map((muscle: string) => (
            <p
              className="
                bg-[#CCFF00]
                text-sm
                font-semibold
                rounded-[8px]
                px-3
                py-1
                text-black
              "
              key={muscle}
            >
              {muscle}
            </p>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl shadow-sm overflow-hidden">
          <table className="w-full rounded-2xl bg-[#232834]">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">EQUIPMENT</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.equipment}
                </td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">DIFFICULTY</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.difficulty}
                </td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">SETS</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.sets}
                </td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">REPS</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.reps}
                </td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">DURATION</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.duration} min
                </td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 sm:px-7 text-gray-500">CALORIES</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.caloriesBurned} kcal
                </td>
              </tr>

              <tr>
                <td className="py-3 px-4 sm:px-7 text-gray-500">RATING</td>

                <td className="py-3 px-4 sm:px-7 text-right font-medium">
                  {data.rating}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Instructions */}
          <div className="py-5 space-y-5">
            <p className={`${oswald.className} font-bold text-[20px]`}>
              INSTRUCTIONS
            </p>

            <ol className="space-y-2">
              {data.instructions.map((instruction: string, ind: number) => (
                <li
                  key={ind}
                  className="flex gap-2 text-sm sm:text-base text-[#D1D5DB]"
                >
                  <span className="shrink-0">{ind + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <AddToPlanBtn data={data} />

            <SaveFotLater data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
