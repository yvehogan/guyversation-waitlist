import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
import { Calendar, Clock } from "lucide-react";

interface CreateEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateEvent: (eventData: EventFormData) => void;
}

export interface EventFormData {
  title: string;
  description: string;
  location: string;
  category: string;
  date: string;
  time: string;
}

export function CreateEventDialog({
  open,
  onOpenChange,
  onCreateEvent,
}: CreateEventDialogProps) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleCreateEvent = () => {
    onCreateEvent({
      title: eventTitle,
      description: eventDescription,
      location: eventLocation,
      category: eventCategory,
      date: eventDate,
      time: eventTime,
    });

    // Reset form
    setEventTitle("");
    setEventDescription("");
    setEventLocation("");
    setEventCategory("");
    setEventDate("");
    setEventTime("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl rounded-[30px]">
        <DialogHeader className="border-b border-grey-500 pb-4">
          <DialogTitle className="text-4xl font-medium">
            Create Event
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="event-title">Event Title</Label>
            <Input
              id="event-title"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Insert number only"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 mt-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="mt-1 h-full min-h-[150px]"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className=" gap-7 mt-3">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={eventCategory} onValueChange={setEventCategory}>
                  <SelectTrigger id="category" className="mt-1 w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="fireside">Fireside chat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="col-span-2 mt-20">
              <Label>Schedule</Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div className="relative">
                  <Input
                    id="date"
                    type="text"
                    placeholder="Date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input
                    id="time"
                    type="text"
                    placeholder="Time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="pl-10"
                  />
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          onClick={handleCreateEvent}
          className="w-1/2 mx-auto mt-8"
        >
          Create Event
        </Button>
      </DialogContent>
    </Dialog>
  );
}
