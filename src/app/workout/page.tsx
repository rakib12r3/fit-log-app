import WorkoutCards from "@/components/WorkoutCards";
import { oswald } from "@/lib/fonts";
import { IData } from "@/type/data.type";
import React from "react";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LibraryPage = async () => {
  const allData = await getData();
  // console.log(allData, "from Home page");
  
  return (
    <div className=" mx-auto w-full max-w-[1120px] ">
      <div className="py-[25px] space-y-2 mt-11">
        <h2 className={`${oswald.className} text-3xl`}>THE LIBRARY</h2>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div>
        <div id="allCards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-7 ">
          {allData.map((data: IData, ind: number) => (
            <WorkoutCards key={ind} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
