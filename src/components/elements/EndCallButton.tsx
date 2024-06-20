"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endHandler = async () => {
    await call.endCall();

    router.push("/");
  };

  return (
    <button type="button" className="bg-red-1 text-text-1 py-2 px-3 rounded-md text-sm" onClick={endHandler}>
      End call for everyone
    </button>
  );
};

export default EndCallButton;
