"use client";

import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover py-20 px-2"
      style={{
        backgroundImage: "url('/blue-stripe.jpg')",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center gap-20">
        <h1 className="text-[#F2F5F7] font-bold text-xl text-center">
          Designing scalable digital ecosystems that power revenue, efficiency,
          and customer
        </h1>
        <Button className="text-[#CCCCCC] bg-[#021645] border-1 border-[#CCCCCC]">
          Start a project <FaArrowRightLong className="text-end text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Project;
