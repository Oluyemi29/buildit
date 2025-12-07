"use client";
import React from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastProvider placement="bottom-right" />
      {children}
    </HeroUIProvider>
  );
};

export default Provider;
