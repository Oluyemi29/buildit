"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const menuItems = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Industries",
    link: "/industries",
  },
  {
    name: "Case Studies",
    link: "/",
  },
  {
    name: "Insights",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();
  return (
    <div className="w-full">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className="fixed top-0 left-0 w-full z-50 bg-white"
        shouldHideOnScroll={false}
      >
        <NavbarContent className="md:hidden w-max" justify="start">
          <NavbarBrand className="">
            <Link className="w-max h-max" href="/">
              <Image
                src={"/builditlab-lg.png"}
                alt="BuildItLab Logo"
                className="w-24"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="start">
          <NavbarBrand className="">
            <Link className="w-max h-max" href="/">
              <Image
                src={"/builditlab-lg.png"}
                alt="BuildItLab Logo"
                className="w-48"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex flex-row gap-10">
          <NavbarItem isActive={pathName === "/services"}>
            <Link
              className={`${
                pathName === "/services"
                  ? "font-bold text-[#021645]"
                  : "font-medium text-[#000000]"
              } font-inter text-[0.85rem] hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold hover:text-[#021645]"
              `}
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/industries"}>
            <Link
              className={`${
                pathName === "/industries"
                  ? "font-bold text-[#021645]"
                  : "font-medium text-[#000000]"
              } font-inter text-[0.85rem] hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold hover:text-[#021645]"
              `}
              href="/industries"
            >
              Industries
            </Link>
          </NavbarItem>
          <NavbarItem isActive={true}>
            <Link
              className="text-[#000000] font-inter font-medium text-[0.85rem] hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold hover:text-[#021645]"
              href="#"
            >
              Case Studies
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === ""}>
            <Link
              className="text-[#000000] font-inter font-medium text-[0.85rem] hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold hover:text-[#021645]"
              href="#"
            >
              Insights
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/about"}>
            <Link
              className={`${
                pathName === "/about"
                  ? "font-bold text-[#021645]"
                  : "font-medium text-[#000000]"
              } font-inter text-[0.85rem] hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold hover:text-[#021645]"
              `}
              color="foreground"
              href="/about"
            >
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="md:flex hidden">
          <NavbarItem>
            <Button as={Link} href="/contact" className="text-[#CCCCCC] bg-[#021645] border-1 border-[#CCCCCC] hover:scale-105 transition-all duration-500 ease-in-out">
              Start a project
              <FaArrowRightLong className="text-end text-white" />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex sm:hidden gap-4" justify="end">
          <NavbarItem className="md:hidden flex">
            {isMenuOpen ? (
              <HiMiniXMark
                className="cursor-pointer text-blue-900"
                onClick={() => setIsMenuOpen(false)}
                size={24}
              />
            ) : (
              <IoMenuSharp
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
                size={24}
              />
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white flex flex-col pb-30">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="text-[#000000] border-b-1 border-[#AEAEB2]"
            >
              <div className="flex flex-row justify-between py-3 items-center">
                <Link
                  className="w-full font-semibold text-black"
                  href={item.link}
                  size="md"
                >
                  {item.name}
                  {["Insights", "Case Studies"].includes(item.name) && (
                    <>
                      <span className="text-red-600 text-[0.6rem] pl-1">
                        (coming soon)
                      </span>
                    </>
                  )}
                </Link>
                <FaArrowRightLong className="text-[#AEAEB2]" />
              </div>
            </NavbarMenuItem>
          ))}
          <div className="w-full mt-auto flex flex-row justify-center items-center">
            <Button as={Link} href="/contact" className=" text-[#CCCCCC] bg-[#021645] border-1 border-[#CCCCCC] w-4/6">
              Start a project
              <FaArrowRightLong className="text-end text-white" />
            </Button>
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
