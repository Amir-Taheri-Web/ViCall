import RecordingsPage from "@/templates/RecordingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViCall | Meetings Recordings",
  description: "ViCall meetings recordings",
};

const Recordings = () => {
  return <RecordingsPage />;
};

export default Recordings;
