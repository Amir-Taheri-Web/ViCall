import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRootLayout } from "@/types/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViCall",
  description: "Video and audio call and meetings",
};

const RootLayout = ({ children }: TRootLayout) => {
  return (
    <html lang="en" className="bg-dark-1">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
