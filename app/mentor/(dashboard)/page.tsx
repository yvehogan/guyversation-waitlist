import { DashboardHeader } from "@/components/modules/mentor-dashboard/dashboard-header";
import { OverviewCards } from "@/components/modules/mentor-dashboard/overview-cards";
import { RequestNotifications } from "@/components/modules/mentor-dashboard/request-notifications";
import { UpcomingSessions } from "@/components/modules/mentor-dashboard/upcoming-session";

export default function DashboardPage() {
  return (
      <div className="py-6 w-full">
        <DashboardHeader />
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[70%] space-y-4">
            <h2 className="text-xl font-medium">Overview</h2>
            <OverviewCards />
            <RequestNotifications />
          </div>
          <div className="lg:w-[30%]">
            <UpcomingSessions />
          </div>
        </div>
      </div>
  )
}