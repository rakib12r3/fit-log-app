import Image from "next/image";
import React from "react";
import banner from '@/assets/banner.png'
import { oswald } from "@/lib/fonts";




const Banner = () => {
  return (
    <div className="flex bg-[#222630]  mx-[50px]  rounded-2xl  items-center p-[56px] my-7">
      <div className="space-y-5">
        <p className="text-[#C2F800] text-sm font-semibold">WORKOUT LIBRARY</p>
        <h1 className={`${oswald.className} text-6xl font-semibold`}>TRAIN WITH INTENT. LOG EVERY SET.</h1>
        <p className="text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#C2F800] p-4 rounded-[10px] mt-5 text-black text-sm font-bold">BROWSE WORKOUTS</button>
      </div>
      <div>
        <Image src={banner} alt="Banner Image"/>
      </div>
    </div>
  );
};

export default Banner;
