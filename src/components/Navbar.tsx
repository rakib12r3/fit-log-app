import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-700">

    <div className="flex justify-between items-center py-[15px] mx-auto w-full max-w-[1120px] ">
      <div className="flex justify-between">
        <Image src={logo} alt="logo image" width={30} height={30} />
        <p className={`${oswald.className} text-[22px] font font-semibold`}>FITLOG</p>
      </div>

      <ul className="flex justify-between font-semibold">
        <li className="px-4 py-[5px] rounded-[8px] hover:bg-[#1A2312] text-[#9CA3AF] text-sm">
        <Link href={'/'}>
          Workout
        </Link>
        </li>
        <li className="px-4 py-[5px] rounded-[8px] hover:bg-[#1A2312] text-[#9CA3AF] text-sm">
          <Link href={'/my-plan'}>My Plan</Link>
        </li>
      </ul>

      <div className="flex justify-between gap-7">
        <p className="text-xs font-semibold">
          Plan{" "}
          <span className=" border-1 rounded-full px-[5px] bg-[#ccff00] text-black">
            0
          </span>
        </p>
        <p className="text-xs font-semibold">
          Saved{" "}
          <span className=" border-1 rounded-full px-[5px] ">0</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
