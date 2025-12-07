"use client";
import CalltoAction from "@/component/industries/CalltoAction";
import HeroSession from "@/component/industries/HeroSession";
import Industries from "@/component/industries/Industries";
import Testimonial from "@/component/landingpage/Testimonial";

const page = () => {
  return (
    <div>
      <HeroSession />
      <Industries />
      <Testimonial />
      <CalltoAction />
    </div>
  );
};

export default page;
