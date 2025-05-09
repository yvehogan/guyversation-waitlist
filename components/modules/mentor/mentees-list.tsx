"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mentee } from "@/types"

interface MenteesListProps {
  onViewProfile: (mentee: Mentee) => void
  onChatWithMentee: (mentee: Mentee) => void
}

const mentees = [
  {
    id: "1",
    name: "Ezekiel David Ayo",
    email: "ezekiel.david@example.com",
    age: 17,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    careerPath: "Product Manager",
    interests: ["Technology", "Design"],
    socials: {
      twitter: "Alex Hamilton",
      linkedin: "Alexander Hamilton",
    },
  },
  {
    id: "2",
    name: "Ezekiel David Ayo",
    email: "ezekiel.david@example.com",
    age: 17,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    careerPath: "Product Manager",
    interests: ["Technology", "Design"],
    socials: {
      twitter: "Alex Hamilton",
      linkedin: "Alexander Hamilton",
    },
  },
  {
    id: "3",
    name: "Ezekiel David Ayo",
    email: "ezekiel.david@example.com",
    age: 17,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    careerPath: "Product Manager",
    interests: ["Technology", "Design"],
    socials: {
      twitter: "Alex Hamilton",
      linkedin: "Alexander Hamilton",
    },
  },
  {
    id: "4",
    name: "Ezekiel David Ayo",
    email: "ezekiel.david@example.com",
    age: 17,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    careerPath: "Product Manager",
    interests: ["Technology", "Design"],
    socials: {
      twitter: "Alex Hamilton",
      linkedin: "Alexander Hamilton",
    },
  },
  {
    id: "5",
    name: "Ezekiel David Ayo",
    email: "ezekiel.david@example.com",
    age: 17,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    careerPath: "Product Manager",
    interests: ["Technology", "Design"],
    socials: {
      twitter: "Alex Hamilton",
      linkedin: "Alexander Hamilton",
    },
  },
]

export function MenteesList({ onViewProfile }: MenteesListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[#222222] text-white">
          <tr>
            <th className="py-3 px-4 text-left font-medium w-12">#</th>
            <th className="py-3 px-4 text-left font-medium">Name</th>
            <th className="py-3 px-4 text-left font-medium">Age</th>
            <th className="py-3 px-4 text-left font-medium">Location</th>
            <th className="py-3 px-4 text-left font-medium">Time</th>
            <th className="py-3 px-4 text-right font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {mentees.map((mentee, index) => (
            <tr key={mentee.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-500">{index + 1}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={mentee.avatar || "/placeholder.svg"} alt={mentee.name} />
                    <AvatarFallback>{mentee.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{mentee.name}</span>
                </div>
              </td>
              <td className="py-4 px-4">{mentee.age}</td>
              <td className="py-4 px-4">{mentee.location}</td>
              <td className="py-4 px-4">{mentee.time}</td>
              <td className="py-4 px-4 text-right">
                <Button
                  variant="outline"
                  className="border-[var(--color-primary-300)] text-[var(--color-primary-300)]"
                  onClick={() => onViewProfile(mentee)}
                >
                  View Profile
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
