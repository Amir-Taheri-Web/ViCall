"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/logo.png";
import hamIcon from "@/public/icons/hamburger.svg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui/sheet";
import { SIDEBAR_LINKS } from "../constants/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <header className="bg-dark-2 py-2 px-10 fixed top-0 left-0 z-50 w-full h-[72px] flex items-center">
      <nav className="flex items-center w-full">
        <h1 className="flex-1">
          <Link href="/" className="flex flex-1 items-center gap-2">
            <Image src={logo} alt="Header logo" width={30} height={30} />
            <span className="text-2xl font-extrabold text-text-1">ViCall</span>
          </Link>
        </h1>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <div className="sm:hidden ml-4">
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src={hamIcon}
                alt="Hamburger icon"
                width={40}
                height={40}
              />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-dark-2 border-none outline-none ring-0 flex flex-col gap-16"
            >
              <h1>
                <Link href="/" className="flex flex-1 items-center gap-2">
                  <Image src={logo} alt="Header logo" width={30} height={30} />
                  <span className="text-2xl font-extrabold text-text-1">
                    ViCall
                  </span>
                </Link>
              </h1>

              <ul className="flex flex-col gap-6">
                {SIDEBAR_LINKS.map((item) => (
                  <li key={item.label}>
                    <SheetClose asChild>
                      <Link
                        href={item.link}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg max-w-[250px]",
                          {
                            "bg-blue-1": pathName.includes(item.link),
                          }
                        )}
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="h-auto"
                        />

                        <span className="text-text-1 font-semibold text-[1rem]">
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
