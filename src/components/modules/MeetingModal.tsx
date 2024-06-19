import { TDialogProps } from "@/types/types";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { FC } from "react";

const MeetingModal: FC<TDialogProps> = ({ children, title, buttonText }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center w-full">
        {children}
      </DialogTrigger>
      <DialogContent className="bg-dark-2 rounded-lg max-sm:w-[95%] max-sm:mx-auto text-center py-10 px-6 ring-0 outline-none border-none">
        <h3 className="text-3xl font-bold text-text-1 mb-3">{title}</h3>
        <button
          type="button"
          className="bg-blue-1 text-text-1 text-sm py-2 w-full px-4 rounded-md"
        >
          {buttonText}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
