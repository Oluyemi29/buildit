

import CalltoAction from "@/component/industries/CalltoAction";
import Testimonial from "@/component/landingpage/Testimonial";
import Branding from "@/component/service/Branding";
import HeroSession from "@/component/service/HeroSession";
import Management from "@/component/service/Management";
import MobileApp from "@/component/service/MobileApp";
import MVP from "@/component/service/MVP";
import Product from "@/component/service/Product";
import ProductDesign from "@/component/service/ProductDesign";
import WebApp from "@/component/service/WebApp";
import YourStartup from "@/component/service/YourStartup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const page = () => {
  return (
    <div>
      <HeroSession />
      <div className="">
        <Product />
        <WebApp />
        <MobileApp />
        <MVP />
        <ProductDesign />
        <Branding />
        <Management />
      </div>
      <Testimonial />
      <YourStartup />
      <CalltoAction />
    </div>
  );
};

export default page;
