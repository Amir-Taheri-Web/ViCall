"use client";

import { TCallValues, TDialogProps } from "@/types/types";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { FC, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk";
import { useToast } from "@/ui/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const MeetingModal: FC<TDialogProps> = ({
  children,
  title,
  buttonText,
  type,
}) => {
  const [values, setValues] = useState<TCallValues>({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const router = useRouter();

  const newMeetingHandler = async () => {
    if (!client || !user) return;
    setIsLoading(true);

    try {
      if (!values.dateTime) toast({ title: "Please select a date and time" });

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      toast({ title: "Meeting created" });
      if (!values.description) router.push(`/meeting/${call.id}`);
    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create meeting" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center w-full">
        {children}
      </DialogTrigger>
      <DialogContent className="bg-dark-2 rounded-lg max-sm:w-[95%] max-sm:mx-auto text-center py-10 px-6 ring-0 outline-none border-none">
        <h3 className="text-3xl font-bold text-text-1 mb-3">{title}</h3>
        <button
          type="button"
          disabled={isLoading}
          onClick={type === "new" ? newMeetingHandler : undefined}
          className={cn(
            "bg-blue-1 text-text-1 text-sm py-2 w-full px-4 rounded-md",
            { "opacity-50": isLoading }
          )}
        >
          {isLoading ? `${buttonText}...` : `${buttonText}`}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
