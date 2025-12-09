"use client";
import { HiLightBulb } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card } from "@heroui/react";

const Expertise = () => {
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
    <div className="w-full bg-linear-to-br from-indigo-100 via-white to-purple-100">
      <div className="w-full bg-transparent overflow-x-hidden px-2 md:px-5  flex flex-col justify-center items-start md:items-center gap-7 py-16">
        <h1 className="text-[1.1rem] md:text-2xl font-semibold text-[#000000]">
          Leverage End-to-End Product Expertise
        </h1>
        <p className="text-[0.8rem] md:text-[0.9rem] text-[#000000] w-full md:w-2/3 md:text-center">
          From validating your idea to scaling a live product, we help startups
          move faster. Whether you need expert consultation, extra hands on your
          team, or a full product build, we’re your partner from concept to
          launch.
        </p>
        <div className="w-full flex overflow-x-scroll no-scrollbar py-5">
          <div className="flex flex-row gap-5 px-3 py-1">
            {/* ideation  */}
            <Card className="flex bg-transparent p-5 flex-row items-center md:w-96 w-80 md:gap-7 gap-6">
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
                  Rapid prototyping, research & development, user insight &
                  testing
                </p>
              </div>
            </Card>

            {/* design  */}
            <Card className="flex bg-transparent p-5 flex-row items-center md:w-96 w-80 md:gap-7 gap-6">
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
            </Card>

            {/* Development  */}
            <Card className="flex bg-transparent p-5 flex-row items-center md:w-96 w-80 md:gap-7 gap-6">
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
            </Card>

            {/* Maintenance  */}
            <Card className="flex bg-transparent p-5 flex-row items-center md:w-96 w-80 md:gap-7 gap-6">
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
            </Card>

            {/* Scaling  */}
            <Card className="flex bg-transparent p-5 flex-row items-center md:w-96 w-80 md:gap-7 gap-6">
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
                  Product Strategy & expansion, continuous discovery, automation
                  & optimization
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="p-2 md:p-5 mt-6 w-full flex flex-col gap-10 md:gap-6 md:items-center items-start">
        <h1 className="text-[1.1rem] md:text-2xl  font-semibold text-[#000000]">
          See real impact, not just progress
        </h1>
        <p className="text-sm md:text-[1rem] text-[#000000] w-full md:w-2/3 md:text-center">
          Our process is built for speed, clarity, and measurable outcomes. We
          help startups move from concept to launch fast without cutting corners
          on quality or creativity.
        </p>
      </div>
      <div className="w-full mt-5 overflow-x-auto overflow-y-hidden no-scrollbar flex">
        <motion.div
          variants={parentVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="flex flex-row gap-5 md:p-5 p-2 space-y-4 mx-auto"
        >
          <motion.div
            variants={childVariants}
            className="bg-transparent rounded-3xl md:p-8 p-5 flex flex-col gap-8 md:w-72 md:h-48 h-44 w-60 shadow-black/20 shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
          >
            {/* 40 %  */}
            <p className="text-4xl text-[#000000] font-semibold">40%</p>
            <p className="text-sm md:text-[0.9rem] xl:text-[1rem] md:font-medium font-semibold">
              growth in international & GCC orders for a global retailer
            </p>
          </motion.div>

          {/* 50 %  */}
          <motion.div
            variants={childVariants}
            className="bg-transparent rounded-3xl md:p-8 p-5 flex flex-col gap-8 md:w-72 md:h-48 h-44 w-60 shadow-black/20 shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <p className="text-4xl text-[#000000] font-semibold">5.0</p>
            <p className="text-sm md:text-[0.9rem] xl:text-[1rem] md:font-medium font-semibold">
              app rating on App Store for a major sports ecommerce platform
            </p>
          </motion.div>

          {/* 60 %  */}
          <motion.div
            variants={childVariants}
            className="bg-transparent rounded-3xl md:p-8 p-5 flex flex-col gap-8 md:w-72 md:h-48 h-44 w-60 shadow-black/20 shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <p className="text-4xl text-[#000000] font-semibold">60%</p>
            <p className="text-sm md:text-[0.9rem] xl:text-[1rem] md:font-medium font-semibold">
              more user engagement with hyper personalization for a US proptech
            </p>
          </motion.div>

          {/* 21 %  */}
          <motion.div
            variants={childVariants}
            className="bg-transparent rounded-3xl md:p-8 p-5 flex flex-col gap-8 md:w-72 md:h-48 h-44 w-60 shadow-black/20 shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <p className="text-4xl text-[#000000] font-semibold">21%</p>
            <p className="text-sm md:text-[0.9rem] xl:text-[1rem] md:font-medium font-semibold">
              higher conversation for a top global marketplace
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;
