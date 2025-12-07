"use client";
import { motion, Variants } from "framer-motion";

const OurMission = () => {
  const animateds: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=" w-full flex md:hidden flex-col md:gap-5 gap-14 p-2 md:p-5">
      <motion.div
        variants={animateds}
        initial="hidden"
        whileInView="visible"
        className="w-full flex flex-col gap-7 justify-center items-center"
      >
        <p className="font-semibold text-xl md:text-2xl md:text-center md:self-center self-end">
          Our Mission
        </p>
        <p className="text-sm md:text-[0.9rem] font-medium md:text-center text-start w-full md:w-2/3">
          To help startups and businesses bring their ideas to life through
          high-quality software development, user-centered design, and practical
          product strategy.
        </p>
      </motion.div>

      <motion.div
        variants={animateds}
        initial="hidden"
        whileInView="visible"
        className="w-full flex flex-col gap-7 justify-center items-center"
      >
        <p className="font-semibold text-xl md:text-2xl md:text-center md:self-center self-start">
          Our Vision
        </p>
        <p className="text-sm md:text-[0.9rem] font-medium md:text-center text-start w-full md:w-2/3">
          To help startups and businesses bring their ideas to life through
          high-quality software development, user-centered design, and practical
          product strategy.
        </p>
      </motion.div>
    </div>
  );
};

export default OurMission;
