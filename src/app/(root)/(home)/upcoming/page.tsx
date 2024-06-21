import UpcomingPage from "@/templates/UpcomingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViCall | Upcoming Meetings",
  description: "ViCall upcoming meetings",
};

const Upcoming = () => {
  return <UpcomingPage />;
};

export default Upcoming;
