import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./../public/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../public/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../public/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../public/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    // italics (if included in the download)
    {
      path: "./../public/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      //   path: "./public/fonts/satoshi/Satoshi-Italic.otf",
      path: "./../public/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../public/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./../public/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./../public/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});
