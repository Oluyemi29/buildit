import ContactForm from "@/component/contact/ContactForm";
import HeroSession from "@/component/contact/HeroSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};
const page = () => {
  return (
    <div>
      <HeroSession />
      <ContactForm />
    </div>
  );
};

export default page;
