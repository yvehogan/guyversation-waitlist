"use client"

import { User, MessageSquare } from "lucide-react"

interface MentorTabsProps {
  activeTab: "mentees" | "requests"
  onTabChange: (tab: "mentees" | "requests") => void
}

export function MentorTabs({ activeTab, onTabChange }: MentorTabsProps) {
  return (
    <div className="flex space-x-4">
      <button
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
          activeTab === "mentees" ? "bg-[#F15A29] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => onTabChange("mentees")}
      >
        <User className="h-5 w-5" />
        Mentees
      </button>
      <button
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
          activeTab === "requests" ? "bg-[#F15A29] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => onTabChange("requests")}
      >
        <MessageSquare className="h-5 w-5" />
        Requests
      </button>
    </div>
  )
}
