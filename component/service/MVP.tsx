"use client";

import { Card, Image } from "@heroui/react";
import { Variants } from "framer-motion";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";

const MVP = () => {
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
          3. MVP Development for Startups
        </h1>
        <p className="text-[#000000] text-[0.8rem] font-medium md:text-[0.9rem] md:text-center w-full md:w-2/3 text-start">
          Perfect for founders who need to validate ideas quickly, secure
          funding, or launch fast. We help you transform your concept into a
          functional Minimum Viable Product in weeks, not months.
        </p>
      </div>
      <div className="w-full bg-transparent flex md:mt-0 my-5 overflow-x-auto">
        <div className="flex flex-row md:gap-16 gap-3 md:w-2/3 md:justify-center mx-auto w-auto">
          <Card className="bg-[#F2F5F7]/70 md:w-full w-72 h-max relative p-5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)]" />
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
                How We Help Startups:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Rapid prototyping
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Lean technical architecture
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Core feature development
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Market-friendly UI/UX
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Launch strategy & iteration planning
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#F2F5F7]/70 md:w-full md:h-72 h-84 md:mt-0 mt-14 w-72 relative p-5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)]" />
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
                Outcome:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem] w-full md:w-full md:leading-8">
                  A fully functional and user-ready version of your product,
                  built to demonstrate real value from day one. It allows teams,
                  customers, and stakeholders to test core features in a
                  real-world environment. The prototype provides enough
                  functionality for meaningful feedback and early validation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default MVP;
