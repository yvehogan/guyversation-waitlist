import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";

interface CreateCommunityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateCommunity: () => void;
}

export function CreateCommunityDialog({
  open,
  onOpenChange,
  onCreateCommunity,
}: CreateCommunityDialogProps) {
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [groupLimit, setGroupLimit] = useState("");

  const handleCreateCommunity = () => {
    onCreateCommunity();

    // Reset form
    setCommunityName("");
    setCommunityDescription("");
    setTargetAudience("");
    setPrivacy("");
    setGroupLimit("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl rounded-[30px]">
        <DialogHeader className="border-b border-grey-500 pb-4">
          <DialogTitle className="text-4xl font-medium">
            Create Community
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 mb-4 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <Upload className="h-6 w-6 text-gray-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
              <Plus className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="community-name">Community Name</Label>
            <Input
              id="community-name"
              placeholder="Community Name"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              className="mt-1 w-full"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="target-audience">Target Audience</Label>
            <Select value={targetAudience} onValueChange={setTargetAudience}>
              <SelectTrigger id="target-audience" className="mt-1 w-full">
                <SelectValue placeholder="Select Target audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mentees">Mentees</SelectItem>
                <SelectItem value="mentors">Mentors</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description takes half width */}
          <div className="col-span-2 sm:col-span-1 mt-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              value={communityDescription}
              onChange={(e) => setCommunityDescription(e.target.value)}
              className="mt-1 h-full min-h-[150px]"
            />
          </div>

          {/* Privacy and Group Limit  in a column */}
          <div className="col-span-2 sm:col-span-1 grid gap-7 mt-3">
            <div>
              <Label htmlFor="privacy">Privacy</Label>
              <Select value={privacy} onValueChange={setPrivacy}>
                <SelectTrigger id="privacy" className="mt-1 w-full">
                  <SelectValue placeholder="Select Privacy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="group-limit">Group Limit</Label>
              <Input
                id="group-limit"
                type="number"
                placeholder="Insert number only"
                value={groupLimit}
                onChange={(e) => setGroupLimit(e.target.value)}
                className="mt-1 w-full"
              />
            </div>
          </div>
        </div>
        <Button
          onClick={handleCreateCommunity}
          size="lg"
          className="w-1/2 mx-auto"
        >
          Create community
        </Button>
      </DialogContent>
    </Dialog>
  );
}
