/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useGetCalls from "@/hooks/useGetCalls";
import Card from "@/modules/Card";
import Loader from "@/modules/Loader";
import { useToast } from "@/ui/use-toast";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const RecordingsPage = () => {
  const { callRecordings, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>();

  const { toast } = useToast();

  useEffect(() => {
    const fetchRecordings = async () => {
      if (callRecordings) {
        try {
          const callData = await Promise.all(
            callRecordings.map((meeting) => meeting.queryRecordings())
          );

          const records = callData
            .filter((call) => call.recordings.length > 0)
            .flatMap((call) => call.recordings);

          setRecordings(records);
        } catch (error) {
          console.log(error);
          toast({ title: "An error occurred. Try again" });
        }
      }
    };

    fetchRecordings();
  }, [callRecordings]);

  if (isLoading) return <Loader />;

  return (
    <article className="flex flex-col gap-8">
      <h2 className="text-3xl text-text-1 font-bold">Recorded Meetings</h2>
      {recordings && recordings?.length > 0 ? (
        <ul className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
          {recordings?.map((item) => {
            const title = item?.filename || "Meeting";
            const date =
              item?.start_time?.toLocaleString() ||
              new Date(Date.now()).toLocaleString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

            const meetingLink = item.url || "";

            return (
              <Card
                type="recordings"
                key={item.url}
                title={title}
                date={date}
                meetingLink={meetingLink}
              />
            );
          })}
        </ul>
      ) : (
        <h3 className="text-text-1 font-semibold text-2xl">
          No recorded meetings
        </h3>
      )}
    </article>
  );
};

export default RecordingsPage;
