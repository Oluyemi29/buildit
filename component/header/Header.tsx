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

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem isActive={pathName === "/services"}>
            <Link className="text-[#000000]" href="/service">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/industries"}>
            <Link className="text-[#000000]" href="/industries">
              Industries
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/case-studies"}>
            <Link className="text-[#000000]" href="#">
              Case Studies
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/insights"}>
            <Link className="text-[#000000]" href="#">
              Insights
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === "/about"}>
            <Link className="text-[#000000]" color="foreground" href="/about">
              About Us
            </Link>
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

        <NavbarMenu className="bg-white">
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
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
