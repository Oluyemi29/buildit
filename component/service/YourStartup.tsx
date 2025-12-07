"use client";

const YourStartup = () => {
  return (
    <div
      className="w-full py-20 bg-cover bg-no-repeat bg-center flex flex-col gap-14 justify-center items-center"
      style={{
        backgroundImage: "url('/blue-wave.jpg')",
      }}
    >
      <h1 className="text-[#F2F5F7] text-[1rem] md:text-2xl font-bold ">
        Take your startup from idea to launch
      </h1>
      <p className="text-[1rem] md:text-lg font-medium text-[#F2F5F7] w-full md:w-[70%] md:text-center">
        Move fast with AI-assisted development, quick prototyping, low-code
        solutions, and sleek, modern product design.
      </p>
    </div>
  );
};

export default YourStartup;
