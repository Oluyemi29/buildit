"use client";

import { BsBank } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import SolutionModal from "./SolutionModal";

const Industries = () => {
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
    <div className="bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px] py-12 px-2 md:px-5">
      <div className="w-full md:w-2/3 md:mx-auto flex flex-col  md:gap-7 gap-12 md:items-center items-start">
        <h1 className="text-[#000000] text-[1rem] md:text-2xl font-bold">
          Integrated design-to-delivery product development
        </h1>
        <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-[#000000] md:leading-7 leading-6 md:text-center bg-">
          At BuilditLab, we understand that every industry operates differently.
          That’s why we combine deep technical expertise with domain
          understanding to build solutions that fit your business perfectly,
          whether you’re in fintech, e-commerce, healthcare, education, or
          beyond.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:p-5 my-14 md:grid-cols-2 grid-cols-1 gap-20 justify-start items-start">
        {/* finance  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center "
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <BsBank className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">Fintech</p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            We build user-friendly financial applications with strong security
            standards, seamless transactions, and beautiful interfaces.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="Savings & investment apps"
            texttwo="Payment processing systems"
            textthree="Wallet & card applications"
            textfour="Lending and credit platforms"
            textfive="KYC and onboarding systems"
          />
        </motion.div>

        {/* E-Commerce & Retail  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <FaShopify className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">
            E-Commerce & Retail
          </p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center text-[#000000] md:leading-7 leading-6">
            Whether you’re building a startup marketplace or scaling an online
            store, we create smooth, conversion-driven experiences for your
            customers.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="E-commerce websites"
            texttwo="Multi-vendor marketplaces"
            textthree="Inventory management systems"
            textfour="Order & delivery systems"
            textfive="Customer loyalty platforms"
          />
        </motion.div>

        {/* EdTech (Education Technology  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <RiGraduationCapFill className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">
            EdTech (Education Technology)
          </p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            Learning experiences designed for engagement and simplicity.We
            develop modern learning platforms that enhance teaching,
            collaboration, and course delivery.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="Online learning platforms"
            texttwo="School management systems"
            textthree="Course creation tools"
            textfour="Live classroom & tutoring apps"
            textfive="Certification & assessment systems"
          />
        </motion.div>

        {/* Logistics & Transportation  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <RiMotorbikeFill className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">
            Logistics & Transportation
          </p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            Learning experiences designed for engagement and simplicity.We
            develop modern learning platforms that enhance teaching,
            collaboration, and course delivery.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="Delivery tracking systems"
            texttwo="Fleet management tools"
            textthree="Rider/driver apps"
            textfour="Route optimization software"
            textfive="Dispatch platforms"
          />
        </motion.div>

        {/* Hospitality & Travel  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <FaHotel className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">
            Hospitality & Travel
          </p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            Create delightful digital experiences for guests and travelers. We
            transform booking, management, and experience delivery for hotels,
            restaurants, and travel agencies.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="Property listing platforms"
            texttwo="Virtual tour solutions"
            textthree="Agent management dashboards"
            textfour="Tenant & rent management systems"
            // textfive="Dispatch platforms"
          />
        </motion.div>

        {/* Startups (General Emerging Markets)  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <FaBuildingCircleCheck className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">
            Startups (General Emerging Markets)
          </p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            Perfect for early-stage teams building from zero to one. We help
            startups validate ideas, build MVPs, and scale quickly without heavy
            overhead.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="MVP development"
            texttwo="Prototype & UI/UX design"
            textthree="Market-ready web/mobile apps"
            textfour="Iteration & product improvement"
            // textfive="Dispatch platforms"
          />
        </motion.div>

        {/* Health Tech  */}
        <motion.div
          variants={animateds}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-col gap-3 justify-center items-center md:col-start-2"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#000000] border-dotted flex-col justify-center items-center bg-[#C8D5DD] flex ">
            <FaNotesMedical className="text-[#000000] " />
          </div>
          <p className="text-lg font-semibold text-[#000000]">Health Tech</p>
          <p className="text-[0.8rem] font-medium md:text-[0.9rem] text-center md:leading-7 leading-6 text-[#000000]">
            Secure and reliable solutions for medical and wellness services.We
            help healthcare brands go digital with smooth, user-centric tools
            built with data privacy in mind.
          </p>
          <div className="md:flex hidden flex-row items-center gap-2 underline underline-offset-2">
            <p className="text-[#000000] text-[0.8rem] font-semibold">
              Solution we build
            </p>
            <FaArrowRightLong className="text-end text-[#000000]" />
          </div>
          <SolutionModal
            textone="Patient management systems"
            texttwo="Telemedicine apps"
            textthree="Appointment booking platforms"
            textfour="Health monitoring dashboards"
            textfive="Wellness apps"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
