import NavBar from "@/layouts/NavBar";
import SideBar from "@/layouts/SideBar";
import StreamProvider from "@/providers/StreamProvider";
import { TLayout } from "@/types/types";
import { FC } from "react";

const HomeLayout: FC<TLayout> = ({ children }) => {
  return (
    <StreamProvider>
      <div className="min-h-screen">
        <NavBar />
        <div className="flex h-full">
          <SideBar />
          <main className="mt-[72px] w-full px-10 py-10 max-sm:px-5">
            {children}
          </main>
        </div>
      </div>
    </StreamProvider>
  );
};

export default HomeLayout;
