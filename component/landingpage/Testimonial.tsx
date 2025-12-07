"use client";

import { Image } from "@heroui/react";

const Testimonial = () => {
  return (
    <div className="w-full bg-[#F2F5F7] py-10 mt-5 md:px-5 px-2 flex flex-col items-start md:items-center gap-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,.4),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,.4),transparent_60%)]">
      <div className="flex flex-col justify-center md:items-center gap-5">
        <h1 className="text-[#000000] font-bold text-lg md:text-2xl">
          What our client has to say
        </h1>
        <p className="text-sm md:text-[1rem] hidden md:flex">
          Our clients say it best. Read their testimonials and see why they
          trust us
        </p>
      </div>
      <div className="w-full flex no-scrollbar overflow-x-auto">
        <div className="flex flex-row gap-5">
          {/* Testimonial  */}
          <div className="flex flex-col gap-5 bg-[#FFFFFF] md:w-80 w-72 p-5 transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:translate-y-2">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={"/testy1.jpg"}
                alt="Testy"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-[0.8rem] text-[#000000] font-bold">
                  Robert Miller
                </p>
                <p className="text-[#000000] text-[0.8rem]">
                  Digital Innivation Manager
                </p>
              </div>
            </div>
            <p className="text-[#000000] text-[0.8rem] md:font-medium font-semibold">
              They transformed our idea into a fully functional product with
              impressive attention to detail
            </p>
            <div className="w-full flex flex-row justify-end">
              <Image src={"/zabka.png"} alt="Zabka" className="w-10 h-4" />
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-[#FFFFFF] md:w-80 w-72 p-5 transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:translate-y-2">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={"/testy2.jpg"}
                alt="Testy"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-[0.8rem] text-[#000000] font-bold">
                  Daniel Smith
                </p>
                <p className="text-[#000000] text-[0.8rem]">
                  Head of Digital at sportano
                </p>
              </div>
            </div>
            <p className="text-[#000000] text-[0.8rem] md:font-medium font-semibold">
              They transformed our idea into a fully functional product with
              impressive attention to detail
            </p>
            <div className="w-full flex flex-row justify-end">
              <Image
                src={"/sportano_logo.png"}
                alt="Zabka"
                className="w-20 h-4"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-[#FFFFFF] md:w-80 w-72 p-5 transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:translate-y-2">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={"/testy1.jpg"}
                alt="Testy"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-[0.8rem] text-[#000000] font-bold">
                  Robert Miller
                </p>
                <p className="text-[#000000] text-[0.8rem]">
                  Digital Innivation Manager
                </p>
              </div>
            </div>
            <p className="text-[#000000] text-[0.8rem] md:font-medium font-semibold">
              They transformed our idea into a fully functional product with
              impressive attention to detail
            </p>
            <div className="w-full flex flex-row justify-end">
              <Image src={"/zabka.png"} alt="Zabka" className="w-10 h-4" />
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-[#FFFFFF] md:w-80 w-72 p-5 transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:translate-y-2">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={"/testy2.jpg"}
                alt="Testy"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-[0.8rem] text-[#000000] font-bold">
                  Daniel Smith
                </p>
                <p className="text-[#000000] text-[0.8rem]">
                  Head of Digital at sportano
                </p>
              </div>
            </div>
            <p className="text-[#000000] text-[0.8rem] md:font-medium font-semibold">
              They transformed our idea into a fully functional product with
              impressive attention to detail
            </p>
            <div className="w-full flex flex-row justify-end">
              <Image
                src={"/sportano_logo.png"}
                alt="Zabka"
                className="w-20 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
