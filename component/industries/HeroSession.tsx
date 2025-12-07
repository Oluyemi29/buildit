"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSession = () => {
  return (
    <div
      className="w-full h-120 bg-center bg-no-repeat bg-cover p-2 md:p-5 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/blue-bg.jpg')",
      }}
    >
      <div className="w-full md:w-[60%] flex flex-col md:items-center md:mx-auto md:gap-7 gap-16">
        <h1 className="text-[#E3D8D8] md:text-5xl text-2xl md:text-center md:leading-16 font-semibold hover:scale-105 hover:opacity-70 transition-all duration-500 ease-in-out">
          We Build Digital Solutions for Every Industry
        </h1>
        <div className="w-full md:w-[80%] flex flex-col md:text-center gap-6">
          <p className="text-[#E3D8D8] md:text-[1rem] text-[0.8rem] hover:scale-105 transition-all duration-500 ease-in-out">
            We design and develop custom software tailored to your industry’s
            unique challenges, workflows, and growth opportunities.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-5">
          <Button
            as={Link}
            href="/contact"
            className="text-[#CCCCCC] bg-[#021645] border-1 border-[#CCCCCC] w-max hover:scale-110 transition-all duration-500 ease-in-out"
          >
            Let Build For Your Industry
            <FaArrowRightLong className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
