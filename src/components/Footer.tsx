import Image from "next/image";
import React from "react";
import footer from "@/assets/logo.png";
import Link from "next/link";
import { oswald } from "@/lib/fonts";

const Footer = () => {
  return (
    <div className="border-t border-gray-700 ">
      <div className="flex justify-between items-center py-5  mx-auto w-full max-w-[1120px] ">
        <Link href={'/'}>
        <div className="flex ">
          <Image src={footer} alt="Footer Logo" />
          <p className={`${oswald.className} font-bold`}>FITLOG</p>
        </div>
        </Link>
        <div>
          <p className="text-[#8A92A0]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
