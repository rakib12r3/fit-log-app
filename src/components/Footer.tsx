
import Image from "next/image";
import React from "react";
import footer from "@/assets/logo.png";
import Link from "next/link";
import { oswald } from "@/lib/fonts";

const Footer = () => {
  return (
    <div className="border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-5 px-4 mx-auto w-full max-w-[1120px]">
        <Link href="/">
          <div className="flex items-center">
            <Image src={footer} alt="Footer Logo" />
            <p className={`${oswald.className} font-bold`}>FITLOG</p>
          </div>
        </Link>

        <div className="text-center md:text-right">
          <p className="text-[#8A92A0] text-sm md:text-base">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

