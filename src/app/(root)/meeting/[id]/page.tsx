"use client";

import { TMeetingRoomProps } from "@/types/types";
import { FC, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetupPage from "@/templates/MeetingSetupPage";
import MeetingRoomPage from "@/templates/MeetingRoomPage";
import useGetCallById from "@/hooks/useGetCallById";
import Loader from "@/modules/Loader";

const MeetingRoom: FC<TMeetingRoomProps> = ({ params: { id } }) => {
  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <article>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetupPage setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoomPage />
          )}
        </StreamTheme>
      </StreamCall>
    </article>
  );
};

export default MeetingRoom;
