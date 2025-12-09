"use client";

import { Card, Image } from "@heroui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const WhyBuildIt = () => {
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
    <div className="bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px]">
      <div className=" flex flex-col items-center px-2 py-10 md:px-5 gap-5 bg-linear-to-br from-indigo-100 via-white to-purple-100">
        <h1 className="text-[#021645] text-[1rem] md:text-2xl font-semibold">
          Why BuilditLab?
        </h1>
        <div className="flex md:flex-row flex-col gap-10">
          <Card className="flex flex-col md:border-none border-l-2 border-[#021645] items-start gap-5 p-5 hover:scale-105 transition-all duration-500 ease-in-out">
            <h1 className="font-bold text-[#000000] text-[0.9rem] md:text-[1rem]">
              A Team That Thinks Beyond Code
            </h1>
            <p className="text-[0.8rem] text-[#000000] md:text-[0.9rem] font-medium md:leading-7 leading-6 text-start">
              We combine engineering, design, and strategy to build products
              that solve problems, not just look good.
            </p>
          </Card>

          <Card className="flex flex-col md:border-none border-l-2 border-[#021645] items-start gap-5 p-5 hover:scale-105 transition-all duration-500 ease-in-out">
            <h1 className="font-bold text-[#000000] text-[0.9rem] md:text-[1rem]">
              Designed for Startups and Businesses
            </h1>
            <p className="text-[0.8rem] text-[#000000] md:text-[0.9rem] font-medium md:leading-7 leading-6 text-start">
              Whether you’re testing a new idea or expanding an existing
              platform, we create solutions tailored to your stage of growth.
            </p>
          </Card>

          <Card className="flex flex-col md:border-none border-l-2 border-[#021645] items-start gap-5 p-5 hover:scale-105 transition-all duration-500 ease-in-out">
            <h1 className="font-bold text-[#000000] text-[0.9rem] md:text-[1rem]">
              Built for Startups and Businesses
            </h1>
            <p className="text-[0.8rem] text-[#000000] md:text-[0.9rem] font-medium md:leading-7 leading-6 text-start">
              Whether you’re validating an idea or scaling an existing platform,
              we tailor solutions for your stage.
            </p>
          </Card>
        </div>
      </div>

      <motion.div
        variants={parentVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="w-full flex md:flex-row flex-col gap-5 justify-start items-start p-2 md:p-5 mt-5"
      >
        <motion.div
          variants={childVariants}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="group relative md:w-1/2 overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <p className="text-white text-lg font-medium w-[80%] text-center">
                We’re a dedicated team of developers
              </p>
            </div>
            <Image
              src={"/tech.jpg"}
              alt="WhyUs"
              width={"100%"}
              className="w-full object-cover z-0 md:w-full mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </motion.div>
        <motion.div variants={childVariants} className="w-full">
          <p className="text-[0.8rem] md:w-2/3 md:leading-7 leading-6 md:text-[0.9rem] font-medium">
            We’re a dedicated team of developers, designers, and creatives
            focused on building products that truly make a difference. Driven by
            passion and guided by expertise, we work together to create
            solutions that solve real problems and deliver real value. Our
            mission is to build digital products that are thoughtful, impactful,
            and built to last. Innovation, collaboration, and quality are at the
            heart of everything we do.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyBuildIt;
