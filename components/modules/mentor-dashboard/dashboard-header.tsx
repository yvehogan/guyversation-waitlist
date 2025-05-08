import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function Appbar() {
  return (
    <header className="flex justify-between h-38 w-full items-center gap-x-10 px-10 md:h-20 mt-7">
      <div>
        <h1 className="text-4xl font-medium tracking-tight">Welcome back, Magnus!</h1>
        <p className="text-neutral-200 mt-2">Let&apos;s see what&apos;s on your plate today.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search" className="w-full min-w-[200px] md:w-[300px] rounded-full pl-10 bg-white" />
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="profile image" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-base font-medium">Magnus Carlsen</p>
            <p className="text-xs text-neutral-200">Mentor</p>
          </div>
        </div>
      </div>
    </header>
  )
}
