"use client";

import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { TLayout } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loader from "@/modules/Loader";
import tokenProvider from "@/actions/stream.actions";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamProvider: FC<TLayout> = ({ children }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!user || !isLoaded) return;
    if (!apiKey) throw new Error("Stream api key missing!");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamProvider;
