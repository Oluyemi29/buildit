
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
      <div className="bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px]">
        <OurStorys />
        <OurMission />
      </div>
      <WhyBuildIt />
      <OurJourney />
    </div>
  );
};

export default page;
