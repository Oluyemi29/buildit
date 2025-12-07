"use client";

import {
  animate,
  AnimationPlaybackControlsWithThen,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function CountItem(target: number, inView: boolean) {
  const [number, setNumber] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2 });

  // Animate number when in view
  useEffect(() => {
    let controls: AnimationPlaybackControlsWithThen;
    if (inView) {
      controls = animate(motionValue, target, { duration: 2 });
    } else {
      motionValue.set(0);
    }
    return () => controls?.stop(); // cleanup
  }, [inView, target, motionValue]);

  // Update React state every frame
  useEffect(() => {
    springValue.on("change", (latest) => {
      setNumber(Math.round(latest));
    });
  }, [springValue]);

  return number;
}

const WhyChooseUs = () => {
  const detail = [
    {
      number: 2,
      text: "Years in the market",
    },
    {
      number: 10,
      text: "People on board",
    },
    {
      number: 20,
      text: "Project delivered",
    },
    {
      number: 73,
      text: "Our current NPS score",
    },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" }); // optional margin
  const controls = useAnimation();

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
    <div
      className="w-full md:px-5 px-2 pt-10 pb-10 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/blue-bg.jpg')",
      }}
    >
      <div className="mt-3 flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col md:items-center items-start gap-10">
          <h1 className="text-[#FFFFFF] font-semibold text-2xl">
            Why Choose Us?
          </h1>
          <p className="text-[#FFFFFF] md:text-center text-start text-[0.8rem] md:text-[1rem] w-full md:w-2/3">
            Were a product team built for startups, fast-moving, collaborative,
            and obsessed with results. From idea to launch, we bring the
            strategy, design, and engineering expertise you need to build
            products users love and businesses grow with.
          </p>
        </div>
        <div className="w-full flex overflow-x-auto no-scrollbar">
          <motion.div
            variants={parentVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
            className="flex flex-row gap-5"
          >
            {detail.map((eachDetail, index) => {
              return (
                <motion.div
                  variants={childVariants}
                  key={index}
                  className="bg-[#F2F5F7] rounded-md md:p-7 p-5 flex flex-col gap-7 md:w-72 w-60 h-32"
                >
                  <h1 className="font-bold text-xl">
                    {CountItem(eachDetail.number, inView)}+
                  </h1>
                  <p className="text-sm font-semibold">{eachDetail.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
