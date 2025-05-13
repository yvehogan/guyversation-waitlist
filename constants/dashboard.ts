  
  import { MdDashboard, MdEvent } from "react-icons/md";
  import { IoIosPeople } from "react-icons/io";
  import { IoNotifications, IoSettingsSharp, IoPerson } from "react-icons/io5";
  import { IconType } from "react-icons";
  
  interface DashboardLink {
    label: string;
    href: string;
    icon: IconType;
  }
  
  export const MENTOR_DASHBOARD_LINKS: DashboardLink[] = [
    { label: "Dashboard", href: "/dashboard", icon: MdDashboard },
    { label: "Mentor", href: "/dashboard/mentor", icon: IoPerson },
    { label: "Communities", href: "/dashboard/communities", icon: IoIosPeople },
    { label: "Notifications", href: "/dashboard/notifications", icon: IoNotifications },
    { label: "Events", href: "/dashboard/events", icon: MdEvent },
    { label: "Settings", href: "/mentor/settings", icon: IoSettingsSharp },
  ];