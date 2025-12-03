"use client";

const WhyChooseUs = () => {
  return (
    <div
      className="w-full md:px-5 px-2 pt-10 pb-5 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/blue-bg.jpg')",
      }}
    >
      <div className="mt-5 flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col md:items-center items-start gap-10">
          <h1 className="text-[#FFFFFF] font-semibold text-2xl">
            Why Choose Us?
          </h1>
          <p className="text-[#FFFFFF] md:text-center text-start text-[0.8rem]">
            Were a product team built for startups, fast-moving, collaborative,
            and obsessed with results. From idea to launch, we bring the
            strategy, design, and engineering expertise you need to build
            products users love and businesses grow with.
          </p>
        </div>
        <div className="w-full flex overflow-x-auto">
          <div className="flex flex-row gap-5">
            <div className="bg-[#F2F5F7] rounded-md md:p-7 p-5 flex flex-col gap-7 md:w-72 w-60 h-32">
              <h1 className="font-bold text-xl">2+</h1>
              <p className="text-sm font-semibold">Years in themarket</p>
            </div>

            <div className="bg-[#F2F5F7] rounded-md md:p-7 p-5 flex flex-col gap-7 md:w-72 w-60 h-32">
              <h1 className="font-bold text-xl">10+</h1>
              <p className="text-sm font-semibold">People on board </p>
            </div>

            <div className="bg-[#F2F5F7] rounded-md md:p-7 p-5 flex flex-col gap-7 md:w-72 w-60 h-32">
              <h1 className="font-bold text-xl">20+</h1>
              <p className="text-sm font-semibold">Project delivered</p>
            </div>

            <div className="bg-[#F2F5F7] rounded-md md:p-7 p-5 flex flex-col gap-7 md:w-72 w-60 h-32">
              <h1 className="font-bold text-xl">73</h1>
              <p className="text-sm font-semibold">Our current NPS score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
