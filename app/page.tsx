"use client";
import CaseStudies from "@/component/landingpage/CaseStudies";
import Expertise from "@/component/landingpage/Expertise";
import HeroSession from "@/component/landingpage/HeroSession";
import Insight from "@/component/landingpage/Insight";
import Project from "@/component/landingpage/Project";
import Testimonial from "@/component/landingpage/Testimonial";
import WhyChooseUs from "@/component/landingpage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSession />
      <CaseStudies />
      <Expertise />
      <WhyChooseUs />
      <Insight />
      <Project />
      <Testimonial />
    </div>
  );
}
