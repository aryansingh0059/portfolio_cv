import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

// Dynamically import Preloader with no SSR to avoid hydration issues
const Preloader = dynamic(
  () => import("@/components/preloader"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <Preloader>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </Preloader>
      </body>
    </html>
  );
}
