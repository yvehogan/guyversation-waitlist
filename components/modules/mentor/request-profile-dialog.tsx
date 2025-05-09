"use client"

import { X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface RequestProfileDialogProps {
  request: {
    avatar?: string;
    name: string;
    age: number;
    location: string;
    goal: string;
    careerPath: string;
    interests: string[];
    socials: {
      twitter?: string;
      linkedin?: string;
    };
  }
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept: () => void
  onDecline: () => void
}

export function RequestProfileDialog({ request, open, onOpenChange, onAccept, onDecline }: RequestProfileDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
              <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">Alexander Hamilton</DialogTitle>
              <Badge variant="outline" className="mt-1">
                Mentee
              </Badge>
            </div>
          </div>
          <DialogClose className="h-6 w-6">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Age</h3>
              <p>{request.age}</p>
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p>{request.location}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Goal</h3>
            <p className="mt-1 text-sm">{request.goal}</p>
          </div>

          <div>
            <h3 className="font-medium">Career Path</h3>
            <p className="mt-1">{request.careerPath}</p>
          </div>

          <div>
            <h3 className="font-medium">Interest(s)</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {request.interests.map((interest: string) => (
                <Badge key={interest} variant="outline" className="rounded-full">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium">Socials</h3>
            <div className="mt-2 space-y-2">
              {request.socials.twitter && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span>{request.socials.twitter}</span>
                </div>
              )}
              {request.socials.linkedin && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>{request.socials.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-4">
          <Button
            variant="outline"
            className="flex-1 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={onDecline}
          >
            Decline request
          </Button>
          <Button
            className="flex-1 bg-[var(--color-primary-300)] hover:bg-[var(--color-primary-400)]"
            onClick={onAccept}
          >
            Accept Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
