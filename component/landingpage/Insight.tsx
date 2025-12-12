"use client";

import { Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Insight = () => {
  return (
    <div className="w-full flex flex-col gap-5 my-10 px-2">
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
      <div className="overflow-x-auto no-scrollbar flex py-4">
        <div className="flex flex-row mx-auto md:grid md:grid-cols-2 md:gap-20 gap-5">
          {/* game  */}
          <div className="md:w-full w-60 flex flex-col gap-5">
            <Image
              src={
                "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
              }
              width={"100%"}
              alt="Game"
              className="w-full relative md:h-110 h-48 rounded-md hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-[#000000] font-bold text-[0.8rem]">Blog</h1>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <h1 className="text-[#000000] text-sm font-semibold md:text-xl hover:underline underline-offset-4">
                ChatGPT Just Became a Shop
              </h1>
              <p className="text-[#6D6D6D] line-clamp-1 text-[0.8rem] md:text-[0.9rem]">
                ChatGPT just introduced a new Shop where users can explore,
                create, and distribute custom <br /> AI assistants.
              </p>
            </div>
          </div>

          {/* sketck  */}
          <div className="md:w-full w-60 md:mt-28 flex flex-col gap-5">
            <Image
              src={"https://images.unsplash.com/photo-1560179707-f14e90ef3623"}
              width={"100%"}
              alt="Game"
              className="w-full md:h-110 h-48 rounded-md hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-[#000000] font-bold text-[0.8rem]">Blog</h1>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <h1 className="text-[#000000] text-sm font-semibold md:text-xl hover:underline underline-offset-4">
                Scaling microservices
              </h1>
              <p className="text-[#6D6D6D] line-clamp-1 text-[0.8rem] md:text-[0.9rem]">
                Scaling microservices ensures each service grows independently
                to meet demand without <br /> impacting the rest of the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row my-10 justify-start md:justify-center items-center gap-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
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
