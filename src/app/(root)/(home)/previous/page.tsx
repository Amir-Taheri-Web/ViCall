import PreviousPage from "@/templates/PreviousPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViCall | Previous Meetings",
  description: "ViCall previous meetings",
};

const Previous = () => {
  return <PreviousPage />;
};

export default Previous;
