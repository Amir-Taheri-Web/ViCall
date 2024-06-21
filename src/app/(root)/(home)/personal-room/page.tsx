import PersonalRoomPage from "@/templates/PersonalRoomPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViCall | Personal Room",
  description: "ViCall Personal Room",
};

const PersonalRoom = () => {
  return <PersonalRoomPage />;
};

export default PersonalRoom;
