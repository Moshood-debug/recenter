import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const yaro = localFont({
  src: [
    {
      path: "../public/fonts/yaro/vladb-yarorg-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/yaro/vladb-yarorg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/yaro/vladb-yarorg-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/yaro/vladb-yarorg-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yaro",
});

export const metadata = {
  title: "Recenter",
  description:
    "Recenter provides non-medical, professionally governed in-home support after hospital discharge, designed around recovery and structured assistance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${yaro.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Navbar />
        <main className="grow mt-10 md:mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
