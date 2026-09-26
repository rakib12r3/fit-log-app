import { IData } from "@/type/data.type";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyPlansCard = ({ item }: { item: IData }) => {
  return (
    <div>
      {/* <h3>My plans cards</h3> */}
      <div className="w-full ">
        {/* Workout Card */}
        <div className="w-full rounded-2xl border border-[#202734] bg-[#13171f] p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Image */}
            <div className="shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={145}
                height={85}
                className="w-full md:w-[145px] h-[85px] rounded-xl object-cover"
              />
            </div>

            {/* Workout Information */}
            <div className="flex-1 min-w-0">
              {/* Workout Name */}
              <h2 className="text-lg md:text-xl font-bold uppercase text-white">
                {item.name}
              </h2>

              {/* Equipment */}
              <p className="text-sm text-[#818898] mt-1">{item.equipment}</p>

              {/* Workout Stats */}
              <div className="flex items-center mt-4 gap-4 mt-2 text-xs text-[#b1b6c1]">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-[#ccff00]" />
                  {item.duration} min
                </span>

                <span className="flex items-center gap-1">
                  <Flame size={14} className="text-[#ccff00]" />
                  {item.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                  <Star size={14} className="text-[#ccff00]" />
                  {item.rating}
                </span>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 shrink-0">
              {/* View Details */}
              <Link href={`/workout/${item.id}`}>
                <button className="px-4 py-2 rounded-full border border-[#303847] text-sm text-[#d1d5db] hover:bg-gray-950 hover:border-0">
                  View Details
                </button>
              </Link>

              {/* Mark as Done */}
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] text-black text-sm font-bold">
                <Check size={15} />
                Mark as Done
              </div>

              {/* Close / Remove */}
              <div className="text-[#737b8a] p-1">
                <X size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlansCard;
