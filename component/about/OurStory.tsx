"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurStorys = () => {
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
    <div className="w-full p-2 md:p-5 my-7">
      <motion.div
        variants={parentVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="md:flex hidden flex-row gap-5 justify-start items-start"
      >
        <motion.div
          variants={childVariants}
          className="w-full flex flex-col gap-7 justify-center items-center"
        >
          <p className="font-semibold text-xl md:text-2xl">Our Story</p>
          <p className="text-sm md:text-[0.9rem] md:text-start text-center w-full">
            Every great product begins with an idea, but ideas need
            execution.BuilditLab was created to bridge the gap between ambitious
            founders and reliable product development. We saw how many startups
            struggled to find a trustworthy team that could combine creativity,
            engineering, and product thinking. So we built a studio that does
            exactly that. From small MVPs to large-scale applications, we
            partner with founders and businesses to design, build, and launch
            digital products that are functional, beautiful, and ready for
            growth. Today, BuilditLab continues to empower innovators across
            different industries by delivering products that solve real
            problems.
          </p>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-full flex flex-col gap-7 justify-center items-center"
        >
          <p className="font-semibold text-xl md:text-2xl md:text-center md:self-center self-end">
            Our Mission
          </p>
          <p className="text-sm md:text-[0.9rem] font-medium text-start w-full">
            We exist to help startups and businesses bring their ideas to life
            with modern, high-quality digital solutions. Through strong software
            development, user-focused design, and strategic product planning, we
            turn concepts into powerful, usable products. Our goal is to make
            innovation simple, practical, and achievable for every brand we
            support. With a blend of creativity, technology, and clear strategy,
            we guide teams from vision to reality—smoothly and confidently.
          </p>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-full flex flex-col gap-7 justify-center items-center"
        >
          <p className="font-semibold text-xl md:text-2xl md:text-center md:self-center self-start">
            Our Vision
          </p>
          <p className="text-sm md:text-[0.9rem] font-medium text-start w-full ">
            We exist to help startups and businesses bring their ideas to life
            with modern, high-quality digital solutions. Through strong software
            development, user-focused design, and strategic product planning, we
            turn concepts into powerful, usable products. Our goal is to make
            innovation simple, practical, and achievable for every brand we
            support. With a blend of creativity, technology, and clear strategy,
            we guide teams from vision to reality—smoothly and confidently.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={animateds}
        initial="hidden"
        whileInView="visible"
        className="flex md:hidden flex-col gap-6 md:items-center items-start mx-auto w-full md:w-2/3"
      >
        <p className="font-semibold ">Our Story</p>

        <div className="">
          <p className="text-sm font-medium text-[#000000]">
            Every great product begins with an idea, but ideas need execution.
          </p>
          <p className="text-sm font-medium text-[#000000]">
            BuilditLab was created to bridge the gap between ambitious founders
            and reliable product development. We saw how many startups struggled
            to find a trustworthy team that could combine creativity,
            engineering, and product thinking.
          </p>
        </div>
        <p className="text-sm font-medium text-[#000000]">
          So we built a studio that does exactly that.
        </p>
        <p className="text-sm font-medium text-[#000000]">
          From small MVPs to large-scale applications, we partner with founders
          and businesses to design, build, and launch digital products that are
          functional, beautiful, and ready for growth.
        </p>
        <p className="text-sm font-medium text-[#000000]">
          Today, BuilditLab continues to empower innovators across different
          industries by delivering products that solve real problems.
        </p>
      </motion.div>
    </div>
  );
};

export default OurStorys;
