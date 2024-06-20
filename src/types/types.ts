import { Dispatch, SetStateAction } from "react";

export type TLayout = Readonly<{
  children: React.ReactNode;
}>;

export type TSideBarLinks = {
  icon: string;
  label: string;
  link: string;
}[];

export type TMeetingTypes = "new" | "schedule" | "recordings" | "join";

export type TMeetingCard = {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  type: TMeetingTypes;
  clickHandler?: () => void;
};

export type TDialogProps = TLayout & {
  title: string;
  buttonText: string;
  type: string;
  icon?: string;
  buttonIcon?: string;
  inputLabel?: string;
  input?: JSX.Element;
  textAreaLabel?: string;
  textArea?: JSX.Element;
};

export type TCallValues = {
  dateTime: Date;
  description: string;
  link: string;
};

export type TMeetingRoomProps = {
  params: {
    id: string;
  };
};

export type TMeetingSetupPageProps = {
  setIsSetupComplete: Dispatch<SetStateAction<boolean>>;
};

export type TCallLayout = "grid" | "speaker-left" | "speaker-right";
