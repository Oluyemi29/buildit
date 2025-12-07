"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const CalltoAction = () => {
  // bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px]

  // bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px] p-10
  return (
    <div className="w-full flex flex-col p-2 md:p-5 my-10 md:items-center items-start gap-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)]"></div>
      <h1 className="text-lg md:text-2xl text-[#000000] font-bold">
        Go past progress metrics to understand genuine results
      </h1>
      <p className="text-[#000000] font-medium text-[0.8rem] md:text-[1rem] w-full md:w-2/3 md:text-center">
        Speed, clarity, and impact built into every step. We help startups go
        from idea to launch fast, with zero compromises on quality or creative
        vision.
      </p>
      <Button
        as={Link}
        href="/contact"
        className="bg-[#1B2D58] text-white hover:scale-110 transition-all duration-500 ease-in-out"
      >
        Let bring your idea to life <FaArrowRightLong className="text-white" />
      </Button>
    </div>
  );
};

export default CalltoAction;
