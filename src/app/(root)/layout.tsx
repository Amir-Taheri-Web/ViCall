import StreamProvider from "@/providers/StreamProvider";
import { TLayout } from "@/types/types";
import { FC } from "react";

const MainLayout: FC<TLayout> = ({ children }) => {
  return <StreamProvider>{children}</StreamProvider>;
};

export default MainLayout;
