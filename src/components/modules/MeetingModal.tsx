"use client";

import { TCallValues, TDialogProps } from "@/types/types";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { FC, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk";
import { useToast } from "@/ui/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DatePicker from "react-datepicker";
import Image from "next/image";
import copy from "@/public/icons/copy.svg";
import checked from "@/public/icons/checked.svg";

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

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

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
      const description = values.description || "New meeting";

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

  const copyHandler = () => {
    navigator.clipboard.writeText(meetingLink);
    toast({ title: "Link copied" });
    setCallDetails(undefined);
  };

  const joinHandler = () => {
    if (!values.link)
      toast({ title: "Please type the link first before joining" });

    router.push(values.link);
  };

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center w-full">
        {children}
      </DialogTrigger>
      <DialogContent className="bg-dark-2 gap-6 rounded-lg max-sm:w-[95%] max-sm:mx-auto text-center py-10 px-6 ring-0 outline-none border-none">
        {type === "schedule" && callDetails && (
          <Image
            src={checked}
            alt="created icon"
            width={72}
            height={72}
            className="mx-auto"
          />
        )}
        <h3
          className={cn("text-3xl font-bold text-text-1", {
            "justify-self-start": type === "schedule" && !callDetails,
          })}
        >
          {callDetails ? "Meeting Created" : `${title}`}
        </h3>
        {type === "schedule" && !callDetails && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="description" className="text-text-1">
                Add a Description
              </label>
              <textarea
                id="description"
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
                className="resize-y w-full bg-dark-3 min-h-[75px] border-none outline-none ring-0 text-text-1 p-2 rounded-md"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="description" className="text-text-1">
                Add a Description
              </label>
              <DatePicker
                selected={values.dateTime}
                onChange={(date) => setValues({ ...values, dateTime: date! })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full bg-dark-3 p-2 rounded-md text-text-1 border-none outline-none ring-0"
              />
            </div>
          </div>
        )}
        {type === "join" && (
          <input
            type="text"
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            className="w-full bg-dark-3 p-2 rounded-md text-text-1 border-none outline-none ring-0"
          />
        )}
        <button
          type="button"
          disabled={isLoading}
          onClick={
            type === "new" || (type === "schedule" && !callDetails)
              ? newMeetingHandler
              : type === "schedule" && callDetails
              ? copyHandler
              : type === "join"
              ? joinHandler
              : undefined
          }
          className={cn(
            "bg-blue-1 text-text-1 text-sm py-2 w-full px-4 rounded-md flex gap-2 items-center justify-center",
            { "opacity-50": isLoading }
          )}
        >
          {type === "schedule" && callDetails && (
            <Image src={copy} alt="copy icon" width={15} height={15} />
          )}
          {type === "schedule" && callDetails
            ? "Copy Meeting Link"
            : `${isLoading ? `${buttonText}...` : `${buttonText}`}`}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
