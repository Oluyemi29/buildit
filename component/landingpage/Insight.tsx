"use client";

import { Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Insight = () => {
  return (
    <div className="w-full md:p-5 p-2">
      <h1 className="text-[#000000] text-lg font-bold my-10">
        Explore insights for acceleration
      </h1>
      <div className="w-full flex overflow-x-auto">
        <div className="flex flex-row gap-5">
          {/* blog  */}
          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/blog1.jpg"}
              width={"100%"}
              alt="Blog1"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem]">Blog</p>
              <p className="text-[#000000] font-semibold text-sm">
                ChatGPT Just Became a Shop: The Agentic Commerce Revolution
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </div>

          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/blog2.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem]">Blog</p>
              <p className="text-[#000000] font-semibold text-sm">
                Scaling Microservices: Lessons Learnt from Netflix, Uber, Amazon
                and Spotify
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </div>

          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/blog1.jpg"}
              width={"100%"}
              alt="Blog1"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem]">Blog</p>
              <p className="text-[#000000] font-semibold text-sm">
                ChatGPT Just Became a Shop: The Agentic Commerce Revolution
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </div>

          <div className="md:w-80 w-60 flex flex-col gap-5">
            <Image
              src={"/blog2.png"}
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-64 h-60 rounded-md"
            />
            <div className="flex flex-col gap-5">
              <p className="text-[#000000] font-semibold text-[0.8rem]">Blog</p>
              <p className="text-[#000000] font-semibold text-sm">
                Scaling Microservices: Lessons Learnt from Netflix, Uber, Amazon
                and Spotify
              </p>
              <div className="flex flex-row justify-end w-full">
                <FaArrowRightLong className="text-end" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row my-5 justify-start items-center gap-2">
        <p className="font-bold text-sm text-[#000000] underline underline-offset-2">
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
