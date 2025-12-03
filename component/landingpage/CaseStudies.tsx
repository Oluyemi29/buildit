"use client";

import { Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";


const CaseStudies = () => {
  return (
    <div className="w-full flex flex-col gap-5 my-5 px-2">
      <h1 className="text-[#000000] text-lg font-semibold md:text-center text-start">
        Building smarter ecosystems for startups in B2B, and retail for the next
        digital era
      </h1>
      <div className="overflow-x-auto flex py-4">
        <div className="flex flex-row gap-5">
          {/* game  */}
          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/game.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-60 h-48 rounded-md"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <Image
                src={"/sportano_logo.png"}
                alt="Sportano"
                height={"50%"}
                width={"100%"}
              />
              <h1 className="text-[#000000] font-bold text-[0.8rem]">UI/UX</h1>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <h1 className="text-[#000000] text-sm font-semibold">
                21% higher conversion for a top marketplace
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem]">
                Augmenting a highly demanding team with product design experts
                for rapid, tangible results
              </p>
            </div>
          </div>

          {/* sketck  */}
          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/sketch.png"}
              width={"100%"}
              alt="Game"
              className="w-full md:h-60 h-48 rounded-md"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <Image
                src={"/zabka.png"}
                alt="Sportano"
                width={"100%"}
                height={"50%"}
              />
              <h1 className="text-[#000000] font-bold text-[0.8rem]">UI/UX</h1>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-[#000000] text-sm font-semibold">
                System architecture for autonomous stores by Zabka
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem]">
                Planning, designing, implementing, and maintaining autonomous
                stores architecture for a major chain
              </p>
            </div>
          </div>

          {/* game  */}
          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/game.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-60 h-48 rounded-md"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <Image
                src={"/sportano_logo.png"}
                alt="Sportano"
                height={"50%"}
                width={"100%"}
              />
              <h1 className="text-[#000000] font-bold text-[0.8rem]">UI/UX</h1>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <h1 className="text-[#000000] text-sm font-semibold">
                21% higher conversion for a top marketplace
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem]">
                Augmenting a highly demanding team with product design experts
                for rapid, tangible results
              </p>
            </div>
          </div>

          {/* sketck  */}
          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/sketch.png"}
              width={"100%"}
              alt="Game"
              className="w-full md:h-60 h-48 rounded-md"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <Image
                src={"/zabka.png"}
                alt="Sportano"
                width={"100%"}
                height={"50%"}
              />
              <h1 className="text-[#000000] font-bold text-[0.8rem]">UI/UX</h1>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-[#000000] text-sm font-semibold">
                System architecture for autonomous stores by Zabka
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem]">
                Planning, designing, implementing, and maintaining autonomous
                stores architecture for a major chain
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <p className="font-bold text-sm text-[#000000] underline underline-offset-2">
          More case studies
        </p>
        <FaArrowRightLong className="mr-4" />
        <div>
          <p className="text-[0.7rem] font-semibold px-4 py-1 w-max h-max rounded-full bg-[#FF8D28]">Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
