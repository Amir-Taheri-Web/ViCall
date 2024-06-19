import { TMeetingRoomProps } from "@/types/types";
import { FC } from "react";

const MeetingRoom: FC<TMeetingRoomProps> = ({ params: { id } }) => {
  return <div>MeetingRoom - #{id}</div>;
};

export default MeetingRoom;
