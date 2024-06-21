"use client";

import { TCardProps } from "@/types/types";
import { FC } from "react";
import Image from "next/image";
import upcoming from "@/public/icons/upcoming.svg";
import previous from "@/public/icons/previous.svg";
import video from "@/public/icons/Video.svg";
import copy from "@/public/icons/copy.svg";
import play from "@/public/icons/play.svg";
import share from "@/public/icons/share.svg";
import { useRouter } from "next/navigation";
import { useToast } from "@/ui/use-toast";

const Card: FC<TCardProps> = ({ type, title, date, meetingLink }) => {
  const router = useRouter();

  const { toast } = useToast();

  const startHandler = () => {
    router.push(meetingLink);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(meetingLink);
    toast({ title: "Link copied" });
  };

  return (
    <li className="bg-dark-2 py-8 px-8 rounded-xl flex flex-col justify-between gap-8 max-xl:w-full xl:max-w-[600px]">
      <Image
        src={
          type === "upcoming"
            ? upcoming
            : type === "previous"
            ? previous
            : video
        }
        alt="icon"
        width={25}
        height={25}
        className="h-auto"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-text-1 font-bold">{title}</h3>
        <span className="text-text-1 font-semibold">{date}</span>
      </div>

      <div className="flex justify-between flex-wrap gap-2">
        {(type === "upcoming" || type === "previous") && (
          <>
            <div className="flex relative max-sm:hidden">
              <Image
                src={"/images/avatar-1.jpeg"}
                alt="participant image"
                width={45}
                height={45}
                className="rounded-full relative -left-0 border-dark-3 border-[3px]"
              />
              <Image
                src={"/images/avatar-2.jpeg"}
                alt="participant image"
                width={45}
                height={45}
                className="rounded-full relative -left-3 border-dark-3 border-[3px]"
              />
              <Image
                src={"/images/avatar-3.png"}
                alt="participant image"
                width={45}
                height={45}
                className="rounded-full relative -left-6 border-dark-3 border-[3px]"
              />
              <Image
                src={"/images/avatar-4.png"}
                alt="participant image"
                width={45}
                height={45}
                className="rounded-full relative -left-9 border-dark-3 border-[3px]"
              />
              <span className="w-[45px] h-[45px] rounded-full flex-center text-text-1 font-semibold absolute right-1 border-dark-3 border-[3px] bg-dark-1">
                +9
              </span>
            </div>
            {type === "upcoming" && (
              <div className="flex-1 flex justify-end max-sm:justify-start gap-2">
                <button
                  type="button"
                  onClick={startHandler}
                  className="bg-blue-1 px-3 py-1 rounded-md text-sm text-text-1 font-semibold h-[40px] min-w-[80px]"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={copyHandler}
                  className="bg-dark-3 px-3 py-1 rounded-md flex items-center gap-2 text-sm text-text-1 font-semibold h-[40px] min-w-[80px]"
                >
                  <Image
                    src={copy}
                    alt="copy icon"
                    width={20}
                    height={20}
                    className="h-auto"
                  />
                  Copy Link
                </button>
              </div>
            )}
          </>
        )}

        {type === "recordings" && (
          <div className="flex max-sm:flex-col gap-2 max-sm:gap-4 w-full">
            <button
              type="button"
              onClick={startHandler}
              className="bg-blue-1 px-3 py-1 h-[40px] rounded-md flex items-center gap-1 w-[50%] justify-center text-text-1 font-semibold text-sm max-sm:w-full"
            >
              <Image
                src={play}
                alt="play icon"
                width={12}
                height={12}
                className="h-auto"
              />
              Play
            </button>

            <button
              type="button"
              onClick={copyHandler}
              className="bg-dark-3 px-3 py-1 h-[40px] rounded-md flex items-center gap-1 w-[50%] justify-center text-text-1 font-semibold text-sm max-sm:w-full"
            >
              <Image
                src={share}
                alt="share icon"
                width={17}
                height={17}
                className="h-auto"
              />
              Share Recording
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default Card;
