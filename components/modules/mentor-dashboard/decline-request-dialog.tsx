"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

type RequestItem = {
  id: string
  name: string
  age: number
  location: string
  time: string
  avatar: string
  goal: string
  careerPath: string
  interests: string[]
  socials: {
    twitter?: string
    linkedin?: string
  }
}

interface DeclineRequestDialogProps {
  request: RequestItem
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function DeclineRequestDialog({ open, onOpenChange, onConfirm }: DeclineRequestDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] text-center">
        <Image src='/svgs/question.svg' width={130} height={130} alt="Decline Request" className="mx-auto mb-4" />
        <DialogTitle className="text-xl font-medium">Are you sure you want to decline this request?</DialogTitle>
        <DialogFooter className="mt-6 flex justify-between gap-4 sm:justify-center w-full">
          <Button variant="outline" size='lg' onClick={() => onOpenChange(false)} className="min-w-[170px]">
            Cancel
          </Button>
          <Button onClick={onConfirm} size='lg' className=" bg-warning-200 hover:bg-warning-200 text-white min-w-[170px]">
            Decline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
