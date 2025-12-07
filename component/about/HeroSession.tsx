"use client";

import { Button, Image } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSession = () => {
  return (
    <div>
      <div
        className="w-full h-120 bg-center bg-no-repeat bg-cover p-2 md:p-5 flex flex-col justify-center"
        style={{
          backgroundImage: "url('/blue-bg.jpg')",
        }}
      >
        <div className="w-full md:w-[60%] flex flex-col md:items-center md:mx-auto md:gap-7 gap-16">
          <h1 className="text-[#E3D8D8] md:text-5xl text-2xl md:text-center md:leading-16 font-semibold hover:scale-105 hover:opacity-70 transition-all duration-500 ease-in-out">
            We Build Digital Products That Move Businesses Forward
          </h1>
          <div className="w-full md:w-[70%] flex flex-col md:text-center gap-6">
            <p className="text-[#E3D8D8] md:text-[1rem] text-[0.8rem] hover:scale-105 hover:opacity-70 transition-all duration-500 ease-in-out">
              BuilditLab is a software development studio helping startups and
              companies bring ideas to life with modern engineering, clean
              design, and a strong focus on results.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-5">
            <Button as={Link} href="/contact" className="text-[#CCCCCC] bg-[#021645] border-1 border-[#CCCCCC] w-max hover:scale-105 transition-all duration-500 ease-in-out">
              Start a project
              <FaArrowRightLong className="text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F5F7] w-full h-auto flex flex-col  items-center">
        

        <div className="w-full md:hidden flex md:flex-row md:justify-center py-12 flex-col gap-5">
          <div className="w-full flex flex-row md:justify-end justify-start">
            <Image
              src={"/about1.jpg"}
              alt="About1"
              width={"100%"}
              height={"100%"}
              className="md:w-full w-60 h-40"
            />
          </div>
          <div className="w-full flex flex-row md:justify-start justify-end">
            <Image
              src={"/about2.jpg"}
              alt="About1"
              width={"100%"}
              height={"100%"}
              className="md:w-full w-60 h-40 items-end"
            />
          </div>
        </div>

        <div className="md:flex hidden flex-row mt-10 gap-10">
          <div className="group relative overflow-hidden rounded-xl">
            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <p className="text-white text-lg font-medium w-[80%] text-center">
                we’re more than a software company, we’re partners in innovation
              </p>
            </div>

            {/* Image */}
            <Image
              src="/about1.jpg"
              alt="About1"
              className="object-cover z-0 transition-all duration-500 group-hover:scale-110"
            />
          </div>

          {/* Second one */}
          <div className="group relative overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <p className="text-white text-lg font-medium w-[80%] text-center">
                we bring your ideas to life with clean design, efficient
                development
              </p>
            </div>
            <Image
              src="/about2.jpg"
              alt="About2"
              className="object-cover z-0 transition-all duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
