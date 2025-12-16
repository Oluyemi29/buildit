
import HeroSession from "@/component/about/HeroSession";
import OurJourney from "@/component/about/OurJourney";
import OurMission from "@/component/about/OurMission";
import OurStorys from "@/component/about/OurStory";
import WhyBuildIt from "@/component/about/WhyBuildIt";
import { Metadata } from "next";

export const metadata : Metadata ={
  title : "About Us"
}
const page = () => {
  return (
    <div>
      <HeroSession />
      <div className="">
        <OurStorys />
        <OurMission />
      </div>
      <WhyBuildIt />
      <OurJourney />
    </div>
  );
};

export default page;
