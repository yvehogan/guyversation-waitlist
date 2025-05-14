"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import { CreateCommunityDialog } from "@/components/modules/admin/community/create-community-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Community {
  id: number;
  name: string;
  description: string;
  status: "Open" | "Closed";
  participants: number;
  image: string;
}

export default function CommunityPage() {
  const [createCommunityOpen, setCreateCommunityOpen] = useState(false);
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [groupLimit, setGroupLimit] = useState("");

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const communities: Community[] = [
    {
      id: 1,
      name: "Mind Matters",
      description:
        "Talk about emotions, anxiety, confidence, or anything weighing on your mind.",
      status: "Open",
      participants: 245,
      image: "/banner.png",
    },
    {
      id: 2,
      name: "Ask a Mentor",
      description:
        "For mentees to anonymously ask questions and get answers from verified mentors.",
      status: "Closed",
      participants: 245,
      image: "/banner.png",
    },
    {
      id: 3,
      name: "Manhood & Identity",
      description:
        "Open conversations about what it means to be a man in today's world.",
      status: "Open",
      participants: 245,
      image: "/banner.png",
    },
    {
      id: 4,
      name: "Manhood & Identity",
      description:
        "Open conversations about what it means to be a man in today's world.",
      status: "Open",
      participants: 245,
      image: "/banner.png",
    },
    {
      id: 5,
      name: "Mind Matters",
      description:
        "Talk about emotions, anxiety, confidence, or anything weighing on your mind.",
      status: "Open",
      participants: 245,
      image: "/banner.png",
    },
    {
      id: 6,
      name: "Mind Matters",
      description:
        "Talk about emotions, anxiety, confidence, or anything weighing on your mind.",
      status: "Closed",
      participants: 245,
      image: "/banner.png",
    },
  ];

  const handleCreateCommunity = () => {
    setCreateCommunityOpen(false);
    setCommunityName("");
    setCommunityDescription("");
    setTargetAudience("");
    setPrivacy("");
    setGroupLimit("");
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto pb-16 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-medium mb-6">Communities</h1>
          <Button
            size="lg"
            onClick={() => setCreateCommunityOpen(true)}
            className=""
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Community
          </Button>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500">133 communities created</div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort by:</span>
            <Select defaultValue="size">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {communities.map((community) => (
            <Card key={community.id} className="p-4 border-none shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={community.image || "/placeholder.svg"}
                    alt={community.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex gap-2 items-center">
                        <h3 className="text-lg font-medium">
                          {community.name}
                        </h3>
                        <Badge
                          variant={
                            community.status === "Open"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            community.status === "Open"
                              ? "bg-primary-200 text-primary-300 whitespace-nowrap"
                              : "bg-[#C8202012] text-warning-200 border-none whitespace-nowrap"
                          }
                        >
                          {community.status === "Open" ? "Open" : "Closed"}
                        </Badge>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {community.description}
                      </p>
                    </div>

                    {/* Replace the previous flex layout with this improved one */}
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        <Avatar className="h-7 w-7 border-2 border-white">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="profile image"
                            className="rounded-full"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-7 w-7 border-2 border-white">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="profile image"
                            className="rounded-full"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-7 w-7 border-2 border-white">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="profile image"
                            className="rounded-full"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>

                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {community.participants} participants
                      </span>

                      <div className="relative">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer text-primary-400">
                              <Edit className="mr-2 h-4 w-4 text-primary-400" />
                              Edit details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-warning-200">
                              <Trash2 className="mr-2 h-4 w-4 text-warning-200" />
                              Delete Community
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CreateCommunityDialog
        open={createCommunityOpen}
        onOpenChange={setCreateCommunityOpen}
        onCreateCommunity={handleCreateCommunity}
      />
    </>
  );
}
