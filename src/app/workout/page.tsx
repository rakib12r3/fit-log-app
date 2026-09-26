
import WorkoutCards from "@/components/WorkoutCards";
import { oswald } from "@/lib/fonts";
import { IData } from "@/type/data.type";
import React from "react";

const getData = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await res.json();

  return data;
};

const LibraryPage = async () => {
  const allData = await getData();

  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[1120px]
        px-4
        sm:px-6
        lg:px-0
      "
    >
      {/* Heading */}
      <div className="mt-6 sm:mt-8 lg:mt-11 py-5 sm:py-6 lg:py-7 space-y-2">
        <h2
          className={`
            ${oswald.className}
            text-2xl
            sm:text-3xl
          `}
        >
          THE LIBRARY
        </h2>

        <p className="text-[#9CA3AF] text-sm sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div
        id="allCards"
        className="
        scroll-mt-[90px]
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-5
          gap-y-7
          sm:gap-x-6
          sm:gap-y-8
          lg:gap-x-6
          lg:gap-y-9
          pb-8
        "
      >
        {allData.map((data: IData, ind: number) => (
          <WorkoutCards
            key={ind}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;

