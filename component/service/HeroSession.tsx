"use client";

const HeroSession = () => {
  return (
    <div
      className="w-full md:h-120 h-100 bg-center bg-no-repeat bg-cover p-2 md:p-5 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/service-hero.jpg')",
      }}
    >
      <div className="w-[90%] md:w-[50%] flex flex-col md:items-center md:mx-auto  md:gap-14 gap-14">
        <h1 className="text-[#E3D8D8] md:text-5xl md:text-center leading-10 md:leading-16 text-3xl font-bold hover:scale-105 hover:opacity-70 transition-all ease-in-out duration-500">
          We Build Digital Products That Move Startups Forward
        </h1>
        <div className="w-[90%] md:w-[70%] flex flex-col gap-6">
          <p className="text-[#E3D8D8] md:text-xl md:text-center md:font-semibold font-medium text-[0.8rem]">
            We help build powerful digital solutions, fast, smooth, and
            strategically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
