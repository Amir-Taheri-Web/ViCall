"use client";

import EndCallButton from "@/elements/EndCallButton";
import { cn } from "@/lib/utils";
import Loader from "@/modules/Loader";
import { TCallLayout } from "@/types/types";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

const MeetingRoomPage = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");

  const router = useRouter();

  const [layout, setLayout] = useState<TCallLayout>("speaker-left");

  const [showParticipants, setShowParticipants] = useState<boolean>(false);

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;

      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="flex relative justify-center flex-col items-center mx-2 min-h-screen">
      <div
        className={cn(
          "flex flex-col absolute w-[calc(100%+1rem)] mx-auto top-0 bg-[#1C1F2ECC] z-50 p-4 rounded-br-xl rounded-bl-xl text-text-1 max-w-[650px]",
          { hidden: !showParticipants }
        )}
      >
        <CallParticipantsList onClose={() => setShowParticipants(false)} />
      </div>

      <div className="flex max-w-[1440px] justify-center gap-4 w-full">
        <CallLayout />
      </div>

      <div className="flex flex-wrap gap-4 absolute bottom-4 items-center w-full justify-center">
        <CallControls onLeave={() => router.push("/")} />

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <LayoutList className="text-text-1 bg-dark-4 p-[.6rem] rounded-full w-10 h-10 relative top-1 hover:bg-dark-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-none bg-dark-2">
              <DropdownMenuItem>
                <button
                  type="button"
                  className="text-text-1 font-semibold mb-3"
                  onClick={() => setLayout("grid")}
                >
                  Grid
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  className="text-text-1 font-semibold mb-3"
                  onClick={() => setLayout("speaker-left")}
                >
                  Speaker left
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  className="text-text-1 font-semibold"
                  onClick={() => setLayout("speaker-right")}
                >
                  Speaker right
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <CallStatsButton />

        <button
          type="button"
          onClick={() => setShowParticipants((prev) => !prev)}
        >
          <Users className="text-text-1 bg-dark-4 p-[.5rem] rounded-full w-9 h-9 hover:bg-dark-5" />
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoomPage;
