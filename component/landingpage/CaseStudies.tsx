"use client";

import { Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudies = () => {
  return (
    <div className="w-full flex flex-col gap-5 my-10 px-2">
      <div className="w-full flex flex-col md:items-center gap-10">
        <h1 className="text-[#000000] text-lg md:text-2xl font-semibold md:text-center text-start">
          Building smarter ecosystems for startups in B2B, and retail for the
          next digital era
        </h1>
        <p className="text-sm text-[#000000] md:text-lg w-2/3 text-center md:flex hidden">
          We build smarter digital ecosystems designed to empower startups
          across B2B and retail sectors. Our solutions connect workflows,
          streamline operations, and improve the way businesses interact with
          their customers.
        </p>
      </div>
      <div className="overflow-x-auto no-scrollbar flex py-4">
        <div className="flex flex-row mx-auto md:grid md:grid-cols-2 md:gap-20 gap-5">
          {/* game  */}
          <div className="md:w-full w-60 flex flex-col gap-5">
            <Image
              src={
                "https://images.unsplash.com/photo-1567943346767-72780dd14cd5"
              }
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-120 h-48 rounded-md hover:scale-105 transition-all duration-500 ease-in-out"
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
              <h1 className="text-[#000000] text-sm font-semibold md:text-xl hover:underline underline-offset-4">
                21% higher conversion for a top marketplace
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem] md:text-[0.9rem]">
                Augmenting a highly demanding team with product design experts
                for rapid, tangible results
              </p>
            </div>
          </div>

          {/* sketck  */}
          <div className="md:w-full w-60 md:mt-28 flex flex-col gap-5">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1701085496588-8f294c8cd063"
              }
              width={"100%"}
              alt="Game"
              className="w-full md:h-120 h-48 rounded-md hover:scale-105 transition-all duration-500 ease-in-out"
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
              <h1 className="text-[#000000] text-sm font-semibold md:text-xl hover:underline underline-offset-4">
                System architecture for autonomous stores by Zabka
              </h1>
              <p className="text-[#6D6D6D] text-[0.8rem] md:text-[0.9rem]">
                Planning, designing, implementing, and maintaining autonomous
                stores architecture for a major chain
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start md:justify-center items-center gap-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
        <p className="font-bold md:font-medium text-sm text-[#000000] underline underline-offset-2">
          More case studies
        </p>
        <FaArrowRightLong className="mr-4" />
        <div>
          <p className="text-[0.7rem] font-semibold px-4 py-1 w-max h-max rounded-full bg-[#FF8D28]">
            Coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
