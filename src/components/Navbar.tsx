"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useContext(WorkoutContext);
  return (
    // <div className="border-b border-gray-700">
    //   <div className="flex justify-between items-center py-[15px] mx-auto w-full max-w-[1120px] ">
    //     <div className="flex justify-between">
    //       <Image src={logo} alt="logo image" width={30} height={30} />
    //       <p className={`${oswald.className} text-[22px] font font-semibold`}>
    //         FITLOG
    //       </p>
    //     </div>

    //     <ul className="flex justify-between font-semibold">
    //       <Link href={"/"}>
    //         <li className="px-4 py-[5px] rounded-[8px] hover:bg-[#1A2312] text-[#9CA3AF] text-sm">
    //           Workout
    //         </li>
    //       </Link>
    //       <Link href={"/my-plan"}>
    //         <li className="px-4 py-[5px] rounded-[8px] hover:bg-[#1A2312] text-[#9CA3AF] text-sm">
    //           My Plan
    //         </li>
    //       </Link>
    //     </ul>

    //     <div className="flex justify-between gap-7">
    //       <p className="text-xs font-semibold">
    //         Plan{" "}
    //         <span className=" border-1 rounded-full px-[5px] bg-[#ccff00] text-black">
    //           0
    //         </span>
    //       </p>
    //       <p className="text-xs font-semibold">
    //         Saved <span className=" border-1 rounded-full px-[5px] ">0</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="border-b border-gray-700">
      <div className="flex justify-between items-center py-[15px] mx-auto w-full max-w-[1120px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo image" width={30} height={30} />

          <p className={`${oswald.className} text-[22px] font-semibold`}>
            FITLOG
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex gap-2 font-semibold">
          <Link href="/">
            <li
              className={`px-4 py-[5px] rounded-[8px] text-sm ${
                pathname === "/"
                  ? "bg-[#1A2312] text-[#CCFF00]"
                  : "text-[#9CA3AF] hover:bg-[#1A2312]"
              }`}
            >
              Workout
            </li>
          </Link>

          <Link href="/my-plan">
            <li
              className={`px-4 py-[5px] rounded-[8px] text-sm ${
                pathname === "/my-plan"
                  ? "bg-[#1A2312] text-[#CCFF00]"
                  : "text-[#9CA3AF] hover:bg-[#1A2312]"
              }`}
            >
              My Plan
            </li>
          </Link>
        </ul>

        {/* Plan & Saved */}
        <div className="flex gap-7">
          <Link href={"/my-plan"}>
            <p className="text-xs font-semibold">
              Plan{" "}
              <span className="border rounded-full px-[5px] bg-[#CCFF00] text-black">
                {plan.length}
              </span>
            </p>
          </Link>
          <Link href={'/my-plan'}>
            <p className="text-xs font-semibold">
              Saved{" "}
              <span className="border rounded-full px-[5px]">
                {saved.length}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
