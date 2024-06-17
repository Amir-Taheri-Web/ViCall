import { TSideBarLinks } from "@/types/types";

const SIDEBAR_LINKS: TSideBarLinks = [
  { icon: "/icons/Home.svg", label: "Home", link: "/" },
  { icon: "/icons/upcoming.svg", label: "Upcoming", link: "/upcoming" },
  { icon: "/icons/previous.svg", label: "Previous", link: "/previous" },
  { icon: "/icons/recordings.svg", label: "Recordings", link: "/recordings" },
  {
    icon: "/icons/add-personal.svg",
    label: "Personal Room",
    link: "/personal-room",
  },
];

export { SIDEBAR_LINKS };
