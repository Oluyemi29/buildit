"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

type SolutionTextProps = {
  textone: string;
  texttwo: string;
  textthree: string;
  textfour: string;
  textfive?: string;
};

export default function SolutionModal({
  textfour,
  textone,
  textthree,
  texttwo,
  textfive,
}: SolutionTextProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <div className="md:hidden flex">
      <div
        onClick={onOpen}
        className="flex flex-row items-center gap-2 underline underline-offset-2 cursor-pointer"
      >
        <p className="text-[#000000] text-[0.8rem] font-semibold">
          Solution we build
        </p>
        <FaArrowRightLong className="text-end text-[#000000]" />
      </div>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent className="bg-[#F2F5F7] md:mt-0 mt-14 w-full relative p-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)]" />
          <ModalBody>
            <div className="bg-[#FFFFFF] w-12 h-12 rounded-full md:hidden flex flex-col justify-center items-center">
              <Image
                src={"/vector2.png"}
                alt="Vector"
                width={"100%"}
                className="w-3 h-3"
              />
            </div>
            <div className="w-full mt-3 flex flex-col gap-5">
              <p className="text-[0.9rem] md:text-[1.1rem] text-[#000000] font-semibold">
                Solution we build:
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  {textone}
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  {texttwo}
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  {textthree}
                </p>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <LuDot className="text-[#000000]" />
                <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                  {textfour}
                </p>
              </div>
              {textfive && (
                <div className="flex flex-row gap-2 justify-start items-center">
                  <LuDot className="text-[#000000]" />
                  <p className="text-[#000000] text-[0.7rem] font-medium md:text-[0.9rem]">
                    {textfive}
                  </p>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
