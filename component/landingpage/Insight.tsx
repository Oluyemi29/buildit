"use client";

import { Card, Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Insight = () => {
  return (
    <div className="w-full md:p-5 p-2">
      <div className="my-10 flex flex-col md:items-center items-start gap-5">
        <h1 className="text-[#000000] text-lg md:text-2xl font-bold">
          Explore insights for acceleration
        </h1>
        <p className="text-sm md:text-[1rem] w-full md:w-2/3 md:text-center">
          Stay ahead of the curve with expert insights. Explore the latest
          trends, research and analysis to accelerate innovation, optimize
          operation and drive business results
        </p>
      </div>
      <div className="w-full flex no-scrollbar overflow-x-auto">
        <div className="flex flex-row my-3 gap-5">
          {/* blog  */}
          <Card className="md:w-80 w-60 flex flex-col gap-5 transition-all duration-500 ease-in-out p-3 hover:scale-105">
            <Image
              src={"/blog1.jpg"}
              width={"100%"}
              alt="Blog1"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem] md:text-[0.9rem]">Blog</p>
              <p className="text-[#000000] md:font-medium font-semibold text-sm">
                ChatGPT Just Became a Shop: The Agentic Commerce Revolution
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </Card>

          <Card className="md:w-80 w-60 flex flex-col gap-5 transition-all duration-500 ease-in-out p-3 hover:scale-105">
            <Image
              src={"/blog2.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem] md:text-[0.9rem]">Blog</p>
              <p className="text-[#000000] md:font-medium font-semibold text-sm">
                Scaling Microservices: Lessons Learnt from Netflix, Uber, Amazon
                and Spotify
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </Card>

          <Card className="md:w-80 w-60 flex flex-col gap-5 transition-all duration-500 ease-in-out p-3 hover:scale-105">
            <Image
              src={"/blog1.jpg"}
              width={"100%"}
              alt="Blog1"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem] md:text-[0.9rem]">Blog</p>
              <p className="text-[#000000] md:font-medium font-semibold text-sm">
                ChatGPT Just Became a Shop: The Agentic Commerce Revolution
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </Card>

          <Card className="md:w-80 w-60 flex flex-col gap-5 transition-all duration-500 ease-in-out p-3 hover:scale-105">
            <Image
              src={"/blog2.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem] md:text-[0.9rem]">Blog</p>
              <p className="text-[#000000] md:font-medium font-semibold text-sm">
                Scaling Microservices: Lessons Learnt from Netflix, Uber, Amazon
                and Spotify
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-row my-5 justify-start md:justify-center items-center gap-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
        <p className="font-bold md:font-medium text-sm text-[#000000] underline underline-offset-2">
          More valuable insights
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

export default Insight;
