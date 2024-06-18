"use client";

import Link from "next/link";
import { SIDEBAR_LINKS } from "../constants/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <aside className="bg-dark-2 h-full w-full lg:max-w-[264px] max-lg:w-fit p-6 pt-10 max-sm:hidden sticky overflow-hidden mt-[72px]">
      <nav>
        <ul className="flex flex-col gap-6">
          {SIDEBAR_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={cn("flex items-center gap-4 p-4 rounded-lg", {
                  "bg-blue-1": pathName.includes(item.link),
                })}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={25}
                  height={25}
                  className="h-auto max-lg:w-[33px]"
                />

                <span className="text-text-1 font-semibold text-lg max-lg:hidden">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
