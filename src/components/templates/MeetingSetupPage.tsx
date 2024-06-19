"use client";

import { TMeetingSetupPageProps } from "@/types/types";
import {
  VideoPreview,
  useCall,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import { FC, useEffect, useState } from "react";

const MeetingSetupPage: FC<TMeetingSetupPageProps> = ({
  setIsSetupComplete,
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState<boolean>(false);

  const call = useCall();

  if (!call) throw new Error("Call must be used inside StreamCall component");

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.microphone, call?.camera]);

  const callHandler = () => {
    call.join();
    setIsSetupComplete(true);
  };

  return (
    <section className="flex-center gap-8 flex-col min-h-screen max-sm:w-[95%] mx-auto">
      <h1 className="text-2xl text-text-1 font-bold">Meeting Setup</h1>

      <div className="w-full flex-center">
        <VideoPreview />
      </div>

      <div className="flex items-center gap-4 flex-wrap justify-center">
        <label className="text-text-1 font-semibold flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>

        <DeviceSettings />
      </div>

      <button type="button" className="bg-green-1 text-text-1 px-4 py-3 font-semibold text-sm rounded-md" onClick={callHandler}>
        Join meeting
      </button>
    </section>
  );
};

export default MeetingSetupPage;
