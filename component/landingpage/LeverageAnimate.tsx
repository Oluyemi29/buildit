"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { HiLightBulb } from "react-icons/hi";

const LeverageAnimate = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  // detect in view, no "once"
  const inView = useInView(ref, { margin: "-100px 0px" }); // optional margin

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Parent variant (optional)
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // stagger delay between children
      },
    },
  };

  // Child variant
  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div className="md:flex hidden">
      <motion.div
        variants={parentVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="w-full grid grid-cols-4 gap-5 mx-auto"
      >
        {/* ideation  */}
        <motion.div
          variants={childVariants}
          className="flex bg-transparent rounded-3xl p-8 flex-col items-start w-72 md:gap-7 gap-6 shadow-black/20 shadow-lg "
        >
          <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
            <HiLightBulb className="text-[#000000]" size={30} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center justify-start">
              <p className="text-sm font-semibold">01</p>
              <p className="text-[#000000] text-[1rem] md:text-lg font-bold">
                Ideation
              </p>
            </div>
            <p className="text-[0.8rem] md:text-[0.9rem]">
              Rapid prototyping, research & development, user insight & testing
            </p>
          </div>
        </motion.div>

        {/* design  */}
        <motion.div
          variants={childVariants}
          className="flex bg-transparent rounded-3xl p-8 flex-col items-start w-72 md:gap-7 gap-6 shadow-black/20 shadow-lg "
        >
          <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
            <HiLightBulb className="text-[#000000]" size={30} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center justify-start">
              <p className="text-sm font-semibold">02</p>
              <p className="text-[#000000] text-[1rem] md:text-lg font-bold">
                Design
              </p>
            </div>
            <p className="text-[0.8rem] md:text-[0.9rem]">
              Product design, UI/UX design, design system development
            </p>
          </div>
        </motion.div>

        {/* Development  */}
        <motion.div
          variants={childVariants}
          className="flex bg-transparent rounded-3xl p-8 flex-col items-start w-72 md:gap-7 gap-6 shadow-black/20 shadow-lg"
        >
          <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
            <HiLightBulb className="text-[#000000]" size={30} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center justify-start">
              <p className="text-sm font-semibold">03</p>
              <p className="text-[#000000] text-[1rem] md:text-lg font-bold">
                Development
              </p>
            </div>
            <p className="text-[0.8rem] md:text-[0.9rem]">
              Web development,Mobile development, AI & GenAI, MVPs, Cloud
            </p>
          </div>
        </motion.div>

        {/* Maintenance  */}
        <motion.div
          variants={childVariants}
          className="flex bg-transparent rounded-3xl p-8 flex-col items-start w-72 md:gap-7 gap-6 shadow-black/20 shadow-lg "
        >
          <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
            <HiLightBulb className="text-[#000000]" size={30} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center justify-start">
              <p className="text-sm font-semibold">04</p>
              <p className="text-[#000000] text-[1rem] md:text-lg font-bold">
                Maintenance
              </p>
            </div>
            <p className="text-[0.8rem] md:text-[0.9rem]">
              Quality assurance, product management, end to end software
              management
            </p>
          </div>
        </motion.div>

        {/* Scaling  */}
        <motion.div
          variants={childVariants}
          className="flex bg-transparent rounded-3xl p-8 flex-col items-start w-72 md:gap-7 gap-6 shadow-black/20 shadow-lg col-start-2 col-span-2 mx-auto"
        >
          <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
            <HiLightBulb className="text-[#000000]" size={30} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center justify-start">
              <p className="text-sm font-semibold">05</p>
              <p className="text-[#000000] text-[1rem] md:text-lg font-bold">
                Scaling
              </p>
            </div>
            <p className="text-[0.8rem] md:text-[0.9rem]">
              Product Strategy & expansion, continuous discovery, automation &
              optimization
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeverageAnimate;
