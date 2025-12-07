"use client";

const HeroSession = () => {
  return (
    <div
      className="w-full h-120 bg-center bg-no-repeat bg-cover p-2 md:p-5 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/hero-img.png')",
      }}
    >
      <div className="w-full md:w-[60%] mx-auto flex flex-col justify-between md:items-center md:gap-10 gap-14">
        <h1 className="text-[#E3D8D8] md:leading-16 leading-8 md:text-5xl text-2xl font-semibold space-y-7 md:text-center hover:scale-105 hover:opacity-70 transition-all ease-in-out duration-500">
          Building the Next Generation of Digital Startups
        </h1>
        <div className="w-full md:w-[90%] flex flex-col gap-6">
          <p className="text-[#E3D8D8] md:text-[1rem] text-[0.8rem] md:text-center">
            From web apps to AI-driven platforms, we build solutions that move
            startups forward, fast, scalable, and built to adapt to the
            ever-changing digital landscape.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-5">
          <p className="text-[#E3D8D8] underline md:text-[1rem] text-[0.7rem] text-center ">
            Trusted by:
          </p>
          {/* <Image src={"/opportuniverse.png"} alt="Opportuniverse" className="w-40 h-7" /> */}
          <p className="text-sm md:text-lg font-semibold text-[#E3D8D8]">
            Opportuniverse
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
