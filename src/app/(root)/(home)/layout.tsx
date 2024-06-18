import NavBar from "@/layouts/NavBar";
import SideBar from "@/layouts/SideBar";
import { TLayout } from "@/types/types";
import { FC } from "react";

const HomeLayout: FC<TLayout> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <div className="flex h-full">
        <SideBar />
        <main className="mt-[72px] w-full px-10 py-10">{children}</main>
      </div>
    </div>
  );
};

export default HomeLayout;
