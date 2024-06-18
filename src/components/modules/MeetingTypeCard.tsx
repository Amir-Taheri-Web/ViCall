"use client";

import Image from "next/image";
import { FC } from "react";
import { TMeetingCard } from "@/types/types";

const MeetingTypeCard: FC<TMeetingCard> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col cursor-pointer justify-self-center w-full gap-4 min-h-[300px] max-w-[300px] max-2xl:max-w-full rounded-2xl px-4 py-6 justify-between ${bgColor}`}
    >
      <div className="bg-[#ffffff33] w-[48px] h-[48px] flex-center rounded-lg">
        <Image
          src={icon}
          alt={title}
          width={27}
          height={27}
          className="h-auto"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-text-1 font-bold">{title}</h3>
        <p className="text-text-1 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default MeetingTypeCard;
