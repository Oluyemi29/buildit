"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const OurJourney = () => {
  return (
    <div className="w-full">
      <div
        className="w-full bg-center bg-no-repeat bg-cover px-2 md:px-5 py-16 flex flex-col items-center gap-10"
        style={{ backgroundImage: "url('/gradient.jpg')" }}
      >
        <h1 className="text-white text-[1rem] md:text-2xl font-semibold">
          Join Our Journey
        </h1>
        <div className="flex flex-col md:hidden gap-7">
          <p className="text-[0.8rem] text-white text-center md:text-[0.9rem] font-medium">
            At BuilditLab, we’re more than a software company, we’re partners in
            innovation.
          </p>
          <p className="text-[0.8rem] text-white text-center md:text-[0.9rem] font-medium">
            Whether youre building your first MVP or scaling a fast-growing
            product, we’re here to bring your vision to life.
          </p>
        </div>
        <div className="hidden flex-col md:flex gap-4">
          <p className="text-[0.8rem] md:text-[0.9rem] text-white md:w-1/2 md:mx-auto text-center font-medium md:leading-7 leading-6">
            At BuilditLab, we’re more than a software company, we’re partners in
            innovation. Whether youre building your first MVP or scaling a
            fast-growing product, we’re here to bring your vision to life.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        className="bg-transparent w-full py-12 px-2 md:px-5 flex flex-col justify-center items-center my-5 gap-12 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px]"
      >
        <h1 className="text-[#000000] text-[0.8rem] md:text-[1rem] font-semibold text-center  md:w-2/3 md:leading-7 leading-6">
          “Every idea deserves a chance to become something real. Our mission at
          BuilditLab is to give founders the technology and support they need to
          make that happen.”
        </h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[#000000] text-[0.8rem] md:text-[1rem] font-semibold">
            Mr Olawale
          </p>
          <p className="text-[#000000] text-[0.8rem] md:text-[0.9rem] md:font-medium font-semibold">
            Founder, BuilditLab
          </p>
        </div>
      </motion.div>

      <div className="w-full flex flex-col md:gap-8 gap-5 px-2 md:px-5 py-10 md:items-center items-start relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)]"></div>
        <h1 className="text-[1rem] md:text-2xl text-[#000000] font-bold">
          Go past progress metrics to understand genuine results
        </h1>
        <p className="text-[0.8rem] md:text-[1rem] text-[#000000] font-medium md:w-2/3 md:text-center md:leading-7 leading-6">
          Speed, clarity, and impact built into every step. We help startups go
          from idea to launch fast, with zero compromises on quality or creative
          vision.
        </p>
        <Button
          as={Link}
          href="/contact"
          className="bg-[#1B2D58] text-[#CCCCCC] border-1 border-[#F2F5F7] w-max px-5 hover:scale-105 transition-all duration-500 ease-in-out"
        >
          Let`s brings your idea to life{" "}
          <FaArrowRightLong className="text-[#CCCCCC]" />
        </Button>
      </div>
    </div>
  );
};

export default OurJourney;
