import NavBar from "@/layouts/NavBar";
import SideBar from "@/layouts/SideBar";
import { TLayout } from "@/types/types";
import { FC } from "react";

const HomeLayout: FC<TLayout> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      {/* <main>{children}</main> */}
      <SideBar />
    </div>
  );
};

export default HomeLayout;
