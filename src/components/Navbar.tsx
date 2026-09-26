"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { oswald } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useContext(WorkoutContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-700 bg-[#0B0F08]/95 backdrop-blur">
      <div className="flex min-h-[70px] items-center justify-between px-4 py-[15px] mx-auto w-full max-w-[1120px]">

        {/* Left Side - Hamburger + Logo */}
        <div className="flex items-center gap-3">

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="FITLOG logo"
                width={30}
                height={30}
              />

              <p
                className={`${oswald.className} text-[22px] font-semibold`}
              >
                FITLOG
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 font-semibold">

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
        <div className="flex gap-3 sm:gap-7">

          <Link href="/my-plan">
            <p className="text-xs font-semibold">
              Plan{" "}
              <span className="border rounded-full px-[5px] bg-[#CCFF00] text-black">
                {plan.length}
              </span>
            </p>
          </Link>

          <Link href="/my-plan">
            <p className="text-xs font-semibold">
              Saved{" "}
              <span className="border rounded-full px-[5px]">
                {saved.length}
              </span>
            </p>
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-700 bg-[#0B0F08]">

          <ul className="flex flex-col p-4 gap-2 font-semibold">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <li
                className={`px-4 py-3 rounded-[8px] text-sm ${
                  pathname === "/"
                    ? "bg-[#1A2312] text-[#CCFF00]"
                    : "text-[#9CA3AF] hover:bg-[#1A2312]"
                }`}
              >
                Workout
              </li>
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
            >
              <li
                className={`px-4 py-3 rounded-[8px] text-sm ${
                  pathname === "/my-plan"
                    ? "bg-[#1A2312] text-[#CCFF00]"
                    : "text-[#9CA3AF] hover:bg-[#1A2312]"
                }`}
              >
                My Plan
              </li>
            </Link>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

