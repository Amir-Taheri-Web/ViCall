"use client";

import useGetCallById from "@/hooks/useGetCallById";
import Loader from "@/modules/Loader";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";
import { useToast } from "@/ui/use-toast";

const PersonalRoomPage = () => {
  const { user, isLoaded } = useUser();

  const router = useRouter();

  const meetingId = user?.id || "";

  const client = useStreamVideoClient();
  const call = useGetCallById(meetingId);

  const { toast } = useToast();

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call.call) {
      const newCall = client.call("default", meetingId!);

      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const startHandler = () => {
    startRoom();
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(meetingLink);
    toast({ title: "Link Copied" });
  };

  if (isLoaded) <Loader />;

  return (
    <article className="flex flex-col gap-12">
      <h2 className="text-3xl text-text-1 font-bold">Personal Room</h2>

      <p className="text-text-1 text-xl max-sm:text-base font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden max-sm:w-full max-2xl:w-[700px] max-xl:w-[650px] max-lg:w-[550px] max-md:w-[400px]">
        <span className="text-text-2 mr-2">Topic: </span>
        {`${user?.firstName}'s meeting room`}
      </p>

      <p className="text-text-1 text-xl max-sm:text-base font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden max-sm:w-full max-2xl:w-[700px] max-xl:w-[650px] max-lg:w-[550px] max-md:w-[400px]">
        <span className="text-text-2 mr-2">Meeting ID: </span>
        {meetingId}
      </p>

      <p className="text-text-1 text-xl max-sm:text-base font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden max-sm:w-full max-2xl:w-[700px] max-xl:w-[650px] max-lg:w-[550px] max-md:w-[400px]">
        <span className="text-text-2 mr-2">Invite Link: </span>
        {meetingLink}
      </p>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={startHandler}
          className="flex items-center gap-2 text-text-1 text-sm font-semibold bg-blue-1 px-3 py-1 h-[40px] rounded-md"
        >
          Start Meeting
        </button>
        <button
          type="button"
          onClick={copyHandler}
          className="flex items-center gap-2 text-text-1 text-sm font-semibold bg-dark-3 px-3 py-1 h-[40px] rounded-md"
        >
          <Image src={copy} alt="copy icon" width={15} height={15} />
          Copy Invitation
        </button>
      </div>
    </article>
  );
};

export default PersonalRoomPage;
