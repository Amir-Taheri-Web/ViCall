import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TLayout } from "@/types/types";
import "./globals.css";
import { FC } from "react";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "@/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViCall",
  description: "Video and audio call and meetings",
};

const RootLayout: FC<TLayout> = ({ children }) => {
  return (
    <html lang="en" className="bg-dark-1">
      <body className={`${inter.className} min-h-fit`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
