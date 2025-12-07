"use client";

import { Image } from "@heroui/react";
import { Variants } from "framer-motion";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";

const MobileApp = () => {
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
          2. Mobile Application Development
        </h1>
        <p className="text-[#000000] text-[0.8rem] md:text-[0.9rem] md:text-center md:w-2/3 w-full text-start">
          We design and develop mobile apps that deliver seamless user
          experiences across iOS and Android. Whether you’re building for a
          global audience or an internal team, our mobile solutions are
          optimized for performance, consistency, and user engagement.
        </p>
      </div>
      <div className="w-full bg-transparent flex md:mt-0 my-5 overflow-x-auto">
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
                Capabilities:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  iOS & Android native apps
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Cross-platform apps (Flutter, React Native)
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  API development & integrations
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Push notifications, authentication, in-app payments
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  App Store & Play Store deployment
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F5F7] md:w-full md:mt-0 mt-14 w-72 rounded-lg p-5">
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
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Smooth, responsive user experience
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Scalable backend infrastructure
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Beautiful UI with consistent brand identity
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  End-to-end testing and optimization
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  Post-launch maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileApp;
