import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddUser: (email: string, role: string) => void;
}

export function AddUserDialog({ 
  open, 
  onOpenChange, 
  onAddUser 
}: AddUserDialogProps) {
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleSubmit = () => {
    onAddUser(email, userRole);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[450px] flex flex-col overflow-y-auto"
        style={{
          transform: "translateX(100%)",
          marginTop: "0vh",
          marginBottom: "5vh",
          height: "95vh",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-4xl font-medium">
            Add New User
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-2 py-6">
          <div className="grid gap-2 mb-5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2 w-full">
            <Label htmlFor="role">User Role</Label>
            <Select value={userRole} onValueChange={setUserRole}>
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select User Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mentee">Mentee</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter className="mt-auto pb-6">
          <Button
            size='lg'
            className="w-full"
            onClick={handleSubmit}
          >
            Add User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}