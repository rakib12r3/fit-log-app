import Image from "next/image";
import React from "react";
import footer from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-700 ">
      <div className="flex justify-between items-center py-5  mx-auto w-full max-w-[1120px] ">
        <div className="flex ">
          <Image src={footer} alt="Footer Logo" />
          <p>FITLOG</p>
        </div>
        <div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
