import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type RequestItem = {
  id: string;
  name: string;
  age: number;
  location: string;
  time: string;
  avatar: string;
};

const requestItems: RequestItem[] = [
  {
    id: "1",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "7",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    name: "John Adams",
    age: 14,
    location: "Lagos, Nigeria",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function RequestNotifications() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-medium">
            Request Notifications{" "}
            <span className="text-sm text-grey-500">(7)</span>
          </h3>
        </div>
        <Button variant="link" className="text-primary-400 text-sm">
          See all
        </Button>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-y-auto pr-2 pb-28">
        <div className="space-y-4">
          {requestItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-[#DADADA] py-3"
            >
              <div className="w-1/3 flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="profile image"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-medium text-sm">{item.name}</p>
              </div>
              <span className="text-neutral-100 text-xs">{item.age}</span>
              <span className="text-neutral-100 text-xs">{item.location}</span>
              <span className="text-neutral-100 text-xs">{item.time}</span>
              <Button variant="outline" size="sm" className="text-xs font-normal">
                View Request
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
