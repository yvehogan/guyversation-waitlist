"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface JournalDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  reason: string
  onReasonChange: (reason: string) => void
  onSubmit: () => void
}

export function JournalDialog({
  open,
  onOpenChange,
  reason,
  onReasonChange,
  onSubmit,
}: JournalDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogTitle className="text-center text-lg font-medium">
          Write a journal
        </DialogTitle>
        <div className="mt-4">
          <Textarea
            placeholder="Your Feedback..."
            value={reason}
            onChange={(e) => onReasonChange(e.target.value)}
            className="min-h-[200px]"
          />
        </div>

        <DialogFooter className="mt-6 flex justify-center gap-4 sm:justify-center">
          <Button size='lg' onClick={onSubmit} className="w-full">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
