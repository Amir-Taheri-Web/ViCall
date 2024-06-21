import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TLayout } from "@/types/types";
import { FC } from "react";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "@/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViCall",
  description: "Video and audio call and meetings",
  icons: { icon: "./favicon.ico" },
  authors: [{ name: "Amir Taheri", url: "https://github.com/Amir-Taheri-Web" }],
  keywords: [
    "video",
    "video calling",
    "audio",
    "audio calling",
    "meeting",
    "video meeting",
    "team meeting",
    "zoom",
    "meet",
    "nextjs",
    "next.js",
    "nextjs 14",
    "schedule",
    "scheduling meeting",
    "scheduling",
    "schedule meeting",
  ],
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
