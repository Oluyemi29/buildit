"use client";

import { Image } from "@heroui/react";
import { Variants } from "framer-motion";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";

const Branding = () => {
  const animateds: Variants = {
    hidden: {
      opacity: 0,
      y: 150,
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
    <motion.div variants={animateds} initial="hidden" whileInView="visible">
      <div className="bg-transparent w-full py-12 px-2 md:px-5 flex flex-col gap-12 md:items-center items-start">
        <h1 className="text-[#000000] text-[1rem] md:text-2xl font-bold">
          5. Branding & Digital Identity
        </h1>
        <p className="text-[#000000] text-[0.8rem] font-medium md:text-[0.9rem] md:text-center w-full text-start">
          We help early-stage tech companies create a strong digital identity
          that stands out. Your brand is more than a logo, it’s the perception,
          tone, and emotion your product conveys.
        </p>
      </div>
      <div className="w-full  bg-transparent flex md:mt-0 my-5 overflow-x-auto">
        <div className="flex flex-row gap-3 md:w-full md:justify-center mx-auto w-auto">
          <div className="bg-[#F2F5F7] md:w-full w-72 h-max rounded-lg p-5">
            <div className="bg-[#FFFFFF] w-12 h-12 rounded-full md:hidden flex flex-col justify-center items-center">
              <Image
                src={"/vector.png"}
                alt="Vector"
                width={"100%"}
                className="w-3 h-3"
              />
            </div>

            <div className="w-full mt-3 flex flex-col gap-5">
              <p className="text-[0.9rem] md:text-[1.1rem] text-[#000000] font-semibold">
                Branding Deliverables:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Logo design
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Complete visual identity system
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Color palette & typography
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Brand guidelines
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Social and digital assets
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F5F7] md:w-full md:h-72 h-84 md:mt-0 mt-14 w-72 rounded-lg p-5">
            <div className="bg-[#FFFFFF] w-12 h-12 rounded-full md:hidden flex flex-col justify-center items-center">
              <Image
                src={"/vector2.png"}
                alt="Vector"
                width={"100%"}
                className="w-3 h-3"
              />
            </div>
            <div className="w-full mt-3 flex flex-col gap-5">
              <p className="text-[0.9rem] md:text-[1.1rem] text-[#000000] font-semibold">
                What You Get:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem] w-full md:w-[85%]">
                  A cohesive and memorable brand identity that clearly
                  communicates who you are and what you stand for. Designed to
                  look modern, professional, and instantly recognizable across
                  all touchpoints. It helps your audience build confidence in
                  your product from the very first interaction. Every visual and
                  messaging element is crafted to position your startup as
                  premium and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Branding;
