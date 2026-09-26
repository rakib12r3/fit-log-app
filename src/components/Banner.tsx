
import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import { oswald } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-0 my-5 sm:my-7">
      
      <div
        className="
          flex flex-col lg:flex-row
          items-center
          gap-6 lg:gap-10
          bg-[#222630]
          rounded-2xl
          px-5 py-8
          sm:px-7 sm:py-10
          lg:px-12 lg:py-14
        "
      >
        {/* Left - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
          
          <p className="text-[#C2F800] text-sm font-semibold">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`
              ${oswald.className}
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              font-bold
              leading-tight
            `}
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-[#9CA3AF] text-sm sm:text-base leading-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a href="#library">
            <button
              className="
                inline-flex
                items-center
                gap-2
                bg-[#C2F800]
                px-5 py-3
                sm:px-6 sm:py-4
                rounded-[10px]
                mt-2
                text-black
                text-sm
                font-bold
                hover:bg-[#b8e600]
                transition
                active:scale-95
              "
            >
              BROWSE WORKOUTS
              <ArrowRight size={18} />
            </button>
          </a>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={banner}
            alt="Workout Banner"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

