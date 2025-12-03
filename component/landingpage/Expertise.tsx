"use client";
import { HiLightBulb } from "react-icons/hi";

const Expertise = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#F2F5F7] overflow-x-hidden p-2 md:p-5   flex flex-col justify-center items-start gap-7 py-10">
        <h1 className="text-[1.1rem] font-semibold text-[#000000]">
          Leverage End-to-End Product Expertise
        </h1>
        <p className="text-[0.8rem] text-[#000000] font-semibold">
          From validating your idea to scaling a live product, we help startups
          move faster. Whether you need expert consultation, extra hands on your
          team, or a full product build, we’re your partner from concept to
          launch.
        </p>
        <div className="w-full flex overflow-x-auto py-5">
          <div className="flex flex-row gap-5">
            {/* ideation  */}
            <div className="flex flex-row items-center md:w-80 w-80 gap-4">
              <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
                <HiLightBulb className="text-[#000000]" size={30} />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm font-semibold">01</p>
                  <p className="text-[#000000] text-[1rem] font-bold">
                    Ideation
                  </p>
                </div>
                <p className="text-[0.8rem]">
                  Rapid prototyping, research & development, user insight &
                  testing
                </p>
              </div>
            </div>

            {/* design  */}
            <div className="flex flex-row items-center md:w-80 w-80 gap-4">
              <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
                <HiLightBulb className="text-[#000000]" size={30} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm font-semibold">02</p>
                  <p className="text-[#000000] text-[1rem] font-bold">Design</p>
                </div>
                <p className="text-[0.8rem]">
                  Product design, UI/UX design, design system development
                </p>
              </div>
            </div>

            {/* Development  */}
            <div className="flex flex-row items-center md:w-80 w-80 gap-4">
              <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
                <HiLightBulb className="text-[#000000]" size={30} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm font-semibold">03</p>
                  <p className="text-[#000000] text-[1rem] font-bold">
                    Development
                  </p>
                </div>
                <p className="text-[0.8rem]">
                  Web development,Mobile development, AI & GenAI, MVPs, Cloud
                </p>
              </div>
            </div>

            {/* Maintenance  */}
            <div className="flex flex-row items-center md:w-80 w-80 gap-4">
              <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
                <HiLightBulb className="text-[#000000]" size={30} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm font-semibold">04</p>
                  <p className="text-[#000000] text-[1rem] font-bold">
                    Maintenance
                  </p>
                </div>
                <p className="text-[0.8rem]">
                  Quality assurance, product management, end to end software
                  management
                </p>
              </div>
            </div>

            {/* Scaling  */}
            <div className="flex flex-row items-center md:w-80 w-80 gap-4">
              <div className="bg-[#F0D9D9] rounded-md p-2 flex flex-col justify-center items-center w-max h-max">
                <HiLightBulb className="text-[#000000]" size={30} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <p className="text-sm font-semibold">05</p>
                  <p className="text-[#000000] text-[1rem] font-bold">
                    Scaling
                  </p>
                </div>
                <p className="text-[0.8rem]">
                  Product Strategy & expansion, continuous discovery, automation
                  & optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-5 mt-5 w-full flex flex-col md:items-center items-start">
        <h1 className="text-[1.1rem]  font-semibold text-[#000000]">
          See real impact, not just progress
        </h1>
        <p className="text-sm text-[#000000]">
          Our process is built for speed, clarity, and measurable outcomes. We
          help startups move from concept to launch fast without cutting corners
          on quality or creativity.
        </p>
      </div>
      <div className="w-full overflow-x-auto flex">
        <div className="flex flex-row gap-5 md:p-5 p-2">
          <div className="bg-[#F2F5F7] rounded-md md:p-10 p-5 flex flex-col gap-10 md:w-72 md:h-48 h-44 w-60">
            {/* 40 %  */}
            <p className="text-4xl text-[#000000] font-semibold">40%</p>
            <p className="text-sm font-semibold">
              growth in international & GCC orders for a global retailer
            </p>
          </div>

          {/* 50 %  */}
          <div className="bg-[#F2F5F7] rounded-md md:p-10 p-5 flex flex-col gap-10 md:w-72 md:h-48 h-44 w-60">
            <p className="text-4xl text-[#000000] font-semibold">5.0</p>
            <p className="text-sm font-semibold">
              app rating on App Store for a major sports ecommerce platform
            </p>
          </div>

          {/* 60 %  */}
          <div className="bg-[#F2F5F7] rounded-md md:p-10 p-5 flex flex-col gap-10 md:w-72 md:h-48 h-44 w-60">
            <p className="text-4xl text-[#000000] font-semibold">60%</p>
            <p className="text-sm font-semibold">
              more user engagement with hyper personalization for a US proptech
            </p>
          </div>

          {/* 21 %  */}
          <div className="bg-[#F2F5F7] rounded-md md:p-10 p-5 flex flex-col gap-10 md:w-72 md:h-48 h-44 w-60">
            <p className="text-4xl text-[#000000] font-semibold">21%</p>
            <p className="text-sm font-semibold">
              higher conversation for a top global marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
