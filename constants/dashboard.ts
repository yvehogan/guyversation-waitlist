  
  import { MdDashboard, MdEvent } from "react-icons/md";
  import { IoIosPeople } from "react-icons/io";
  import { IoNotifications, IoSettingsSharp, IoPerson } from "react-icons/io5";
  // import { IoSettingsSharp } from "react-icons/io5";
  import { IconType } from "react-icons";
  
  interface DashboardLink {
    label: string;
    href: string;
    icon: IconType;
  }
  
  export const MENTOR_DASHBOARD_LINKS: DashboardLink[] = [
    { label: "Dashboard", href: "/mentor", icon: MdDashboard },
    { label: "Mentor", href: "/mentorr", icon: IoPerson },
    { label: "Communities", href: "/mentor/communities", icon: IoIosPeople },
    { label: "Notifications", href: "/mentor/notifications", icon: IoNotifications },
    { label: "Events", href: "/mentor/events", icon: MdEvent },
    { label: "Settings", href: "/mentor/settings", icon: IoSettingsSharp },
  ];