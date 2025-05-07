import React from "react";
import { Button } from "@/components/ui/button";
import { IoLogOut } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const SidebarUser = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex h-16 min-h-16 w-full items-center justify-">
      <div className="flex px-7 items-center w-full">
          <button className="text-warning-200 flex items-center gap-2 text-lg font-light" onClick={() => setOpen(true)}>
            <IoLogOut className="h-8 w-8"/> Logout
          </button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to logout? All unsaved data will be lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
           
            <Button variant="destructive" >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};